function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 12.5c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.2 10.1.8 1.2 1.8 2.6 3.1 2.5 1.3-.1 1.7-.8 3.2-.8s1.9.8 3.3.8 2.2-1.2 3-2.5c.9-1.4 1.3-2.8 1.3-2.9-.1 0-2.4-.9-2.4-3.8ZM14 4.5c.7-.9 1.2-2 1.1-3.2-1 0-2.3.7-3 1.5-.7.7-1.3 1.9-1.1 3 1.2.1 2.3-.5 3-1.3Z" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 2.7v18.6c0 .6.6 1 1.1.7l15-9.3c.5-.3.5-1 0-1.3l-15-9.4C4.6 1.7 4 2 4 2.7Z" />
    </svg>
  );
}

export default function AppDownload() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-14 text-center">
        <p className="text-[13px] opacity-70">잠깐 머물 집, 검색부터 계약까지</p>
        <h2 className="mt-2 text-[26px] md:text-[30px] font-black leading-tight">
          워크모어 앱 다운받고
          <br />더 편리하게 사용하세요
        </h2>
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-2.5 text-[13px] font-bold hover:bg-[var(--brand-soft)]"
          >
            <AppleIcon /> App Store
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-2.5 text-[13px] font-bold hover:bg-[var(--brand-soft)]"
          >
            <PlayIcon /> Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
