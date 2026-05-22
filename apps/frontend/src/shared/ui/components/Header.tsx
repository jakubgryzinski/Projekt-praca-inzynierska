import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/listing'>Listing</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
