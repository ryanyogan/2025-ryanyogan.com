import { Octokit } from "@octokit/rest";
import { unstable_cacheLife as cacheLife } from "next/cache";
import { cache } from "react";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string | null;
}

export interface Language {
  name: string;
  count: number;
}

async function fetchAllRepos(): Promise<Repo[]> {
  "use cache";
  cacheLife("days");

  const allRepos: Repo[] = [];
  let page = 1;

  while (true) {
    try {
      const { data: repos } = await octokit.repos.listForUser({
        username: "ryanyogan",
        per_page: 100,
        page: page,
        sort: "updated",
        direction: "desc",
      });

      if (repos.length === 0) break;

      const formattedRepos: Repo[] = repos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language ?? null,
        stars: repo.stargazers_count ?? 0,
        forks: repo.forks_count ?? 0,
        url: repo.html_url,
        updatedAt: repo.updated_at ?? null,
      }));

      allRepos.push(...formattedRepos);
      page++;
    } catch (error) {
      console.error("Error fetching repos:", error);
      break;
    }
  }

  return allRepos;
}

export const getAllRepos = cache(async (): Promise<Repo[]> => {
  return await fetchAllRepos();
});

export const getRecentRepos = async (
  count: number
): Promise<{ repos: Repo[]; totalCount: number }> => {
  "use cache";
  cacheLife("hours");

  const allRepos = await getAllRepos();
  return {
    repos: allRepos.slice(0, count),
    totalCount: allRepos.length,
  };
};

export const getLanguages = cache(async (): Promise<Language[]> => {
  const repos = await getAllRepos();
  const languageCount: Record<string, number> = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });

  return Object.entries(languageCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
});
