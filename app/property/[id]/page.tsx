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
                <h2 className="text-[18px] font-black">이 집 소개</h2>
                <p className="mt-3 text-[14px] leading-7 text-[var(--muted)]">
                  단기로 머물기에 부족함 없도록 풀옵션으로 준비된 워크모어 추천 매물입니다. 위치, 동선, 채광까지 꼼꼼히 검수했어요. 처음 방문하시는 분도 편하게 머물 수 있도록 입실 안내문을 드립니다.
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
                <div className="mt-4 h-[260px] rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] flex items-center justify-center text-[var(--muted)] text-[13px]">
                  지도 자리 (데모용)
                </div>
              </section>
            </div>

            <aside className="md:sticky md:top-24 self-start border border-[var(--line)] rounded-2xl p-5 shadow-sm">
              <p className="text-[13px] text-[var(--muted)]">주 단위 / 월 단위 요금</p>
              <p className="mt-1 text-[22px] font-black">
                주 {p.pricePerWeek.toLocaleString()}원
              </p>
              <p className="text-[14px] text-[var(--muted)]">
                월 {p.pricePerMonth.toLocaleString()}원
              </p>
              <button className="mt-4 w-full bg-[var(--brand)] text-white rounded-xl py-3 font-bold hover:opacity-90">
                계약 문의하기
              </button>
              <button className="mt-2 w-full border border-[var(--line)] rounded-xl py-3 font-semibold hover:bg-[var(--surface-soft)]">
                채팅 시작하기
              </button>
              <p className="mt-3 text-[12px] text-[var(--muted)] text-center">
                실제 결제는 발생하지 않는 데모 페이지입니다.
              </p>
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
