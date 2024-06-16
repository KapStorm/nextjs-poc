import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home () {
  return (
    <main className='flex items-center h-full'>
      <div className='flex mx-auto gap-6'>
        <Button><Link href="/articulos">Articulos</Link></Button>
        <Button><Link href="/modelos">Modelos</Link></Button>
        <Button><Link href="/marcas">Marcas</Link></Button>
      </div>
    </main>
  )
}
