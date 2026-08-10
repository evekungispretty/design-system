import { Button } from "@/components/ds/Button";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ButtonExample() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="text">Text</Button>
        <Button variant="outline-orange">Outline Orange</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded-lg bg-[var(--ds-color-bg-dark)] p-4">
        <Button variant="text-dark-bg">Text Dark BG</Button>
        <Button variant="tertiary-dark-bg">Tertiary Dark BG</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary" size="big">
          Big size
        </Button>
        <Button variant="primary" iconRight={<ArrowIcon />}>
          With icon
        </Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
}
