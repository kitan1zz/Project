import { NextRequest, NextResponse } from 'next/server'

// In-memory storage для демонстрации
let nfts = [
  { id: '1', name: 'Цифровая картина #1', owner: 'Алиса', image: '🎨' },
  { id: '2', name: 'Виртуальный дом', owner: 'Боб', image: '🏠' },
  { id: '3', name: 'Коллекционная карта', owner: 'Чарли', image: '🃏' },
]

let transactions: Array<{
  id: string
  from: string
  to: string
  nftId: string
  status: 'pending' | 'confirmed' | 'failed'
  timestamp: number
}> = []

export async function GET() {
  return NextResponse.json({ nfts, transactions })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nftId, from, to } = body

    if (!nftId || !from || !to) {
      return NextResponse.json(
        { error: 'Необходимы параметры: nftId, from, to' },
        { status: 400 }
      )
    }

    const nft = nfts.find((n) => n.id === nftId)
    if (!nft) {
      return NextResponse.json({ error: 'NFT не найден' }, { status: 404 })
    }

    if (nft.owner !== from) {
      return NextResponse.json(
        { error: 'Пользователь не является владельцем NFT' },
        { status: 403 }
      )
    }

    // Создаём транзакцию
    const transaction = {
      id: `tx_${Date.now()}`,
      from,
      to,
      nftId,
      status: 'pending' as const,
      timestamp: Date.now(),
    }

    transactions.unshift(transaction)

    // Симулируем обработку (в реальности здесь была бы валидация блокчейна)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Обновляем владельца
    nfts = nfts.map((n) => (n.id === nftId ? { ...n, owner: to } : n))

    // Обновляем статус транзакции
    transaction.status = 'confirmed'

    return NextResponse.json({
      success: true,
      transaction,
      nfts,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Ошибка при обработке запроса' },
      { status: 500 }
    )
  }
}

export async function DELETE() {
  // Сброс демо-данных
  nfts = [
    { id: '1', name: 'Цифровая картина #1', owner: 'Алиса', image: '🎨' },
    { id: '2', name: 'Виртуальный дом', owner: 'Боб', image: '🏠' },
    { id: '3', name: 'Коллекционная карта', owner: 'Чарли', image: '🃏' },
  ]
  transactions = []
  return NextResponse.json({ success: true, message: 'Данные сброшены' })
}

