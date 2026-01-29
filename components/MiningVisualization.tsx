'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Hammer, CheckCircle2 } from 'lucide-react'

// Детерминированный «учебный хэш» (быстрый и синхронный).
// Это НЕ криптографический SHA-256, но для объяснения идеи PoW подходит:
// один и тот же вход -> один и тот же результат.
function fnv1aHex(input: string) {
  let hash = 0x811c9dc5
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i)
    // hash *= 16777619 (через битовые операции, чтобы оставаться в 32-bit)
    hash = (hash + ((hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24))) >>> 0
  }
  return hash.toString(16).toUpperCase().padStart(8, '0')
}

export function MiningVisualization() {
  const [isMining, setIsMining] = useState(false)
  const [currentHash, setCurrentHash] = useState('00000000')
  const [progress, setProgress] = useState(0)
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null)
  const [attempts, setAttempts] = useState(0)
  const [nonce, setNonce] = useState(0)
  const intervalRef = useRef<number | null>(null)

  const miners = Array.from({ length: 4 }, (_, i) => i)

  // «Предыдущий хэш» фиксированный для демо: так поведение всегда одинаковое.
  const previousHash = useMemo(() => 'A1B2C3D4', [])
  const difficultyPrefix = useMemo(() => '00', []) // сложность: хэш должен начинаться с "00"
  // Делает симуляцию «нагляднее»: больше переборов (вместо 1–4 попыток)
  const targetAttempts = useMemo(() => Math.floor(Math.random() * 19) + 12, []) // 12..30

  const startMining = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsMining(true)
    setProgress(0)
    setWinnerIndex(null)
    setAttempts(0)
    setNonce(0)

    let currentAttempt = 0
    const randomWinner = Math.floor(Math.random() * miners.length)

    // Симуляция: перебор nonce с рандомным победителем
    intervalRef.current = window.setInterval(() => {
      currentAttempt++
      setNonce(currentAttempt)
      const hash = fnv1aHex(`${previousHash}|nonce=${currentAttempt}`)
      setCurrentHash(hash)
      setAttempts(currentAttempt)
      
      const progress = Math.min(100, Math.round((currentAttempt / targetAttempts) * 100))
      setProgress(progress)

      const shouldStop = currentAttempt >= targetAttempts

      if (shouldStop) {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        setIsMining(false)
        setWinnerIndex(randomWinner)
        setProgress(100)
      }
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [])

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Как работает майнинг (упрощённая симуляция)
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Майнеры перебирают варианты, чтобы найти хэш, который подходит под «сложность» сети. Кто нашёл первым — предлагает блок и получает награду.
          </p>
        </motion.div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <div className="text-gray-500 dark:text-gray-400">Предыдущий хэш</div>
            <div className="mt-1 font-mono text-gray-900 dark:text-white">{previousHash}</div>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <div className="text-gray-500 dark:text-gray-400">Сложность</div>
            <div className="mt-1 font-mono text-gray-900 dark:text-white">
              хэш начинается с {difficultyPrefix}
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
            <div className="text-gray-500 dark:text-gray-400">Nonce (перебор)</div>
            <div className="mt-1 font-mono text-gray-900 dark:text-white">{nonce}</div>
          </div>
        </div>
        
        {/* Miners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {miners.map((index) => (
            <motion.div
              key={index}
              className={`
                relative p-6 rounded-xl border-2 transition-all
                ${winnerIndex === index 
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-lg scale-105' 
                  : isMining
                  ? 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/10'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'}
              `}
              animate={{
                scale: isMining && winnerIndex !== index ? [1, 1.05, 1] : winnerIndex === index ? 1.05 : 1,
                opacity: isMining && winnerIndex !== index ? [1, 0.8, 1] : 1
              }}
              transition={{
                duration: 0.5,
                repeat: isMining && winnerIndex === null ? Infinity : 0
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-4xl mb-3"
                  animate={isMining && winnerIndex !== index ? {
                    rotate: [0, 10, -10, 0]
                  } : {}}
                  transition={{
                    duration: 0.5,
                    repeat: isMining && winnerIndex === null ? Infinity : 0
                  }}
                >
                  <Hammer className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Майнер №{index + 1}
                </div>
                <div className="text-xs font-mono text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  {isMining ? currentHash : 'Готов'}
                </div>
                {winnerIndex === index && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mt-3 flex items-center justify-center gap-1 text-green-600 dark:text-green-400 font-bold text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Победил
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span>
              {isMining ? `Майнинг… ${Math.round(progress)}%` : progress === 100 ? 'Блок найден' : 'Готов к майнингу'}
            </span>
            {isMining && (
              <span className="font-mono text-xs">
                Попытки: {attempts}
              </span>
            )}
          </div>
        </motion.div>

        {/* Control Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={startMining}
            disabled={isMining}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={!isMining ? { scale: 1.05 } : {}}
            whileTap={!isMining ? { scale: 0.95 } : {}}
          >
            {isMining ? 'Идёт майнинг…' : 'Начать майнинг'}
          </motion.button>
        </motion.div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
        >
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong className="text-blue-900 dark:text-blue-100">Что происходит?</strong> Каждый майнер пробует разные варианты и ищет хэш, который подходит под условие сложности.
            В реальной сети это требует много вычислений. Когда решение найдено, его проверяют, затем блок добавляется в цепочку, а майнер получает награду.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

