import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import {
  getAdjacentDocs,
  getAllDocs,
  getDoc,
  getDocsByModule,
  getDocSlugs,
  getFirstDoc,
} from "@/lib/docs";
import { GraphRenderer } from "@/components/GraphRenderer";

type DocsPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getDocSlugs();
}

export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const firstDoc = getFirstDoc();
  const doc = await getDoc(slug ?? firstDoc?.slug.split("/") ?? []);

  if (!doc) {
    return {
      title: "Lesson not found",
    };
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const firstDoc = getFirstDoc();

  if (!slug?.length) {
    if (!firstDoc) {
      notFound();
    }

    redirect(firstDoc.href);
  }

  const doc = await getDoc(slug);

  if (!doc) {
    notFound();
  }

  const modules = getDocsByModule();
  const allDocs = getAllDocs();
  const { previous, next } = getAdjacentDocs(doc.slug);

  return (
    <div className="min-h-screen bg-white text-gray-950">
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 px-5 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="text-base font-semibold">
            Algobook
          </Link>
          <div className="hidden text-sm text-gray-500 sm:block">
            {allDocs.length} lessons in Markdown
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto">
          <div className="border-gray-200 lg:border-r lg:pr-5">
            <p className="mb-4 text-xs font-semibold uppercase text-gray-500">
              Contents
            </p>
            <nav className="space-y-6">
              {Object.entries(modules).map(([module, lessons]) => (
                <div key={module}>
                  <p className={`mb-2 px-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    module.toUpperCase() === doc.module.toUpperCase() 
                      ? "text-teal-600" 
                      : "text-gray-400"
                  }`}>
                    {module}
                  </p>
                  <div className="space-y-1">
                    {lessons.map((lesson) => {
                      const active = lesson.slug === doc.slug;

                      return (
                        <Link
                          key={lesson.slug}
                          href={lesson.href}
                          className={`block rounded-md px-2 py-1.5 text-sm transition ${
                            active
                              ? "bg-teal-50 font-semibold text-teal-800"
                              : "font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                          }`}
                        >
                          {lesson.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0">
          <article className="mx-auto max-w-3xl pb-12">
            <div className="mb-7 flex flex-wrap gap-2 border-b border-gray-200 pb-5">
              <span className="rounded-md bg-teal-50 px-2 py-1 text-xs font-semibold text-teal-800">
                {doc.module}
              </span>
              {doc.difficulty ? (
                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                  {doc.difficulty}
                </span>
              ) : null}
              {doc.duration ? (
                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                  {doc.duration}
                </span>
              ) : null}
            </div>
            <div
              className="lesson-body"
              dangerouslySetInnerHTML={{ __html: doc.html }}
            />
            <GraphRenderer type={doc.visualizationType} />
          </article>

          <div className="mx-auto grid max-w-3xl gap-3 border-t border-gray-200 py-6 sm:grid-cols-2">
            {previous ? (
              <Link
                href={previous.href}
                className="rounded-lg border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:bg-gray-50"
              >
                <span className="text-sm font-medium text-gray-500">Previous</span>
                <span className="mt-1 block text-base font-semibold">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={next.href}
                className="rounded-lg border border-gray-200 bg-white p-4 text-right transition hover:border-gray-300 hover:bg-gray-50"
              >
                <span className="text-sm font-medium text-gray-500">Next</span>
                <span className="mt-1 block text-base font-semibold">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
}
