export default function TopBanner() {
  return (
    <div className="w-full bg-black text-white text-[13px] py-2.5 text-center">
      <span className="font-semibold">워크모어</span>
      <span className="opacity-80 ml-2">단기임대가 처음이신가요?</span>
      <button className="ml-3 underline underline-offset-2 opacity-90 hover:opacity-100">
        이용 가이드 보기
      </button>
    </div>
  );
}
