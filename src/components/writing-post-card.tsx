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
    <article className="group pb-6 max-w-3xl">
      <Link href={`/writing/${post.slug}`} className="flex flex-col">
        <time className="text-xs text-gray-500">{post.date}</time>
        <h2 className="text-lg font-serif font-medium group-hover:text-blue-600 transition-colors line-clamp-2 pb-1">
          {post.title}
        </h2>
        <p className="text-base font-serif text-gray-700">{post.excerpt}</p>
      </Link>
    </article>
  );
}
