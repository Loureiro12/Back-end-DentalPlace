import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryProductsCategoryRepository } from '@/repositories/in-memory/in-memory-products-category-repository'
import { CreateProductCategoryUseCase } from './create-product-category'

let usersRepository: InMemoryProductsCategoryRepository
let sut: CreateProductCategoryUseCase

describe('Create Product Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryProductsCategoryRepository()
    sut = new CreateProductCategoryUseCase(usersRepository)
  })

  it('should be able to create product', async () => {
    const { productCategory } = await sut.execute({
      name: 'Luvas',
      description: 'Luvas no geral',
    })

    expect(productCategory.id).toEqual(expect.any(String))
  })
})
