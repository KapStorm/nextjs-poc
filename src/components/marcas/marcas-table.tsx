import prisma from '@/lib/db'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

export default async function MarcasTable () {
  const marcas = await prisma.marca.findMany()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Nombre</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {marcas.length > 0
          ? marcas.map(({ id, nombre }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{nombre}</TableCell>
              </TableRow>
          ))
          : (
              <TableRow>
                <TableCell colSpan={2} className='text-center'>No hay marcas</TableCell>
              </TableRow>
            )}
      </TableBody>
    </Table>
  )
}
