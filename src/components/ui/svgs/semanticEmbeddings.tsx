import type { SVGProps } from "react";

const SemanticEmbeddings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Semantic Embeddings</title>
    <defs>
      <linearGradient id="embedding-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
    </defs>
    <g stroke="url(#embedding-gradient)" strokeWidth="1.5">
      <path d="M6 8L13 5L22 8L27 15L23 24L14 27L6 22L4 14Z" />
      <path d="M6 8L16 16L22 8M4 14L16 16L27 15M6 22L16 16L23 24M13 5L16 16L14 27" />
    </g>
    <g fill="currentColor" stroke="url(#embedding-gradient)" strokeWidth="1.5">
      <circle cx="6" cy="8" r="2" />
      <circle cx="13" cy="5" r="2" />
      <circle cx="22" cy="8" r="2" />
      <circle cx="27" cy="15" r="2" />
      <circle cx="23" cy="24" r="2" />
      <circle cx="14" cy="27" r="2" />
      <circle cx="6" cy="22" r="2" />
      <circle cx="4" cy="14" r="2" />
      <circle cx="16" cy="16" r="2.5" />
    </g>
  </svg>
);

export { SemanticEmbeddings };
