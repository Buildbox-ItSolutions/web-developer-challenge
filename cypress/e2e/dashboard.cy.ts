/// <reference types="Cypress" />
/// <reference types="cypress-file-upload" />

describe("Dashboard InfoBox Test", () => {
  before(() => cy.visit("http://localhost:3000/"));

  it("Test type in input name", () => {
    cy.get('[data-cy="input-name"]').type("test name");
  });

  it("Test type in textfield", () => {
    cy.get('[data-cy="input-textfield"]').type(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    );
  });

  it("Test upload image", () => {
    const filePath = "../../src/shared/assets/Messi.png";
    cy.get('input[type="file"]').attachFile(filePath);
  });

  it("Test discard message", () => {
    cy.get('[data-cy="btn-discard"]').click();

    cy.get('[data-cy="input-name"]').should("have.value", "");
    cy.get('[data-cy="input-textfield"]').should("have.value", "");
  });

  const userName = "John Doe";
  const message = "Lorem Ipsum is simply dummy text.";
  const boxMessage = '[data-cy="box-message"]';

  it("Test send message", () => {
    cy.get('[data-cy="input-name"]').type(userName);

    cy.get('[data-cy="input-textfield"]').type(message);

    cy.get('[data-cy="btn-submit"]').click();

    cy.get(boxMessage).should("have.length", 1);
  });

  it("Test message content", () => {
    cy.get(`[data-cy="name-user"]`).first().should("have.text", userName);

    cy.get(`[data-cy="message-desc"]`).first().should("have.text", message);
  });
});
