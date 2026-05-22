import { createFileRoute } from '@tanstack/react-router'

import { PageContent } from '@/domains/listings/features/vehicles/components/PageContent'
import { VehiclesSubHeader } from '@/domains/listings/features/vehicles/components/subHeader/VehiclesSubHeader'

export const Route = createFileRoute('/_app-layout/listings/_listings/vehicles')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <VehiclesSubHeader />
      <PageContent />
    </>
  )
}
