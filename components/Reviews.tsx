"use client";

import { useRef } from "react";
import PlaceholderImage from "./PlaceholderImage";

type Review = {
  region: string;
  building: string;
  body: string;
  tone: number;
};

const reviews: Review[] = [
  { region: "서울특별시 관악구", building: "신림역세권 깔끔집B1", body: "사장님 덕분에 2주 동안 정말 편하게 잘 지내다 갑니다.", tone: 0 },
  { region: "서울특별시 강동구", building: "센트라체36/길동", body: "인테리어가 깔끔해서 한 달 살이 하기 너무 좋았어요.", tone: 1 },
  { region: "서울특별시 중구", building: "시청 명동 광화문 남산", body: "더할 나위 없이 좋은 시간을 보냈습니다. 추천드려요.", tone: 2 },
  { region: "서울특별시 강서구", building: "목동역 블루힐301호", body: "깨끗하고 좋았습니다. 또 이용할게요.", tone: 3 },
  { region: "인천광역시 남동구", building: "길병원 카르페디엠", body: "새 아파트에 입주해서 모두 만족스럽게 지냈습니다.", tone: 4 },
  { region: "제주특별자치도 서귀포시", building: "성산 수산통 애견가능", body: "조용한 시골집 너무 편히 쉬다 갑니다.", tone: 5 },
  { region: "경기도 용인시 수지구", building: "수지구청 올수리", body: "이곳저곳 다녀봤는데, 워크모어가 가장 편하게 잘 지냈어요.", tone: 6 },
  { region: "서울특별시 용산구", building: "서울역 도보 5분 풀옵션", body: "너무 잘 쉬다 갑니다.", tone: 7 },
  { region: "충청남도 천안시 서북구", building: "일루일루 넓은 원룸", body: "잘 쉬었다 갑니다. 위치도 좋고 다음에 또 이용할게요.", tone: 0 },
  { region: "전라북도 전주시 완산구", building: "풀옵션☆새미하우스3", body: "잘 지내다 갑니다. 기회되면 다시 이용하겠습니다.", tone: 1 },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="w-[180px] shrink-0">
      <div className="relative">
        <PlaceholderImage tone={r.tone} ratio="portrait" rounded="rounded-xl" />
        <div className="absolute top-2 left-2 text-white font-bold text-[12px] flex items-center gap-0.5 bg-black/30 backdrop-blur-sm rounded px-1.5 py-0.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="m12 2 3 7h7l-5.5 4.5 2 7.5L12 17l-6.5 4 2-7.5L2 9h7z" />
          </svg>
          5
        </div>
      </div>
      <p className="mt-3 text-[11.5px] text-[var(--muted)]">{r.region}</p>
      <p className="mt-0.5 text-[13px] font-bold truncate">{r.building}</p>
      <p className="mt-1 text-[12px] text-[var(--muted)] line-clamp-2 leading-snug">{r.body}</p>
    </div>
  );
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({ left: dir === "left" ? -600 : 600, behavior: "smooth" });
  };
  return (
    <section className="bg-[var(--surface-soft)] py-14">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-center text-[22px] font-black">워크모어 고객의 실시간 후기</h2>
        <div className="relative mt-8">
          <button
            aria-label="이전"
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 rounded-full bg-white shadow border border-[var(--line)] items-center justify-center hover:bg-[var(--surface-soft)]"
          >
            ‹
          </button>
          <div
            ref={trackRef}
            className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          >
            {reviews.map((r) => (
              <div key={r.building} className="snap-start">
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
          <button
            aria-label="다음"
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 rounded-full bg-white shadow border border-[var(--line)] items-center justify-center hover:bg-[var(--surface-soft)]"
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === 2 ? "bg-black" : "bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
