class HomePage {
    visit() {
        cy.visit('/');
        cy.log('Close Welcome Banner');
        cy.get('button[aria-label="Close Welcome Banner"]').click();
    }

    getLoginForm() {
        cy.log('Open Login form')
        cy.contains('span', 'Account').click();
        return cy.get('#navbarLoginButton').click();
    }

    getRegistrForm() {
        cy.log('Open Registration form')
        return cy.get('#newCustomerLink .primary-link').click();
    }

    fillRegistrForm(email, password, answer) {
        cy.log('Fill fields for registration');
        cy.get('#emailControl').should('be.empty').type(email).should('have.value', email);
        cy.get('#passwordControl').should('be.empty').type(password).should('have.value', password);
        cy.get('#repeatPasswordControl').should('be.empty').type(password).should('have.value', password);
        cy.get('mat-select[role="combobox"] .mat-select-placeholder').click();
        cy.get('#mat-option-10').should('contain', 'Last name of dentist').click();
        cy.get('#securityAnswerControl').should('be.empty').type(answer).should('have.value', answer);
    }

    submitButton() {
        cy.log('Click Register button');
        cy.get('#registerButton').should('contain', 'Register').click();
    }

    registrationForAut(email, password, answer) {
        cy.log('Open website login form');
        this.visit();
        this.getLoginForm();
        this.getRegistrForm();
        this.fillRegistrForm(email, password, answer);
        this.submitButton();

        cy.get('[aria-hidden="true"] .mat-simple-snack-bar-content').should('have.text', 'Registration completed successfully. You can now log in.')
        cy.log('Registration is succesfully');
    }
    
}
export default new HomePage();