#!/bin/bash

echo "🚀 Building Local Native Portfolio (India Theme 40/60 Layout)..."

# 1. Clean up any previous failed attempts in this specific folder
rm -rf pranav-research

# 2. Scaffold Next.js natively
npx create-next-app@latest pranav-research \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm \
  --yes

cd pranav-research || exit

# 3. Setup Directories & Tailwind v4 Cleanup
mkdir -p src/components public
rm -f tailwind.config.ts

# 4. Automagically fetch your portrait from the external drive
OLD_PATH="/media/comeback/New Volume/HP omen ubuntu 20.04/personal/websites/images/Pranav_potrait.jpg"
if [ -f "$OLD_PATH" ]; then
  cp "$OLD_PATH" public/
  echo "✅ Successfully imported Pranav_potrait.jpg from external drive!"
else
  echo "⚠️ Portrait not found at old path. You will need to drop it into the 'public' folder later."
fi

echo "⚙️ Injecting CSS and Theme..."
cat << 'EOF' > src/app/globals.css
@import "tailwindcss";

@theme {
  --color-cricket-blue: #005CB9; 
  --color-cricket-navy: #0B1C3F; 
  --color-flag-saffron: #FF9933; 
  --color-holy-yellow: #FFC000;  
}

@layer base {
  body {
    background-color: #ffffff;
    color: #1e293b;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
    -webkit-font-smoothing: antialiased;
  }
}
EOF

echo "🧱 Building Components..."
cat << 'EOF' > src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-40 w-full bg-white shadow-md border-b-4 border-flag-saffron">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-cricket-blue text-xl tracking-widest flex items-center gap-2 uppercase">
          <span className="w-3 h-3 rounded-full bg-holy-yellow"></span>
          Index
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-bold text-cricket-blue uppercase tracking-wide">
          <a href="#research" className="hover:text-flag-saffron transition-colors">Research</a>
          <a href="#systems" className="hover:text-flag-saffron transition-colors">Systems</a>
          <a href="#education" className="hover:text-flag-saffron transition-colors">Background</a>
        </div>
      </div>
    </nav>
  );
}
EOF

cat << 'EOF' > src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-cricket-blue border-t-8 border-holy-yellow mt-0">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-sm text-white font-medium">
        <p>© {new Date().getFullYear()} All rights reserved. | Drexel Robotics Operations</p>
        <div className="flex space-x-8 mt-4 md:mt-0 font-bold tracking-widest uppercase">
          <a href="https://github.com/pranavc2255" target="_blank" rel="noopener noreferrer" className="hover:text-flag-saffron transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/pranavc2255/" target="_blank" rel="noopener noreferrer" className="hover:text-flag-saffron transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
EOF

echo "📄 Building Pages..."
cat << 'EOF' > src/app/page.tsx
export default function Home() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* =========================================
          20% BLUE AREA: HERO SECTION WITH PHOTO
      ========================================= */}
      <section className="bg-cricket-blue pt-36 pb-24 px-6 border-b-[12px] border-holy-yellow shadow-xl">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Pranav Chougule
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-holy-yellow tracking-tight leading-snug">
              Robotics & AI for Infrastructure <br className="hidden md:block" />Nondestructive Evaluation
            </h2>
            <p className="text-lg text-white/95 leading-relaxed max-w-2xl pt-4 border-l-4 border-flag-saffron pl-5 font-medium">
              I develop multimodal robotic sensing systems that integrate industrial manipulators, ultrasonic testing, acoustic emission monitoring, hyperspectral imaging, high-resolution surface reconstruction, and vision-language AI models for autonomous infrastructure evaluation.
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-flag-saffron rounded-2xl transform translate-x-3 translate-y-3"></div>
              <img 
                src="/Pranav_potrait.jpg" 
                alt="Pranav Profile" 
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-white shadow-2xl z-10"
              />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          ~40% WHITE AREA: MAIN CONTENT
      ========================================= */}
      <div className="max-w-5xl mx-auto px-6 space-y-24 mt-24 mb-24">
        
        <section id="research" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-2 bg-flag-saffron rounded-full"></div>
            <h3 className="text-3xl font-extrabold text-cricket-blue tracking-tight">Research Focus</h3>
          </div>
          <div className="text-slate-800 leading-relaxed space-y-4 text-lg">
            <p>
              My work lies at the intersection of robotics, artificial intelligence, and infrastructure nondestructive evaluation (NDE). I design tightly integrated hardware–software platforms where:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-flag-saffron font-bold text-cricket-blue">
              <li><span className="text-slate-800 font-normal">Robotic motion</span></li>
              <li><span className="text-slate-800 font-normal">Multimodal sensing (UPV, AE, laser, hyperspectral)</span></li>
              <li><span className="text-slate-800 font-normal">Controlled actuation and material interaction</span></li>
              <li><span className="text-slate-800 font-normal">Structured experimental design</span></li>
              <li><span className="text-slate-800 font-normal">AI-driven interpretation</span></li>
              <li><span className="text-slate-800 font-normal">3D reconstruction and digital twin modeling</span></li>
            </ul>
            <p className="pt-2 font-bold text-cricket-blue text-xl">
              ...operate within a unified and reproducible framework.
            </p>
            <p>
              The objective is to transition infrastructure inspection from manual, isolated testing toward scalable autonomous robotic evaluation systems supported by multimodal AI and digital twins.
            </p>
          </div>
        </section>

        <section id="systems" className="space-y-12">
          <div className="flex items-center gap-4 border-b-2 border-slate-200 pb-4">
            <div className="w-10 h-2 bg-holy-yellow rounded-full"></div>
            <h3 className="text-3xl font-extrabold text-cricket-blue tracking-tight">Multimodal Robotic NDE Platform</h3>
          </div>
          
          <div className="space-y-4 bg-slate-50 p-8 border-l-[8px] border-cricket-blue rounded-r-2xl shadow-sm">
            <h4 className="text-2xl font-bold text-cricket-blue">Robotic Infrastructure Monitoring System</h4>
            <p className="text-slate-800 leading-relaxed text-lg">
              I developed a robotic experimental platform integrating:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-6 text-slate-800 marker:text-cricket-blue font-medium pb-2">
              <li>UR3e industrial manipulator (RTDE control)</li>
              <li>Custom syringe-based injection and actuation</li>
              <li>Ultrasonic Pulse Velocity (UPV)</li>
              <li>Acoustic Emission (AE) monitoring</li>
              <li>Laser line profilometry</li>
              <li>Hyperspectral imaging</li>
              <li>Structured factorial experimental design</li>
              <li>Synchronized multimodal data acquisition</li>
            </ul>
            <p className="text-slate-800 leading-relaxed text-lg">
              The system enables controlled material interaction and synchronized sensing to study surface deformation, internal wave propagation, acoustic damage evolution, material state transitions, and injection-induced structural response.
            </p>
            <p className="text-sm font-bold text-flag-saffron pt-3 uppercase tracking-wide">
              Conducted in collaboration with Dr. Arvin Ebrahimkhanlou & Dr. Yaghoob Farnam.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-2xl font-bold text-cricket-blue">AI Integration & Vision-Language Models</h4>
            <h5 className="text-lg font-bold text-flag-saffron">Florence-Based Visual Language Model for UPV</h5>
            <p className="text-slate-800 leading-relaxed text-lg">
              I explore Visual Language Models (VLMs), including Florence-based architectures, for interpreting ultrasonic waveform representations. This approach enables:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-800 marker:text-holy-yellow font-medium">
              <li>AI-driven analysis of ultrasonic signal images</li>
              <li>Cross-modal reasoning between wave propagation and surface deformation</li>
              <li>Automated defect characterization</li>
              <li>Natural language–assisted interpretation of NDE data</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-2xl font-bold text-cricket-blue">3D Reconstruction & Digital Twins</h4>
            <h5 className="text-lg font-bold text-flag-saffron">Gaussian Splatting for Infrastructure Modeling</h5>
            <p className="text-slate-800 leading-relaxed text-lg">
              I investigate 3D reconstruction pipelines combining multi-view image acquisition, dense geometric modeling, and Gaussian Splatting for real-time scene representation into robotic digital twin frameworks. These representations synchronize actuation with multimodal sensing.
            </p>
          </div>
        </section>
      </div>

      {/* =========================================
          20% SAFFRON AREA: PHILOSOPHY & STACK
      ========================================= */}
      <section className="bg-flag-saffron border-t-[12px] border-cricket-blue py-24 px-6 shadow-inner">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-cricket-navy tracking-tight">Systems Engineering Philosophy</h3>
            <p className="text-cricket-navy/90 font-medium leading-relaxed text-lg">My work emphasizes:</p>
            <ul className="list-disc pl-6 space-y-3 text-cricket-navy font-bold text-lg marker:text-white">
              <li>Deterministic robotic control</li>
              <li>Sensor synchronization across modalities</li>
              <li>Structured factorial experiment design</li>
              <li>Raw data preservation and traceability</li>
              <li>AI-driven feature extraction</li>
              <li>Multimodal data fusion</li>
              <li>Reproducible digital twin modeling</li>
            </ul>
            <p className="text-cricket-navy font-extrabold text-xl pt-4">
              The long-term goal is to develop autonomous robotic AI systems capable of scalable infrastructure inspection.
            </p>
          </div>

          <div className="space-y-6 bg-white p-10 rounded-3xl shadow-2xl border-b-[8px] border-holy-yellow">
            <h3 className="text-3xl font-extrabold text-cricket-blue tracking-tight">Technical Stack</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-flag-saffron uppercase tracking-widest mb-1">Robotics</h4>
                <p className="text-slate-800 font-bold text-lg">ROS / ROS2, MoveIt, UR RTDE, Real-time trajectory</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-flag-saffron uppercase tracking-widest mb-1">Sensing</h4>
                <p className="text-slate-800 font-bold text-lg">Ultrasonic Pulse Velocity, Acoustic Emission, Laser profilometry</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-flag-saffron uppercase tracking-widest mb-1">AI & Data</h4>
                <p className="text-slate-800 font-bold text-lg">VLMs (Florence), Point clouds, RANSAC, 3D Gaussian Splatting</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-flag-saffron uppercase tracking-widest mb-1">Embedded</h4>
                <p className="text-slate-800 font-bold text-lg">Arduino motion control, Stepper driver sync</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          REMAINING WHITE AREA: EDU & PUBS
      ========================================= */}
      <div className="max-w-5xl mx-auto px-6 space-y-20 py-24 bg-white">
        <section id="education" className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-2 bg-cricket-blue rounded-full"></div>
            <h3 className="text-3xl font-extrabold text-cricket-blue tracking-tight">Education</h3>
          </div>
          <div className="space-y-10">
            <div className="border-l-[8px] border-flag-saffron pl-6">
              <h4 className="text-2xl font-bold text-slate-900">PhD — Robotics and AI for Infrastructure NDE</h4>
              <p className="text-cricket-blue font-extrabold text-xl pb-2">Drexel University</p>
              <p className="text-slate-700 text-lg">Research focus: Autonomous robotic experimentation, multimodal sensing integration, digital twin systems, and AI-driven infrastructure monitoring.</p>
            </div>
            <div className="border-l-[8px] border-holy-yellow pl-6">
              <h4 className="text-2xl font-bold text-slate-900">Master of Science — Robotics and Autonomous Systems</h4>
              <p className="text-cricket-blue font-extrabold text-xl pb-2">Arizona State University</p>
              <p className="text-slate-700 text-lg">Focus areas: Robotic manipulation, motion planning, perception systems, and autonomous control architectures.</p>
            </div>
            <div className="border-l-[8px] border-slate-300 pl-6">
              <h4 className="text-2xl font-bold text-slate-900">Bachelor of Technology — Mechanical Engineering</h4>
              <p className="text-cricket-blue font-extrabold text-xl pb-2">Veermata Jijabai Technological Institute (VJTI)</p>
              <p className="text-slate-700 text-lg">Foundation in mechanics, control systems, structural behavior, and manufacturing systems.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-3xl font-extrabold text-cricket-blue tracking-tight">Publications</h3>
          <div className="p-8 bg-slate-50 border-4 border-cricket-blue rounded-2xl shadow-sm">
            <p className="text-slate-800 leading-relaxed text-lg">
              Chougule, P., Farnam, Y., Ebrahimkhanlou, A. <br/>
              <span className="font-extrabold text-cricket-blue">“Laser-based monitoring of robotic carbon dioxide injection in fresh additively manufactured concrete.”</span><br/>
              <span className="text-flag-saffron font-bold mt-2 block">Accepted for presentation at SPIE Smart Structures + NDE, 17 March 2026. Proceedings forthcoming.</span>
            </p>
          </div>
        </section>
      </div>

    </div>
  );
}
EOF

echo "✅ All code injected! Running native npm install..."
npm install

echo "🎉 Done! Type 'npm run dev' to view the site."
EOF
