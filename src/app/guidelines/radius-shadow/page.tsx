import type { Metadata } from "next";
import { radiusScale, borderWeights, opacityTokens } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Radius & Shadow",
  description: "Corner radius scale, border weights, and elevation.",
};

export default function RadiusShadowGuidelinesPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-text-primary">
        Radius &amp; Shadow
      </h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-text-secondary">
        The Figma file defines a corner radius scale, two border weights,
        and opacity tokens used for scrims and hover washes — no dedicated
        elevation/shadow scale exists yet.
      </p>

      <h2 className="mb-4 text-lg font-semibold text-text-primary">Radius</h2>
      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {radiusScale.map((token) => (
          <div key={token.cssVar} className="rounded-lg border border-border-default p-4">
            <span
              className="mb-3 block h-16 w-full bg-action-primary/20"
              style={{ borderRadius: token.value }}
            />
            <p className="text-xs font-medium text-text-primary">{token.name}</p>
            <p className="font-mono text-[11px] text-text-secondary">{token.value}</p>
            {token.description && (
              <p className="mt-1 text-[11px] leading-snug text-text-secondary">{token.description}</p>
            )}
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-lg font-semibold text-text-primary">Border weight</h2>
      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {borderWeights.map((token) => (
          <div key={token.cssVar} className="rounded-lg border border-border-default p-4">
            <span
              className="mb-3 block w-full border-t border-text-primary"
              style={{ borderTopWidth: token.value }}
            />
            <p className="text-xs font-medium text-text-primary">{token.name}</p>
            <p className="font-mono text-[11px] text-text-secondary">{token.value}</p>
            {token.description && (
              <p className="mt-1 text-[11px] leading-snug text-text-secondary">{token.description}</p>
            )}
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-lg font-semibold text-text-primary">Opacity</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {opacityTokens.map((token) => (
          <div key={token.cssVar} className="rounded-lg border border-border-default p-4">
            <span
              className="mb-3 block h-12 w-full rounded"
              style={{
                backgroundImage:
                  "conic-gradient(var(--color-border-default) 0.25turn, transparent 0.25turn 0.5turn, var(--color-border-default) 0.5turn 0.75turn, transparent 0.75turn)",
                backgroundSize: "16px 16px",
              }}
            >
              <span
                className="block h-full w-full rounded bg-text-primary"
                style={{ opacity: token.value }}
              />
            </span>
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
