
export const ELEMENTS = {

    // Login

    campoUserName: ':nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoPassword: ':nth-child(3) > .sc-ftvSup > [data-testid="input"]',
    botaoLogin: '.cdfHIn > [data-testid="button-component"]',


    // Contratos

    campoPesquisar: '[data-testid="input"]',


    // Registrar Contrato

    campoContrato: ':nth-child(1) > .fzVBCR > .sc-ftvSup > [data-testid="input"]',
    campoDataVigente: '.llPXw > :nth-child(1) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoEstado1: '.llPXw > :nth-child(1) > .sc-jgbSNz > [data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]',
    campoTipodaRestricao: '.llPXw > :nth-child(2) > .sc-jgbSNz > [data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]',
    campoNumRestricao: '.llPXw > :nth-child(2) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoValorTotal: '.llPXw > :nth-child(2) > :nth-child(3) > .sc-ftvSup > [data-testid="input"]',
    campoQtdeParcelas: '.dtRppf > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campoValorDaParcela: '.dtRppf > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campo1Parcela: '.llPXw > :nth-child(3) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoUltimaParcela: '.llPXw > :nth-child(3) > :nth-child(3) > .sc-ftvSup > [data-testid="input"]',
    campoJurosMensal: '.hUcTRr > :nth-child(1) > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campoJurosAnual: '.hUcTRr > :nth-child(1) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoIndice: '.hUcTRr > :nth-child(1) > .sc-jgbSNz > [data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]',
    campoValorIof: ':nth-child(4) > .sc-ftvSup > [data-testid="input"]',
    campoLiberacao: ':nth-child(2) > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campocodigo: '.hUcTRr > :nth-child(2) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campomunicipio: ':nth-child(2) > .fzVBCR > .sc-ftvSup > [data-testid="input"]',
    campoEstado2: '.hUcTRr > :nth-child(2) > .sc-jgbSNz > [data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]',

    camponumerogrupo: ':nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    camponumerocota: ':nth-child(2) > .sc-ftvSup > [data-testid="input"]',

    camponumeroaditivo: ':nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campodataaditivo: ':nth-child(2) > .sc-ftvSup > [data-testid="input"]',

    campocnpjvendedor: '[data-testid="input"]',
    campocpfvendedor: '[data-testid="input"]',

    campocnpjrecebedor: '[data-testid="input"]',
    campocpfrecebedor: '[data-testid="input"]',

    campoplaca: '.guuuIH > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campochassi: '.dXXCrT > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoufplaca: '[data-testid="select-text-field"] > .sc-ftvSup > [data-testid="input"]',
    camporenavam: ':nth-child(2) > .gHpVtj > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoanofabricacao: ':nth-child(2) > .gHpVtj > :nth-child(3) > .sc-ftvSup > [data-testid="input"]',
    campoanomodelo: ':nth-child(4) > .sc-ftvSup > [data-testid="input"]',
    campocor: '.gHpVtj > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campomarca: ':nth-child(3) > .gHpVtj > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campomodelo: ':nth-child(3) > .gHpVtj > :nth-child(3) > .sc-ftvSup > [data-testid="input"]',
    campoespecie: ':nth-child(4) > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',

    camponomecredor: '.fzVBCR > .sc-ftvSup > [data-testid="input"]',
    campocnpjcredor: '.eValoj > .sc-ftvSup > [data-testid="input"]',
    campocepcredor: '[style="display: flex;"] > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    camponumerocredor: ':nth-child(2) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoemailcredor: '.cSoqSQ > :nth-child(4) > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campotelefonecredor: ':nth-child(4) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',

    camponomedevedor: '.fzVBCR > .sc-ftvSup > [data-testid="input"]',
    campocnpjdevedor: '.eValoj > .sc-ftvSup > [data-testid="input"]',
    campocpfdevedor: '.eValoj > .sc-ftvSup > [data-testid="input"]',
    campocepdevedor: '[style="display: flex;"] > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    camponumerodevedor: ':nth-child(2) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoemaildevedor: '.cSoqSQ > :nth-child(4) > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campotelefonedevedor: ':nth-child(4) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',

    campoNomeTerc: '.fzVBCR > .sc-ftvSup > [data-testid="input"]',
    campoCNPJTerc: '.eValoj > .sc-ftvSup > [data-testid="input"]',
    campoCPFTerc: '.eValoj > .sc-ftvSup > [data-testid="input"]',
    campoCEPTerc: '[style="display: flex;"] > .sc-dIouRR > .sc-ftvSup > [data-testid="input"]',
    campoNumeroTerc: ':nth-child(2) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',
    campoEmailTerc: '.cSoqSQ > :nth-child(4) > :nth-child(1) > .sc-ftvSup > [data-testid="input"]',
    campoTelefoneTerc: ':nth-child(4) > :nth-child(2) > .sc-ftvSup > [data-testid="input"]',


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

} 