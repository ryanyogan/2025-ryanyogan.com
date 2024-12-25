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
        <h2 className="text-base pb-3 font-sans font-normal tracking-tight text-black underline underline-offset-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-base text-gray-700 tracking-tighter">
          {post.excerpt}
        </p>
      </Link>
    </article>
  );
}
