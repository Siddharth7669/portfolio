import type { SVGProps } from "react";

const ContextAnalysis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Contextual Text Analysis</title>
    <defs>
      <linearGradient id="context-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#context-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="5" width="19" height="22" rx="3" />
      <path d="M9 11H18M9 15H17M9 19H14" />
      <circle cx="23" cy="21" r="5" fill="currentColor" fillOpacity=".12" />
      <path d="M26.5 24.5L29 27M20.5 21H25.5M23 18.5V23.5" />
    </g>
  </svg>
);

export { ContextAnalysis };
