describe('Tests in home page', () => {

    it('Visit home page', () => {
        cy.visit('/')
    });

    it('Must have component Header', () => {
        cy.get('[data-cy=header').should('be.visible');
        cy.get('[data-cy=logo').should('be.visible');
    });

    it('Must have component NewPost', () => {
        cy.get('[data-cy=postImgPreview').should('be.visible');
        cy.get('[data-cy=postInputAuthor').should('be.visible');
        cy.get('[data-cy=postInputMsg').should('be.visible');
        cy.get('[data-cy=discartButton').should('be.visible');
        cy.get('[data-cy=publishButton').should('be.visible');
    });

    it('Testing picture uploading', () => {
        const fixtureFile = 'testPicture.png';
        cy.get('[data-cy=fileInput]').attachFile(fixtureFile);
        
    });

    it('Must make new post to Feed', () => {
        cy.get('[data-cy=postImgPreview').should('be.visible');
        cy.get('[data-cy=postInputAuthor').type('Lorem Harryson');
        cy.get('[data-cy=postInputMsg').type("There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.");
    });

    it('Must remove picture', () => {
        cy.get('[data-cy=removePicturePreview').should('be.visible');
        cy.get('[data-cy=removePicturePreview').click();
    });

    it('Must change picture', () => {
        const fixtureFile = 'testPicture2.png';
        cy.get('[data-cy=fileInput]').attachFile(fixtureFile);
        
    });

    it('Must publish new post', () => {
        cy.get('[data-cy=publishButton').click();
    });

    it('Must have a new post on Feed', () => {
        cy.get('[data-cy=newPost').should('be.visible');
        cy.get('[data-cy=removePostButton').should('be.visible');
        cy.get('[data-cy=postMsg').should('be.visible');
        cy.get('[data-cy=postAuthor').should('be.visible');
        cy.get('[data-cy=postPicture').should('be.visible');
    });

    it('Must remove a post by clicking on button', () => {
        cy.get('[data-cy=removePostButton]').click();
    });

    it('Must have a empty feed', () => {
        cy.get('[data-cy=emptyFeed]').contains('Tente adicionar um post primeiro....')
    });
})  
