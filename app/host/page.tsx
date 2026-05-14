import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderImage from "@/components/PlaceholderImage";

const benefits = [
  { title: "공실 줄이기", body: "주 단위로 짧게 끊어 놓을 수 있어, 길게 비어 있는 시간이 줄어듭니다." },
  { title: "보증금 보관", body: "임차인 보증금을 워크모어가 보관하고, 퇴실 후 이상 없으면 자동 반환합니다." },
  { title: "한 곳에서 관리", body: "예약, 채팅, 정산까지 워크모어 안에서 처리해요. 따로 서류 주고받을 필요 없어요." },
];

export default function HostPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--brand-soft)]">
          <div className="max-w-[1080px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[14px] font-bold text-[var(--brand)]">임대인 시작하기</p>
              <h1 className="mt-2 text-[36px] md:text-[42px] font-black leading-tight tracking-tight">
                비어 있는 방,
                <br /> 워크모어에 올려보세요.
              </h1>
              <p className="mt-3 text-[14px] text-[var(--muted)] leading-7">
                풀옵션 단기임대로 등록하면 일주일 안에 첫 문의가 들어와요.
                사진과 기본 정보만 입력하면 등록 끝납니다.
              </p>
              <button className="mt-6 bg-black text-white rounded-full px-6 py-3 font-bold hover:bg-[var(--brand)]">
                + 방 등록하기
              </button>
            </div>
            <PlaceholderImage tone={2} ratio="wide" rounded="rounded-2xl" />
          </div>
        </section>

        <section className="max-w-[1080px] mx-auto px-6 py-16">
          <h2 className="text-center text-[24px] font-black">워크모어로 등록하면 좋은 점</h2>
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
