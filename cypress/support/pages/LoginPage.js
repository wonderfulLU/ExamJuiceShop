class LoginPage {
    visit(){
        cy.visit('/#/login');
        cy.log('Close Welcome Banner');
        cy.get('button[aria-label="Close Welcome Banner"]').click();
    }

    getEmailField(){
        return cy.get('#email');
    }

    getPasswordField(){
        return cy.get('#password');
    }

    getLogInButton(){
        return cy.get('#loginButton .mat-button-wrapper');
    }

    submitLoginForm(email, password){
        cy.log('Submit login form');

        this.getEmailField().type(email)
        this.getPasswordField().type(password)
        this.getLogInButton().click()
    }
    
}

export default new LoginPage();