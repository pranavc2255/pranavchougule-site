#!/bin/bash

echo "🇮🇳 Converting to Multi-Page Architecture..."

cd pranav-research || { echo "Error: pranav-research folder not found!"; exit 1; }

# Create directories for the new pages
mkdir -p src/app/research src/app/systems src/app/background src/app/publications

echo "🧱 Updating Navbar with Multi-Page Routing..."
cat << 'EOF' > src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-40 w-full bg-white shadow-md border-b-4 border-flag-saffron">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-cricket-blue text-xl tracking-widest flex items-center gap-2 uppercase hover:text-flag-saffron transition-colors">
          <span className="w-3 h-3 rounded-full bg-holy-yellow"></span>
          Index
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-bold text-cricket-blue uppercase tracking-wide">
          <Link href="/research" className="hover:text-flag-saffron transition-colors">Research</Link>
          <Link href="/systems" className="hover:text-flag-saffron transition-colors">Systems</Link>
          <Link href="/background" className="hover:text-flag-saffron transition-colors">Background</Link>
          <Link href="/publications" className="hover:text-flag-saffron transition-colors">Publications</Link>
        </div>
      </div>
    </nav>
  );
}
EOF

echo "📄 Building Home Page (Hero + Philosophy)..."
cat << 'EOF' > src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-white overflow-x-hidden pt-16">
      
      {/* =========================================
          20% BLUE AREA: HERO SECTION WITH PHOTO
      ========================================= */}
      <section className="bg-cricket-blue py-24 px-6 border-b-[12px] border-holy-yellow shadow-xl">
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
            <div className="pt-6 flex gap-4">
              <Link href="/research" className="bg-holy-yellow text-cricket-navy font-bold px-6 py-3 rounded shadow hover:bg-white transition-colors">
                View Research
              </Link>
              <Link href="/systems" className="bg-cricket-navy text-white font-bold px-6 py-3 rounded shadow hover:bg-flag-saffron transition-colors">
                View Systems
              </Link>
            </div>
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
          20% SAFFRON AREA: PHILOSOPHY
      ========================================= */}
      <section className="bg-flag-saffron border-t-[12px] border-white py-24 px-6 shadow-inner">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 max-w-3xl">
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
        </div>
      </section>

    </div>
  );
}
EOF

echo "📄 Building Research Page..."
cat << 'EOF' > src/app/research/page.tsx
export default function Research() {
  return (
    <div className="w-full bg-white pt-16">
      <div className="bg-cricket-blue py-16 px-6 border-b-8 border-flag-saffron">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Research Focus</h1>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-slate-800 leading-relaxed space-y-6 text-lg max-w-4xl">
          <p>
            My work lies at the intersection of robotics, artificial intelligence, and infrastructure nondestructive evaluation (NDE). I design tightly integrated hardware–software platforms where:
          </p>
          <ul className="list-disc pl-6 space-y-4 marker:text-flag-saffron font-bold text-cricket-blue text-xl">
            <li><span className="text-slate-800 font-normal">Robotic motion</span></li>
            <li><span className="text-slate-800 font-normal">Multimodal sensing (UPV, AE, laser, hyperspectral)</span></li>
            <li><span className="text-slate-800 font-normal">Controlled actuation and material interaction</span></li>
            <li><span className="text-slate-800 font-normal">Structured experimental design</span></li>
            <li><span className="text-slate-800 font-normal">AI-driven interpretation</span></li>
            <li><span className="text-slate-800 font-normal">3D reconstruction and digital twin modeling</span></li>
          </ul>
          <p className="pt-4 font-extrabold text-cricket-blue text-2xl border-l-4 border-holy-yellow pl-4">
            ...operate within a unified and reproducible framework.
          </p>
          <p className="pt-4">
            The objective is to transition infrastructure inspection from manual, isolated testing toward scalable autonomous robotic evaluation systems supported by multimodal AI and digital twins.
          </p>
        </div>
      </div>
    </div>
  );
}
EOF

echo "📄 Building Systems Page..."
cat << 'EOF' > src/app/systems/page.tsx
export default function Systems() {
  return (
    <div className="w-full bg-white pt-16">
      <div className="bg-flag-saffron py-16 px-6 border-b-8 border-cricket-blue">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-cricket-navy tracking-tight">Multimodal Systems & AI Integration</h1>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-20">
        
        {/* NDE Platform */}
        <div className="space-y-6 bg-slate-50 p-10 border-l-[8px] border-cricket-blue rounded-r-2xl shadow-sm">
          <h2 className="text-3xl font-extrabold text-cricket-blue">Robotic Infrastructure Monitoring System</h2>
          <p className="text-slate-800 leading-relaxed text-lg">
            I developed a robotic experimental platform integrating:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-disc pl-6 text-slate-800 marker:text-cricket-blue font-medium pb-2">
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
          <p className="text-sm font-bold text-flag-saffron pt-4 uppercase tracking-wide">
            Conducted in collaboration with Dr. Arvin Ebrahimkhanlou & Dr. Yaghoob Farnam.
          </p>
        </div>

        {/* AI & 3D Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cricket-blue">AI Integration & VLMs</h2>
            <h3 className="text-lg font-bold text-flag-saffron">Florence-Based VLM for UPV</h3>
            <p className="text-slate-800 leading-relaxed text-lg">
              I explore Visual Language Models (VLMs) for interpreting ultrasonic waveform representations, enabling AI-driven analysis of signal images, cross-modal reasoning, and natural language–assisted interpretation of NDE data.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cricket-blue">3D Reconstruction</h2>
            <h3 className="text-lg font-bold text-flag-saffron">Gaussian Splatting for Digital Twins</h3>
            <p className="text-slate-800 leading-relaxed text-lg">
              I investigate 3D reconstruction pipelines combining multi-view image acquisition, dense geometric modeling, and Gaussian Splatting for real-time scene representation into robotic digital twin frameworks.
            </p>
          </div>
        </div>

        {/* Stack Block */}
        <div className="space-y-8 bg-cricket-blue p-10 rounded-3xl shadow-xl border-b-[8px] border-holy-yellow">
          <h3 className="text-3xl font-extrabold text-white tracking-tight">Technical Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-holy-yellow uppercase tracking-widest mb-2">Robotics</h4>
              <p className="text-white font-medium text-lg">ROS / ROS2, MoveIt, UR RTDE, Real-time trajectory</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-holy-yellow uppercase tracking-widest mb-2">Sensing</h4>
              <p className="text-white font-medium text-lg">Ultrasonic Pulse Velocity, Acoustic Emission, Laser profilometry</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-holy-yellow uppercase tracking-widest mb-2">AI & Data</h4>
              <p className="text-white font-medium text-lg">VLMs (Florence), Point clouds, RANSAC, 3D Gaussian Splatting</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-holy-yellow uppercase tracking-widest mb-2">Embedded</h4>
              <p className="text-white font-medium text-lg">Arduino motion control, Stepper driver sync</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
EOF

echo "📄 Building Background Page..."
cat << 'EOF' > src/app/background/page.tsx
export default function Background() {
  return (
    <div className="w-full bg-white pt-16 min-h-screen">
      <div className="bg-cricket-blue py-16 px-6 border-b-8 border-holy-yellow">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Education & Background</h1>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="space-y-16">
          <div className="border-l-[8px] border-flag-saffron pl-6">
            <h2 className="text-3xl font-bold text-slate-900">PhD — Robotics and AI for Infrastructure NDE</h2>
            <p className="text-cricket-blue font-extrabold text-2xl py-2">Drexel University</p>
            <p className="text-slate-700 text-lg max-w-3xl">Research focus: Autonomous robotic experimentation, multimodal sensing integration, digital twin systems, and AI-driven infrastructure monitoring.</p>
          </div>
          <div className="border-l-[8px] border-holy-yellow pl-6">
            <h2 className="text-3xl font-bold text-slate-900">Master of Science — Robotics and Autonomous Systems</h2>
            <p className="text-cricket-blue font-extrabold text-2xl py-2">Arizona State University</p>
            <p className="text-slate-700 text-lg max-w-3xl">Focus areas: Robotic manipulation, motion planning, perception systems, and autonomous control architectures.</p>
          </div>
          <div className="border-l-[8px] border-slate-300 pl-6">
            <h2 className="text-3xl font-bold text-slate-900">Bachelor of Technology — Mechanical Engineering</h2>
            <p className="text-cricket-blue font-extrabold text-2xl py-2">Veermata Jijabai Technological Institute (VJTI)</p>
            <p className="text-slate-700 text-lg max-w-3xl">Foundation in mechanics, control systems, structural behavior, and manufacturing systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF

echo "📄 Building Publications Page..."
cat << 'EOF' > src/app/publications/page.tsx
export default function Publications() {
  return (
    <div className="w-full bg-white pt-16 min-h-screen">
      <div className="bg-flag-saffron py-16 px-6 border-b-8 border-cricket-blue">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-cricket-navy tracking-tight">Publications</h1>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="p-8 bg-slate-50 border-4 border-cricket-blue rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <p className="text-slate-800 leading-relaxed text-xl">
            Chougule, P., Farnam, Y., Ebrahimkhanlou, A. <br/><br/>
            <span className="font-extrabold text-cricket-blue text-2xl">“Laser-based monitoring of robotic carbon dioxide injection in fresh additively manufactured concrete.”</span><br/><br/>
            <span className="text-flag-saffron font-bold bg-cricket-navy/5 inline-block px-4 py-2 rounded">
              Accepted for presentation at SPIE Smart Structures + NDE, 17 March 2026. Proceedings forthcoming.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
EOF

echo "✅ Multi-page routing applied successfully!"
