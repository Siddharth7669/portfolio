import type { SVGProps } from "react";

const SBert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Sentence-BERT</title>
    <defs>
      <linearGradient id="sbert-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#sbert-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="5" width="24" height="22" rx="4" />
      <path d="M9 11H20M9 16H23M9 21H17" />
      <path d="M23 7V12M20.5 9.5H25.5" />
    </g>
  </svg>
);

export { SBert };
