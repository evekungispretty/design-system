import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Tab",
  description:
    "A single tab: a pill-shaped button that is filled red when selected and muted grey when not. Normally used inside a Tab Group.",
  propTable: [
    { name: "selected", type: "boolean", default: "false", description: "Selected tabs get white text on a red pill; inactive tabs get muted grey text with no fill. Sets aria-selected." },
    { name: "bare", type: "boolean", default: "false", description: "Skips the tab's own red pill. Tab Group sets this because it paints one sliding pill behind all tabs." },
    { name: "children", type: "ReactNode", description: "The tab label." },
    { name: "...props", type: "ButtonHTMLAttributes<HTMLButtonElement>", description: "All native button attributes (onClick, id, aria-controls, etc.) are passed through." },
  ],
  dos: [
    "Use Tab inside a Tab Group so selection state, keyboard arrows and the sliding pill are handled for you.",
    "Keep labels to a couple of words — tabs never wrap.",
  ],
  donts: [
    "Don't use Tab for page-level navigation between routes; use links.",
    "Don't use more tabs than fit on one row at the narrowest width; the group doesn't scroll.",
  ],
};

export default meta;
