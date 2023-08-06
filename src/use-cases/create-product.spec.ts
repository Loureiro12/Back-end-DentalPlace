import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryProductsRepository } from '@/repositories/in-memory/in-memory-products-repository'
import { CreateProductUseCase } from './create-product'

let usersRepository: InMemoryProductsRepository
let sut: CreateProductUseCase

describe('Create Product Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryProductsRepository()
    sut = new CreateProductUseCase(usersRepository)
  })

  it('should be able to create product', async () => {
    const { product } = await sut.execute({
      name: 'Luva de Procedimento de Látex',
      description: 'Embalagem com 100 unidades. Escolha o tamanho.',
      application: 'Luva para procedimento, não cirúrgica.',
      price: '1799',
      priceComparison: '2000',
      costPerItem: '1000',
      status: 'active',
      cod: 'DC11158',
      productCategoryId: 'productCategoryId-01',
      supplierId: 'supplierId-01',
    })

    expect(product.id).toEqual(expect.any(String))
  })
})
