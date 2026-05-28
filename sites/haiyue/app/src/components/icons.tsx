import React from 'react';

interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

/* ═════════════════════ PRODUCT FEATURE ICONS ═════════════════════ */

export const IconReliableSealing: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l2.5 2.5L16 9" />
  </svg>
);

export const IconLowTorque: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconVersatileOptions: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="6" height="6" />
    <rect x="14" y="4" width="6" height="6" />
    <rect x="4" y="14" width="6" height="6" />
    <rect x="14" y="14" width="6" height="6" />
  </svg>
);

export const IconLongServiceLife: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4l2.5 1.5" />
  </svg>
);

/* ═════════════════════ APPLICATION ICONS ═════════════════════ */

export const IconWaterTreatment: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 0-7 5.5-7 11.5a7 7 0 0 0 14 0C19 7.5 12 2 12 2z" />
    <path d="M8 16c1.5 1.5 3 2 4 2s2.5-.5 4-2" />
  </svg>
);

export const IconChemicalProcessing: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6" />
    <path d="M10 3v7L7 20h10l-3-10V3" />
    <path d="M9 15h6" />
  </svg>
);

export const IconOilGas: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22h16" />
    <path d="M8 22V12l4-6 4 6v10" />
    <path d="M8 12h8" />
    <circle cx="12" cy="4" r="1.5" />
  </svg>
);

export const IconGeneralPipeline: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10h4l2-3h6l2 3h4" />
    <path d="M3 14h4l2 3h6l2-3h4" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

export const IconHVAC: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="5" />
  </svg>
);

/* ═════════════════════ QUALITY / TESTING ICONS ═════════════════════ */

export const IconPressureTesting: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v6l3 2" />
    <path d="M8 18h8" />
  </svg>
);

export const IconLeakageTesting: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c-3 4-6 7-6 10.5a6 6 0 0 0 12 0C18 9 15 6 12 2z" />
    <path d="M9 17l3 4 3-4" />
  </svg>
);

export const IconMaterialInspection: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8z" />
    <path d="M14 2v6h6" />
    <path d="M9 13l2 2 4-4" />
  </svg>
);

export const IconExportPackaging: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" />
    <path d="M12 13l9-5" />
    <path d="M12 13V3" />
    <path d="M3 8l9 5" />
  </svg>
);

/* ═════════════════════ DOCUMENT / ACTION ICONS ═════════════════════ */

export const IconDocument: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

export const IconDownload: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);

export const IconRequestQuote: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
    <path d="M8 9h8" />
    <path d="M8 13h5" />
  </svg>
);

export const IconArrowRight: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

/* ═════════════════════ UTILITY / CONTACT ICONS ═════════════════════ */

export const IconSearch: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

export const IconPhone: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.67 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.21a2 2 0 0 1 2.11-.45c.9.31 1.84.54 2.8.67A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const IconEmail: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

export const IconLocation: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconCheck: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const IconChevronDown: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const IconMenu: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h18" />
    <path d="M3 6h18" />
    <path d="M3 18h18" />
  </svg>
);

export const IconClose: React.FC<IconProps> = ({
  size = 24, strokeWidth = 1.75, className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);
