import type { Metadata } from "next";
import { typeScale, fontFamilies, viewportBounds } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Typography",
  description: "Font families, weights, and the fluid type scale.",
};

export default function TypographyGuidelinesPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-text-primary">
        Typography
      </h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-text-secondary">
        Type scales fluidly with the viewport between {viewportBounds.min}px
        and {viewportBounds.max}px using CSS <code className="rounded bg-bg-surface px-1 py-0.5 font-mono text-xs">clamp()</code> —
        resize your browser to see each step scale in real time.
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border-default p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-text-secondary">
            Heading
          </p>
          <p className="text-lg font-semibold text-text-primary">{fontFamilies.heading}</p>
          <p className="text-xs text-text-secondary">Weight: {fontFamilies.weightBold}</p>
        </div>
        <div className="rounded-lg border border-border-default p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-text-secondary">
            Body
          </p>
          <p className="text-lg text-text-primary">{fontFamilies.body}</p>
          <p className="text-xs text-text-secondary">Weight: {fontFamilies.weightRegular}</p>
        </div>
      </div>

      <h2 className="mb-4 text-lg font-semibold text-text-primary">Fluid type scale</h2>
      <div className="divide-y divide-border-default rounded-lg border border-border-default">
        {[...typeScale].reverse().map((step) => (
          <div key={step.cssVar} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-baseline sm:justify-between">
            <p
              className="text-text-primary"
              style={{ fontSize: step.clamp, lineHeight: 1.2 }}
            >
              The quick brown fox jumps.
            </p>
            <div className="shrink-0 text-right">
              <p className="text-xs font-medium text-text-primary">{step.name}</p>
              <p className="font-mono text-[11px] text-text-secondary">
                {step.minPx}px – {step.maxPx}px
              </p>
              <p className="font-mono text-[11px] text-text-secondary">{step.cssVar}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
