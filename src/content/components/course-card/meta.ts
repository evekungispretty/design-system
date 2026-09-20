import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Course Card",
  description:
    "Summary card for a course in a browsable grid: thumbnail on top, then a centered title, short description and category pills.",
  propTable: [
    { name: "title", type: "string", description: "Course name, rendered as a heading." },
    { name: "description", type: "string", description: "One or two lines about the course." },
    { name: "audience", type: "\"kid\" | \"adult\"", default: "\"kid\"", description: "Kid: warm grey surface, red border, red pills. Adult: white surface, purple border, purple pills. Named \"style\" in Figma; renamed to avoid the native style attribute." },
    { name: "caption", type: "string", description: "Bold lead-in text before the pills, e.g. \"擊破\"." },
    { name: "tags", type: "string[]", default: "[]", description: "Category pills, rendered with the Pill component in red (kid) or purple (adult)." },
    { name: "thumbnail", type: "ReactNode", description: "Content for the 151px-tall image area — an img, or next/image with fill." },
    { name: "as", type: "\"h2\" | \"h3\" | \"h4\"", default: "\"h3\"", description: "Heading level for the title, so it fits the page's outline." },
    { name: "...props", type: "HTMLAttributes<HTMLElement>", description: "All native element attributes are passed through to the article." },
  ],
  dos: [
    "Use the audience that matches the course — the border and pill colors are how visitors tell kid and adult courses apart at a glance.",
    "Keep descriptions to about two lines so cards in a row stay the same height.",
    "Choose the heading level to match where the grid sits on the page.",
  ],
  donts: [
    "Don't mix kid and adult cards in the same row without a reason — the color change reads as a category change.",
    "Don't put more pills than fit on a line at the narrowest card width.",
  ],
};

export default meta;
