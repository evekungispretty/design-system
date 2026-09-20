import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Checkbox",
  description:
    "Binary selection control. A 26px rounded box that fills red with a white check when selected, and turns its border red on error.",
  propTable: [
    { name: "invalid", type: "boolean", default: "false", description: "Error state — swaps the border to feedback/error and sets aria-invalid. Pair it with a visible error message." },
    { name: "checked", type: "boolean", description: "Controlled checked state. Use together with onChange." },
    { name: "defaultChecked", type: "boolean", description: "Initial checked state for uncontrolled use." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables interaction and dims the box to 40% opacity (not drawn in Figma — applied from opacity/disabled)." },
    { name: "...props", type: "InputHTMLAttributes<HTMLInputElement>", description: "All native input attributes (name, value, onChange, aria-label, etc.) are passed through to the underlying input." },
  ],
  dos: [
    "Give every Checkbox an accessible name — wrap it in a label, or pass aria-label.",
    "Use it for independent yes/no choices, or for picking several options from a list.",
    "Show a text error message next to a Checkbox in the error state.",
  ],
  donts: [
    "Don't use a Checkbox for a choice that takes effect immediately — use a toggle or a Button.",
    "Don't rely on the red border alone to communicate an error; the message has to say what's wrong.",
    "Don't use Checkboxes for mutually exclusive options; those need a radio group.",
  ],
};

export default meta;
