import type { Metadata } from "next";
import { spaceScale, viewportBounds } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Spacing",
  description: "The fluid spacing scale, from 3XS to 3XL.",
};

export default function SpacingGuidelinesPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-text-primary">
        Spacing
      </h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-text-secondary">
        Nine fluid steps, from 3XS to 3XL, scaling between {viewportBounds.min}px
        and {viewportBounds.max}px viewports. Resize your browser to watch
        the bars below scale.
      </p>

      <div className="space-y-3">
        {spaceScale.map((step) => (
          <div key={step.cssVar} className="flex items-center gap-4">
            <span className="w-10 shrink-0 text-xs font-medium text-text-primary">
              {step.name}
            </span>
            <span className="flex-1">
              <span
                className="block rounded bg-action-primary"
                style={{ width: step.clamp, height: "1rem" }}
              />
            </span>
            <span className="w-24 shrink-0 text-right font-mono text-[11px] text-text-secondary">
              {step.minPx}–{step.maxPx}px
            </span>
            <span className="w-32 shrink-0 text-right font-mono text-[11px] text-text-secondary">
              {step.cssVar}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
