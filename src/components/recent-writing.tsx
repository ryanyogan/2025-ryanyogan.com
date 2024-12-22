import Link from "next/link";

const posts = [
  {
    title: "Journal, Drizzle, Remix Learn'n",
    excerpt:
      "Journaling, a hidden remix course, can drizzle with my love of prisma, and the hunt for memory.",
    date: "2024/04/28",
    href: "/writing/journals-drizzle-remix",
  },
  {
    title: "The writing of an ADHD developer",
    excerpt:
      "Before we start 2024, let's have a funny look at 2023. This is more filler text because the UI wants it.",
    date: "2024/02/21",
    href: "/writing/adhd-developer",
  },
  {
    title: "Journal, Drizzle, Remix Learn'n",
    excerpt:
      "Journaling, a hidden remix course, can drizzle with my love of prisma, and the hunt for memory.",
    date: "2024/04/28",
    href: "/writing/journal-drizzle-remix",
  },
  {
    title: "The writing of an ADHD developer",
    excerpt:
      "Before we start 2024, let's have a funny look at 2023. This is more filler text because the UI wants it.",
    date: "2024/02/21",
    href: "/writing/adhd2-developer",
  },
];

export function RecentWriting() {
  return (
    <div className="space-y-6">
      {/* <h2 className="text-3xl font-serif font-normal tracking-tight text-gray-900 pb-2">
        Recent Writing
      </h2> */}
      <h2 className="text-3xl font-serif font-normal tracking-tight text-black pb-2 relative inline-block">
        <span className="relative z-10">Recent Writing</span>
      </h2>
      <div className="grid md:grid-cols-2 md:col-span-full gap-10">
        {posts.map((post) => (
          <article key={post.href} className="group pb-4">
            <Link href={post.href} className="block space-y-2">
              <time className="text-xs text-slate-500 font-sans block">
                {post.date}
              </time>
              <h3 className="text-xl font-serif tracking-tight text-black group-hover:text-gray-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-sans line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
