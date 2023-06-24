/// <reference types="cypress"/> 

import loginPage from "../support/pages/LoginPage";
import user from "../fixtures/user.json";

it('Autorization', () => {

    cy.log('Open website login form');
    loginPage.visit();

    cy.log('Check user is unauthorized');
    cy.getCookie('token').should('be.null');

    loginPage.submitLoginForm(user.email, user.password);

    cy.log('Check user is authorized');
    cy.get('#navbarAccount').click();
    cy.get('[aria-label="Go to user profile"]').should('contain', user.email)
})