import { Prisma, Supplier } from '@prisma/client'

export interface SupplierRepository {
  findByCnpj(cnpj: string): Promise<Supplier | null>
  create(data: Prisma.SupplierUncheckedCreateInput): Promise<Supplier>
}
