'use client'

import schemas from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Marca, Modelo } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { modeloEdit } from '@/lib/actions'

type Props = {
  modelo: Modelo
  marcas: Marca[]
  onCompleted: () => void
}

export default function ModelosEditForm ({ modelo, marcas, onCompleted }: Props) {
  const form = useForm<z.infer<typeof schemas.modelos.edit>>({
    resolver: zodResolver(schemas.modelos.edit),
    defaultValues: {
      nombre: modelo.nombre,
      marcaId: modelo.marcaId
    }
  })

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit(async (data) => {
        await modeloEdit(modelo.id, data)
        onCompleted()
      })}>
        <FormField
          name='nombre'
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
        <FormField
          name='marcaId'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marca</FormLabel>
              <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {marcas.map((marca) => (
                    <SelectItem key={marca.id} value={marca.id}>
                      {marca.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit'>Guardar</Button>
      </form>
    </Form>
  )
}
