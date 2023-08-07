import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'

import { SupplierRepository } from '../supplier-repository'

export class PrismaSupplierRepository implements SupplierRepository {
  async findByCnpj(cnpj: string) {
    const supplier = await prisma.supplier.findUnique({
      where: {
        cnpj,
      },
    })

    return supplier
  }

  async create(data: Prisma.SupplierUncheckedCreateInput) {
    const supplier = await prisma.supplier.create({
      data,
    })

    return supplier
  }
}
