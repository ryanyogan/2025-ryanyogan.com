import { WritingPostCard } from "@/components/writing-post-card";
import { getWritingPosts } from "@/lib/writing";

export const metadata = {
  title: "Writing | Ryan Yogan",
  description:
    "Thoughts and musings on software development, leadership, and technology.",
};

export default async function WritingPage() {
  const posts = await getWritingPosts();

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
