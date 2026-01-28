'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { BlockCube } from './BlockCube'
import { BlockDetailPopover } from './BlockDetailPopover'

interface Block {
  id: number
  hash: string
  prevHash: string
  transactionCount: number
  timestamp: string
  miner?: string
}

// Детерминированные демо-данные (без рандома), чтобы скриншоты/обучение были стабильными.
const createDemoChain = (count: number): Block[] => {
  const padHash = (hex: string) => `0x${hex.padEnd(16, '0').slice(0, 16)}...`
  const time = (minutesAgo: number) => {
    const d = new Date(Date.now() - minutesAgo * 60_000)
    return d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
  }

  const blocks: Block[] = []
  let prev = '0x0000000000000000...'

  for (let i = 0; i < count; i++) {
    const id = i + 1
    const hash = padHash(`B${id.toString(16)}A${(id * 13).toString(16)}C${(id * 7).toString(16)}`)
    blocks.push({
      id,
      hash,
      prevHash: prev,
      transactionCount: 60 + id * 17,
      timestamp: time(count - i),
      miner: `Валидатор №${(id % 5) + 1}`,
    })
    prev = hash
  }

  return blocks
}

export function BlockchainChain() {
  const [selectedBlockId, setSelectedBlockId] = useState<number | null>(null)
  const [hoveredBlockId, setHoveredBlockId] = useState<number | null>(null)
  const blocks = useMemo(() => createDemoChain(8), [])

  const selectedBlock = selectedBlockId 
    ? blocks.find(b => b.id === selectedBlockId) 
    : null

  return (
    <div className="w-full py-10 px-4">
      <div className="w-full mx-auto overflow-hidden">
        {/* Chain Container */}
        <div className="w-full overflow-hidden">
          <div className="overflow-x-auto py-6 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700" style={{ maxWidth: '100%', width: '100%' }}>
            <div className="flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 min-w-max px-4 md:px-6 lg:px-8 xl:px-12 justify-center" style={{ minWidth: 'fit-content', width: 'max-content' }}>
            {blocks.map((block, index) => (
              <div key={block.id} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlockCube
                    blockId={block.id}
                    hash={block.hash}
                    transactionCount={block.transactionCount}
                    isHighlighted={selectedBlockId === block.id || hoveredBlockId === block.id}
                    onClick={() => setSelectedBlockId(block.id)}
                    onHover={() => setHoveredBlockId(block.id)}
                  />
                </motion.div>
                
                {/* Connection Arrow */}
                {index < blocks.length - 1 && (
                  <motion.svg
                    className="w-12 h-12 md:w-16 md:h-16 text-blue-500 flex-shrink-0"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  >
                    <motion.path
                      d="M 0 20 L 50 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <motion.path
                      d="M 40 10 L 50 20 L 40 30"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Animated flow effect */}
                    <motion.circle
                      r="3"
                      fill="currentColor"
                      initial={{ cx: 0, cy: 20 }}
                      animate={{ cx: [0, 50, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.svg>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
        >
          Наведите курсор, чтобы подсветить блок • Нажмите, чтобы открыть детали
        </motion.p>

        {/* Block Detail Popover */}
        {selectedBlock && (
          <BlockDetailPopover
            block={selectedBlock}
            isOpen={!!selectedBlockId}
            onClose={() => setSelectedBlockId(null)}
          />
        )}
      </div>
    </div>
  )
}

