import { Prisma, Product } from '@prisma/client'
import { randomUUID } from 'crypto'

import { ProductRepository } from '../product-repository'

export class InMemoryProductsRepository implements ProductRepository {
  public items: Product[] = []

  async create(data: Prisma.ProductUncheckedCreateInput) {
    const product = {
      id: randomUUID(),
      name: data.name,
      description: data.description ? data.description : null,
      application: data.application ? data.application : null,
      price: data.price,
      priceComparison: data.priceComparison,
      costPerItem: data.costPerItem,
      status: data.status,
      cod: data.cod,
      created_at: new Date(),
      updated_at: new Date(),
      supplier_id: data.supplier_id,
      product_category_id: data.product_category_id,
    }

    this.items.push(product)

    return product
  }
}
