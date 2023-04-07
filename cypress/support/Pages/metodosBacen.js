const el = require('./elements').ELEMENTS;

class Pages {

    acessarbacen() {
        cy.visit('https://www.bcb.gov.br/estabilidadefinanceira/relacao_instituicoes_funcionamento');
        cy.get('.btn-primary').click()
        cy.contains('#conglomerado').click()
        //.should('be.equal', 'Bureau - Idea Maker')
        cy.screenshot();
    }

}

export default new Pages();
