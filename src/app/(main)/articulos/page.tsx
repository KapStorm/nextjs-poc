import ArticulosCreateDialog from '@/components/articulos/articulos-create-dialog'
import ArticulosTable from '@/components/articulos/articulos-table'
import React from 'react'

export default function ArticulosPage () {
  return (
    <div>
      <ArticulosCreateDialog />
      <ArticulosTable />
    </div>
  )
}
