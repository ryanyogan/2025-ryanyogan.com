import Link from "next/link";

const posts = [
  {
    title: "Journal, Drizzle, Remix Learn'n",
    excerpt:
      "Journaling, a hidden remix course, can drizzle with my love of prisma, and the hunt for memory.",
    date: "2024/04/28",
    href: "/writing/journal-drizzle-remix",
  },
  {
    title: "The writing of an ADHD developer",
    excerpt: "Before we start 2024, let's have a funny look at 2023.",
    date: "2024/02/21",
    href: "/writing/adhd-developer",
  },
  {
    title: "Remix and Vite",
    excerpt:
      "Remix and Vite are officially offical. This is a kind of a big deal and I love it.",
    date: "2024/02/20",
    href: "/writing/remix-and-vite",
  },
];

export function RecentWriting() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif font-normal tracking-tight text-gray-900 pb-2 border-b border-gray-100">
        Recent Writing
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.href} className="group">
            <Link href={post.href} className="block space-y-2">
              <h3 className="text-lg font-serif font-normal tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <time className="text-xs text-gray-500 font-sans block">
                {post.date}
              </time>
              <p className="text-sm text-gray-700 leading-relaxed font-sans line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
