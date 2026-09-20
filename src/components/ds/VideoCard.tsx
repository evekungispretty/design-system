import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface VideoCardBaseProps {
  description: string;
  /** 195px-tall thumbnail slot — pass an <img> or next/image with `fill`. */
  thumbnail?: ReactNode;
  /** Label on the hover overlay. */
  actionLabel?: string;
  className?: string;
}

export type VideoCardProps = VideoCardBaseProps &
  (
    | { href: string; onClick?: never }
    | { href?: undefined; onClick?: () => void }
  );

const cardClass =
  "group flex w-full flex-col overflow-clip rounded-[var(--ds-radius-lg)] border border-solid border-[var(--ds-color-primary-300)] bg-[var(--ds-color-bg-page)] text-left no-underline outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ds-color-border-focus)]";

/**
 * The whole card is one link/button. The hover overlay is decorative — the
 * accessible name comes from the description.
 */
export function VideoCard({
  description,
  thumbnail,
  actionLabel = "觀看影片",
  className,
  href,
  onClick,
}: VideoCardProps) {
  const body = (
    <>
      <span className="relative block h-[195px] w-full overflow-hidden [&>img]:size-full [&>img]:object-cover">
        {thumbnail}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        >
          <span className="flex items-center gap-1 rounded-[var(--ds-radius-pill)] px-[var(--ds-space-xs)] py-[var(--ds-space-2xs)] text-[length:var(--ds-font-size-step-neg-1)] font-bold leading-[26px] text-[var(--ds-color-text-inverse)] drop-shadow-[0_6px_9px_#1A1C2912]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/eye.svg" alt="" width={24} height={24} className="size-6" />
            {actionLabel}
          </span>
        </span>
      </span>
      <span className="block px-[var(--ds-space-s)] py-[var(--ds-space-xs)] text-[13.5px] text-[var(--ds-color-text-primary)]">
        {description}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(cardClass, className)}>
        {body}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cn(cardClass, "cursor-pointer", className)}>
      {body}
    </button>
  );
}
