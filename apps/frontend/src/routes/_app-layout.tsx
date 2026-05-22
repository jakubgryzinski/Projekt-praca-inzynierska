import { createFileRoute, Outlet } from '@tanstack/react-router'

import { Header } from '@/shared/ui/components/Header'

export const Route = createFileRoute('/_app-layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='min-h-svh bg-background text-foreground'>
      <Header />
      <main className='mx-auto w-full max-w-5xl px-4 py-8'>
        <Outlet />
      </main>
    </div>
  )
}
