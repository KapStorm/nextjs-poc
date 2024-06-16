'use client'

import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import schemas from '@/lib/schemas'
import { marcaCreate } from '@/lib/actions'

type Props = {
  onCompleted: () => void
}

export default function MarcasCreateForm ({ onCompleted }: Props) {
  const form = useForm<z.infer<typeof schemas.marcas.create>>({
    resolver: zodResolver(schemas.marcas.create),
    defaultValues: {
      nombre: ''
    }
  })

  return (
    <Form {...form}>
      <form
        className='space-y-4'
        onSubmit={form.handleSubmit(async (data) => {
          await marcaCreate(data)
          onCompleted()
        })}
      >
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
        <Button type='submit' className='w-full'>Crear</Button>
      </form>
    </Form>
  )
}
