import { useTheme, type Theme } from "./ThemeProvider";

const themes: { value: Theme; label: string; swatch: string }[] = [
  { value: "black", label: "Black", swatch: "#0a0a0a" },
  { value: "white", label: "White", swatch: "#ffffff" },
  { value: "ash", label: "Ash", swatch: "#4a4d55" },
  // { value: "yellow", label: "Yellow", swatch: "#facc15" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-border bg-card/60 p-1 backdrop-blur">
      {themes.map((t) => {
        const active = theme === t.value;
        return (
          <button
            key={t.value}
            onClick={() => setTheme(t.value)}
            aria-label={`Switch to ${t.label} theme`}
            title={t.label}
            className={`btn-press relative h-7 w-7 rounded-full border-2 transition-all ${
              active ? "border-primary scale-110" : "border-border hover:scale-110"
            }`}
            style={{ backgroundColor: t.swatch }}
          >
            {active && (
              <span className="absolute -inset-1 rounded-full ring-2 ring-primary/60 animate-glow" />
            )}
          </button>
        );
      })}
    </div>
  );
}
