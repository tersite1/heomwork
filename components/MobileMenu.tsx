"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "지도", href: "/map" },
  { label: "계약", href: "/contracts" },
  { label: "채팅", href: "/chat" },
  { label: "방 등록하기", href: "/host" },
  { label: "워크모어 임대인 시작하기", href: "/host/start" },
  { label: "로그인", href: "/login" },
  { label: "회원가입", href: "/signup" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="모바일 메뉴 열기"
        onClick={() => setOpen(true)}
        className="md:hidden w-9 h-9 rounded-md border border-[var(--line)] flex items-center justify-center"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-xl flex flex-col">
            <div className="flex justify-end p-4">
              <button aria-label="닫기" onClick={() => setOpen(false)} className="w-9 h-9 rounded-md hover:bg-[var(--surface-soft)]">
                ✕
              </button>
            </div>
            <ul className="px-2 pb-6 overflow-y-auto">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-[15px] font-semibold rounded-md hover:bg-[var(--surface-soft)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}
