import { getWritingPost, getWritingPosts } from "@/lib/writing";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getWritingPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const post = await getWritingPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Ryan's Writing`,
    description: post.excerpt,
  };
}

export default async function WritingPost(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const post = await getWritingPost(params.slug);

  if (!post) {
    notFound();
  }

  //const MDXContent = getMDXComponent(post.content)

  return (
    <article className="prose prose-lg max-w-none">
      <h1>{post.title}</h1>
      <time className="text-sm text-gray-500">{post.date}</time>
      <MDXRemote source={post.content} />
    </article>
  );
}
