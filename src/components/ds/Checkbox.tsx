import { type InputHTMLAttributes, type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** Error state — red border on the empty box. Also sets aria-invalid. */
  invalid?: boolean;
}

/**
 * The native input sits invisibly on top of the 34px hit area (26px box + 4px
 * padding), so clicks, focus and keyboard toggling are all native. The visible
 * box is a sibling styled through `peer-*` variants.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, invalid, disabled, ...props }, ref) => {
    return (
      <span
        className={cn(
          "relative inline-flex shrink-0 p-[var(--ds-space-3xs)]",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          className,
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          disabled={disabled}
          aria-invalid={invalid ? true : undefined}
          className="peer absolute inset-0 m-0 size-full cursor-[inherit] opacity-0"
          {...props}
        />
        <span
          aria-hidden
          className="pointer-events-none relative size-[26px] rounded-[var(--ds-radius-sm)] border-[length:var(--ds-icon-stroke)] border-solid border-[var(--ds-color-border-light)] bg-[var(--ds-color-primary-100)] transition-colors duration-150 peer-checked:border-[var(--ds-color-action-primary-active)] peer-checked:bg-[var(--ds-color-action-primary-active)] peer-checked:[&>img]:opacity-100 peer-aria-invalid:border-[var(--ds-color-feedback-error)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--ds-color-border-focus)] peer-disabled:opacity-[var(--ds-opacity-disabled)] motion-reduce:transition-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/check.svg"
            alt=""
            width={24}
            height={23}
            className="absolute left-1/2 top-1/2 h-[23px] w-6 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-0"
          />
        </span>
      </span>
    );
  },
);
Checkbox.displayName = "Checkbox";

export interface CheckboxInteractiveProps extends Omit<CheckboxProps, "children"> {
  label: ReactNode;
}

/**
 * A whole-row checkbox: the label is the click target, and the row gets the
 * red border when checked, a raised shadow on hover.
 */
export const CheckboxInteractive = forwardRef<HTMLInputElement, CheckboxInteractiveProps>(
  ({ label, className, disabled, ...props }, ref) => {
    return (
      <label
        className={cn(
          "flex w-full items-center gap-[var(--ds-space-2xs)] rounded-[var(--ds-radius-lg)] border border-solid border-[var(--ds-color-primary-100)] bg-[var(--ds-color-bg-page)] px-[var(--ds-space-m)] py-[var(--ds-space-s)] shadow-[0_6px_18px_#1A1C2912] transition-[box-shadow,border-color] duration-150 has-[:checked]:border-[var(--ds-color-brand-red-700)] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--ds-color-border-focus)] motion-reduce:transition-none",
          disabled
            ? "cursor-not-allowed opacity-[var(--ds-opacity-disabled)]"
            : "cursor-pointer hover:shadow-[0_6px_26px_#1A1C2921]",
          className,
        )}
      >
        <Checkbox ref={ref} disabled={disabled} {...props} />
        <span className="flex-1 text-[length:var(--ds-font-size-step-0)] font-bold leading-[30px] text-[var(--ds-color-text-primary)]">
          {label}
        </span>
      </label>
    );
  },
);
CheckboxInteractive.displayName = "CheckboxInteractive";
