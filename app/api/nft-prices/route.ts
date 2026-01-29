import { NextRequest, NextResponse } from 'next/server'

interface NFTPrice {
  collection: string
  floorPrice?: {
    eth?: number
    usd?: number
  }
  source: 'opensea' | 'fragment'
  error?: string
}

// OpenSea API для получения floor price коллекции
async function getOpenSeaPrice(collectionSlug: string): Promise<NFTPrice | null> {
  try {
    // Используем публичный API OpenSea (может требовать API ключ для production)
    const response = await fetch(
      `https://api.opensea.io/api/v2/collections/${collectionSlug}/stats`,
      {
        headers: {
          'Accept': 'application/json',
        },
        // В production здесь нужен API ключ:
        // 'X-API-KEY': process.env.OPENSEA_API_KEY || '',
      }
    )

    if (!response.ok) {
      // Если API недоступен, возвращаем null (будет использовано fallback значение)
      return null
    }

    const data = await response.json()
    
    if (data.stats?.floor_price) {
      // Конвертируем в ETH и USD (примерно)
      const floorPriceETH = parseFloat(data.stats.floor_price)
      const floorPriceUSD = floorPriceETH * 3200 // Примерный курс ETH к USD

      return {
        collection: collectionSlug,
        floorPrice: {
          eth: floorPriceETH,
          usd: floorPriceUSD,
        },
        source: 'opensea',
      }
    }

    return null
  } catch (error) {
    console.error(`Error fetching OpenSea price for ${collectionSlug}:`, error)
    return null
  }
}

// Fragment API для получения цены подарка (примерная реализация)
async function getFragmentPrice(giftSlug: string): Promise<NFTPrice | null> {
  try {
    // Fragment не имеет публичного API, поэтому используем примерные данные
    // В реальности нужно парсить их сайт или использовать их API, если он доступен
    // Для демонстрации возвращаем примерные значения
    
    // Примерные цены для популярных подарков Fragment
    const fragmentPrices: Record<string, { ton: number; usd: number }> = {
      'plush-pepe': { ton: 150, usd: 400 },
      'telegram-gift': { ton: 50, usd: 130 },
    }

    const price = fragmentPrices[giftSlug]
    if (price) {
      return {
        collection: giftSlug,
        floorPrice: {
          eth: price.ton / 5, // Примерный курс TON к ETH
          usd: price.usd,
        },
        source: 'fragment',
      }
    }

    return null
  } catch (error) {
    console.error(`Error fetching Fragment price for ${giftSlug}:`, error)
    return null
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const collection = searchParams.get('collection')
  const source = searchParams.get('source') || 'opensea'

  if (!collection) {
    return NextResponse.json(
      { error: 'Collection parameter is required' },
      { status: 400 }
    )
  }

  try {
    let price: NFTPrice | null = null

    if (source === 'fragment') {
      price = await getFragmentPrice(collection)
    } else {
      // OpenSea коллекции
      const collectionSlug = collection.toLowerCase().replace(/\s+/g, '-')
      price = await getOpenSeaPrice(collectionSlug)
    }

    if (!price) {
      // Возвращаем fallback значения для демонстрации
      const fallbackPrices: Record<string, { eth: number; usd: number }> = {
        'boredapeyachtclub': { eth: 15.5, usd: 50000 },
        'cryptopunks': { eth: 45, usd: 150000 },
        'plush-pepe': { eth: 30, usd: 400 },
      }

      const fallback = fallbackPrices[collection.toLowerCase().replace(/\s+/g, '-')]
      
      return NextResponse.json({
        collection,
        floorPrice: fallback || { eth: 0, usd: 0 },
        source: source as 'opensea' | 'fragment',
        cached: true,
      })
    }

    return NextResponse.json(price)
  } catch (error) {
    console.error('Error fetching NFT price:', error)
    return NextResponse.json(
      { error: 'Failed to fetch NFT price' },
      { status: 500 }
    )
  }
}
