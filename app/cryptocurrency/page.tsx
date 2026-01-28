'use client'

import { HeroSection } from '@/components/HeroSection'
import { FadeInOnScroll } from '@/components/FadeInOnScroll'
import { InfoCard } from '@/components/InfoCard'
import { CryptoMarketChart } from '@/components/CryptoMarketChart'
import { ArrowRight, Shield, Network, Zap, Wallet } from 'lucide-react'
import { useEffect } from 'react'

export default function CryptocurrencyPage() {
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
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Криптовалюта"
        subtitle="Что такое криптовалюта, как работает сеть и почему транзакции считаются надёжными"
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

        <FadeInOnScroll delay={0.15}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Как работает сеть (очень простыми словами)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Криптовалюта — это не «файл с монетами». Это правила сети и общий журнал записей, где указано, у кого сколько средств.
              Чтобы никто не мог «нарисовать себе баланс», сеть проверяет транзакции и записывает их в блоки.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              В разных сетях проверкой занимаются <strong>майнеры</strong> (доказательство работы, Proof of Work) или <strong>валидаторы</strong> (доказательство доли, Proof of Stake).
              Смысл один: много независимых участников подтверждают, что транзакция корректна.
            </p>
            
            <div className="mt-8">
              <CryptoMarketChart />
            </div>
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

        <FadeInOnScroll delay={0.25}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              TON как пример современной сети
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>TON (The Open Network)</strong> — блокчейн‑сеть, которая рассчитана на высокую скорость и удобство для массовых пользователей.
                Её часто обсуждают вместе с Telegram, потому что многие сервисы в экосистеме ориентированы на простые сценарии: переводы, боты, мини‑приложения.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Если коротко: сеть подтверждает транзакции валидаторами, а пользователь видит понятный интерфейс кошелька и небольшие комиссии
                (в зависимости от нагрузки и типа операции).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div className="font-semibold text-gray-900 dark:text-white">Скорость и масштабирование</div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    TON использует архитектурные подходы (в том числе шардинг), чтобы обрабатывать много операций.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Wallet className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div className="font-semibold text-gray-900 dark:text-white">Пользовательский UX</div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Интеграции с Telegram делают вход «в крипту» проще: меньше шагов, знакомый интерфейс.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Подробнее про TON — в отдельной статье «TON» и в разделе «Экосистема TON».
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <h2 id="кошельки" className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Кошельки: горячие и холодные
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Горячие кошельки
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Горячие кошельки — это программы или приложения, которые подключены к интернету. 
                  Они удобны для частых операций: отправки и получения криптовалюты, работы с NFT, использования децентрализованных приложений.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Примеры горячих кошельков: MetaMask, Trust Wallet, кошелёк в Telegram (Telegram Wallet). 
                  Преимущество — удобство и скорость. Недостаток — меньшая безопасность, так как приватные ключи хранятся на устройстве, подключённом к интернету.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Холодные кошельки
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Холодные кошельки — это физические устройства (аппаратные кошельки) или бумажные кошельки, которые не подключены к интернету. 
                  Они используются для долгосрочного хранения больших сумм криптовалюты.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Примеры холодных кошельков: Ledger, Trezor. Преимущество — максимальная безопасность, так как приватные ключи никогда не попадают в интернет. 
                  Недостаток — менее удобны для частых операций, так как нужно физически подключить устройство.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.35}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Биржи и пополнение
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Популярные биржи
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Криптовалютные биржи — это платформы, где можно купить, продать или обменять криптовалюту. 
                  Самые популярные биржи в мире: Binance, Coinbase, Bybit, Kraken. В России популярны: Binance, Bybit, OKX.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Биржи работают как обычные обменники: вы можете купить криптовалюту за рубли, доллары или другую криптовалюту. 
                  На биржах также можно хранить криптовалюту, но это менее безопасно, чем использование собственного кошелька.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Как пополнить баланс на бирже?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Есть несколько способов пополнить баланс на бирже:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside ml-4">
                  <li>
                    <strong>Банковская карта:</strong> Самый простой способ — привязать карту и купить криптовалюту напрямую. 
                    Биржа автоматически конвертирует рубли в выбранную криптовалюту. Комиссия обычно выше, чем при других способах.
                  </li>
                  <li>
                    <strong>P2P (peer-to-peer):</strong> Покупка у другого человека через биржу. Вы выбираете продавца, переводите ему деньги 
                    (например, на карту или через СБП), а он переводит вам криптовалюту. Обычно дешевле, чем покупка через карту, но требует больше времени.
                  </li>
                  <li>
                    <strong>Перевод с другого кошелька:</strong> Если у вас уже есть криптовалюта в другом кошельке, вы можете перевести её на биржу. 
                    Для этого нужно скопировать адрес кошелька биржи и отправить криптовалюту с вашего кошелька.
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  После пополнения вы можете торговать криптовалютой на бирже или вывести её на свой кошелёк для хранения.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <FadeInOnScroll delay={0.4}>
            <InfoCard
              title="Безопасность"
              description="Блокчейн использует криптографию для защиты транзакций. Каждая транзакция подписывается цифровой подписью, что делает её практически невозможной для подделки."
              icon={Shield}
              variant="success"
            />
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.45}>
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

