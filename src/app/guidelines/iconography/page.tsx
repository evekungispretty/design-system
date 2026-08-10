import type { Metadata } from "next";
import { iconStrokes } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Iconography",
  description: "Icon stroke weights and usage guidance.",
};

export default function IconographyGuidelinesPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-text-primary">
        Iconography
      </h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-text-secondary">
        Icons are drawn from the{" "}
        <a
          href="https://lucide.dev"
          className="text-action-primary underline underline-offset-2"
        >
          Lucide
        </a>{" "}
        icon set, at one of two stroke weights. The Figma file doesn&apos;t
        expose a dedicated icon component library yet — only the stroke
        tokens below.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {iconStrokes.map((token) => (
          <div key={token.cssVar} className="rounded-lg border border-border-default p-6">
            <svg
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="none"
              stroke="currentColor"
              strokeWidth={token.value.replace("px", "")}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4 text-text-primary"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l2.5 2.5L16 9" />
            </svg>
            <p className="text-xs font-medium text-text-primary">{token.name}</p>
            <p className="font-mono text-[11px] text-text-secondary">{token.value}</p>
            {token.description && (
              <p className="mt-1 text-[11px] leading-snug text-text-secondary">{token.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
