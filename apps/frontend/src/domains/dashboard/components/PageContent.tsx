import { useTranslation } from 'react-i18next'

export function PageContent() {
  const { t } = useTranslation()

  return (
    <div className='rounded-lg border bg-card p-6 text-card-foreground shadow-sm'>
      <h3 className='text-2xl font-semibold tracking-tight'>{t('dashboard.title')}</h3>
    </div>
  )
}
