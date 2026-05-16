import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const docsDirectory = path.join(process.cwd(), "content", "docs");

export type DocFrontmatter = {
  title: string;
  description: string;
  module: string;
  order: number;
  difficulty?: string;
  duration?: string;
  visualizationType?: string;
};

export type DocSummary = DocFrontmatter & {
  slug: string;
  href: string;
};

export type Doc = DocSummary & {
  html: string;
};

function toSlug(filePath: string) {
  return filePath
    .replace(docsDirectory, "")
    .replace(/\\/g, "/")
    .replace(/^\//, "")
    .replace(/\.md$/, "");
}

function readMarkdownFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return readMarkdownFiles(fullPath);
    }

    return entry.isFile() && entry.name.endsWith(".md") ? [fullPath] : [];
  });
}

function assertFrontmatter(data: Record<string, unknown>, slug: string): DocFrontmatter {
  const title = typeof data.title === "string" ? data.title : "";
  const description = typeof data.description === "string" ? data.description : "";
  const moduleName = typeof data.module === "string" ? data.module : "Lessons";
  const order = typeof data.order === "number" ? data.order : 999;
  const difficulty = typeof data.difficulty === "string" ? data.difficulty : undefined;
  const duration = typeof data.duration === "string" ? data.duration : undefined;
  const visualizationType = typeof data.visualizationType === "string" ? data.visualizationType : undefined;

  if (!title || !description) {
    throw new Error(`Missing required frontmatter in content/docs/${slug}.md`);
  }

  return { title, description, module: moduleName, order, difficulty, duration, visualizationType };
}

export function getAllDocs(): DocSummary[] {
  return readMarkdownFiles(docsDirectory)
    .map((filePath) => {
      const slug = toSlug(filePath);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);
      const frontmatter = assertFrontmatter(data, slug);

      return {
        ...frontmatter,
        slug,
        href: `/docs/${slug}`,
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getDocsByModule() {
  return getAllDocs().reduce<Record<string, DocSummary[]>>((modules, doc) => {
    modules[doc.module] = [...(modules[doc.module] ?? []), doc];
    return modules;
  }, {});
}

export function getDocSlugs() {
  return getAllDocs().map((doc) => ({
    slug: doc.slug.split("/"),
  }));
}

export async function markdownToHtml(markdown: string) {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: {
        className: ["heading-anchor"],
      },
    })
    .use(rehypeStringify)
    .process(markdown);

  return processed.toString();
}

export async function getDoc(slugParts: string[]): Promise<Doc | null> {
  const slug = slugParts.join("/");
  const filePath = path.join(docsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath) || !filePath.startsWith(docsDirectory)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const frontmatter = assertFrontmatter(data, slug);

  return {
    ...frontmatter,
    slug,
    href: `/docs/${slug}`,
    html: await markdownToHtml(content),
  };
}

export function getAdjacentDocs(currentSlug: string) {
  const docs = getAllDocs();
  const index = docs.findIndex((doc) => doc.slug === currentSlug);

  return {
    previous: index > 0 ? docs[index - 1] : null,
    next: index >= 0 && index < docs.length - 1 ? docs[index + 1] : null,
  };
}

export function getFirstDoc() {
  return getAllDocs()[0] ?? null;
}
