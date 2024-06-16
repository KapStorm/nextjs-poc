'use client'

import { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'
import { marcaDelete } from '@/lib/actions'
import { Marca } from '@prisma/client'
import MarcasEditForm from './marcas-edit-form'

type Props = {
  marca: Marca
}

export default function MarcasTableActions ({ marca }: Props) {
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
          <MarcasEditForm marca={marca} onCompleted={() => setIsEditDialogOpen(false)} />
        </DialogContent>
      </Dialog>
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogTitle>Eliminar marca</DialogTitle>
          <p>¿Estás seguro que deseas eliminar esta marca?</p>
          <Button
            className='w-full'
            onClick={async () => {
              await marcaDelete(marca.id)
              setIsDeleteDialogOpen(false)
            }}
          >Eliminar</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
