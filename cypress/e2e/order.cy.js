/// <reference types="cypress"/> 

import user from "../fixtures/user.json"
import { findProduct, login } from "../support/helper.js"

beforeEach(() => {

  login(user);
})

it('Ordering some item', () => {

  cy.log(`Find product ${user.product}`);

  cy.log('Check that busket is empty');  

  findProduct(user)

  cy.log('Check that busket is not empty');
  cy.get('[aria-label="Show the shopping cart"] .fa-layers-counter').should('not.contain', '0');

  cy.get('button[aria-label="Show the shopping cart"]').click({force: true});
  
})
