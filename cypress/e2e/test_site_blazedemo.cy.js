import { fakerPT_BR } from '@faker-js/faker';

describe('Compra de Passagem', () => {
  
    beforeEach(() => {
         cy.visit('/');
        
    });

    it('Compra de Passagem com sucesso', () => {
        cy.get('select[name="fromPort"]').select('São Paolo');
        cy.get('select[name="toPort"]').select('Rome');
        cy.get('input[type="submit"]').click();
        cy.get('h3').should('contain.text', 'Flights from São Paolo to Rome:');
        cy.get('input[type=submit]').eq(0).click();
        cy.get('h2').should('have.text','Your flight from TLV to SFO has been reserved.');
        cy.get('[name="inputName"]').type(fakerPT_BR.person.fullName());
        cy.get('[name="address"]').type(fakerPT_BR.location.streetAddress());
        cy.get('[name="city"]').type(fakerPT_BR.location.city());
        cy.get('[name="state"]').type(fakerPT_BR.location.state());
        cy.get('[name="zipCode"]').type(fakerPT_BR.location.zipCode());
        cy.get('[name="creditCardNumber"]').type(fakerPT_BR.finance.creditCardNumber());
        cy.get('[name="creditCardMonth"]').clear().type('12');
        cy.get('[name="creditCardYear"]').clear().type('2026');
        cy.get('[name="nameOnCard"]').type(fakerPT_BR.person.fullName());
        cy.get('#rememberMe').check().should('be.checked')
        cy.get('input[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank you for your purchase today!');
        

    });
});

    
