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
        <time className="text-xs text-gray-500">{post.date}</time>
        <h2 className="text-base pb-2 font-sans font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-base text-gray-800">{post.excerpt}</p>
      </Link>
    </article>
  );
}
