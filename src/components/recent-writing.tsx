import { WritingPostCard } from "./writing-post-card";

const posts = [
  {
    id: "1",
    title: "Hello, World!",
    date: "2021-09-01",
    excerpt: "This is the first post on my new blog.",
    slug: "hello-world",
  },
  {
    id: "2",
    title: "Future of the Web",
    date: "2021-09-15",
    excerpt: "A look at what the future of the web might look like.",
    slug: "future-of-web-development",
  },
  {
    id: "3",
    title: "How I Built This Site",
    date: "2021-10-01",
    excerpt: "A look at the technology stack I use for my projects.",
    slug: "how-this-site-is-made",
  },
  {
    id: "4",
    title: "2025 I Write",
    date: "2021-10-15",
    excerpt: "A look at what the future of the web might look like.",
    slug: "2025-i-write",
  },
];

export async function RecentWriting() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-zinc-50 relative inline-block">
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
