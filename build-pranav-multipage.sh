#!/usr/bin/env bash
set -euo pipefail

PROJECT="pranav-research"
ROOT="$(pwd)"

echo "==> Building $PROJECT in: $ROOT"

# --- Checks ---
command -v node >/dev/null 2>&1 || { echo "[ERR] node not found"; exit 1; }
command -v npm  >/dev/null 2>&1 || { echo "[ERR] npm not found"; exit 1; }

# --- Fresh start (optional but recommended) ---
rm -rf "$PROJECT"

# --- Scaffold Next.js (Tailwind v3 default) ---
npx create-next-app@latest "$PROJECT" \
  --ts --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm --yes

cd "$PROJECT"

# --- Components + Pages ---
mkdir -p src/components
mkdir -p src/app/{research,systems,background,publications,contact}

# Tailwind config (v3-friendly) with your palette
cat > tailwind.config.ts <<'EOF'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your identity colors (professional tones)
        blue:    "#0A3D91",
        blue2:   "#062A63",
        saffron: "#E67E22",
        saffron2:"#C96512",
        yellow:  "#F4C430",

        // Neutrals
        ink:     "#0B1220",
        muted:   "#334155",
        soft:    "#F7F8FB",
        border:  "#E5E7EB",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
EOF

# globals.css (Tailwind v3 directives)
cat > src/app/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  background: #ffffff; /* keep white dominant */
  color: #0B1220;
}

* { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

::selection { background: rgba(230, 126, 34, 0.22); }
EOF

# Navbar with true horizontal tabs + active state
cat > src/components/Navbar.tsx <<'EOF'
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/systems", label: "Systems" },
  { href: "/background", label: "Background" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-soft shadow-soft">
            <span className="h-2 w-2 rounded-full bg-yellow" />
          </span>
          <div className="leading-tight">
            <div className="font-semibold text-ink">Pranav Chougule</div>
            <div className="text-xs text-muted">Robotics & AI for Infrastructure NDE</div>
          </div>
        </Link>

        {/* Horizontal tabs */}
        <nav className="hidden md:flex items-center gap-1 rounded-2xl bg-soft p-1 border border-border">
          {tabs.map((t) => {
            const active = path === t.href;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={[
                  "px-4 py-2 text-sm font-semibold rounded-xl transition",
                  active
                    ? "bg-blue text-white shadow-soft"
                    : "text-blue hover:bg-white hover:text-blue2",
                ].join(" ")}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile row (still horizontal, scrollable) */}
      <div className="md:hidden border-t border-border bg-white">
        <div className="px-4 py-2 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map((t) => {
              const active = path === t.href;
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className={[
                    "px-4 py-2 text-sm font-semibold rounded-xl border",
                    active
                      ? "bg-blue text-white border-blue"
                      : "bg-white text-blue border-border",
                  ].join(" ")}
                >
                  {t.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
EOF

# Footer
cat > src/components/Footer.tsx <<'EOF'
export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Pranav Chougule</div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue" />
          <span className="h-2 w-2 rounded-full bg-saffron" />
          <span className="h-2 w-2 rounded-full bg-yellow" />
          <span className="ml-2">Robotics • AI • Multimodal NDE</span>
        </div>
      </div>
    </footer>
  );
}
EOF

# Layout: white dominant, saffron blocks inside sections, blue nav/buttons
cat > src/app/layout.tsx <<'EOF'
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pranav Chougule | Robotics & AI for Infrastructure NDE",
  description:
    "Robotics & AI for multimodal infrastructure NDE: UPV, AE, hyperspectral, laser, Gaussian Splatting, and VLMs (Florence).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
EOF

# Shared page shell helper (simple, keeps design consistent)
cat > src/components/PageShell.tsx <<'EOF'
export function PageShell({
  title,
  subtitle,
  accent = "blue",
  children,
}: {
  title: string;
  subtitle?: string;
  accent?: "blue" | "saffron";
  children: React.ReactNode;
}) {
  const bar = accent === "blue" ? "bg-blue" : "bg-saffron";
  const tag = accent === "blue" ? "text-blue" : "text-saffron";

  return (
    <main className="bg-white">
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center gap-4">
            <span className={`h-10 w-2 rounded-full ${bar}`} />
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-ink">{title}</h1>
              {subtitle ? <p className={`mt-2 text-sm font-semibold ${tag}`}>{subtitle}</p> : null}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">{children}</div>
      </section>
    </main>
  );
}
EOF

# HOME
cat > src/app/page.tsx <<'EOF'
import Link from "next/link";

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl2 bg-white border border-border shadow-soft p-6">
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero (white dominant) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold text-saffron">Robotics & AI for Infrastructure NDE</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight text-ink">
            Multimodal robotic sensing for autonomous infrastructure evaluation.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted leading-relaxed">
            I build integrated robotic systems combining Ultrasonic Pulse Velocity (UPV), Acoustic Emission (AE),
            hyperspectral imaging, laser-based surface monitoring, 3D reconstruction (Gaussian Splatting),
            and Florence-based vision-language models for intelligent NDE workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/systems" className="rounded-xl bg-blue px-5 py-3 text-sm font-semibold text-white hover:bg-blue2 transition">
              Systems
            </Link>
            <Link href="/research" className="rounded-xl border border-blue px-5 py-3 text-sm font-semibold text-blue hover:bg-soft transition">
              Research
            </Link>
            <Link href="/publications" className="rounded-xl border border-saffron px-5 py-3 text-sm font-semibold text-saffron hover:bg-saffron/10 transition">
              Publications
            </Link>
          </div>

          {/* Highlight strip (saffron weight without killing the page) */}
          <div className="mt-12 rounded-xl2 border border-saffron/30 bg-saffron/10 p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <span className="h-2 w-2 rounded-full bg-yellow" />
              Focus: Robotics + Multimodal NDE + AI interpretation + Digital Twins
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card title="Multimodal NDE">
              UPV, AE, hyperspectral imaging, and surface monitoring integrated into synchronized robotic workflows.
            </Card>
            <Card title="Florence VLM for UPV">
              Vision-language reasoning over UPV signal representations for context-aware NDE interpretation.
            </Card>
            <Card title="Gaussian Splatting">
              3D reconstruction for real-time scene representation and digital twin integration.
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
EOF

# RESEARCH
cat > src/app/research/page.tsx <<'EOF'
import { PageShell } from "@/components/PageShell";

export default function Research() {
  return (
    <PageShell
      title="Research"
      subtitle="Robotics and AI for Infrastructure Nondestructive Evaluation"
      accent="blue"
    >
      <div className="max-w-3xl space-y-6 text-muted leading-relaxed">
        <p>
          My research integrates robotics, AI, and multimodal sensing to enable autonomous infrastructure NDE.
          I focus on synchronized experimental workflows where robot motion, sensing, actuation, and data logging
          are designed as a single system.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Multimodal sensing: UPV, AE, hyperspectral imaging, laser-based surface monitoring</li>
          <li>AI interpretation: Florence-based visual language model workflows for UPV signal representations</li>
          <li>3D digital twins: Gaussian Splatting-based real-time scene representation</li>
        </ul>
      </div>
    </PageShell>
  );
}
EOF

# SYSTEMS
cat > src/app/systems/page.tsx <<'EOF'
import { PageShell } from "@/components/PageShell";

function Box({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl2 border border-border bg-soft p-6">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">{children}</p>
    </div>
  );
}

export default function Systems() {
  return (
    <PageShell title="Systems" subtitle="Multimodal sensing + AI interpretation + reconstruction" accent="saffron">
      <div className="grid gap-6 sm:grid-cols-2">
        <Box title="Robotic NDE Platform">
          UR3e manipulation, synchronized sensing, structured experimental designs, and traceable data logging pipelines.
          Collaboration context includes work with Dr. Arvin Ebrahimkhanlou and Dr. Yaghoob Farnam.
        </Box>
        <Box title="Sensors">
          Ultrasonic Pulse Velocity (UPV), Acoustic Emission (AE), hyperspectral imaging, and surface monitoring.
        </Box>
        <Box title="Florence VLM for UPV">
          Vision-language reasoning over ultrasonic waveform representations to support context-aware NDE analytics.
        </Box>
        <Box title="Gaussian Splatting">
          3D reconstruction for real-time scene representation and integration into digital twin environments.
        </Box>
      </div>
    </PageShell>
  );
}
EOF

# BACKGROUND
cat > src/app/background/page.tsx <<'EOF'
import { PageShell } from "@/components/PageShell";

export default function Background() {
  return (
    <PageShell title="Background" subtitle="Education" accent="blue">
      <div className="space-y-6 max-w-3xl text-muted leading-relaxed">
        <div className="rounded-xl2 border border-border bg-white shadow-soft p-6">
          <div className="text-ink font-semibold">PhD — Robotics and AI for Infrastructure NDE</div>
          <div className="text-sm text-blue font-semibold mt-1">Drexel University</div>
          <div className="mt-3 text-sm">
            Focus: autonomous robotic experimentation, multimodal sensing integration, digital twins, and AI-driven infrastructure monitoring.
          </div>
        </div>

        <div className="rounded-xl2 border border-border bg-white shadow-soft p-6">
          <div className="text-ink font-semibold">MS — Robotics and Autonomous Systems</div>
          <div className="text-sm text-blue font-semibold mt-1">Arizona State University</div>
          <div className="mt-3 text-sm">
            Focus areas: robotic manipulation, motion planning, perception systems, autonomous control architectures.
          </div>
        </div>

        <div className="rounded-xl2 border border-border bg-white shadow-soft p-6">
          <div className="text-ink font-semibold">B.Tech — Mechanical Engineering</div>
          <div className="text-sm text-blue font-semibold mt-1">VJTI, Mumbai</div>
          <div className="mt-3 text-sm">
            Foundation in mechanics, control systems, structural behavior, and manufacturing systems.
          </div>
        </div>
      </div>
    </PageShell>
  );
}
EOF

# PUBLICATIONS
cat > src/app/publications/page.tsx <<'EOF'
import { PageShell } from "@/components/PageShell";

export default function Publications() {
  return (
    <PageShell title="Publications" subtitle="Accepted / in-progress" accent="saffron">
      <div className="max-w-4xl">
        <div className="rounded-xl2 border border-border bg-soft p-6">
          <div className="text-ink font-semibold">
            Chougule, P., Farnam, Y., Ebrahimkhanlou, A.
          </div>
          <div className="mt-2 text-sm text-muted leading-relaxed">
            “Laser-based monitoring of robotic carbon dioxide injection in fresh additively manufactured concrete.”
          </div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-saffron/15 border border-saffron/30 px-4 py-2 text-sm font-semibold text-ink">
            <span className="h-2 w-2 rounded-full bg-yellow" />
            Accepted for presentation at SPIE Smart Structures + NDE, 17 March 2026. Proceedings forthcoming.
          </div>
        </div>
      </div>
    </PageShell>
  );
}
EOF

# CONTACT
cat > src/app/contact/page.tsx <<'EOF'
import { PageShell } from "@/components/PageShell";

export default function Contact() {
  return (
    <PageShell title="Contact" subtitle="Collaboration • Roles • Research" accent="blue">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl2 border border-border bg-white shadow-soft p-6">
          <div className="text-ink font-semibold">Email</div>
          <div className="mt-2 text-sm text-muted">your-email@drexel.edu</div>
        </div>
        <div className="rounded-xl2 border border-border bg-white shadow-soft p-6">
          <div className="text-ink font-semibold">Links</div>
          <div className="mt-2 text-sm text-muted">LinkedIn: add link</div>
          <div className="mt-1 text-sm text-muted">GitHub: add link</div>
        </div>
      </div>
    </PageShell>
  );
}
EOF

echo "==> Installing deps..."
npm install

echo "==> Done."
echo "Run:"
echo "  cd $ROOT/$PROJECT"
echo "  npm run dev"
EOF
