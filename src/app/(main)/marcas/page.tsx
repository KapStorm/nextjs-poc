import MarcasCreateDialog from '@/components/marcas/marcas-create-dialog'
import MarcasTable from '@/components/marcas/marcas-table'
import React from 'react'

export default function MarcasPage () {
  return (
    <div>
      <MarcasCreateDialog />
      <MarcasTable />
    </div>
  )
}
