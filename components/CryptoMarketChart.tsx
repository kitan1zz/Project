'use client'

import { motion } from 'framer-motion'

interface CryptoData {
  name: string
  percentage: number
  marketCap: number // в миллиардах долларов
  color: string
  colorDark: string
}

const cryptoData: CryptoData[] = [
  { name: 'Bitcoin', percentage: 52.5, marketCap: 1050, color: '#f59e0b', colorDark: '#fbbf24' },
  { name: 'Ethereum', percentage: 17.2, marketCap: 344, color: '#8b5cf6', colorDark: '#a78bfa' },
  { name: 'TON', percentage: 3.8, marketCap: 76, color: '#0ea5e9', colorDark: '#38bdf8' },
  { name: 'Litecoin', percentage: 1.2, marketCap: 24, color: '#10b981', colorDark: '#34d399' },
  { name: 'Другие', percentage: 25.3, marketCap: 506, color: '#6b7280', colorDark: '#9ca3af' },
]

function createPiePath(data: CryptoData[], index: number, radius: number): string {
  let startAngle = 0
  for (let i = 0; i < index; i++) {
    startAngle += (data[i].percentage / 100) * 360
  }
  
  const percentage = data[index].percentage
  const endAngle = startAngle + (percentage / 100) * 360
  
  const startAngleRad = (startAngle - 90) * (Math.PI / 180)
  const endAngleRad = (endAngle - 90) * (Math.PI / 180)
  
  const x1 = 200 + radius * Math.cos(startAngleRad)
  const y1 = 200 + radius * Math.sin(startAngleRad)
  const x2 = 200 + radius * Math.cos(endAngleRad)
  const y2 = 200 + radius * Math.sin(endAngleRad)
  
  const largeArcFlag = percentage > 50 ? 1 : 0
  
  return `M 200 200 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
}

export function CryptoMarketChart() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 my-8">
      <div className="w-full max-w-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Pie Chart */}
          <div className="w-full flex flex-col items-center justify-center">
            {/* Labels above the circle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Общий рынок
              </h3>
              <p className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                $2,000 млрд
              </p>
            </motion.div>
            
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              className="w-full max-w-[400px] h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {cryptoData.map((item, index) => (
                <motion.path
                  key={item.name}
                  d={createPiePath(cryptoData, index, 120)}
                  fill={item.color}
                  className="dark:hidden"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                />
              ))}
              {cryptoData.map((item, index) => (
                <motion.path
                  key={`dark-${item.name}`}
                  d={createPiePath(cryptoData, index, 120)}
                  fill={item.colorDark}
                  className="hidden dark:block"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                />
              ))}
              {/* Center circle for donut effect */}
              <circle cx="200" cy="200" r="60" fill="white" className="dark:fill-gray-800" />
            </svg>
          </div>
          
          {/* Legend */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Распределение рынка криптовалют
            </h3>
            {cryptoData.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    ${item.marketCap} млрд
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
