import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { bounded } from './fonts'

const inter = Inter({ 
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Криптообразование — блокчейн, криптовалюта, NFT и TON',
  description: 'Образовательный сайт: блокчейн, криптовалюта, NFT и TON простым языком для начинающих',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${bounded.variable} font-sans font-bounded`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

