import { PrismaProductCategoryRepository } from '@/repositories/prisma/prisma-product-category-repository'
import { CreateProductCategoryUseCase } from '../create-product-category'

export function makeProductCategoryUseCase() {
  const usersRepository = new PrismaProductCategoryRepository()
  const registerUseCase = new CreateProductCategoryUseCase(usersRepository)

  return registerUseCase
}
