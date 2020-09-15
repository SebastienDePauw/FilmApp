describe('Routertest', function () {
    beforeEach(function () {
      cy.login();
    })
  
    it('Correct startup', function () {
      cy.visit('');
    });
  
    it('HttpGet films', function () {
      cy.server();
      cy.route({ method: 'GET', url: '/api/Film' });
    });
  
    it('Mock film get', function () {
      cy.server({ delay: 1000 });
      cy.route({ method: 'GET', url: '/api/Film', status: 200, response: 'fixture:film.json' });
      cy.visit('film/list');
      cy.get('[data-cy=filmCard]').should('have.length', 3)
    });
  
    it('Filter titel', function() {
      cy.server();
      cy.route({ method: 'GET', url: 'api/Film', status: 200, response: 'fixture:film.json' })
      cy.get('[data-cy=filterInput]').type('Jo');
      cy.get('[data-cy=filmCard]').should('have.length', 1)
    });
  
    it('on error should show error message', function () {
      cy.server();
      cy.route({ method: 'GET', url: 'api/Film', status: 500, response: 'ERROR' });
      cy.visit('film/list');
      cy.get('[data-cy=appError]').should('be.visible');
    });
  
    it('Routes naar voegtoe', function() {
      cy.login();
      cy.visit('');
      cy.get('[data-cy=voegFilmToe]').click();   
      cy.location().should((location) => expect(location.href).to.eq('http://localhost:4200/film/add') )
    });

    it('Routes naar watchlist', function() {
      cy.login();
        cy.visit('');
        cy.get('[data-cy=watchlist]').click();   
        cy.location().should((location) => expect(location.href).to.eq('http://localhost:4200/film/list') )
      });

    it('Routes naar login', function() {
        cy.visit('');
        cy.get('[data-cy=logout]').click();   
        cy.location().should((location) => expect(location.href).to.eq('http://localhost:4200/login') )
    });

    it('Routes naar registreer', function() {
        cy.visit('');
        cy.get('[data-cy=logout]').click();  
        cy.get('[data-cy=register]').click();   
        cy.location().should((location) => expect(location.href).to.eq('http://localhost:4200/register') )
    });
  });