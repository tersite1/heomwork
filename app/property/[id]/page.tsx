import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderImage from "@/components/PlaceholderImage";
import { findProperty, properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

type Params = Promise<{ id: string }>;

export default async function PropertyPage({ params }: { params: Params }) {
  const { id } = await params;
  const p = findProperty(id);
  if (!p) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-[1280px] mx-auto px-6 pt-8">
          <p className="text-[12.5px] text-[var(--muted)]">
            {p.region} · {p.type}
          </p>
          <h1 className="mt-1 text-[26px] md:text-[30px] font-black tracking-tight">{p.title}</h1>
          <div className="mt-2 flex items-center gap-2 text-[13px] text-[var(--muted)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#6E3FF3">
              <path d="m12 2 3 7h7l-5.5 4.5 2 7.5L12 17l-6.5 4 2-7.5L2 9h7z" />
            </svg>
            <span className="font-semibold text-black">{p.rating.toFixed(1)}</span>
            <span>· 후기 {p.reviewCount}건</span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-2 h-[420px]">
            <PlaceholderImage tone={p.tone} ratio="wide" rounded="rounded-2xl" className="row-span-2 h-full" />
            <PlaceholderImage tone={(p.tone + 1) % 8} ratio="wide" rounded="rounded-2xl" className="h-full" />
            <PlaceholderImage tone={(p.tone + 2) % 8} ratio="wide" rounded="rounded-2xl" className="h-full" />
            <PlaceholderImage tone={(p.tone + 3) % 8} ratio="wide" rounded="rounded-2xl" className="h-full" />
            <PlaceholderImage tone={(p.tone + 4) % 8} ratio="wide" rounded="rounded-2xl" className="h-full" />
          </div>

          <div className="mt-10 grid md:grid-cols-[1fr_360px] gap-10">
            <div>
              <div className="flex flex-wrap gap-6 pb-6 border-b border-[var(--line)]">
                <Stat label="방" value={`${p.rooms}개`} />
                <Stat label="욕실" value={`${p.baths}개`} />
                <Stat label="전용 면적" value={`${p.area}㎡`} />
                <Stat label="유형" value={p.type} />
              </div>

              <section className="py-8 border-b border-[var(--line)]">
                <h2 className="text-[18px] font-black">집 소개</h2>
                <p className="mt-3 text-[14px] leading-7 text-[var(--muted)]">
                  바로 입주 가능한 풀옵션 단기 매물이에요. 침구, 식기, 세탁기까지 갖춰져 있어 캐리어만 들고 오시면 됩니다.
                  체크인 전날 출입 방법과 주변 안내를 채팅으로 보내드려요.
                </p>
              </section>

              <section className="py-8 border-b border-[var(--line)]">
                <h2 className="text-[18px] font-black">편의 시설</h2>
                <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {p.amenities.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-2 text-[14px] px-3 py-2 rounded-lg border border-[var(--line)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                      {a}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="py-8">
                <h2 className="text-[18px] font-black">위치</h2>
                <p className="mt-1 text-[13px] text-[var(--muted)]">{p.region}</p>
                <div className="mt-4 h-[260px] rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "linear-gradient(#cdd6e0 1px, transparent 1px), linear-gradient(90deg, #cdd6e0 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--brand)] text-white text-[12px] font-bold px-3 py-1.5 rounded-full shadow">
                    워크모어 위치
                  </span>
                </div>
              </section>
            </div>

            <aside className="md:sticky md:top-24 self-start border border-[var(--line)] rounded-2xl p-5 shadow-sm">
              <p className="text-[22px] font-black">
                주 {p.pricePerWeek.toLocaleString()}원
              </p>
              <p className="text-[13px] text-[var(--muted)]">
                월 단위로 계약하면 {p.pricePerMonth.toLocaleString()}원
              </p>
              <button className="mt-4 w-full bg-[var(--brand)] text-white rounded-xl py-3 font-bold hover:opacity-90">
                계약 문의
              </button>
              <button className="mt-2 w-full border border-[var(--line)] rounded-xl py-3 font-semibold hover:bg-[var(--surface-soft)]">
                호스트와 채팅
              </button>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[12px] text-[var(--muted)]">{label}</p>
      <p className="mt-0.5 text-[16px] font-bold">{value}</p>
    </div>
  );
}
