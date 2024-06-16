import Link from 'next/link'

export default function Home () {
  return (
    <main className='flex items-center h-full'>
      <div className='flex mx-auto gap-6'>
        <Link href="/articulos">Articulos</Link>
        <Link href="/modelos">Modelos</Link>
        <Link href="/marcas">Marcas</Link>
      </div>
    </main>
  )
}
