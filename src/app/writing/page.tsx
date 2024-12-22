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
    <>
      <header>
        <p className="text-base text-gray-700 leading-relaxed max-w-2xl font-sans">
          Thoughts and musings on software development, leadership, and
          technology.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <WritingPostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
