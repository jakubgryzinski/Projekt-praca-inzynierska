import { createFileRoute, Outlet } from '@tanstack/react-router'

import { Header } from '@/shared/ui/components/Header'

export const Route = createFileRoute('/_app-layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
