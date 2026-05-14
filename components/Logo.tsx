export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-[var(--brand)] flex items-center justify-center text-white font-black text-[15px] leading-none">
        W
      </div>
      <span className="font-black text-[19px] tracking-tight">워크모어</span>
    </div>
  );
}
