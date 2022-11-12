export class FailInToSave extends Error {
  constructor(saveItem: string) {
    super(`Could not save ${saveItem}.`)
    this.name = 'FailInToSave'
  }
}