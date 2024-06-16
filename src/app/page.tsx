import IconGithub from '@/components/icons/icon-github'
import IconLinkedin from '@/components/icons/icon-linkedin'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home () {
  return (
    <main className='flex items-center h-full'>
      <div className='mx-auto space-y-4'>
        <div className='flex gap-6'>
          <Button><Link href="/articulos">Articulos</Link></Button>
          <Button><Link href="/modelos">Modelos</Link></Button>
          <Button><Link href="/marcas">Marcas</Link></Button>
        </div>
        <div className='flex'>
          <div className='flex mx-auto space-x-2'>
            <Button size='icon' variant='ghost'>
              <Link href='https://github.com/kapstorm' target='_blank'>
                <IconGithub className='w-8 h-8' />
              </Link>
            </Button>
            <Button size='icon' variant='ghost'>
              <Link href='https://www.linkedin.com/in/sebastián-arellanes-5b589720b/' target='_blank'>
                <IconLinkedin className='w-8 h-8' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
