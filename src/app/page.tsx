import { RecentRepositories } from "@/components/recent-repositories";
import { RecentWriting } from "@/components/recent-writing";
import { getRecentRepos } from "@/lib/github";
import { unstable_cacheLife as cacheLife } from "next/cache";
import Link from "next/link";

export default async function Home() {
  "use cache";
  cacheLife("hours");

  const { repos: recentRepos, totalCount } = await getRecentRepos(6);

  return (
    <div className="space-y-20">
      <section className="space-y-2">
        <h2 className="text-3xl font-serif font-normal tracking-tight text-gray-900">
          Hello I&apos;m Ryan,
        </h2>
        <p className="text-base text-gray-700 leading-relaxed max-w-5xl font-sans">
          As an Engineering Leader and Software Developer. I&apos;m passionate
          about crafting exceptional user experiences, developing rock-solid
          distributed services, and nurturing a dynamic 🤝 team development.
          <br />
          <br />
          My leadership style is rooted in empathy, curiosity, and cheerleading.
          I believe in the power of a growth mindset, and I strive to create an
          environemnt where everyone may learn, thrive, and have 🎉 fun.
          <br />
          <br />
          My engineering approach is that of a Technical Generalist, recognizing
          the unique value each technology brings to the table. My mission is to
          build and teach, leveraging my broad skill set to innovate and 💡
          inspire.
        </p>
        <Link
          href="/about"
          className="inline-block text-sm text-black hover:text-gray-600 transition-colors font-sans link-underline"
        >
          More about me
        </Link>
      </section>

      <section className="space-y-8">
        <RecentWriting />
      </section>

      <section className="space-y-8">
        <RecentRepositories repos={recentRepos} totalCount={totalCount} />
      </section>
    </div>
  );
}
