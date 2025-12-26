'use client'

import { useState } from 'react'
import { HeroSection } from '@/components/HeroSection'
import { FadeInOnScroll } from '@/components/FadeInOnScroll'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Clock, Send, User } from 'lucide-react'

type TransactionStatus = 'idle' | 'created' | 'pending' | 'confirmed'

export default function TransactionPage() {
  const [status, setStatus] = useState<TransactionStatus>('idle')
  const [from, setFrom] = useState('Алиса')
  const [to, setTo] = useState('Боб')
  const [amount, setAmount] = useState('0.5 TON')

  const startTransaction = () => {
    setStatus('created')
    setTimeout(() => setStatus('pending'), 500)
    setTimeout(() => setStatus('confirmed'), 3000)
  }

  const resetTransaction = () => {
    setStatus('idle')
  }

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Как работает транзакция"
        subtitle="Интерактивная демонстрация процесса транзакции от создания до подтверждения"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <FadeInOnScroll>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Симуляция транзакции
              </h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Отправитель
                  </label>
                  <input
                    type="text"
                    value={from}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFrom(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Получатель
                  </label>
                  <input
                    type="text"
                    value={to}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTo(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Сумма
                  </label>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={startTransaction}
                  disabled={status !== 'idle'}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Создать транзакцию
                </button>
                {status !== 'idle' && (
                  <button
                    onClick={resetTransaction}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Сбросить
                  </button>
                )}
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <motion.div
                  className="flex flex-col items-center flex-1"
                  animate={status !== 'idle' ? { scale: 1.1 } : { scale: 1 }}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                    status !== 'idle' ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">{from}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{amount}</p>
                </motion.div>

                <div className="flex-1 mx-4">
                  <AnimatePresence mode="wait">
                    {status === 'created' && (
                      <motion.div
                        key="created"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex flex-col items-center"
                      >
                        <Send className="w-12 h-12 text-blue-500 mb-2" />
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Создана
                        </p>
                      </motion.div>
                    )}
                    {status === 'pending' && (
                      <motion.div
                        key="pending"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Clock className="w-12 h-12 text-yellow-500 mb-2" />
                        </motion.div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Ожидает подтверждения
                        </p>
                      </motion.div>
                    )}
                    {status === 'confirmed' && (
                      <motion.div
                        key="confirmed"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                          <CheckCircle className="w-12 h-12 text-green-500 mb-2" />
                        </motion.div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Подтверждена
                        </p>
                      </motion.div>
                    )}
                    {status === 'idle' && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-12 h-12 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-full mb-2" />
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          Готово к отправке
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  className="flex flex-col items-center flex-1"
                  animate={status === 'confirmed' ? { scale: 1.1 } : { scale: 1 }}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                    status === 'confirmed' ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">{to}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {status === 'confirmed' ? amount : '—'}
                  </p>
                </motion.div>
              </div>

              <div className="mt-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Статус транзакции
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {status === 'idle' && 'Не создана'}
                    {status === 'created' && 'Создана'}
                    {status === 'pending' && 'Ожидает подтверждения'}
                    {status === 'confirmed' && 'Подтверждена'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: status === 'created' ? '33%' : status === 'pending' ? '66%' : status === 'confirmed' ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.3}>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Что происходит на каждом этапе?
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400">1. Создана:</span>
                  <span>Транзакция создана и готова к отправке в сеть блокчейна.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-yellow-600 dark:text-yellow-400">2. Ожидает подтверждения:</span>
                  <span>Транзакция отправлена в сеть, где её проверяют узлы блокчейна.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-green-600 dark:text-green-400">3. Подтверждена:</span>
                  <span>Транзакция проверена и добавлена в блок. Деньги успешно переведены!</span>
                </li>
              </ul>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  )
}

