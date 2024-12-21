'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Star, GitFork, Calendar } from 'lucide-react'
import { Repo } from '@/lib/github'

export function RepoList({ repos }: { repos: Repo[] }) {
  const [visibleRepos, setVisibleRepos] = useState(30)

  const loadMore = () => {
    setVisibleRepos(prevVisible => prevVisible + 30)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {repos.slice(0, visibleRepos).map((repo) => (
          <Link
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-50 rounded-lg p-4 group hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-base font-serif font-normal text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-1">
                {repo.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
            </div>
            {repo.description && (
              <p className="mt-2 text-xs text-gray-600 line-clamp-2 font-sans">{repo.description}</p>
            )}
            <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500 font-sans">
              {repo.language && (
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-1"></span>
                  {repo.language}
                </span>
              )}
              <span className="flex items-center">
                <Star className="w-3 h-3 mr-1" />
                {repo.stars}
              </span>
              <span className="flex items-center">
                <GitFork className="w-3 h-3 mr-1" />
                {repo.forks}
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center font-sans">
              <Calendar className="w-3 h-3 mr-1" />
              {repo.updatedAt 
                ? `Updated on ${new Date(repo.updatedAt).toLocaleDateString()}`
                : 'Update date unknown'}
            </div>
          </Link>
        ))}
      </div>
      {visibleRepos < repos.length && (
        <div className="text-center">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-gray-100 text-gray-800 text-xs rounded-md hover:bg-gray-200 transition-colors font-sans"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}

