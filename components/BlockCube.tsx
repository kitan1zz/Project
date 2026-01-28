'use client'

import { motion } from 'framer-motion'
import { Hash } from 'lucide-react'

interface BlockCubeProps {
  blockId: number
  hash: string
  transactionCount: number
  isHighlighted: boolean
  onClick: () => void
  onHover: () => void
}

export function BlockCube({
  blockId,
  hash,
  transactionCount,
  isHighlighted,
  onClick,
  onHover
}: BlockCubeProps) {
  return (
    <motion.div
      className={`
        relative w-20 h-20 md:w-24 md:h-24 
        bg-gradient-to-br from-blue-500 to-purple-600 
        rounded-lg shadow-lg cursor-pointer
        flex flex-col items-center justify-center
        ${isHighlighted ? 'ring-4 ring-yellow-400 ring-offset-2 dark:ring-offset-gray-900' : ''}
      `}
      onClick={onClick}
      onHoverStart={onHover}
      whileHover={{ 
        scale: 1.15, 
        y: -8,
        rotateY: 15,
        rotateX: -5,
        z: 50
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* 3D Cube Effect - Top Face */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg opacity-60" 
        style={{ 
          transform: 'translateZ(10px)',
          transformStyle: 'preserve-3d'
        }} 
      />
      
      {/* Main Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center text-white p-2 z-10">
        <div className="flex items-center gap-1 mb-1">
          <Hash className="w-3 h-3" />
          <span className="text-xs font-bold">#{blockId}</span>
        </div>
        <span className="text-[10px] font-mono mb-1 truncate w-full text-center px-1">
          {hash.slice(0, 6)}...
        </span>
        <span className="text-[9px] opacity-90">{transactionCount} транз.</span>
      </div>

      {/* Glow effect when highlighted */}
      {isHighlighted && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-yellow-400 opacity-30 blur-xl -z-10"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Hover tooltip */}
      <motion.div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg shadow-lg whitespace-nowrap opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        Блок №{blockId}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
      </motion.div>
    </motion.div>
  )
}

