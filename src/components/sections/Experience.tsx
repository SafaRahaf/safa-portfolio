import { useState } from "react";

const experiences = [
  {
    role: "Fullstack Developer",
    company: "Cropee",
    period: "2026 — Present",
    points: [
      "Architected and built a complete B2B commerce platform from scratch including database design, scalable API architecture, frontend systems, backend services, testing, and deployment workflows.",
      "Developed retailer and distributor dashboards with advanced order management, offer creation, inventory handling, and product workflows.",
      "Designed a flexible product architecture supporting products, variants, UOMs, pack types, and pricing structures optimized for complex B2B operations.",
      "Implemented intelligent bulk-offer pricing logic that automatically calculates the best possible pricing based on quantity tiers and distributor offers.",
      "Built reusable frontend systems with clean state management and scalable file structure for long-term maintainability.",
      "Integrated authentication, analytics, whatsapp message system for order, email systems, and operational tooling across the platform.",
      // created full web from scrach, bd design, api, file structure, frontend, ui design, backend, testing everything. retailer & distributer dashboards, order management and create order item add product create and future predection so i dont have to db design multiple time. offer create by distributer. when retailer ordering the offers related to that product will appear and will show best price e.g. if retailer buying 171 and there is 2 offers 100 = 100$ and 50 = 60$ and 1 = 3$ and 20 = 40$, so it will show 203$. full product includes product, variants, product variant uoms and pack type and uoms info detailedly for flaxibality and only b2b specific design.
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Grearmade",
    period: "2025 — 2026",
    points: [
      "Led development of both customer and admin platforms for a modern e-commerce ecosystem, handling frontend architecture, backend systems, APIs, database design, testing, and UI implementation.",
      "Built a high-performance offline-first storefront where users could browse products, manage carts, search, and interact with the platform without internet after initial load.",
      "Optimized client-side state management and caching strategies to create an exceptionally fast user experience with near-instant interactions.",
      "Developed a full admin system covering order management, inventory tracking, product management, coupons, analytics, and user administration.",
      "Implemented advanced coupon systems with support for product-specific, category-based, date-limited, and user-targeted discounts.",
      "Created scalable frontend architecture and reusable component systems for rapid feature expansion and maintainability.",
      // 10% was created then i started doing the whole frontend and backend. created full web from scrach, bd design, api, file structure, frontend, ui design, backend, testing everything. there is 2 sides one for customer one for admin. i've buid both from start the customer side is offline-first system properly build so when fisrt time you entered secong time wifi doesnt required unless you checkout you can do anything other like add to cart, remove from cart, update cart, see product details, search product etc & the whole thging is soo smooth so fast that it will win over any e com system you compare for fast bacause most of the thing is done by state save. and admin side is for order, product mangemetn, inventory management, user management, coupon management includes date, product specific, user specific, category specific etc dashboards etc.
    ],
  },
  {
    role: "Frontend Developer",
    company: "Muallim",
    period: "2024 - 2025",
    points: [
      "Led frontend development of a Next.js-based education management platform for organization onboarding, attendance tracking, scheduling, and academic operations.",
      "Built reusable UI systems with centralized state management where updates synchronized instantly across the application.",
      "Implemented advanced role-based access control with permission management tailored to organization-specific workflows.",
      "Developed complex attendance and scheduling systems with late-status detection, excuse workflows, color-coded states, and real-time UI feedback.",
      "Built scalable filtering, search, and pagination systems with flexible date and time-based querying across the platform.",
      "Collaborated closely with business stakeholders, testers, and backend engineers to align UI behavior with operational requirements and API architecture.",
      // testing, pdf download, share system. reusable components, scroll pagination everywhere, location hierarchy system, proper loading, attendance sheet and schedule timing etc show depending on late early show status and color. if late show late message and excuese system. complax data structure manage and show properly on ui. one place update instantly updated everywhere state management. role management & access controll. give permission to each role & ability to that what user supposed to do only. applcation guid ui. full systems filter and search by flexible date and time. meeting with bussiness team to understand requirements & collaborate with backend team to understand api structure. do project management from developmeent side guide tester etc.
    ],
  },
  {
    role: "Fullstack Engineer",
    company: "Credencesoft",
    period: "2021 & 2024",
    points: [
      "Built and maintained fullstack application features including API development, frontend implementation, and business workflow integrations.",
      "Designed and developed scalable REST APIs while learning backend engineering in a production environment.",
      "Created complex functional interfaces with clean and user-friendly UI architecture.",
      "Worked directly with business stakeholders to gather requirements, iterate rapidly, and deliver production-ready solutions.",
      "Built responsive marketing pages and dashboard interfaces using React and bootstrap CSS.",
      "Collaborated directly with clients during requirement discussions, feedback cycles, and UI refinement processes.",
    ],
  },
];

export function Experience() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Experience
          </span>
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
                {/* <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul> */}
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {(expanded[i] ? e.points : e.points.slice(0, 3)).map((p) => (
                    <li key={p} className="flex gap-2 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {e.points.length > 4 && (
                  <button
                    onClick={() =>
                      setExpanded((prev) => ({
                        ...prev,
                        [i]: !prev[i],
                      }))
                    }
                    className="mt-4 text-sm font-medium text-primary hover:underline"
                  >
                    {expanded[i] ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
