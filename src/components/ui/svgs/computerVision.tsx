import type { SVGProps } from "react";

const ComputerVision = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Computer Vision</title>
    <defs>
      <linearGradient id="vision-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#vision-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 16S7.5 7 16 7S29 16 29 16S24.5 25 16 25S3 16 3 16Z" />
      <circle cx="16" cy="16" r="5" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      <path d="M16 3V5M16 27V29M3 16H5M27 16H29" />
    </g>
  </svg>
);

export { ComputerVision };
