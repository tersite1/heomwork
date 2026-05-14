"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  value: { start?: string; end?: string };
  onChange: (next: { start?: string; end?: string }) => void;
  placeholder?: string;
};

const DAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"];

function fmt(d: Date) {
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function display(s?: string) {
  if (!s) return "";
  const [, m, d] = s.split("-");
  return `${parseInt(m)}월 ${parseInt(d)}일`;
}
function buildMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function DatePicker({ value, onChange, placeholder = "머무를 일정을 선택해 주세요" }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const today = useMemo(() => {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }, []);
  const [cursor, setCursor] = useState({ y: today.getFullYear(), m: today.getMonth() });

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const label =
    value.start && value.end
      ? `${display(value.start)} – ${display(value.end)}`
      : value.start
      ? `${display(value.start)} – 종료일 선택`
      : "";

  function pickDay(d: Date) {
    const iso = fmt(d);
    if (!value.start || (value.start && value.end)) {
      onChange({ start: iso, end: undefined });
      return;
    }
    if (iso < value.start) {
      onChange({ start: iso, end: value.start });
    } else if (iso === value.start) {
      onChange({ start: iso, end: iso });
    } else {
      onChange({ start: value.start, end: iso });
    }
  }

  function shiftMonth(delta: number) {
    setCursor((c) => {
      const next = new Date(c.y, c.m + delta, 1);
      return { y: next.getFullYear(), m: next.getMonth() };
    });
  }

  const cells = buildMonth(cursor.y, cursor.m);

  return (
    <div ref={ref} className="relative flex-1">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center px-4 py-3 gap-3 text-left"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <rect x="4" y="5" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 10h16M9 3v4M15 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span className={`flex-1 text-[14px] truncate ${label ? "text-black" : "text-[var(--muted)]"}`}>
          {label || placeholder}
        </span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 mt-2 z-50 bg-white border border-[var(--line)] rounded-xl shadow-lg p-4 w-[320px]">
          <div className="flex items-center justify-between mb-3">
            <button type="button" onClick={() => shiftMonth(-1)} className="w-8 h-8 rounded-md hover:bg-[var(--surface-soft)]">‹</button>
            <p className="font-bold text-[14px]">{cursor.y}년 {cursor.m + 1}월</p>
            <button type="button" onClick={() => shiftMonth(1)} className="w-8 h-8 rounded-md hover:bg-[var(--surface-soft)]">›</button>
          </div>
          <div className="grid grid-cols-7 text-center text-[11px] text-[var(--muted)] mb-1">
            {DAY_LABELS.map((d) => <div key={d} className="py-1">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((d, i) => {
              if (!d) return <div key={i} />;
              const iso = fmt(d);
              const isPast = d < today;
              const isStart = iso === value.start;
              const isEnd = iso === value.end;
              const isInRange = value.start && value.end && iso > value.start && iso < value.end;
              const base = "h-9 text-[13px] rounded-md transition-colors";
              const cls = isPast
                ? "text-gray-300 cursor-not-allowed"
                : isStart || isEnd
                ? "bg-[var(--brand)] text-white font-bold"
                : isInRange
                ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                : "hover:bg-[var(--surface-soft)]";
              return (
                <button
                  key={i}
                  type="button"
                  disabled={isPast}
                  onClick={() => pickDay(d)}
                  className={`${base} ${cls}`}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
          <div className="mt-3 flex justify-between text-[12px]">
            <button type="button" onClick={() => onChange({})} className="text-[var(--muted)] hover:text-black">
              초기화
            </button>
            <button type="button" onClick={() => setOpen(false)} className="font-bold text-[var(--brand)]">
              적용
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
