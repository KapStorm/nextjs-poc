import ModelosCreateDialog from '@/components/modelos/modelos-create-dialog'
import ModelosTable from '@/components/modelos/modelos-table'
import React from 'react'

export default function ModelosPage () {
  return (
    <div>
      <ModelosCreateDialog />
      <ModelosTable />
    </div>
  )
}
