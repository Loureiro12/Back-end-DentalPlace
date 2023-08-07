import { PrismaSupplierRepository } from '@/repositories/prisma/prisma-supplier-repository'
import { CreateSupplierCase } from '../create-supplier'

export function makeSupplierUseCase() {
  const usersRepository = new PrismaSupplierRepository()
  const registerUseCase = new CreateSupplierCase(usersRepository)

  return registerUseCase
}
