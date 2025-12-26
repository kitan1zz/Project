'use client'

import { HeroSection } from '@/components/HeroSection'
import { SectionCard } from '@/components/SectionCard'
import { FadeInOnScroll } from '@/components/FadeInOnScroll'
import { Blocks, Coins, Image, MessageSquare, ArrowRightLeft, Zap } from 'lucide-react'

export default function Home() {
  const topics = [
    {
      title: 'Блокчейн для начинающих',
      description: 'Узнайте, что такое блок, как блоки образуют цепь, и почему данные нельзя легко изменить',
      icon: Blocks,
      href: '/blockchain',
      color: 'bg-blue-500',
    },
    {
      title: 'Криптовалюта',
      description: 'Поймите, что такое криптовалюта, как работают транзакции и почему блокчейн безопасен',
      icon: Coins,
      href: '/cryptocurrency',
      color: 'bg-green-500',
    },
    {
      title: 'NFT Объяснение',
      description: 'Узнайте, что NFT представляет на самом деле: владение, а не просто изображение',
      icon: Image,
      href: '/nft',
      color: 'bg-purple-500',
    },
    {
      title: 'NFT в Telegram и TON',
      description: 'Изучите, как Telegram использует TON, что такое подарки Telegram и как работает владение',
      icon: MessageSquare,
      href: '/telegram-ton',
      color: 'bg-cyan-500',
    },
    {
      title: 'Как работает транзакция',
      description: 'Интерактивная демонстрация процесса транзакции: от создания до подтверждения',
      icon: ArrowRightLeft,
      href: '/transaction',
      color: 'bg-orange-500',
    },
    {
      title: 'Экосистема TON',
      description: 'Почему TON быстрый, низкие комиссии и как работает интеграция с Telegram',
      icon: Zap,
      href: '/ton-ecosystem',
      color: 'bg-pink-500',
    },
  ]

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Блокчейн и NFT"
        subtitle="Образовательный портал для изучения основ блокчейна, NFT и экосистемы TON"
        description="Простые объяснения сложных технологий для начинающих. Визуализации, анимации и интерактивные примеры помогут вам понять, как это работает."
      />

      <div className="container mx-auto px-4 py-16">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Что вы узнаете
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Изучите основы блокчейна, криптовалют, NFT и TON через понятные объяснения и визуализации
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {topics.map((topic, index) => (
            <SectionCard
              key={index}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              href={topic.href}
              color={topic.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

