import { ArrowUpRight } from 'lucide-react'

const repos = [
  {
    name: 'next-auth',
    description: 'Authentication for Next.js',
    stars: 15200,
    url: 'https://github.com/nextauthjs/next-auth',
  },
  {
    name: 'react-query',
    description: 'Hooks for fetching, caching and updating asynchronous data in React',
    stars: 31400,
    url: 'https://github.com/tannerlinsley/react-query',
  },
  {
    name: 'tailwindcss',
    description: 'A utility-first CSS framework for rapid UI development',
    stars: 66800,
    url: 'https://github.com/tailwindlabs/tailwindcss',
  },
]

export function GithubRepos() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <a
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-gray-900">{repo.name}</h3>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          </div>
          <p className="mt-2 text-sm text-gray-600">{repo.description}</p>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {repo.stars.toLocaleString()} stars
          </div>
        </a>
      ))}
    </div>
  )
}

