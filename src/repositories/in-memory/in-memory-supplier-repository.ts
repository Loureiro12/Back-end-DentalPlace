import { Prisma, Supplier } from '@prisma/client'
import { randomUUID } from 'crypto'

import { SupplierRepository } from '../supplier-repository'

export class InMemorySupplierRepository implements SupplierRepository {
  public items: Supplier[] = []

  async create(data: Prisma.SupplierUncheckedCreateInput) {
    const supplier = {
      id: randomUUID(),
      name: data.name,
      phone: data.phone ? data.phone : null,
      cnpj: data.cnpj,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(supplier)

    return supplier
  }
}
