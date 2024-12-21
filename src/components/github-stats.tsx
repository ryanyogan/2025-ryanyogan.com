import Link from 'next/link'
import { ArrowUpRight, Star, GitFork, ArrowRight } from 'lucide-react'
import { LanguageBadges } from './language-badges'

interface Language {
  name: string
  count: number
}

interface Repo {
  name: string
  description: string
  language: string
  stars: number
  forks: number
  url: string
}

export function GitHubStats({ languages, recentRepos }: { languages: Language[], recentRepos: Repo[] }) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Top Languages</h3>
        <LanguageBadges languages={languages.slice(0, 10)} />
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Recent Repositories</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {recentRepos.map((repo) => (
            <Link
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-colors p-6 group"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {repo.name}
                </h4>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              {repo.description && (
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{repo.description}</p>
              )}
              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                {repo.language && (
                  <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {repo.stars}
                </span>
                <span className="flex items-center">
                  <GitFork className="w-4 h-4 mr-1" />
                  {repo.forks}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/shelf"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all repositories
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

