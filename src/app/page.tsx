import { RecentProjects } from "@/components/recent-projects";
import { RecentWriting } from "@/components/recent-writing";

export default async function Home() {
  return (
    <div className="space-y-20">
      <section className="space-y-4">
        <h2 className="text-3xl font-serif text-zinc-100">
          Hello, I&apos;m Ryan
        </h2>
        <p className="font-sans text-zinc-400">
          As an Engineering Leader and Software Developer. I&apos;m passionate
          about crafting exceptional user experiences, developing rock-solid
          distributed services, and nurturing a dynamic team development.
        </p>
        <p className="font-sans text-zinc-400">
          My leadership style is rooted in empathy, curiosity, and cheerleading.
          I believe in the power of a growth mindset, and I strive to create an
          environemnt where everyone may learn, thrive, and have fun.
        </p>
      </section>

      <section className="space-y-4">
        <RecentWriting />
      </section>

      <section className="space-y-8">
        <RecentProjects />
      </section>
    </div>
  );
}
