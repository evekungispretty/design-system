import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Checkbox Interactive",
  description:
    "A full-width card that wraps a Checkbox and a label. The whole row is the click target, with a red border when checked and a raised shadow on hover.",
  propTable: [
    { name: "label", type: "ReactNode", description: "The row's text. Rendered in bold body type." },
    { name: "checked", type: "boolean", description: "Controlled checked state. Use together with onChange." },
    { name: "defaultChecked", type: "boolean", description: "Initial checked state for uncontrolled use." },
    { name: "invalid", type: "boolean", default: "false", description: "Error state on the inner Checkbox." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the row and dims it to 40% opacity (not drawn in Figma)." },
    { name: "...props", type: "InputHTMLAttributes<HTMLInputElement>", description: "All native input attributes (name, value, onChange, etc.) are passed through to the inner checkbox." },
  ],
  dos: [
    "Use it for short, self-contained statements a person can tick — the source file uses it for a list of parent worries.",
    "Stack several with 12–16px between them so each reads as its own option.",
    "Keep the label to a line or two; the row grows to fit, but long paragraphs read poorly in a card.",
  ],
  donts: [
    "Don't put links or buttons inside the label — the whole row is already a single click target.",
    "Don't use it for dense form lists where plain Checkboxes with labels save space.",
  ],
};

export default meta;
