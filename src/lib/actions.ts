'use server'

import { z } from 'zod'
import { articulosCreateFormSchema, marcasCreateFormSchema, modelosCreateFormSchema } from './schemas'
import prisma from './db'
import { revalidatePath } from 'next/cache'

export async function marcasCreate ({ nombre }: z.infer<typeof marcasCreateFormSchema>) {
  await prisma.marca.create({
    data: {
      nombre
    }
  })

  revalidatePath('/marcas')
}

export async function modeloCreate ({ nombre, marcaId }: z.infer<typeof modelosCreateFormSchema>) {
  await prisma.modelo.create({
    data: {
      nombre,
      marcaId
    }
  })

  revalidatePath('/modelos')
}

export async function articuloCreate ({ nombre, modeloId, stock, precio }: z.infer<typeof articulosCreateFormSchema>) {
  await prisma.articulo.create({
    data: {
      nombre,
      modeloId,
      stock,
      precio
    }
  })

  revalidatePath('/articulos')
}
