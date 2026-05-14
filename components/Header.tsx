import Link from "next/link";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import LangMenu from "./LangMenu";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "지도", href: "/map" },
  { label: "계약", href: "/contracts" },
  { label: "채팅", href: "/chat" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto h-[68px] px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="워크모어 홈">
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-[15px] font-semibold">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-[var(--brand)] transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-[13px]">
          <Link href="/host" className="text-[var(--muted)] hover:text-black hidden md:inline">
            워크모어 임대인 시작하기
          </Link>
          <div className="hidden md:block">
            <LangMenu />
          </div>
          <div className="hidden md:block">
            <UserMenu variant="label" />
          </div>
          <div className="hidden md:block">
            <UserMenu variant="circle" />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
