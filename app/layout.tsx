import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "워크모어 — 일하며 머무는 단기임대",
  description:
    "출장, 워케이션, 단기 거주까지. 워크모어에서 잠깐 머물 공간을 빠르고 안전하게 찾아보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
