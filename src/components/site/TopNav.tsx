"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { SearchPalette } from "./SearchPalette";
import { SidebarMobileTrigger } from "./Sidebar";

const primaryLinks = [
  { href: "/get-started", label: "Get Started" },
  { href: "/components", label: "Components" },
  { href: "/patterns", label: "Patterns" },
  { href: "/guidelines", label: "Guidelines" },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border-default bg-bg-page/95 backdrop-blur">
      <div className="flex h-14 items-center gap-4 px-4 md:px-6">
        <SidebarMobileTrigger />

        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-text-primary"
        >
          <span className="flex size-6 items-center justify-center rounded-md bg-action-primary text-white">
            M
          </span>
          <span className="hidden sm:inline">MiLingual Design Library</span>
        </Link>

        <nav className="ml-2 hidden items-center gap-1 md:flex">
          {primaryLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-bg-surface text-text-primary"
                    : "text-text-secondary hover:bg-bg-surface-hover hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden sm:block">
            <SearchPalette />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
