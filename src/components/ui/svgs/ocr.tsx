import type { SVGProps } from "react";

const OCR = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Optical Character Recognition</title>
    <defs>
      <linearGradient id="ocr-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#EAB308" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#ocr-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 4H5V9M22 4H27V9M5 23V28H10M27 23V28H22" />
      <rect x="8" y="8" width="16" height="16" rx="2" />
      <path d="M11 19L16 12L21 19M13 17H19" />
    </g>
  </svg>
);

export { OCR };
