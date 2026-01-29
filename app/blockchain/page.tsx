'use client'

import { motion } from 'framer-motion'
import { BlockchainChain } from '@/components/BlockchainChain'
import { MiningVisualization } from '@/components/MiningVisualization'
import { Shield, Users, Lock, Network } from 'lucide-react'
import { useEffect } from 'react'

export default function BlockchainPage() {
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
                <strong className="text-blue-600 dark:text-blue-400">1. Транзакции</strong> — пользователи создают транзакции (переводы, операции). 
                Например, Алиса хочет отправить Бобу 10 TON. Она создаёт транзакцию с указанием адреса Боба и суммы.
              </p>
              <p>
                <strong className="text-blue-600 dark:text-blue-400">2. Блоки</strong> — транзакции группируются в блоки. 
                Один блок может содержать сотни или тысячи транзакций. Это похоже на страницу в книге, где записано много операций.
              </p>
              <p>
                <strong className="text-blue-600 dark:text-blue-400">3. Майнинг</strong> — майнеры проверяют транзакции в блоке и решают математическую задачу, 
                чтобы найти правильный хеш. Это требует больших вычислительных ресурсов и времени.
              </p>
              <p>
                <strong className="text-blue-600 dark:text-blue-400">4. Хеширование</strong> — каждый блок получает уникальный хеш (цифровую подпись), 
                который зависит от данных блока и хеша предыдущего блока. Если изменить хотя бы один символ в данных, хеш полностью изменится.
              </p>
              <p>
                <strong className="text-blue-600 dark:text-blue-400">5. Цепочка</strong> — блоки связываются через хеш предыдущего блока. 
                Это создаёт цепочку, где каждый блок «знает» о предыдущем. Если кто-то попытается изменить старый блок, нарушится связь со всеми последующими блоками.
              </p>
              <p>
                <strong className="text-blue-600 dark:text-blue-400">6. Валидация</strong> — сеть проверяет корректность каждого блока. 
                Если блок прошёл проверку, он добавляется в цепочку, и транзакции считаются подтверждёнными.
              </p>
            </div>
            <div className="mt-8">
              <div className="relative rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900/50 aspect-video flex items-center justify-center">
                <img
                  src="/blockchain-visualization.jpg"
                  alt="Визуализация блокчейна"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <span className="text-sm">Здесь будет картинка блокчейна</span>
                </div>
              </div>
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
                Блокчейн безопасен благодаря нескольким механизмам. Во-первых, если кто-то попытается изменить данные в блоке, изменится его хеш. 
                Это нарушит связь с последующими блоками, и сеть отклонит изменение, потому что хеши не будут совпадать.
              </p>
              <p>
                Во-вторых, для успешной атаки нужно изменить все блоки после изменённого и получить согласие большинства узлов сети — это практически невозможно. 
                В сети Bitcoin, например, тысячи майнеров постоянно проверяют цепочку. Чтобы обмануть сеть, нужно контролировать более 50% вычислительной мощности, 
                что требует огромных затрат и технически очень сложно.
              </p>
              <p>
                В-третьих, каждый блок содержит хеш предыдущего блока. Это создаёт «цепочку доверия»: если изменить один блок, 
                нужно пересчитать все последующие блоки, что требует невероятных вычислительных ресурсов.
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
          <h2 id="майнинг" className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Как блокчейн связан с майнингом?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-6">
            <p>
              <strong className="text-blue-600 dark:text-blue-400">Майнинг</strong> — это процесс, который позволяет добавлять новые блоки в блокчейн. 
              Без майнинга (или альтернативных механизмов консенсуса) блокчейн не может существовать, потому что некому будет проверять и записывать транзакции.
            </p>
            <p>
              Представьте блокчейн как книгу записей, а майнеров — как писателей, которые проверяют каждую страницу перед тем, как её добавить. 
              Майнеры решают сложные математические задачи, чтобы доказать, что они потратили вычислительные ресурсы на проверку транзакций.
            </p>
            <p>
              Когда майнер находит решение, он предлагает новый блок сети. Если блок корректен, он добавляется в цепочку, 
              а майнер получает награду (обычно в виде криптовалюты). Это называется <strong>Proof of Work</strong> (доказательство работы).
            </p>
            <p>
              Без майнинга транзакции не будут подтверждаться, блоки не будут добавляться, и блокчейн остановится. 
              Майнинг — это «двигатель» блокчейна, который обеспечивает его работу и безопасность.
            </p>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Какие вычисления производятся при майнинге?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                При майнинге майнеры выполняют множество криптографических вычислений для поиска правильного <strong>nonce</strong> (число, используемое один раз) — значения, которое при добавлении к данным блока даёт хеш, удовлетворяющий условию сложности сети.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Процесс включает:
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1 ml-2">
                <li><strong>Хеширование:</strong> преобразование данных блока (транзакции, предыдущий хеш, nonce) в хеш с помощью алгоритма SHA-256</li>
                <li><strong>Проверка сложности:</strong> проверка, начинается ли полученный хеш с определённого количества нулей (например, с 18-20 нулей)</li>
                <li><strong>Перебор nonce:</strong> если хеш не подходит, майнер меняет nonce и повторяет вычисления</li>
                <li><strong>Подтверждение:</strong> когда найден подходящий хеш, блок предлагается сети для проверки и добавления в цепочку</li>
              </ul>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                Чем больше вычислительной мощности использует майнер, тем выше вероятность найти правильный nonce первым и получить награду.
              </p>
            </div>
          </div>
          <MiningVisualization />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12"
        >
          <BlockchainChain />
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

