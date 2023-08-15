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


   it('CT-1 - Pesquisar', () => {
      Pages.Pesquisar();
   })


   it.only('CT-2 - Registrar Contrato', () => {
      Pages.preencherContrato();
   })


   it('CT-3 - Enviar Imagens', () => {
      Pages.EnviarImagens();
   })


   it('CT-4 - Cancelamento de Contrato', () => {
      Pages.CancelamentoDeContrato();
   })


   it('CT-5 - Cadastrar Instituicao', () => {
      Pages.CadastrarInstituicao();
   })


   it('CT-6 - Registros de Faturamento', () => {
      Pages.RegistrosDeFaturamento();
   })


   it('CT-7 - Gerar Relatorios', () => {
      Pages.GerarRelatorios();
   })


   it('CT-8 - Cadastrar departamento de transito (Detran)', () => {
      Pages.preencherDadosDetran();

   })

   
   it('CT-9 - Cadastrar Agentes - Supervisor', () => {
      Pages.cadastrarAgentesSupervisor();

   })


   it('CT-9_1 - Cadastrar Agentes - Operador', () => {
      Pages.cadastrarAgentesOperador();

   })


   it('CT-9_2 - Consultar Agentes', () => {
      Pages.consultarAgentes();

   })


});
