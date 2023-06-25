/// <reference types="cypress"/> 

import user from "../fixtures/user.json"
import { faker } from '@faker-js/faker';
import feedbackPage from "../support/pages/FeedbackPage";


user.comment = faker.lorem.text().slice(0, 100);

it('Solve capcha', () => {

    feedbackPage.visit();
    
    feedbackPage.fillComment(user.comment);

    feedbackPage.slider();

    feedbackPage.calcCaptcha();

    feedbackPage.submitButton();

    cy.log('Confirmation notification about sent feedback');
    cy.get('.mat-simple-snack-bar-content').should('contain', 'Thank you for your feedback');

})


