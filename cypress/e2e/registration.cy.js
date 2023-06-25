/// <reference types="cypress"/> 

import homePage from "../support/pages/HomePage";
import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 13 });
user.answer = faker.person.firstName();


it('Registration', () => {

  cy.log('Open website login form');
  homePage.visit();
  homePage.getLoginForm();
  homePage.getRegistrForm();

  homePage.fillRegistrForm(user.email, user.password, user.answer);
  homePage.submitButton();  

  cy.get('[aria-hidden="true"] .mat-simple-snack-bar-content').should('have.text', 'Registration completed successfully. You can now log in.')
  cy.log('Registration is succesfully');

})
