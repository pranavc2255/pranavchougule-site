#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="${1:-$HOME/personal/website/pranav-research}"
PORT="${PORT:-3000}"

echo "============================================================"
echo " Diagnose + Repair: Next.js + Tailwind on Ubuntu"
echo " Project: $PROJECT_DIR"
echo "============================================================"
echo

# -----------------------------
# 0) OS + basic tools check
# -----------------------------
echo "==> OS info"
if command -v lsb_release >/dev/null 2>&1; then
  lsb_release -a || true
else
  echo "[WARN] lsb_release not found. Showing /etc/os-release:"
  cat /etc/os-release || true
fi
echo

echo "==> Tool versions"
command -v node >/dev/null 2>&1 || { echo "[ERR] node not found"; exit 1; }
command -v npm  >/dev/null 2>&1 || { echo "[ERR] npm not found"; exit 1; }
echo "node: $(node -v)  ($(command -v node))"
echo "npm : $(npm -v)   ($(command -v npm))"
echo

# -----------------------------
# 1) Project sanity check
# -----------------------------
if [ ! -d "$PROJECT_DIR" ]; then
  echo "[ERR] Project dir not found: $PROJECT_DIR"
  echo "Usage: $0 /absolute/path/to/project"
  exit 1
fi

cd "$PROJECT_DIR"

if [ ! -f package.json ]; then
  echo "[ERR] package.json not found in $PROJECT_DIR"
  exit 1
fi

echo "==> package.json dependencies (quick view)"
node -e 'const p=require("./package.json"); console.log("name:",p.name); console.log("next:",(p.dependencies&&p.dependencies.next)||""); console.log("tailwindcss:",(p.devDependencies&&p.devDependencies.tailwindcss)||""); console.log("@tailwindcss/postcss:",(p.devDependencies&&p.devDependencies["@tailwindcss/postcss"])||"");'
echo

# -----------------------------
# 2) Port 3000 check (is an old server running?)
# -----------------------------
echo "==> Checking port $PORT"
if command -v lsof >/dev/null 2>&1; then
  PIDS=$(lsof -ti tcp:${PORT} || true)
  if [ -n "${PIDS}" ]; then
    echo "[WARN] Something is running on port ${PORT}: ${PIDS}"
    echo "==> Attempting to identify process:"
    ps -fp ${PIDS} || true
    echo
    echo "==> Killing port ${PORT} processes..."
    kill -9 ${PIDS} || true
    echo "Killed."
  else
    echo "Port ${PORT} is free."
  fi
else
  echo "[WARN] lsof not available; skipping port kill. Install with: sudo apt-get install -y lsof"
fi
echo

# -----------------------------
# 3) Verify App Router layout loads globals.css
# -----------------------------
echo "==> Checking App Router layout + globals"
if [ ! -f src/app/layout.tsx ]; then
  echo "[ERR] src/app/layout.tsx missing. This does not look like an App Router project."
  exit 1
fi

if ! grep -q 'import "./globals.css"' src/app/layout.tsx; then
  echo "[WARN] layout.tsx does not import globals.css. Fixing..."
  # insert import at top after other imports
  perl -0777 -i -pe 's/(import .*?\n)/$1import ".\/globals.css";\n/s if $_ !~ /import "\.\/globals\.css"/' src/app/layout.tsx
fi

if [ ! -f src/app/globals.css ]; then
  echo "[ERR] src/app/globals.css missing."
  exit 1
fi

echo "layout.tsx imports globals.css ✅"
echo

# -----------------------------
# 4) Tailwind v4 + Turbopack fix
#    Key: Tailwind v4 expects PostCSS plugin @tailwindcss/postcss
#    And recommended globals.css uses: @import "tailwindcss";
# -----------------------------
echo "==> Enforcing Tailwind v4 PostCSS + globals.css format"

npm install -D @tailwindcss/postcss autoprefixer >/dev/null

cat > postcss.config.js <<'EOF'
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
EOF

# Tailwind v4 recommended global entry:
cat > src/app/globals.css <<'EOF'
@import "tailwindcss";

/* Your palette */
:root {
  --blue: #0A3D91;
  --blue2: #062A63;
  --saffron: #E67E22;
  --yellow: #F4C430;
  --ink: #0B1220;
  --muted: #334155;
  --soft: #F7F8FB;
  --border: #E5E7EB;
}

html, body {
  background: #ffffff;
  color: var(--ink);
}

* { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
::selection { background: rgba(230, 126, 34, 0.22); }
EOF

echo "PostCSS + globals.css updated ✅"
echo

# -----------------------------
# 5) Hard clean + rebuild
# -----------------------------
echo "==> Cleaning build artifacts"
rm -rf .next node_modules package-lock.json

echo "==> Reinstall"
npm install

echo "==> Build (this must succeed)"
npm run build

echo
echo "==> Starting dev server on port $PORT"
echo "Open: http://localhost:${PORT}"
echo

# Use PORT env var if supported by next (it is)
PORT="${PORT}" npm run dev
