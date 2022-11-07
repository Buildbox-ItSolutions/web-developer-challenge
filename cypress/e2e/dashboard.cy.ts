/// <reference types="Cypress" />

describe("empty spec", () => {
  before(() => cy.visit("http://localhost:3000/"));

  it("passes", () => {
    expect(true).to.equal(true);
  });
});
