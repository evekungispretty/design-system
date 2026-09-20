import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Active on Outline Orange switches to a red-900 fill/border (per Figma) but
 * the source file doesn't specify a matching text color for that state —
 * forced to white here so it stays legible; re-check against Figma if that
 * state ships design changes.
 */
const buttonVariants = cva(
  "inline-flex select-none items-center justify-center gap-1 whitespace-nowrap rounded-[var(--ds-radius-pill)] font-medium shadow-[0_6px_18px_#1A1C29] outline-none transition-[transform,box-shadow,background-color,border-color,color] duration-150 ease-out active:duration-100 hover:-translate-y-2.5 active:translate-y-0 motion-reduce:hover:translate-y-0 disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ds-color-border-focus)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--ds-color-action-primary)] text-[var(--ds-color-text-primary)] hover:bg-[var(--ds-color-action-primary-hover)] hover:text-[var(--ds-color-text-inverse)] active:bg-[var(--ds-color-action-primary-active)] active:text-[var(--ds-color-text-inverse)] disabled:bg-[var(--ds-color-bg-disabled)] disabled:text-[var(--ds-color-text-disabled)]",
        secondary:
          "border border-transparent bg-[var(--ds-color-action-secondary)] text-[var(--ds-color-text-primary)] hover:border-white hover:bg-[var(--ds-color-action-secondary-hover)] active:border-[var(--ds-color-action-secondary-active)] active:bg-[var(--ds-color-bg-surface-active-strong)] disabled:border-[var(--ds-color-neutral-300)] disabled:opacity-[var(--ds-opacity-disabled)]",
        tertiary:
          "bg-transparent text-[var(--ds-color-text-primary)] hover:bg-[var(--ds-color-bg-surface-hover)] active:bg-[var(--ds-color-bg-surface-active)] disabled:opacity-[var(--ds-opacity-disabled)]",
        text: "bg-transparent text-[var(--ds-color-text-primary)] hover:bg-[var(--ds-color-bg-surface-hover)] active:bg-[var(--ds-color-bg-surface-active)] disabled:opacity-[var(--ds-opacity-disabled)]",
        "outline-orange":
          "border border-[var(--ds-color-brand-orange-900)] bg-transparent text-[var(--ds-color-brand-orange-900)] hover:bg-[var(--ds-color-brand-orange-300)] active:border-[var(--ds-color-brand-red-900)] active:bg-[var(--ds-color-brand-red-900)] active:text-white disabled:border-[var(--ds-color-neutral-300)] disabled:text-[var(--ds-color-text-disabled)] disabled:opacity-[var(--ds-opacity-disabled)]",
        "text-dark-bg":
          "bg-transparent text-[var(--ds-color-text-inverse)] hover:bg-[var(--ds-color-brand-orange-900)] active:bg-[var(--ds-color-brand-red-900)] disabled:bg-[var(--ds-color-bg-disabled)] disabled:text-[var(--ds-color-text-disabled)]",
        "tertiary-dark-bg":
          "bg-transparent text-[var(--ds-color-text-inverse)] hover:bg-[var(--ds-color-bg-surface-hover-on-dark)] active:bg-[var(--ds-color-bg-surface-active-on-dark)] disabled:bg-[var(--ds-color-bg-disabled-on-dark)]",
      },
      size: {
        default: "",
        big: "px-8 py-2",
      },
    },
    compoundVariants: [
      { variant: "primary", size: "default", class: "px-4 py-3" },
      { variant: "secondary", size: "default", class: "px-4 py-3" },
      { variant: "tertiary", size: "default", class: "px-3 py-2" },
      { variant: "text", size: "default", class: "px-4 py-1" },
      { variant: "outline-orange", size: "default", class: "px-4 py-3" },
      { variant: "text-dark-bg", size: "default", class: "px-4 py-1" },
      { variant: "tertiary-dark-bg", size: "default", class: "px-3 py-2" },
    ],
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconLeft, iconRight, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {iconLeft}
        {children}
        {iconRight}
      </button>
    );
  },
);
Button.displayName = "Button";
