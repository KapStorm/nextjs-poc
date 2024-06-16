import { z } from 'zod'

export const marcasCreateFormSchema = z.object({
  nombre: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres'
  })
})

export const modelosCreateFormSchema = z.object({
  nombre: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres'
  }),
  marcaId: z.string().uuid()
})

export const articulosCreateFormSchema = z.object({
  nombre: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres'
  }),
  modeloId: z.string().uuid({
    message: 'Seleccione un modelo'
  }),
  stock: z.coerce.number().int().positive({
    message: 'La cantidad debe ser un numero entero positivo'
  }),
  precio: z.coerce.number().positive({
    message: 'El precio debe ser un numero positivo'
  })
})
