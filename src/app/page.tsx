import { RecentRepositories } from "@/components/recent-repositories";
import { RecentWriting } from "@/components/recent-writing";
import { getRecentRepos } from "@/lib/github";
import Link from "next/link";

export default async function Home() {
  const { repos: recentRepos, totalCount } = await getRecentRepos(6);

  return (
    <div className="space-y-12">
      <section>
        <p className="text-lg text-slate-800 leading-relaxed max-w-2xl font-sans">
          As an Engineering Leader and Software Developer. I'm passionate about
          crafting exceptional user experiences, developing rock-solid
          distributed services, and nurturing a dynamic 🤝 team development.
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
