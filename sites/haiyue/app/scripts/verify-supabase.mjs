import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const env = loadEnvFile(path.join(rootDir, '.env.local'));
const fallbackEnv = loadEnvFile(path.join(rootDir, '.env'));

const supabaseUrl = process.env.VITE_SUPABASE_URL || env.VITE_SUPABASE_URL || fallbackEnv.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY || fallbackEnv.VITE_SUPABASE_ANON_KEY;
const attachmentBucket = 'rfq-attachments';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase config. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in app/.env.local or the shell environment.');
  process.exit(1);
}

const baseUrl = supabaseUrl.replace(/\/$/, '');
const authHeaders = {
  apikey: supabaseAnonKey,
  Authorization: `Bearer ${supabaseAnonKey}`,
};

async function main() {
  const summary = {
    contactInsert: null,
    attachmentUpload: null,
    rfqInsert: null,
  };

  console.log(`Verifying Supabase integration against ${baseUrl}`);

  const contactPayload = {
    type: 'contact',
    contact: {
      name: 'Codex Verify Contact',
      email: 'verify-contact@example.com',
      company: 'Codex QA',
      country: 'China',
    },
    message: 'Automated contact verification record.',
    source_path: '/__verify__/contact',
    status: 'test',
  };
  summary.contactInsert = await insertInquiry(contactPayload);
  console.log(`Contact insert OK (id=${summary.contactInsert.id})`);

  const attachment = await uploadVerificationPdf();
  summary.attachmentUpload = attachment;
  console.log(`Attachment upload OK (${attachment.path})`);

  const rfqPayload = {
    type: 'rfq',
    contact: {
      full_name: 'Codex Verify RFQ',
      company: 'Codex QA',
      email: 'verify-rfq@example.com',
      phone: '+86 13800000000',
      country: 'China',
      job_title: 'QA',
    },
    product_requirements: {
      product_type: 'Ball Valve',
      size: 'DN50',
      pressure_class: 'Class 150',
      body_material: 'WCB',
      connection_type: 'Flanged RF',
      quantity: '10 pcs',
      medium: 'Water',
      temperature: '0-80C',
      operating_pressure: '1.6 MPa',
    },
    project: {
      delivery_time: '2-4 weeks',
      destination_port: 'Shanghai',
      incoterms: 'FOB',
      source: 'supabase-verify-script',
    },
    message: 'Automated RFQ verification record.',
    source_path: '/__verify__/rfq',
    attachments: [attachment],
    status: 'test',
  };
  summary.rfqInsert = await insertInquiry(rfqPayload);
  console.log(`RFQ insert OK (id=${summary.rfqInsert.id})`);

  console.log('\nVerification summary:');
  console.log(JSON.stringify(summary, null, 2));
}

async function insertInquiry(payload) {
  const response = await fetch(`${baseUrl}/rest/v1/inquiries`, {
    method: 'POST',
    headers: {
      ...authHeaders,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'Inquiry insert failed.'));
  }

  const body = await response.json();
  const row = body[0];
  if (!row?.id) {
    throw new Error('Inquiry insert succeeded but did not return a row id.');
  }
  return row;
}

async function uploadVerificationPdf() {
  const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 200 200] >>
endobj
trailer
<< /Root 1 0 R >>
%%EOF`;
  const pathName = `rfq/${new Date().toISOString().slice(0, 10)}/verify-${Date.now()}.pdf`;
  const response = await fetch(`${baseUrl}/storage/v1/object/${attachmentBucket}/${pathName}`, {
    method: 'POST',
    headers: {
      ...authHeaders,
      'Content-Type': 'application/pdf',
      'x-upsert': 'false',
    },
    body: Buffer.from(content, 'utf8'),
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'Attachment upload failed.'));
  }

  return {
    name: 'verify.pdf',
    path: pathName,
    size: Buffer.byteLength(content, 'utf8'),
    type: 'application/pdf',
  };
}

async function readError(response, fallback) {
  try {
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await response.json();
      return body.message || body.error || JSON.stringify(body);
    }
    const text = await response.text();
    return text || fallback;
  } catch {
    return fallback;
  }
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const result = {};
  const content = fs.readFileSync(filePath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) {
      continue;
    }
    const separator = line.indexOf('=');
    if (separator === -1) {
      continue;
    }
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
    result[key] = value;
  }
  return result;
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
