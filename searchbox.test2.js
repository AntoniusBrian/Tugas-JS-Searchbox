/// <reference types="cypress" />

describe('Searchbox Test',() => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    });

        it('Should try to login', () => {
            cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
          })
        });
    it('should type into searchbox and submit',() =>{
        cy.get('#searchTerm').type('Online Statements{enter}')
    });
    
    it('Should show search result page', () => {
        cy.get('a').contains('Zero - Online Statements').click()
    });
});
