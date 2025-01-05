import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VK Portfolio',
  description: 'Personal portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <div className="min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}