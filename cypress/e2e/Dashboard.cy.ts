/// <reference types="Cypress" />
/// <reference types="cypress-file-upload" />

const user = 'Vinicius Parizoto'
const message = 'Está é uma mensagem de teste.'
const photo = '../../public/imgs/logo.png'

describe('InfoBox Test', () => {
  before(() => cy.visit('http://localhost:3000/'))

  it('should upload a image', () => {
    cy.get('input[type="file"]').attachFile(photo)
    cy.get('[data-cy="button-delete-img"]').click()
  })

  it('should let write in input', () => {
    cy.get('[data-cy="cy-name"]').type(user)
    cy.get('[data-cy="cy-name"]').should('have.value', user).clear()
  })

  it('should let write in textarea', () => {
    cy.get('[data-cy="cy-textarea"]').type(message)
    cy.get('[data-cy="cy-textarea"]').should('have.value', message).clear()
  })

  it('should activate the button after filling all the fields', () => {
    cy.get('[data-cy="button-send"]').should('have.attr', 'disabled')

    cy.get('input[type="file"]').attachFile(photo)
    cy.get('[data-cy="cy-name"]').type(user)
    cy.get('[data-cy="cy-textarea"]').type(message)

    cy.get('[data-cy="button-send"]').should('not.have.attr', 'disabled')

    cy.get('[data-cy="button-delete-img"]').click()
  })

  it('should reset when click discard button', () => {
    cy.get('[data-cy="cy-name"]').clear().type(user)
    cy.get('[data-cy="cy-textarea"]').clear().type(message)

    cy.get('[data-cy="button-reset"]').click()

    cy.get('[data-cy="cy-name"]').should('have.value', '')
    cy.get('[data-cy="cy-textarea"]').should('have.value', '')
  })

  it('should add a post', () => {
    cy.get('input[type="file"]').attachFile(photo)
    cy.get('[data-cy="cy-name"]').type(user)
    cy.get('[data-cy="cy-textarea"]').type(message)
    cy.get('[data-cy="button-send"]').should('not.have.attr', 'disabled')

    cy.get('[data-cy="button-send"]').click()

    cy.get('[data-cy="cy-feed"]').should('have.length', 1)
  })

  it('should show first post and author name', () => {
    cy.get(`[data-cy="cy-feed-message"]`)
      .first()
      .should('have.text', message)
    cy.get(`[data-cy="cy-feed-name"]`).first().should('have.text', user)
  })
})
