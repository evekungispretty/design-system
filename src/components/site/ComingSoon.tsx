import type { NavItem } from "@/lib/nav-registry";

export function ComingSoon({ item, kind }: { item: NavItem; kind: "component" | "pattern" }) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
          {item.category}
        </p>
        <span className="rounded-full border border-border-default px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-text-secondary">
          Coming soon
        </span>
      </div>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-text-primary">
        {item.title}
      </h1>
      <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
        {item.description}
      </p>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-secondary">
        This {kind}&apos;s usage guidance, live preview, prop table, and
        code snippet haven&apos;t been written yet
        {item.figmaNodeId ? (
          <>
            {" "}
            (source: Figma node <code className="rounded bg-bg-surface px-1 py-0.5 font-mono text-xs">{item.figmaNodeId}</code>)
          </>
        ) : null}
        .
      </p>
    </div>
  );
}
