import { beforeEach, describe, expect, it } from 'vitest'

import { InMemorySupplierRepository } from '@/repositories/in-memory/in-memory-supplier-repository'
import { CreateSupplierCase } from './create-supplier'
import { SupplierAlreadyExistsError } from './errors/supplier-already-exists-error'

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
      cnpj: '4312412341241',
    })

    expect(supplier.id).toEqual(expect.any(String))
  })

  it('should not be able to register with same cnpj twice', async () => {
    const cnpj = '4134124124'

    await sut.execute({
      name: 'SE Comercial',
      phone: '31994152935',
      cnpj,
    })

    await expect(() =>
      sut.execute({
        name: 'SE Comercial',
        phone: '31994152935',
        cnpj,
      }),
    ).rejects.toBeInstanceOf(SupplierAlreadyExistsError)
  })
})
