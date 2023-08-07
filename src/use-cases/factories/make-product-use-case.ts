import { PrismaProductRepository } from '@/repositories/prisma/prisma-product-repository'
import { CreateProductUseCase } from '../create-product'

export function makeProductUseCase() {
  const usersRepository = new PrismaProductRepository()
  const registerUseCase = new CreateProductUseCase(usersRepository)

  return registerUseCase
}
