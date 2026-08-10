import type { ComponentType } from "react";
import type { NavItem } from "@/lib/nav-registry";
import type { ComponentMeta } from "@/lib/component-meta";
import { TabNav } from "./TabNav";
import { PropTable } from "./PropTable";
import { DoDontGrid } from "./DoDontGrid";
import { CodeBlock } from "./CodeBlock";

export function ComponentDetailPage({
  item,
  meta,
  Usage,
  Style,
  Accessibility,
  Example,
  exampleSource,
}: {
  item: NavItem;
  meta: ComponentMeta;
  Usage: ComponentType;
  Style: ComponentType;
  Accessibility: ComponentType;
  Example: ComponentType;
  exampleSource: string;
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

      <TabNav
        tabs={[
          {
            key: "usage",
            label: "Usage",
            content: (
              <div>
                <Usage />
                <div className="mt-6">
                  <DoDontGrid dos={meta.dos} donts={meta.donts} />
                </div>
              </div>
            ),
          },
          {
            key: "style",
            label: "Style",
            content: <Style />,
          },
          {
            key: "code",
            label: "Code",
            content: (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border-default bg-bg-page p-8">
                  <Example />
                </div>
                <CodeBlock code={exampleSource} />
                <PropTable props={meta.propTable} />
              </div>
            ),
          },
          {
            key: "accessibility",
            label: "Accessibility",
            content: <Accessibility />,
          },
        ]}
      />
    </div>
  );
}
