/// <reference types="Cypress" />
/// <reference types="cypress-file-upload" />

describe("InfoBox Test", () => {
  before(() => cy.visit("http://localhost:3000/"));

  const userName = "John Doe";
  const message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  const boxMessage = '[data-cy="feed-card"]';

  it("Should fill the input name", () => {
    cy.get('[data-cy="input-name"]').type("test name");
  });

  it("Should fill the textarea description", () => {
    cy.get('[data-cy="input-textarea"]').type(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    );
  });

  it("Should upload a image", () => {
    const filePath = "../../src/assets/buildbox.jpg";
    cy.get('input[type="file"]').attachFile(filePath);
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

  it("Should show a mensagem in feed list", () => {
    cy.get('[data-cy="input-name"]').type(userName);
    cy.get('[data-cy="input-textarea"]').type(message);
    cy.get('[data-cy="button-submit"]').should('not.have.attr', 'disabled');

    cy.get('[data-cy="button-submit"]').click();

    cy.get(boxMessage).should("have.length", 1);
  });

  it("Should testing the first message in feed", () => {
    cy.get(`[data-cy="feed-card-description"]`).first().should("have.text", message);
    cy.get(`[data-cy="feed-card-author"]`).first().should("have.text", userName);
  });
});
