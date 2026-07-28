// components/approach-section/dot-pattern.tsx
export function DotPattern() {
  return (
    <svg
      className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 text-primary/20 -z-10"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 100 100"
    >
      <pattern
        id="dot-pattern"
        x="0"
        y="0"
        width="16"
        height="16"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="2" />
      </pattern>
      <rect width="100" height="100" fill="url(#dot-pattern)" />
    </svg>
  );
}
