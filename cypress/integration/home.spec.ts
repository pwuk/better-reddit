describe('Home Page', () => {
    before(() => {
        cy.visit('http://localhost:4200');
    });

    it('should have a title', () => {
        cy.get('.title').should('contain', 'BetterReddit');
    });

    it('should have a search bar', () => {
        cy.get('input:first').should('have.attr', 'placeholder', 'Search...');
    });

    it('should have a post', () => {
        cy.get('app-post-overview').its('length').should('be.gte', 1);
    });
});
