export default function HostCTA() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-16">
      <div className="rounded-2xl bg-black text-white px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
        <div>
          <p className="text-[14px] opacity-80">빠르고 안전한 단기임대</p>
          <h2 className="mt-2 text-[28px] md:text-[32px] font-black tracking-tight">
            공실, 워크모어로 해결해 보세요
          </h2>
        </div>
        <button className="shrink-0 bg-white text-black rounded-full px-6 py-3 font-bold hover:bg-[var(--brand-soft)] transition-colors">
          + 방 등록하기
        </button>
      </div>
    </section>
  );
}
