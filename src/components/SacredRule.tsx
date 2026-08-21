interface Props {
  className?: string;
  tone?: "gold" | "navy" | "ivory";
  style?: React.CSSProperties;
}

const COLOR: Record<NonNullable<Props["tone"]>, string> = {
  gold: "#B89A56",
  navy: "#0B0057",
  ivory: "#FDFAF2",
};

/** Thin decorative horizontal line with a centered small cross. */
export function SacredRule({ className, tone = "gold", style }: Props) {
  const color = COLOR[tone];
  return (
    <svg viewBox="0 0 200 20" className={className} style={style} aria-hidden="true">
      <line x1="0" y1="10" x2="82" y2="10" stroke={color} strokeWidth="1" />
      <line x1="118" y1="10" x2="200" y2="10" stroke={color} strokeWidth="1" />
      <g stroke={color} strokeWidth="1.6" strokeLinecap="round">
        <line x1="100" y1="3" x2="100" y2="17" />
        <line x1="94" y1="8" x2="106" y2="8" />
      </g>
    </svg>
  );
}
