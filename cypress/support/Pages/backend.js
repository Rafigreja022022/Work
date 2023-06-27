import { describe } from "mocha";

describe('Cenario de testes funcionais', () => {
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

    it.only('Verificar o status 200', () => {
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
})