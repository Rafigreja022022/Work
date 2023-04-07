const el = require('./elements').ELEMENTS;

class Pages {

    acessarPagLogin() {                                                         // Validar a pagina para realizar o login 
        cy  .visit(Cypress.env('Url'));
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('PaginaLogin');
    }  


    preencherDadosDoLogin() {                                                   // Validar o preenchimento e login 
        cy  .visit(Cypress.env('Url'));
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('001-PaginaLogin');
        
        cy  .get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy  .get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('002-DadosLoginPreenchidos');
        
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('003-LoginRealizadoComSucesso');

    }


    preencherDadosDetran() {                                                    // Validar o cadastro de um Detran 
        cy  .visit(Cypress.env('Url'));
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('01-PaginaLogin');
        
        cy  .get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy  .get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('02-DadosLoginPreenchidos');

        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('03-LoginRealizadoComSucesso');

        cy  .get('#cadastrar-detran > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .should('be.visible')
            .should('be.have', '#cadastrar-detran > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .click()
        cy  .get('[data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]')
            .should('be.visible')

        cy  .get(el.campoEstadoDetran)
            .should('be.visible')
            .focus()
            .type('SP - São Paulo')
        cy  .xpath('//*[@id=":r3:-option-0"]')
            .click()
        cy  .get(el.campoCNPJDetran)
            .should('be.visible')
            .type(Cypress.env('CNPJDetran'))
            .should('be.have', 'CNPJDetran')
        cy  .get(el.campoDataInicioDetran)
            .type(Cypress.env('DataInicioDetran'))
            .should('be.have', 'DataInicioDetran')
        cy  .get(el.campoDataCadastroDetran)
            .type(Cypress.env('DataCadastroDetran'))
            .should('be.have', 'DataCadastroDetran')
        cy  .get(el.campoDataVencimentoDetran)
            .type(Cypress.env('DataVencimentoDetran'))
            .should('be.have', 'DataVencimentoDetran')
        cy  .get(el.campoNomeDoContatoDetran)
            .should('be.visible')
            .type(Cypress.env('NomeDoContatoDetran'))
            .should('be.have', 'NomeDoContatoDetran')
        cy  .get(el.campoDepartamentoDetran)
            .should('be.visible')
            .type(Cypress.env('DepartamentoDetran'))
            .should('be.have', 'DepartamentoDetran')
        cy  .get(el.campoTelefoneDetran)
            .should('be.visible')
            .type(Cypress.env('TelefoneDetran'))
            .should('be.have', 'TelefoneDetran')
        cy  .get(el.campoEmailDetran)
            .should('be.visible')
            .type(Cypress.env('EmailDetran'))
            .should('be.have', 'EmailDetran')
        cy  .screenshot('04-DadosDetranPreenchidos');
        cy  .get(':nth-child(2) > [data-testid="button-component"]')
            .click()
        cy  .screenshot('05-DadosDetranEnviadoComSucesso')

    }


    preencherContrato() {                                                       // Preencher dados de um contrato - Flag 1 
        cy  .visit(Cypress.env('Url'));
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('1-PaginaLogin');
        
        cy  .get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy  .get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('2-DadosLoginPreenchidos');

        cy  .get('#novo-contrato > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')       // Dados Contrato
            .should('be.visible')
        cy  .screenshot('3-SistemaLogado')
        cy  .get('#novo-contrato > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .click()
        cy  .get(el.campoContrato)
            .focus()
            .type(Cypress.env('contrato'))
            .should('be.have', 'contrato')
        cy  .get(el.campoDataVigente)
            .focus()
            .type(Cypress.env('datavigente'))
            .should('be.have', 'datavigente')
        cy  .get(el.campoEstado1)
            .focus()
            .type(Cypress.env('estado'))
        cy  .xpath('//*[@id=":r5:-option-1"]')
            .click()
            cy  .get(el.campoTipodaRestricao)
            .focus()
            .type(Cypress.env('tipodarestricao'))
        cy  .xpath('//*[@id=":r9:-option-0"]')
            .click()
        cy  .get(el.campoNumRestricao)
            .focus()
            .type(Cypress.env('numrestricao'))
            .should('be.have', 'numrestricao')
        cy  .get(el.campoValorTotal)
            .focus()
            .type(Cypress.env('valortotal'))
            .should('be.have', 'valortotal')
        cy  .get(el.campoQtdeParcelas)
            .focus()
            .type(Cypress.env('qtdeparcelas'))
            .should('be.have', 'qtdeparcelas')
        cy  .get(el.campoValorDaParcela)
            .focus()
            .type(Cypress.env('valordaparcela'))
            .should('be.have', 'valordaparcela')
        cy  .get(el.campo1Parcela)
            .focus()
            .type(Cypress.env('1parcela'))
            .should('be.have', '1parcela')
        cy  .get(el.campoUltimaParcela)
            .focus()
            .type(Cypress.env('ultimaparcela'))
            .should('be.have', 'ultimaparcela')    
        cy  .get(el.campoJurosMensal)
            .focus()
            .type(Cypress.env('jurosmensal'))
            .should('be.have', 'jurosmensal')
        cy  .get(el.campoJurosAnual)
            .focus()
            .type(Cypress.env('jurosanual'))
            .should('be.have', 'jurosanual')
        cy  .get(el.campoIndice)
            .focus()
            .type(Cypress.env('indice'))
        cy  .xpath('//*[@id=":rn:-option-0"]')
            .click() 
        cy  .get(el.campoValorIof)
            .focus()
            .type(Cypress.env('valoriof'))
            .should('be.have', 'valoriof')
        cy  .get(el.campoLiberacao)
            .focus()
            .type(Cypress.env('liberacao'))
            .should('be.have', 'liberacao')            
        cy  .get(el.campocodigo)
            .focus()
            .type(Cypress.env('codigo'))
            .should('be.have', 'codigo') 
        cy  .get(el.campomunicipio)
            .focus()
            .type(Cypress.env('municipio'))
            .should('be.have', 'municipio')
        cy  .get(el.campoEstado2)
            .focus()
            .type(Cypress.env('estado'))
        cy  .xpath('//*[@id=":rt:-option-1"]')
            .click()
        cy  .get(':nth-child(1) > .sc-iBkjds > .sc-dIouRR > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy  .get(':nth-child(2) > .sc-iBkjds > .sc-dIouRR > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()    
        cy  .get(':nth-child(3) > .dXXCrT > .sc-dIouRR > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy  .get('.lkiREi > .hIA-dKQ > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy  .screenshot('4-ContratoPreenchido')

        cy  .get('.sc-jGprRt > :nth-child(2)')                                          // Dados Consórcio
            .click()
        cy  .get(el.camponumerogrupo)
            .focus()
            .type(Cypress.env('numerogrupo'))
            .should('be.have', 'numerogrupo')
        cy  .get(el.camponumerocota)
            .focus()
            .type(Cypress.env('numerocota'))
            .should('be.have', 'numerocota')
        cy  .screenshot('5-DadosConsorcio')

        cy  .get('.sc-jGprRt > :nth-child(3)')                                          // Dados Aditivo
            .click()
        cy  .get(el.camponumeroaditivo)
            .focus()
            .type(Cypress.env('numeroaditivo'))
            .should('be.have', 'numeroaditivo')
        cy  .get(el.campodataaditivo)
            .focus()
            .type(Cypress.env('dataaditivo'))
            .should('be.have', 'dataaditivo')
        cy  .get(':nth-child(3) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy  .screenshot('6-DadosAditivo')

        cy  .get('.sc-jGprRt > :nth-child(4)')                                      // Dados Vendedor
            .click()
        cy  .get(el.campocnpjvendedor)
            .focus()
            .type(Cypress.env('cnpjvendedor'))
            .should('be.have', 'cnpjvendedor')
        cy  .screenshot('7-DadosVendedor')

        cy  .get('.sc-jGprRt > :nth-child(5)')                                      // Dados Recebedor
            .click()
        cy  .get(el.campocpfrecebedor)
            .focus()
            .type(Cypress.env('cpfrecebedor'))
            .should('be.have', 'cpfrecebedor')
        cy  .screenshot('8-DadosRecebedor')

        cy  .get('.sc-jGprRt > :nth-child(6)')                                      // Dados Veiculos
            .click()
        cy  .get(':nth-child(1) > .guuuIH > .sc-dIouRR > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy  .get(':nth-child(3) > .guuuIH > .sc-dIouRR > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy  .get(el.campoplaca)
            .focus()
            .type(Cypress.env('placa'))
            .should('be.have', 'placa')
        cy  .get(el.campochassi)
            .focus()
            .type(Cypress.env('chassi'))
            .should('be.have', 'chassi')
        cy  .get(el.campoufplaca)
            .focus()
            .type(Cypress.env('ufplaca'))
        cy  .xpath('//*[@id=":r1e:-option-0"]')
            .click()
        cy  .get(el.camporenavam)
            .focus()
            .type(Cypress.env('renavam'))
            .should('be.have', 'renavam')    
        cy  .get(el.campoanofabricacao)
            .focus()
            .type(Cypress.env('anofabricacao'))
            .should('be.have', 'anofabricacao')
        cy  .get(el.campoanomodelo)
            .focus()
            .type(Cypress.env('anomodelo'))
            .should('be.have', 'anomodelo')
        cy  .get(el.campocor)
            .focus()
            .type(Cypress.env('cor'))
            .should('be.have', 'cor')
        cy  .get(el.campomarca)
            .focus()
            .type(Cypress.env('marca'))
            .should('be.have', 'marca')
        cy  .get(el.campomodelo)
            .focus()
            .type(Cypress.env('modelo'))
            .should('be.have', 'modelo')
        cy  .get(el.campoespecie)
            .focus()
            .type(Cypress.env('especie'))
            .should('be.have', 'especie')    
        cy  .screenshot('9-DadosVeiculos')

        cy  .get('.sc-jGprRt > :nth-child(7)')                                      // Dados Credor
            .click()
        cy  .get(el.camponomecredor)
            .focus()
            .type(Cypress.env('nomecredor'))
            .should('be.have', 'nomecredor')
        cy  .get(el.campocnpjcredor)
            .focus()
            .type(Cypress.env('cnpjcredor'))
            .should('be.have', 'cnpjcredor')
        cy  .get(el.campocepcredor)
            .focus()
            .type(Cypress.env('cepcredor'))
            .should('be.have', 'cepcredor')
        cy  .get(el.camponumerocredor)
            .focus()
            .type(Cypress.env('numerocredor'))
            .should('be.have', 'numerocredor')    
        cy  .get(el.campoemailcredor)
            .focus()
            .type(Cypress.env('emailcredor'))
            .should('be.have', 'emailcredor')
        cy  .get(el.campotelefonecredor)
            .focus()
            .type(Cypress.env('telefonecredor'))
            .should('be.have', 'telefonecredor')
        cy  .screenshot('10-DadosCredor')
        
        cy  .get('.sc-jGprRt > :nth-child(8)')                                      // Dados Devedor
            .click()
        cy  .get(el.camponomedevedor)
            .focus()
            .type(Cypress.env('nomedevedor'))
            .should('be.have', 'nomedevedor')
        cy  .get(el.campocpfdevedor)
            .focus()
            .type(Cypress.env('cpfdevedor'))
            .should('be.have', 'cpfdevedor')
        cy  .get(el.campocepdevedor)
            .focus()
            .type(Cypress.env('cepdevedor'))
            .should('be.have', 'cepdevedor')
        cy  .get(el.camponumerodevedor)
            .focus()
            .type(Cypress.env('numerodevedor'))
            .should('be.have', 'numerodevedor')    
        cy  .get(el.campoemaildevedor)
            .focus()
            .type(Cypress.env('emaildevedor'))
            .should('be.have', 'emaildevedor')
        cy  .get(el.campotelefonedevedor)
            .focus()
            .type(Cypress.env('telefonedevedor'))
            .should('be.have', 'telefonedevedor')
        cy  .screenshot('11-DadosDevedor')
        
        cy  .get('.sc-jGprRt > :nth-child(9)')                                      // Imagens
            .click()
        cy  .screenshot('12-DadosImagens')
        
        //cy  .get('.sc-jGprRt > :nth-child(10)')                                     // Terc. Garantidor
        //    .click()
        //cy  .get(el.campoNomeTerc)
        //    .focus()
        //    .type(Cypress.env('nometerc'))
        //    .should('be.have', 'nometerc')
        //cy  .get(el.campoCPFTerc)
        //    .focus()
        //    .type(Cypress.env('cpfterc'))
        //    .should('be.have', 'cpfterc')
        //cy  .get(el.campoCEPTerc)
        //    .focus()
        //    .type(Cypress.env('cepterc'))
        //    .should('be.have', 'cepterc')
        //cy  .get(el.campoNumeroTerc)
        //    .focus()
        //    .type(Cypress.env('numeroterc'))
        //    .should('be.have', 'numeroterc')    
        //cy  .get(el.campoEmailTerc)
        //    .focus()
        //    .type(Cypress.env('emailterc'))
        //    .should('be.have', 'emailterc')
        //cy  .get(el.campoTelefoneTerc)
        //    .focus()
        //    .type(Cypress.env('telefoneterc'))
        //    .should('be.have', 'telefoneterc')
        //cy  .screenshot('13-DadosTercGarantidor')
        
        cy  .get('[data-testid="button-component"]')                                    // Enviar Dados
            .click()
        cy  .screenshot('14-DadosEnviadosComSucesso')    


    }


    testeXPath() {                                                              // Testar plugin para xpath
        cy.visit(Cypress.env('Url'))
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('PaginaLogin');
        
        cy  .get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy  .get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('DadosLoginPreenchidos');
        
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('LoginRealizadoComSucesso');
        cy  .xpath('//*[@id=":r2:"]')
            .focus()
            .type('Rafael')

    }

    
    Pesquisar() {                                                               // Pesquisa um contrato preenchido anteriormente
        cy.visit(Cypress.env('Url'))
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('1_1 - PaginaLogin');
        
        cy  .get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy  .get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('1_2 - DadosLoginPreenchidos');
        
        cy  .get(el.campoPesquisar)
            .should('be.visible')
            .should('be.have', 'Pesquisar')
        cy  .screenshot('1_3 - LoginRealizadoComSucesso');
        cy  .xpath('//*[@id=":r2:"]')
            .focus()
            .type(Cypress.env('contrato'))
        cy  .screenshot('1_4 - Numero do contrato preenchido')
        cy  .get('[data-testid="input"]')
            .click()
            .type('{enter}')
        cy  .get(':nth-child(1) > .fzVBCR > .sc-ftvSup > [data-testid="input"]')
            .should('be.visible')
            .should('be.have', 'contrato')
        cy  .screenshot('1_5 - Contrato pesquisado com sucesso')
        
        cy  .get('.sc-jGprRt > :nth-child(2)')
            .click()
            .should('be.visible')
        cy  .screenshot('1_6 - Consorcio pesquisado com sucesso')

        cy  .get('.sc-jGprRt > :nth-child(3)')
            .click()
            .should('be.visible')
        cy  .screenshot('1_7 - Aditivo pesquisado com sucesso')

        cy  .get('.sc-jGprRt > :nth-child(4)')
            .click()
            .should('be.visible')
        cy  .screenshot('1_8 - Vendedor pesquisado com sucesso')

        cy  .get('.sc-jGprRt > :nth-child(5)')
            .click()
            .should('be.visible')
        cy  .screenshot('1_9 - Recebedor pesquisado com sucesso')

        cy  .get('.sc-jGprRt > :nth-child(6)')
            .click()
            .should('be.visible')
        cy  .screenshot('1_10 - Veiculo pesquisado com sucesso')

        cy  .get('.sc-jGprRt > :nth-child(7)')
            .click()
            .should('be.visible')
        cy  .screenshot('1_11 - Credor pesquisado com sucesso')

        cy  .get('.sc-jGprRt > :nth-child(8)')
            .click()
            .should('be.visible')
        cy  .screenshot('1_12 - Devedor pesquisado com sucesso')

        cy  .get('.sc-jGprRt > :nth-child(9)')
            .click()
            .should('be.visible')
        cy  .screenshot('1_13 - Imegens pesquisado com sucesso')

        cy  .get('.sc-jGprRt > :nth-child(10)')
            .click()
            .should('be.visible')
        cy  .screenshot('1_14 - Terc garantidor pesquisado com sucesso')


    }


    EnviarImagens() {                                                           // Enviar anexos
        cy  .visit(Cypress.env('Url'));
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('3_1 - Pagina Login');
        
        cy  .get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy  .get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('3_2 - Dados do Login Preenchidos');
        
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('3_3 - Login Realizado Com Sucesso');

    }


    CancelamentoDeContrato() {                                                  // Cancelar um contrato preenchido
        cy  .visit(Cypress.env('Url'));
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('4_1 - Pagina Login');
        
        cy  .get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy  .get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('4_2 - Dados do Login Preenchidos');
        
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('4_3 - Login Realizado Com Sucesso');

    }


    CadastrarInstituicao() {                                                    // Cadastrar uma instituicao
        cy  .visit(Cypress.env('Url'));
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('5_1 - Pagina Login');
        
        cy  .get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy  .get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('5_2 - Dados do Login Preenchidos');
        
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('5_3 - Login Realizado Com Sucesso');

    }


    RegistrosDeFaturamento() {                                                   // Verificar registro de faturamento
        cy  .visit(Cypress.env('Url'));
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('6_1 - Pagina Login');
        
        cy  .get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy  .get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('6_2 - Dados do Login Preenchidos');
        
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('6_3 - Login Realizado Com Sucesso');

    }


    GerarRelatorios() {                                                         // Gerar relatorios
        cy  .visit(Cypress.env('Url'));
        cy  .title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy  .screenshot('7_1 - Pagina Login');
        
        cy  .get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy  .get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('7_2 - Dados do Login Preenchidos');
        
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('7_3 - Login Realizado Com Sucesso');

    }

}

export default new Pages();
