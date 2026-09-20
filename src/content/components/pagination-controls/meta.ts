import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Pagination Controls",
  description:
    "Previous and next arrows around a five-item window — either dots or page numbers — to move through a paged list or carousel.",
  propTable: [
    { name: "page", type: "number", description: "The current page, 1-based." },
    { name: "pageCount", type: "number", description: "Total number of pages." },
    { name: "onPageChange", type: "(page: number) => void", description: "Called with the new page when an arrow or a page number is pressed. Clamped to 1..pageCount." },
    { name: "variant", type: "\"dots\" | \"numbers\"", default: "\"dots\"", description: "Dots show position only; Numbers show clickable page numbers. Named \"style\" in Figma." },
    { name: "className", type: "string", description: "Extra classes for the nav element." },
  ],
  dos: [
    "Use Dots for carousels and short galleries, where position matters more than page number.",
    "Use Numbers for lists where people need to jump to a specific page.",
    "Keep the controls close to the content they page.",
  ],
  donts: [
    "Don't use it for more than a handful of pages without truncation — the window is five items.",
    "Don't use Dots when people must jump to an exact page; they can't be clicked.",
  ],
};

export default meta;
