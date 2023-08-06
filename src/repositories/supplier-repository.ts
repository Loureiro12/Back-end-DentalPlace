import { Prisma, Supplier } from '@prisma/client'

export interface SupplierRepository {
  create(data: Prisma.SupplierUncheckedCreateInput): Promise<Supplier>
}
