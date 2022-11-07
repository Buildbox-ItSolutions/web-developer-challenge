/// <reference types="Cypress" />

describe("empty spec", () => {
  before(() => cy.visit("http://localhost:3000/"));

  it("Test type in input name", () => {
    cy.get('[data-cy="input-name"]').type("test name");
  });

  it("Test type in textfield", () => {
    cy.get('[data-cy="input-textfield"]').type(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    );
  });
});
