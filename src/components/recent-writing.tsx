import { WritingPostCard } from "./writing-post-card";

const posts = [
  {
    title: "AOC 2024 and Claude Learning",
    excerpt:
      "Recenetly I have been using Claude, in conjunction with Advent of Code 2024, using a language I know and a new one to quickly learn!",
    date: "2024/04/28",
    href: "/writing/aoc-and-claude-learning",
    slug: "aoc-and-claude-learning",
  },
  {
    title: "The writing of an ADHD developer",
    excerpt:
      "Before we start 2024, let's have a funny look at 2023. This is more filler text because the UI wants it.",
    date: "2024/02/21",
    href: "https://yogan.dev",
    slug: "the-writing-of-an-adhd-developer",
  },
  {
    title: "Journal, Drizzle, Remix Learn'n",
    excerpt:
      "Journaling, a hidden remix course, can drizzle with my love of prisma, and the hunt for memory.",
    date: "2024/04/29",
    href: "https://yogan.dev",
    slug: "the-writing-of-an-adhd-developer",
  },
  {
    title: "The writing of an ADHD developer",
    excerpt:
      "Before we start 2024, let's have a funny look at 2023. This is more filler text because the UI wants it.",
    date: "2024/02/24",
    href: "https://yogan.dev",
    slug: "the-writing-of-an-adhd-developer",
  },
];

export function RecentWriting() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-serif text-gray-800 relative inline-block">
        <span className="relative z-10">Recent Writing</span>
      </h2>
      <div className="grid gap-x-8">
        {posts.map((post) => (
          <WritingPostCard key={post.date} post={post} />
        ))}
      </div>
    </div>
  );
}
