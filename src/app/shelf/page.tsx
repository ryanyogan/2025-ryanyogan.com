import { LanguageFilter } from "@/components/language-filter";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllRepos, getLanguages } from "@/lib/github";
import { Suspense } from "react";

export const metadata = {
  title: "Tech Shelf | Ryan Yogan",
  description: "Explore my GitHub projects and the technologies I work with.",
};

export default async function ShelfPage() {
  const [repos, languages] = await Promise.all([getAllRepos(), getLanguages()]);

  return (
    <>
      <header>
        <p className="text-base text-gray-700 leading-relaxed max-w-2xl font-sans">
          Dive into my GitHub projects and discover the technologies I work with
          most frequently.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-serif font-normal tracking-tight text-gray-900">
          Languages & Technologies
        </h2>
        <Suspense fallback={<LanguageFilterSkeleton />}>
          <LanguageFilter languages={languages} repos={repos} />
        </Suspense>
      </section>
    </>
  );
}

function LanguageFilterSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-8 w-20 rounded-full" />
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-lg" />
        ))}
      </div>
    </div>
  );
}
