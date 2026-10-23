import type { SVGProps } from "react";

const DataTransformation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Data Transformation</title>
    <defs>
      <linearGradient id="transform-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#transform-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 8H15M11 4L15 8L11 12" />
      <path d="M28 24H17M21 20L17 24L21 28" />
      <rect x="4" y="15" width="10" height="13" rx="2" />
      <rect x="18" y="4" width="10" height="13" rx="2" />
      <path d="M7 19H11M7 23H11M21 8H25M21 12H25" />
    </g>
  </svg>
);

export { DataTransformation };
