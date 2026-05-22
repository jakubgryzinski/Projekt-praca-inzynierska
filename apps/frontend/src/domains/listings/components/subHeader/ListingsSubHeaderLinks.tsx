import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'

export function ListingsSubHeaderLinks() {
  const { t } = useTranslation()

  return (
    <>
      <li>
        <Button asChild variant='ghost'>
          <Link to='/listings/users'>{t('listings.navigation.users')}</Link>
        </Button>
      </li>
      <li>
        <Button asChild variant='ghost'>
          <Link to='/listings/vehicles'>{t('listings.navigation.vehicles')}</Link>
        </Button>
      </li>
    </>
  )
}
