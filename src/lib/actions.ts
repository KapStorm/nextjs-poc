'use server'

import { z } from 'zod'
import prisma from './db'
import { revalidatePath } from 'next/cache'
import schemas from './schemas'

const actions = {
  marcas: {
    create: async ({ nombre }: z.infer<typeof schemas.marcas.create>) => {
      await prisma.marca.create({
        data: {
          nombre
        }
      })

      revalidatePath('/marcas')
    }
  },
  modelos: {
    create: async ({ nombre, marcaId }: z.infer<typeof schemas.modelos.create>) => {
      await prisma.modelo.create({
        data: {
          nombre,
          marcaId
        }
      })

      revalidatePath('/modelos')
    }
  },
  articulos: {
    create: async ({ nombre, modeloId, stock, precio }: z.infer<typeof schemas.articulos.create>) => {
      await prisma.articulo.create({
        data: {
          nombre,
          modeloId,
          stock,
          precio
        }
      })

      revalidatePath('/articulos')
    },
    edit: async (id: string, { nombre, modeloId, stock, precio }: z.infer<typeof schemas.articulos.edit>) => {
      await prisma.articulo.update({
        where: {
          id
        },
        data: {
          nombre,
          modeloId,
          stock,
          precio
        }
      })

      revalidatePath('/articulos')
    },
    delete: async (id: string) => {
      await prisma.articulo.delete({
        where: {
          id
        }
      })

      revalidatePath('/articulos')
    }
  }
}

export default actions
