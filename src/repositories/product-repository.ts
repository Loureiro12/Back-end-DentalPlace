import { Prisma, Product } from '@prisma/client'

export interface ProductRepository {
  create(data: Prisma.ProductUncheckedCreateInput): Promise<Product>
  list(page: number): Promise<Product[]>
  searchMany(query: string, page: number): Promise<Product[]>
}
