'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface SectionCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  color?: string
  delay?: number
}

export function SectionCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  color = 'bg-blue-500',
  delay = 0 
}: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Link href={href}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
          <div className={`${color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            {description}
          </p>
          <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mt-auto">
            Узнать больше
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

