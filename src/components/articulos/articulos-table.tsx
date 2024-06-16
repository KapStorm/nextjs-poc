import prisma from '@/lib/db'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

export default async function ArticulosTable () {
  const articulos = await prisma.articulo.findMany({
    select: {
      id: true,
      nombre: true,
      precio: true,
      stock: true,
      modelo: {
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
          <TableHead>Precio</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Modelo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {articulos.length > 0
          ? articulos.map(({ id, nombre, precio, stock, modelo: { nombre: modeloNombre } }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{nombre}</TableCell>
                <TableCell>{precio}</TableCell>
                <TableCell>{stock}</TableCell>
                <TableCell>{modeloNombre}</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
          ))
          : (
              <TableRow>
                <TableCell colSpan={6} className='text-center'>No hay articulos</TableCell>
              </TableRow>
            )}
      </TableBody>
    </Table>
  )
}
