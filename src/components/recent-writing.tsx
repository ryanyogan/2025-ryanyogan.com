import { getWritingPosts } from "@/lib/writing";
import { WritingPostCard } from "./writing-post-card";

export async function RecentWriting() {
  const posts = (await getWritingPosts()).splice(0, 4);

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
