import { FastifyInstance } from 'fastify'

import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { create } from './create-product'
import { search } from './search-product'

export async function productRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.get('/products/search', search)

  app.post('/product', create)
}
