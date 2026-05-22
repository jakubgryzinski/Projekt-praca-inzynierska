import { ListingsSubHeaderLinks } from '@/domains/listings/components/subHeader/ListingsSubHeaderLinks'
import { SubHeader } from '@/shared/ui/components/SubHeader'

export function VehiclesSubHeader() {
  return <SubHeader links={<ListingsSubHeaderLinks />} />
}
