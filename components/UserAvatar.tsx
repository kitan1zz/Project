'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'

interface UserAvatarProps {
  position: 'left' | 'right'
  collectionCount: number
  isActive?: boolean
  onClick?: () => void
}

export function UserAvatar({ 
  position, 
  collectionCount, 
  isActive = false,
  onClick 
}: UserAvatarProps) {
  const gradientColors = position === 'left' 
    ? 'from-blue-500 to-cyan-500' 
    : 'from-purple-500 to-pink-500'

  return (
    <motion.div
      className={`
        relative flex flex-col items-center
        ${position === 'left' ? 'md:mr-auto' : 'md:ml-auto'}
      `}
      animate={isActive ? {
        scale: [1, 1.1, 1],
      } : {}}
      transition={{
        duration: 0.5,
        repeat: isActive ? Infinity : 0,
        repeatDelay: 0.3
      }}
      onClick={onClick}
    >
      {/* Avatar Circle */}
      <motion.div
        className={`
          relative w-24 h-24 md:w-32 md:h-32 rounded-full
          bg-gradient-to-br ${gradientColors}
          shadow-lg flex items-center justify-center
          border-4 border-white dark:border-gray-800
          ${onClick ? 'cursor-pointer' : ''}
        `}
        whileHover={onClick ? { scale: 1.05 } : {}}
        whileTap={onClick ? { scale: 0.95 } : {}}
      >
        <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
        
        {/* Pulse effect when active */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full bg-white opacity-30"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.3, 0, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          />
        )}
      </motion.div>

      {/* Collection Count Badge */}
      <motion.div
        className="mt-4 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border-2 border-gray-200 dark:border-gray-700"
        animate={isActive ? {
          y: [0, -5, 0]
        } : {}}
        transition={{
          duration: 0.5,
          repeat: isActive ? Infinity : 0
        }}
      >
        <div className="text-center">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            Collection
          </div>
          <motion.div
            className="text-2xl font-bold text-gray-900 dark:text-white"
            key={collectionCount}
            initial={{ scale: 1.5, color: '#3b82f6' }}
            animate={{ scale: 1, color: 'inherit' }}
            transition={{ duration: 0.3 }}
          >
            {collectionCount}
          </motion.div>
        </div>
      </motion.div>

      {/* Label */}
      <div className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
        {position === 'left' ? 'Sender' : 'Receiver'}
      </div>
    </motion.div>
  )
}

