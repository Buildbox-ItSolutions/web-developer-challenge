export class FailInLoadError extends Error {
  constructor(loadItem: string) {
    super(`Could not get ${loadItem}.`)
    this.name = 'FailInLoadError'
  }
}