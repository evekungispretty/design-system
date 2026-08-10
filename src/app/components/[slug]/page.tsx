import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import { allSlugs, findNavItem } from "@/lib/nav-registry";
import type { ComponentMeta } from "@/lib/component-meta";
import { ComponentDetailPage } from "@/components/site/ComponentDetailPage";
import { ComingSoon } from "@/components/site/ComingSoon";

export function generateStaticParams() {
  return allSlugs("components").map((slug) => ({ slug }));
}

export const dynamicParams = false;

async function loadContent(slug: string) {
  try {
    const [{ default: meta }, usageMod, styleMod, a11yMod, exampleMod] =
      await Promise.all([
        import(`@/content/components/${slug}/meta`) as Promise<{
          default: ComponentMeta;
        }>,
        import(`@/content/components/${slug}/usage.mdx`),
        import(`@/content/components/${slug}/style.mdx`),
        import(`@/content/components/${slug}/accessibility.mdx`),
        import(`@/content/components/${slug}/example`),
      ]);

    const exampleSource = fs.readFileSync(
      path.join(
        process.cwd(),
        "src/content/components",
        slug,
        "example.tsx",
      ),
      "utf8",
    );

    return {
      meta,
      Usage: usageMod.default,
      Style: styleMod.default,
      Accessibility: a11yMod.default,
      Example: exampleMod.default,
      exampleSource,
    };
  } catch {
    return null;
  }
}

export default async function ComponentPage({
  params,
}: PageProps<"/components/[slug]">) {
  const { slug } = await params;
  const item = findNavItem("components", slug);
  if (!item) notFound();

  const content = await loadContent(slug);

  if (!content) {
    return <ComingSoon item={item} kind="component" />;
  }

  return <ComponentDetailPage item={item} {...content} />;
}
