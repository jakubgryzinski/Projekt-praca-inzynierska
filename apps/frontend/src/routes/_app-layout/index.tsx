import { createFileRoute } from '@tanstack/react-router'

import { PageContent } from '@/domains/dashboard/components/PageContent'

export const Route = createFileRoute('/_app-layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PageContent />
}
