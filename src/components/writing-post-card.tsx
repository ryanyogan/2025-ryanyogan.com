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
      <Link href={`/writing/${post.slug}`} className="block space-y-2">
        <time className="text-xs text-gray-500 font-sans block">
          {post.date}
        </time>
        <h2 className="text-xl font-serif font-normal tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-base text-gray-700 leading-relaxed font-sans line-clamp-3">
          {post.excerpt}
        </p>
      </Link>
    </article>
  );
}
