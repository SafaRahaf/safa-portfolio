import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Send } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "hello@yourname.dev", href: "mailto:hello@yourname.dev" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "Remote · Worldwide", href: "#" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
            Let's build <span className="text-primary">something great</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Have a project in mind? Reach out and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="reveal lg:col-span-2 space-y-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="hover-lift group flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:rotate-6">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="btn-press flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:rotate-6"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! This is a demo form — wire it to your backend.");
            }}
            className="reveal lg:col-span-3 rounded-3xl border border-border bg-card p-8 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" type="text" placeholder="Jane Doe" />
              <Field label="Email" type="email" placeholder="jane@company.com" />
            </div>
            <Field label="Subject" type="text" placeholder="Project inquiry" />
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="btn-press group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow sm:w-auto"
            >
              Send Message
              <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
