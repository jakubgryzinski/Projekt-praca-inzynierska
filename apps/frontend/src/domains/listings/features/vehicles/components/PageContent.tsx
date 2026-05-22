import { useTranslation } from 'react-i18next'

const MOCKED_VEHICLE_ITEMS = ['1 vehicle item', '2 vehicle item', '3 vehicle item', '4 vehicle item', '5 vehicle item']

export function PageContent() {
  const { t } = useTranslation()

  return (
    <div className='rounded-lg border bg-card p-6 text-card-foreground shadow-sm'>
      <h3 className='text-2xl font-semibold tracking-tight'>{t('listings.vehicles.title')}</h3>
      <ul className='mt-4 divide-y rounded-lg border'>
        {MOCKED_VEHICLE_ITEMS.map((item) => (
          <li key={item} className='px-4 py-3 text-sm text-muted-foreground'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
