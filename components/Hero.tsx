import Link from "next/link";
import SearchBar from "./SearchBar";

const categories = [
  { label: "오피스텔", caption: "혼자 일하며 머물기 좋은 공간", badge: "인기" },
  { label: "아파트", caption: "가족과 함께 지내기 좋은 집", badge: null },
  { label: "원룸", caption: "필요한 건 다 있는 알찬 공간", badge: null },
  { label: "투룸", caption: "두 사람이 여유롭게 지낼 집", badge: null },
  { label: "쓰리룸+", caption: "여러 명이 함께 머무는 넓은 집", badge: null },
];

function HouseIcon() {
  return (
    <svg width="60" height="48" viewBox="0 0 60 48" fill="none" className="text-[var(--muted)]">
      <path d="M6 22 L30 6 L54 22 V44 H6 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="18" y="28" width="10" height="16" stroke="currentColor" strokeWidth="1.6" />
      <rect x="34" y="28" width="10" height="10" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-[var(--surface-soft)]">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-20">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
          <div>
            <p className="text-[15px] text-[var(--muted)] mb-3">워크모어에서</p>
            <h1 className="text-[44px] md:text-[52px] font-black leading-[1.1] tracking-tight">
              잠깐 살 집을
              <br />
              찾아보세요
            </h1>
          </div>
          <SearchBar />
        </div>

        <ul className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
          {categories.map((c) => (
            <li key={c.label}>
              <Link
                href={`/search?type=${encodeURIComponent(c.label)}`}
                className="relative bg-white rounded-2xl border border-[var(--line)] p-5 h-[180px] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                {c.badge && (
                  <span className="absolute -top-2 right-4 bg-[var(--brand)] text-white text-[11px] font-bold px-2 py-1 rounded-full">
                    {c.badge}
                  </span>
                )}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-[18px]">{c.label}</h3>
                    <span className="text-[var(--muted)]">›</span>
                  </div>
                  <p className="mt-2 text-[12.5px] text-[var(--muted)] leading-snug">{c.caption}</p>
                </div>
                <div className="self-end">
                  <HouseIcon />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
