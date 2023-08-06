import { Supplier } from '@prisma/client'

import { SupplierRepository } from '@/repositories/supplier-repository'

interface CreateSupplierCaseRequest {
  name: string
  phone: string | null
  cnpj: string
}

interface CreateSupplierCaseResponse {
  supplier: Supplier
}

export class CreateSupplierCase {
  constructor(private supplierRepository: SupplierRepository) {}

  async execute({
    name,
    phone,
    cnpj,
  }: CreateSupplierCaseRequest): Promise<CreateSupplierCaseResponse> {
    const supplier = await this.supplierRepository.create({
      name,
      phone,
      cnpj,
    })

    return {
      supplier,
    }
  }
}
