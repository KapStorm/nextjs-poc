'use client'

import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { type Marca } from '@prisma/client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import schemas from '@/lib/schemas'
import { modeloCreate } from '@/lib/actions'

type Props = {
  marcas: Marca[]
}

export default function ModelosCreatForm ({ marcas }: Props) {
  const form = useForm<z.infer<typeof schemas.modelos.create>>({
    resolver: zodResolver(schemas.modelos.create),
    defaultValues: {
      nombre: '',
      marcaId: ''
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(async (data) => {
        await modeloCreate(data)
        form.reset()
      })} className='space-y-4'>
        <FormField
          name='nombre'
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder='Pala' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
          />
        <FormField
        name='marcaId'
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Marcas</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {marcas.map(({ id, nombre }) => (
                      <SelectItem key={id} value={id}>{nombre}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }}
        />
        <Button type='submit' className='w-full'>Crear</Button>
      </form>
    </Form>
  )
}
