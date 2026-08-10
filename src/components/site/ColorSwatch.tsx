"use client";

import { useState } from "react";
import type { ColorGroup } from "@/lib/tokens";

function Swatch({ name, value, cssVar, description }: { name: string; value: string; cssVar: string; description?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(`var(${cssVar})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex flex-col overflow-hidden rounded-lg border border-border-default text-left transition-colors hover:border-action-primary"
    >
      <span
        className="block h-16 w-full border-b border-border-default"
        style={{ backgroundColor: value }}
      />
      <span className="flex flex-col gap-0.5 p-3">
        <span className="text-xs font-medium text-text-primary">{name}</span>
        <span className="font-mono text-[11px] text-text-secondary">{value}</span>
        <span className="font-mono text-[11px] text-text-secondary group-hover:text-action-primary">
          {copied ? "Copied!" : cssVar}
        </span>
        {description && (
          <span className="mt-1 text-[11px] leading-snug text-text-secondary">{description}</span>
        )}
      </span>
    </button>
  );
}

export function ColorSwatchGroups({ groups }: { groups: ColorGroup[] }) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.name}>
          <h2 className="mb-3 text-sm font-semibold text-text-primary">{group.name}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {group.tokens.map((token) => (
              <Swatch key={token.cssVar} {...token} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
