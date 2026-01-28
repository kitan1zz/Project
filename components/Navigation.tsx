'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'
import { Moon, Sun, Home } from 'lucide-react'
import { motion } from 'framer-motion'

export function Navigation() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/blockchain', label: 'Блокчейн' },
    { href: '/cryptocurrency', label: 'Криптовалюта' },
    { href: '/nft', label: 'NFT' },
    { href: '/ton', label: 'TON' },
    { href: '/politics', label: 'Крипта в политике' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              Криптообразование
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Переключить тему"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

