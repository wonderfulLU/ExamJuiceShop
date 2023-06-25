class FeedbackPage {
    visit() {
        cy.log('Go to Feedback form');
        cy.visit('/#/contact');
        cy.log('Close Welcome Banner');
        cy.get('button[aria-label="Close Welcome Banner"]').click({ force: true });
    }

    calcCaptcha() {
        cy.log('Calculate captcha result and fill it in field');
        cy.get('#captcha').invoke('text').then((code) => {
            const result = eval(code);
            cy.log(result)
            cy.get('#captchaControl').should('be.empty').type(result);
        });
    }

    fillComment(comment) {
        cy.log('Type mandatory comment');
        cy.get('#comment').should('be.empty').type(comment, { force: true })
    }

    slider() {
        cy.log('Put slider do another place');
        cy.get('div.mat-slider-thumb').click({ force: true });

        cy.get('#rating')
            .invoke('attr', 'aria-valuenow', '2').trigger('change');

        cy.get('.mat-slider-thumb-container').then(($element) => {

            $element.attr('style', 'transform: translateX(-25%);');

            cy.get('.mat-slider-thumb').click({ force: true });
        });
    }

    submitButton() {
        cy.log('Click Submit button to send feedback');
        cy.get('#submitButton').should('contain', 'Submit').click();
    }
    
}

export default new FeedbackPage();