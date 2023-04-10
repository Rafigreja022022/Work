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


   it.only('CT-1 - Pesquisar', () => {
      Pages.Pesquisar();
   })


   it.only('CT-2 - Registrar Contrato', () => {
      Pages.preencherContrato();
   })


   it.only('CT-3 - Enviar Imagens', () => {
      Pages.EnviarImagens();
   })


   it.only('CT-4 - Cancelamento de Contrato', () => {
      Pages.CancelamentoDeContrato();
   })


   it.only('CT-5 - Cadastrar Instituicao', () => {
      Pages.CadastrarInstituicao();
   })


   it.only('CT-6 - Registros de Faturamento', () => {
      Pages.RegistrosDeFaturamento();
   })


   it.only('CT-7 - Gerar Relatorios', () => {
      Pages.GerarRelatorios();
   })


   it.only('CT-8 - Cadastrar departamento de transito (Detran)', () => {
      Pages.preencherDadosDetran();

   })


});
