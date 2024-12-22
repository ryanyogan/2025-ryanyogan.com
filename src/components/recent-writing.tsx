import { WritingPostCard } from "./writing-post-card";

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
      <h2 className="text-3xl font-serif font-normal tracking-tight text-black pb-2 relative inline-block">
        <span className="relative z-10">Recent Writing</span>
      </h2>
      <div className="grid md:grid-cols-2 md:col-span-full gap-10">
        {posts.map((post) => (
          <WritingPostCard key={post.href} post={post} />
        ))}
      </div>
    </div>
  );
}
