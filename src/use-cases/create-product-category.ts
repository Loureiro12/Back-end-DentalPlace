import { ProductCategory } from '@prisma/client'

import { ProductCategoryRepository } from '@/repositories/product-category-repository'

interface CreateProductCategoryUseCaseRequest {
  name: string
  description: string | null
}

interface CreateProductCategoryUseCaseResponse {
  productCategory: ProductCategory
}

export class CreateProductCategoryUseCase {
  constructor(private productRepository: ProductCategoryRepository) {}

  async execute({
    name,
    description,
  }: CreateProductCategoryUseCaseRequest): Promise<CreateProductCategoryUseCaseResponse> {
    const productCategory = await this.productRepository.create({
      name,
      description,
    })

    return {
      productCategory,
    }
  }
}
