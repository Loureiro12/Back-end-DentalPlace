import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'

import { ProductCategoryRepository } from '../product-category-repository'

export class PrismaProductCategoryRepository
  implements ProductCategoryRepository
{
  async create(data: Prisma.ProductCategoryCreateInput) {
    const productCategory = await prisma.productCategory.create({
      data,
    })

    return productCategory
  }
}
