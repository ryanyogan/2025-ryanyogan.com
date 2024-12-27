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

  const leadershipMaterial = [
    {
      name: "Peopleware: Productive Projects & Teams",
      description:
        "A book on the human side of software development, and how to manage and lead software projects.",
      url: "https://www.amazon.com/Peopleware-Productive-Projects-Tom-DeMarco/dp/0932633439",
    },
    {
      name: "Engineering Managment for the Rest of Us",
      description:
        "This book isn't for the born leaders.  This book is for the rest of us.",
      url: "https://www.engmanagement.dev/",
    },
    {
      name: "Engineering Management Fundamentals 101",
      description:
        "Explore a career in software management with guidance from Netflix's Engineering Manager, Jem Young. Learn key motivations, challenges, and essential skills for effective leadership and meeting management, setting the stage for success in engineering management.",
      url: "https://www.engmanagement.dev/",
    },
    {
      name: "Enterprise Engineering Management 102",
      description:
        "Learn to build and lead high-performing technical teams with insights from Netflix's Ryan Burgess. Learn to establish OKRs and KPIs, develop team charters, refine hiring processes, and build strong partnerships. Enhance your leadership skills!",
      url: "https://frontendmasters.com/courses/engineering-management/",
    },
  ];

  return (
    <>
      <section className="space-y-4">
        <h2 className="sm:text-3xl text-2xl font-serif font-normal tracking-tight text-black pb-2">
          Books First.
        </h2>
        <ul className="mt-4 space-y-2">
          {leadershipMaterial.map((language) => (
            <li key={language.name}>
              <article className="group pb-4">
                <a
                  href={language.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col"
                >
                  <h2 className="sm:text-base text-sm pb-3 font-sans underline underline-offset-2 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {language.name}
                  </h2>
                  <p className="sm:text-base text-sm text-gray-700">
                    {language.description}
                  </p>
                </a>
              </article>
            </li>
          ))}
        </ul>
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
