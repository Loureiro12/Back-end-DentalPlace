import { Prisma, ProductCategory } from '@prisma/client'

export interface ProductCategoryRepository {
  create(data: Prisma.ProductCategoryCreateInput): Promise<ProductCategory>
}
