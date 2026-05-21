import { ArrowDown, Download, Sparkles } from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles size={14} className="text-primary" />
            Available for freelance work
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-primary">Your Name</span>
            <br />
            <span className="text-stroke">Fullstack</span> Developer
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I craft fast, accessible, and visually polished web experiences end-to-end —
            from pixel-perfect React UIs to scalable Node backends.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-press group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
            >
              View My Work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="btn-press inline-flex items-center gap-2 rounded-full border-2 border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm">
            <Stat value="5+" label="Years" />
            <div className="h-10 w-px bg-border" />
            <Stat value="40+" label="Projects" />
            <div className="h-10 w-px bg-border" />
            <Stat value="20+" label="Clients" />
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/30 blur-2xl animate-float" />
          <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-primary/40 bg-card hover-lift">
            <img
              src={portrait}
              alt="Portrait"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card/95 px-5 py-3 shadow-xl backdrop-blur animate-float" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold">Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-primary">{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
