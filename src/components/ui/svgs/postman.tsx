import type { SVGProps } from "react";

const Postman = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Postman</title>
    <circle cx="16" cy="16" r="13" stroke="#FF6C37" strokeWidth="2" />
    <g
      stroke="#FF6C37"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="19" cy="11" r="3" />
      <path d="M17 13L9 21L15 20L23 13" />
      <path d="M9 21L7 24L12 22" />
      <path d="M19 8L21 5" />
    </g>
  </svg>
);

export { Postman };
