'use client'

import { HeroSection } from '@/components/HeroSection'
import { FadeInOnScroll } from '@/components/FadeInOnScroll'
import { InfoCard } from '@/components/InfoCard'
import { MessageSquare, Gift, Lock, Zap } from 'lucide-react'

export default function TelegramTonPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="NFT в Telegram и TON"
        subtitle="Как Telegram использует TON для NFT и подарков"
      />

      <div className="container mx-auto px-4 py-16 space-y-12">
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Как Telegram использует TON?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Telegram интегрирован с блокчейном TON (The Open Network), что позволяет пользователям 
              отправлять криптовалюту, NFT и подарки прямо в мессенджере. Это делает криптовалюты 
              более доступными для обычных пользователей.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Представьте, что вы можете отправить другу NFT или криптовалюту так же просто, 
              как отправить сообщение — это именно то, что предлагает интеграция Telegram и TON.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Что такое подарки Telegram?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Подарки Telegram — это специальные NFT, которые можно отправить другому пользователю 
              в Telegram. Каждый подарок уникален и хранится в блокчейне TON, что гарантирует 
              подлинность и владение.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start space-x-4">
                <Gift className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Пример подарка
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Когда вы отправляете подарок в Telegram, создаётся NFT в блокчейне TON. 
                    Получатель становится владельцем этого NFT, и это записывается в блокчейне навсегда.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Как работает владение?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Владение NFT в Telegram работает через блокчейн TON. Когда вы получаете NFT, 
              информация о вашем владении записывается в блокчейн. Это означает:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">✓</span>
                <span>Только вы являетесь владельцем этого NFT</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">✓</span>
                <span>Владение нельзя подделать или изменить</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">✓</span>
                <span>Вы можете передать NFT другому пользователю</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">✓</span>
                <span>История владения хранится в блокчейне</span>
              </li>
            </ul>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <FadeInOnScroll delay={0.4}>
            <InfoCard
              title="Ограничения"
              description="NFT в Telegram работают только в рамках экосистемы TON. Для передачи NFT нужен кошелёк TON, и транзакции требуют оплаты комиссии (хотя она очень низкая)."
              icon={Lock}
              variant="warning"
            />
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.5}>
            <InfoCard
              title="Возможности"
              description="Благодаря интеграции с Telegram, отправка и получение NFT стало максимально простым. Не нужно устанавливать отдельные приложения — всё работает прямо в мессенджере."
              icon={Zap}
              variant="success"
            />
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  )
}

