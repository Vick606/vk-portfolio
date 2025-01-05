import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'
import { ThemeProvider } from '@/context/ThemeContext'
import ScrollToTop from '@/components/ui/ScrollToTop'
import ScrollProgress from '@/components/ui/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Victor Koech | Data Analyst & Full Stack Developer',
  description: 'Dynamic and versatile Data Analyst specializing in Python, data visualization, and full stack development. Creating impactful solutions through data-driven insights and web applications.',
  keywords: 'Data Analyst, Full Stack Developer, Python, Data Visualization, React, Next.js, TypeScript, Web Development',
  openGraph: {
    title: 'Victor Koech | Data Analyst & Full Stack Developer',
    description: 'Dynamic and versatile Data Analyst with expertise in Python programming and full stack development.',
    url: 'https://victorkoech.com',
    siteName: 'Victor Koech Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Victor Koech - Data Analyst & Full Stack Developer'
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Koech | Data Analyst & Full Stack Developer',
    description: 'Dynamic and versatile Data Analyst with expertise in Python programming and full stack development.',
    creator: '@victorkoech',
  }
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
      <ThemeProvider>
        <body className={`${inter.className} bg-white dark:bg-gray-900`}>
          <ScrollProgress />
          <div className="min-h-screen">
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}