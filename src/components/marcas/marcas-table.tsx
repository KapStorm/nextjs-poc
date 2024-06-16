import prisma from '@/lib/db'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import MarcasTableActions from './marcas-table-actions'

export default async function MarcasTable () {
  const marcas = await prisma.marca.findMany()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {marcas.length > 0
          ? marcas.map((marca) => (
              <TableRow key={marca.id}>
                <TableCell>{marca.id}</TableCell>
                <TableCell>{marca.nombre}</TableCell>
                <TableCell>
                  <MarcasTableActions marca={marca} />
                </TableCell>
              </TableRow>
          ))
          : (
              <TableRow>
                <TableCell colSpan={3} className='text-center'>No hay marcas</TableCell>
              </TableRow>
            )}
      </TableBody>
    </Table>
  )
}
