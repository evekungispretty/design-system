import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

const types = {
  video: {
    card: "border-[var(--ds-color-primary-300)] bg-[var(--ds-color-bg-page)]",
    wrap: "bg-[var(--ds-color-brand-blue-300)]",
    icon: "/icons/clapperboard.svg",
    title: "text-[var(--ds-color-text-primary)]",
  },
  liveClass: {
    card: "border-[var(--ds-color-brand-red-900)] bg-[var(--ds-color-brand-yellow-300)]",
    wrap: "bg-white",
    icon: "/icons/speech.svg",
    title: "text-[var(--ds-color-brand-orange-700)]",
  },
  feedback: {
    card: "border-[var(--ds-color-brand-blue-700)] bg-[var(--ds-color-brand-blue-300)]",
    wrap: "bg-white",
    icon: "/icons/message-square-more.svg",
    title: "text-[var(--ds-color-brand-blue-900)]",
  },
} as const;

export interface ScheduleDayCardProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  type?: keyof typeof types;
  weekday: string;
  title: string;
  subtitle: string;
  /** Footer shows this label + play icon as a link. Omit for a duration-only footer. */
  href?: string;
  linkLabel?: string;
  /** Muted footer text, e.g. "25 分鐘". Shown when there's no `href`. */
  duration?: string;
  /** Red "老師檢收" pill overlapping the top edge. */
  reviewed?: boolean;
  reviewedLabel?: string;
}

export const ScheduleDayCard = forwardRef<HTMLElement, ScheduleDayCardProps>(
  (
    {
      className,
      type = "video",
      weekday,
      title,
      subtitle,
      href,
      linkLabel = "示範影片",
      duration,
      reviewed = false,
      reviewedLabel = "老師檢收",
      ...props
    },
    ref,
  ) => {
    const t = types[type];
    return (
      <article
        ref={ref}
        className={cn(
          "relative flex w-full flex-col items-center gap-[var(--ds-space-3xs)] rounded-[var(--ds-radius-lg)] border border-solid px-[var(--ds-space-2xs)] py-[var(--ds-space-s)]",
          t.card,
          className,
        )}
        {...props}
      >
        {reviewed && (
          <span className="absolute left-1/2 top-[-24px] flex h-[38px] -translate-x-1/2 items-start whitespace-nowrap rounded-[var(--ds-radius-pill)] bg-[var(--ds-color-pill-red-fill)] px-[var(--ds-space-s)] py-[var(--ds-space-3xs)] text-[length:var(--ds-font-size-step-0)] font-bold leading-[30px] text-[var(--ds-color-text-inverse)]">
            {reviewedLabel}
          </span>
        )}
        <p className="whitespace-nowrap text-center text-[length:var(--ds-font-size-step-neg-1)] font-bold leading-[26px] text-[var(--ds-color-text-secondary)]">
          {weekday}
        </p>
        <span className={cn("flex size-[46px] shrink-0 items-center justify-center rounded-full", t.wrap)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.icon} alt="" aria-hidden width={24} height={24} className="size-6" />
        </span>
        <p className={cn("whitespace-nowrap text-center text-[length:var(--ds-font-size-step-0)] font-bold leading-[30px]", t.title)}>
          {title}
        </p>
        <p className="w-full text-center text-[length:var(--ds-font-size-step-neg-2)] font-bold leading-[26px] text-[var(--ds-color-text-secondary)]">
          {subtitle}
        </p>
        <hr className="m-0 w-10 border-0 border-t border-solid border-[var(--ds-color-primary-300)]" />
        <div className="flex h-11 w-full items-center justify-center">
          {href ? (
            <a
              href={href}
              className="flex items-center justify-center gap-1 whitespace-nowrap rounded-[var(--ds-radius-pill)] px-[var(--ds-space-xs)] py-[var(--ds-space-2xs)] text-[length:var(--ds-font-size-step-neg-1)] font-bold leading-[26px] text-[var(--ds-color-text-primary)] no-underline shadow-[0_6px_9px_#1A1C2912] outline-none transition-colors duration-150 hover:bg-[var(--ds-color-bg-surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ds-color-border-focus)] motion-reduce:transition-none"
            >
              {linkLabel}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/play.svg" alt="" aria-hidden width={24} height={24} className="size-6" />
            </a>
          ) : (
            duration && (
              <span className="whitespace-nowrap text-center text-[length:var(--ds-font-size-step-neg-2)] font-bold leading-[26px] text-[var(--ds-color-text-disabled)]">
                {duration}
              </span>
            )
          )}
        </div>
      </article>
    );
  },
);
ScheduleDayCard.displayName = "ScheduleDayCard";
