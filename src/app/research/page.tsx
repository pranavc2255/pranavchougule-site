import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research — Pranav Chougule',
  description: 'Research in multimodal robotic sensing, NDE, and AI for infrastructure evaluation.'
}

const projects = [
  {
    id: '01',
    title: 'Multimodal Robotic Sensing for Autonomous Infrastructure Evaluation',
    tags: ['Robotics', 'Sensing', 'Autonomy'],
    description:
      'Design and deployment of mobile robotic platforms equipped with heterogeneous sensor suites for end-to-end autonomous nondestructive evaluation of civil infrastructure. The system orchestrates sensor scheduling, pose estimation, and data fusion without human intervention.',
    methods: ['ROS 2', 'Sensor fusion', 'Path planning', 'SLAM'],
  },
  {
    id: '02',
    title: 'Ultrasonic Pulse Velocity (UPV) Testing & ML Interpretation',
    tags: ['Ultrasound', 'Signal Processing', 'Machine Learning'],
    description:
      'Development of data-driven pipelines for interpreting UPV waveforms acquired by robotic end-effectors. Integration of Florence-based Vision-Language Models to reason over signal morphology and generate structured NDE reports.',
    methods: ['UPV hardware', 'VLM prompting', 'Feature extraction', 'Anomaly detection'],
  },
  {
    id: '03',
    title: 'Acoustic Emission Monitoring',
    tags: ['AE', 'Structural Health Monitoring'],
    description:
      'Real-time detection and source localisation of acoustic emission events during active loading scenarios. The goal is to map damage evolution in structural elements using piezoelectric sensor arrays coupled with Bayesian source-location algorithms.',
    methods: ['Piezo arrays', 'Wavelet analysis', 'Source localisation', 'Bayesian inference'],
  },
  {
    id: '04',
    title: 'Hyperspectral Imaging for Material Characterisation',
    tags: ['Hyperspectral', 'Computer Vision'],
    description:
      'Application of push-broom hyperspectral cameras mounted on robotic platforms for surface composition analysis. Spectral signatures enable non-contact detection of carbonation, moisture, and chemical deterioration in concrete and masonry.',
    methods: ['Push-broom imaging', 'Spectral unmixing', 'PCA/ICA', 'Classification'],
  },
  {
    id: '05',
    title: 'Gaussian Splatting for 3D NDE Reconstruction',
    tags: ['3D Vision', 'Gaussian Splatting', 'Reconstruction'],
    description:
      'Use of 3D Gaussian Splatting to produce photorealistic, spatially-indexed reconstructions of inspected surfaces. These serve as persistent scene representations for registering multi-modal sensor data across inspection visits.',
    methods: ['3DGS', 'NeRF comparison', 'Point cloud alignment', 'Texture mapping'],
  },
  {
    id: '06',
    title: 'Laser-Based Surface Monitoring of Additively Manufactured Concrete',
    tags: ['Laser', 'AM Concrete', 'SPIE 2026'],
    description:
      'Laser displacement sensing for high-resolution monitoring of robotic CO₂ injection in fresh additively manufactured concrete. Accepted for presentation at SPIE Smart Structures + NDE, March 2026.',
    methods: ['Laser triangulation', 'CO₂ injection', 'AM Concrete', 'Displacement mapping'],
    featured: true,
  },
]

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <span className="tag mb-4 inline-block">Research</span>
        <h1 className="font-serif text-5xl text-ink mb-4">Active Research</h1>
        <hr className="accent-rule w-20 mb-6" />
        <p className="font-sans text-base text-stone max-w-2xl leading-relaxed">
          My research develops the sensing, reasoning, and autonomy layers that enable
          robots to conduct rigorous nondestructive evaluation of civil infrastructure
          with minimal human supervision.
        </p>
      </div>

      {/* Project cards */}
      <div className="space-y-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`research-card border p-8 ${p.featured ? 'border-saffron bg-[#fffdf7]' : 'border-gray-100 bg-white'}`}
          >
            <div className="flex flex-wrap items-start gap-4 mb-4">
              <span className="font-mono text-xs text-gray-300 mt-1 shrink-0">{p.id}</span>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map(t => (
                    <span key={t} className={`tag ${p.featured ? 'tag-saffron' : ''}`}>{t}</span>
                  ))}
                  {p.featured && (
                    <span className="tag tag-saffron font-semibold">★ Featured / Presented</span>
                  )}
                </div>
                <h2 className="font-serif text-2xl text-navy mb-3 leading-snug">{p.title}</h2>
                <p className="font-sans text-base text-stone leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.methods.map(m => (
                    <span key={m} className="font-mono text-xs text-stone bg-gray-50 border border-gray-100 px-3 py-1 rounded-sm">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
