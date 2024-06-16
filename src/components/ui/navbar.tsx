'use client'

import Link from 'next/link'
import { Button } from './button'
import { usePathname } from 'next/navigation'

const links = [
  {
    href: '/',
    label: 'Inicio'
  },
  {
    href: '/articulos',
    label: 'Articulos'
  },
  {
    href: '/modelos',
    label: 'Modelos'
  },
  {
    href: '/marcas',
    label: 'Marcas'
  }
]

export default function Navbar () {
  const pathname = usePathname()
  const firstPath = pathname.split('/')[1]

  return (
    <nav className="flex gap-6 bg-primary">
      <div className='container'>
        {links.map(({ href, label }) => (
          <Button key={href} variant="link">
            <Link
              href={href}
              className={[
                'text-primary-foreground',
                firstPath === href.split('/')[1] && 'underline',
                'transition'
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {label}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}
