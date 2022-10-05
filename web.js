/// <reference types="cypress" />

describe('working with inputs' , () => {
        it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com')
            });

        it('Should Try to Login With Locked Out User', () => {
            cy.get('#user-name').clear()
            cy.get('#user-name').type('locked_out_user')
            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type('secret_sauce')

            cy.get('input[name="login-button"]').click()
           
            });
        
        it('Should Try to Login With Problem User', () => {
            cy.get('#user-name').clear()
            cy.get('#user-name').type('problem_user')
            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type('secret_sauce')

            cy.get('input[name="login-button"]').click()
            cy.get('#react-burger-menu-btn').click()
            cy.get('#logout_sidebar_link').click()
            });

        it('Should Try to Login With Valid User ', () => {
            cy.fixture("id").then(user =>{
                const username = user.username
                const password = user.password

                cy.get('#user-name').clear()
                cy.get('#user-name').type(username)
    
                cy.get('input[name="password"]').clear()
                cy.get('input[name="password"]').type(password)
    
                cy.get('input[name="login-button"]').click()
                });
            });
        it('Should Try to Checkout',() => {
            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get(".shopping_cart_link").click()
            cy.get('#checkout').click()
            cy.get('input[name="firstName"]').type('antonius')
            cy.get('input[name="lastName"]').type('brian')
            cy.get('input[name="postalCode"]').type('16124')
            cy.get('#continue').click()
            cy.get('#finish').click()
            });
    });