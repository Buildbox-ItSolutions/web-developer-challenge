/// <reference types="Cypress" />
/// <reference types="cypress-file-upload" />

describe("InfoBox Test", () => {
  before(() => cy.visit("http://localhost:3000/"));

  it("Test type in input name", () => {
    cy.get('[data-cy="input-name"]').type("test name");
  });
});
