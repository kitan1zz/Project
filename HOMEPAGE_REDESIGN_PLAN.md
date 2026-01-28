# Homepage Redesign Implementation Plan

## Overview

The homepage redesign transforms the educational blockchain/NFT site from a card-based template into an immersive, story-driven experience. The page centers around an interactive NFT transfer visualization that demonstrates ownership transfer through a curved arc animation between two user avatars. This core interaction is supported by a horizontal blockchain infographic with clickable cubes, embedded mining visualizations, and scroll-revealed educational content. The design prioritizes visual learning over text-heavy explanations, using animations and interactive elements to make complex concepts intuitive for beginners. Clickable terms throughout the content link to deeper articles, creating a non-linear learning path that adapts to user curiosity.

---

## UX Flow

### First-Time Visitor Journey

1. **Initial Viewport (Above Fold)**
   - User sees hero section with site title and brief purpose statement
   - Two stylized user avatars positioned on left and right sides
   - Central "Send NFT" button with subtle pulse animation
   - Horizontal blockchain chain visible below (partially visible, hinting at scroll)
   - Minimal navigation, clean focus on interaction

2. **Primary Interaction (Hero Section)**
   - User clicks "Send NFT" button
   - Button state changes (loading/active)
   - NFT block appears near left avatar with scale-in animation
   - Block animates along curved arc path to right avatar
   - During animation: block shows visual properties (image thumbnail, token ID)
   - On arrival: right avatar receives block with bounce effect
   - Left avatar's collection count decreases, right increases
   - Success state: brief glow effect, button resets for repeat interaction
   - Optional: subtle sound effect or haptic feedback placeholder

3. **Scroll Discovery (Below Fold)**
   - As user scrolls, blockchain chain becomes fully visible
   - Individual blocks highlight on hover, show tooltip with block info
   - Clicking a block reveals detailed popover (hash, transactions, timestamp)
   - Mining section appears with animated visualization
   - Educational content sections fade in sequentially
   - Clickable terms highlighted with underline or subtle background
   - Hover over terms shows preview tooltip with article link

4. **Content Exploration**
   - User clicks highlighted term (e.g., "blockchain")
   - Smooth transition to article page or modal overlay
   - Breadcrumb navigation allows return to homepage
   - Context preserved: user can continue from where they left off

5. **Repeat Engagement**
   - NFT transfer can be triggered multiple times
   - Each animation slightly varies (different NFT images, arc curves)
   - Blockchain chain updates with new blocks on subsequent visits (mock data)

---

## Page Layout

### Visual Hierarchy

```
┌─────────────────────────────────────────────────┐
│  Navigation Bar (minimal, transparent)          │
├─────────────────────────────────────────────────┤
│                                                 │
│  HERO SECTION (Full Viewport Height)            │
│  ┌──────────┐         ┌──────────┐              │
│  │ Avatar 1 │         │ Avatar 2 │              │
│  │          │    [Send NFT]      │              │
│  │          │    (curved arc)    │              │
│  └──────────┘         └──────────┘              │
│                                                 │
│  Introduction Text (2-3 sentences, centered)    │
│                                                 │
│  ────────────────────────────────────────────   │
│  [Blockchain Chain Preview - 3-4 blocks]        │
│  (Scroll hint indicator)                        │
│  ────────────────────────────────────────────   │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  BLOCKCHAIN INFOGRAPHIC SECTION                 │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐             │
│  │ ██ │→│ ██ │→│ ██ │→│ ██ │→│ ██ │             │
│  └────┘ └────┘ └────┘ └────┘ └────┘             │
│  (Horizontal scrollable chain, interactive)     │
│                                                 │
│  Mining Visual Embedded Here                    │
│  [Animated mining process]                      │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  EDUCATIONAL CONTENT SECTIONS                   │
│  (Scroll-revealed, staggered animations)        │
│                                                 │
│  Section 1: What is Blockchain?                 │
│  [Text with clickable terms]                    │
│                                                 │
│  Section 2: How Transactions Work               │
│  [Text with clickable terms]                    │
│                                                 │
│  Section 3: Understanding NFTs                  │
│  [Text with clickable terms]                    │
│                                                 │
│  Section 4: Mining Explained                    │
│  [Text with clickable terms]                    │
│                                                 │
├─────────────────────────────────────────────────┤
│  Footer (minimal)                               │
└─────────────────────────────────────────────────┘
```

### Section Breakdown

1. **Hero Section** (`100vh` minimum)
   - Full viewport height
   - Centered content with avatars and button
   - Introduction text below interaction
   - Partial blockchain chain preview (teaser)

2. **Blockchain Infographic Section**
   - Horizontal scrolling container (optional)
   - 8-12 blockchain cubes in a row
   - Each cube clickable and hoverable
   - Mining visualization embedded within or adjacent

3. **Educational Content Sections**
   - 4-5 content blocks
   - Each section ~600-800px height
   - Staggered scroll reveals
   - Generous spacing between sections

4. **Spacing & Flow**
   - Generous whitespace (80-120px between major sections)
   - Smooth scroll behavior
   - No abrupt transitions

---

## Components

### 1. `NFTTransferVisualization.tsx`
**Purpose**: Core interactive NFT transfer animation between two avatars

**Props**:
- `onTransferComplete?: () => void`
- `nftImage?: string` (optional mock image URL)
- `tokenId?: string`

**Features**:
- Two avatar components (left sender, right receiver)
- Central "Send NFT" button
- Animated NFT block that follows curved path
- Avatar state updates (collection counts)
- Repeatable interaction

**State Management**:
- `isAnimating: boolean`
- `transferComplete: boolean`
- `nftPosition: { x, y }` (for animation path)

---

### 2. `UserAvatar.tsx`
**Purpose**: Stylized user avatar with collection count

**Props**:
- `position: 'left' | 'right'`
- `collectionCount: number`
- `isActive?: boolean` (highlight during transfer)
- `onClick?: () => void`

**Visual Design**:
- Circular or hexagonal avatar shape
- Gradient background or pattern
- Collection count badge
- Pulse animation when receiving NFT

---

### 3. `NFTBlock.tsx`
**Purpose**: Animated NFT block that travels along arc

**Props**:
- `imageUrl?: string`
- `tokenId: string`
- `isAnimating: boolean`
- `position: { x: number, y: number }`

**Features**:
- Small thumbnail image
- Token ID display
- Glow effect during animation
- Scale and rotation animations

---

### 4. `BlockchainChain.tsx`
**Purpose**: Horizontal chain of interactive blockchain cubes

**Props**:
- `blocks: Block[]` (mock data)
- `onBlockClick?: (blockId: number) => void`
- `highlightedBlockId?: number`

**Features**:
- Horizontal layout with connecting lines/arrows
- Hover effects on individual blocks
- Click to reveal block details
- Smooth scrolling (if many blocks)
- Responsive: wraps on mobile, horizontal scroll on desktop

---

### 5. `BlockCube.tsx`
**Purpose**: Individual blockchain cube in the chain

**Props**:
- `blockId: number`
- `hash: string` (truncated)
- `transactionCount: number`
- `isHighlighted: boolean`
- `onClick: () => void`
- `onHover: () => void`

**Visual Design**:
- 3D cube appearance (CSS transforms)
- Color coding by block age or type
- Hover: scale up, show tooltip
- Click: expand to show details

---

### 6. `MiningVisualization.tsx`
**Purpose**: Embedded mining process explanation

**Props**:
- `isActive?: boolean` (auto-play or manual trigger)

**Features**:
- Animated miners/computers solving puzzles
- Hash calculation visualization (numbers scrolling)
- Block creation animation
- Progress indicators
- Simple explanation text overlay

---

### 7. `ClickableTerm.tsx`
**Purpose**: Inline text term that links to articles

**Props**:
- `term: string`
- `articlePath: string`
- `tooltip?: string`

**Features**:
- Underline or subtle background highlight
- Hover: show preview tooltip
- Click: navigate to article
- Smooth transition on hover

---

### 8. `ScrollRevealSection.tsx`
**Purpose**: Wrapper for content sections that reveal on scroll

**Props**:
- `children: React.ReactNode`
- `direction?: 'up' | 'down' | 'left' | 'right'`
- `delay?: number`

**Features**:
- Intersection Observer integration
- Framer Motion animations
- Staggered children animations

---

### 9. `BlockDetailPopover.tsx`
**Purpose**: Modal/popover showing detailed block information

**Props**:
- `block: Block`
- `isOpen: boolean`
- `onClose: () => void`
- `position: { x: number, y: number }`

**Features**:
- Full block hash display
- Transaction list
- Timestamp
- Previous block link
- Close button or click outside

---

### 10. `HeroIntroduction.tsx`
**Purpose**: Brief introduction text below NFT interaction

**Props**:
- `text: string`

**Features**:
- Centered, readable typography
- Clickable terms integration
- Fade-in animation

---

## Animation Logic

### NFT Transfer Animation

**Path Calculation**:
```typescript
// Curved arc path using quadratic or cubic Bezier
const startPoint = { x: avatarLeftX, y: avatarLeftY }
const endPoint = { x: avatarRightX, y: avatarRightY }
const controlPoint = { 
  x: (startPoint.x + endPoint.x) / 2, 
  y: Math.min(startPoint.y, endPoint.y) - 150 // Arc height
}

// Framer Motion path animation
const path = `M ${startPoint.x} ${startPoint.y} Q ${controlPoint.x} ${controlPoint.y} ${endPoint.x} ${endPoint.y}`
```

**Animation Sequence**:
1. **Button Click** (0ms)
   - Button: scale down to 0.95, then back
   - Loading state indicator

2. **NFT Block Appears** (100ms delay)
   - Scale: 0 → 1.2 → 1 (bounce effect)
   - Opacity: 0 → 1
   - Position: near left avatar

3. **Arc Travel** (300ms delay)
   - Duration: 1200-1500ms
   - Easing: `easeInOut` or custom cubic-bezier
   - Rotation: slight rotation during travel (15-20deg)
   - Scale: slight pulse (1 → 1.1 → 1)

4. **Arrival** (1500ms total)
   - Scale: 1 → 1.3 → 1 (bounce)
   - Right avatar: pulse effect
   - Collection count: number increment animation
   - Left avatar: count decrement

5. **Completion** (2000ms)
   - NFT block fades out or moves to collection
   - Button resets
   - Optional: success message

**Framer Motion Implementation**:
```typescript
const nftVariants = {
  initial: { 
    scale: 0, 
    opacity: 0,
    x: avatarLeftPosition.x,
    y: avatarLeftPosition.y,
    rotate: 0
  },
  animating: {
    scale: [0, 1.2, 1, 1.1, 1],
    opacity: [0, 1, 1, 1, 1],
    x: [startX, midX, endX],
    y: [startY, arcPeakY, endY],
    rotate: [0, 15, -15, 0],
    transition: {
      duration: 1.5,
      times: [0, 0.2, 0.8, 0.9, 1],
      ease: "easeInOut"
    }
  },
  complete: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.3 }
  }
}
```

---

### Blockchain Chain Animations

**Block Hover**:
- Scale: 1 → 1.15
- Elevation: translateY(-8px)
- Shadow: increased blur and spread
- Border: color change
- Duration: 0.2s

**Block Click/Select**:
- Scale: 1 → 1.2 → 1.1 (bounce)
- Rotation: slight 3D tilt
- Glow effect: box-shadow with brand color
- Duration: 0.4s

**Chain Connection Lines**:
- Animated flow effect (particles or gradient moving)
- Direction: left to right
- Continuous loop when chain is visible

**New Block Addition** (if dynamic):
- Slide in from right
- Scale: 0 → 1
- Connection line animates in
- Duration: 0.5s

---

### Mining Visualization Animation

**Hash Calculation**:
- Numbers/characters scrolling rapidly
- Random hash generation display
- Target difficulty visualization (progress bar)

**Mining Process**:
1. **Start** (0s)
   - Multiple miner icons/computers appear
   - Activity indicators (pulsing)

2. **Calculating** (0-3s)
   - Hash strings update rapidly
   - Progress bar fills gradually
   - Visual feedback on attempts

3. **Success** (3s)
   - One miner highlights (winner)
   - New block appears in chain
   - Celebration animation (particles or glow)
   - Chain updates

**Loop Behavior**:
- Auto-repeat every 5-6 seconds
- Or manual trigger via button
- Smooth transitions between cycles

---

### Scroll Reveal Animations

**Section Entry**:
```typescript
const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, // or x: -50 for horizontal
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1 // for child elements
    }
  }
}
```

**Staggered Children** (for lists or multiple elements):
- Delay each child by 0.1s
- Creates cascading reveal effect
- Applied to clickable terms, paragraphs, etc.

**Intersection Observer Integration**:
- Trigger when 20% of section is visible
- Animate once (not on scroll up)
- Reset on page reload

---

### Clickable Term Animations

**Hover State**:
- Background: transparent → subtle color (e.g., `bg-blue-100 dark:bg-blue-900/30`)
- Underline: width 0 → 100%
- Scale: 1 → 1.02 (subtle)
- Cursor: pointer
- Tooltip: fade in from bottom

**Click State**:
- Brief scale down (0.98)
- Ripple effect (optional)
- Navigate to article

---

## Example Code Snippets

### Interactive NFT Transfer Visual

```tsx
'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import { UserAvatar } from './UserAvatar'
import { NFTBlock } from './NFTBlock'

export function NFTTransferVisualization() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [transferComplete, setTransferComplete] = useState(false)
  const [leftCount, setLeftCount] = useState(5)
  const [rightCount, setRightCount] = useState(2)

  // Animation path values
  const progress = useMotionValue(0)
  const springProgress = useSpring(progress, { stiffness: 100, damping: 30 })

  // Calculate arc path
  const startX = 100 // Left avatar center X
  const startY = 200 // Left avatar center Y
  const endX = 700 // Right avatar center X
  const endY = 200 // Right avatar center Y
  const arcHeight = 150

  const nftX = useTransform(springProgress, [0, 1], [startX, endX])
  const nftY = useTransform(springProgress, [0, 1], (value) => {
    // Quadratic curve calculation
    const t = value
    const y = startY - (4 * arcHeight * t * (1 - t))
    return y
  })

  const handleTransfer = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setTransferComplete(false)
    
    // Animate progress from 0 to 1
    progress.set(0)
    progress.set(1)

    // Update counts after animation
    setTimeout(() => {
      setLeftCount(prev => prev - 1)
      setRightCount(prev => prev + 1)
      setTransferComplete(true)
      setIsAnimating(false)
      
      // Reset after brief delay
      setTimeout(() => {
        progress.set(0)
        setTransferComplete(false)
      }, 1000)
    }, 1500)
  }

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Left Avatar */}
      <UserAvatar
        position="left"
        collectionCount={leftCount}
        isActive={isAnimating && !transferComplete}
      />

      {/* NFT Block (animated) */}
      {isAnimating && (
        <motion.div
          style={{
            x: nftX,
            y: nftY,
            position: 'absolute',
            zIndex: 10
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ 
            scale: [0, 1.2, 1, 1.1, 1],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            scale: { duration: 0.5, times: [0, 0.3, 0.7, 0.9, 1] },
            rotate: { duration: 1.5 }
          }}
        >
          <NFTBlock
            tokenId="#1234"
            imageUrl="/mock-nft.jpg"
            isAnimating={isAnimating}
          />
        </motion.div>
      )}

      {/* Send Button */}
      <motion.button
        onClick={handleTransfer}
        disabled={isAnimating}
        className="absolute z-20 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isAnimating ? 'Sending...' : 'Send NFT'}
      </motion.button>

      {/* Right Avatar */}
      <UserAvatar
        position="right"
        collectionCount={rightCount}
        isActive={transferComplete}
      />
    </div>
  )
}
```

---

### Blockchain Chain Infographic

```tsx
'use client'

import { motion } from 'framer-motion'
import { BlockCube } from './BlockCube'
import { useState } from 'react'

interface Block {
  id: number
  hash: string
  transactionCount: number
  timestamp: string
}

const mockBlocks: Block[] = [
  { id: 1, hash: '0x1a2b3c...', transactionCount: 142, timestamp: '10:30 AM' },
  { id: 2, hash: '0x4d5e6f...', transactionCount: 89, timestamp: '10:31 AM' },
  { id: 3, hash: '0x7g8h9i...', transactionCount: 203, timestamp: '10:32 AM' },
  // ... more blocks
]

export function BlockchainChain() {
  const [selectedBlockId, setSelectedBlockId] = useState<number | null>(null)
  const [hoveredBlockId, setHoveredBlockId] = useState<number | null>(null)

  return (
    <div className="w-full overflow-x-auto py-12">
      <div className="flex items-center gap-4 min-w-max px-8">
        {mockBlocks.map((block, index) => (
          <div key={block.id} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BlockCube
                blockId={block.id}
                hash={block.hash}
                transactionCount={block.transactionCount}
                isHighlighted={selectedBlockId === block.id}
                onClick={() => setSelectedBlockId(block.id)}
                onHover={() => setHoveredBlockId(block.id)}
              />
            </motion.div>
            
            {/* Connection Arrow */}
            {index < mockBlocks.length - 1 && (
              <motion.svg
                className="w-12 h-12 text-blue-500"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              >
                <motion.path
                  d="M 0 20 L 40 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M 30 10 L 40 20 L 30 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            )}
          </div>
        ))}
      </div>

      {/* Block Detail Popover */}
      {selectedBlockId && (
        <BlockDetailPopover
          block={mockBlocks.find(b => b.id === selectedBlockId)!}
          isOpen={true}
          onClose={() => setSelectedBlockId(null)}
        />
      )}
    </div>
  )
}
```

**BlockCube Component**:
```tsx
'use client'

import { motion } from 'framer-motion'

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
        relative w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 
        rounded-lg shadow-lg cursor-pointer
        ${isHighlighted ? 'ring-4 ring-yellow-400 ring-offset-2' : ''}
      `}
      onClick={onClick}
      onHoverStart={onHover}
      whileHover={{ 
        scale: 1.15, 
        y: -8,
        rotateY: 15,
        rotateX: -5
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* 3D Cube Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg opacity-50" 
           style={{ transform: 'translateZ(-10px)' }} />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white p-2">
        <span className="text-xs font-bold">#{blockId}</span>
        <span className="text-[10px] font-mono mt-1 truncate w-full text-center">
          {hash.slice(0, 6)}...
        </span>
        <span className="text-[10px] mt-1">{transactionCount} tx</span>
      </div>

      {/* Glow effect when highlighted */}
      {isHighlighted && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-yellow-400 opacity-20 blur-xl"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  )
}
```

---

### Scroll-Based Reveal

```tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ClickableTerm } from './ClickableTerm'

export function EducationalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            staggerChildren: 0.1
          }
        }
      }}
      className="py-20 px-4 max-w-4xl mx-auto"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-4xl font-bold mb-6"
      >
        What is Blockchain?
      </motion.h2>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        A <ClickableTerm term="blockchain" articlePath="/blockchain" /> is a 
        distributed ledger that records <ClickableTerm term="transactions" articlePath="/transaction" /> 
        in a secure and transparent way. Each <ClickableTerm term="block" articlePath="/blockchain" /> 
        contains a list of transactions and is linked to the previous block, 
        forming an immutable chain.
      </motion.p>
    </motion.section>
  )
}
```

**ClickableTerm Component**:
```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface ClickableTermProps {
  term: string
  articlePath: string
  tooltip?: string
}

export function ClickableTerm({ term, articlePath, tooltip }: ClickableTermProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <span className="relative inline-block">
      <Link
        href={articlePath}
        className="relative inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <motion.span
          className="text-blue-600 dark:text-blue-400 font-semibold cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative">
            {term}
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </motion.span>
      </Link>

      {/* Tooltip */}
      {showTooltip && tooltip && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg shadow-lg whitespace-nowrap z-50"
        >
          {tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
        </motion.div>
      )}
    </span>
  )
}
```

---

### Mining Visualization

```tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function MiningVisualization() {
  const [isMining, setIsMining] = useState(false)
  const [currentHash, setCurrentHash] = useState('0000000000')
  const [progress, setProgress] = useState(0)
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null)

  const miners = Array.from({ length: 4 }, (_, i) => i)

  const startMining = () => {
    setIsMining(true)
    setProgress(0)
    setWinnerIndex(null)

    // Simulate hash attempts
    const interval = setInterval(() => {
      setCurrentHash(Math.random().toString(16).slice(2, 12))
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setWinnerIndex(Math.floor(Math.random() * miners.length))
          setIsMining(false)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">How Mining Works</h3>
        
        {/* Miners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {miners.map((index) => (
            <motion.div
              key={index}
              className={`
                p-6 rounded-lg border-2
                ${winnerIndex === index 
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                  : 'border-gray-200 dark:border-gray-700'}
              `}
              animate={{
                scale: isMining ? [1, 1.05, 1] : 1,
                opacity: isMining ? [1, 0.8, 1] : 1
              }}
              transition={{
                duration: 0.5,
                repeat: isMining ? Infinity : 0
              }}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">⛏️</div>
                <div className="text-xs font-mono text-gray-600 dark:text-gray-400">
                  {isMining ? currentHash : 'Ready'}
                </div>
                {winnerIndex === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-2 text-green-600 font-bold"
                  >
                    Winner!
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {isMining ? `Mining... ${progress}%` : 'Click to start mining'}
          </p>
        </div>

        {/* Control Button */}
        <button
          onClick={startMining}
          disabled={isMining}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50"
        >
          {isMining ? 'Mining...' : 'Start Mining'}
        </button>
      </div>
    </div>
  )
}
```

---

## Tailwind CSS Notes

### Color Palette Recommendations

**Primary Colors**:
- `blue-500/600/700` - Blockchain, trust, technology
- `purple-500/600/700` - NFTs, creativity
- `cyan-400/500/600` - Highlights, links

**Accent Colors**:
- `yellow-400/500` - Mining, success states
- `green-500/600` - Completed transactions, success
- `orange-500/600` - Warnings, pending states

**Neutral Colors**:
- `gray-50/100` - Light backgrounds
- `gray-800/900` - Dark backgrounds
- `gray-600/700` - Text, borders

### Utility Classes for Components

**NFT Transfer Section**:
```css
/* Container */
.relative w-full h-[400px] md:h-[500px] flex items-center justify-center

/* Avatar positioning */
.absolute left-8 md:left-16 (left avatar)
.absolute right-8 md:right-16 (right avatar)

/* Button */
.px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 
.text-white rounded-full font-semibold shadow-lg
.hover:shadow-xl transition-shadow
```

**Blockchain Chain**:
```css
/* Container */
.w-full overflow-x-auto py-12
.flex items-center gap-4 min-w-max px-8

/* Individual Block */
.w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600
.rounded-lg shadow-lg cursor-pointer
.ring-4 ring-yellow-400 ring-offset-2 (when highlighted)
```

**Scroll Sections**:
```css
/* Section spacing */
.py-20 px-4 max-w-4xl mx-auto

/* Typography */
.text-4xl font-bold mb-6 (headings)
.text-lg text-gray-700 dark:text-gray-300 leading-relaxed (body)
```

**Clickable Terms**:
```css
.text-blue-600 dark:text-blue-400 font-semibold cursor-pointer
.relative inline-block
.underline decoration-2 underline-offset-2 (optional)
```

### Responsive Design Patterns

**Mobile (< 768px)**:
- Stack avatars vertically or reduce spacing
- Horizontal scroll for blockchain chain
- Full-width sections
- Reduced font sizes

**Tablet (768px - 1024px)**:
- Side-by-side avatars with reduced spacing
- 2-column grid for miners
- Adjusted padding

**Desktop (> 1024px)**:
- Full layout as designed
- 4-column miner grid
- Generous spacing

### Dark Mode Considerations

- Use `dark:` prefix for all color variations
- Test contrast ratios (WCAG AA minimum)
- Consider reduced opacity for dark backgrounds
- Glow effects more visible in dark mode

### Animation Performance

- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left` directly
- Use `will-change` sparingly (only during active animations)
- Prefer CSS transforms over Framer Motion for simple hover states

---

## Implementation Notes

### Text and Visuals Connection

1. **Progressive Disclosure**: Start with visual interaction (NFT transfer), then reveal text explanations below
2. **Contextual Tooltips**: Hover over blockchain cubes shows relevant information before clicking
3. **Inline Definitions**: Clickable terms allow users to dive deeper without losing context
4. **Visual Feedback**: Every interaction has immediate visual response (hover, click, animation)
5. **Story Flow**: Content sections build on the initial interaction, explaining what users just saw

### Mock Data Structure

```typescript
// Mock NFT data
const mockNFTs = [
  { id: 1, imageUrl: '/nft-1.jpg', tokenId: '#1234', name: 'Cool NFT' },
  { id: 2, imageUrl: '/nft-2.jpg', tokenId: '#5678', name: 'Awesome NFT' },
  // ...
]

// Mock blockchain blocks
const mockBlocks = [
  {
    id: 1,
    hash: '0x1a2b3c4d5e6f...',
    prevHash: '0x000000000000...',
    transactionCount: 142,
    timestamp: '2024-01-15 10:30:00',
    miner: 'Miner #3'
  },
  // ...
]
```

### Performance Considerations

- Lazy load images (Next.js Image component)
- Code split heavy components
- Use `useInView` to only animate visible sections
- Debounce scroll handlers
- Optimize Framer Motion with `layoutId` for shared element transitions

### Accessibility

- Keyboard navigation for all interactive elements
- ARIA labels for avatars and buttons
- Focus states visible (ring utilities)
- Screen reader friendly text alternatives
- Reduced motion support (respect `prefers-reduced-motion`)

---

## Next Steps

1. **Create component files** in `components/` directory
2. **Update homepage** (`app/page.tsx`) with new layout
3. **Add mock data** files or constants
4. **Test animations** on different devices
5. **Polish interactions** based on user feedback
6. **Optimize performance** (lazy loading, code splitting)
7. **Add accessibility** features
8. **Create article pages** linked from clickable terms

---

End of Implementation Plan.

