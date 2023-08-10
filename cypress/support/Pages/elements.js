
export const ELEMENTS = {

    // Login

    campoUserName: '//*[@id=":r0:"]',
    campoPassword: '//*[@id=":r1:"]',
    botaoLogin: '//*[@type="submit"]',


    // Contratos

    campoPesquisar: '[data-testid="input"]',


    // Registrar Contrato

    campoContrato: ':nth-child(1) > .iqNeFm > .sc-evZas > [data-testid="input"]',
    campoDataVigente: '.fGhZfR > :nth-child(1) > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campoEstado1: '.fGhZfR > :nth-child(1) > .sc-hiMGwR > [data-testid="select-text-field"] > .sc-evZas > [data-testid="input"]',
    campoTipodaRestricao: '.fGhZfR > :nth-child(2) > .sc-hiMGwR > [data-testid="select-text-field"] > .sc-evZas > [data-testid="input"]',
    campoNumRestricao: '.fGhZfR > :nth-child(2) > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campoValorTotal: '.fGhZfR > :nth-child(2) > :nth-child(3) > .sc-evZas > [data-testid="input"]',
    campoQtdeParcelas: '.hnKZyu > :nth-child(1) > .sc-evZas > [data-testid="input"]',
    campoValorDaParcela: '.hnKZyu > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campo1Parcela: ':nth-child(3) > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campoUltimaParcela: ':nth-child(3) > :nth-child(3) > .sc-evZas > [data-testid="input"]',
    campoJurosMensal: '.fTRLdS > :nth-child(1) > :nth-child(1) > .sc-evZas > [data-testid="input"]',
    campoJurosAnual: '.fTRLdS > :nth-child(1) > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campoIndice: '.fTRLdS > :nth-child(1) > .sc-hiMGwR > [data-testid="select-text-field"] > .sc-evZas > [data-testid="input"]',
    campoValorIof: ':nth-child(4) > .sc-evZas > [data-testid="input"]',
    campoLiberacao: ':nth-child(2) > :nth-child(1) > .sc-evZas > [data-testid="input"]',
    campocodigo: '.fTRLdS > :nth-child(2) > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campomunicipio: ':nth-child(2) > .iqNeFm > .sc-evZas > [data-testid="input"]',
    campoEstado2: '.fTRLdS > :nth-child(2) > .sc-hiMGwR > [data-testid="select-text-field"] > .sc-evZas > [data-testid="input"]',

    camponumerogrupo: ':nth-child(1) > .sc-evZas > [data-testid="input"]',
    camponumerocota: ':nth-child(2) > .sc-evZas > [data-testid="input"]',

    camponumeroaditivo: ':nth-child(1) > .sc-evZas > [data-testid="input"]',
    campodataaditivo: ':nth-child(2) > .sc-evZas > [data-testid="input"]',

    campocnpjvendedor: '[data-testid="input"]',
    campocpfvendedor: '[data-testid="input"]',

    campocnpjrecebedor: '[data-testid="input"]',
    campocpfrecebedor: '[data-testid="input"]',

    campoplaca: '.bQUJlG > .sc-ivTmOn > .sc-evZas > [data-testid="input"]',
    campochassi: '.fhdmHq > .sc-ivTmOn > .sc-evZas > [data-testid="input"]',
    campoufplaca: '[data-testid="select-text-field"] > .sc-evZas > [data-testid="input"]',
    camporenavam: ':nth-child(2) > .eMQyjC > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campoanofabricacao: ':nth-child(2) > .eMQyjC > :nth-child(3) > .sc-evZas > [data-testid="input"]',
    campoanomodelo: ':nth-child(4) > .sc-evZas > [data-testid="input"]',
    campocor: '.eMQyjC > :nth-child(1) > .sc-evZas > [data-testid="input"]',
    campomarca: ':nth-child(3) > .eMQyjC > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campomodelo: ':nth-child(3) > .eMQyjC > :nth-child(3) > .sc-evZas > [data-testid="input"]',
    campoespecie: ':nth-child(4) > .sc-ivTmOn > .sc-evZas > [data-testid="input"]',

    camponomecredor: '.iivSIG > .sc-ivTmOn > .sc-evZas > [data-testid="input"]',
    campocnpjcredor: '.hQaeqc > .sc-evZas > [data-testid="input"]',
    campocepcredor: '[style="display: flex;"] > .sc-ivTmOn > .sc-evZas > [data-testid="input"]',
    camponumerocredor: ':nth-child(2) > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campoemailcredor: ':nth-child(4) > :nth-child(1) > .sc-evZas > [data-testid="input"]',
    campotelefonecredor: ':nth-child(4) > :nth-child(2) > .sc-evZas > [data-testid="input"]',

    camponomedevedor: '.iivSIG > .sc-ivTmOn > .sc-evZas > [data-testid="input"]',
    campocpfdevedor: '.hQaeqc > .sc-evZas > [data-testid="input"]',
    campocepdevedor: '[style="display: flex;"] > .sc-ivTmOn > .sc-evZas > [data-testid="input"]',
    camponumerodevedor: ':nth-child(2) > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campoemaildevedor: ':nth-child(4) > :nth-child(1) > .sc-evZas > [data-testid="input"]',
    campotelefonedevedor: ':nth-child(4) > :nth-child(2) > .sc-evZas > [data-testid="input"]',

    campoNomeTerc: '.iivSIG > .sc-ivTmOn > .sc-evZas > [data-testid="input"]',
    campoCNPJTerc: '.hQaeqc > .sc-evZas > [data-testid="input"]',
    campoCPFTerc: '.hQaeqc > .sc-evZas > [data-testid="input"]',
    campoCEPTerc: '[style="display: flex;"] > .sc-ivTmOn > .sc-evZas > [data-testid="input"]',
    campoNumeroTerc: ':nth-child(2) > :nth-child(2) > .sc-evZas > [data-testid="input"]',
    campoEmailTerc: ':nth-child(4) > :nth-child(1) > .sc-evZas > [data-testid="input"]',
    campoTelefoneTerc: ':nth-child(4) > :nth-child(2) > .sc-evZas > [data-testid="input"]',


    // Enviar Imagens

    campoNContrato: '#\:r3\:',
    campoEnviar: '.WGDlc > .sc-cOFTSb',
    campoProcurarImagem: 'label > .sc-cOFTSb',


    // Cancelamento de Contrato

    campoNProtocolo: '//*[@id=":r3:"]',
    campoNContrato: '//*[@id=":r4:"]',
    campoNRegistro: '//*[@id=":r5:"]',
    campoNChassi: '//*[@id=":r6:"]',
    campoAdcionar: '',
    campoCarregar: ':nth-child(2) > .sc-iBkjds > [tabindex="0"]',
    campoExpotarRetorno: '',
    campoCancelarContratos: '.sc-lkwKjF > [tabindex="0"]',


    // Cadastrar Instituição

    campoNomeDaInstituicao: '.hetXsd > :nth-child(1) > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoCodigoCad: '.hetXsd > :nth-child(2) > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoCNPJCad: '.hetXsd > :nth-child(3) > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoTelefoneCad: '.hetXsd > :nth-child(4) > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoCEPCad: '[style="display: flex; flex: 1 1 0%;"] > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoNumCad: '#form-submit > :nth-child(3) > :nth-child(2) > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',

    campoNomeCad: '.iUmgZv > :nth-child(2) > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campoCPFCad: ':nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoFuncaoCad: ':nth-child(3) > .sc-ftvSup > [data-testid="input"]',
    campoEmailCad: '.iUmgZv > :nth-child(3) > :nth-child(1) > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoTelefoneNomeCad: '.iUmgZv > :nth-child(3) > :nth-child(2) > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoValidadeNoDetran: '.fCDWsI > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',

    campoLimparCad: '.MuiButton-text',
    campoCadastrarCad: '.MuiButton-contained',


    // Registro de Faturamento

    campoBanco: '[data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]',
    campoData: ':nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoDatas: ':nth-child(3) > .sc-ftvSup > [data-testid="input"]',
    campoBaixarRegistro: '[data-testid="button-component"]',


    // Gerar Relatórios

    campoPeriodo: '.kahAao > .sc-jgbSNz > [data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]',
    campoEstado: '.jQCddH > .sc-jgbSNz > [data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]',
    campoBuscarInstituicao: '.dqkugf > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoExportarTodos: '[data-testid="button-component"]',
    campoDownload1: ':nth-child(1) > .sc-iqGgem > .hkoHTv > .dQXKcM > .sc-cOFTSb > #enable-exportation',
    campoDownload2: ':nth-child(2) > .sc-iqGgem > .hkoHTv > .dQXKcM > .sc-cOFTSb > #enable-exportation',


    // Cadastrar Departamento de transito (detran)

    campoEstadoDetran: '[data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]',
    campoCNPJDetran: '.fjtwOd > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoDataInicioDetran: '.hcuJQU > .gurgBP > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campoDataCadastroDetran: '.hcuJQU > .gurgBP > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoDataVencimentoDetran: '.hcuJQU > .gurgBP > :nth-child(3) > .sc-ftvSup > [data-testid="input"]',
    campoNomeDoContatoDetran: '.ebtNNd > .fjtwOd > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoDepartamentoDetran: '.ebtNNd > .gurgBP > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campoTelefoneDetran: '.ebtNNd > .gurgBP > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoEmailDetran: '.ebtNNd > .gurgBP > :nth-child(3) > .sc-ftvSup > [data-testid="input"]',

    // Cadastrar Agentes

    botaoCadastrarAgente: '.hcWfBV > :nth-child(2) > [data-testid="button-component"]',

    campoPesquisarAgentes: '.fWQmPo > :nth-child(2) > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoPesquisarLupa: '.sc-ftvSup > .sc-cOFTSb > .sc-dsQDmV',

    //Dados do agente

    campoNomeCompletoAgentes: ':nth-child(2) > .gurgBP > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoEmailAgentes: ':nth-child(2) > .fjtwOd > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoCPFAgentes: '.bloPPG > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campoTelefoneAgentes: '.bloPPG > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',


    //Dados Mediante a instituiçao 

    campoInstituiçaoBancariaAgentes: ':nth-child(4) > .gurgBP > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campoSupervisorAgentes: '.sc-ckMVTt > :nth-child(1)',
    campoOperadorAgentes: '.sc-ckMVTt > :nth-child(2)',
    
    botaoAlterarSenha: '.bloPPG > .sc-iBkjds',
    botaoLimparAgentes: '.fSZFje > :nth-child(1)',
    botaoSalvarAgentes: '.fSZFje > :nth-child(2)',


} 