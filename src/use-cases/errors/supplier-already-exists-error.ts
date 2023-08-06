export class SupplierAlreadyExistsError extends Error {
  constructor() {
    super('Supplier already exists.')
  }
}
