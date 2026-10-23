import type { SVGProps } from "react";

const SQL = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>MySQL</title>
    <defs>
      <linearGradient id="sql-gradient" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#00A4C7" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>

    <g
      stroke="url(#sql-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="13" cy="7" rx="9" ry="3.5" />
      <path d="M4 7V19C4 20.9 8 22.5 13 22.5" />
      <path d="M22 7V12" />
      <path d="M4 13C4 14.9 8 16.5 13 16.5" />
      <path d="M4 19C4 20.9 8 22.5 13 22.5" />
      <path d="M18 16L24 13L29 16V23L24 26L18 23V16Z" />
      <path d="M18 16L24 19L29 16M24 19V26" />
    </g>
  </svg>
);

export { SQL };
