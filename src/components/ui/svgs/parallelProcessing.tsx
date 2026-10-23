import type { SVGProps } from "react";

const ParallelProcessing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Parallel Processing</title>
    <defs>
      <linearGradient id="parallel-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#parallel-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="11" y="3" width="10" height="6" rx="2" />
      <rect x="3" y="23" width="8" height="6" rx="2" />
      <rect x="12" y="23" width="8" height="6" rx="2" />
      <rect x="21" y="23" width="8" height="6" rx="2" />
      <path d="M16 9V15M7 23V18H25V23M16 15H7M16 15H25" />
      <circle cx="16" cy="15" r="2" fill="currentColor" />
    </g>
  </svg>
);

export { ParallelProcessing };
