import { notFound } from "next/navigation";
import Link from "next/link";
import { designStyles } from "../registry";
import { PromptActions } from "./prompt-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function generateStaticParams() {
  return designStyles
    .filter((s) => s.prompt)
    .map((s) => ({ slug: s.slug }));
}

export default async function StylePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = designStyles.find((s) => s.slug === slug);

  if (!style || !style.prompt) {
    notFound();
  }

  const Landing = style.landing;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top bar with breadcrumbs */}
      <div className="border-b border-neutral-800 px-6 py-3 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-neutral-400 hover:text-white">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/design-styles"
                  className="text-neutral-400 hover:text-white"
                >
                  Design Styles
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">
                {style.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main layout: 2/3 landing + 1/3 sidebar */}
      <div className="flex h-[calc(100vh-53px)]">
        {/* Landing preview */}
        <div className="w-2/3 overflow-y-auto border-r border-neutral-800">
          {Landing ? (
            <Landing />
          ) : (
            <div className="flex items-center justify-center h-full text-neutral-500">
              Landing page coming soon
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-1/3 overflow-y-auto p-6 flex flex-col gap-6">
          {/* Style card preview */}
          <div>
            <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
              Preview Card
            </h2>
            <style.component />
          </div>

          {/* Description */}
          {style.description && (
            <div>
              <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                About this style
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {style.description}
              </p>
            </div>
          )}

          {/* Prompt */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                AI Prompt
              </h2>
              <PromptActions prompt={style.prompt} />
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <pre className="text-sm text-neutral-300 whitespace-pre-wrap leading-relaxed font-mono">
                {style.prompt}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
