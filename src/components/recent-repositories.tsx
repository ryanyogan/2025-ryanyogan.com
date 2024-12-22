import { Repo } from "@/lib/github";
import { ArrowUpRight, GitFork, Star } from "lucide-react";
import Link from "next/link";

interface RecentRepositoriesProps {
  repos: Repo[];
  totalCount: number;
}

export function RecentRepositories({
  repos,
  totalCount,
}: RecentRepositoriesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-serif font-normal tracking-tight text-gray-900 pb-2 relative inline-block">
        <span className="relative z-10">Recent Repos</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <Link
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors p-4 group"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-base font-serif font-normal text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-1">
                {repo.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
            </div>
            {repo.description && (
              <p className="mt-2 text-xs text-gray-600 font-sans line-clamp-2">
                {repo.description}
              </p>
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
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/shelf"
          className="inline-block text-sm text-gray-900 hover:text-gray-600 transition-colors font-sans link-underline"
        >
          View all {totalCount} repositories
        </Link>
      </div>
    </div>
  );
}
