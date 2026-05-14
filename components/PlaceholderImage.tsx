type Props = {
  className?: string;
  label?: string;
  ratio?: "square" | "video" | "portrait" | "wide";
  rounded?: string;
  tone?: number;
};

const ratios: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[4/5]",
  wide: "aspect-[3/2]",
};

const tones = [
  "from-[#dfe3ea] to-[#b6bcc8]",
  "from-[#e6dccd] to-[#bca988]",
  "from-[#cfd8d3] to-[#94a59b]",
  "from-[#dcd2e0] to-[#a892b3]",
  "from-[#d6dde6] to-[#8b9aae]",
  "from-[#dfd2c2] to-[#a98e6b]",
  "from-[#cfdcd1] to-[#8aa78f]",
  "from-[#e0d8d2] to-[#a89c92]",
];

export default function PlaceholderImage({
  className = "",
  label,
  ratio = "wide",
  rounded = "rounded-xl",
  tone = 0,
}: Props) {
  const hue = tones[tone % tones.length];
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${ratios[ratio]} bg-gradient-to-br ${hue} ${className}`}
      role="img"
      aria-label={label ?? "이미지 자리표시자"}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center text-white/70">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="8.5" cy="10.5" r="1.6" fill="currentColor" />
          <path d="m4 17 5-5 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.6" fill="none" />
        </svg>
      </div>
      {label && (
        <span className="absolute bottom-2 left-2 text-[11px] text-white/85 font-semibold tracking-tight bg-black/25 backdrop-blur-sm px-2 py-0.5 rounded">
          {label}
        </span>
      )}
    </div>
  );
}
