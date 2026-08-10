"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { buildSearchIndex } from "@/lib/nav-registry";

const searchIndex = buildSearchIndex();

export function SearchPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 w-full max-w-xs items-center gap-2 rounded-md border border-border-default bg-bg-surface px-3 text-sm text-text-secondary transition-colors hover:bg-bg-surface-hover"
      >
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="flex-1 text-left">Search components, patterns…</span>
        <kbd className="rounded border border-border-default px-1.5 py-0.5 text-[11px]">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-[15vh]"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-lg border border-border-default bg-bg-page shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Command label="Search MiLingual Design Library">
              <Command.Input
                autoFocus
                placeholder="Search components, patterns, guidelines…"
                className="w-full border-b border-border-default bg-transparent px-4 py-3 text-sm outline-none placeholder:text-text-secondary"
              />
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-sm text-text-secondary">
                  No results found.
                </Command.Empty>
                {searchIndex.map((entry) => (
                  <Command.Item
                    key={entry.href}
                    value={`${entry.title} ${entry.description}`}
                    onSelect={() => go(entry.href)}
                    className="flex cursor-pointer flex-col gap-0.5 rounded-md px-3 py-2 text-sm data-[selected=true]:bg-bg-surface-hover"
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-medium text-text-primary">
                        {entry.title}
                      </span>
                      <span className="text-xs text-text-secondary">
                        {entry.section}
                      </span>
                    </span>
                    <span className="text-xs text-text-secondary">
                      {entry.description}
                    </span>
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
