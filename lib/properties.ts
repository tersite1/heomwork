export type Property = {
  id: string;
  title: string;
  region: string;
  type: "오피스텔" | "아파트" | "원룸" | "투룸" | "쓰리룸+";
  pricePerWeek: number;
  pricePerMonth: number;
  rating: number;
  reviewCount: number;
  rooms: number;
  baths: number;
  area: number;
  tone: number;
  amenities: string[];
};

export const properties: Property[] = [
  { id: "wm-001", title: "신림역 도보 3분 풀옵션 원룸", region: "서울특별시 관악구", type: "원룸", pricePerWeek: 280000, pricePerMonth: 980000, rating: 4.9, reviewCount: 132, rooms: 1, baths: 1, area: 6.6, tone: 0, amenities: ["WiFi", "에어컨", "세탁기", "냉장고"] },
  { id: "wm-002", title: "강동 센트럴 아파트 풀옵션", region: "서울특별시 강동구", type: "아파트", pricePerWeek: 420000, pricePerMonth: 1480000, rating: 4.8, reviewCount: 98, rooms: 2, baths: 1, area: 18.2, tone: 1, amenities: ["엘리베이터", "주차", "WiFi", "건조기"] },
  { id: "wm-003", title: "광화문 오피스텔, 시청 도보 5분", region: "서울특별시 중구", type: "오피스텔", pricePerWeek: 360000, pricePerMonth: 1280000, rating: 5.0, reviewCount: 76, rooms: 1, baths: 1, area: 9.8, tone: 2, amenities: ["WiFi", "헬스장", "라운지"] },
  { id: "wm-004", title: "목동역 블루힐 오피스텔", region: "서울특별시 양천구", type: "오피스텔", pricePerWeek: 320000, pricePerMonth: 1180000, rating: 4.7, reviewCount: 54, rooms: 1, baths: 1, area: 8.4, tone: 3, amenities: ["주차", "WiFi", "보안"] },
  { id: "wm-005", title: "남동 카르페 신축 투룸", region: "인천광역시 남동구", type: "투룸", pricePerWeek: 380000, pricePerMonth: 1320000, rating: 4.9, reviewCount: 41, rooms: 2, baths: 1, area: 16.5, tone: 4, amenities: ["WiFi", "주차", "건조기"] },
  { id: "wm-006", title: "성산항 도보 7분, 애견 동반 가능", region: "제주특별자치도 서귀포시", type: "투룸", pricePerWeek: 460000, pricePerMonth: 1680000, rating: 4.9, reviewCount: 88, rooms: 2, baths: 1, area: 22.1, tone: 5, amenities: ["애견 동반", "정원", "WiFi"] },
  { id: "wm-007", title: "수지구청 올수리 쓰리룸", region: "경기도 용인시 수지구", type: "쓰리룸+", pricePerWeek: 540000, pricePerMonth: 1880000, rating: 4.6, reviewCount: 32, rooms: 3, baths: 2, area: 26.4, tone: 6, amenities: ["주차", "엘리베이터", "WiFi"] },
  { id: "wm-008", title: "서울역 도보 5분 풀옵션 원룸", region: "서울특별시 용산구", type: "원룸", pricePerWeek: 310000, pricePerMonth: 1090000, rating: 5.0, reviewCount: 145, rooms: 1, baths: 1, area: 7.2, tone: 7, amenities: ["WiFi", "에어컨", "TV"] },
  { id: "wm-009", title: "천안 서북구 일루일루 넓은 원룸", region: "충청남도 천안시 서북구", type: "원룸", pricePerWeek: 240000, pricePerMonth: 820000, rating: 4.8, reviewCount: 27, rooms: 1, baths: 1, area: 10.5, tone: 0, amenities: ["주차", "WiFi"] },
  { id: "wm-010", title: "전주 완산구 새미하우스 풀옵션", region: "전라북도 전주시 완산구", type: "원룸", pricePerWeek: 220000, pricePerMonth: 760000, rating: 4.9, reviewCount: 19, rooms: 1, baths: 1, area: 8.0, tone: 1, amenities: ["WiFi", "에어컨"] },
  { id: "wm-011", title: "강남역 6번 출구 풀옵션 오피스텔", region: "서울특별시 강남구", type: "오피스텔", pricePerWeek: 480000, pricePerMonth: 1690000, rating: 4.9, reviewCount: 213, rooms: 1, baths: 1, area: 9.1, tone: 2, amenities: ["헬스장", "라운지", "WiFi", "보안"] },
  { id: "wm-012", title: "홍대입구 신축 오피스텔", region: "서울특별시 마포구", type: "오피스텔", pricePerWeek: 410000, pricePerMonth: 1450000, rating: 4.8, reviewCount: 167, rooms: 1, baths: 1, area: 8.7, tone: 3, amenities: ["WiFi", "주차"] },
];

export function findProperty(id: string) {
  return properties.find((p) => p.id === id);
}

export function searchProperties(query: { keyword?: string; type?: string }) {
  return properties.filter((p) => {
    if (query.type && p.type !== query.type) return false;
    if (query.keyword) {
      const k = query.keyword.toLowerCase();
      const haystack = `${p.title} ${p.region} ${p.type}`.toLowerCase();
      if (!haystack.includes(k)) return false;
    }
    return true;
  });
}
