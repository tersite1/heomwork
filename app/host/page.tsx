import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderImage from "@/components/PlaceholderImage";

const benefits = [
  { title: "빠른 공실 해소", body: "검수된 임차인이 한 번의 결제로 입주합니다. 공실 기간을 짧게 유지하세요." },
  { title: "안전한 정산", body: "보증금과 임대료를 워크모어가 안전하게 보관·정산합니다." },
  { title: "간편한 운영", body: "체크인 안내, 후기 응대, 정산까지 워크모어 한 곳에서 관리하세요." },
];

export default function HostPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--brand-soft)]">
          <div className="max-w-[1080px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[14px] font-bold text-[var(--brand)]">워크모어 임대인</p>
              <h1 className="mt-2 text-[36px] md:text-[42px] font-black leading-tight tracking-tight">
                공실, 워크모어로
                <br /> 빠르고 안전하게.
              </h1>
              <p className="mt-3 text-[14px] text-[var(--muted)] leading-7">
                준비물은 풀옵션 한 채, 나머지는 워크모어가 도와드릴게요.
                지금 등록하면 평균 3일 안에 첫 문의를 받을 수 있어요.
              </p>
              <button className="mt-6 bg-black text-white rounded-full px-6 py-3 font-bold hover:bg-[var(--brand)]">
                + 방 등록하기
              </button>
            </div>
            <PlaceholderImage tone={2} ratio="wide" rounded="rounded-2xl" />
          </div>
        </section>

        <section className="max-w-[1080px] mx-auto px-6 py-16">
          <h2 className="text-center text-[24px] font-black">왜 워크모어인가요?</h2>
          <ul className="mt-8 grid md:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <li key={b.title} className="border border-[var(--line)] rounded-2xl p-6">
                <p className="text-[16px] font-black">{b.title}</p>
                <p className="mt-2 text-[13px] text-[var(--muted)] leading-6">{b.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
