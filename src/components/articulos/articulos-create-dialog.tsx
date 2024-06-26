'use client'

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import ArticulosCreateForm from './articulos-create-form'
import { Modelo } from '@prisma/client'
import { useState } from 'react'

type Props = {
  modelos: Modelo[]
}

export default function ArticulosCreateDialog ({ modelos }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button disabled={modelos.length === 0}>Agregar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Crear articulo</DialogTitle>
        <ArticulosCreateForm modelos={modelos} onComplete={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
