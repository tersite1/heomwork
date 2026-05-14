import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import type { Property } from "@/lib/properties";

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <Link href={`/property/${p.id}`} className="block group">
      <PlaceholderImage tone={p.tone} ratio="square" label={p.type} rounded="rounded-2xl" />
      <div className="mt-3">
        <p className="text-[12px] text-[var(--muted)]">{p.region}</p>
        <p className="mt-0.5 text-[14px] font-bold truncate group-hover:underline">{p.title}</p>
        <div className="mt-1 flex items-center gap-1 text-[12px] text-[var(--muted)]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#6E3FF3">
            <path d="m12 2 3 7h7l-5.5 4.5 2 7.5L12 17l-6.5 4 2-7.5L2 9h7z" />
          </svg>
          <span className="font-semibold text-black">{p.rating.toFixed(1)}</span>
          <span>· 후기 {p.reviewCount}</span>
        </div>
        <p className="mt-1.5 text-[14px] font-black">
          주 {p.pricePerWeek.toLocaleString()}원
          <span className="text-[12px] font-medium text-[var(--muted)]"> · 월 {p.pricePerMonth.toLocaleString()}원</span>
        </p>
      </div>
    </Link>
  );
}
