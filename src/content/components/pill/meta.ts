import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Pill",
  description:
    "Compact label for status, category, or metadata. Six fill colors, always fully rounded.",
  propTable: [
    { name: "tone", type: "\"red\" | \"green\" | \"blue\" | \"purple\" | \"brown\" | \"white\"", default: "\"red\"", description: "Fill color (named \"color\" in Figma; renamed here to avoid colliding with the native HTML color attribute). White is the only variant with a border and inner shadow — the rest are flat colored fills." },
    { name: "children", type: "ReactNode", description: "The pill's label content." },
    { name: "...props", type: "HTMLAttributes<HTMLSpanElement>", description: "All native span attributes are passed through." },
  ],
  dos: [
    "Use Pill for short, glanceable labels — a category, a status word, a count.",
    "Reach for White when a pill needs to sit on a colored or busy background and the six brand colors would clash.",
    "Keep label text to one or two words; Pill doesn't wrap or truncate.",
  ],
  donts: [
    "Don't use Pill as a button — it has no built-in interactive or focus state. Use Button or Tab for anything clickable.",
    "Don't rely on color alone to convey meaning (e.g. red = error) without also stating it in the label — colors here are categorical, not semantic/feedback colors.",
  ],
};

export default meta;
