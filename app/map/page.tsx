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
            <h1 className="text-[18px] font-black">지도</h1>
            <p className="text-[12.5px] text-[var(--muted)] mt-1">{properties.length}건</p>
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
            <div className="absolute bottom-6 right-6 flex flex-col gap-1">
              <button aria-label="확대" className="w-9 h-9 rounded-md bg-white shadow border border-[var(--line)] text-[16px] hover:bg-[var(--surface-soft)]">+</button>
              <button aria-label="축소" className="w-9 h-9 rounded-md bg-white shadow border border-[var(--line)] text-[16px] hover:bg-[var(--surface-soft)]">−</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
