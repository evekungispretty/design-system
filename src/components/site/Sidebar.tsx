"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navSections, guidelines } from "@/lib/nav-registry";
import { useSidebar } from "./sidebar-context";
import { StatusBadge } from "./StatusBadge";

export function SidebarMobileTrigger() {
  const { setMobileOpen } = useSidebar();
  return (
    <button
      type="button"
      onClick={() => setMobileOpen(true)}
      aria-label="Open navigation"
      className="flex size-9 items-center justify-center rounded-md text-text-secondary hover:bg-bg-surface-hover md:hidden"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18M3 12h18M3 18h18" />
      </svg>
    </button>
  );
}

function CategoryGroup({
  name,
  children,
  defaultOpen = true,
}: {
  name: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-wide text-text-secondary hover:text-text-primary"
      >
        {name}
        <svg
          viewBox="0 0 24 24"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-90" : ""}`}
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      {open && <div className="mt-0.5 space-y-0.5">{children}</div>}
    </div>
  );
}

function SidebarLink({ href, label, status }: { href: string; label: string; status?: "ready" | "planned" }) {
  const pathname = usePathname();
  const { setMobileOpen } = useSidebar();
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={() => setMobileOpen(false)}
      className={`flex items-center justify-between rounded-md px-2.5 py-1.5 text-sm transition-colors ${
        active
          ? "bg-bg-surface font-medium text-text-primary"
          : "text-text-secondary hover:bg-bg-surface-hover hover:text-text-primary"
      }`}
    >
      <span>{label}</span>
      {status === "planned" && <StatusBadge status={status} />}
    </Link>
  );
}

function SidebarContent() {
  const pathname = usePathname();
  const inGuidelines = pathname.startsWith("/guidelines");

  return (
    <nav className="space-y-6 overflow-y-auto px-2 py-4 text-sm">
      {navSections.map((section) => (
        <div key={section.key}>
          <div className="mb-1 px-2 text-xs font-bold uppercase tracking-wide text-text-primary">
            {section.label}
          </div>
          {section.categories.map((category) => (
            <CategoryGroup key={category.name} name={category.name}>
              {category.items.map((item) => (
                <SidebarLink
                  key={item.slug}
                  href={`${section.basePath}/${item.slug}`}
                  label={item.title}
                  status={item.status}
                />
              ))}
            </CategoryGroup>
          ))}
        </div>
      ))}

      <div>
        <div className="mb-1 px-2 text-xs font-bold uppercase tracking-wide text-text-primary">
          Guidelines
        </div>
        <CategoryGroup name="Foundations" defaultOpen={inGuidelines || true}>
          {guidelines.map((g) => (
            <SidebarLink
              key={g.slug}
              href={`/guidelines/${g.slug}`}
              label={g.title}
            />
          ))}
        </CategoryGroup>
      </div>
    </nav>
  );
}

export function Sidebar() {
  const { mobileOpen, setMobileOpen } = useSidebar();

  return (
    <>
      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 border-r border-border-default md:block">
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-72 overflow-y-auto border-r border-border-default bg-bg-page">
            <div className="flex h-14 items-center justify-between border-b border-border-default px-4">
              <span className="text-sm font-semibold">Navigation</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation"
                className="flex size-8 items-center justify-center rounded-md hover:bg-bg-surface-hover"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
}
