'use client'

import { useState } from 'react'
import { RepoList } from './repo-list'
import { Language, Repo } from '@/lib/github'

const COLORS = [
  'bg-blue-50 text-blue-600',
  'bg-green-50 text-green-600',
  'bg-yellow-50 text-yellow-600',
  'bg-red-50 text-red-600',
  'bg-indigo-50 text-indigo-600',
  'bg-purple-50 text-purple-600',
  'bg-pink-50 text-pink-600',
]

export function LanguageFilter({ languages, repos }: { languages: Language[], repos: Repo[] }) {
  const [selectedLanguage, setSelectedLanguage] = useState('All')

  const filteredRepos = selectedLanguage === 'All' 
    ? repos 
    : repos.filter(repo => repo.language === selectedLanguage)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedLanguage('All')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            selectedLanguage === 'All' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          All ({repos.length})
        </button>
        {languages.map((lang, index) => (
          <button
            key={lang.name}
            onClick={() => setSelectedLanguage(lang.name)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              selectedLanguage === lang.name ? COLORS[index % COLORS.length] : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {lang.name} ({lang.count})
          </button>
        ))}
      </div>
      <RepoList repos={filteredRepos} />
    </div>
  )
}

