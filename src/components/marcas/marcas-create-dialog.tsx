import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import MarcasCreateForm from './marcas-create-form'

export default function MarcasCreateDialog () {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Crear marca</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Crear marca</DialogTitle>
        <MarcasCreateForm />
      </DialogContent>
    </Dialog>
  )
}
