import Link from "next/link";
import type { Metadata } from "next";
import { guidelines } from "@/lib/nav-registry";

export const metadata: Metadata = {
  title: "Guidelines",
  description: "Design tokens: color, typography, spacing, radius, and iconography.",
};

export default function GuidelinesIndex() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-text-primary">
        Guidelines
      </h1>
      <p className="mb-8 text-sm text-text-secondary">
        The design tokens behind every component and pattern, sourced from
        the MiLingual Figma variable collections.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {guidelines.map((g) => (
          <Link
            key={g.slug}
            href={`/guidelines/${g.slug}`}
            className="rounded-lg border border-border-default p-4 transition-colors hover:border-action-primary hover:bg-bg-surface"
          >
            <h2 className="mb-1 text-sm font-semibold text-text-primary">
              {g.title}
            </h2>
            <p className="text-sm text-text-secondary">{g.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
