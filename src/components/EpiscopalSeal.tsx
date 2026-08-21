interface SealProps {
  className?: string;
  tone?: "gold" | "navy";
}

/**
 * A geometrically clean circular seal: outer/inner rings, a Jerusalem-style
 * cross at center, and the traditional ΙϹ ΧϹ ΝΙ ΚΑ inscription in the four
 * quadrants — a respectful, non-figurative stand-in for a real diocesan seal.
 */
export function EpiscopalSeal({ className, tone = "gold" }: SealProps) {
  const color = tone === "gold" ? "#B89A56" : "#0B0057";
  return (
    <svg viewBox="0 0 100 100" className={className} aria-label="Episcopate seal" role="img">
      <circle cx="50" cy="50" r="47" fill="none" stroke={color} strokeWidth="1.4" />
      <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="1" opacity="0.7" />
      <circle cx="50" cy="50" r="33" fill="none" stroke={color} strokeWidth="0.8" opacity="0.5" />

      {/* cross crosslet */}
      <g stroke={color} strokeWidth="2.4" strokeLinecap="square">
        <line x1="50" y1="27" x2="50" y2="73" />
        <line x1="27" y1="50" x2="73" y2="50" />
        <line x1="43" y1="29" x2="57" y2="29" />
        <line x1="43" y1="71" x2="57" y2="71" />
        <line x1="29" y1="43" x2="29" y2="57" />
        <line x1="71" y1="43" x2="71" y2="57" />
      </g>

      <text x="34" y="24" fontSize="9" fontFamily="var(--font-serif)" fill={color} textAnchor="middle">IC</text>
      <text x="66" y="24" fontSize="9" fontFamily="var(--font-serif)" fill={color} textAnchor="middle">XC</text>
      <text x="26" y="80" fontSize="9" fontFamily="var(--font-serif)" fill={color} textAnchor="middle">NI</text>
      <text x="74" y="80" fontSize="9" fontFamily="var(--font-serif)" fill={color} textAnchor="middle">KA</text>
    </svg>
  );
}
