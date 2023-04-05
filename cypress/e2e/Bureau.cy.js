/// <reference types="cypress" />

import Pages from '../support/Pages/metodos';

describe('Realizar o preenchimento de um contrato novo', () => {
   it('CT-1 - Entrar na pagina Bureau', () => {
      Pages.acessarPagLogin();
   })


   it('CT-2 - Preencher username e password', () => {
      Pages.preencherDadosDoLogin();
   })


   it('CT-3 - Preencher dados de um Detran', () => {
      Pages.preencherDadosDetran();

   })


   it.only('CT-4 - Preencher Contrato', () => {
      Pages.preencherContrato();
   })

   
   it('CT-5 - testar xpath', () => {
      Pages.testeXPath();

   })

   
});