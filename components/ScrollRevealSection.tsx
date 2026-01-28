'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealSectionProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
  staggerChildren?: boolean
}

export function ScrollRevealSection({ 
  children, 
  direction = 'up',
  delay = 0,
  className = '',
  staggerChildren = false
}: ScrollRevealSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const directionMap = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  }

  const initial = directionMap[direction]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { 
          opacity: 0, 
          ...initial,
          scale: 0.95
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay,
            ease: "easeOut",
            staggerChildren: staggerChildren ? 0.1 : 0
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

