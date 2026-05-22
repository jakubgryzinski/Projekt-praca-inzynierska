import { createFileRoute } from '@tanstack/react-router'

import { PageContent } from '@/domains/listing/components/PageContent'

export const Route = createFileRoute('/_app-layout/listing/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PageContent />
}
