import { Prisma, ProductCategory } from '@prisma/client'
import { randomUUID } from 'crypto'

import { ProductCategoryRepository } from '../product-category-repository'

export class InMemoryProductsCategoryRepository
  implements ProductCategoryRepository
{
  public items: ProductCategory[] = []

  async create(data: Prisma.ProductCategoryCreateInput) {
    const productCategory = {
      id: randomUUID(),
      name: data.name,
      description: data.description ? data.description : null,
    }
    this.items.push(productCategory)

    return productCategory
  }
}
