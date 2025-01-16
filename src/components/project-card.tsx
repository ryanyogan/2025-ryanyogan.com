interface ProjectCardProps {
  project: {
    title: string;
    excerpt: string;
    tools: string[];
    href: string;
  };
  showTools?: boolean;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <article className="group pb-6 max-w-3xl">
      <a href={props.project.href} className="flex flex-col">
        <div className="flex justify-between items-center pb-1">
          <h3 className="font-sans text-[15px] text-blue-400 underline underline-offset-2 transition-colors line-clamp-1">
            {props.project.title}
          </h3>
        </div>
        <p className="text-base font-sans text-zinc-400 line-clamp-2">
          {props.project.excerpt}
        </p>
        {props.project?.tools && props.showTools && (
          <p className="text-xs text-zinc-500 mt-1">
            {props.project.tools.join(", ")}
          </p>
        )}
      </a>
    </article>
  );
}
