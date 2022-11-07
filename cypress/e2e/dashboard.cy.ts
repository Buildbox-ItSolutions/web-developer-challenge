/// <reference types="Cypress" />
/// <reference types="cypress-file-upload" />

describe("Dashboard Test", () => {
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
});
