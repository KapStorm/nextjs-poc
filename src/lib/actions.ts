'use server'

import { z } from 'zod'
import { marcasCreateFormSchema } from './schemas'
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
