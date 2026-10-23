import type { SVGProps } from "react";

const RecommendationSystem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Recommendation System</title>
    <defs>
      <linearGradient
        id="recommendation-gradient"
        x1="4"
        y1="4"
        x2="28"
        y2="28"
      >
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    <g
      stroke="url(#recommendation-gradient)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="7" r="3" />
      <circle cx="7" cy="24" r="3" />
      <circle cx="25" cy="24" r="3" />
      <path d="M14.5 9.6L8.5 21M17.5 9.6L23.5 21M10 24H22" />
      <path
        d="M16 13L17.5 16L21 16.5L18.5 19L19 22.5L16 21L13 22.5L13.5 19L11 16.5L14.5 16L16 13Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export { RecommendationSystem };
