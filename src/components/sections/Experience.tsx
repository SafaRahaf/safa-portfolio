const experiences = [
  {
    role: "Senior Fullstack Developer",
    company: "Acme Tech",
    period: "2023 — Present",
    points: [
      "Led migration of monolith to Next.js 14 + Nest.js microservices, cutting load time 60%.",
      "Designed PostgreSQL schemas and Redis caching layer serving 200k DAU.",
      "Mentored 4 junior devs and instituted code review + testing standards.",
    ],
  },
  {
    role: "Fullstack Engineer",
    company: "Bright Labs",
    period: "2021 — 2023",
    points: [
      "Shipped 12+ React/Node features end-to-end including auth, billing, and analytics.",
      "Integrated Stripe, SendGrid, and AWS S3; maintained 99.9% uptime.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Pixel Studio",
    period: "2020 — 2021",
    points: [
      "Built marketing sites and dashboards in React + Tailwind with a focus on motion.",
      "Collaborated directly with designers in Figma to ship pixel-perfect UI.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Experience</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Where I've worked</h2>
        </div>

        <ol className="relative border-l-2 border-border pl-8 space-y-12">
          {experiences.map((e, i) => (
            <li
              key={e.role}
              className="reveal relative"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="absolute -left-[42px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-background animate-pulse" />
              <div className="hover-lift rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{e.role}</h3>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{e.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
