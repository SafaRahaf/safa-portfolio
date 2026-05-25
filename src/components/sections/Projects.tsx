import { ArrowUpRight, Github } from "lucide-react";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";
import p4 from "@/assets/project-4.png";
import p5 from "@/assets/project-5.png";

const projects = [
  {
    title: "Analytics Dashboard",
    desc: "Real-time e-commerce admin dashboard with revenue analytics, order tracking, coupon management, and full product, category, and brand control. Includes customizable UI layout management for mobile and desktop category display.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    image: p1,
    href: "https://console.gearmade.com.bd/",
    githubLink: "https://github.com/clapable/admin-ui",
  },
  {
    title: "Modern E-commerce",
    desc: "Offline-first e-commerce platform with cart, wishlist, category, coupon system, authentication, and optimized filter & search architecture for a smooth shopping and checkout experience.",
    tags: ["React", "Node.js", "MongoDB", "Bootstrap"],
    image: p2,
    href: "https://gearmade.com.bd/",
    githubLink: "https://github.com/clapable/customer-ui",
  },
  {
    title: "Educational org management system",
    desc: "School management system covering attendance tracking, student and teacher management, class scheduling, parent portal, employee management, and role-based reporting dashboards.",
    tags: ["Next.js", "Nest.js", "MySQL", "Tailwind"],
    image: p3,
    href: "https://admin.uat.muallim.icu/",
    githubLink: "https://github.com/muallimproject/muallim-frontend-orgadmin",
  },
  {
    title: "Email broadcast system",
    desc: "Bulk email delivery system with sender prioritization (weighted), scheduling support, and controlled dispatch timing to improve deliverability and reduce spam flagging risk.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    image: p4,
    href: "https://email-broadcast.ebas-svc.online/",
    githubLink: "https://github.com/SafaRahaf/email-blaster",
  },
  {
    title: "B2B SaaS Platform",
    desc: "B2B system connecting distributors and retailers, enabling product and offer management, quantity-based pricing optimization, and order tracking with role-based dashboards.",
    tags: ["React", "TypeScript", "OpenAI", "Tailwind"],
    image: p5,
    href: "#",
    githubLink: "https://github.com/cropee/admin-ui",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Projects
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Projects I've Built
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A few products I've built recently. Click any to see the live site or code.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
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
                  <a
                    href={p.href}
                    className="btn-press flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                  <a
                    href={p.githubLink}
                    className="btn-press flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground border border-border hover:scale-110 transition-transform"
                  >
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
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
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
