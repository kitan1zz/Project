import { redirect } from 'next/navigation'

export default function TransactionPage() {
  // Статья заменена на «Крипта в политике». Оставляем редирект, чтобы старые ссылки не ломались.
  redirect('/politics')
}

