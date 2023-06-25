class LoginPage {
    visit() {
        cy.visit('/#/login');
        
    }    

    getEmailField() {
        return cy.get('#email');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getLogInButton() {
        return cy.get('#loginButton .mat-button-wrapper');
    }

    submitLoginForm(email, password) {
        cy.log('Submit login form');

        this.getEmailField().type(email)
        this.getPasswordField().type(password)
        this.getLogInButton().click()
    }

    checkUserAut(email) {
        cy.log('Check user is authorized');
        cy.get('#navbarAccount').click();
        cy.get('[aria-label="Go to user profile"]').should('contain', email)
    }
}

export default new LoginPage();