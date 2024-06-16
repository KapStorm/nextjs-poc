-- DropForeignKey
ALTER TABLE "articulos" DROP CONSTRAINT "articulos_modelo_id_fkey";

-- DropForeignKey
ALTER TABLE "modelos" DROP CONSTRAINT "modelos_marca_id_fkey";

-- AddForeignKey
ALTER TABLE "modelos" ADD CONSTRAINT "modelos_marca_id_fkey" FOREIGN KEY ("marca_id") REFERENCES "marcas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articulos" ADD CONSTRAINT "articulos_modelo_id_fkey" FOREIGN KEY ("modelo_id") REFERENCES "modelos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
