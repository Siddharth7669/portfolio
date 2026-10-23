import type { SVGProps } from "react";

const LLM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Large Language Model</title>
    <defs>
      <linearGradient id="llm-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#llm-gradient)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="5" width="24" height="22" rx="5" />
      <path d="M10 12L13 15L10 18M16 18H22" />
      <circle cx="22" cy="10" r="1" fill="currentColor" />
      <circle cx="25" cy="22" r="1" fill="currentColor" />
      <circle cx="7" cy="22" r="1" fill="currentColor" />
    </g>
  </svg>
);

export { LLM };
