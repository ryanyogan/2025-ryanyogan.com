import { LanguageFilter } from "@/components/language-filter";
import { Skeleton } from "@/components/ui/skeleton";
import { WritingPostCard } from "@/components/writing-post-card";
import { fetchAllRepos, getLangues } from "@/lib/github";
import { unstable_cacheLife as cacheLife } from "next/cache";
import { Suspense } from "react";

export const metadata = {
  title: "Tech Shelf | Ryan Yogan",
  description: "Explore my GitHub projects and the technologies I work with.",
};

export default async function ShelfPage() {
  "use cache";
  cacheLife("days");

  const [repos, languages] = await Promise.all([fetchAllRepos(), getLangues()]);

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
    <div className="space-y-20">
      <section className="space-y-4">
        <h2 className="text-3xl font-serif text-white">A Really Big Shelf</h2>
        <p className="font-sans text-zinc-400 pb-10">
          Here are some of the most up-to-date books that I find relevant on
          leadership, and why not explore way too many github repositories and
          languages that I tinker with.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-serif text-white relative inline-block">
            <span className="relative z-10">Amazing Books & Videos</span>
          </h2>
          <div className="space-y-6">
            <div className="grid">
              <Suspense fallback={<Skeleton />}>
                {leadershipMaterial.map((post) => (
                  <WritingPostCard
                    showDate={false}
                    useSlug={false}
                    key={post.href}
                    post={post}
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-serif text-white relative inline-block">
          <span className="relative z-10">The Source of Truth</span>
        </h2>
        <Suspense fallback={<Skeleton />}>
          <LanguageFilter languages={languages} repos={repos} />
        </Suspense>
      </section>
    </div>
  );
}
