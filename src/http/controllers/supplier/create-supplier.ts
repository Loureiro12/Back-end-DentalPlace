import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'

import { makeSupplierUseCase } from '@/use-cases/factories/make-supplier-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createSupplierBodySchema = z.object({
    name: z.string(),
    phone: z.string().nullable(),
    cnpj: z.string(),
  })

  const { name, phone, cnpj } = createSupplierBodySchema.parse(request.body)

  try {
    const supplierUseCase = makeSupplierUseCase()

    await supplierUseCase.execute({
      name,
      phone,
      cnpj,
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
