class HomePage {
    visit(){
        cy.visit('/');
        cy.log('Close Welcome Banner');
        cy.get('button[aria-label="Close Welcome Banner"]').click();        
    }

    getLoginForm(){
        cy.log('Open Login form')
        cy.contains('span', 'Account').click();
        return cy.get('#navbarLoginButton').click();
    }

    getRegistrForm(){
        cy.log('Open Registration form')
        return cy.get('#newCustomerLink .primary-link').click();        
    }
}
export default new HomePage();