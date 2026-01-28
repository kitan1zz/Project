'use client'

import { motion } from 'framer-motion'

export function BlockchainVisualization() {
  const blocks = Array.from({ length: 6 }, (_, i) => i + 1)

  return (
    <div className="w-full flex items-center justify-center py-12 my-8 overflow-hidden">
      <div className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center px-4">
        {blocks.map((blockId, index) => (
          <div key={blockId} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* 3D Cube */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 perspective-1000">
                <div className="relative w-full h-full preserve-3d transition-transform duration-300 hover:rotate-y-12">
                  {/* Front Face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 dark:from-indigo-400 dark:to-indigo-600 rounded-lg border-2 border-indigo-300 dark:border-indigo-500 shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl md:text-2xl">{blockId}</span>
                  </div>
                  {/* Top Face */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-500 dark:to-indigo-700 rounded-lg border-2 border-indigo-300 dark:border-indigo-500 shadow-lg"
                    style={{
                      transform: 'rotateX(90deg) translateZ(40px)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  {/* Right Face */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-600 dark:to-indigo-800 rounded-lg border-2 border-indigo-400 dark:border-indigo-600 shadow-lg"
                    style={{
                      transform: 'rotateY(90deg) translateZ(40px)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Chain Link */}
            {index < blocks.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                className="relative mx-2 md:mx-3"
              >
                {/* Chain links */}
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3].map((link) => (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + link * 0.05 + 0.3 }}
                      className="w-2 h-4 md:w-2.5 md:h-5 bg-gradient-to-b from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 rounded-full shadow-md border border-amber-700 dark:border-amber-800"
                    />
                  ))}
                </div>
                {/* Connecting line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 -translate-y-1/2 -z-10" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-12:hover {
          transform: rotateY(12deg);
        }
      `}</style>
    </div>
  )
}
