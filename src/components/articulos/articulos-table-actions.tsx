'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogFooter, DialogTitle } from '../ui/dialog'
import React, { useState } from 'react'
import { Articulo, Modelo } from '@prisma/client'
import ArticulosEditForm from './articulos-edit-form'
import { articuloDelete } from '@/lib/actions'

type Props = {
  articulo: Articulo
  modelos: Modelo[]
}

export default function ArticulosTableActions ({ articulo, modelos }: Props) {
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
          <DialogTitle>Editar articulo</DialogTitle>
          <ArticulosEditForm articulo={articulo} modelos={modelos} onComplete={() => setIsEditDialogOpen(false)} />
        </DialogContent>
      </Dialog>
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogTitle>Eliminar articulo</DialogTitle>
          <p>¿Estás seguro que deseas eliminar este articulo?</p>
          <DialogFooter>
            <Button
              className='w-full'
              onClick={async () => {
                await articuloDelete(articulo.id)
                setIsDeleteDialogOpen(false)
              }}>Eliminar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
