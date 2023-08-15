const { defineConfig } = require('cypress')
const { faker } = require('@faker-js/faker/locale/pt_BR')

const env = {

  "Url": "https://sandbox-bureauregistry.ideamaker.com.br/auth",
  "username": "30327047828",
  "password": "123456789",


  "Pesquisar": "contrato",


  "contrato": "88821111111111111111",
  "datavigente": "15082023",
  "estado": "SP",
  "tipodarestricao": "01 - Arrendamento Mercantil",
  "numrestricao": "66555689",
  "valortotal": "10001",
  "qtdeparcelas": "12",
  "valordaparcela": "1000",
  "1parcela": "16082023",
  "ultimaparcela": "16082024",
  "jurosmensal": "2",
  "jurosanual": "24",
  "indice": "PREFIXADO",
  "valoriof": "100",
  "liberacao": "17082023",
  "codigo": "7107",
  "municipio": "São Paulo",

  "numerogrupo": "A00003",
  "numerocota": "000003",

  "numeroaditivo": "4334567999",
  "dataaditivo": "15082023",

  "cnpjvendedor": "72665559000141",
  "cpfvendedor": "31996531700",

  "cnpjrecebedor": "55107425000159",
  "cpfrecebedor": "97963216704",

  "placa": "AAA0005",
  "chassi": "9HY PG99KM hv Ns0001",
  "ufplaca": "SP - São Paulo",
  "renavam": "99944959698",
  "anofabricacao": "2004",
  "anomodelo": "2005",
  "cor": "Bege",
  "marca": "Cadillac2",
  "modelo": "Deville/Eldorado 7.9",
  "especie": "teste de enviar caracteres em 15/08/2023",

  "nomecredor": faker.person.fullName(),
  "cnpjcredor": "85490958000160",
  "cpfcredor": "87103024766",
  "cepcredor": "03651020",
  "numerocredor": "1982",
  "emailcredor": "rafael02@email.com.br",
  "telefonecredor": "1234567890",

  "nomedevedor": faker.person.fullName(),
  "cnpjdevedor": "32970382000172",
  "cpfdevedor": "38364850792",
  "cepdevedor": "03620001",
  "numerodevedor": "1984",
  "emaildevedor": "devedor02@email.com.br",
  "telefonedevedor": "1234560987",
  "telefonedevedorMask": "(12) 3456-0987",


  "nometerc": faker.person.fullName(),
  "cnpjterc": "57544925000110",
  "cpfterc": "65145240791",
  "cepterc": "03712003",
  "numeroterc": "1995",
  "emailterc": "tercgarantidor02@email.com.br",
  "telefoneterc": "1234569807",
  "telefonetercMask": "(12) 3456-9807",


  "NContratoImagem": "contrato",
  "EnviarImagem": "",
  "ProcurarImagem": "",


  "NProtocolo": "contrato",
  "NContrato": "contrato",
  "NRegistro": "numrestricao",
  "NChassi": "chassi",


  "NomeDaInstituicaoCad": "Instituicao para cadastrar 13",
  "CodigoCad": "3234567896",
  "CNPJCad": "34876730000172",
  "TelefoneCad": "11985664024",
  "CEPCad": "03625040",
  "NumCad": "1948",

  "NomeCad": "nome para cadastrar 13",
  "CPFCad": "17161187788",
  "FuncaoCad": "Senior tester",
  "EmailCad": "email2706@senior.com.br",
  "TelefoneNomeCad": "11985664027",
  "ValidadeNoDetran": "2023-06-27",


  "Banco": "Bradesco",
  "Data": "2023-06-27",
  "Datas": "2023-06-27",


  "PeriodoGR": "15",
  "EstadoGR": "sp - ",
  "BuscarInstituicaoGR": "Sicredi - SC",


  "EstadoDetran": "SP - São Paulo",
  "CNPJDetran": "30580302000147",
  "DataInicioDetran": "2023-06-28",
  "DataCadastroDetran": "2023-06-26",
  "DataVencimentoDetran": "2024-06-26",
  "NomeDoContatoDetran": "contato detran 27/06/2023",
  "DepartamentoDetran": "compras 27/06",
  "TelefoneDetran": "11985664025",
  "EmailDetran": "detran2706@email.com",


  "PesquisarAgentes": "30327047828",
  "NomeCompletoAgentes": "Faen Muhuo Sibo",
  "EmailAgentes": "emailagentes@agentes.com.br",
  "CPFAgentes": "65037426065",
  "TelefoneAgentes": "11985664023",
  "InstituiçaoBancariaAgentes": "99129827000167"

}

module.exports = defineConfig({
  viewportHeight: 750,
  viewportWidth: 1250,
  env,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },

  "chromeWebSecurity": true

})