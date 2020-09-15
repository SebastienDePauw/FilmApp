describe('My First Test', function() {
  it('our app runs', function() {
    cy.visit('/');
    cy.get('[data-cy=filterInput]').type('Jo');
    cy.get('[data-cy=filmCard]').should('have.length', 1);
  });
  it('mock film get', function() {
    cy.server({ delay: 1000 });
    cy.route({
      method: 'GET',
      url: '/api/Film',
      status: 200,
      response: 'fixtures:film.json'
    });
    cy.visit('/');
    cy.get('[data-cy=filmCard]').should('have.length', 3);
  });
  it('on error should show error message', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/Film',
      status: 500,
      response: 'ERROR'
    });
    cy.visit('/');
    cy.get('[data-cy=appError]').should('be.visible');
  });
});