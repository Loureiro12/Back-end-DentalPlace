import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'

import { makeProductUseCase } from '@/use-cases/factories/make-product-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createProductBodySchema = z.object({
    name: z.string(),
    description: z.string().nullable(),
    application: z.string(),
    price: z.string(),
    priceComparison: z.string(),
    costPerItem: z.string(),
    status: z.string(),
    cod: z.string(),
    productCategoryId: z.string(),
    supplierId: z.string(),
  })

  const {
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
  } = createProductBodySchema.parse(request.body)

  try {
    const productUseCase = makeProductUseCase()

    await productUseCase.execute({
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
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
