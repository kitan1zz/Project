'use client'

import { HeroSection } from '@/components/HeroSection'
import { FadeInOnScroll } from '@/components/FadeInOnScroll'
import { InfoCard } from '@/components/InfoCard'
import { Coins, ArrowRight, Shield, Network } from 'lucide-react'

export default function CryptocurrencyPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Криптовалюта"
        subtitle="Поймите, что такое криптовалюта и как работают транзакции"
      />

      <div className="container mx-auto px-4 py-16 space-y-12">
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Что такое криптовалюта?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Криптовалюта — это цифровые деньги, которые существуют только в интернете. 
              В отличие от обычных денег, которые контролируются банками и правительствами, 
              криптовалюты работают на технологии блокчейн, что делает их децентрализованными.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Представьте криптовалюту как цифровые монеты, которые можно отправлять друг другу 
              через интернет без посредников. Каждая транзакция записывается в блокчейн, 
              что делает её прозрачной и безопасной.
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Как работают транзакции?
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Создание транзакции
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Вы хотите отправить криптовалюту другу. Вы создаёте транзакцию с указанием 
                  адреса получателя и суммы.
                </p>
              </div>

              <div className="flex justify-center my-4">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Отправка в сеть
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Транзакция отправляется в сеть блокчейна, где её проверяют множество компьютеров (узлов).
                </p>
              </div>

              <div className="flex justify-center my-4">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Подтверждение
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  После проверки транзакция добавляется в блок и подтверждается. 
                  Теперь ваш друг получил криптовалюту!
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <FadeInOnScroll delay={0.3}>
            <InfoCard
              title="Безопасность"
              description="Блокчейн использует криптографию для защиты транзакций. Каждая транзакция подписывается цифровой подписью, что делает её практически невозможной для подделки."
              icon={Shield}
              variant="success"
            />
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.4}>
            <InfoCard
              title="Децентрализация"
              description="Криптовалюты не контролируются одним центральным органом. Сеть состоит из множества компьютеров по всему миру, что делает её устойчивой к сбоям."
              icon={Network}
              variant="info"
            />
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  )
}

