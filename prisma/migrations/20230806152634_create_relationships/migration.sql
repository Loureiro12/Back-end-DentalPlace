/*
  Warnings:

  - You are about to drop the column `productCategory` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `supplier` on the `products` table. All the data in the column will be lost.
  - Added the required column `product_category_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplier_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "productCategory",
DROP COLUMN "supplier",
ADD COLUMN     "product_category_id" TEXT NOT NULL,
ADD COLUMN     "supplier_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "product_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "product_category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_product_category_id_fkey" FOREIGN KEY ("product_category_id") REFERENCES "product_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
