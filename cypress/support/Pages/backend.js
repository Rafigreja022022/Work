import { describe } from "mocha";
import {generate} from "cpf";

describe('BackEnd APIV3', () => {
    it('Realizar login', () => {
        cy.request({
            url: 'https://apiv3.sp.apcap.com.br/auth',
            method: 'POST',
            body: {
                cpf: '30327047828',
                senha: '1994'
            }
        }).then(res => console.log(res))
    })

    it('Consultar CEP', () => {
        cy.request({
            url: 'https://apiv3.sp.apcap.com.br/consultarCep?cep=03651-020',
            method: 'GET',
        }).then(res => console.log(res));
        cy.screenshot();
    })

    it('Verificar o status 200', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-homol.apcap.com.br/auth',
            //url: 'https://apiv3.sp.apcap.com.br/auth',
            headers: {
                //Authorization: '',
                Appid: 'a30cbee34fdf8a75f1166aa15f19a116',
                AppVersion: '6.5.3'
                //Imei: '353582750487860',
                //device: 'Postman',
                //'user-agent': 'cypress'

            },
            body: {
                cpf: '30327047828',
                senha: '008bd5ad93b754d500338c253d9c177'
            }
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            //expect(response.body.saldo).to.be.equal('');
        })
    })

    it('Pesquisar dados de um usuario', () => {
        cy.request({
            method: 'GET',
            url: 'https://api-homol.apcap.com.br/servicos/consulta/usuario/31788925831',
            headers: {
                CustomerId: '488171a5-d17b-432b-a4b9-f79cb4912bce',
                CustomerKey: 'ZzCtTJKJPYuTnY7dbCtRxCfnDc60RS4rI6ccGnmW'

            },
        }).then((response) => {
            expect(response.status).to.be.equal(200);

            //response.body.compras.map(compra => {
            //    cy.log(JSON.stringify(compra.produto))
            //})

            //for (const compra of response.body.compras) {
            //    cy.log(JSON.stringify(compra.produto))
            //}
            cy.log(JSON.stringify(response.body, null, '\t'));
        })
        cy.screenshot('Pesquisar dados de um usuario');
    })

    it('Pesquisar CPF de um usuario', () => {
        cy.request({
            method: 'GET',
            url: 'https://api-homol.apcap.com.br/servicos/consulta/cpf/31788925831',
            headers: {
                CustomerId: '488171a5-d17b-432b-a4b9-f79cb4912bce',
                CustomerKey: 'ZzCtTJKJPYuTnY7dbCtRxCfnDc60RS4rI6ccGnmW'
            },
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            cy.log(JSON.stringify(response.body, null, '\t'));
        })
        cy.screenshot('Pesquisar CPF de um usuario');
    })

    it.only('Logar com CPF de um usuario', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-homol.apcap.com.br/auth',
            headers: {
                Appid: 'a30cbee34fdf8a75f1166aa15f19a116',
                AppVersion: '6.5.0',
                //Imei: '353582750487860',
                //ContentType: 'application/json',
                //device: 'Postman',
                AccessToken: 'NDQ2Yjk2ZDA5MjcwNTUzZWM3ZGRkMDQxMTdmNTNhMmU6TURBek1EQXdNRGt6Tmc9PQ==',
                //CustomerId: '488171a5-d17b-432b-a4b9-f79cb4912bce',
                //CustomerKey: 'ZzCtTJKJPYuTnY7dbCtRxCfnDc60RS4rI6ccGnmW'
            },
            body: {
                //cpf: generate(false),
                cpf: '30327047828',
                senha: '008bd5ad93b754d500338c253d9c1770'
            }
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            cy.log(JSON.stringify(response.body, null, '\t'));
        })
        cy.screenshot('Logar Com CPF De Um Usuario');
    })

    it(''), () => {


        
    }

})    