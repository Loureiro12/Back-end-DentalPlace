import { PrismaProductRepository } from '@/repositories/prisma/prisma-product-repository'
import { SearchProductsUseCase } from '../search-product'

export function makeGetProductUseCase() {
  const usersRepository = new PrismaProductRepository()
  const registerUseCase = new SearchProductsUseCase(usersRepository)

  return registerUseCase
}
