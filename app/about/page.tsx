'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, Users, Code } from 'lucide-react'

export default function AboutPage() {
  const goals = [
    {
      icon: BookOpen,
      title: 'Образование',
      description: 'Простое объяснение сложных технологий для начинающих',
    },
    {
      icon: Target,
      title: 'Практика',
      description: 'Интерактивные демонстрации для лучшего понимания',
    },
    {
      icon: Users,
      title: 'Доступность',
      description: 'Материалы адаптированы для школьников и новичков',
    },
    {
      icon: Code,
      title: 'Технологии',
      description: 'Использование современных инструментов разработки',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            О проекте
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Образовательный веб-сайт для изучения блокчейна, NFT и экосистемы TON
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Цель проекта
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Этот проект создан для того, чтобы сделать технологии блокчейна, NFT и экосистему TON 
              понятными для людей без технического бэкграунда. Особое внимание уделяется школьникам, 
              которые только начинают знакомиться с криптовалютой и децентрализованными технологиями.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Мы используем визуализации, анимации и интерактивные демонстрации, чтобы объяснить 
              сложные концепции простым языком. Каждая страница содержит практические примеры и 
              наглядные иллюстрации процессов.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => {
              const Icon = goal.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <Icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {goal.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Технологии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Next.js 14 (App Router)</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Backend
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Next.js API Routes</li>
                  <li>• In-memory data storage</li>
                  <li>• NFT simulation logic</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">
              Особенности
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Визуализация работы блокчейна с анимацией</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Подробное объяснение NFT и передачи владения</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Информация о TON и интеграции с Telegram</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Интерактивная демонстрация передачи NFT</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Поддержка светлой и тёмной темы</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Адаптивный дизайн для всех устройств</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

