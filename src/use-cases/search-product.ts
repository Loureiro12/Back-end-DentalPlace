import { ProductRepository } from '@/repositories/product-repository'
import { Product } from '@prisma/client'

interface SearchProductsUseCaseRequest {
  query: string
  page: number
}

interface SearchProductsUseCaseResponse {
  products: Product[]
}

export class SearchProductsUseCase {
  constructor(private productsRepository: ProductRepository) {}

  async execute({
    query,
    page,
  }: SearchProductsUseCaseRequest): Promise<SearchProductsUseCaseResponse> {
    const products = await this.productsRepository.searchMany(query, page)

    return {
      products,
    }
  }
}
