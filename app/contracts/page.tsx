import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContractsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[var(--surface-soft)]">
        <div className="max-w-[640px] mx-auto px-6 py-20 text-center">
          <h1 className="text-[26px] font-black">진행 중인 계약 없음</h1>
          <p className="mt-2 text-[14px] text-[var(--muted)]">
            아직 계약을 시작한 매물이 없어요.
          </p>
          <Link
            href="/search"
            className="inline-block mt-6 bg-[var(--brand)] text-white rounded-full px-6 py-3 font-bold hover:opacity-90"
          >
            매물 보러가기
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
