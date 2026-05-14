"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main className="flex-1 bg-[var(--surface-soft)]">
        <div className="max-w-[420px] mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-[var(--line)] p-8">
            <h1 className="text-[22px] font-black text-center">워크모어 로그인</h1>
            <p className="mt-1 text-center text-[13px] text-[var(--muted)]">
              잠깐 살 집을 더 빠르게 찾을 수 있어요.
            </p>

            <form
              className="mt-6 flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label className="block">
                <span className="text-[12px] font-semibold text-[var(--muted)]">이메일</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border border-[var(--line)] rounded-lg px-3 py-2.5 outline-none focus:border-[var(--brand)] text-[14px]"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="text-[12px] font-semibold text-[var(--muted)]">비밀번호</span>
                <input
                  type="password"
                  required
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  className="mt-1 w-full border border-[var(--line)] rounded-lg px-3 py-2.5 outline-none focus:border-[var(--brand)] text-[14px]"
                  placeholder="••••••••"
                />
              </label>
              <button
                type="submit"
                className="mt-2 bg-[var(--brand)] text-white rounded-lg py-2.5 font-bold hover:opacity-90"
              >
                로그인
              </button>
              {submitted && (
                <p className="text-[12px] text-[var(--muted)] text-center">
                  데모 페이지입니다. 실제 인증은 동작하지 않아요.
                </p>
              )}
            </form>

            <div className="my-6 flex items-center gap-3 text-[12px] text-[var(--muted)]">
              <span className="flex-1 h-px bg-[var(--line)]" /> 또는 <span className="flex-1 h-px bg-[var(--line)]" />
            </div>

            <div className="flex flex-col gap-2">
              <button className="w-full border border-[var(--line)] rounded-lg py-2.5 font-semibold text-[13px] hover:bg-[var(--surface-soft)]">
                카카오로 시작하기
              </button>
              <button className="w-full border border-[var(--line)] rounded-lg py-2.5 font-semibold text-[13px] hover:bg-[var(--surface-soft)]">
                네이버로 시작하기
              </button>
              <button className="w-full border border-[var(--line)] rounded-lg py-2.5 font-semibold text-[13px] hover:bg-[var(--surface-soft)]">
                Google로 시작하기
              </button>
            </div>

            <p className="mt-6 text-center text-[12.5px] text-[var(--muted)]">
              아직 계정이 없으신가요?{" "}
              <Link href="/signup" className="text-[var(--brand)] font-bold hover:underline">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
