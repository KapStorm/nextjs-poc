'use client'

import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Articulo, Modelo } from '@prisma/client'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { articuloEdit } from '@/lib/actions'
import schemas from '@/lib/schemas'

type Props = {
  articulo: Articulo
  modelos: Modelo[]
  onComplete: () => void
}

export default function ArticulosEditForm ({ articulo, modelos, onComplete }: Props) {
  const form = useForm<z.infer<typeof schemas.articulos.edit>>({
    resolver: zodResolver(schemas.articulos.edit),
    defaultValues: {
      nombre: articulo.nombre,
      modeloId: articulo.modeloId,
      stock: articulo.stock,
      precio: articulo.precio
    }
  })

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit(async (data) => {
        await articuloEdit(articulo.id, data)
        onComplete()
      })}>
        <FormField
          name='nombre'
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          name='modeloId'
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Modelos</FormLabel>
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {modelos.map((modelo) => (
                        <SelectItem key={modelo.id} value={modelo.id}>
                          {modelo.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          name='stock'
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Stock</FormLabel>
                <FormControl>
                  <Input type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          name='precio'
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <Button type='submit' className='w-full'>Editar</Button>
      </form>
    </Form>
  )
}
