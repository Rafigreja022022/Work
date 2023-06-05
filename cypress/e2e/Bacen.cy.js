/// <reference types="cypress" />

import Pages from '../support/Pages/metodos';

// cypress/integration/exemplo.spec.js

describe('Cenario de testes funcionais', () => {
    it('Realizar login', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://sandbox-bureauregistryapi.ideamaker.com.br/api/contratos/12345678911111111119',

        }
        )
    })
})