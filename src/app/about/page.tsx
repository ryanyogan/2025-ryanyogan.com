export const metadata = {
  title: 'About | Ryan Yogan',
  description: 'Learn more about Ryan Yogan, his experience, and his passion for software development and leadership.',
}

export default function AboutPage() {
  return (
    <div className="container-wide">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight mb-4">About Me</h1>
          <p className="text-base text-gray-700 leading-relaxed max-w-2xl font-sans">
            Software developer, engineering leader, and passionate creator of exceptional user experiences.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-normal tracking-tight text-gray-900">My Journey</h2>
          <div className="prose prose-sm">
            <p>
              With over a decade of experience in software development, I've had the privilege of working on a wide range of projects and technologies. My passion lies in creating intuitive, efficient, and scalable solutions that make a real difference in people's lives.
            </p>
            <p>
              As an engineering leader, I focus on fostering a culture of innovation, continuous learning, and collaboration. I believe in empowering teams to reach their full potential by providing guidance, removing obstacles, and creating an environment where creativity can flourish.
            </p>
            <p>
              Throughout my career, I've had the opportunity to work with cutting-edge technologies and contribute to open-source projects. This experience has not only honed my technical skills but also deepened my understanding of the importance of community and knowledge sharing in the tech industry.
            </p>
            <p>
              When I'm not coding or leading teams, you can find me exploring new technologies, writing about my experiences, or mentoring aspiring developers. I'm always excited to learn and grow, and I believe that the best way to do that is by staying curious and open to new ideas.
            </p>
            <p>
              Feel free to explore my projects on the Tech Shelf or read some of my thoughts in the Writing section. If you'd like to connect or discuss potential collaborations, don't hesitate to reach out!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
