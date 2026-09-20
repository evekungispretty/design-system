import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface TestimonialCardProps extends HTMLAttributes<HTMLElement> {
  name: string;
  /** Job title / affiliation, shown above the name. */
  position: string;
  quote: string;
  /** Avatar image URL. Falls back to the first character of `name`. */
  avatarSrc?: string;
  /** Adds the ">> 點我看推薦影片" link under the quote. */
  linkHref?: string;
  linkLabel?: string;
  /** Clamp the quote to this many lines. Figma doesn't specify an expanded state, so the default is no clamp. */
  lines?: number;
}

export const TestimonialCard = forwardRef<HTMLElement, TestimonialCardProps>(
  (
    { className, name, position, quote, avatarSrc, linkHref, linkLabel = ">> 點我看推薦影片", lines, ...props },
    ref,
  ) => {
    return (
      <figure
        ref={ref}
        className={cn(
          "m-0 flex w-full flex-col gap-[var(--ds-space-s)] overflow-clip rounded-[var(--ds-radius-xl)] border border-solid border-[var(--ds-color-border-brand)] bg-[var(--ds-color-bg-page)] p-[var(--ds-space-m)]",
          className,
        )}
        {...props}
      >
        <figcaption className="flex items-center gap-[14px]">
          {avatarSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarSrc} alt="" width={53} height={53} className="size-[52.848px] shrink-0 rounded-full object-cover" />
          ) : (
            <span
              aria-hidden
              className="flex size-[52.848px] shrink-0 items-center justify-center rounded-full bg-[var(--ds-color-bg-surface-2)] text-[length:var(--ds-font-size-step-1)] font-bold text-[var(--ds-color-text-secondary)]"
            >
              {name.charAt(0)}
            </span>
          )}
          <span className="flex min-w-0 flex-1 flex-col font-bold">
            <span className="text-[length:var(--ds-font-size-step-neg-2)] leading-[26px] text-[var(--ds-color-text-secondary)]">
              {position}
            </span>
            <span className="text-[length:var(--ds-font-size-step-0)] leading-[30px] text-[var(--ds-color-text-primary)]">
              {name}
            </span>
          </span>
        </figcaption>
        <blockquote className="m-0">
          <p
            className="m-0 text-[length:var(--ds-font-size-step-neg-1)] leading-[26px] text-[var(--ds-color-icon-primary)]"
            style={lines ? { display: "-webkit-box", WebkitLineClamp: lines, WebkitBoxOrient: "vertical", overflow: "hidden" } : undefined}
          >
            {quote}
          </p>
        </blockquote>
        {linkHref && (
          <a
            href={linkHref}
            className="whitespace-nowrap text-[length:var(--ds-font-size-step-neg-1)] leading-[26px] text-[var(--ds-color-text-link)] outline-none hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ds-color-border-focus)]"
          >
            {linkLabel}
          </a>
        )}
      </figure>
    );
  },
);
TestimonialCard.displayName = "TestimonialCard";
