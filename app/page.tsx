'use client'

import { ClickableTerm } from '@/components/ClickableTerm'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-24 -left-24 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl opacity-25"
            animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl opacity-25"
            animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-14 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Криптообразование
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Образовательный сайт, который простым языком объясняет основы криптовалют, блокчейна, NFT и экосистемы TON. 
              Мы рассказываем, как работают эти технологии, почему они важны и как их использовать в повседневной жизни.
            </p>
            <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              В текстах термины подсвечены синим — нажимайте на них, чтобы перейти к подробному объяснению.
            </p>
          </motion.div>

          <div className="mt-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/70 dark:bg-gray-900/40 backdrop-blur rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Блокчейн</h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <ClickableTerm term="Блокчейн" articlePath="/blockchain" tooltip="Распределённая база данных" /> — это технология, которая позволяет хранить информацию в виде цепочки блоков. 
                Каждый <ClickableTerm term="блок" articlePath="/blockchain" tooltip="Единица данных в блокчейне" /> содержит список транзакций и связан с предыдущим блоком через <ClickableTerm term="хэш" articlePath="/blockchain" tooltip="Цифровая подпись блока" />. 
                Благодаря этому цепочка становится неизменяемой: если кто-то попытается изменить старый блок, нарушится связь со всеми последующими блоками. 
                Для добавления новых блоков используется процесс <ClickableTerm term="майнинг" articlePath="/blockchain" highlightId="майнинг" tooltip="Процесс создания новых блоков" />, 
                где майнеры решают сложные математические задачи, чтобы доказать корректность транзакций и получить право добавить блок в цепочку.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/70 dark:bg-gray-900/40 backdrop-blur rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Криптовалюта</h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <ClickableTerm term="Криптовалюта" articlePath="/cryptocurrency" tooltip="Цифровые деньги" /> — это цифровые деньги, которые существуют только в интернете и работают на технологии блокчейн. 
                В отличие от обычных денег, криптовалюта не контролируется банками или правительствами. Для хранения криптовалюты используются <ClickableTerm term="кошельки" articlePath="/cryptocurrency" highlightId="кошельки" tooltip="Программы для хранения криптовалюты" /> — 
                специальные программы или устройства, которые хранят ваши приватные ключи. Когда вы отправляете криптовалюту, создаётся <ClickableTerm term="транзакция" articlePath="/cryptocurrency" tooltip="Операция перевода средств" />, 
                которая проверяется сетью и записывается в блокчейн. Для проверки транзакций в разных сетях используются <ClickableTerm term="майнеры" articlePath="/blockchain" highlightId="майнинг" tooltip="Участники сети, проверяющие транзакции" /> или <ClickableTerm term="валидаторы" articlePath="/cryptocurrency" tooltip="Участники сети, подтверждающие транзакции" />.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/70 dark:bg-gray-900/40 backdrop-blur rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">NFT</h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <ClickableTerm term="NFT" articlePath="/nft" tooltip="Non-Fungible Token" /> (Non-Fungible Token) — это уникальный токен в блокчейне, который представляет право собственности на цифровой актив. 
                В отличие от криптовалюты, где все монеты одинаковы, каждый NFT уникален и не может быть заменён другим. 
                NFT не хранит сам файл (изображение, видео), а только ссылку на него и метаданные. 
                Когда вы покупаете или получаете NFT, информация о <ClickableTerm term="владении" articlePath="/nft" tooltip="Право собственности на NFT" /> записывается в блокчейн, 
                и это можно проверить в любой момент. NFT используются для цифрового искусства, коллекций, игровых предметов и даже как пропуски в закрытые сообщества. 
                Например, коллекция Bored Ape Yacht Club (BAYC) на Ethereum даёт владельцам доступ к эксклюзивным событиям, а NFT в сети TON можно отправлять как подарки в Telegram.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/70 dark:bg-gray-900/40 backdrop-blur rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">TON</h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <ClickableTerm term="TON" articlePath="/ton" tooltip="The Open Network" /> (The Open Network) — это быстрый и масштабируемый блокчейн, созданный для интеграции с Telegram. 
                TON использует технологию <ClickableTerm term="шардинга" articlePath="/ton-ecosystem" tooltip="Разделение блокчейна на части" />, 
                что позволяет обрабатывать миллионы транзакций в секунду. Благодаря интеграции с <ClickableTerm term="Telegram" articlePath="/ton" tooltip="Мессенджер с поддержкой криптовалюты" />, 
                пользователи могут отправлять криптовалюту, NFT и использовать децентрализованные приложения прямо в мессенджере, не устанавливая отдельные программы. 
                Это делает криптовалюту доступной для миллионов обычных пользователей, которые раньше не сталкивались с блокчейном.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 backdrop-blur p-6">
            <div className="text-sm font-semibold text-gray-900 dark:text-white">Как пользоваться сайтом</div>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              В текстах термины подсвечены <span className="text-blue-600 dark:text-blue-400 font-semibold">синим</span> — нажимайте на них, чтобы перейти к теме и закрепить понятия.
              Для скриншотов и конспектов удобно брать блоки «Определение» и «Пример» внутри статей.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
