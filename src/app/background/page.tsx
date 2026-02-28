import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Background — Pranav Chougule',
  description: 'Education and academic background of Pranav Chougule.'
}

const education = [
  {
    degree: 'PhD — Robotics & AI for Infrastructure NDE',
    institution: 'Drexel University',
    location: 'Philadelphia, Pennsylvania, USA',
    period: 'Current',
    detail: 'Doctoral research focused on autonomous robotic systems for nondestructive evaluation of civil infrastructure, integrating multimodal sensing with deep learning and vision-language models.',
    highlight: true
  },
  {
    degree: 'MS — Robotics and Autonomous Systems',
    institution: 'Arizona State University',
    location: 'Tempe, Arizona, USA',
    period: 'Completed',
    detail: 'Graduate studies in robotic perception, planning, machine learning, and autonomous system design.',
    highlight: false
  },
  {
    degree: 'B.Tech — Mechanical Engineering',
    institution: 'VJTI — Veermata Jijabai Technological Institute',
    location: 'Mumbai, India',
    period: 'Completed',
    detail: 'Undergraduate foundation in engineering mechanics, manufacturing, thermodynamics, and systems design.',
    highlight: false
  },
]

const skills = [
  { cat: 'Robotics & Sensing', items: ['ROS / ROS 2', 'Ultrasonic (UPV)', 'Acoustic Emission', 'Hyperspectral Cameras', 'Laser Triangulation', 'LiDAR', 'IMU Fusion'] },
  { cat: 'AI & Machine Learning', items: ['Vision-Language Models (Florence)', 'Deep Learning (PyTorch)', 'Signal Processing', 'Gaussian Splatting', 'Anomaly Detection', '3D Reconstruction'] },
  { cat: 'Software & Tools', items: ['Python', 'C++', 'MATLAB', 'Open3D', 'OpenCV', 'SLAM frameworks', 'Linux'] },
  { cat: 'Domain Expertise', items: ['Nondestructive Evaluation (NDE)', 'Structural Health Monitoring', 'Civil Infrastructure Assessment', 'Additively Manufactured Concrete'] },
]

export default function BackgroundPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <span className="tag mb-4 inline-block">Background</span>
        <h1 className="font-serif text-5xl text-ink mb-4">Education & Skills</h1>
        <hr className="accent-rule w-20 mb-6" />
        <p className="font-sans text-base text-stone max-w-2xl leading-relaxed">
          A trajectory from mechanical foundations in Mumbai to autonomous robotic systems
          at Drexel University — each step building toward the convergence of
          physical sensing and machine intelligence.
        </p>
      </div>

      {/* Education timeline */}
      <div className="mb-20">
        <h2 className="font-serif text-3xl text-navy mb-8">Education</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block" />
          <div className="space-y-8">
            {education.map((e, i) => (
              <div key={i} className="md:pl-14 relative">
                <div className={`absolute left-2 top-3 w-4 h-4 rounded-full border-2 hidden md:block ${
                  e.highlight ? 'bg-saffron border-saffron' : 'bg-white border-navy'
                }`} />
                <div className={`research-card border p-7 ${e.highlight ? 'border-saffron/40 bg-[#fffdf7]' : 'border-gray-100 bg-white'}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`tag ${e.highlight ? 'tag-saffron' : ''}`}>{e.period}</span>
                    <span className="font-mono text-xs text-stone">{e.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-navy mb-1">{e.degree}</h3>
                  <p className="font-sans text-base text-saffron-dark font-medium mb-3">{e.institution}</p>
                  <p className="font-sans text-sm text-stone leading-relaxed">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills grid */}
      <div>
        <h2 className="font-serif text-3xl text-navy mb-8">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="research-card bg-white border border-gray-100 p-6">
              <h3 className="font-serif text-lg font-semibold text-navy mb-4 pb-3 border-b border-gray-100">
                {s.cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
