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
    <div className="space-y-4">
      <h2 className="sm:text-3xl text-2xl font-serif font-normal tracking-tight text-black pb-2 relative inline-block">
        <span className="relative z-10">Recent Repos</span>
      </h2>
      <div className="grid gap-x-8 md:grid-cols-2 gap-y-6">
        {repos.map((repo) => (
          <Link
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg transition-colors group"
          >
            <div className="flex justify-between items-center">
              <h3 className="sm:text-base text-sm lowercase font-sans underline underline-offset-2 text-black group-hover:text-blue-600 transition-colors line-clamp-1">
                {repo.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
            </div>
            {repo.description ? (
              <p className="mt-2 sm:text-base text-sm text-gray-700 font-sans line-clamp-2 tracking-tighter">
                {repo.description}
              </p>
            ) : (
              <p className="mt-2 sm:text-base text-sm text-gray-600 font-sans line-clamp-2">
                No description provided
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
      <div className="text-center pt-6">
        <Link
          href="/shelf"
          className="inline-block text-sm text-black hover:text-blue-600 transition-colors font-sans link-underline"
        >
          View all {totalCount} repositories
        </Link>
      </div>
    </div>
  );
}
