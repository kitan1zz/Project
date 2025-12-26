'use client'

import { motion } from 'framer-motion'
import { BlockVisualization } from '@/components/BlockVisualization'
import { Shield, Users, Lock, Network } from 'lucide-react'
import { useState } from 'react'

export default function BlockchainPage() {
  const [highlightBlock, setHighlightBlock] = useState<number | undefined>(undefined)

  const blocks = [
    {
      id: 1,
      data: 'Транзакция: Алиса → Боб (10 TON)',
      hash: 'a1b2c3d4e5f6...',
      prevHash: '000000000000...',
    },
    {
      id: 2,
      data: 'Транзакция: Боб → Чарли (5 TON)',
      hash: 'b2c3d4e5f6a1...',
      prevHash: 'a1b2c3d4e5f6...',
    },
    {
      id: 3,
      data: 'Транзакция: Чарли → Дэвид (3 TON)',
      hash: 'c3d4e5f6a1b2...',
      prevHash: 'b2c3d4e5f6a1...',
    },
  ]

  const features = [
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Данные защищены криптографией и распределены между множеством узлов',
    },
    {
      icon: Users,
      title: 'Децентрализация',
      description: 'Нет единой точки отказа — сеть управляется сообществом',
    },
    {
      icon: Lock,
      title: 'Неизменяемость',
      description: 'После записи данные нельзя изменить без согласия сети',
    },
    {
      icon: Network,
      title: 'Прозрачность',
      description: 'Все транзакции видны всем участникам сети',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Что такое блокчейн?
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Блокчейн — это распределённая база данных, которая хранит информацию в виде цепочки блоков
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Как это работает?
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong className="text-blue-600 dark:text-blue-400">1. Транзакции</strong> — пользователи создают транзакции (переводы, операции)
              </p>
              <p>
                <strong className="text-blue-600 dark:text-blue-400">2. Блоки</strong> — транзакции группируются в блоки
              </p>
              <p>
                <strong className="text-blue-600 dark:text-blue-400">3. Хеширование</strong> — каждый блок получает уникальный хеш (цифровую подпись)
              </p>
              <p>
                <strong className="text-blue-600 dark:text-blue-400">4. Цепочка</strong> — блоки связываются через хеш предыдущего блока
              </p>
              <p>
                <strong className="text-blue-600 dark:text-blue-400">5. Валидация</strong> — сеть проверяет корректность каждого блока
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Почему это безопасно?
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Если кто-то попытается изменить данные в блоке, изменится его хеш. Это нарушит связь с последующими блоками, и сеть отклонит изменение.
              </p>
              <p>
                Для успешной атаки нужно изменить все блоки после изменённого и получить согласие большинства узлов сети — это практически невозможно.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Визуализация цепочки блоков
          </h2>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => {
                setHighlightBlock(undefined)
                setTimeout(() => {
                  blocks.forEach((block, index) => {
                    setTimeout(() => {
                      setHighlightBlock(block.id)
                    }, index * 1000)
                  })
                }, 100)
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Анимировать цепочку
            </button>
          </div>
          <BlockVisualization blocks={blocks} highlightBlock={highlightBlock} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

