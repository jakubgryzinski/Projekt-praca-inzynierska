import { ListingsSubHeaderLinks } from '@/domains/listings/components/subHeader/ListingsSubHeaderLinks'
import { SubHeader } from '@/shared/ui/components/SubHeader'

export function UsersSubHeader() {
  return <SubHeader links={<ListingsSubHeaderLinks />} />
}
