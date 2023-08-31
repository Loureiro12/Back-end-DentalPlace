import { Product } from '@prisma/client'

import { ProductRepository } from '@/repositories/product-repository'

interface GetProductUseCaseRequest {
  page: number
}

interface GetProductUseCaseResponse {
  product: Product[]
}

export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    page,
  }: GetProductUseCaseRequest): Promise<GetProductUseCaseResponse> {
    const product = await this.productRepository.list(page)

    return {
      product,
    }
  }
}
