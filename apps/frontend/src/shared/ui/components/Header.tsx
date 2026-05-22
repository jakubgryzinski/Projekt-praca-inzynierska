import { useNavigate } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export function Header() {
  const navigate = useNavigate()

  return (
    <header className='border-b bg-background/95'>
      <nav className='mx-auto flex h-14 w-full max-w-5xl items-center px-4'>
        <ul className='flex items-center gap-1'>
          <li>
            <Button variant='ghost' onClick={() => navigate({ to: '/' })}>
              Home
            </Button>
          </li>
          <li>
            <Button variant='ghost' onClick={() => navigate({ to: '/listings' })}>
              Listings
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
