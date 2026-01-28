'use client'

import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'

interface NFTBlockProps {
  imageUrl?: string
  tokenId: string
  isAnimating: boolean
  position?: { x: number; y: number }
}

export function NFTBlock({ 
  imageUrl, 
  tokenId, 
  isAnimating,
  position 
}: NFTBlockProps) {
  return (
    <motion.div
      className="relative"
      style={position ? {
        position: 'absolute',
        left: position.x,
        top: position.y,
        zIndex: 10
      } : {}}
      animate={isAnimating ? {
        rotate: [0, 15, -15, 0],
        scale: [1, 1.1, 1]
      } : {}}
      transition={{
        rotate: {
          duration: 1.5,
          repeat: isAnimating ? Infinity : 0,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.5,
          repeat: isAnimating ? Infinity : 0,
          repeatDelay: 0.5
        }
      }}
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-2xl border-2 border-white dark:border-gray-800 overflow-hidden">
        {/* NFT Image or Placeholder */}
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={imageUrl} 
            alt={`NFT ${tokenId}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400">
            <ImageIcon className="w-8 h-8 text-white opacity-80" />
          </div>
        )}

        {/* Token ID Badge */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white text-xs font-mono px-2 py-1 text-center">
          {tokenId}
        </div>

        {/* Glow effect during animation */}
        {isAnimating && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-purple-400 opacity-50 blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          />
        )}
      </div>
    </motion.div>
  )
}

