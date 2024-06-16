import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import ArticulosCreateForm from './articulos-create-form'
import prisma from '@/lib/db'

export default async function ArticulosCreateDialog () {
  const modelos = await prisma.modelo.findMany()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Crear articulo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Crear articulo</DialogTitle>
        <ArticulosCreateForm modelos={modelos} />
      </DialogContent>
    </Dialog>
  )
}
