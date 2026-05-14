const events = [
  {
    title: "후기 쓰면",
    highlight: "100% 선물 증정!",
    tone: "bg-[#FBEFEF] text-[#D93B3B]",
    art: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="14" y="32" width="52" height="34" rx="3" fill="#1a1a1a" />
        <rect x="14" y="40" width="52" height="6" fill="#fff" />
        <rect x="36" y="28" width="8" height="38" fill="#D93B3B" />
        <path d="M40 28c-6-8-16-4-16 2 0 4 6 6 16 2Z" fill="#D93B3B" />
        <path d="M40 28c6-8 16-4 16 2 0 4-6 6-16 2Z" fill="#D93B3B" />
      </svg>
    ),
  },
  {
    title: "혹시, 주변에",
    highlight: "이런 친구 있어요?",
    tone: "bg-[#FFF3E5] text-[#D87900]",
    art: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <circle cx="40" cy="32" r="14" fill="#1a1a1a" />
        <path d="M18 70c4-12 14-18 22-18s18 6 22 18Z" fill="#1a1a1a" />
        <path d="M22 18c2 4 6 6 10 4M58 18c-2 4-6 6-10 4" stroke="#D87900" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
  {
    title: "앱 리뷰 쓰고",
    highlight: "3만 원 받자",
    tone: "bg-[#EAF0FF] text-[#3B5BD9]",
    art: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="14" y="14" width="22" height="22" rx="4" fill="#A4C639" />
        <rect x="44" y="14" width="22" height="22" rx="4" fill="#1a1a1a" />
        <rect x="14" y="44" width="22" height="22" rx="4" fill="#3B5BD9" />
        <rect x="44" y="44" width="22" height="22" rx="4" fill="#D93B3B" />
      </svg>
    ),
  },
];

export default function Events() {
  return (
    <section className="max-w-[1080px] mx-auto px-6 py-14">
      <div className="flex items-baseline justify-between">
        <h2 className="text-[20px] font-black">워크모어 이벤트</h2>
        <a href="#" className="text-[12px] text-[var(--muted)] hover:text-black">전체보기</a>
      </div>
      <ul className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
        {events.map((e) => (
          <li
            key={e.title}
            className={`rounded-xl p-5 flex items-center justify-between gap-4 ${e.tone} cursor-pointer hover:opacity-90 transition-opacity`}
          >
            <div>
              <p className="text-[13px] font-bold opacity-90">{e.title}</p>
              <p className="text-[16px] font-black mt-1 leading-tight">{e.highlight}</p>
            </div>
            <div className="shrink-0">{e.art}</div>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex justify-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-black" />
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
      </div>
    </section>
  );
}
