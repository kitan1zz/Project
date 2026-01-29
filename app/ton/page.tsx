'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Zap, Wallet, Globe } from 'lucide-react'
import { NFTPrice } from '@/components/NFTPrice'

export default function TONPage() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Интеграция с Telegram',
      description: 'TON создан командой Telegram и глубоко интегрирован в мессенджер',
      color: 'bg-cyan-500',
    },
    {
      icon: Zap,
      title: 'Высокая скорость',
      description: 'TON может обрабатывать миллионы транзакций в секунду благодаря шардингу',
      color: 'bg-blue-500',
    },
    {
      icon: Wallet,
      title: 'Встроенный кошелёк',
      description: 'Telegram Wallet позволяет отправлять и получать криптовалюту прямо в чате',
      color: 'bg-green-500',
    },
    {
      icon: Globe,
      title: 'Децентрализация',
      description: 'TON — это децентрализованная сеть, управляемая сообществом',
      color: 'bg-purple-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            TON и Telegram
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            TON (The Open Network) — это блокчейн-платформа, созданная для интеграции с Telegram
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
              Что такое TON?
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong className="text-cyan-600 dark:text-cyan-400">TON</strong> (The Open Network) — это быстрый и масштабируемый блокчейн, 
                изначально разработанный командой Telegram.
              </p>
              <p>
                Основная идея TON — сделать криптовалюту и блокчейн-технологии доступными для миллионов пользователей Telegram.
              </p>
              <p>
                Сеть использует технологию <strong>шардинга</strong> — разделение данных на части (шарды) для повышения производительности.
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
              Связь с Telegram
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Telegram имеет более <strong>800 миллионов</strong> активных пользователей по всему миру.
              </p>
              <p>
                TON интегрирован в Telegram через:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Встроенный кошелёк (Telegram Wallet)</li>
                <li>Боты для работы с блокчейном</li>
                <li>Мини-приложения (Mini Apps)</li>
                <li>Платежи через TON</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Как это работает вместе?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Пользователь открывает Telegram
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  В знакомом интерфейсе мессенджера пользователь может получить доступ к блокчейн-функциям
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Активация кошелька
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Пользователь может создать или открыть кошелёк TON прямо в Telegram через встроенный интерфейс
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Транзакции в чате
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Пользователи могут отправлять TON, NFT и другие токены друг другу прямо в чате, как обычные сообщения
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Мини-приложения
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Разработчики могут создавать децентрализованные приложения (dApps), которые работают внутри Telegram
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            NFT в Telegram (подарки)
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            В экосистеме TON NFT можно отправлять как подарки прямо в Telegram. Это делает NFT доступными для миллионов обычных пользователей.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Telegram Gift NFT Example */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Telegram NFT подарок</h3>
              
              <div className="relative mb-4 rounded-lg overflow-hidden border-2 border-cyan-200 dark:border-cyan-800">
                <img
                  src="/telegram-gift-nft.jpg"
                  alt="Telegram NFT подарок"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              
              <p className="text-sm text-gray-700 dark:text-gray-300">
                NFT можно отправить прямо в чате Telegram как обычный подарок
              </p>
            </div>

            {/* Plush Pepe Example */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Plush Pepe</h3>
              
              <div className="relative mb-4 rounded-lg overflow-hidden border-2 border-pink-200 dark:border-pink-800">
                <img
                  src="/plush-pepe-example.jpg"
                  alt="Plush Pepe NFT"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              
              <div className="mb-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <NFTPrice 
                  usd={13000}
                  ton={8700}
                  colorClass="text-pink-600 dark:text-pink-400"
                />
              </div>
              
              <p className="text-sm text-gray-700 dark:text-gray-300">
                В экосистеме TON NFT часто «живут» рядом с Telegram: ими проще делиться, их легче показать в интерфейсе мессенджера, а комиссии обычно небольшие.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">
            Преимущества интеграции
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Простота использования — не нужно устанавливать отдельные приложения</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Массовое внедрение — доступ для сотен миллионов пользователей Telegram</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Безопасность — транзакции защищены криптографией блокчейна</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Скорость — быстрые транзакции благодаря архитектуре TON</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

