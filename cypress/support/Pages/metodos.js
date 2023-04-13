const el = require('./elements').ELEMENTS;

class Pages {

    acessarPagLogin() {                                                         // Validar a pagina para realizar o login 
        cy.visit(Cypress.env('Url'));
        cy.title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy.screenshot('PaginaLogin');
    }


    preencherDadosDoLogin() {                                                   // Validar o preenchimento e login 
        cy.visit(Cypress.env('Url'));
        cy.title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy.screenshot('001-PaginaLogin');

        cy.get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy.get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy.get(el.botaoLogin)
            .click()
        cy.screenshot('002-DadosLoginPreenchidos');

        cy.get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy.screenshot('003-LoginRealizadoComSucesso');

    }


    preencherDadosDetran() {                                                    // Validar o cadastro de um Detran 
        cy.visit(Cypress.env('Url'));
        cy.title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy.screenshot('8_1 - Pagina Login');

        cy.get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy.get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy.screenshot('8_2 - Dados Login Preenchidos');
        cy.get(el.botaoLogin)
            .click()

        cy.get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy.screenshot('8_3 - Login Realizado Com Sucesso');

        cy.get('#cadastrar-detran > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .should('be.visible')
            .should('be.have', '#cadastrar-detran > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .click()
        cy.get('[data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]')
            .should('be.visible')
        cy.get(el.campoEstadoDetran)
            .should('be.visible')
            .focus()
            .type('SP - São Paulo')
        cy.xpath('//*[@id=":r3:-option-0"]')
            .click()
        cy.get(el.campoCNPJDetran)
            .should('be.visible')
            .type(Cypress.env('CNPJDetran'))
            .should('be.have', 'CNPJDetran')
        cy.get(el.campoDataInicioDetran)
            .type(Cypress.env('DataInicioDetran'))
            .should('be.have', 'DataInicioDetran')
        cy.get(el.campoDataCadastroDetran)
            .type(Cypress.env('DataCadastroDetran'))
            .should('be.have', 'DataCadastroDetran')
        cy.get(el.campoDataVencimentoDetran)
            .type(Cypress.env('DataVencimentoDetran'))
            .should('be.have', 'DataVencimentoDetran')
        cy.get(el.campoNomeDoContatoDetran)
            .should('be.visible')
            .type(Cypress.env('NomeDoContatoDetran'))
            .should('be.have', 'NomeDoContatoDetran')
        cy.get(el.campoDepartamentoDetran)
            .should('be.visible')
            .type(Cypress.env('DepartamentoDetran'))
            .should('be.have', 'DepartamentoDetran')
        cy.get(el.campoTelefoneDetran)
            .should('be.visible')
            .type(Cypress.env('TelefoneDetran'))
            .should('be.have', 'TelefoneDetran')
        cy.get(el.campoEmailDetran)
            .should('be.visible')
            .type(Cypress.env('EmailDetran'))
            .should('be.have', 'EmailDetran')
        cy.screenshot('8_4 - Dados Detran Preenchidos');

        cy.get(':nth-child(2) > [data-testid="button-component"]')
            .click()
        cy.screenshot('8_5 - Dados Detran Enviado Com Sucesso')

    }


    preencherContrato() {                                                       // Preencher dados de um contrato - Flag 1 
        cy.visit(Cypress.env('Url'));
        cy.title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy.screenshot('2_1 - Pagina Login');

        cy.get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy.get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy.screenshot('2_2 - Dados Login Preenchidos');
        cy.get(el.botaoLogin)
            .click()

        cy.get('#novo-contrato > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')       // Dados Contrato
            .should('be.visible')
        cy.screenshot('2_3 - SistemaLogado')
        cy.get('#novo-contrato > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .click()
        cy.get(el.campoContrato)
            .focus()
            .type(Cypress.env('contrato'))
            .should('be.have', 'contrato')
        cy.get(el.campoDataVigente)
            .focus()
            .type(Cypress.env('datavigente'))
            .should('be.have', 'datavigente')
        cy.get(el.campoEstado1)
            .focus()
            .type(Cypress.env('estado'))
        cy.xpath('//*[@id=":r5:-option-1"]')
            .click()
        cy.get(el.campoTipodaRestricao)
            .focus()
            .type(Cypress.env('tipodarestricao'))
        cy.xpath('//*[@id=":r9:-option-0"]')
            .click()
        cy.get(el.campoNumRestricao)
            .focus()
            .type(Cypress.env('numrestricao'))
            .should('be.have', 'numrestricao')
        cy.get(el.campoValorTotal)
            .focus()
            .type(Cypress.env('valortotal'))
            .should('be.have', 'valortotal')
        cy.get(el.campoQtdeParcelas)
            .focus()
            .type(Cypress.env('qtdeparcelas'))
            .should('be.have', 'qtdeparcelas')
        cy.get(el.campoValorDaParcela)
            .focus()
            .type(Cypress.env('valordaparcela'))
            .should('be.have', 'valordaparcela')
        cy.get(el.campo1Parcela)
            .focus()
            .type(Cypress.env('1parcela'))
            .should('be.have', '1parcela')
        cy.get(el.campoUltimaParcela)
            .focus()
            .type(Cypress.env('ultimaparcela'))
            .should('be.have', 'ultimaparcela')
        cy.get(el.campoJurosMensal)
            .focus()
            .type(Cypress.env('jurosmensal'))
            .should('be.have', 'jurosmensal')
        cy.get(el.campoJurosAnual)
            .focus()
            .type(Cypress.env('jurosanual'))
            .should('be.have', 'jurosanual')
        cy.get(el.campoIndice)
            .focus()
            .type(Cypress.env('indice'))
        cy.xpath('//*[@id=":rn:-option-0"]')
            .click()
        cy.get(el.campoValorIof)
            .focus()
            .type(Cypress.env('valoriof'))
            .should('be.have', 'valoriof')
        cy.get(el.campoLiberacao)
            .focus()
            .type(Cypress.env('liberacao'))
            .should('be.have', 'liberacao')
        cy.get(el.campocodigo)
            .focus()
            .type(Cypress.env('codigo'))
            .should('be.have', 'codigo')
        cy.get(el.campomunicipio)
            .focus()
            .type(Cypress.env('municipio'))
            .should('be.have', 'municipio')
        cy.get(el.campoEstado2)
            .focus()
            .type(Cypress.env('estado'))
        cy.xpath('//*[@id=":rt:-option-1"]')
            .click()
        cy.get(':nth-child(1) > .sc-iBkjds > .sc-dIouRR > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy.get(':nth-child(2) > .sc-iBkjds > .sc-dIouRR > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy.get(':nth-child(3) > .dXXCrT > .sc-dIouRR > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy.get('.lkiREi > .hIA-dKQ > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy.screenshot('2_4 - Contrato Preenchido')

        cy.get('.sc-jGprRt > :nth-child(2)')                                          // Dados Consórcio
            .click()
        cy.get(el.camponumerogrupo)
            .focus()
            .type(Cypress.env('numerogrupo'))
            .should('be.have', 'numerogrupo')
        cy.get(el.camponumerocota)
            .focus()
            .type(Cypress.env('numerocota'))
            .should('be.have', 'numerocota')
        cy.screenshot('2_5 - Dados Consorcio')

        cy.get('.sc-jGprRt > :nth-child(3)')                                          // Dados Aditivo
            .click()
        cy.get(el.camponumeroaditivo)
            .focus()
            .type(Cypress.env('numeroaditivo'))
            .should('be.have', 'numeroaditivo')
        cy.get(el.campodataaditivo)
            .focus()
            .type(Cypress.env('dataaditivo'))
            .should('be.have', 'dataaditivo')
        cy.get(':nth-child(3) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy.screenshot('2_6 - DadosAditivo')

        cy.get('.sc-jGprRt > :nth-child(4)')                                      // Dados Vendedor
            .click()
        cy.get(el.campocnpjvendedor)
            .focus()
            .type(Cypress.env('cnpjvendedor'))
            .should('be.have', 'cnpjvendedor')
        cy.screenshot('2_7 - DadosVendedor')

        cy.get('.sc-jGprRt > :nth-child(5)')                                      // Dados Recebedor
            .click()
        cy.get(el.campocpfrecebedor)
            .focus()
            .type(Cypress.env('cpfrecebedor'))
            .should('be.have', 'cpfrecebedor')
        cy.screenshot('2_8 - Dados Recebedor')

        cy.get('.sc-jGprRt > :nth-child(6)')                                      // Dados Veiculos
            .click()
        cy.get(':nth-child(1) > .guuuIH > .sc-dIouRR > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy.get(':nth-child(3) > .guuuIH > .sc-dIouRR > .sc-ckMVTt > :nth-child(2) > .sc-cOFTSb > .sc-fXynhf')
            .click()
        cy.get(el.campoplaca)
            .focus()
            .type(Cypress.env('placa'))
            .should('be.have', 'placa')
        cy.get(el.campochassi)
            .focus()
            .type(Cypress.env('chassi'))
            .should('be.have', 'chassi')
        cy.get(el.campoufplaca)
            .focus()
            .type(Cypress.env('ufplaca'))
        cy.xpath('//*[@id=":r1e:-option-0"]')
            .click()
        cy.get(el.camporenavam)
            .focus()
            .type(Cypress.env('renavam'))
            .should('be.have', 'renavam')
        cy.get(el.campoanofabricacao)
            .focus()
            .type(Cypress.env('anofabricacao'))
            .should('be.have', 'anofabricacao')
        cy.get(el.campoanomodelo)
            .focus()
            .type(Cypress.env('anomodelo'))
            .should('be.have', 'anomodelo')
        cy.get(el.campocor)
            .focus()
            .type(Cypress.env('cor'))
            .should('be.have', 'cor')
        cy.get(el.campomarca)
            .focus()
            .type(Cypress.env('marca'))
            .should('be.have', 'marca')
        cy.get(el.campomodelo)
            .focus()
            .type(Cypress.env('modelo'))
            .should('be.have', 'modelo')
        cy.get(el.campoespecie)
            .focus()
            .type(Cypress.env('especie'))
            .should('be.have', 'especie')
        cy.screenshot('2_9 - DadosVeiculos')

        cy.get('.sc-jGprRt > :nth-child(7)')                                      // Dados Credor
            .click()
        cy.get(el.camponomecredor)
            .focus()
            .type(Cypress.env('nomecredor'))
            .should('be.have', 'nomecredor')
        cy.get(el.campocnpjcredor)
            .focus()
            .type(Cypress.env('cnpjcredor'))
            .should('be.have', 'cnpjcredor')
        cy.get(el.campocepcredor)
            .focus()
            .type(Cypress.env('cepcredor'))
            .should('be.have', 'cepcredor')
        cy.get(el.camponumerocredor)
            .focus()
            .type(Cypress.env('numerocredor'))
            .should('be.have', 'numerocredor')
        cy.get(el.campoemailcredor)
            .focus()
            .type(Cypress.env('emailcredor'))
            .should('be.have', 'emailcredor')
        cy.get(el.campotelefonecredor)
            .focus()
            .type(Cypress.env('telefonecredor'))
            .should('be.have', 'telefonecredor')
        cy.screenshot('2_10 - Dados Credor')

        cy.get('.sc-jGprRt > :nth-child(8)')                                      // Dados Devedor
            .click()
        cy.get(el.camponomedevedor)
            .focus()
            .type(Cypress.env('nomedevedor'))
            .should('be.have', 'nomedevedor')
        cy.get(el.campocpfdevedor)
            .focus()
            .type(Cypress.env('cpfdevedor'))
            .should('be.have', 'cpfdevedor')
        cy.get(el.campocepdevedor)
            .focus()
            .type(Cypress.env('cepdevedor'))
            .should('be.have', 'cepdevedor')
        cy.get(el.camponumerodevedor)
            .focus()
            .type(Cypress.env('numerodevedor'))
            .should('be.have', 'numerodevedor')
        cy.get(el.campoemaildevedor)
            .focus()
            .type(Cypress.env('emaildevedor'))
            .should('be.have', 'emaildevedor')
        cy.get(el.campotelefonedevedor)
            .focus()
            .type(Cypress.env('telefonedevedor'))
            .should('be.have', 'telefonedevedor')
        cy.screenshot('2_11 - Dados Devedor')

        cy.get('.sc-jGprRt > :nth-child(9)')                                      // Imagens
            .click()
        cy.screenshot('2_12 - Dados Imagens')

        cy  .get('.sc-jGprRt > :nth-child(10)')                                     // Terc. Garantidor
            .click()
        cy  .get(el.campoNomeTerc)
            .focus()
            .type(Cypress.env('nometerc'))
            .should('be.have', 'nometerc')
        cy  .get(el.campoCPFTerc)
            .focus()
            .type(Cypress.env('cpfterc'))
            .should('be.have', 'cpfterc')
        cy  .get(el.campoCEPTerc)
            .focus()
            .type(Cypress.env('cepterc'))
            .should('be.have', 'cepterc')
        cy  .get(el.campoNumeroTerc)
            .focus()
            .type(Cypress.env('numeroterc'))
            .should('be.have', 'numeroterc')    
        cy  .get(el.campoEmailTerc)
            .focus()
            .type(Cypress.env('emailterc'))
            .should('be.have', 'emailterc')
        cy  .get(el.campoTelefoneTerc)
            .focus()
            .type(Cypress.env('telefoneterc'))
            .should('be.have', 'telefoneterc')
        cy  .screenshot('2_13 - Dados Terc Garantidor')
       cy  .xpath('//*[@type="submit"]')                                    // Enviar Dados
            .click()
        cy  .get('#notistack-snackbar')
            .should('be.visible')
        cy  .screenshot('2_14 - DadosEnviadosComSucesso')


    }


    testeXPath() {                                                              // Testar plugin para xpath
        cy.visit(Cypress.env('Url'))
        cy.title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy.screenshot('PaginaLogin');

        cy.get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy.get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy.get(el.botaoLogin)
            .click()
        cy.screenshot('DadosLoginPreenchidos');

        cy.get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy.screenshot('LoginRealizadoComSucesso');
        cy.xpath('//*[@id=":r2:"]')
            .focus()
            .type('Rafael')

    }


    Pesquisar() {                                                               // Pesquisa um contrato preenchido anteriormente
        cy.visit(Cypress.env('Url'))
        cy.title()
            .should('be.equal', 'Bureau - Idea Maker')
        cy.screenshot('1_1 - PaginaLogin');

        cy.get(el.campoUserName)
            .should('be.visible')
            .type(Cypress.env('username'))
            .should('be.have', 'username')
        cy.get(el.campoPassword)
            .should('be.visible')
            .type(Cypress.env('password'))
            .should('be.have', 'password')
        cy.get(el.botaoLogin)
            .click()
        cy.screenshot('1_2 - DadosLoginPreenchidos');

        cy.get(el.campoPesquisar)
            .should('be.visible')
            .should('be.have', 'Pesquisar')
        cy.screenshot('1_3 - LoginRealizadoComSucesso');
        cy.xpath('//*[@id=":r2:"]')
            .focus()
            .type(Cypress.env('contrato'))
        cy.screenshot('1_4 - Numero do contrato preenchido')
        cy.get('[data-testid="input"]')
            .click()
            .type('{enter}')
        cy.get(':nth-child(1) > .fzVBCR > .sc-ftvSup > [data-testid="input"]')
            .should('be.visible')
            .should('be.have', 'contrato')
        cy.screenshot('1_5 - Contrato pesquisado com sucesso')

        cy.get('.sc-jGprRt > :nth-child(2)')
            .click()
            .should('be.visible')
        cy.screenshot('1_6 - Consorcio pesquisado com sucesso')

        cy.get('.sc-jGprRt > :nth-child(3)')
            .click()
            .should('be.visible')
        cy.screenshot('1_7 - Aditivo pesquisado com sucesso')

        cy.get('.sc-jGprRt > :nth-child(4)')
            .click()
            .should('be.visible')
        cy.screenshot('1_8 - Vendedor pesquisado com sucesso')

        cy.get('.sc-jGprRt > :nth-child(5)')
            .click()
            .should('be.visible')
        cy.screenshot('1_9 - Recebedor pesquisado com sucesso')

        cy.get('.sc-jGprRt > :nth-child(6)')
            .click()
            .should('be.visible')
        cy.screenshot('1_10 - Veiculo pesquisado com sucesso')

        cy.get('.sc-jGprRt > :nth-child(7)')
            .click()
            .should('be.visible')
        cy.screenshot('1_11 - Credor pesquisado com sucesso')

        cy.get('.sc-jGprRt > :nth-child(8)')
            .click()
            .should('be.visible')
        cy.screenshot('1_12 - Devedor pesquisado com sucesso')

        cy.get('.sc-jGprRt > :nth-child(9)')
            .click()
            .should('be.visible')
        cy.screenshot('1_13 - Imegens pesquisado com sucesso')

        cy.get('.sc-jGprRt > :nth-child(10)')
            .click()
            .should('be.visible')
        cy.screenshot('1_14 - Terc garantidor pesquisado com sucesso')


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
        cy  .screenshot('3_2 - Dados do Login Preenchidos');

        cy  .get(el.botaoLogin)
            .click()
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('3_3 - Login Realizado Com Sucesso');

        cy  .get('#enviar-imagens > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .click()
        cy  .screenshot('3_4 - Entrar para Enviar Imagens')

        cy  .xpath('//*[@id=":r3:"]')
            .should('be.visible')
            .type(Cypress.env('contrato'))
        cy  .get('label > .sc-cOFTSb')
        //    .selectfile()
        cy  .screenshot('3_5 - Contrato e imagem carregados')

        cy  .get('.WGDlc > .sc-cOFTSb')
            .click()
        cy  .screenshot('3_6 - Enviando imagens')


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
        cy  .screenshot('4_2 - Dados do Login Preenchidos');

        cy  .get(el.botaoLogin)
            .click()
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('4_3 - Login Realizado Com Sucesso');

        cy  .get('#cancelar-contrato > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .click()
        cy  .screenshot('4_4 - Preencher Cancelamento de contrato')

        cy  .xpath(el.campoNProtocolo)
            .click()
            .type(Cypress.env('contrato'))
        cy  .xpath(el.campoNContrato)
            .click()
        cy  .get('[type="submit"]')
            .click()
        cy  .screenshot('4_5 - Numero de protocolo adicionado')    
            
        cy  .xpath(el.campoNContrato)
            .click()
            .type(Cypress.env('contrato'))
        cy  .xpath(el.campoNRegistro)
            .click()
            .type(Cypress.env('numrestricao'))
        cy  .xpath(el.campoNChassi)
            .click()
            .type(Cypress.env('chassi'))
        cy  .get('.jWyEmo > .sc-iBkjds > .sc-bZnhIo')
            .click()    
        cy  .get('[type="submit"]')
            .click()
        cy  .get(':nth-child(2) > .sc-iBkjds > [type="button"]')
            .click()
        cy  .screenshot('4_6 - Adicionado pelo numero de contrato, restricao e chassi')

        cy  .get('.sc-lkwKjF > [tabindex="0"]')
            .click()
        cy  .get('#notistack-snackbar')
            .should('be.visible')
        cy  .screenshot('4_7 - Cancelado os contratos')



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
        cy  .screenshot('5_2 - Dados do Login Preenchidos');
        
        cy  .get(el.botaoLogin)
            .click()
        cy  .screenshot('5_3 - Login Realizado Com Sucesso');
        
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .get('#cadastrar-instituicao > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .should('be.visible')
            .click()
        cy  .screenshot('5_4 - Cadastrar Instituicao')

        cy  .get(el.campoNomeDaInstituicao)
            .focus()
            .type(Cypress.env('NomeDaInstituicaoCad'))
            .should('be.have', 'NomedaInstituicaocad')
        cy  .get(el.campoCodigoCad)
            .focus()
            .type(Cypress.env('CodigoCad'))
            .should('be.have', 'CodigoCad')
        cy  .get(el.campoCNPJCad)
            .focus()
            .type(Cypress.env('CNPJCad'))
            .should('be.have', 'CNPJCad')
        cy  .get(el.campoTelefoneCad)
            .focus()
            .type(Cypress.env('TelefoneCad'))
            .should('be.have', 'TelefoneCad')
        cy  .get(el.campoCEPCad)
            .focus()
            .type(Cypress.env('CEPCad'))
            .should('be.have', 'CEPCad')
        cy  .get(el.campoNumCad)
            .focus()
            .type(Cypress.env('NumCad'))
            .should('be.have', 'NumCad')
        cy  .get(el.campoNomeCad)
            .focus()
            .type(Cypress.env('NomeCad'))
            .should('be.have', 'NomeCad')
        cy  .get(el.campoCPFCad)
            .focus()
            .type(Cypress.env('CPFCad'))
            .should('be.have', 'CPFCad')
        cy  .get(el.campoFuncaoCad)
            .focus()
            .type(Cypress.env('FuncaoCad'))
            .should('be.have', 'FuncaoCad')
        cy  .get(el.campoEmailCad)
            .focus()
            .type(Cypress.env('EmailCad'))
            .should('be.have', 'EmailCad')
        cy  .get(el.campoTelefoneNomeCad)
            .focus()
            .type(Cypress.env('TelefoneNomeCad'))
            .should('be.have', 'TelefoneNomeCad')
        cy  .get(el.campoValidadeNoDetran)
            .focus()
            .type(Cypress.env('ValidadeNoDetran'))
            .should('be.have', 'ValidadeNoDetran')
        cy  .screenshot('5_5 - Dados preenchidos para Cadastrar Intituicao')

        cy  .get(el.campoCadastrarCad)
            .click()
        cy  .screenshot('5_6 - Cadastrado Instituicao')




        

    }


    RegistrosDeFaturamento() {                                                  // Verificar registro de faturamento
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
        cy  .screenshot('6_2 - Dados do Login Preenchidos');

        cy  .get(el.botaoLogin)
            .click()        
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('6_3 - Login Realizado Com Sucesso');

        cy  .get('#registros-faturamento > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .should('be.visible')
            .click()
        cy  .screenshot('6_4 - Registros de Faturamento')
        
        cy  .get(el.campoBanco)
            .should('be.visible')
            .focus()
            .type(Cypress.env('Banco'))
        cy  .xpath('//*[@id=":r3:-option-0"]')
            .click()
        cy  .get(el.campoData)
            .should('be.visible')
            .click()
            .type(Cypress.env('Data'))
            .should('be.have', 'Data')
        cy  .get(el.campoDatas)
            .should('be.visible')
            .focus()
            .type(Cypress.env('Datas'))
            .should('be.have', 'Datas')
        cy  .screenshot('6_5 - Dados Preenchidos do Rgistro de Faturamento')

        cy  .get(el.campoBaixarRegistro)
            .should('be.visible')
            .click()
        cy  .screenshot('6_6 - Registro Baixado')    


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
        cy  .screenshot('7_2 - Dados do Login Preenchidos');

        cy  .get(el.botaoLogin)
            .click()
        cy  .get('[data-testid="input"]')
            .should('be.visible')
            .should('be.have', '[data-testid="input"]')
        cy  .screenshot('7_3 - Login Realizado Com Sucesso');

        cy  .get('#relatorios-bancos > .sc-cOFTSb > .sc-dFdIVH > .sc-dsQDmV')
            .should('be.visible')
            .click()
        cy  .screenshot('7_4 - Clicado em Gerar Relatorios')    

        cy  .get(el.campoPeriodo)
            .focus()
            .type(Cypress.env('PeriodoGR'))
        cy  .xpath('//*[@id=":r3:-option-0"]')
            .click()
        cy  .get(el.campoEstado)
            .focus()
            .type(Cypress.env('EstadoGR'))
        cy.xpath('//*[@id=":r5:-option-0"]')
            .click()
        cy  .screenshot('7_5 - Dados preenchidos para Gerar relatorio')

        cy  .get(el.campoExportarTodos)
            .should('be.visible')
            .click()
        cy  .screenshot('7_6 - Download do Exportar com o Gerar relatorio')

        cy  .get(el.campoDownload1)
            .should('be.visible')
            .click()
        cy  .screenshot('7_7 - Download 1 do Exportar com o Gerar relatorio')

        cy  .get(el.campoDownload2)
            .should('be.visible')
            .click()
        cy  .screenshot('7_8 - Download 2 do Exportar com o Gerar relatorio')

    }

    
}

export default new Pages();
