import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'

import { ProductRepository } from '../product-repository'

export class PrismaProductRepository implements ProductRepository {
  async create(data: Prisma.ProductUncheckedCreateInput) {
    const product = await prisma.product.create({
      data,
    })

    return product
  }
}
