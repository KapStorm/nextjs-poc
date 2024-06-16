import ArticulosCreateDialog from '@/components/articulos/articulos-create-dialog'
import ArticulosTable from '@/components/articulos/articulos-table'
import prisma from '@/lib/db'
import React from 'react'

export default async function ArticulosPage () {
  const modelos = await prisma.modelo.findMany()

  return (
    <div>
      <ArticulosCreateDialog modelos={modelos} />
      <ArticulosTable />
    </div>
  )
}
