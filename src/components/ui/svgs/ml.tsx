import type { SVGProps } from "react";

const ML = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Machine Learning</title>
    <defs>
      <linearGradient id="ml-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>

    <g
      stroke="url(#ml-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 8L16 5L24 8L27 16L24 24L16 27L8 24L5 16L8 8Z" />
      <path d="M8 8L16 16L24 8M5 16H27M8 24L16 16L24 24M16 5V27" />
    </g>

    <g fill="currentColor" stroke="url(#ml-gradient)" strokeWidth="1.5">
      <circle cx="16" cy="5" r="2.3" />
      <circle cx="8" cy="8" r="2.3" />
      <circle cx="24" cy="8" r="2.3" />
      <circle cx="5" cy="16" r="2.3" />
      <circle cx="16" cy="16" r="2.8" />
      <circle cx="27" cy="16" r="2.3" />
      <circle cx="8" cy="24" r="2.3" />
      <circle cx="16" cy="27" r="2.3" />
      <circle cx="24" cy="24" r="2.3" />
    </g>
  </svg>
);

export { ML };
