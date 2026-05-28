export type InquiryType = 'contact' | 'rfq';

export type UploadedAttachment = {
  name: string;
  path: string;
  size: number;
  type: string;
};

type InquiryPayload = {
  type: InquiryType;
  contact: Record<string, FormDataEntryValue | null>;
  product_requirements?: Record<string, FormDataEntryValue | null>;
  project?: Record<string, FormDataEntryValue | null>;
  message?: FormDataEntryValue | null;
  source_path: string;
  attachments?: UploadedAttachment[];
  status?: 'new';
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const attachmentBucket = 'rfq-attachments';
const maxUploadSize = 20 * 1024 * 1024;
const allowedAttachmentExtensions = new Set(['pdf', 'dwg', 'jpg', 'jpeg']);

function requireConfig() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
  }
  return { supabaseUrl: supabaseUrl.replace(/\/$/, ''), supabaseAnonKey };
}

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '') || 'attachment';
}

async function readErrorMessage(response: Response, fallback: string) {
  try {
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await response.json() as { message?: string; error?: string; msg?: string };
      return body.message || body.error || body.msg || fallback;
    }
    const text = await response.text();
    return text ? `${fallback} ${text}` : fallback;
  } catch {
    return fallback;
  }
}

function validateAttachment(file: File) {
  if (file.size > maxUploadSize) {
    throw new Error('Attachment must be 20MB or smaller.');
  }

  const extension = file.name.split('.').pop()?.toLowerCase() || '';
  if (!allowedAttachmentExtensions.has(extension)) {
    throw new Error('Attachment must be a PDF, DWG, JPG, or JPEG file.');
  }
}

export async function uploadRfqAttachment(file: File): Promise<UploadedAttachment> {
  validateAttachment(file);

  const config = requireConfig();
  const path = `rfq/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${sanitizeFilename(file.name)}`;
  const response = await fetch(`${config.supabaseUrl}/storage/v1/object/${attachmentBucket}/${path}`, {
    method: 'POST',
    headers: {
      apikey: config.supabaseAnonKey,
      Authorization: `Bearer ${config.supabaseAnonKey}`,
      'Content-Type': file.type || 'application/octet-stream',
      'x-upsert': 'false',
    },
    body: file,
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response, 'Could not upload the attachment. Please try again or email the file directly.'));
  }

  return {
    name: file.name,
    path,
    size: file.size,
    type: file.type || 'application/octet-stream',
  };
}

export async function deleteRfqAttachment(attachment: UploadedAttachment) {
  const config = requireConfig();
  const response = await fetch(`${config.supabaseUrl}/storage/v1/object/${attachmentBucket}`, {
    method: 'DELETE',
    headers: {
      apikey: config.supabaseAnonKey,
      Authorization: `Bearer ${config.supabaseAnonKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prefixes: [attachment.path] }),
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response, 'Could not remove uploaded attachment.'));
  }
}

export async function submitInquiry(payload: InquiryPayload) {
  const config = requireConfig();
  const response = await fetch(`${config.supabaseUrl}/rest/v1/inquiries`, {
    method: 'POST',
    headers: {
      apikey: config.supabaseAnonKey,
      Authorization: `Bearer ${config.supabaseAnonKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ ...payload, status: payload.status ?? 'new' }),
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response, 'Could not submit your request. Please try again or contact us by email.'));
  }
}
