"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const items: { label: string; href: string; emphasize?: boolean }[] = [
  { label: "로그인", href: "/login", emphasize: true },
  { label: "회원가입", href: "/signup" },
  { label: "방 등록하기", href: "/host" },
  { label: "고객센터", href: "#help" },
];

export default function UserMenu({ variant = "circle" }: { variant?: "circle" | "label" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        aria-label="사용자 메뉴"
        onClick={() => setOpen((o) => !o)}
        className={
          variant === "circle"
            ? "w-9 h-9 rounded-full border border-[var(--line)] flex items-center justify-center hover:bg-[var(--surface-soft)]"
            : "border border-[var(--line)] rounded-md px-3 py-2 font-semibold text-[13px] hover:bg-[var(--surface-soft)]"
        }
      >
        {variant === "circle" ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
            <path d="M4 20c1.8-3.5 5-5 8-5s6.2 1.5 8 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          "로그인/회원가입"
        )}
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-[200px] bg-white border border-[var(--line)] rounded-xl shadow-lg py-2 z-50">
          {items.map((it) => (
            <li key={it.label}>
              <Link
                href={it.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 text-[13.5px] hover:bg-[var(--surface-soft)] ${
                  it.emphasize ? "font-bold" : ""
                }`}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
