/// <reference types="cypress" />

describe('Searchbox Test',() => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    it('should type into searchbox and submit',() =>{
        cy.get('#searchTerm').type('Free Access to Online Banking{enter}')
    });
    
    it('Should show search result page', () => {
        cy.get('a').contains('Zero - Free Access to Online Banking').click()
    });
});

