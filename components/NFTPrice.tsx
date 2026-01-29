'use client'

interface NFTPriceProps {
  eth?: number
  usd: number
  ton?: number
  className?: string
  colorClass?: string
}

export function NFTPrice({ 
  eth,
  usd,
  ton,
  className = '',
  colorClass = 'text-purple-600 dark:text-purple-400'
}: NFTPriceProps) {
  return (
    <div className={className}>
      <div className={`text-xs ${colorClass} mb-1`}>{ton ? 'Примерная цена' : 'Floor Price'}</div>
      <div className="flex items-center gap-2">
        <span className={`text-lg font-bold ${colorClass}`}>
          {ton 
            ? `💎 ~${ton.toLocaleString('ru-RU')} TON`
            : `Ξ ${eth?.toLocaleString('ru-RU', { maximumFractionDigits: 1 }) || '0'}`
          }
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          (~${Math.round(usd).toLocaleString('ru-RU')})
        </span>
      </div>
    </div>
  )
}
