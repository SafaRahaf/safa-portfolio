const groups = [
  {
    title: "Frontend",
    items: ["React JS", "Next JS", "TypeScript", "Redux", "TanStack Query"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "Inline CSS", "SASS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node JS", "Nest JS", "Express", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Prisma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Skills</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">My Tech Stack</h2>
          <p className="mt-4 text-muted-foreground">Tools I reach for to ship great products.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="reveal hover-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/20" />
              <div className="relative">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="reveal mt-16 overflow-hidden rounded-2xl border border-border bg-background py-6">
          <div className="flex w-max gap-12 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-12 pr-12">
                {["React", "Next.js", "Node.js", "Nest.js", "TypeScript", "MongoDB", "PostgreSQL", "MySQL", "Tailwind", "GraphQL"].map(
                  (t) => (
                    <span key={t + dup} className="font-display text-2xl font-bold text-muted-foreground/60 hover:text-primary transition-colors">
                      {t} <span className="text-primary">•</span>
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
