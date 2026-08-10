import Link from "next/link";

const entryCards = [
  {
    href: "/get-started",
    title: "Get Started",
    description: "Install the library and learn the design principles behind it.",
  },
  {
    href: "/components",
    title: "Components",
    description: "Coded, reusable UI primitives with live previews and prop tables.",
  },
  {
    href: "/guidelines/color",
    title: "Guidelines",
    description: "Color, typography, spacing, radius, and iconography tokens.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="mb-3 text-sm font-medium text-action-primary">
        MiLingual Design Library
      </p>
      <h1 className="mb-4 text-4xl font-semibold tracking-tight text-text-primary">
        One shared language for building MiLingual products.
      </h1>
      <p className="mb-10 max-w-xl text-base leading-relaxed text-text-secondary">
        Coded components, composed patterns, and design tokens — sourced
        directly from the MiLingual Figma library — so product and
        engineering can build consistent, accessible experiences without
        reinventing the basics each time.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {entryCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-lg border border-border-default p-5 transition-colors hover:border-action-primary hover:bg-bg-surface"
          >
            <h2 className="mb-1.5 text-sm font-semibold text-text-primary">
              {card.title}
            </h2>
            <p className="text-sm text-text-secondary">{card.description}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-action-primary opacity-0 transition-opacity group-hover:opacity-100">
              Explore
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
