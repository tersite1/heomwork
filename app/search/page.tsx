import { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { properties, searchProperties } from "@/lib/properties";

const TYPES = ["전체", "오피스텔", "아파트", "원룸", "투룸", "쓰리룸+"] as const;

type SearchParams = Promise<{ q?: string; type?: string; start?: string; end?: string }>;

export default async function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const q = sp.q?.trim();
  const typeParam = sp.type;
  const list = searchProperties({
    keyword: q,
    type: typeParam && typeParam !== "전체" ? typeParam : undefined,
  });

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="bg-[var(--surface-soft)] border-b border-[var(--line)]">
          <div className="max-w-[1280px] mx-auto px-6 py-8">
            <Suspense>
              <SearchBar defaultKeyword={q ?? ""} defaultStart={sp.start} defaultEnd={sp.end} />
            </Suspense>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {TYPES.map((t) => {
              const isActive = (typeParam ?? "전체") === t;
              const params = new URLSearchParams();
              if (q) params.set("q", q);
              if (t !== "전체") params.set("type", t);
              return (
                <Link
                  key={t}
                  href={`/search${params.size ? `?${params.toString()}` : ""}`}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold border transition-colors ${
                    isActive
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-[var(--line)] hover:border-black"
                  }`}
                >
                  {t}
                </Link>
              );
            })}
          </div>

          <div className="flex items-baseline justify-between">
            <h1 className="text-[20px] font-black">
              {q ? <>‘{q}’ 검색 결과</> : "전체 매물"}
              <span className="ml-2 text-[14px] font-medium text-[var(--muted)]">
                총 {list.length}건
              </span>
            </h1>
            <p className="text-[13px] text-[var(--muted)]">
              총 {properties.length}건 중 {list.length}건 표시
            </p>
          </div>

          {list.length === 0 ? (
            <div className="mt-16 text-center text-[var(--muted)]">
              <p className="text-[15px] font-semibold">검색 결과가 없어요</p>
              <p className="mt-1 text-[13px]">다른 지역이나 카테고리로 검색해 보세요.</p>
            </div>
          ) : (
            <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
              {list.map((p) => (
                <li key={p.id}>
                  <PropertyCard p={p} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
