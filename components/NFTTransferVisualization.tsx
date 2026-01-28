'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { UserAvatar } from './UserAvatar'
import { NFTBlock } from './NFTBlock'

interface NFT {
  id: number
  tokenId: string
  imageUrl?: string
}

const mockNFTs: NFT[] = [
  { id: 1, tokenId: '#1234' },
  { id: 2, tokenId: '#5678' },
  { id: 3, tokenId: '#9012' },
  { id: 4, tokenId: '#3456' },
  { id: 5, tokenId: '#7890' },
]

export function NFTTransferVisualization() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [transferComplete, setTransferComplete] = useState(false)
  const [leftCount, setLeftCount] = useState(5)
  const [rightCount, setRightCount] = useState(2)
  const [currentNFT, setCurrentNFT] = useState<NFT | null>(null)

  // Animation path values
  const progress = useMotionValue(0)
  const springProgress = useSpring(progress, { 
    stiffness: 100, 
    damping: 30 
  })

  // Calculate arc path positions
  // Using percentage-based values that work responsively
  // These will be calculated relative to container
  const startX = 80  // Left avatar area
  const startY = 200
  const endX = 520   // Right avatar area (adjusted for mobile)
  const endY = 200
  const arcHeight = 120

  const nftX = useTransform(springProgress, [0, 1], [startX, endX])
  const nftY = useTransform(springProgress, (value: number) => {
    // Quadratic curve calculation for arc
    const t = value
    const y = startY - (4 * arcHeight * t * (1 - t))
    return y
  })

  const handleTransfer = () => {
    if (isAnimating) return

    // Select random NFT from left collection
    const availableNFTs = mockNFTs.slice(0, leftCount)
    const selectedNFT = availableNFTs[Math.floor(Math.random() * availableNFTs.length)]
    
    setCurrentNFT(selectedNFT)
    setIsAnimating(true)
    setTransferComplete(false)
    
    // Reset and animate progress
    progress.set(0)
    progress.set(1)

    // Update counts after animation completes
    setTimeout(() => {
      setLeftCount(prev => Math.max(0, prev - 1))
      setRightCount(prev => prev + 1)
      setTransferComplete(true)
      
      setTimeout(() => {
        setIsAnimating(false)
        setTransferComplete(false)
        setCurrentNFT(null)
        progress.set(0)
      }, 1000)
    }, 1500)
  }

  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Left Avatar */}
      <div className="absolute left-2 md:left-16 top-1/2 -translate-y-1/2 z-10">
        <UserAvatar
          position="left"
          collectionCount={leftCount}
          isActive={isAnimating && !transferComplete}
        />
      </div>

      {/* NFT Block (animated) */}
      {isAnimating && currentNFT && (
        <motion.div
          style={{
            x: nftX,
            y: nftY,
            position: 'absolute',
            zIndex: 20
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1, 1.1, 1],
            opacity: [0, 1, 1, 1, 1]
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            scale: { 
              duration: 0.5, 
              times: [0, 0.3, 0.7, 0.9, 1] 
            },
            opacity: { duration: 0.3 }
          }}
        >
          <NFTBlock
            tokenId={currentNFT.tokenId}
            imageUrl={currentNFT.imageUrl}
            isAnimating={isAnimating}
          />
        </motion.div>
      )}

      {/* Send Button */}
      <motion.button
        onClick={handleTransfer}
        disabled={isAnimating || leftCount === 0}
        className={`
          absolute z-30 px-8 py-4 
          bg-gradient-to-r from-purple-600 to-blue-600 
          text-white rounded-full font-semibold shadow-lg 
          hover:shadow-xl transition-all
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center gap-2
        `}
        whileHover={!isAnimating && leftCount > 0 ? { scale: 1.05 } : {}}
        whileTap={!isAnimating && leftCount > 0 ? { scale: 0.95 } : {}}
      >
        {isAnimating ? (
          <>
            <motion.div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Sending...
          </>
        ) : leftCount === 0 ? (
          'No NFTs to Send'
        ) : (
          'Send NFT'
        )}
      </motion.button>

      {/* Right Avatar */}
      <div className="absolute right-2 md:right-16 top-1/2 -translate-y-1/2 z-10">
        <UserAvatar
          position="right"
          collectionCount={rightCount}
          isActive={transferComplete}
        />
      </div>

      {/* Success Message */}
      {transferComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg"
        >
          ✓ Transfer Complete!
        </motion.div>
      )}
    </div>
  )
}

