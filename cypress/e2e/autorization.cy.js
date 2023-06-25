/// <reference types="cypress"/> 

import loginPage from "../support/pages/LoginPage";
import homePage from "../support/pages/HomePage";
import user from "../fixtures/user.json";

before ('Authorize user', () => {
    homePage.registrationForAut(user.email, user.password, user.answer)
})

it('Autorization', () => {

    cy.log('Open website login form');
    loginPage.visit();

    cy.log('Check user is unauthorized');
    cy.getCookie('token').should('be.null');

    loginPage.submitLoginForm(user.email, user.password);

    loginPage.checkUserAut(user.email);
    
})