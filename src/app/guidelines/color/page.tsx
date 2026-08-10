import type { Metadata } from "next";
import { semanticColorGroups, primitiveColorGroups } from "@/lib/tokens";
import { ColorSwatchGroups } from "@/components/site/ColorSwatch";

export const metadata: Metadata = {
  title: "Color",
  description: "Brand, neutral, semantic, and feedback color tokens.",
};

export default function ColorGuidelinesPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-text-primary">
        Color
      </h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-text-secondary">
        Resolved from the Semantic and Primitives variable collections in the
        MiLingual Figma file. Click a swatch to copy its CSS variable. Build
        with semantic tokens (Action, Feedback, Text…) rather than binding to
        a primitive scale directly — it keeps the system rethemeable from one
        place.
      </p>

      <h2 className="mb-4 text-lg font-semibold text-text-primary">Semantic</h2>
      <div className="mb-12">
        <ColorSwatchGroups groups={semanticColorGroups} />
      </div>

      <h2 className="mb-4 text-lg font-semibold text-text-primary">Primitives</h2>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-text-secondary">
        Raw scale values. Consume through semantic tokens above rather than
        binding directly, so a retheme only requires updating the semantic
        layer.
      </p>
      <ColorSwatchGroups groups={primitiveColorGroups} />
    </div>
  );
}
