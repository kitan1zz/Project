'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface ClickableTermProps {
  term: string
  articlePath: string
  tooltip?: string
  highlightId?: string // ID для подсветки на целевой странице
}

export function ClickableTerm({ term, articlePath, tooltip, highlightId }: ClickableTermProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const href = highlightId ? `${articlePath}#${highlightId}` : articlePath

  return (
    <span className="relative inline-block">
      <Link
        href={href}
        className="relative inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <motion.span
          className="relative text-blue-600 dark:text-blue-400 font-semibold cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">
            {term}
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </span>
          {/* Background highlight on hover */}
          <motion.span
            className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded px-1 -mx-1 -z-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.span>
      </Link>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg shadow-lg whitespace-nowrap z-50 pointer-events-none"
          >
            {tooltip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

