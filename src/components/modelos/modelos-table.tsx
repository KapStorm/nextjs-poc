import prisma from '@/lib/db'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import ModelosTableActions from './modelos-table-actions'

export default async function ModelosTable () {
  const modelos = await prisma.modelo.findMany({
    include: {
      marca: true
    }
  })

  const marcas = await prisma.marca.findMany()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Marca</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {modelos.length > 0
          ? modelos.map((modelo) => (
              <TableRow key={modelo.id}>
                <TableCell>{modelo.id}</TableCell>
                <TableCell>{modelo.nombre}</TableCell>
                <TableCell>{modelo.marca.nombre}</TableCell>
                <TableCell>
                  <ModelosTableActions modelo={modelo} marcas={marcas} />
                </TableCell>
              </TableRow>
          ))
          : (
              <TableRow>
                <TableCell colSpan={4} className='text-center'>No hay modelos</TableCell>
              </TableRow>
            )}
      </TableBody>
    </Table>
  )
}
