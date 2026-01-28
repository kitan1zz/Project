'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Hash, Clock, ArrowRightLeft } from 'lucide-react'

interface Block {
  id: number
  hash: string
  prevHash: string
  transactionCount: number
  timestamp: string
  miner?: string
}

interface BlockDetailPopoverProps {
  block: Block
  isOpen: boolean
  onClose: () => void
  position?: { x: number; y: number }
}

export function BlockDetailPopover({ 
  block, 
  isOpen, 
  onClose,
  position 
}: BlockDetailPopoverProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Popover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`
              fixed z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl 
              border-2 border-gray-200 dark:border-gray-700
              max-w-md w-full mx-4
              ${position ? '' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
            `}
            style={position ? {
              left: position.x,
              top: position.y
            } : {}}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Hash className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Block #{block.id}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Hash */}
              <div>
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1 block">
                  Hash
                </label>
                <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded-lg break-all">
                  {block.hash}
                </div>
              </div>

              {/* Previous Hash */}
              <div>
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1 block">
                  Previous Hash
                </label>
                <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded-lg break-all">
                  {block.prevHash}
                </div>
              </div>

              {/* Transaction Count */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <ArrowRightLeft className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Transactions:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {block.transactionCount}
                  </span>
                </div>
              </div>

              {/* Timestamp */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {block.timestamp}
                </span>
              </div>

              {/* Miner (if available) */}
              {block.miner && (
                <div>
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1 block">
                    Miner
                  </label>
                  <div className="text-sm text-gray-900 dark:text-white">
                    {block.miner}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={onClose}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

