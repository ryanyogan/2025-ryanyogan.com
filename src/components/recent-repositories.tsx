import type { Repo } from "@/lib/github";
import { ArrowUpRight, GitFork, Star } from "lucide-react";
import Link from "next/link";

interface RecentRepositoriesProps {
  repos: Repo[];
}

export function RecentRepositories({ repos }: RecentRepositoriesProps) {
  return (
    <div className="space-y-4">
      <h2 className="sm:text-2xl text-xl font-serif font-normal text-black pb-2 relative inline-block">
        <span className="relative z-10">Recent Repos</span>
      </h2>
      <div className="grid gap-x-8 md:grid-cols-2 gap-y-6">
        {repos.map((repo) => (
          <Link
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors group"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base lowercase font-sans font-medium text-blue-500 underline group-hover:text-blue-600 transition-colors line-clamp-1">
                {repo.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
            </div>
            {repo.description ? (
              <p className="mt-2 sm:text-base text-sm text-gray-500 font-serif line-clamp-2 tracking-tight">
                {repo.description}
              </p>
            ) : (
              <p className="mt-2 sm:text-base text-sm text-gray-600 font-serif line-clamp-2">
                No description provided
              </p>
            )}
            <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500 font-sans">
              {repo.language && (
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-1" />
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
    </div>
  );
}
