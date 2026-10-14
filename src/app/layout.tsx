import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Pranav Chougule | Robot Learning, Physical AI & Robotics',
  description: 'Ph.D. researcher at Drexel University working on robot learning, Physical AI, computer vision, and robotic manipulation, with nondestructive evaluation as a primary research application.',
  keywords: ['robot learning', 'Physical AI', 'computer vision', 'robotics', 'reinforcement learning', 'imitation learning', 'robotic manipulation', 'NDE'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
