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

  cy.log('Fill fields for registration');
  cy.get('#emailControl').should('be.empty').type(user.email).should('have.value', user.email);
  cy.get('#passwordControl').should('be.empty').type(user.password).should('have.value', user.password);
  cy.get('#repeatPasswordControl').should('be.empty').type(user.password).should('have.value', user.password);
  cy.get('mat-select[role="combobox"] .mat-select-placeholder').click();
  cy.get('#mat-option-10').should('contain', 'Last name of dentist').click();
  cy.get('#securityAnswerControl').should('be.empty').type(user.answer).should('have.value', user.answer);

  cy.log('Click Register button');
  cy.get('#registerButton').should('contain', 'Register').click();

  cy.get('[aria-hidden="true"] .mat-simple-snack-bar-content').should('have.text', 'Registration completed successfully. You can now log in.')
  cy.log('Registration is succesfully');

})
