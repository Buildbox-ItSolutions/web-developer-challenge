/// <reference types="Cypress" />
/// <reference types="cypress-file-upload" />

describe("InfoBox Test", () => {
  before(() => cy.visit("http://localhost:3000/"));

  const userName = "John Doe";
  const message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  it("Should fill the input name", () => {
    cy.get('[data-cy="input-name"]').type("test name");
  });

  it("Should fill the textarea description", () => {
    cy.get('[data-cy="input-textarea"]').type(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    );
  });

  it("Should testing the reset button", () => {
    cy.get('[data-cy="input-name"]').type(userName);
    cy.get('[data-cy="input-textarea"]').type(message);

    cy.get('[data-cy="button-link"]').click();

    cy.get('[data-cy="input-name"]').should("have.value", "");
    cy.get('[data-cy="input-textarea"]').should("have.value", "");
  });

  it("Should testing the button has disabled", () => {
    cy.get('[data-cy="input-name"]').should("have.value", "");
    cy.get('[data-cy="input-textarea"]').should("have.value", "");
    cy.get('[data-cy="button-submit"]').should('have.attr', 'disabled');
  });

});
