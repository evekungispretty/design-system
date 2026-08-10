export function StatusBadge({ status }: { status: "ready" | "planned" }) {
  if (status === "ready") return null;
  return (
    <span className="rounded-full border border-border-default px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-text-secondary">
      Soon
    </span>
  );
}
