import { z } from 'zod'

export const marcasCreateFormSchema = z.object({
  nombre: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres'
  })
})
