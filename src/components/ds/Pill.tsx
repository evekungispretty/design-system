import { type HTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const pillVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-[var(--ds-radius-pill)] px-4 py-1 text-sm font-medium",
  {
    variants: {
      tone: {
        white:
          "border border-[var(--ds-color-primary-300)] bg-[var(--ds-color-pill-white-fill)] text-[var(--ds-color-text-primary)] shadow-[inset_4px_0_10px_var(--ds-color-primary-300)]",
        brown: "bg-[var(--ds-color-pill-brown-fill)] text-[var(--ds-color-text-inverse)]",
        purple: "bg-[var(--ds-color-pill-purple-fill)] text-[var(--ds-color-text-inverse)]",
        red: "bg-[var(--ds-color-pill-red-fill)] text-[var(--ds-color-text-inverse)]",
        green: "bg-[var(--ds-color-pill-green-fill)] text-[var(--ds-color-text-inverse)]",
        blue: "bg-[var(--ds-color-pill-blue-fill)] text-[var(--ds-color-text-inverse)]",
      },
    },
    defaultVariants: { tone: "red" },
  },
);

export interface PillProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof pillVariants> {}

export const Pill = forwardRef<HTMLSpanElement, PillProps>(
  ({ className, tone, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(pillVariants({ tone }), className)} {...props}>
        {children}
      </span>
    );
  },
);
Pill.displayName = "Pill";
