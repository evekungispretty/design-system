import { type HTMLAttributes, type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/cn";
import { Pill } from "./Pill";

export interface CourseCardProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /** Kid = warm surface with a red border; Adult = white surface with a purple border. Named "style" in Figma. */
  audience?: "kid" | "adult";
  title: string;
  description: string;
  /** Bold lead-in before the pills, e.g. "擊破". */
  caption?: string;
  /** Category pills. Red for kid cards, purple for adult cards. */
  tags?: string[];
  /** 151px-tall image slot — pass an <img> or next/image with `fill`. */
  thumbnail?: ReactNode;
  /** Heading level for the title. */
  as?: "h2" | "h3" | "h4";
}

export const CourseCard = forwardRef<HTMLElement, CourseCardProps>(
  (
    { className, audience = "kid", title, description, caption, tags = [], thumbnail, as: Heading = "h3", ...props },
    ref,
  ) => {
    return (
      <article
        ref={ref}
        className={cn(
          "flex w-full flex-col overflow-clip rounded-[var(--ds-radius-xl)] border-2 border-solid",
          audience === "adult"
            ? "border-[var(--ds-color-brand-purple-500)] bg-[var(--ds-color-bg-page)]"
            : "border-[var(--ds-color-brand-red-500)] bg-[var(--ds-color-bg-surface-2)]",
          className,
        )}
        {...props}
      >
        <div className="relative h-[151px] w-full shrink-0 overflow-hidden [&>img]:size-full [&>img]:object-cover">
          {thumbnail}
        </div>
        <div className="flex flex-col items-center gap-[var(--ds-space-2xs)] px-[var(--ds-space-m)] py-[var(--ds-space-s)]">
          <div className="flex w-full flex-col items-center gap-[var(--ds-space-3xs)] text-center">
            <Heading className="w-full text-[length:var(--ds-font-size-step-0)] font-extrabold leading-[30px] text-[var(--ds-color-text-primary)]">
              {title}
            </Heading>
            <p className="w-full text-[length:var(--ds-font-size-step-neg-2)] leading-[26px] text-[var(--ds-color-text-secondary)]">
              {description}
            </p>
          </div>
          {(caption || tags.length > 0) && (
            <div className="flex flex-wrap items-center justify-center gap-[var(--ds-space-2xs)] py-[var(--ds-space-3xs)]">
              {caption && (
                <span className="whitespace-nowrap text-[length:var(--ds-font-size-step-neg-1)] font-bold leading-[26px] text-[var(--ds-color-text-primary)]">
                  {caption}
                </span>
              )}
              {tags.map((tag) => (
                <Pill
                  key={tag}
                  tone={audience === "adult" ? "purple" : "red"}
                  className="text-[length:var(--ds-font-size-step-0)] font-bold leading-[30px]"
                >
                  {tag}
                </Pill>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  },
);
CourseCard.displayName = "CourseCard";
