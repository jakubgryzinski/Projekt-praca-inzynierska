import { useNavigate } from '@tanstack/react-router'
import type { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'

export function Header() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  function onLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <header className='border-b bg-background/95'>
      <nav className='mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4'>
        <ul className='flex items-center gap-1'>
          <li>
            <Button variant='ghost' onClick={() => navigate({ to: '/' })}>
              {t('navigation.dashboard')}
            </Button>
          </li>
          <li>
            <Button variant='ghost' onClick={() => navigate({ to: '/listings' })}>
              {t('navigation.listings')}
            </Button>
          </li>
        </ul>
        <select
          aria-label={t('common.language')}
          className='h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'
          value={i18n.resolvedLanguage ?? i18n.language}
          onChange={onLanguageChange}
        >
          <option value='en'>EN</option>
          <option value='pl'>PL</option>
        </select>
      </nav>
    </header>
  )
}
