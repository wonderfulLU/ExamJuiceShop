/// <reference types="cypress"/> 

import user from "../fixtures/user.json"
import { faker } from '@faker-js/faker';
import homePage from "../support/pages/HomePage";


user.comment = faker.lorem.text().slice(0, 100);

it('Solve capcha', () => {

    homePage.visit();

    cy.log('Go to Feedback form');
    cy.visit('/#/contact');
    
    cy.get('#comment').should('be.empty').type(user.comment, { force: true })

    cy.log('Calculate captcha result and fill it in field');
    cy.get('#captcha').invoke('text').then((code) => {
        const result = eval(code);
        cy.log(result)
        cy.get('#captchaControl').should('be.empty').type(result);
    });

    cy.get('div.mat-slider-thumb').click({ force: true });    

    cy.get('#rating')
        .invoke('attr', 'aria-valuenow', '2').trigger('change');

    cy.get('.mat-slider-thumb-container').then(($element) => {

        $element.attr('style', 'transform: translateX(-25%);');

        cy.get('.mat-slider-thumb').click({ force: true });
    });

    cy.log('Click Submit button to send feedback');
    cy.get('#submitButton').should('contain', 'Submit').click();

    cy.log('Confirmation notification about sent feedback');
    cy.get('.mat-simple-snack-bar-content').should('contain', 'Thank you for your feedback');



})


