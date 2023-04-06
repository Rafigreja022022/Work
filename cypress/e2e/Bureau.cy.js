/// <reference types="cypress" />

import Pages from '../support/Pages/metodos';

describe('Testes do sistema Bureau', () => {

   it('CT-0 - testar xpath', () => {
      Pages.testeXPath();   
   })   
   

   it('CT-0.1 - Entrar na pagina Bureau', () => {
      Pages.acessarPagLogin();
   })


   it('CT-0.2 - Preencher username e password', () => {
      Pages.preencherDadosDoLogin();
   })


   it('CT-2 - Preencher Contrato', () => {
      Pages.preencherContrato();
   })

   
   it('CT-8 - Preencher dados de um Detran', () => {
      Pages.preencherDadosDetran();

   })

   
});