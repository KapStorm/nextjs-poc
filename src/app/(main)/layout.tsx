import Navbar from '@/components/ui/navbar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function MainLayout ({ children }: Props) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='container'>
        {children}
      </main>
    </>
  )
}
