import Link from "next/link";

interface WritingPostCardProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
  };
}

export function WritingPostCard({ post }: WritingPostCardProps) {
  return (
    <article className="group pb-6">
      <Link href={`/writing/${post.slug}`} className="flex flex-col">
        <time className="text-xs text-gray-400">{post.date}</time>
        <h2 className="text-lg pb-3 font-sans font-normal tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <div className="prose prose-sm">
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
