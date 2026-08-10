export type ContentStatus = "ready" | "planned";

export interface NavItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: ContentStatus;
  /** Figma componentSet nodeId, for traceability back to source of truth */
  figmaNodeId?: string;
}

export interface NavCategory {
  name: string;
  items: NavItem[];
}

export interface NavSection {
  key: "components" | "patterns";
  label: string;
  basePath: string;
  categories: NavCategory[];
}

export const componentsSection: NavSection = {
  key: "components",
  label: "Components",
  basePath: "/components",
  categories: [
    {
      name: "Actions",
      items: [
        {
          slug: "button",
          title: "Button",
          category: "Actions",
          description:
            "Primary CTA. Pill radius at every size, with Default and Big sizes.",
          status: "ready",
          figmaNodeId: "268:621",
        },
      ],
    },
    {
      name: "Selection",
      items: [
        {
          slug: "checkbox",
          title: "Checkbox",
          category: "Selection",
          description: "Binary selection control for forms and lists.",
          status: "planned",
          figmaNodeId: "2817:9863",
        },
        {
          slug: "checkbox-interactive",
          title: "Checkbox Interactive",
          category: "Selection",
          description: "Checkbox with hover/focus/active interaction states.",
          status: "planned",
          figmaNodeId: "2824:9921",
        },
      ],
    },
    {
      name: "Navigation",
      items: [
        {
          slug: "tab",
          title: "Tab",
          category: "Navigation",
          description: "Single tab item used inside a Tab Group.",
          status: "planned",
          figmaNodeId: "2589:5366",
        },
        {
          slug: "tab-group",
          title: "Tab Group",
          category: "Navigation",
          description: "Sliding-pill tab switch for grouping related views.",
          status: "planned",
          figmaNodeId: "2589:5371",
        },
        {
          slug: "accordion",
          title: "Accordion",
          category: "Navigation",
          description: "Expandable/collapsible content sections.",
          status: "planned",
          figmaNodeId: "2880:13105",
        },
        {
          slug: "pagination-controls",
          title: "Pagination Controls",
          category: "Navigation",
          description: "Page-to-page navigation for long lists and tables.",
          status: "planned",
          figmaNodeId: "2938:15261",
        },
        {
          slug: "list-item",
          title: "List Item",
          category: "Navigation",
          description: "Single row within a list or menu.",
          status: "planned",
          figmaNodeId: "3340:4699",
        },
      ],
    },
    {
      name: "Data Display",
      items: [
        {
          slug: "pill",
          title: "Pill",
          category: "Data Display",
          description: "Compact label for status, category, or metadata.",
          status: "ready",
          figmaNodeId: "2589:4451",
        },
        {
          slug: "course-card",
          title: "Course Card",
          category: "Data Display",
          description: "Summary card for a course in a browsable grid.",
          status: "planned",
          figmaNodeId: "2595:5454",
        },
        {
          slug: "video-card",
          title: "Video Card",
          category: "Data Display",
          description: "Media card for video content with thumbnail.",
          status: "planned",
          figmaNodeId: "2918:13638",
        },
        {
          slug: "testimonial-card",
          title: "Testimonial Card",
          category: "Data Display",
          description: "Quote card for customer/parent testimonials.",
          status: "planned",
          figmaNodeId: "2634:8470",
        },
        {
          slug: "schedule-day-card",
          title: "Schedule Day Card",
          category: "Data Display",
          description: "Card representing a single day in a class schedule.",
          status: "planned",
          figmaNodeId: "3615:19636",
        },
      ],
    },
  ],
};

export const patternsSection: NavSection = {
  key: "patterns",
  label: "Patterns",
  basePath: "/patterns",
  categories: [
    {
      name: "Site Chrome",
      items: [
        {
          slug: "nav",
          title: "Nav",
          category: "Site Chrome",
          description: "Top-level site navigation bar.",
          status: "planned",
        },
        {
          slug: "footer",
          title: "Footer",
          category: "Site Chrome",
          description: "Site-wide footer with links and legal info.",
          status: "planned",
        },
        {
          slug: "menu",
          title: "Menu",
          category: "Site Chrome",
          description: "Dropdown/flyout navigation menu.",
          status: "planned",
        },
        {
          slug: "search",
          title: "Search",
          category: "Site Chrome",
          description: "Site search entry point and results affordance.",
          status: "planned",
        },
        {
          slug: "cart",
          title: "Cart",
          category: "Site Chrome",
          description: "Shopping cart entry point and summary.",
          status: "planned",
        },
        {
          slug: "user",
          title: "User",
          category: "Site Chrome",
          description: "Account/user menu entry point.",
          status: "planned",
        },
      ],
    },
    {
      name: "Commerce",
      items: [
        {
          slug: "price-selector",
          title: "Price Selector",
          category: "Commerce",
          description: "Plan/price tier selection control.",
          status: "planned",
        },
        {
          slug: "price-stages",
          title: "Price Stages",
          category: "Commerce",
          description: "Staged pricing display across a purchase funnel.",
          status: "planned",
        },
        {
          slug: "refund-comparison",
          title: "Refund Comparison",
          category: "Commerce",
          description: "Comparison table for refund policy options.",
          status: "planned",
        },
      ],
    },
    {
      name: "Marketing",
      items: [
        {
          slug: "golden-triangle",
          title: "Golden Triangle",
          category: "Marketing",
          description: "Above-the-fold marketing layout pattern.",
          status: "planned",
        },
        {
          slug: "floating-btn-group",
          title: "Floating Button Group",
          category: "Marketing",
          description:
            "Persistent floating CTA stack, desktop right-anchored / mobile bottom bar.",
          status: "planned",
        },
        {
          slug: "fab",
          title: "FAB",
          category: "Marketing",
          description: "Desktop floating action button that expands on hover.",
          status: "planned",
        },
        {
          slug: "weekday-tab-group",
          title: "Weekday Tab Group",
          category: "Marketing",
          description: "Day-of-week tab switcher for class schedules.",
          status: "planned",
        },
        {
          slug: "course-type-content",
          title: "Course Type Content",
          category: "Marketing",
          description: "Content block that switches by course type/category.",
          status: "planned",
        },
      ],
    },
  ],
};

export interface GuidelineItem {
  slug: string;
  title: string;
  description: string;
}

export const guidelines: GuidelineItem[] = [
  {
    slug: "color",
    title: "Color",
    description: "Brand, neutral, semantic, and feedback color tokens.",
  },
  {
    slug: "typography",
    title: "Typography",
    description: "Font families, weights, and the fluid type scale.",
  },
  {
    slug: "spacing",
    title: "Spacing",
    description: "The fluid spacing scale, from 3XS to 3XL.",
  },
  {
    slug: "radius-shadow",
    title: "Radius & Shadow",
    description: "Corner radius scale, border weights, and elevation.",
  },
  {
    slug: "iconography",
    title: "Iconography",
    description: "Icon stroke weights and usage guidance.",
  },
];

export const navSections: NavSection[] = [componentsSection, patternsSection];

export function findNavItem(
  section: "components" | "patterns",
  slug: string,
): NavItem | undefined {
  const target = navSections.find((s) => s.key === section);
  if (!target) return undefined;
  for (const category of target.categories) {
    const item = category.items.find((i) => i.slug === slug);
    if (item) return item;
  }
  return undefined;
}

export function allSlugs(section: "components" | "patterns"): string[] {
  const target = navSections.find((s) => s.key === section);
  if (!target) return [];
  return target.categories.flatMap((c) => c.items.map((i) => i.slug));
}

export interface SearchEntry {
  title: string;
  href: string;
  section: string;
  description: string;
}

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [
    {
      title: "Home",
      href: "/",
      section: "Overview",
      description: "MiLingual Design Library overview.",
    },
    {
      title: "Get Started",
      href: "/get-started",
      section: "Overview",
      description: "Install instructions and design principles.",
    },
  ];

  for (const section of navSections) {
    for (const category of section.categories) {
      for (const item of category.items) {
        entries.push({
          title: item.title,
          href: `${section.basePath}/${item.slug}`,
          section: section.label,
          description: item.description,
        });
      }
    }
  }

  for (const g of guidelines) {
    entries.push({
      title: g.title,
      href: `/guidelines/${g.slug}`,
      section: "Guidelines",
      description: g.description,
    });
  }

  return entries;
}
