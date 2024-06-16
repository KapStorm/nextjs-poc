'use client'

import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { marcasCreate } from '@/lib/actions'
import { marcasCreateFormSchema } from '@/lib/schemas'

export default function MarcasCreateForm () {
  const form = useForm<z.infer<typeof marcasCreateFormSchema>>({
    resolver: zodResolver(marcasCreateFormSchema),
    defaultValues: {
      nombre: ''
    }
  })

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit((data) => marcasCreate(data))}>
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
