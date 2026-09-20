import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Accordion",
  description:
    "Expandable content sections. A card with an optional numbered badge, a title and a plus/minus icon; the body slides open beneath the title.",
  propTable: [
    { name: "title", type: "string", description: "The always-visible heading of the section." },
    { name: "children", type: "ReactNode", description: "The body revealed when the section is open." },
    { name: "order", type: "number | string | false", default: "false", description: "Number shown in the blue badge before the title. Pass a number to show the badge; false hides it." },
    { name: "value", type: "string", description: "Identifies the item inside an AccordionGroup. Required there." },
    { name: "defaultOpen", type: "boolean", default: "false", description: "Initial state for uncontrolled use. Items ship closed." },
    { name: "open", type: "boolean", description: "Controlled open state. Use together with onOpenChange." },
    { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the header is toggled." },
    { name: "AccordionGroup › type", type: "\"single\" | \"multiple\"", default: "\"multiple\"", description: "single keeps one item open at a time; multiple lets items open independently." },
    { name: "AccordionGroup › defaultValue", type: "string[]", default: "[]", description: "Values of the items open on first render." },
  ],
  dos: [
    "Ship every item closed. Open frames in a mock are for copy review only — never launch a page with all items open.",
    "Wrap related items in an AccordionGroup and choose single or multiple deliberately.",
    "Let long titles wrap onto two lines on mobile; the header grows rather than clipping.",
  ],
  donts: [
    "Don't animate to height: auto or a hardcoded max-height. The component uses a grid-row transition so any body length works.",
    "Don't put the only route to essential information inside a closed accordion.",
  ],
};

export default meta;
