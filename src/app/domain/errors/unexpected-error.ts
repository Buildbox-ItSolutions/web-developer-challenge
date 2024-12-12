export class UnexpectedError extends Error {
  constructor () {
    super('Something went wrong. Try again in a while.')
    this.name = 'UnexpectedError'
  }
}
