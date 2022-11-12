export class UserDoesNotExistsError extends Error {
  constructor() {
    super('No such user exists')
    this.name = 'UserDoesNotExistsError'
  }
} 