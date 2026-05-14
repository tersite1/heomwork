"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SignupPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[var(--surface-soft)]">
        <div className="max-w-[420px] mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-[var(--line)] p-8">
            <h1 className="text-[22px] font-black text-center">회원가입</h1>
            <form
              className="mt-6 flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field label="이름" type="text" placeholder="홍길동" />
              <Field label="이메일" type="email" placeholder="you@example.com" />
              <Field label="비밀번호" type="password" placeholder="8자 이상" />
              <Field label="휴대폰 번호" type="tel" placeholder="010-0000-0000" />
              <button
                type="submit"
                className="mt-2 bg-[var(--brand)] text-white rounded-lg py-2.5 font-bold hover:opacity-90"
              >
                계정 만들기
              </button>
            </form>
            <p className="mt-6 text-center text-[12.5px] text-[var(--muted)]">
              이미 계정이 있다면{" "}
              <Link href="/login" className="text-[var(--brand)] font-bold hover:underline">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-[12px] font-semibold text-[var(--muted)]">{label}</span>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="mt-1 w-full border border-[var(--line)] rounded-lg px-3 py-2.5 outline-none focus:border-[var(--brand)] text-[14px]"
      />
    </label>
  );
}
