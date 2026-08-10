import type { ComponentMeta } from "@/lib/component-meta";

const meta: ComponentMeta = {
  title: "Button",
  description:
    "Primary CTA. Pill radius at every size — Default (42px tall) and Big (60px tall).",
  propTable: [
    { name: "variant", type: "\"primary\" | \"secondary\" | \"tertiary\" | \"text\" | \"outline-orange\" | \"text-dark-bg\" | \"tertiary-dark-bg\"", default: "\"primary\"", description: "Visual style. The \"-dark-bg\" variants are for use on dark/colored surfaces." },
    { name: "size", type: "\"default\" | \"big\"", default: "\"default\"", description: "Default is 42px tall (padding 12/16); Big is 60px tall (padding 8/32). Big is only verified in Figma for Primary." },
    { name: "iconLeft", type: "ReactNode", description: "Optional icon rendered before the label." },
    { name: "iconRight", type: "ReactNode", description: "Optional icon rendered after the label." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables interaction and applies the disabled visual treatment." },
    { name: "...props", type: "ButtonHTMLAttributes<HTMLButtonElement>", description: "All native button attributes (onClick, type, etc.) are passed through." },
  ],
  dos: [
    "Use Primary for the single most important action on a screen — avoid more than one per view.",
    "Use the \"-dark-bg\" variants only on dark or saturated-color surfaces (e.g. the dark footer, hero panels).",
    "Keep labels short and action-oriented (\"Save changes\", not \"Click here to save your changes\").",
  ],
  donts: [
    "Don't override the label color on Primary — it must stay color/text/primary (#1A1A1A). White text on the orange fill is 1.86:1 contrast and fails WCAG AA.",
    "Don't use Big size on non-Primary variants without checking with design first — it isn't verified in the source file.",
    "Don't stack more than one Primary button in the same view; use Secondary or Tertiary for supporting actions.",
  ],
};

export default meta;
