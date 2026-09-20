import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Schedule Day Card",
  description:
    "Card for a single day of a class schedule: weekday, a typed icon, a title and subtitle, and a footer that either links to a demo video or shows a duration.",
  propTable: [
    { name: "weekday", type: "string", description: "Day label at the top, e.g. \"週一\"." },
    { name: "title", type: "string", description: "What happens that day, e.g. \"看影片\"." },
    { name: "subtitle", type: "string", description: "Short line under the title." },
    { name: "type", type: "\"video\" | \"liveClass\" | \"feedback\"", default: "\"video\"", description: "Picks the icon, surface and title color. Video: white with a blue icon disc. Live class: yellow with red border and orange title. Feedback: blue with blue title." },
    { name: "href", type: "string", description: "Footer becomes a \"demo video\" link with a play icon." },
    { name: "linkLabel", type: "string", default: "\"示範影片\"", description: "Text of the footer link." },
    { name: "duration", type: "string", description: "Muted footer text such as \"25 分鐘\". Shown when there's no href." },
    { name: "reviewed", type: "boolean", default: "false", description: "Adds the red \"老師檢收\" pill overlapping the top edge." },
    { name: "reviewedLabel", type: "string", default: "\"老師檢收\"", description: "Text of the reviewed pill." },
    { name: "...props", type: "HTMLAttributes<HTMLElement>", description: "All native element attributes are passed through to the article." },
  ],
  dos: [
    "Use the three types consistently — they teach visitors to recognise video, live class and feedback days at a glance.",
    "Give the reviewed pill room above the card; it overlaps the top edge by 24px.",
    "Lay seven cards out as a week; the card is designed for roughly a seventh of the container.",
  ],
  donts: [
    "Don't add both an href and a duration — the footer shows one or the other.",
    "Don't invent new types without design; each type's color set is a fixed combination.",
  ],
};

export default meta;
