import type { Repo } from "@/lib/github";
import { GitFork, Star } from "lucide-react";
import Link from "next/link";

interface RecentRepositoriesProps {
  repos: Repo[];
}

export function RecentRepositories({ repos }: RecentRepositoriesProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-normal text-gray-800 pb-2 relative inline-block">
        <span className="relative z-10">Recent Projects</span>
      </h2>
      <div className="grid gap-x-8 gap-y-6">
        {repos.map((repo) => (
          <Link
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors group"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base lowercase font-sans font-medium text-blue-600 underline group-hover:text-blue-800 transition-colors line-clamp-1">
                {repo.name}
              </h3>
            </div>
            {repo.description ? (
              <p className="mt-2 text-base text-zinc-800 font-serif line-clamp-1 tracking-tight">
                {repo.description}
              </p>
            ) : (
              <p className="mt-2 text-base text-zinc-800 font-serif line-clamp-2 tracking-tight">
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
