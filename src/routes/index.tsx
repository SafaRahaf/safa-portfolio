import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safa Rahaf Khan — Fullstack Developer Portfolio" },
      {
        name: "description",
        content:
          "Fullstack developer portfolio — React, Next.js, Node.js, Nest.js, MongoDB, MySQL & PostgreSQL. View projects, experience, and get in touch.",
      },
      { property: "og:title", content: "Safa Rahaf Khan — Fullstack Developer" },
      {
        property: "og:description",
        content: "Portfolio of a fullstack developer building modern, performant web apps.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <PortfolioPage />
    </ThemeProvider>
  );
}

function PortfolioPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
