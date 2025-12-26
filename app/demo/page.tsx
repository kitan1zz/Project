'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, XCircle, RefreshCw } from 'lucide-react'

interface NFT {
  id: string
  name: string
  owner: string
  image: string
}

interface Transaction {
  id: string
  from: string
  to: string
  nftId: string
  status: 'pending' | 'confirmed' | 'failed'
  timestamp: number
}

export default function DemoPage() {
  const [nfts, setNfts] = useState<NFT[]>([
    { id: '1', name: 'Цифровая картина #1', owner: 'Алиса', image: '🎨' },
    { id: '2', name: 'Виртуальный дом', owner: 'Боб', image: '🏠' },
    { id: '3', name: 'Коллекционная карта', owner: 'Чарли', image: '🃏' },
  ])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [selectedNft, setSelectedNft] = useState<string | null>(null)
  const [recipient, setRecipient] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const users = ['Алиса', 'Боб', 'Чарли', 'Дэвид', 'Ева']

  const handleTransfer = async () => {
    if (!selectedNft || !recipient) return

    const nft = nfts.find((n) => n.id === selectedNft)
    if (!nft || nft.owner === recipient) return

    setIsProcessing(true)

    // Создаём транзакцию
    const newTransaction: Transaction = {
      id: `tx_${Date.now()}`,
      from: nft.owner,
      to: recipient,
      nftId: selectedNft,
      status: 'pending',
      timestamp: Date.now(),
    }

    setTransactions((prev) => [newTransaction, ...prev])

    // Симулируем обработку транзакции
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Обновляем владельца NFT
    setNfts((prev) =>
      prev.map((nft) =>
        nft.id === selectedNft ? { ...nft, owner: recipient } : nft
      )
    )

    // Обновляем статус транзакции
    setTransactions((prev) =>
      prev.map((tx) =>
        tx.id === newTransaction.id ? { ...tx, status: 'confirmed' } : tx
      )
    )

    setIsProcessing(false)
    setSelectedNft(null)
    setRecipient('')
  }

  const resetDemo = () => {
    setNfts([
      { id: '1', name: 'Цифровая картина #1', owner: 'Алиса', image: '🎨' },
      { id: '2', name: 'Виртуальный дом', owner: 'Боб', image: '🏠' },
      { id: '3', name: 'Коллекционная карта', owner: 'Чарли', image: '🃏' },
    ])
    setTransactions([])
    setSelectedNft(null)
    setRecipient('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Интерактивная демонстрация
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Попробуйте передать NFT другому пользователю и посмотрите, как это работает
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Доступные NFT
            </h2>
            <div className="space-y-4">
              {nfts.map((nft) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedNft === nft.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                  onClick={() => setSelectedNft(nft.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{nft.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {nft.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Владелец: <span className="font-medium">{nft.owner}</span>
                      </p>
                    </div>
                    {selectedNft === nft.id && (
                      <CheckCircle className="w-6 h-6 text-blue-500" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Передача владения
            </h2>
            {selectedNft ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Выбранный NFT
                  </label>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {nfts.find((n) => n.id === selectedNft)?.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Текущий владелец: {nfts.find((n) => n.id === selectedNft)?.owner}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Новый владелец
                  </label>
                  <select
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Выберите получателя</option>
                    {users
                      .filter(
                        (user) => user !== nfts.find((n) => n.id === selectedNft)?.owner
                      )
                      .map((user) => (
                        <option key={user} value={user}>
                          {user}
                        </option>
                      ))}
                  </select>
                </div>
                <button
                  onClick={handleTransfer}
                  disabled={!recipient || isProcessing}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Обработка...</span>
                    </>
                  ) : (
                    <>
                      <span>Передать NFT</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                Выберите NFT для передачи
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              История транзакций
            </h2>
            <button
              onClick={resetDemo}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Сбросить</span>
            </button>
          </div>
          <div className="space-y-4">
            <AnimatePresence>
              {transactions.length === 0 ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  Транзакций пока нет
                </div>
              ) : (
                transactions.map((tx) => {
                  const nft = nfts.find((n) => n.id === tx.nftId)
                  return (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`p-4 rounded-lg border-2 ${
                        tx.status === 'confirmed'
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                          : tx.status === 'pending'
                          ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                          : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {tx.status === 'confirmed' ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : tx.status === 'pending' ? (
                              <RefreshCw className="w-5 h-5 text-yellow-500 animate-spin" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500" />
                            )}
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {nft?.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">{tx.from}</span>
                            <ArrowRight className="w-4 h-4" />
                            <span className="font-medium">{tx.to}</span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                            {new Date(tx.timestamp).toLocaleString('ru-RU')}
                          </p>
                        </div>
                        <div className="text-right">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              tx.status === 'confirmed'
                                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                : tx.status === 'pending'
                                ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                                : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                            }`}
                          >
                            {tx.status === 'confirmed'
                              ? 'Подтверждено'
                              : tx.status === 'pending'
                              ? 'Ожидание'
                              : 'Ошибка'}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800"
        >
          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
            Как это работает?
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Это демонстрация передачи владения NFT. В реальном блокчейне процесс аналогичен:
            создаётся транзакция, она подписывается приватным ключом, отправляется в сеть,
            валидируется узлами сети, и после подтверждения запись в блокчейне обновляется.
            Файл NFT (изображение) хранится вне блокчейна (off-chain), а в блокчейне записывается
            только факт владения и метаданные.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

