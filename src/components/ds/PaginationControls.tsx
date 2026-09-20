import { cn } from "@/lib/cn";

const WINDOW = 5;

/** Up to five consecutive pages, kept centered on `page` and clamped at both ends. */
function pageWindow(page: number, pageCount: number): number[] {
  const size = Math.min(WINDOW, pageCount);
  const start = Math.max(1, Math.min(page - Math.floor(size / 2), pageCount - size + 1));
  return Array.from({ length: size }, (_, i) => start + i);
}

const arrowClass =
  "inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-[var(--ds-radius-pill)] border border-solid border-[var(--ds-color-border-brand)] bg-[var(--ds-color-bg-page)] text-[23.04px] leading-none text-[var(--ds-color-text-secondary)] outline-none transition-colors duration-150 hover:bg-[var(--ds-color-bg-surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ds-color-border-focus)] disabled:cursor-not-allowed disabled:opacity-[var(--ds-opacity-disabled)] disabled:hover:bg-[var(--ds-color-bg-page)] motion-reduce:transition-none";

export interface PaginationControlsProps {
  /** Current page, 1-based. */
  page: number;
  pageCount: number;
  onPageChange?: (page: number) => void;
  variant?: "dots" | "numbers";
  className?: string;
}

export function PaginationControls({
  page,
  pageCount,
  onPageChange,
  variant = "dots",
  className,
}: PaginationControlsProps) {
  const pages = pageWindow(page, pageCount);
  const go = (p: number) => onPageChange?.(Math.min(Math.max(p, 1), pageCount));

  return (
    <nav
      aria-label="Pagination"
      className={cn("inline-flex items-center justify-center gap-4", className)}
    >
      <button type="button" aria-label="Previous page" disabled={page <= 1} onClick={() => go(page - 1)} className={arrowClass}>
        <span aria-hidden>‹</span>
      </button>

      {variant === "dots" ? (
        <span role="img" aria-label={`Page ${page} of ${pageCount}`} className="flex items-center gap-[9px]">
          {pages.map((p) => (
            <span
              key={p}
              className={cn(
                "size-[10px] rounded-full",
                p === page ? "bg-[var(--ds-color-neutral-500)]" : "bg-[var(--ds-color-neutral-300)]",
              )}
            />
          ))}
        </span>
      ) : (
        <ul className="flex items-center gap-2">
          {pages.map((p) => (
            <li key={p}>
              <button
                type="button"
                aria-label={`Page ${p}`}
                aria-current={p === page ? "page" : undefined}
                onClick={() => go(p)}
                className={cn(
                  "inline-flex size-8 cursor-pointer items-center justify-center rounded-[var(--ds-radius-pill)] text-[length:var(--ds-font-size-step-neg-1)] leading-none outline-none transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ds-color-border-focus)] motion-reduce:transition-none",
                  p === page
                    ? "bg-[var(--ds-color-action-primary-active)] font-bold text-[var(--ds-color-text-inverse)]"
                    : "text-[var(--ds-color-text-secondary)] hover:bg-[var(--ds-color-bg-surface-2)]",
                )}
              >
                {p}
              </button>
            </li>
          ))}
        </ul>
      )}

      <button type="button" aria-label="Next page" disabled={page >= pageCount} onClick={() => go(page + 1)} className={arrowClass}>
        <span aria-hidden>›</span>
      </button>
    </nav>
  );
}
