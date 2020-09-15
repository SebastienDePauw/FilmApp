describe('Form validation with wrong input shows error message', function() {
    beforeEach(function () {
        cy.login();
      })

    it('Touch required fields show error', function(){
        cy.visit('/film/add');
        cy.get('[data-cy=submitButton]').should('be.disabled');

        cy.get('[data-cy=titelInput]').click(),
        cy.get('[data-cy=jaarInput]').click(),
        cy.get('[data-cy=minutenInput]').click(),

        cy.get('[data-cy=beschrijvingInput]').click(),
        cy.get('[data-cy=storylineInput]').click(),
        
        cy.get('[data-cy=naamActInput]').click(),

        cy.get('[data-cy=titelError]').should('be.visible'),
        cy.get('[data-cy=jaarError]').should('be.visible'),
        cy.get('[data-cy=minutenError]').should('be.visible'),

        cy.get('[data-cy=beschrijvingError]').should('be.visible'),
        cy.get('[data-cy=storylineError]').should('be.visible'),

        cy.get('[data-cy=submitButton]').should('be.disabled');
    })
});

describe('Form validation tests with correct input but no photo cant submit', function () {
    beforeEach(function () {
      cy.login();
    })
    it('Form filled in correctly enables submit button', function() {
      cy.visit('/film/add');
      cy.get('[data-cy=submitButton]').should('be.disabled');
  
      cy.get('[data-cy=titelInput]').type('Joker'),
      cy.get('[data-cy=jaarInput]').type('2019'),
      cy.get('[data-cy=minutenInput]').type(120),
      cy.get('[data-cy=categorieInput]').click(),
      cy.get('.mat-option').contains('Actie').click(),
  
      cy.get('[data-cy=beschrijvingInput]').type("beschrijving"),
      cy.get('[data-cy=storylineInput]').type("storyline"),
      cy.get('[data-cy=naamActInput]').type('Joaquin Phoenix'),
      cy.get('[data-cy=rolInput]').type('Joker'),
      cy.get('[data-cy=naamRegInput]').type('Todd Phillips'),
      
      cy.get('[data-cy=submitButton]').should('be.disabled');
    })
  });
