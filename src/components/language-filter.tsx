"use client";

import { Language, Repo } from "@/lib/github";
import { useState } from "react";
import { RepoList } from "./repo-list";

export function LanguageFilter({
  languages,
  repos,
}: {
  languages: Language[];
  repos: Repo[];
}) {
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const filteredRepos =
    selectedLanguage === "All"
      ? repos
      : repos.filter((repo) => repo.language === selectedLanguage);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 pb-4">
        <button
          onClick={() => setSelectedLanguage("All")}
          className={`text-xs font-medium transition-colors cursor-pointer text-blue-400 underline underline-offset-2`}
        >
          All ({repos.length})
        </button>
        {languages.map((lang) => (
          <button
            key={lang.name}
            onClick={() => setSelectedLanguage(lang.name)}
            className={`text-xs font-medium transition-colors cursor-pointer text-blue-400 underline underline-offset-2`}
          >
            {lang.name} ({lang.count})
          </button>
        ))}
      </div>
      <RepoList repos={filteredRepos} />
    </div>
  );
}
