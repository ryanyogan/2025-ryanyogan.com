import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Pickle NHL",
    excerpt:
      "Recenetly I have been using Claude, in conjunction with Advent of Code 2024, using a language I know and a new one to quickly learn!",
    date: "2024/04/28",
    href: "https://github.com/ryanyogan/pickle-nhl",
    tools: ["Next.JS", "Tailwind CSS", "TypeScript", "PPR", "DynamicIO"],
  },
  {
    title: "Chore Bounty",
    excerpt:
      "Before we start 2024, let's have a funny look at 2023. This is more filler text because the UI wants it.",
    date: "2024/02/21",
    href: "https://yogan.dev",
    tools: [
      "Next.JS",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
      "Next Caching & PPR",
    ],
  },
  {
    title: "My Site (https://ryanyogan.com)",
    excerpt:
      "Journaling, a hidden remix course, can drizzle with my love of prisma, and the hunt for memory.",
    date: "2024/04/29",
    href: "https://yogan.dev",
    tools: [
      "Next.JS",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "RSC",
      "Static Gen",
    ],
  },
  {
    title: "Ollama, IndexDB, Oh My!",
    excerpt:
      "Before we start 2024, let's have a funny look at 2023. This is more filler text because the UI wants it.",
    date: "2024/02/24",
    href: "https://yogan.dev",
    tools: ["React Router 7", "TypeScript", "Ollama", "IndexDB"],
  },
];

export function RecentProjects() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-zinc-50 relative inline-block">
        <span className="relative z-10">Latest Projects</span>
      </h2>
      <div className="grid gap-x-8">
        {projects.map((project) => (
          <ProjectCard key={project.date} project={project} />
        ))}
      </div>
    </div>
  );
}
