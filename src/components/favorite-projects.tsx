import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Vercel',
    description: 'Develop. Preview. Ship.',
    image: '/placeholder.svg?height=80&width=80',
    url: 'https://vercel.com',
  },
  {
    name: 'Stripe',
    description: 'Payments infrastructure for the internet',
    image: '/placeholder.svg?height=80&width=80',
    url: 'https://stripe.com',
  },
  {
    name: 'Figma',
    description: 'The collaborative interface design tool',
    image: '/placeholder.svg?height=80&width=80',
    url: 'https://www.figma.com',
  },
]

export function FavoriteProjects() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
        >
          <div className="flex items-center gap-4">
            <Image
              src={project.image}
              alt={project.name}
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 absolute top-4 right-4" />
        </a>
      ))}
    </div>
  )
}

