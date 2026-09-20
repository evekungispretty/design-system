"use client";

import {
  type ReactNode,
  createContext,
  useContext,
  useId,
  useState,
} from "react";
import { cn } from "@/lib/cn";

interface GroupContext {
  openValues: string[];
  toggle: (value: string) => void;
}

const AccordionGroupContext = createContext<GroupContext | null>(null);

export interface AccordionGroupProps {
  /** "single" keeps one item open at a time; "multiple" lets items open independently. */
  type?: "single" | "multiple";
  defaultValue?: string[];
  children: ReactNode;
  className?: string;
}

export function AccordionGroup({
  type = "multiple",
  defaultValue = [],
  children,
  className,
}: AccordionGroupProps) {
  const [openValues, setOpenValues] = useState(defaultValue);

  function toggle(value: string) {
    setOpenValues((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : type === "single"
          ? [value]
          : [...prev, value],
    );
  }

  return (
    <AccordionGroupContext.Provider value={{ openValues, toggle }}>
      <div className={cn("flex flex-col gap-[var(--ds-space-xs)]", className)}>{children}</div>
    </AccordionGroupContext.Provider>
  );
}

export interface AccordionProps {
  title: string;
  children: ReactNode;
  /** Number shown in the blue badge. Pass `false` to hide the badge. */
  order?: number | string | false;
  /** Required when used inside an AccordionGroup. */
  value?: string;
  /** Uncontrolled initial state. Ships closed by default. */
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Accordion({
  title,
  children,
  order = false,
  value,
  defaultOpen = false,
  open,
  onOpenChange,
  className,
}: AccordionProps) {
  const group = useContext(AccordionGroupContext);
  const [inner, setInner] = useState(defaultOpen);
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  const isOpen =
    open ?? (group && value !== undefined ? group.openValues.includes(value) : inner);

  function toggle() {
    if (group && value !== undefined) group.toggle(value);
    else if (open === undefined) setInner(!isOpen);
    onOpenChange?.(!isOpen);
  }

  const showNumber = order !== false;

  return (
    <div
      className={cn(
        "w-full overflow-clip rounded-[var(--ds-radius-lg)] border border-solid border-[var(--ds-color-border-light)] bg-[var(--ds-color-bg-page)] shadow-[0_6px_18px_#1A1C2912]",
        className,
      )}
    >
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggle}
        className={cn(
          "flex w-full cursor-pointer items-start gap-[var(--ds-space-xs)] px-[var(--ds-space-m)] pt-[var(--ds-space-s)] text-left outline-none transition-[padding] duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--ds-color-border-focus)] motion-reduce:transition-none",
          isOpen ? "pb-[var(--ds-space-3xs)]" : "pb-[var(--ds-space-s)]",
        )}
      >
        {showNumber && (
          <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--ds-radius-sm)] bg-[var(--ds-color-badge-index)] text-[length:var(--ds-font-size-step-neg-1)] font-bold leading-[26px] text-[var(--ds-color-text-inverse)]">
            {order}
          </span>
        )}
        <span className="min-w-0 flex-1 self-center text-[length:var(--ds-font-size-step-0)] font-bold leading-[30px] text-[var(--ds-color-text-primary)]">
          {title}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={isOpen ? "/icons/accordion-open.svg" : "/icons/accordion-closed.svg"}
          alt=""
          aria-hidden
          width={30}
          height={30}
          className="size-[30px] shrink-0"
        />
      </button>

      {/* grid-rows 0fr -> 1fr animates to content height without measuring or max-height. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              "pb-[var(--ds-space-s)] pr-[calc(var(--ds-space-m)+30px+var(--ds-space-xs))] text-[length:var(--ds-font-size-step-neg-1)] leading-[26px] text-[var(--ds-color-text-secondary)]",
              showNumber
                ? "pl-[calc(var(--ds-space-m)+32px+var(--ds-space-xs))]"
                : "pl-[var(--ds-space-m)]",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
