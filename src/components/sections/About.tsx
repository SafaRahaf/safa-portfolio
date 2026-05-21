import { Code2, Layers, Rocket, Users } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", text: "Maintainable, tested, well-documented." },
  { icon: Layers, title: "Fullstack", text: "From database design to pixel-perfect UI." },
  { icon: Rocket, title: "Performance", text: "Fast load times and silky interactions." },
  { icon: Users, title: "Collaboration", text: "Clear comms with PMs, designers, teams." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Building the web with <span className="text-primary">craft & care</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I'm a fullstack developer with 5+ years of experience building production-grade web
            applications. I specialize in the React/Next.js ecosystem on the frontend and Node.js
            on the backend. I love turning complex problems into simple, beautiful, intuitive
            products — and I care deeply about performance, accessibility, and the small details
            that make great software feel great.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal hover-lift group rounded-2xl border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:rotate-6 group-hover:scale-110">
                <h.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
