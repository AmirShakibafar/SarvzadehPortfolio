import React from "react";

const PATH_STRING = `
  M1800 80
  C1800 800 2350 1000 2350 2000
  C2350 3000 1650 3200 1650 4200
  C1650 4600 1800 4800 1800 4950
`;

const SvgDefinitions = () => (
  <defs>
    <radialGradient id="journeyMobileOrb">
      <stop offset="0%" stopColor="#ffffff" />
      <stop offset="40%" stopColor="#8EF6F2" />
      <stop offset="100%" stopColor="#0DDCD5" />
    </radialGradient>
  </defs>
);

export function JourneyPathMobile() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10"
    >
      <svg
        viewBox="0 0 4000 5100"
        preserveAspectRatio="xMidYMin slice"
        className="h-full w-full"
      >
        <SvgDefinitions />

        {/* Static journey path */}
        <path
          d={PATH_STRING}
          fill="none"
          stroke="#EEF4F6"
          strokeWidth={16}
          strokeLinecap="round"
        />

        {/* Subtle inner highlight */}
        <path
          d={PATH_STRING}
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          opacity={0.6}
          transform="translate(-2 -2)"
        />

        {/* Start node */}
        <circle
          cx="1800"
          cy="80"
          r="30"
          fill="rgba(255,255,255,0.75)"
          stroke="rgba(13,220,213,0.6)"
          strokeWidth="2"
        />

        {/* End node / heart */}
        <g transform="translate(1800 4950)">
          <circle
            r="36"
            fill="rgba(255,255,255,0.7)"
            stroke="rgba(13,220,213,0.7)"
            strokeWidth="2"
          />

          <path
            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            fill="url(#journeyMobileOrb)"
            stroke="white"
            strokeWidth="1"
            transform="scale(2.8) translate(-25 -25)"
          />
        </g>
      </svg>
    </div>
  );
}
