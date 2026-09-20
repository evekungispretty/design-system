import { type AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface ListItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Adds the external-link icon and opens in a new tab. */
  external?: boolean;
}

export const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, external = false, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cn(
          "flex items-center gap-[var(--ds-space-xs)] border-b border-solid border-[var(--ds-color-divider-light)] px-[var(--ds-space-2xs)] py-[var(--ds-space-3xs)] text-base text-[var(--ds-color-text-primary)] no-underline outline-none transition-colors duration-150 hover:bg-[var(--ds-color-bg-surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--ds-color-border-focus)] motion-reduce:transition-none",
          className,
        )}
        {...props}
      >
        <span className="min-w-0 flex-1">{children}</span>
        {external && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/external-link.svg" alt="" aria-hidden width={16} height={16} className="size-4 shrink-0" />
            <span className="sr-only">(opens in a new tab)</span>
          </>
        )}
      </a>
    );
  },
);
ListItem.displayName = "ListItem";
