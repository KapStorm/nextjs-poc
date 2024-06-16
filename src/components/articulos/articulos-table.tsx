import prisma from '@/lib/db'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import ArticulosTableActions from './articulos-table-actions'

export default async function ArticulosTable () {
  const articulos = await prisma.articulo.findMany({
    include: {
      modelo: true
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
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {articulos.length > 0
          ? articulos.map((articulo) => (
              <TableRow key={articulo.id}>
                <TableCell>{articulo.id}</TableCell>
                <TableCell>{articulo.nombre}</TableCell>
                <TableCell>{articulo.precio}</TableCell>
                <TableCell>{articulo.stock}</TableCell>
                <TableCell>{articulo.modelo.nombre}</TableCell>
                <TableCell>
                  <ArticulosTableActions articulo={articulo} editComponent={null} />
                </TableCell>
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
