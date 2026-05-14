import Header from "@/components/Header";
import Footer from "@/components/Footer";

const threads = [
  { name: "신림역 깔끔집B1 호스트", last: "체크인 시간 안내드립니다.", time: "오전 11:42", unread: 2 },
  { name: "센트라체36/길동 호스트", last: "주차 자리 한 칸 비워뒀어요.", time: "어제", unread: 0 },
  { name: "광화문 오피스텔 호스트", last: "키패드 비밀번호 변경했어요.", time: "5/12", unread: 0 },
];

export default function ChatPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="grid md:grid-cols-[320px_1fr] h-[calc(100vh-68px)]">
          <aside className="border-r border-[var(--line)] overflow-y-auto">
            <div className="px-5 py-4 border-b border-[var(--line)]">
              <h1 className="text-[18px] font-black">채팅</h1>
            </div>
            <ul>
              {threads.map((t) => (
                <li key={t.name} className="px-5 py-4 border-b border-[var(--line)] hover:bg-[var(--surface-soft)] cursor-pointer">
                  <div className="flex justify-between items-baseline">
                    <p className="font-bold text-[14px] truncate">{t.name}</p>
                    <span className="text-[11px] text-[var(--muted)]">{t.time}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-[12.5px] text-[var(--muted)] truncate">{t.last}</p>
                    {t.unread > 0 && (
                      <span className="ml-2 text-[10px] text-white bg-[var(--brand)] rounded-full px-1.5 py-0.5 font-bold">
                        {t.unread}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
          <section className="flex items-center justify-center bg-[var(--surface-soft)]">
            <div className="text-center text-[var(--muted)]">
              <p className="text-[15px] font-semibold">대화를 선택해 주세요</p>
              <p className="mt-1 text-[13px]">왼쪽 목록에서 채팅을 클릭하면 메시지를 볼 수 있어요.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
