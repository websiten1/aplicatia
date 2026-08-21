interface Props {
  className?: string;
}

/** Low-opacity line-art cathedral silhouette for the Splash background. */
export function BackgroundChurchIllustration({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <line x1="0" y1="420" x2="400" y2="420" />
      <rect x="90" y="260" width="220" height="160" />
      <rect x="130" y="330" width="45" height="90" />
      <rect x="225" y="330" width="45" height="90" />
      <path d="M130 260 130 220 175 190 175 260" />
      <path d="M225 260 225 190 270 220 270 260" />
      <path d="M175 190 200 150 225 190" />
      <line x1="200" y1="150" x2="200" y2="110" />
      <path d="M188 118 200 100 212 118" />
      <line x1="200" y1="90" x2="200" y2="115" />
      <line x1="188" y1="100" x2="212" y2="100" />
      <circle cx="200" cy="300" r="26" />
      <line x1="200" y1="274" x2="200" y2="326" />
      <line x1="174" y1="300" x2="226" y2="300" />
      <path d="M60 420 60 340 90 320 90 420" />
      <path d="M310 420 310 320 340 340 340 420" />
      <line x1="65" y1="330" x2="85" y2="330" />
      <line x1="315" y1="330" x2="335" y2="330" />
    </svg>
  );
}
