import type { SVGProps } from "react";

const ImageProcessing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Image Processing</title>
    <defs>
      <linearGradient
        id="image-processing-gradient"
        x1="4"
        y1="4"
        x2="28"
        y2="28"
      >
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#image-processing-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="5" width="24" height="22" rx="3" />
      <circle cx="11" cy="12" r="2" />
      <path d="M5 22L12 16L17 20L21 16L27 22" />
      <path d="M23 4V10M20 7H26" />
    </g>
  </svg>
);

export { ImageProcessing };
