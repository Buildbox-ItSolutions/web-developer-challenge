/// <reference types="cypress" />

/* faker */
import { faker } from '@faker-js/faker'

const postFaker = {
  name: faker.internet.userName(),
  message: faker.random.words(20)
}

describe('Add post', () => {
  it('Should disable the button if the name is not filled in', () => {
    cy.visit('http://localhost:3000')
    cy.get('textarea[name="message"]').type(postFaker.message)
    const button = cy.get('button')
    expect(button.eq(1).should('have.attr', 'disabled'))
  })
  it('Should disable the button if the message is not filled in', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="name"]').type(postFaker.name)
    const button = cy.get('button')
    expect(button.eq(1).should('have.attr', 'disabled'))
  })
})
