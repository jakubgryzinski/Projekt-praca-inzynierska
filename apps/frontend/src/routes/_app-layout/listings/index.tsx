import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_app-layout/listings/')({
  beforeLoad: () => {
    throw redirect({ to: '/listings/users' })
  },
})
