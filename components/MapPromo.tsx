export default function MapPromo() {
  return (
    <section className="bg-[var(--brand-soft)]">
      <a
        href="#"
        className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-center gap-2 text-[15px] font-semibold hover:underline"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        원하는 동네의 집을 <span className="text-[var(--brand)] font-black">지도로</span> 둘러보세요
        <span>›</span>
      </a>
    </section>
  );
}
