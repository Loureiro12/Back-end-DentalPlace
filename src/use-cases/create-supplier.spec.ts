import { beforeEach, describe, expect, it } from 'vitest'

import { InMemorySupplierRepository } from '@/repositories/in-memory/in-memory-supplier-repository'
import { CreateSupplierCase } from './create-supplier'

let usersRepository: InMemorySupplierRepository
let sut: CreateSupplierCase

describe('Create Supplier Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemorySupplierRepository()
    sut = new CreateSupplierCase(usersRepository)
  })

  it('should be able to create supplier', async () => {
    const { supplier } = await sut.execute({
      name: 'SE Comercial',
      phone: '31994152935',
      cnpj: '4134124124',
    })

    expect(supplier.id).toEqual(expect.any(String))
  })
})
