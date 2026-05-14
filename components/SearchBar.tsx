"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import RegionInput from "./RegionInput";
import DatePicker from "./DatePicker";

type Props = {
  defaultKeyword?: string;
  defaultStart?: string;
  defaultEnd?: string;
};

export default function SearchBar({ defaultKeyword = "", defaultStart, defaultEnd }: Props) {
  const router = useRouter();
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [range, setRange] = useState<{ start?: string; end?: string }>({
    start: defaultStart,
    end: defaultEnd,
  });

  function submit() {
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (range.start) params.set("start", range.start);
    if (range.end) params.set("end", range.end);
    router.push(`/search${params.size ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="bg-white rounded-2xl shadow-sm border border-[var(--line)] p-2 flex items-center"
    >
      <RegionInput value={keyword} onChange={setKeyword} onSubmit={submit} />
      <DatePicker value={range} onChange={setRange} />
      <button
        type="submit"
        className="bg-black text-white rounded-xl px-6 py-3 font-bold text-[14px] hover:bg-[var(--brand)] transition-colors"
      >
        검색
      </button>
    </form>
  );
}
