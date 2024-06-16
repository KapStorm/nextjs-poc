'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from '../ui/dialog'
import React, { useState } from 'react'
import { Articulo, Modelo } from '@prisma/client'
import { articuloDelete } from '@/lib/actions'
import ArticulosEditForm from './articulos-edit-form'

type Props = {
  articulo: Articulo
  modelos: Modelo[]
}

export default function ArticulosTableActions ({ articulo, modelos }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button>Acciones</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <Dialog onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Editar
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Editar articulo</DialogTitle>
            <ArticulosEditForm articulo={articulo} modelos={modelos} onComplete={() => setIsOpen(false)} />
          </DialogContent>
        </Dialog>
        <Dialog onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Eliminar
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Eliminar articulo</DialogTitle>
            <p>¿Estás seguro que deseas eliminar este articulo?</p>
            <DialogFooter>
              <Button
                className='w-full'
                onClick={async () => {
                  await articuloDelete(articulo.id)
                  setIsOpen(false)
                }}>Eliminar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
