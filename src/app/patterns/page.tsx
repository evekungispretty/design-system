import Link from "next/link";
import type { Metadata } from "next";
import { patternsSection } from "@/lib/nav-registry";
import { StatusBadge } from "@/components/site/StatusBadge";

export const metadata: Metadata = {
  title: "Patterns",
  description: "Composed, page-level assemblies documented with specs and screenshots.",
};

export default function PatternsIndex() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-text-primary">
        Patterns
      </h1>
      <p className="mb-8 text-sm text-text-secondary">
        Page-level assemblies built from components — documented with specs
        and screenshots rather than standalone interactive code.
      </p>

      {patternsSection.categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-text-secondary">
            {category.name}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {category.items.map((item) => (
              <Link
                key={item.slug}
                href={`/patterns/${item.slug}`}
                className="flex items-start justify-between gap-3 rounded-lg border border-border-default p-4 transition-colors hover:border-action-primary hover:bg-bg-surface"
              >
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
                <StatusBadge status={item.status} />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
