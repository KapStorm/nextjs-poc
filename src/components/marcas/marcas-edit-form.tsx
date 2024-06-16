import { Marca } from '@prisma/client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import schemas from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { marcaEdit } from '@/lib/actions'

type Props = {
  marca: Marca
  onCompleted: () => void
}

export default function MarcasEditForm ({ marca, onCompleted }: Props) {
  const form = useForm<z.infer<typeof schemas.marcas.edit>>({
    resolver: zodResolver(schemas.marcas.edit),
    defaultValues: {
      nombre: marca.nombre
    }
  })

  return (
    <Form {...form}>
      <form
        className='space-y-4'
        onSubmit={form.handleSubmit(async (data) => {
          await marcaEdit(marca.id, data)
          onCompleted()
        })}
      >
        <FormField
          name="nombre"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type="submit">Guardar</Button>
      </form>
    </Form>
  )
}
