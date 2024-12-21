import { getWritingPosts } from '@/lib/writing'
import { WritingPostCard } from '@/components/writing-post-card'

export const metadata = {
  title: 'Writing | Ryan Yogan',
  description: 'Thoughts and musings on software development, leadership, and technology.',
}

export default async function WritingPage() {
  const posts = await getWritingPosts()

  return (
    <div className="container-wide">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight mb-4">Writing</h1>
          <p className="text-base text-gray-700 leading-relaxed max-w-2xl font-sans">
            Thoughts and musings on software development, leadership, and technology.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <WritingPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

