import { redirect } from 'next/navigation'

export default function TelegramTonPage() {
  // Страница объединена со статьёй NFT. Оставляем редирект, чтобы старые ссылки не ломались.
  redirect('/nft')
}

