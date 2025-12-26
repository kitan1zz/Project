'use client'

import { HeroSection } from '@/components/HeroSection'
import { FadeInOnScroll } from '@/components/FadeInOnScroll'
import { InfoCard } from '@/components/InfoCard'
import { Zap, DollarSign, MessageSquare, TrendingUp } from 'lucide-react'

export default function TonEcosystemPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Экосистема TON"
        subtitle="Почему TON быстрый, дешёвый и идеально интегрирован с Telegram"
      />

      <div className="container mx-auto px-4 py-16 space-y-12">
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Почему TON быстрый?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              TON (The Open Network) использует уникальную архитектуру, которая позволяет обрабатывать 
              транзакции очень быстро. В отличие от многих других блокчейнов, TON может обрабатывать 
              миллионы транзакций в секунду благодаря технологии шардинга.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>Шардинг</strong> — это разделение блокчейна на множество параллельных цепочек, 
              каждая из которых обрабатывает свои транзакции. Это как иметь множество касс в магазине 
              вместо одной — обслуживание происходит намного быстрее!
            </p>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Низкие комиссии
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Благодаря высокой скорости обработки транзакций, комиссии в сети TON очень низкие. 
              Вы можете отправить криптовалюту или NFT за копейки, что делает TON идеальным для 
              микроплатежей и повседневного использования.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-4 mb-4">
                <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Сравнение комиссий
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    В то время как в некоторых сетях комиссия может достигать десятков долларов, 
                    в TON комиссия обычно составляет менее цента. Это делает TON доступным для всех!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Интеграция с Telegram
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              TON был создан командой Telegram, что обеспечивает глубокую интеграцию между блокчейном 
              и мессенджером. Это означает, что вы можете:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>Отправлять криптовалюту прямо в чате Telegram</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>Получать и отправлять NFT как подарки</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>Использовать криптовалюту для оплаты услуг в бота</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>Не нужно устанавливать отдельные приложения</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Всё это работает прямо в Telegram, что делает криптовалюты доступными для миллионов 
              пользователей, которые никогда раньше не использовали блокчейн.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <FadeInOnScroll delay={0.4}>
            <InfoCard
              title="Скорость"
              description="TON может обрабатывать миллионы транзакций в секунду благодаря технологии шардинга. Это делает его одним из самых быстрых блокчейнов в мире."
              icon={Zap}
              variant="success"
            />
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.5}>
            <InfoCard
              title="Доступность"
              description="Низкие комиссии и простая интеграция с Telegram делают TON доступным для обычных пользователей. Не нужно быть техническим экспертом!"
              icon={TrendingUp}
              variant="info"
            />
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll delay={0.6}>
          <div className="max-w-3xl mx-auto bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="flex items-start space-x-4">
              <MessageSquare className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Будущее децентрализованных приложений
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Благодаря интеграции с Telegram, TON открывает новые возможности для децентрализованных 
                  приложений. Разработчики могут создавать боты, которые работают с криптовалютой и NFT, 
                  делая блокчейн технологии частью повседневной жизни миллионов людей.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  )
}

