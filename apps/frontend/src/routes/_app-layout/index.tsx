import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app-layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h3>Welcome</h3>
    </div>
  )
}
