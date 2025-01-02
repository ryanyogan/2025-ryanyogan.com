import { ArrowUpRight } from "lucide-react";
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
        <div className="flex justify-between items-center pb-0.5">
          <h3 className="text-base font-sans font-medium text-blue-500 underline group-hover:text-blue-600 transition-colors line-clamp-1">
            {post.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
        </div>
        <p className="text-base font-sans text-gray-700">{post.excerpt}</p>
      </Link>
    </article>
  );
}
