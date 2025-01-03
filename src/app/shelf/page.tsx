import { LanguageFilter } from "@/components/language-filter";
import { Skeleton } from "@/components/ui/skeleton";
import { WritingPostCard } from "@/components/writing-post-card";
import { getAllRepos, getLanguages } from "@/lib/github";
import { Suspense } from "react";

export const metadata = {
  title: "Tech Shelf | Ryan Yogan",
  description: "Explore my GitHub projects and the technologies I work with.",
};

export default async function ShelfPage() {
  const [repos, languages] = await Promise.all([getAllRepos(), getLanguages()]);

  const leadershipMaterial = [
    {
      title: "Peopleware: Productive Projects & Teams",
      excerpt:
        "A book on the human side of software development, and how to manage and lead software projects.",
      href: "https://www.amazon.com/Peopleware-Productive-Projects-Tom-DeMarco/dp/0932633439",
    },
    {
      title: "Engineering Managment for the Rest of Us",
      excerpt:
        "This book isn't for the born leaders.  This book is for the rest of us.",
      href: "https://www.engmanagement.dev/",
    },
    {
      title: "Engineering Management Fundamentals 101",
      excerpt:
        "Explore a career in software management with guidance from Netflix's Engineering Manager, Jem Young. Learn key motivations, challenges, and essential skills for effective leadership and meeting management, setting the stage for success in engineering management.",
      href: "https://frontendmasters.com/courses/intro-management/",
    },
    {
      title: "Enterprise Engineering Management 102",
      excerpt:
        "Learn to build and lead high-performing technical teams with insights from Netflix's Ryan Burgess. Learn to establish OKRs and KPIs, develop team charters, refine hiring processes, and build strong partnerships. Enhance your leadership skills!",
      href: "https://frontendmasters.com/courses/engineering-management/",
    },
  ];

  return (
    <>
      <section className="space-y-4">
        <h2 className="sm:text-3xl text-2xl font-serif font-normal tracking-tight text-black pb-2">
          Books First.
        </h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 md:col-span-full gap-x-8">
            {leadershipMaterial.map((post) => (
              <WritingPostCard
                showDate={false}
                useSlug={false}
                key={post.href}
                post={post}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="sm:text-3xl text-2xl font-serif font-normal tracking-tight text-black pb-2">
          Github Languages & Projects
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
