import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => <h1 className="mb-4 text-3xl font-semibold tracking-tight" {...props} />,
  h2: (props) => <h2 className="mb-3 mt-10 text-xl font-semibold tracking-tight" {...props} />,
  h3: (props) => <h3 className="mb-2 mt-8 text-base font-semibold" {...props} />,
  p: (props) => <p className="mb-4 text-sm leading-relaxed text-text-secondary" {...props} />,
  ul: (props) => <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-text-secondary" {...props} />,
  ol: (props) => <ol className="mb-4 list-decimal space-y-1 pl-5 text-sm text-text-secondary" {...props} />,
  a: (props) => <a className="text-action-primary underline underline-offset-2" {...props} />,
  code: (props) => (
    <code className="rounded bg-bg-surface px-1.5 py-0.5 font-mono text-[0.85em]" {...props} />
  ),
  pre: (props) => (
    <pre className="mb-4 overflow-x-auto rounded-lg border border-border-default bg-bg-surface p-4 text-sm" {...props} />
  ),
  strong: (props) => <strong className="font-semibold text-text-primary" {...props} />,
  table: (props) => (
    <div className="mb-4 overflow-x-auto rounded-lg border border-border-default">
      <table className="w-full min-w-[480px] border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-bg-surface text-left" {...props} />,
  th: (props) => <th className="px-4 py-2 font-medium text-text-primary" {...props} />,
  td: (props) => (
    <td className="border-t border-border-default px-4 py-2 text-text-secondary" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
