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
  title: 'Pranav Chougule — Robotics & AI for Infrastructure NDE',
  description: 'PhD researcher working at the intersection of robotics, AI, and infrastructure nondestructive evaluation.',
  keywords: ['robotics', 'NDE', 'AI', 'ultrasonic', 'acoustic emission', 'hyperspectral', 'gaussian splatting'],
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
