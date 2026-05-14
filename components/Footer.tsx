const topLinks = ["공지사항", "임대인 자주 묻는 질문", "임차인 자주 묻는 질문"];
const bottomLinks = ["이용약관", "개인정보 처리방침", "위치기반서비스 이용약관"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-6 py-10 text-[12.5px] text-[var(--muted)]">
        <ul className="flex flex-wrap gap-5 text-black font-semibold">
          {topLinks.map((l) => (
            <li key={l}><a href="#" className="hover:underline">{l}</a></li>
          ))}
        </ul>

        <div className="mt-6">
          <p className="text-black font-bold">고객센터</p>
          <p className="mt-1">운영 시간 : 10:00~18:00 &nbsp;|&nbsp; 대표 번호 : 1877-3670</p>
          <p className="mt-1">주말·공휴일에는 전화 상담이 어려우니, 1:1 문의하기를 이용해 주세요.</p>
          <button className="mt-3 border border-[var(--line)] rounded-md px-3 py-2 text-black font-semibold hover:bg-[var(--surface-soft)]">
            1:1 문의하기
          </button>
        </div>

        <div className="mt-8">
          <p className="text-black font-bold">사업자정보</p>
          <p className="mt-1">
            (주)워크모어 &nbsp;|&nbsp; 대표자 : 홍길동 &nbsp;|&nbsp; 사업자 등록번호 : 000-00-00000 &nbsp;|&nbsp; 통신판매업 신고번호 : 0000-서울-0000
          </p>
          <p className="mt-1">
            주소 : 서울특별시 강남구 테헤란로 0, 0층 &nbsp;|&nbsp; 이메일 : help@workmore.kr &nbsp;|&nbsp; 제휴 문의 : biz@workmore.kr &nbsp;|&nbsp; 호스팅 서비스 제공 : 워크모어 자체 호스팅
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-5">
          {bottomLinks.map((l) => (
            <li key={l}><a href="#" className="hover:underline text-black">{l}</a></li>
          ))}
        </ul>

        <p className="mt-6 text-[11px]">© {new Date().getFullYear()} Workmore. All rights reserved.</p>
      </div>
    </footer>
  );
}
