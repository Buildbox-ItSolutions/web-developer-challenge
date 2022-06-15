context("Enters the page on Desktop ViewPort and publish a post", () => {
  it("Enters the page ", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1024, 752);

    cy.get("header").find("img").should("be.visible");
  })

  it("Fill text areas ", () => {
    cy.get("input[type=file]").scrollIntoView();
    cy.get("input[type=text]").type("Max Milan");
    cy.get("textarea").type("Eu sou um Desenvolvedor Front-End e esta sendo realizado o teste Cypress, seja muito bem vindo a plataforma buildbox! ");
    cy.scrollTo("top");

  })

  it("Select an image ", () => {
    const photoPath = "cypress/fixtures/Max.png";
    cy.get("input[type=file]").selectFile(photoPath, { force: true });

  })

  it("Publish the post ", () => {
    cy.get("button[type=submit]").click();
    cy.get('section').should('be.visible');
    cy.get(".Toastify__toast").should('not.exist');
  })

  it("Try some errors in form box ", () => {
    cy.scrollTo("top")
    cy.get("button[type=submit]").click()
    cy.get(".Toastify__toast").should('not.exist');
    cy.get("input[type=text]").type("Ou");
    cy.get("button[type=submit]").click();
    cy.get("input[type=text]").type("tra pessoa");
    cy.get("button[type=submit]").click();
    cy.get('.vBmGg').click(); // Botão descartar
  })

  it("Remove post", () => {
    cy.get("section>div").find("img").first().click();
  })
})
