// Design tokens resolved from the MiLingual Figma file (fileKey 1s1BaKUtIiPS3GjM9NyV3S),
// pulled via the figma-console MCP from the Semantic, Primitives, Fluid tokens, and
// Type/Space primitives variable collections. Only one variable mode ("Mode 1") exists
// in the source file, so these are the only values available today.

export interface ColorToken {
  name: string;
  cssVar: string;
  value: string;
  description?: string;
}

export interface ColorGroup {
  name: string;
  tokens: ColorToken[];
}

export const semanticColorGroups: ColorGroup[] = [
  {
    name: "Text",
    tokens: [
      { name: "text/primary", cssVar: "--ds-color-text-primary", value: "#1A1A1A" },
      { name: "text/secondary", cssVar: "--ds-color-text-secondary", value: "#4A4A4A" },
      { name: "text/inverse", cssVar: "--ds-color-text-inverse", value: "#FFFFFF" },
      { name: "text/disabled", cssVar: "--ds-color-text-disabled", value: "#B3B3B3" },
      { name: "text/link", cssVar: "--ds-color-text-link", value: "#447CA2" },
      { name: "text/highlight", cssVar: "--ds-color-text-highlight", value: "#CE574E", description: "Emphasis subtitles, CTA link text." },
      { name: "text/highlight-strong", cssVar: "--ds-color-text-highlight-strong", value: "#C6504E", description: "Attention headlines, numbered list markers." },
      { name: "text/highlight-subtle", cssVar: "--ds-color-text-highlight-subtle", value: "#F4CBC8" },
      { name: "text/highlight-alt", cssVar: "--ds-color-text-highlight-alt", value: "#D5854D" },
      { name: "text/tag", cssVar: "--ds-color-text-tag", value: "#7F839F", description: "Muted hashtag-style labels." },
      { name: "text/stat-value", cssVar: "--ds-color-text-stat-value", value: "#F5AF7E", description: "Large stat numbers." },
      { name: "text/stat-label", cssVar: "--ds-color-text-stat-label", value: "#D5854D" },
    ],
  },
  {
    name: "Background",
    tokens: [
      { name: "bg/page", cssVar: "--ds-color-bg-page", value: "#FFFFFF" },
      { name: "bg/surface-1", cssVar: "--ds-color-bg-surface-1", value: "#FAF8F4" },
      { name: "bg/surface-2", cssVar: "--ds-color-bg-surface-2", value: "#F3F0EB" },
      { name: "bg/dark", cssVar: "--ds-color-bg-dark", value: "#1B263B" },
      { name: "bg/footer", cssVar: "--ds-color-bg-footer", value: "#1A1A1A" },
      { name: "bg/disabled", cssVar: "--ds-color-bg-disabled", value: "#DFDFDF" },
      { name: "bg/surface-hover", cssVar: "--ds-color-bg-surface-hover", value: "#FAF8F4", description: "Hover background for borderless buttons." },
      { name: "bg/surface-active", cssVar: "--ds-color-bg-surface-active", value: "#F3F0EB" },
      { name: "bg/surface-hover-strong", cssVar: "--ds-color-bg-surface-hover-strong", value: "#E8DCCF", description: "Hover background for bordered buttons." },
      { name: "bg/surface-active-strong", cssVar: "--ds-color-bg-surface-active-strong", value: "#D7C6B3" },
      { name: "bg/surface-hover-on-dark", cssVar: "--ds-color-bg-surface-hover-on-dark", value: "#7F839F" },
      { name: "bg/surface-active-on-dark", cssVar: "--ds-color-bg-surface-active-on-dark", value: "#6AA0CC" },
      { name: "bg/disabled-on-dark", cssVar: "--ds-color-bg-disabled-on-dark", value: "#B6B8C3" },
      { name: "bg/surface-highlight", cssVar: "--ds-color-bg-surface-highlight", value: "#292A50" },
    ],
  },
  {
    name: "Border & Divider",
    tokens: [
      { name: "border/light", cssVar: "--ds-color-border-light", value: "#DFDFDF" },
      { name: "border/brand", cssVar: "--ds-color-border-brand", value: "#D7C6B3" },
      { name: "border/focus", cssVar: "--ds-color-border-focus", value: "#F5AF7E" },
      { name: "border/dark-mode", cssVar: "--ds-color-border-dark-mode", value: "#FFFFFF1A", description: "10% white — hairlines on dark surfaces." },
      { name: "divider/divider-default", cssVar: "--ds-color-divider-default", value: "#D7C6B3" },
      { name: "divider/divider-light", cssVar: "--ds-color-divider-light", value: "#F3F0EB" },
    ],
  },
  {
    name: "Action",
    tokens: [
      { name: "action/primary", cssVar: "--ds-color-action-primary", value: "#F5AF7E" },
      { name: "action/primary-hover", cssVar: "--ds-color-action-primary-hover", value: "#B15E10" },
      { name: "action/primary-active", cssVar: "--ds-color-action-primary-active", value: "#C6504E" },
      { name: "action/secondary", cssVar: "--ds-color-action-secondary", value: "#FFFFFF", description: "Border & text for Secondary/Outline buttons." },
      { name: "action/secondary-hover", cssVar: "--ds-color-action-secondary-hover", value: "#EAF3FB" },
      { name: "action/secondary-active", cssVar: "--ds-color-action-secondary-active", value: "#1B263B" },
    ],
  },
  {
    name: "Icon",
    tokens: [
      { name: "icon/primary", cssVar: "--ds-color-icon-primary", value: "#1A1A1A" },
      { name: "icon/secondary", cssVar: "--ds-color-icon-secondary", value: "#4A4A4A" },
      { name: "icon/inverse", cssVar: "--ds-color-icon-inverse", value: "#FFFFFF" },
    ],
  },
  {
    name: "Feedback",
    tokens: [
      { name: "feedback/error", cssVar: "--ds-color-feedback-error", value: "#CE574E" },
      { name: "feedback/danger", cssVar: "--ds-color-feedback-danger", value: "#CE574E" },
      { name: "feedback/warning", cssVar: "--ds-color-feedback-warning", value: "#D5854D" },
      { name: "feedback/success", cssVar: "--ds-color-feedback-success", value: "#6DA979" },
      { name: "feedback/info", cssVar: "--ds-color-feedback-info", value: "#6AA0CC" },
      { name: "feedback/info-bg", cssVar: "--ds-color-feedback-info-bg", value: "#EAF3FB" },
    ],
  },
  {
    name: "Category (course subjects)",
    tokens: [
      { name: "category/pa-phonics-text", cssVar: "--ds-color-category-pa-phonics-text", value: "#D5854D" },
      { name: "category/pa-fill", cssVar: "--ds-color-category-pa-fill", value: "#EF857D", description: "Chevron/pill fill — PA (音素覺察) step." },
      { name: "category/phonics-fill", cssVar: "--ds-color-category-phonics-fill", value: "#F5AF7E", description: "Chevron/pill fill — Phonics (自然拼讀) step." },
      { name: "category/fluency-text", cssVar: "--ds-color-category-fluency-text", value: "#E3CE50" },
      { name: "category/fluency-fill", cssVar: "--ds-color-category-fluency-fill", value: "#FFEF8A", description: "Chevron/pill fill — Fluency (流暢準確) step." },
      { name: "category/vocabulary-grammar-text", cssVar: "--ds-color-category-vocabulary-grammar-text", value: "#6DA979" },
      { name: "category/vocabulary-grammar-fill", cssVar: "--ds-color-category-vocabulary-grammar-fill", value: "#97CEA2" },
      { name: "category/comprehension-text", cssVar: "--ds-color-category-comprehension-text", value: "#6AA0CC" },
      { name: "category/comprehension-fill", cssVar: "--ds-color-category-comprehension-fill", value: "#A1CBED" },
      { name: "category/adult-fill", cssVar: "--ds-color-category-adult-fill", value: "#4F518C" },
    ],
  },
  {
    name: "Pill, Badge & Tab",
    tokens: [
      { name: "pill/red-fill", cssVar: "--ds-color-pill-red-fill", value: "#CE574E" },
      { name: "pill/brown-fill", cssVar: "--ds-color-pill-brown-fill", value: "#B15E10" },
      { name: "pill/green-fill", cssVar: "--ds-color-pill-green-fill", value: "#6DA979" },
      { name: "pill/blue-fill", cssVar: "--ds-color-pill-blue-fill", value: "#6AA0CC" },
      { name: "pill/purple-fill", cssVar: "--ds-color-pill-purple-fill", value: "#4F518C" },
      { name: "pill/white-fill", cssVar: "--ds-color-pill-white-fill", value: "#FAF8F4" },
      { name: "badge/index", cssVar: "--ds-color-badge-index", value: "#447CA2" },
      { name: "badge/index-alt", cssVar: "--ds-color-badge-index-alt", value: "#CE574E" },
      { name: "tab/selected-bg", cssVar: "--ds-color-tab-selected-bg", value: "#C6504E" },
    ],
  },
];

export const primitiveColorGroups: ColorGroup[] = [
  {
    name: "Brand — Red",
    tokens: [
      { name: "brand/red/300", cssVar: "--ds-color-brand-red-300", value: "#F4CBC8" },
      { name: "brand/red/500", cssVar: "--ds-color-brand-red-500", value: "#EF857D" },
      { name: "brand/red/700", cssVar: "--ds-color-brand-red-700", value: "#CE574E" },
      { name: "brand/red/900", cssVar: "--ds-color-brand-red-900", value: "#C6504E" },
    ],
  },
  {
    name: "Brand — Orange",
    tokens: [
      { name: "brand/orange/300", cssVar: "--ds-color-brand-orange-300", value: "#FDF0E7" },
      { name: "brand/orange/500", cssVar: "--ds-color-brand-orange-500", value: "#F5AF7E" },
      { name: "brand/orange/700", cssVar: "--ds-color-brand-orange-700", value: "#D5854D" },
      { name: "brand/orange/900", cssVar: "--ds-color-brand-orange-900", value: "#B15E10" },
    ],
  },
  {
    name: "Brand — Yellow",
    tokens: [
      { name: "brand/yellow/300", cssVar: "--ds-color-brand-yellow-300", value: "#FFFCE5" },
      { name: "brand/yellow/500", cssVar: "--ds-color-brand-yellow-500", value: "#FFEF8A" },
      { name: "brand/yellow/700", cssVar: "--ds-color-brand-yellow-700", value: "#E3CE50" },
      { name: "brand/yellow/900", cssVar: "--ds-color-brand-yellow-900", value: "#B15E10" },
    ],
  },
  {
    name: "Brand — Green",
    tokens: [
      { name: "brand/green/300", cssVar: "--ds-color-brand-green-300", value: "#EEF7EF" },
      { name: "brand/green/500", cssVar: "--ds-color-brand-green-500", value: "#97CEA2" },
      { name: "brand/green/700", cssVar: "--ds-color-brand-green-700", value: "#6DA979" },
      { name: "brand/green/900", cssVar: "--ds-color-brand-green-900", value: "#438451" },
    ],
  },
  {
    name: "Brand — Blue",
    tokens: [
      { name: "brand/blue/300", cssVar: "--ds-color-brand-blue-300", value: "#EAF3FB" },
      { name: "brand/blue/500", cssVar: "--ds-color-brand-blue-500", value: "#A1CBED" },
      { name: "brand/blue/700", cssVar: "--ds-color-brand-blue-700", value: "#6AA0CC" },
      { name: "brand/blue/900", cssVar: "--ds-color-brand-blue-900", value: "#447CA2" },
    ],
  },
  {
    name: "Brand — Purple",
    tokens: [
      { name: "brand/purple/300", cssVar: "--ds-color-brand-purple-300", value: "#9698BB" },
      { name: "brand/purple/500", cssVar: "--ds-color-brand-purple-500", value: "#4F518C" },
      { name: "brand/purple/700", cssVar: "--ds-color-brand-purple-700", value: "#292A50" },
    ],
  },
  {
    name: "Brand — Silver",
    tokens: [
      { name: "brand/silver/300", cssVar: "--ds-color-brand-silver-300", value: "#DCDCE0" },
      { name: "brand/silver/500", cssVar: "--ds-color-brand-silver-500", value: "#B6B8C3" },
      { name: "brand/silver/700", cssVar: "--ds-color-brand-silver-700", value: "#7F839F" },
    ],
  },
  {
    name: "Brand — Line",
    tokens: [
      { name: "brand/line/500", cssVar: "--ds-color-brand-line-500", value: "#06C755", description: "LINE brand green, for LINE login/share." },
    ],
  },
  {
    name: "Neutral",
    tokens: [
      { name: "neutral/0", cssVar: "--ds-color-neutral-0", value: "#FFFFFF" },
      { name: "neutral/100", cssVar: "--ds-color-neutral-100", value: "#DFDFDF" },
      { name: "neutral/300", cssVar: "--ds-color-neutral-300", value: "#B3B3B3" },
      { name: "neutral/500", cssVar: "--ds-color-neutral-500", value: "#4A4A4A" },
      { name: "neutral/700", cssVar: "--ds-color-neutral-700", value: "#1A1A1A" },
    ],
  },
  {
    name: "Primary (warm neutral)",
    tokens: [
      { name: "primary/0", cssVar: "--ds-color-primary-0", value: "#FAF8F4" },
      { name: "primary/100", cssVar: "--ds-color-primary-100", value: "#F3F0EB" },
      { name: "primary/300", cssVar: "--ds-color-primary-300", value: "#E8DCCF" },
      { name: "primary/400", cssVar: "--ds-color-primary-400", value: "#D7C6B3" },
      { name: "primary/500", cssVar: "--ds-color-primary-500", value: "#C8A88D" },
      { name: "primary/700", cssVar: "--ds-color-primary-700", value: "#A68369" },
      { name: "primary/900", cssVar: "--ds-color-primary-900", value: "#1B263B", description: "Breaks the warm-neutral pattern on purpose — the dark-surface anchor." },
    ],
  },
];

export interface FluidStep {
  name: string;
  cssVar: string;
  minPx: number;
  maxPx: number;
  clamp: string;
}

// Fluid scale computed with the Utopia formula (viewport 320px → 1440px),
// from the file's Type primitives / Fluid tokens collections.
export const typeScale: FluidStep[] = [
  { name: "Step -2", cssVar: "--ds-font-size-step-neg-2", minPx: 11.11, maxPx: 12.8, clamp: "clamp(0.6944rem, 0.6643rem + 0.1508vw, 0.8rem)" },
  { name: "Step -1", cssVar: "--ds-font-size-step-neg-1", minPx: 13.33, maxPx: 16, clamp: "clamp(0.8333rem, 0.7857rem + 0.2381vw, 1rem)" },
  { name: "Step 0 (body)", cssVar: "--ds-font-size-step-0", minPx: 16, maxPx: 20, clamp: "clamp(1rem, 0.9286rem + 0.3571vw, 1.25rem)" },
  { name: "Step 1", cssVar: "--ds-font-size-step-1", minPx: 19.2, maxPx: 25, clamp: "clamp(1.2rem, 1.0964rem + 0.5179vw, 1.5625rem)" },
  { name: "Step 2", cssVar: "--ds-font-size-step-2", minPx: 23.04, maxPx: 31.25, clamp: "clamp(1.44rem, 1.2934rem + 0.733vw, 1.9531rem)" },
  { name: "Step 3", cssVar: "--ds-font-size-step-3", minPx: 27.65, maxPx: 39.06, clamp: "clamp(1.728rem, 1.5242rem + 1.0192vw, 2.4414rem)" },
  { name: "Step 4", cssVar: "--ds-font-size-step-4", minPx: 33.18, maxPx: 48.83, clamp: "clamp(2.0736rem, 1.7941rem + 1.3974vw, 3.0518rem)" },
  { name: "Step 5", cssVar: "--ds-font-size-step-5", minPx: 39.81, maxPx: 61.04, clamp: "clamp(2.4883rem, 2.1094rem + 1.8948vw, 3.8147rem)" },
];

export const spaceScale: FluidStep[] = [
  { name: "3XS", cssVar: "--ds-space-3xs", minPx: 4, maxPx: 5, clamp: "clamp(0.25rem, 0.2321rem + 0.0893vw, 0.3125rem)" },
  { name: "2XS", cssVar: "--ds-space-2xs", minPx: 8, maxPx: 10, clamp: "clamp(0.5rem, 0.4643rem + 0.1786vw, 0.625rem)" },
  { name: "XS", cssVar: "--ds-space-xs", minPx: 12, maxPx: 15, clamp: "clamp(0.75rem, 0.6964rem + 0.2679vw, 0.9375rem)" },
  { name: "S", cssVar: "--ds-space-s", minPx: 16, maxPx: 20, clamp: "clamp(1rem, 0.9286rem + 0.3571vw, 1.25rem)" },
  { name: "M", cssVar: "--ds-space-m", minPx: 24, maxPx: 30, clamp: "clamp(1.5rem, 1.3929rem + 0.5357vw, 1.875rem)" },
  { name: "L", cssVar: "--ds-space-l", minPx: 32, maxPx: 40, clamp: "clamp(2rem, 1.8571rem + 0.7143vw, 2.5rem)" },
  { name: "XL", cssVar: "--ds-space-xl", minPx: 48, maxPx: 60, clamp: "clamp(3rem, 2.7857rem + 1.0714vw, 3.75rem)" },
  { name: "2XL", cssVar: "--ds-space-2xl", minPx: 64, maxPx: 80, clamp: "clamp(4rem, 3.7143rem + 1.4286vw, 5rem)" },
  { name: "3XL", cssVar: "--ds-space-3xl", minPx: 96, maxPx: 120, clamp: "clamp(6rem, 5.5714rem + 2.1429vw, 7.5rem)" },
];

export interface ScaleToken {
  name: string;
  cssVar: string;
  value: string;
  description?: string;
}

export const radiusScale: ScaleToken[] = [
  { name: "none", cssVar: "--ds-radius-none", value: "0px", description: "Dividers, full-bleed media, table cells." },
  { name: "xs", cssVar: "--ds-radius-xs", value: "4px", description: "Chips, thumbnails, inline tags." },
  { name: "sm", cssVar: "--ds-radius-sm", value: "8px", description: "Inputs, small buttons, compact tiles." },
  { name: "md", cssVar: "--ds-radius-md", value: "12px", description: "Default panel rounding — most used value in the file." },
  { name: "lg", cssVar: "--ds-radius-lg", value: "16px", description: "Cards: video-card, accordion." },
  { name: "xl", cssVar: "--ds-radius-xl", value: "20px", description: "Large cards: Course Card, testimonial-card." },
  { name: "2xl", cssVar: "--ds-radius-2xl", value: "24px", description: "Hero panels, mega-panel, modal surfaces." },
  { name: "pill", cssVar: "--ds-radius-pill", value: "999px", description: "Fully rounded at any height. Button, tab, pill." },
];

export const borderWeights: ScaleToken[] = [
  { name: "hairline", cssVar: "--ds-border-hairline", value: "1px", description: "Default UI border: cards, inputs, dividers." },
  { name: "strong", cssVar: "--ds-border-strong", value: "2px", description: "Emphasis border: Course Card, selected states." },
];

export const iconStrokes: ScaleToken[] = [
  { name: "stroke", cssVar: "--ds-icon-stroke", value: "1.5px", description: "Default Lucide icon stroke width." },
  { name: "stroke-bold", cssVar: "--ds-icon-stroke-bold", value: "2px", description: "Heavier stroke for large or low-contrast icons." },
];

export const opacityTokens: ScaleToken[] = [
  { name: "scrim", cssVar: "--ds-opacity-scrim", value: "0.5", description: "Backdrop behind mobile nav overlay and modals." },
  { name: "disabled", cssVar: "--ds-opacity-disabled", value: "0.4", description: "Disabled controls that keep their own color." },
  { name: "veil", cssVar: "--ds-opacity-veil", value: "0.08", description: "Subtle hover/pressed wash over a surface." },
  { name: "border-on-dark", cssVar: "--ds-opacity-border-on-dark", value: "0.1", description: "Hairlines on dark surfaces." },
];

export const layoutTokens: ScaleToken[] = [
  { name: "container-max", cssVar: "--ds-layout-container-max", value: "1200px", description: "Main content container max-width." },
  { name: "container-prose", cssVar: "--ds-layout-container-prose", value: "820px", description: "Single-column reading width: accordion, long-form text, FAQ." },
];

export const fontFamilies = {
  heading: "Inter",
  body: "Inter",
  weightRegular: "Regular",
  weightBold: "Bold",
};

export const viewportBounds = { min: 320, max: 1440 };
