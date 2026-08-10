"use client";

import { useState } from "react";

export function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-border-default bg-bg-surface">
      <div className="flex items-center justify-between border-b border-border-default px-3 py-1.5">
        <span className="text-xs text-text-secondary">{language}</span>
        <button
          type="button"
          onClick={copy}
          className="rounded-md px-2 py-1 text-xs text-text-secondary transition-colors hover:bg-bg-surface-hover hover:text-text-primary"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
