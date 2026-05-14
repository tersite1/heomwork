"use client";

import { useEffect, useRef, useState } from "react";

const POPULAR = [
  "강남역", "홍대입구", "성수", "건대입구", "신림역", "광화문", "잠실", "판교", "수지구청", "서귀포",
];

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
};

export default function RegionInput({ value, onChange, onSubmit, placeholder = "지역, 지하철, 건물명을 검색해 보세요" }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const matches = value
    ? POPULAR.filter((p) => p.toLowerCase().includes(value.toLowerCase()))
    : POPULAR;

  return (
    <div ref={ref} className="relative flex-1">
      <div className="flex items-center px-4 py-3 gap-3 border-r border-[var(--line)]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSubmit?.();
              setOpen(false);
            }
          }}
          placeholder={placeholder}
          className="flex-1 outline-none text-[14px] placeholder:text-[var(--muted)] bg-transparent"
        />
      </div>

      {open && (
        <div className="absolute left-0 right-[-1px] mt-2 z-50 bg-white border border-[var(--line)] rounded-xl shadow-lg p-3 min-w-[260px]">
          <p className="text-[11px] font-bold text-[var(--muted)] px-2 pb-2">인기 검색</p>
          <ul className="grid grid-cols-2 gap-1">
            {matches.length === 0 && (
              <li className="col-span-2 px-2 py-3 text-[13px] text-[var(--muted)]">결과가 없어요</li>
            )}
            {matches.map((p) => (
              <li key={p}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(p);
                    setOpen(false);
                  }}
                  className="w-full text-left px-2 py-2 rounded-md text-[13px] hover:bg-[var(--surface-soft)]"
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
