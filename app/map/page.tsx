import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export default function MapPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="grid md:grid-cols-[420px_1fr] h-[calc(100vh-68px)]">
          <aside className="overflow-y-auto border-r border-[var(--line)] p-5">
            <h1 className="text-[18px] font-black">지도에서 매물 보기</h1>
            <p className="text-[12.5px] text-[var(--muted)] mt-1">총 {properties.length}건의 매물</p>
            <ul className="mt-5 grid grid-cols-1 gap-y-6">
              {properties.map((p) => (
                <li key={p.id}>
                  <PropertyCard p={p} />
                </li>
              ))}
            </ul>
          </aside>
          <div className="relative bg-[#e7eef5] overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(#cdd6e0 1px, transparent 1px), linear-gradient(90deg, #cdd6e0 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {properties.map((p, i) => (
              <span
                key={p.id}
                className="absolute bg-[var(--brand)] text-white text-[12px] font-bold px-2.5 py-1 rounded-full shadow"
                style={{
                  top: `${15 + ((i * 71) % 70)}%`,
                  left: `${10 + ((i * 53) % 80)}%`,
                }}
              >
                {(p.pricePerWeek / 10000).toFixed(0)}만
              </span>
            ))}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white shadow border border-[var(--line)] text-[12px] text-[var(--muted)]">
              지도 자리 (데모용 그리드)
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
