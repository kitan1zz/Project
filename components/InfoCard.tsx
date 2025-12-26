'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface InfoCardProps {
  title: string
  description: string
  icon: LucideIcon
  variant?: 'info' | 'warning' | 'success'
  delay?: number
}

export function InfoCard({ 
  title, 
  description, 
  icon: Icon, 
  variant = 'info',
  delay = 0 
}: InfoCardProps) {
  const variantStyles = {
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      icon: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-100 dark:bg-blue-900/40',
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      icon: 'text-yellow-600 dark:text-yellow-400',
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/40',
    },
    success: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      icon: 'text-green-600 dark:text-green-400',
      iconBg: 'bg-green-100 dark:bg-green-900/40',
    },
  }

  const styles = variantStyles[variant]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`${styles.bg} ${styles.border} border rounded-2xl p-6`}
    >
      <div className="flex items-start space-x-4">
        <div className={`${styles.iconBg} ${styles.icon} p-3 rounded-xl`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

