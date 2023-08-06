import { Product } from '@prisma/client'

import { ProductRepository } from '@/repositories/product-repository'

interface CreateProductUseCaseRequest {
  name: string
  description: string | null
  application: string
  price: string
  priceComparison: string
  costPerItem: string
  status: string
  cod: string
  productCategoryId: string
  supplierId: string
}

interface CreateProductUseCaseResponse {
  product: Product
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    name,
    description,
    application,
    price,
    priceComparison,
    costPerItem,
    status,
    cod,
    productCategoryId,
    supplierId,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const product = await this.productRepository.create({
      name,
      description,
      application,
      price,
      priceComparison,
      costPerItem,
      status,
      cod,
      product_category_id: productCategoryId,
      supplier_id: supplierId,
    })

    return {
      product,
    }
  }
}
