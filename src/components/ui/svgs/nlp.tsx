import type { SVGProps } from "react";

const NLP = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Natural Language Processing</title>
    <defs>
      <linearGradient id="nlp-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#nlp-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 6H21A4 4 0 0 1 25 10V17A4 4 0 0 1 21 21H13L7 26V21H5A3 3 0 0 1 2 18V9A3 3 0 0 1 5 6Z" />
      <path d="M9 12H18M9 16H15" />
      <path d="M21 24H26L29 27V17" />
    </g>
  </svg>
);

export { NLP };
