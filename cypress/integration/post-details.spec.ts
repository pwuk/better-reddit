describe('Post Details Page', () => {
    before(() => {
        cy.visit('http://localhost:4200');
        cy.get('app-post-overview:first').click();
    });

    it('should have a back button', () => {
        cy.get('.back-button').should('exist');
    });

    it('should have an author', () => {
        cy.get('.post__header__details-author').should('have.length.gte', 1);
    });
});
