'use client'

import { motion } from 'framer-motion'
import { Image, Fingerprint, ShoppingCart, FileText, Gift, Lock, Zap } from 'lucide-react'
import { useEffect } from 'react'
import { NFTPrice } from '@/components/NFTPrice'

export default function NFTPage() {
  // Подсветка слова при переходе по hash-якорю
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          element.classList.add('highlight-term')
          setTimeout(() => element.classList.remove('highlight-term'), 3000)
        }
      }, 300)
    }
  }, [])
  const concepts = [
    {
      icon: Fingerprint,
      title: 'Уникальность',
      description: 'Каждый NFT имеет уникальный идентификатор и не может быть заменён другим токеном',
      color: 'bg-purple-500',
    },
    {
      icon: Image,
      title: 'Цифровое искусство',
      description: 'NFT часто используются для цифрового искусства, коллекций и виртуальных предметов',
      color: 'bg-pink-500',
    },
    {
      icon: ShoppingCart,
      title: 'Владение',
      description: 'NFT доказывает ваше право собственности на цифровой актив в блокчейне',
      color: 'bg-blue-500',
    },
    {
      icon: FileText,
      title: 'Метаданные',
      description: 'NFT содержит информацию об активе: название, описание, ссылку на файл и историю владения',
      color: 'bg-green-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Что такое NFT?
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            NFT (Non-Fungible Token) — это уникальный токен в блокчейне, который представляет право собственности на цифровой актив
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
              Простое объяснение
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Представьте, что у вас есть картина. У неё есть сертификат подлинности, который доказывает, что картина принадлежит вам.
              </p>
              <p>
                NFT — это такой же сертификат, но для цифровых активов. Он хранится в блокчейне и не может быть подделан или скопирован.
              </p>
              <p>
                <strong className="text-purple-600 dark:text-purple-400">Важно:</strong> NFT не хранит сам файл (изображение, видео и т.д.), а только ссылку на него и метаданные.
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
              Структура NFT
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Уникальный ID
                </p>
                <p className="font-mono text-sm text-gray-900 dark:text-white">
                  0x1234...5678
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Владелец
                </p>
                <p className="font-mono text-sm text-gray-900 dark:text-white">
                  0xabcd...efgh
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Метаданные
                </p>
                <p className="text-sm text-gray-900 dark:text-white">
                  Название, описание, ссылка на файл
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  История транзакций
                </p>
                <p className="text-sm text-gray-900 dark:text-white">
                  Все передачи владения записаны в блокчейне
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Примеры NFT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900">
              <div className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-3">Ethereum</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Bored Ape Yacht Club</h3>
              
              <div className="relative mb-4 rounded-lg overflow-hidden border-2 border-purple-200 dark:border-purple-800">
                <img
                  src="/bayc-example.jpg"
                  alt="Bored Ape Yacht Club NFT"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              
              <div className="mb-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <NFTPrice 
                  eth={10}
                  usd={30000}
                  colorClass="text-purple-600 dark:text-purple-400"
                />
              </div>
              
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                BAYC — известная коллекция NFT, где токен может работать не только как «картинка», но и как пропуск: доступ к сообществу, мероприятиям, бонусам.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-gradient-to-br from-white to-amber-50 dark:from-gray-800 dark:to-gray-900">
              <div className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-3">Ethereum</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cryptopunks</h3>
              
              <div className="relative mb-4 rounded-lg overflow-hidden border-2 border-amber-200 dark:border-amber-800">
                <img
                  src="/cryptopunk-example.jpg"
                  alt="Cryptopunks NFT"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              
              <div className="mb-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <NFTPrice 
                  eth={33.3}
                  usd={100000}
                  colorClass="text-amber-600 dark:text-amber-400"
                />
              </div>
              
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Даже простая 24-пиксельная картинка может стоить десятки или сотни тысяч долларов благодаря уникальности и истории NFT. Cryptopunks — одна из первых коллекций NFT.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Ethereum</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Другие коллекции</h3>
              
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                На рынке NFT существуют тысячи коллекций с разными ценами и концепциями.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Azuki: Ξ 1.3 (~$4,000)</li>
                <li>• Pudgy Penguins: Ξ 4.3 (~$13,000)</li>
                <li>• Doodles: Ξ 0.5 (~$1,500)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {concepts.map((concept, index) => {
            const Icon = concept.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`${concept.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {concept.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {concept.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Как работает передача владения?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Создание транзакции
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Владелец NFT создаёт транзакцию передачи, указывая адрес получателя и ID токена
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Подпись и отправка
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Транзакция подписывается приватным ключом владельца и отправляется в сеть блокчейна
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Валидация
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Сеть проверяет, что отправитель действительно владеет NFT и имеет право на передачу
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Обновление записи
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  После подтверждения запись в блокчейне обновляется: новый владелец получает право собственности
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Примечание:</strong> Файл (изображение, видео) обычно хранится вне блокчейна (off-chain) на IPFS или других хранилищах. 
              В блокчейне записывается только факт владения и ссылка на файл.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mt-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            NFT в Telegram (подарки) и TON
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Telegram интегрирован с блокчейном TON, поэтому некоторые NFT можно получать и отправлять прямо внутри мессенджера — почти как обычные сообщения.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-4">
                <Gift className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Что такое «подарки» Telegram?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Это NFT, которые можно подарить другому пользователю. Файл/картинка обычно хранится вне блокчейна, а в блокчейне записан факт владения и метаданные.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ограничения</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Передача требует кошелька TON и комиссии. Плюс NFT «привязаны» к экосистеме, в которой их создали.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Возможности</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Очень простой UX: многие действия понятны даже новичкам, потому что интерфейс знаком по Telegram.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

