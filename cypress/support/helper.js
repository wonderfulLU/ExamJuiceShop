import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";

export function login(user) {

    cy.log('Open website login form');
    loginPage.visit();
    cy.log('Close Welcome Banner');
    cy.get('button[aria-label="Close Welcome Banner"]').click();

    cy.log('Check user is unauthorized');
    cy.getCookie('token').should('be.null');

    loginPage.submitLoginForm(user.email, user.password);

    loginPage.checkUserAut(user.email)

    cy.log('Accept cookies');
    cy.get('[aria-label="cookieconsent"] [aria-label="dismiss cookie message"]').click();
}

export function findProduct(user) {

    function findItem() {
        cy.get('mat-card .item-name').then(($items) => {
            
            for (let i = 0; i < $items.length; i++) {
                let item = $items[i];
                if (item.textContent === user.product) {
                    
                    cy.contains('.item-name', user.product)
                        .parents('.mat-card')
                        .within(() => {                            
                            cy.get('.btn-basket').click({force: true});
                        });
                        return;
                }
            }

           cy.get('button[aria-label="Next page"]').click({force: true}).then(findItem);
        });
    }
    findItem();
    cy.get('.mat-simple-snack-bar-content').should('contain', `Placed${user.product}into basket`);
   
};

