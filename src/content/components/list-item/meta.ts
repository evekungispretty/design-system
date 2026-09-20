import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "List Item",
  description:
    "A single link row for lists and menus: text on the left, an optional external-link icon on the right, and a hairline divider underneath.",
  propTable: [
    { name: "external", type: "boolean", default: "false", description: "Adds the external-link icon, opens the link in a new tab (rel=noopener noreferrer), and adds hidden \"opens in a new tab\" text for screen readers." },
    { name: "href", type: "string", description: "Link destination." },
    { name: "children", type: "ReactNode", description: "The row's text. Wraps onto multiple lines." },
    { name: "...props", type: "AnchorHTMLAttributes<HTMLAnchorElement>", description: "All native anchor attributes are passed through." },
  ],
  dos: [
    "Use it for stacks of links to related content, such as podcast episodes or articles.",
    "Set external for links that leave the site — the icon and new tab go together.",
  ],
  donts: [
    "Don't use it for actions; a row that does something rather than goes somewhere should be a Button.",
    "Don't add the icon to internal links.",
  ],
};

export default meta;
