'use server'

import { z } from 'zod'
import prisma from './db'
import { revalidatePath } from 'next/cache'
import schemas from './schemas'

export async function articuloCreate ({ nombre, modeloId, stock, precio }: z.infer<typeof schemas.articulos.create>) {
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

export async function articuloEdit (id: string, { nombre, modeloId, stock, precio }: z.infer<typeof schemas.articulos.edit>) {
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
}

export async function articuloDelete (id: string) {
  await prisma.articulo.delete({
    where: {
      id
    }
  })

  revalidatePath('/articulos')
}

export async function marcaCreate ({ nombre }: z.infer<typeof schemas.marcas.create>) {
  await prisma.marca.create({
    data: {
      nombre
    }
  })

  revalidatePath('/marcas')
  revalidatePath('/modelos')
  revalidatePath('/articulos')
}

export async function marcaEdit (id: string, { nombre }: z.infer<typeof schemas.marcas.edit>) {
  await prisma.marca.update({
    where: {
      id
    },
    data: {
      nombre
    }
  })

  revalidatePath('/marcas')
  revalidatePath('/modelos')
  revalidatePath('/articulos')
}

export async function marcaDelete (id: string) {
  await prisma.marca.delete({
    where: {
      id
    }
  })

  revalidatePath('/marcas')
  revalidatePath('/modelos')
  revalidatePath('/articulos')
}

export async function modeloCreate ({ nombre, marcaId }: z.infer<typeof schemas.modelos.create>) {
  await prisma.modelo.create({
    data: {
      nombre,
      marcaId
    }
  })

  revalidatePath('/modelos')
  revalidatePath('/articulos')
}

export async function modeloEdit (id: string, { nombre, marcaId }: z.infer<typeof schemas.modelos.edit>) {
  await prisma.modelo.update({
    where: {
      id
    },
    data: {
      nombre,
      marcaId
    }
  })

  revalidatePath('/modelos')
  revalidatePath('/articulos')
}

export async function modeloDelete (id: string) {
  await prisma.modelo.delete({
    where: {
      id
    }
  })

  revalidatePath('/modelos')
  revalidatePath('/articulos')
}
