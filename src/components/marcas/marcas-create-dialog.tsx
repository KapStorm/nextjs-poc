'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import MarcasCreateForm from './marcas-create-form'

export default function MarcasCreateDialog () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Agregar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Crear marca</DialogTitle>
        <MarcasCreateForm onCompleted={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
