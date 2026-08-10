import { notFound } from "next/navigation";
import { allSlugs, findNavItem } from "@/lib/nav-registry";
import type { PatternMeta } from "@/lib/pattern-meta";
import { PatternDetailPage } from "@/components/site/PatternDetailPage";
import { ComingSoon } from "@/components/site/ComingSoon";

export function generateStaticParams() {
  return allSlugs("patterns").map((slug) => ({ slug }));
}

export const dynamicParams = false;

async function loadContent(slug: string) {
  try {
    const [{ default: meta }, overviewMod] = await Promise.all([
      import(`@/content/patterns/${slug}/meta`) as Promise<{
        default: PatternMeta;
      }>,
      import(`@/content/patterns/${slug}/overview.mdx`),
    ]);

    return { meta, Overview: overviewMod.default };
  } catch {
    return null;
  }
}

export default async function PatternPage({
  params,
}: PageProps<"/patterns/[slug]">) {
  const { slug } = await params;
  const item = findNavItem("patterns", slug);
  if (!item) notFound();

  const content = await loadContent(slug);

  if (!content) {
    return <ComingSoon item={item} kind="pattern" />;
  }

  return <PatternDetailPage item={item} {...content} />;
}
