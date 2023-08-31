import { FastifyInstance } from 'fastify'

import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { create } from './create-supplier'

export async function supplierRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('/supplier', create)
}
