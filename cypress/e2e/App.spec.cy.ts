describe('Canonical Blog', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the page', () => {
    cy.get('.l-application').should('exist');
    cy.get('.l-main').should('exist');
  });

  it('renders blog posts', () => {
    cy.get('.blog-post-col').should('have.length.gte', 1);
  });
});
