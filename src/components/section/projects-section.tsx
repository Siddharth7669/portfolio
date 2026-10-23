import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-y-10">
        {/* Section heading */}
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center gap-y-5 text-center">
            <div className="flex w-full items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
              <span className="rounded-full border bg-muted/50 px-4 py-1.5 text-sm font-medium">
                Projects
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
            </div>

            <div className="flex max-w-2xl flex-col gap-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Selected Work
              </h2>
              <p className="text-balance text-muted-foreground sm:text-lg">
                A selection of AI-powered applications, machine learning
                projects, and research work I&apos;ve built.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Project cards */}
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 items-stretch gap-6">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <div className="h-full overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                //   video={project.video}
                  links={project.links}
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
