export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. Crafted with <span className="text-primary">♥</span> and lots of coffee.
        </p>
        <a href="#home" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
