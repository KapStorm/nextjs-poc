import prisma from '@/lib/db'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

export default async function ModelosTable () {
  const modelos = await prisma.modelo.findMany({
    select: {
      id: true,
      nombre: true,
      marca: {
        select: {
          nombre: true
        }
      }
    }
  })

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Marca</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {modelos.length > 0
          ? modelos.map(({ id, nombre, marca }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{nombre}</TableCell>
                <TableCell>{marca.nombre}</TableCell>
              </TableRow>
          ))
          : (
              <TableRow>
                <TableCell colSpan={3} className='text-center'>No hay modelos</TableCell>
              </TableRow>
            )}
      </TableBody>
    </Table>
  )
}
