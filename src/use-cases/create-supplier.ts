import { Supplier } from '@prisma/client'

import { SupplierRepository } from '@/repositories/supplier-repository'
import { SupplierAlreadyExistsError } from './errors/supplier-already-exists-error'

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
    const findSupplier = await this.supplierRepository.findByCnpj(cnpj)

    if (findSupplier) {
      throw new SupplierAlreadyExistsError()
    }

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
