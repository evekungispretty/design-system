import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Tab Group",
  description:
    "A sliding-pill tab switch. Tabs sit in a rounded track and one red pill glides to the active tab, sized by measuring it at runtime.",
  propTable: [
    { name: "tabs", type: "{ value: string; label: string; controls?: string }[]", description: "The tabs, in order. controls is the id of the tabpanel each tab shows (aria-controls)." },
    { name: "value", type: "string", description: "Controlled selected tab. Use together with onValueChange." },
    { name: "defaultValue", type: "string", description: "Initially selected tab for uncontrolled use. Defaults to the first tab." },
    { name: "onValueChange", type: "(value: string) => void", description: "Called when the selection changes, by click or keyboard." },
    { name: "aria-label", type: "string", description: "Accessible name for the tablist. Required unless the group is labelled by nearby text." },
  ],
  dos: [
    "Give the group an aria-label, and set controls on each tab so it points at its panel.",
    "Use two or three tabs — the Figma component shows two and three.",
  ],
  donts: [
    "Don't hardcode the pill's width or position. The pill's numbers in Figma only match one viewport and token mode; the component measures the active tab.",
    "Don't use it for navigation between separate pages.",
  ],
};

export default meta;
