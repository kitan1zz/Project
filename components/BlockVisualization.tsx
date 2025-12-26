'use client'

import { motion } from 'framer-motion'
import { Hash, Link2 } from 'lucide-react'

interface Block {
  id: number
  data: string
  hash: string
  prevHash: string
}

interface BlockVisualizationProps {
  blocks: Block[]
  highlightBlock?: number
}

export function BlockVisualization({ blocks, highlightBlock }: BlockVisualizationProps) {
  return (
    <div className="flex flex-col items-center space-y-4 py-8">
      {blocks.map((block, index) => {
        const isHighlighted = highlightBlock === block.id
        return (
          <div key={block.id} className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: isHighlighted ? 1.05 : 1,
              }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 ${
                isHighlighted
                  ? 'border-blue-500 shadow-blue-500/50'
                  : 'border-gray-200 dark:border-gray-700'
              } min-w-[300px]`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Блок #{block.id}
                </span>
                <Hash className="w-5 h-5 text-blue-500" />
              </div>
              <div className="mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Данные:</p>
                <p className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  {block.data}
                </p>
              </div>
              <div className="mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Хеш:</p>
                <p className="font-mono text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded truncate">
                  {block.hash}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Предыдущий хеш:</p>
                <p className="font-mono text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded truncate">
                  {block.prevHash}
                </p>
              </div>
            </motion.div>
            {index < blocks.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 + 0.2 }}
              >
                <Link2 className="w-6 h-6 text-blue-500 rotate-90" />
              </motion.div>
            )}
          </div>
        )
      })}
    </div>
  )
}

