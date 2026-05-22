import { Link } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export function ListingsSubHeaderLinks() {
  return (
    <>
      <li>
        <Button asChild variant='ghost'>
          <Link to='/listings/users'>Users</Link>
        </Button>
      </li>
      <li>
        <Button asChild variant='ghost'>
          <Link to='/listings/vehicles'>Vehicles</Link>
        </Button>
      </li>
    </>
  )
}
