"use client";

import {
  type ButtonHTMLAttributes,
  type KeyboardEvent,
  type Ref,
  useCallback,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/cn";

const tabBase =
  "relative z-10 inline-flex select-none items-center overflow-clip whitespace-nowrap rounded-[var(--ds-radius-pill)] px-[var(--ds-space-m)] py-[var(--ds-space-2xs)] text-[length:var(--ds-font-size-step-neg-1)] font-bold leading-[26px] outline-none transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ds-color-border-focus)] motion-reduce:transition-none";

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  /** Skip the tab's own red pill — TabGroup paints one sliding pill instead. */
  bare?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

/** A single tab; standalone it paints its own red pill when selected. */
export function Tab({ className, selected = false, bare = false, type = "button", ...props }: TabProps) {
  return (
    <button
      type={type}
      role="tab"
      aria-selected={selected}
      className={cn(
        tabBase,
        selected
          ? cn("text-[var(--ds-color-text-inverse)]", !bare && "bg-[var(--ds-color-brand-red-900)]")
          : "cursor-pointer text-[var(--ds-color-text-disabled)] hover:text-[var(--ds-color-text-secondary)]",
        className,
      )}
      {...props}
    />
  );
}

export interface TabGroupItem {
  value: string;
  label: string;
  /** id of the tabpanel this tab controls (aria-controls). */
  controls?: string;
}

export interface TabGroupProps {
  tabs: TabGroupItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  "aria-label"?: string;
  className?: string;
}

export function TabGroup({
  tabs,
  value,
  defaultValue,
  onValueChange,
  className,
  "aria-label": ariaLabel,
}: TabGroupProps) {
  const baseId = useId();
  const [inner, setInner] = useState(defaultValue ?? tabs[0]?.value);
  const current = value ?? inner;
  const refs = useRef(new Map<string, HTMLButtonElement>());
  // `animate` stays false for the first measurement so the pill doesn't slide in from 0.
  const [pill, setPill] = useState<{ x: number; w: number; animate: boolean } | null>(null);

  // Pill geometry is measured from the active tab — the Figma px values only
  // match one viewport/token mode, so they are never hardcoded.
  const measure = useCallback(() => {
    const el = current ? refs.current.get(current) : undefined;
    if (el) setPill((prev) => ({ x: el.offsetLeft, w: el.offsetWidth, animate: prev !== null }));
  }, [current]);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    refs.current.forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, [measure, tabs]);

  function select(next: string) {
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const i = tabs.findIndex((t) => t.value === current);
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    if (next < 0) return;
    e.preventDefault();
    const t = tabs[next];
    select(t.value);
    refs.current.get(t.value)?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
      className={cn(
        "relative inline-flex items-start gap-1 overflow-clip rounded-[var(--ds-radius-pill)] bg-[var(--ds-color-bg-surface-2)] p-[var(--ds-space-3xs)]",
        className,
      )}
    >
      {pill && (
        <span
          aria-hidden
          className={cn(
            "absolute left-0 top-[var(--ds-space-3xs)] bottom-[var(--ds-space-3xs)] rounded-[var(--ds-radius-pill)] bg-[var(--ds-color-brand-red-900)] motion-reduce:transition-none",
            pill.animate && "transition-[transform,width] duration-[400ms] ease-[cubic-bezier(.88,-.35,.565,1.35)]",
          )}
          style={{ width: pill.w, transform: `translateX(${pill.x}px)` }}
        />
      )}
      {tabs.map((t) => (
        <Tab
          key={t.value}
          id={`${baseId}-${t.value}`}
          bare
          selected={t.value === current}
          aria-controls={t.controls}
          tabIndex={t.value === current ? 0 : -1}
          onClick={() => select(t.value)}
          ref={(el) => {
            if (el) refs.current.set(t.value, el);
            else refs.current.delete(t.value);
          }}
        >
          {t.label}
        </Tab>
      ))}
    </div>
  );
}
