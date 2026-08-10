"use client";

import { useState, type ReactNode } from "react";

export interface DetailTab {
  key: string;
  label: string;
  content: ReactNode;
}

export function TabNav({ tabs }: { tabs: DetailTab[] }) {
  const [active, setActive] = useState(tabs[0]?.key);
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div>
      <div
        role="tablist"
        className="flex gap-1 border-b border-border-default"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            type="button"
            aria-selected={tab.key === active}
            onClick={() => setActive(tab.key)}
            className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
              tab.key === active
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {tab.label}
            {tab.key === active && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 bg-action-primary" />
            )}
          </button>
        ))}
      </div>
      <div className="py-6">{activeTab?.content}</div>
    </div>
  );
}
