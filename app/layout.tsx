import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import SocialSidebar from './components/SocialSidebar'
import { ThemeProvider } from './contexts/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Philip Laussermair',
  description: 'Personal website and portfolio of Philip Laussermair',
  icons: {
    icon: '/icon?size=32x32',
    shortcut: '/icon?size=32x32',
    apple: '/icon?size=180x180',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white dark:bg-black text-gray-800 dark:text-[#8892b0] font-inter">
        <ThemeProvider>
          <Header />
          <div className="relative xl:ml-[100px]"> {/* Added xl:ml-[100px] */}
            <SocialSidebar />
            <main className="container mx-auto px-4 py-8 min-h-screen">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

