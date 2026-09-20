import Image from "next/image";
import type { ComponentType } from "react";
import type { NavItem } from "@/lib/nav-registry";
import type { PatternMeta } from "@/lib/pattern-meta";

export function PatternDetailPage({
  item,
  meta,
  Overview,
}: {
  item: NavItem;
  meta: PatternMeta;
  Overview: ComponentType;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-text-secondary">
        {item.category}
      </p>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-text-primary">
        {meta.title}
      </h1>
      <p className="mb-8 max-w-xl text-sm leading-relaxed text-text-secondary">
        {meta.description}
      </p>

      {meta.screenshot && (
        <div className="mb-8 flex justify-center overflow-hidden rounded-lg border border-border-default bg-bg-surface p-4">
          <Image
            src={meta.screenshot}
            alt={`${meta.title} screenshot`}
            width={meta.screenshotWidth ?? 1200}
            height={meta.screenshotHeight ?? 800}
            className="h-auto max-w-full"
          />
        </div>
      )}

      <Overview />
    </div>
  );
}
