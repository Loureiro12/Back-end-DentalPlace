import { InMemoryProductsRepository } from '@/repositories/in-memory/in-memory-products-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { GetProductUseCase } from './get-product'

let productsRepository: InMemoryProductsRepository
let sut: GetProductUseCase

describe('Get all Product Use Case', () => {
  beforeEach(async () => {
    productsRepository = new InMemoryProductsRepository()
    sut = new GetProductUseCase(productsRepository)
  })

  it('should be able to search for gyms', async () => {
    await productsRepository.create({
      name: 'Luva de Procedimento de Látex',
      description: 'Embalagem com 100 unidades. Escolha o tamanho.',
      application: 'Luva para procedimento, não cirúrgica.',
      price: '1799',
      priceComparison: '2000',
      costPerItem: '1000',
      status: 'active',
      cod: 'DC11158',
      product_category_id: 'productCategoryId-01',
      supplier_id: 'supplierId-01',
    })

    await productsRepository.create({
      name: 'Kit Resina Z100 - 3M',
      description: 'Embalagem com 100 unidades. Escolha o tamanho.',
      application: 'Luva para procedimento, não cirúrgica.',
      price: '1799',
      priceComparison: '2000',
      costPerItem: '1000',
      status: 'active',
      cod: 'DC11158',
      product_category_id: 'productCategoryId-01',
      supplier_id: 'supplierId-01',
    })

    const { product } = await sut.execute({
      page: 1,
    })

    expect(product).toHaveLength(1)
    expect(product).toEqual([
      expect.objectContaining({ title: 'JavaScript Gym' }),
    ])
  })

  it('should be able to fetch paginated product search', async () => {
    for (let i = 1; i <= 22; i++) {
      await productsRepository.create({
        name: 'Kit Resina Z100 - 3M',
        description: 'Embalagem com 100 unidades. Escolha o tamanho.',
        application: 'Luva para procedimento, não cirúrgica.',
        price: '1799',
        priceComparison: '2000',
        costPerItem: '1000',
        status: 'active',
        cod: 'DC11158',
        product_category_id: 'productCategoryId-01',
        supplier_id: 'supplierId-01',
      })
    }

    const { product } = await sut.execute({
      page: 2,
    })

    expect(product).toHaveLength(2)
    expect(product).toEqual([
      expect.objectContaining({ title: 'JavaScript Gym 21' }),
      expect.objectContaining({ title: 'Kit Resina Z100 - 3M' }),
    ])
  })
})
