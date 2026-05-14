"use client";

import { useEffect, useRef, useState } from "react";

const LANGS = ["KR", "EN", "JP", "CN"];

export default function LangMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("KR");
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
        onClick={() => setOpen((o) => !o)}
        className="text-[13px] text-[var(--muted)] hover:text-black px-1"
      >
        {active} ▾
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-[100px] bg-white border border-[var(--line)] rounded-xl shadow-lg py-1 z-50">
          {LANGS.map((l) => (
            <li key={l}>
              <button
                onClick={() => {
                  setActive(l);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-[13px] hover:bg-[var(--surface-soft)] ${
                  active === l ? "font-bold text-[var(--brand)]" : ""
                }`}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
