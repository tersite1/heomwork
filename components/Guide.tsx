const featured = [
  {
    tone: "bg-[#C7D6F5]",
    tag: "임차인 가이드",
    title: "단기임대가 처음이라면, 이것부터",
    caption: "워크모어 단기임대가 처음이신가요?",
    art: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <rect x="20" y="28" width="80" height="74" rx="6" fill="#fff" stroke="#1a1a1a" strokeWidth="2" />
        <rect x="20" y="28" width="80" height="18" fill="#1a1a1a" />
        <g fill="#1a1a1a" fontSize="9" fontFamily="sans-serif" fontWeight="700">
          <text x="32" y="62">S M T W T F S</text>
        </g>
        <circle cx="78" cy="80" r="9" fill="#6E3FF3" />
      </svg>
    ),
  },
  {
    tone: "bg-[#F5D86A]",
    tag: "임차인 가이드",
    title: "연장계약 시작은 퇴실일 다음날부터",
    caption: "연장계약 오해와 진실",
    art: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <path d="M28 32h64l-6 70H34Z" fill="#fff" stroke="#1a1a1a" strokeWidth="2" />
        <text x="48" y="78" fontSize="22" fontWeight="900" fill="#1a1a1a">O X</text>
        <path d="M44 26c0-6 4-10 10-10h12c6 0 10 4 10 10" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    tone: "bg-[#A6E3B5]",
    tag: "임차인 가이드",
    title: "단기임대 계약 절차 4단계",
    caption: "단기임대 이렇게만 진행하세요",
    art: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <rect x="64" y="20" width="36" height="86" fill="#fff" stroke="#1a1a1a" strokeWidth="2" />
        <rect x="72" y="46" width="4" height="14" fill="#1a1a1a" />
        <circle cx="32" cy="56" r="6" fill="#1a1a1a" />
        <rect x="20" y="64" width="24" height="36" rx="6" fill="#1a1a1a" />
        <path d="M20 80h-6v14h6" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

const links = [
  { title: "1주 계약이면 7박 8일이다?", color: "bg-[#DDE6FB]" },
  { title: "보증금을 보관하는 이유", color: "bg-[#FBD9C5]" },
  { title: "꼭 지켜야 할 입주 에티켓 5가지", color: "bg-[#CCE9F5]" },
];

export default function Guide() {
  return (
    <section className="max-w-[1080px] mx-auto px-6 py-12">
      <div className="text-center">
        <h2 className="text-[24px] font-black">꼭 알아둬야 할 워크모어 사용법</h2>
        <p className="mt-2 text-[13px] text-[var(--muted)]">읽어둘수록 편해지는 단기임대 핵심 정보</p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        <div className="grid grid-cols-3 gap-3">
          {featured.map((f) => (
            <a key={f.title} href="#" className="group block">
              <div className={`${f.tone} rounded-xl aspect-square p-3 flex items-center justify-center`}>
                {f.art}
              </div>
              <p className="mt-3 text-[11px] text-[var(--brand)] font-semibold">{f.tag}</p>
              <p className="mt-1 text-[13px] font-bold leading-snug group-hover:underline">{f.title}</p>
              <p className="mt-1 text-[11px] text-[var(--muted)] leading-snug">{f.caption}</p>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.title}
              href="#"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-[var(--surface-soft)] transition-colors"
            >
              <div className={`${l.color} w-14 h-14 rounded-lg shrink-0 flex items-center justify-center`}>
                <span className="text-[18px]">✦</span>
              </div>
              <div>
                <p className="text-[11px] text-[var(--brand)] font-semibold">임차인 가이드</p>
                <p className="text-[14px] font-bold mt-0.5">{l.title}</p>
              </div>
            </a>
          ))}
          <button className="self-center mt-2 border border-[var(--line)] rounded-full px-5 py-2 text-[13px] font-semibold hover:bg-[var(--surface-soft)]">
            전체 콘텐츠 보기 ›
          </button>
        </div>
      </div>
    </section>
  );
}
