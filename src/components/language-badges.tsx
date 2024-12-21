interface Language {
  name: string
  count: number
}

const COLORS = [
  'bg-blue-100 text-blue-800',
  'bg-green-100 text-green-800',
  'bg-yellow-100 text-yellow-800',
  'bg-red-100 text-red-800',
  'bg-indigo-100 text-indigo-800',
  'bg-purple-100 text-purple-800',
  'bg-pink-100 text-pink-800',
]

export function LanguageBadges({ languages }: { languages: Language[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((lang, index) => (
        <span
          key={lang.name}
          className={`px-3 py-1 rounded-full text-sm font-medium ${COLORS[index % COLORS.length]}`}
        >
          {lang.name}
        </span>
      ))}
    </div>
  )
}

