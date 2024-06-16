import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import ModelosCreatForm from './modelos-create-form'
import prisma from '@/lib/db'

export default async function ModelosCreateDialog () {
  const marcas = await prisma.marca.findMany()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={marcas.length === 0}>Agregar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create Modelo</DialogTitle>
        <ModelosCreatForm marcas={marcas} />
      </DialogContent>
    </Dialog>
  )
}
