import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Video Card",
  description:
    "Media card for video content: a 16:9-ish thumbnail with a one-line description beneath. On hover a dark overlay and a \"watch video\" pill appear over the thumbnail.",
  propTable: [
    { name: "description", type: "string", description: "Short text under the thumbnail. Also the card's accessible name." },
    { name: "thumbnail", type: "ReactNode", description: "Content for the 195px-tall thumbnail area — an img, or next/image with fill." },
    { name: "href", type: "string", description: "Makes the card a link. Provide either href or onClick." },
    { name: "onClick", type: "() => void", description: "Makes the card a button, e.g. to open a video lightbox. Provide either href or onClick." },
    { name: "actionLabel", type: "string", default: "\"觀看影片\"", description: "Label on the hover overlay pill." },
    { name: "className", type: "string", description: "Extra classes for the card." },
  ],
  dos: [
    "Use a thumbnail that already looks like a video — the source file's default has a play badge baked into the image.",
    "Keep the description to a line or two.",
    "Use onClick to open a lightbox player and href to link out.",
  ],
  donts: [
    "Don't rely on the hover overlay to explain the card — touch users never see it.",
    "Don't nest another link or button inside the card; the whole card is already one control.",
  ],
};

export default meta;
