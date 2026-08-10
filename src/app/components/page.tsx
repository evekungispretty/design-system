import Link from "next/link";
import type { Metadata } from "next";
import { componentsSection } from "@/lib/nav-registry";
import { StatusBadge } from "@/components/site/StatusBadge";

export const metadata: Metadata = {
  title: "Components",
  description: "Coded, reusable UI primitives with live previews and prop tables.",
};

export default function ComponentsIndex() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-text-primary">
        Components
      </h1>
      <p className="mb-8 text-sm text-text-secondary">
        Reusable, atomic UI primitives — each with a live interactive
        preview, prop/API table, do&apos;s and don&apos;ts, and copyable
        code.
      </p>

      {componentsSection.categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-text-secondary">
            {category.name}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {category.items.map((item) => (
              <Link
                key={item.slug}
                href={`/components/${item.slug}`}
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
