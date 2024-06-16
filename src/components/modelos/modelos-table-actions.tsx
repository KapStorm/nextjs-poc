'use client'

import { Marca, Modelo } from '@prisma/client'
import { useState } from 'react'
import { Button } from '../ui/button'
import { modeloDelete } from '@/lib/actions'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'
import ModelosEditForm from './modelos-edit-form'

type Props = {
  modelo: Modelo & {
    marca: Marca
  }
  marcas: Marca[]
}

export default function ModelosTableActions ({ modelo, marcas }: Props) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  return (
    <>
      <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button>Acciones</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
          <DropdownMenuItem onSelect={(e) => {
            e.preventDefault()
            setIsEditDialogOpen(true)
            setIsDropdownMenuOpen(false)
          }}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => {
            e.preventDefault()
            setIsDeleteDialogOpen(true)
            setIsDropdownMenuOpen(false)
          }}>
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogTitle>Editar marca</DialogTitle>
          <ModelosEditForm modelo={modelo} marcas={marcas} onCompleted={() => setIsEditDialogOpen(false)} />
        </DialogContent>
      </Dialog>
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogTitle>Eliminar marca</DialogTitle>
          <p>¿Estás seguro que deseas eliminar esta marca?</p>
          <Button
            className='w-full'
            onClick={async () => {
              await modeloDelete(modelo.id)
              setIsDeleteDialogOpen(false)
            }}
          >Eliminar</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
