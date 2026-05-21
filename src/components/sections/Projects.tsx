import { ArrowUpRight, Github } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    desc: "Realtime SaaS dashboard with charts, role-based access, and Stripe billing.",
    tags: ["Next.js", "Nest.js", "PostgreSQL", "Tailwind"],
    image: p1,
  },
  {
    title: "Modern E-commerce",
    desc: "Headless shop with cart, checkout, search, and an admin CMS.",
    tags: ["React", "Node.js", "MongoDB", "Bootstrap"],
    image: p2,
  },
  {
    title: "Social Mobile App",
    desc: "Feed, chat, push notifications, and media uploads on a Nest API.",
    tags: ["Next.js", "Nest.js", "MySQL", "Tailwind"],
    image: p3,
  },
  {
    title: "SaaS Landing Suite",
    desc: "Marketing site, blog (MDX), and waitlist with email automation.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    image: p4,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Projects</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Selected Work</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A few products I've built recently. Click any to see the live site or code.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal hover-lift group relative overflow-hidden rounded-3xl border border-border bg-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <a href="#" className="btn-press flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                    <ArrowUpRight size={18} />
                  </a>
                  <a href="#" className="btn-press flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground border border-border hover:scale-110 transition-transform">
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
