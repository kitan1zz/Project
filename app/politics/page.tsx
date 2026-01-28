'use client'

import { HeroSection } from '@/components/HeroSection'
import { FadeInOnScroll } from '@/components/FadeInOnScroll'
import { InfoCard } from '@/components/InfoCard'
import { Landmark, Globe, CreditCard, Scale } from 'lucide-react'

export default function PoliticsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Крипта в политике"
        subtitle="Как государства и публичные фигуры влияют на криптовалюты — без «политики ради политики»"
      />

      <div className="container mx-auto px-4 py-16 space-y-12">
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Почему политика вообще важна для крипты?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Криптовалюты живут в реальном мире: есть законы, налоги, ограничения банков и правила бирж.
              Поэтому новости о регулировании часто влияют на цену и поведение рынка.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Важно понимать причинно‑следственную связь: не «кто прав», а <strong>какие решения</strong> меняют доступность крипты для людей и бизнеса.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <FadeInOnScroll delay={0.1}>
            <InfoCard
              title="Регулирование"
              description="Государства могут разрешать/ограничивать биржи, вводить правила для стейблкоинов, требовать идентификацию пользователей и отчётность."
              icon={Scale}
              variant="info"
            />
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <InfoCard
              title="Санкции и контроль капитала"
              description="Ограничения на переводы и доступ к финансовым сервисам меняют спрос на альтернативные способы расчётов, включая криптовалюты."
              icon={Landmark}
              variant="warning"
            />
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll delay={0.25}>
          <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Использование криптовалют правительствами
            </h2>
            <div className="space-y-6 mb-8">
              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Bitcoin как законное платёжное средство</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  В 2021 году Сальвадор стал первой страной, которая приняла Bitcoin в качестве законного платёжного средства наряду с долларом США. 
                  Центральноафриканская Республика последовала этому примеру в 2022 году, но позже отменила решение.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Международный валютный фонд (МВФ) выступил против таких решений, требуя от стран отменить принятие криптовалют как законного платёжного средства в обмен на кредиты.
                </p>
              </div>

              <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Украина и криптовалютные пожертвования</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Во время вторжения России в 2022 году Украина начала принимать пожертвования в криптовалюте, включая Bitcoin. 
                  По данным официальных лиц, 40% поставщиков военной техники были готовы принимать криптовалюты напрямую, без конвертации в евро или доллары.
                </p>
              </div>

              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Стратегический резерв США</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  В 2024 году президент США Дональд Трамп объявил о планах создать стратегический национальный резерв Bitcoin. 
                  К 2023 году США уже были одним из крупнейших держателей криптовалюты в мире, владея $2 миллиардами в Bitcoin, 
                  конфискованными в ходе крупных судебных дел.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  В марте 2025 года было объявлено, что стратегический резерв может включать не только Bitcoin, но и Ethereum, XRP, Solana и Cardano.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900 dark:text-white">
              Примеры влияния политики на крипту
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">США и заявления политиков</h3>
                </div>
                
                {/* Political Image */}
                <div className="mb-4 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                  <img
                    src="/trump-crypto-tweet.jpg"
                    alt="Трамп комментирует криптовалюту"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  В 2024 году криптовалюта впервые стала основной темой политических кампаний в США. 
                  Заявления политиков (например, Трамп, Роберт Кеннеди-младший, Рон Десантис) могут усиливать ожидания по регулированию.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Согласно опросу Gemini, 73% американцев, владеющих криптовалютой, планируют учитывать позицию кандидата по крипте при голосовании. 
                  Криптовалютная индустрия внесла треть всех корпоративных пожертвований в супер-PAC во время выборов 2024 года.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Дубай и оплата криптой</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Некоторые юрисдикции активно привлекают бизнес: дают понятные правила, лицензии, пилотные проекты
                  и иногда позволяют оплату отдельных услуг с использованием крипты.
                </p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  Идея: «понятные правила» повышают доверие и стимулируют развитие сервисов.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Landmark className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Россия: не платёжное средство</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  В РФ криптовалюта не является законным платёжным средством, но существуют способы обмена и покупки,
                  а также обсуждаются режимы для экспериментов и регулирования.
                </p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  Идея: статус в законе влияет на то, как крипта используется в быту и бизнесе.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.3}>
          <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Криптовалюта как политическая тема
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                В 2024 году криптовалюта стала одним из основных тем политических кампаний. 
                Кандидаты в президенты США, включая Роберта Кеннеди-младшего (демократ) и Рона Десантиса (республиканец), 
                заявили о поддержке Bitcoin. Ранее поддержку криптовалюте выражал Эндрю Янг.
              </p>
              <p>
                Лидеры разных стран также высказывали свои позиции по Bitcoin. Неодобрение выражали Олаф Шольц (Германия), 
                Джо Байден и Дональд Трамп (позже изменил мнение). Трамп пообещал создать стратегический национальный резерв Bitcoin, 
                а его вице-президентский кандидат JD Вэнс стал первым известным владельцем Bitcoin, баллотирующимся на пост вице-президента.
              </p>
              <p>
                В США криптовалютные пожертвования в политические кампании разрешены на федеральных выборах с 2014 года. 
                В 2022 году кампания по переизбранию губернатора Колорадо Джареда Полиса официально принимала Bitcoin и другие криптовалюты.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.35}>
          <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              Главное, что стоит запомнить
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>1) Регулирование влияет на доступ к биржам, кошелькам и платежам.</li>
              <li>2) Рынок реагирует на ожидания: новости могут двигать цену даже до реальных изменений.</li>
              <li>3) Государства начинают использовать криптовалюты для различных целей: от законного платёжного средства до стратегических резервов.</li>
              <li>4) Позиция политиков по криптовалюте становится важным фактором для избирателей, особенно среди владельцев криптовалют.</li>
            </ul>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  )
}

