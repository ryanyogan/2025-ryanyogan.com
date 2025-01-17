import { WritingPostCard } from "@/components/writing-post-card";

export const metadata = {
  title: "Writing | Ryan Yogan",
  description:
    "Thoughts and musings on software development, leadership, and technology.",
};

export default async function WritingPage() {
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

  return (
    <div className="space-y-20">
      <section className="space-y-4">
        <h2 className="text-3xl font-serif text-white">From time-to-time,</h2>
        <p className="font-sans text-zinc-400">
          I like to write about leadership, our industry, aviation and simming,
          and random tutorials that I think are helpful.
        </p>

        <div className="space-y-6 mt-10">
          <div className="grid gap-x-8">
            {posts.map((post) => (
              <WritingPostCard key={post.date} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
