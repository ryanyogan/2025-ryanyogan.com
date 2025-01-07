import Link from "next/link";

interface WritingPostCardProps {
  post: {
    title: string;
    excerpt: string;
    date?: string;
    slug?: string;
  };
  useSlug?: boolean;
  showDate?: boolean;
}

export function WritingPostCard({ post }: WritingPostCardProps) {
  return (
    <article className="group pb-6 max-w-3xl">
      <Link href={`/writing/${post.slug ?? ""}`} className="flex flex-col">
        {post?.date && (
          <time className="text-xs text-zinc-500 dark:text-zinc-400">
            {post.date}
          </time>
        )}
        <div className="flex justify-between items-center pb-1">
          <h3 className="text-base font-sans font-medium text-blue-600 dark:text-blue-500 underline transition-colors line-clamp-1">
            {post.title}
          </h3>
        </div>
        <p className="text-base font-sans text-zinc-800 dark:text-zinc-400 line-clamp-1 tracking-tight">
          {post.excerpt}
        </p>
      </Link>
    </article>
  );
}
