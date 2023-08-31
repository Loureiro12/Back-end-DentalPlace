import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'

import { ProductRepository } from '../product-repository'

export class PrismaProductRepository implements ProductRepository {
  async list(page: number) {
    const product = await prisma.product.findMany({
      take: 20,
      skip: (page - 1) * 20,
    })

    return product
  }

  async searchMany(query: string, page: number) {
    const product = await prisma.product.findMany({
      where: {
        name: {
          contains: query,
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return product
  }

  async create(data: Prisma.ProductUncheckedCreateInput) {
    const product = await prisma.product.create({
      data,
    })

    return product
  }
}
