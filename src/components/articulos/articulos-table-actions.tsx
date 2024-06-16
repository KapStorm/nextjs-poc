'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from '../ui/dialog'
import React, { useState } from 'react'
import { Articulo } from '@prisma/client'
import { articuloDelete } from '@/lib/actions'

type Props = {
  articulo: Articulo
  editComponent: React.ReactNode
}

export default function ArticulosTableActions ({ articulo, editComponent }: Props) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)

  return (
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button>Acciones</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <Dialog onOpenChange={setIsDropdownMenuOpen}>
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Editar
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            {editComponent}
          </DialogContent>
        </Dialog>
        <Dialog onOpenChange={setIsDropdownMenuOpen}>
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
                  setIsDropdownMenuOpen(false)
                }}>Eliminar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
