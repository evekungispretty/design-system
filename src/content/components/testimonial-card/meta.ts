import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Testimonial Card",
  description:
    "Quote card for parent and expert testimonials: a round avatar with position and name, the quote, and an optional link to a recommendation video.",
  propTable: [
    { name: "name", type: "string", description: "The person's name." },
    { name: "position", type: "string", description: "Job title or affiliation, shown above the name." },
    { name: "quote", type: "string", description: "The testimonial text." },
    { name: "avatarSrc", type: "string", description: "Avatar image URL. Without it, the first character of the name is shown on a neutral circle." },
    { name: "linkHref", type: "string", description: "Adds a text link under the quote." },
    { name: "linkLabel", type: "string", default: "\">> 點我看推薦影片\"", description: "Text of the link." },
    { name: "lines", type: "number", description: "Clamps the quote to this many lines. By default the quote is shown in full." },
    { name: "...props", type: "HTMLAttributes<HTMLElement>", description: "All native element attributes are passed through to the figure." },
  ],
  dos: [
    "Use real names, real titles and real photos — the card is social proof.",
    "Keep quotes short enough to read in a grid; use lines to clamp longer ones and link to the full text.",
  ],
  donts: [
    "Don't crop the quote mid-sentence without a way to read the rest.",
    "Don't use it for anonymous testimonials; the person's name and title are the point.",
  ],
};

export default meta;
