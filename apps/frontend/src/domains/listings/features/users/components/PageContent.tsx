import { useTranslation } from 'react-i18next'

const MOCKED_USER_ITEMS = ['1 user item', '2 user item', '3 user item', '4 user item', '5 user item']

export function PageContent() {
  const { t } = useTranslation()

  return (
    <div className='rounded-lg border bg-card p-6 text-card-foreground shadow-sm'>
      <h3 className='text-2xl font-semibold tracking-tight'>{t('listings.users.title')}</h3>
      <ul className='mt-4 divide-y rounded-lg border'>
        {MOCKED_USER_ITEMS.map((item) => (
          <li key={item} className='px-4 py-3 text-sm text-muted-foreground'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
