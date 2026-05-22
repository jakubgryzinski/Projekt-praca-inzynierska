import type { ReactNode } from 'react'

type SubHeaderProps = {
  links: ReactNode
}

export function SubHeader({ links }: SubHeaderProps) {
  return (
    <header className='mb-8 border-b bg-muted/30'>
      <nav className='flex h-12 items-center'>
        <ul className='flex items-center gap-1'>{links}</ul>
      </nav>
    </header>
  )
}
