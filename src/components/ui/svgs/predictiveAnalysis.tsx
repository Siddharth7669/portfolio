import type { SVGProps } from "react";

const PredictiveAnalysis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Predictive Analytics</title>
    <defs>
      <linearGradient id="predictive-gradient" x1="4" y1="28" x2="28" y2="4">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>

    <g
      stroke="url(#predictive-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 27V5M4 27H29" />
      <path d="M7 22L13 16L18 19L27 8" />
      <path d="M21 8H27V14" />
    </g>

    <g fill="currentColor" stroke="url(#predictive-gradient)" strokeWidth="1.5">
      <circle cx="7" cy="22" r="2" />
      <circle cx="13" cy="16" r="2" />
      <circle cx="18" cy="19" r="2" />
      <circle cx="27" cy="8" r="2" />
    </g>
  </svg>
);

export { PredictiveAnalysis };
