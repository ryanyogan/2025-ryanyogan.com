import { RecentRepositories } from "@/components/recent-repositories";
import { RecentWriting } from "@/components/recent-writing";
import { getRecentRepos } from "@/lib/github";

export default async function Home() {
  // "use cache";
  // cacheLife("hours");

  const { repos: recentRepos } = await getRecentRepos(4);

  return (
    <div className="sm:space-y-20 space-y-10">
      <section className="space-y-4">
        <h2 className="sm:text-3xl text-2xl font-serif text-black">
          Hello I&apos;m Ryan,
        </h2>
        <p className="font-sans text-gray-800">
          As an Engineering Leader and Software Developer. I&apos;m passionate
          about crafting exceptional user experiences, developing rock-solid
          distributed services, and nurturing a dynamic team development.
        </p>
        <p className="font-sans text-gray-700">
          My leadership style is rooted in empathy, curiosity, and cheerleading.
          I believe in the power of a growth mindset, and I strive to create an
          environemnt where everyone may learn, thrive, and have fun.
        </p>
      </section>

      <section className="space-y-4">
        <RecentWriting />
      </section>

      <section className="space-y-8">
        <RecentRepositories repos={recentRepos} />
      </section>
    </div>
  );
}
