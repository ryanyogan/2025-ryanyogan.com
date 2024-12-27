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
      <section className="space-y-4">
        <h2 className="sm:text-3xl text-2xl font-serif font-normal tracking-tight text-black pb-2">
          From time-to-time,
        </h2>
        <p className="sm:text-base text-sm text-gray-700">
          Appearntly I will write; however, this is most likely broken as I
          decided to spend days on choosing the proper font... WHY!
        </p>
      </section>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <WritingPostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
