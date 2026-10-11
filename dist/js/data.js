/*
  Arquivo agregador de dados.
  Os conteúdos ficam separados em js/data/ para facilitar manutenção.
*/
/* config.js */
// dados e configuração do site
// é aqui que se mexe pra mudar conteúdo, sem tocar no resto

// whatsapp: só números, no formato 55 + ddd + telefone
const CONFIG = {
  whatsapp: '5549988659424',
  msgPadrao: 'Olá! Gostaria de solicitar um orçamento.'
};

/* contacts.js */
// cards de contato do rodapé: [ícone, título, valor]
const contatos = [
  ['fa-brands fa-whatsapp',    'WhatsApp / Telefone', '(49) 98865-9424 ou (49) 98866-6324'],
  ['fa-solid fa-envelope',     'E-mail',              'ezquiel-preto@hotmail.com'],
  ['fa-solid fa-clock',        'Atendimento',         'Seg a Sex, 8h às 18h'],
  ['fa-brands fa-instagram',   'Instagram',           '@weservicosfibra']
];

/* services.js */
// serviços listados na seção "nossos serviços"
// featured: true deixa o card em destaque (borda laranja + selo)
const servicos = [
  {
    n: '01',
    imagem: 'assets/images/services/servico-01-tanque.jpeg',
    icone: 'fa-layer-group',
    titulo: 'Consertos de fibra em geral',
    resumo: 'Reparos, laminação, reforço e fabricação em fibra de vidro.',
    itens: [
      'Reparo de trincas, furos, infiltrações e bolhas',
      'Laminação e reforço estrutural',
      'Fabricação de moldes e peças sob medida',
      'Revestimento de caixas, tanques e reservatórios'
    ]
  },
  {
    n: '02',
    imagem: 'assets/images/gallery/pintura-piscina.jpeg',
    icone: 'fa-water',
    titulo: 'Reforma e pintura de piscinas',
    resumo: 'Recuperação completa da estrutura, acabamento e brilho.',
    itens: [
      'Reparo de trincas, furos e vazamentos',
      'Correção de bolhas e desplacamentos',
      'Lixamento, laminação e preparação',
      'Pintura, gel coat e revitalização'
    ]
  },
  {
    n: '03',
    imagem: 'assets/images/services/servico-03-banheira.jpeg',
    icone: 'fa-bath',
    titulo: 'Assistência e instalação de spas',
    resumo: 'Instalação e manutenção de banheiras, ofurôs, spas e hidros.',
    itens: [
      'Instalação de banheiras, ofurôs e spas',
      'Manutenção preventiva e corretiva',
      'Reparo de bombas, filtros e componentes',
      'Reparo de vazamentos e revitalização'
    ]
  },
  {
    n: '04',
    imagem: 'assets/images/services/servico-04-spa.jpeg',
    icone: 'fa-wand-magic-sparkles',
    titulo: 'Restauração de banheiras e spas',
    resumo: 'Superfícies recuperadas com precisão e acabamento renovado.',
    itens: [
      'Reparo de trincas e rachaduras',
      'Pintura, revitalização e polimento',
      'Restauração de fibra e acrílico',
      'Higienização de sistemas de hidro'
    ]
  },
  {
    n: '05',
    imagem: 'assets/images/gallery/pintura-integral-tanque-fibra-detalhe.jpeg',
    icone: 'fa-database',
    titulo: "Caixas d'água, reservatórios e tanques",
    resumo: 'Recuperação, impermeabilização e reforço estrutural.',
    itens: [
      "Reparo de caixas d'água de fibra",
      'Reparo de vazamentos e trincas',
      'Revestimento interno e impermeabilização',
      'Reforço e restauração estrutural'
    ]
  },
  {
    n: '06',
    imagem: 'assets/images/gallery/conserto-polietileno-tubulacao.jpeg',
    icone: 'fa-shield-halved',
    titulo: 'Polietileno e polipropileno (PP)',
    resumo: 'Solda plástica e recuperação de tanques, conexões e estruturas em PP e polietileno.',
    destaque: true,
    itens: [
      'Conserto de caixas de polietileno',
      'Conserto de tanques de PP, fundo, costuras e conexões hidráulicas',
      'Solda plástica, trincas, furos e vazamentos',
      'Reforço e prolongamento da vida útil'
    ]
  },
  {
    n: '07',
    imagem: 'assets/images/gallery/revestimento-fibra-contencao.jpeg',
    icone: 'fa-shield',
    titulo: 'Revestimentos e impermeabilização',
    resumo: 'Proteção técnica para estruturas sujeitas a água e desgaste.',
    itens: [
      'Revestimento de caixas de concreto',
      'Revestimento de tanques e reservatórios',
      'Impermeabilização com fibra de vidro',
      'Proteção e recuperação de estruturas'
    ]
  },
  {
    n: '08',
    imagem: 'assets/images/services/servico-08-equipamentos-piscina.jpeg',
    icone: 'fa-gears',
    titulo: 'Equipamentos de piscinas',
    resumo: 'Instalação e manutenção de sistemas hidráulicos completos.',
    itens: [
      'Instalação e manutenção de bombas e filtros',
      'Reparo de sistemas hidráulicos',
      'Aquecedores e sistemas de hidromassagem',
      'Manutenção de componentes'
    ]
  },
  {
    n: '09',
    imagem: 'assets/images/services/servico-09-limpeza.jpeg',
    icone: 'fa-droplet',
    titulo: 'Limpeza e higienização',
    resumo: 'Higienização técnica e revitalização de sistemas e superfícies.',
    itens: [
      "Limpeza de caixas d'água e cisternas",
      'Higienização de banheiras, spas e ofurôs',
      'Limpeza de sistemas de hidromassagem',
      'Limpeza e revitalização de superfícies'
    ]
  },
  {
    n: '10',
    imagem: 'assets/images/services/servico-10-fabricacao.jpeg',
    icone: 'fa-screwdriver-wrench',
    titulo: 'Fabricação e restauração de peças',
    resumo: 'Projetos personalizados, moldes, adaptações e recuperação.',
    itens: [
      'Fabricação de peças e moldes sob medida',
      'Fabricação de tampas, caixas e tanques',
      'Recuperação de peças antigas',
      'Reforço e adaptação de peças'
    ]
  }
];

/* content.js */
// pilares da empresa (seção "quem somos")
const valores = ['QUALIDADE', 'EXPERIÊNCIA', 'CONFIANÇA', 'PRECISÃO'];

// etapas mostradas na seção "antes / durante / depois"
const etapas = [
  ['ANTES',   'Registro inicial do problema', 'assets/images/work-stages/antes.jpeg'],
  ['DURANTE', 'Processo técnico em execução', 'assets/images/work-stages/durante.jpeg'],
  ['DEPOIS',  'Resultado final do serviço',   'assets/images/work-stages/depois.jpeg']
];

// passos do "como trabalhamos"
const processo = [
  ['01', 'AVALIAÇÃO',   'Entendemos o problema e avaliamos a peça ou estrutura.'],
  ['02', 'DIAGNÓSTICO', 'Identificamos a causa e definimos a melhor solução.'],
  ['03', 'EXECUÇÃO',    'Realizamos o reparo, recuperação, reforma ou fabricação.'],
  ['04', 'ENTREGA',     'Finalizamos com atenção ao acabamento e qualidade.']
];

// diferenciais: [ícone, texto]
const diferenciais = [
  ['fa-award',                'Experiência'],
  ['fa-wand-magic-sparkles',  'Qualidade no acabamento'],
  ['fa-handshake',            'Atendimento personalizado'],
  ['fa-sliders',              'Soluções sob medida'],
  ['fa-layer-group',          'Diversidade de materiais'],
  ['fa-shield-halved',        'Compromisso com o cliente'],
  ['fa-screwdriver-wrench',   'Recuperação e restauração'],
  ['fa-crosshairs',           'Serviços especializados']
];

/* clients.js */
// O carrossel usa somente as marcas fornecidas pela WE.
const clientes = [];

const logosClientes = [
  { nome: 'Coca-Cola', arquivo: 'assets/logos/clients/coca-cola-transparent.png' },
  { nome: 'Tirol', arquivo: 'assets/logos/clients/tirol-transparent.png' },
  { nome: 'SIG', arquivo: 'assets/logos/clients/sig.svg' },
  { nome: 'Unimed', arquivo: 'assets/logos/clients/unimed-transparent.png' },
  { nome: 'Cooper A1', arquivo: 'assets/logos/clients/cooper-a1-transparent.png' },
  { nome: 'Alfa', arquivo: 'assets/logos/clients/alfa-transparent.png' },
  { nome: 'Mepar', arquivo: 'assets/logos/clients/mepar-transparent.png' },
  { nome: 'O Boticário', arquivo: 'assets/logos/clients/o-boticario-transparent.png' },
  { nome: 'Fibratec', arquivo: 'assets/logos/clients/fibratec-transparent.png' },
  { nome: 'Corsan', arquivo: 'assets/logos/clients/corsan-transparent.png' },
  { nome: 'Kemin', arquivo: 'assets/logos/clients/kemin-transparent.png' },
  { nome: 'PAX Empreendimentos', arquivo: 'assets/logos/clients/pax-transparent.png' },
  { nome: 'GCA', arquivo: 'assets/logos/clients/gca-transparent.png' }
];

/* gallery.js */
// portfólio: filtros disponíveis e itens da galeria
const categorias = ['Todos', 'Fibra', 'Piscinas', 'Banheiras', 'Spas', 'Tanques', 'Polietileno', 'Polipropileno', 'Fabricação'];
const galeria = [
  { titulo: 'Pintura de piscina', categoria: 'Piscinas', descricao: 'Piscina revitalizada com novo acabamento e cor uniforme.', arquivo: 'assets/images/gallery/pintura-piscina.jpeg', destaque: true },
  { titulo: 'Pintura integral de tanque de fibra', categoria: 'Tanques', descricao: 'Recuperação externa e pintura completa de tanque industrial.', arquivo: 'assets/images/gallery/pintura-integral-tanque-fibra-detalhe.jpeg', destaque: true },
  { titulo: 'Revestimento em fibra de contenção', categoria: 'Fibra', descricao: 'Impermeabilização de bacia de contenção com fibra de vidro.', arquivo: 'assets/images/gallery/revestimento-fibra-contencao.jpeg', destaque: true },
  { titulo: 'Recuperação de tanque de fibra', categoria: 'Tanques', descricao: 'Reparo estrutural realizado em tanque de grande porte.', arquivo: 'assets/images/gallery/conserto-tanque-fibra.jpeg', amplo: true },
  { titulo: 'Isolamento em fibra de contenção', categoria: 'Fibra', descricao: 'Proteção interna de contenção com acabamento técnico.', arquivo: 'assets/images/gallery/isolamento-fibra-contencao.jpeg', amplo: true },
  { titulo: 'Reforma de tanque de fibra', categoria: 'Tanques', descricao: 'Preparação da superfície para recuperação e acabamento.', arquivo: 'assets/images/gallery/reforma-tanque-fibra.jpeg' },
  { titulo: 'Pintura externa de tanque', categoria: 'Tanques', descricao: 'Tanque recuperado com pintura externa e conexões revitalizadas.', arquivo: 'assets/images/gallery/pintura-integral-tanque-fibra.jpeg' },
  { titulo: 'Revestimento de contenção', categoria: 'Fibra', descricao: 'Contenção revestida e protegida contra infiltrações.', arquivo: 'assets/images/gallery/revestimento-contencao.jpeg' },
  { titulo: 'Vedação em caixa de polietileno', categoria: 'Polietileno', descricao: 'Reparo e vedação de conexão hidráulica em polietileno.', arquivo: 'assets/images/gallery/conserto-polietileno-conexao.jpeg' },
  { titulo: 'Recuperação interna de caixa de fibra', categoria: 'Fibra', descricao: 'Reforço localizado no fundo de reservatório de fibra.', arquivo: 'assets/images/gallery/conserto-caixa-fibra-interno.jpeg' },
  { titulo: 'Conserto de saída em polietileno', categoria: 'Polietileno', descricao: 'Reparo da saída hidráulica e reforço da vedação.', arquivo: 'assets/images/gallery/conserto-polietileno-saida.jpeg' },
  { titulo: 'Conserto de tubulação em polietileno', categoria: 'Polietileno', descricao: 'Recuperação da conexão entre caixa e tubulação.', arquivo: 'assets/images/gallery/conserto-polietileno-tubulacao.jpeg' },
  { titulo: 'Revestimento interno de caixa', categoria: 'Fibra', descricao: 'Recuperação do fundo interno de caixa de fibra.', arquivo: 'assets/images/gallery/recuperacao-interna-caixa-fibra.jpeg' },
  { titulo: 'Revestimento do fundo da caixa', categoria: 'Fibra', descricao: 'Impermeabilização do fundo para maior durabilidade.', arquivo: 'assets/images/gallery/revestimento-fundo-caixa-fibra.jpeg' },
  { titulo: 'Limpeza de caixa d’água', categoria: 'Tanques', descricao: 'Higienização técnica do reservatório antes da recuperação.', arquivo: 'assets/images/gallery/limpeza-caixa.jpeg' },
  { titulo: 'Conserto de tampa de fibra', categoria: 'Fibra', descricao: 'Reforço estrutural e recuperação de tampa em fibra.', arquivo: 'assets/images/gallery/conserto-tampa-fibra.jpeg' },
  { titulo: 'Reparo externo de caixa de fibra', categoria: 'Fibra', descricao: 'Laminação externa para reforço da estrutura.', arquivo: 'assets/images/gallery/reparo-externo-caixa-fibra.jpeg' },
  { titulo: 'Vedação de flange', categoria: 'Fibra', descricao: 'Vedação técnica de flange e conexão hidráulica.', arquivo: 'assets/images/gallery/vedacao-flange.jpeg' },
  { titulo: 'Instalação de ladrão', categoria: 'Fibra', descricao: 'Instalação de extravasor com acabamento reforçado.', arquivo: 'assets/images/gallery/instalacao-ladrao.jpeg' },
  { titulo: 'Revestimento externo de caixa', categoria: 'Fibra', descricao: 'Superfície recuperada com laminação em fibra de vidro.', arquivo: 'assets/images/gallery/revestimento-caixa-fibra.jpeg' },
  { titulo: 'Recuperação de tanque', categoria: 'Tanques', descricao: 'Reparo e recuperação de tanque em fibra de vidro.', arquivo: 'assets/images/gallery/tanque-recuperacao.jpeg' },
  { titulo: 'Reforma de piscina', categoria: 'Piscinas', descricao: 'Reforma estrutural e renovação do acabamento da piscina.', arquivo: 'assets/images/gallery/piscina-reforma.jpeg' },
  { titulo: 'Instalação de banheira', categoria: 'Banheiras', descricao: 'Instalação com acabamento e funcionamento verificados.', arquivo: 'assets/images/gallery/banheira-instalacao.jpeg' },
  { titulo: 'Assistência em spa', categoria: 'Spas', descricao: 'Manutenção técnica para conservar o desempenho do spa.', arquivo: 'assets/images/gallery/spa-assistencia.jpeg' },
  { titulo: 'Recuperação de reservatório', categoria: 'Tanques', descricao: 'Reforço e impermeabilização de reservatório.', arquivo: 'assets/images/gallery/tanque-reservatorio.jpeg' },
  { titulo: 'Recuperação em polietileno', categoria: 'Polietileno', descricao: 'Conserto especializado em estrutura de polietileno.', arquivo: 'assets/images/gallery/polietileno-reservatorio.jpeg' },
  { titulo: 'Impermeabilização em fibra', categoria: 'Fibra', descricao: 'Proteção da estrutura com revestimento em fibra de vidro.', arquivo: 'assets/images/gallery/fibra-impermeabilizacao.jpeg' },
  { titulo: 'Equipamentos de piscina', categoria: 'Piscinas', descricao: 'Revisão de componentes hidráulicos para piscinas.', arquivo: 'assets/images/gallery/piscina-equipamentos.jpeg' },
  { titulo: 'Limpeza de reservatório', categoria: 'Tanques', descricao: 'Limpeza técnica para preservar a qualidade da água.', arquivo: 'assets/images/gallery/tanque-limpeza.jpeg' },
  { titulo: 'Fabricação de peça', categoria: 'Fabricação', descricao: 'Peça fabricada sob medida conforme a necessidade do projeto.', arquivo: 'assets/images/gallery/fabricacao-peca.jpeg' },
  { titulo: 'Recuperação de tanque em polipropileno', categoria: 'Polipropileno', descricao: 'Reparo externo em tanque de PP com reforço estrutural nas extremidades.', arquivo: 'assets/images/gallery/conserto-tanque-polipropileno-1-1.jpeg' },
  { titulo: 'Reparo do fundo de tanque em PP', categoria: 'Polipropileno', descricao: 'Recuperação interna do fundo, com revisão das soldas e reforços estruturais.', arquivo: 'assets/images/gallery/conserto-tanque-polipropileno-1-2.jpeg' },
  { titulo: 'Reforço interno em polipropileno', categoria: 'Polipropileno', descricao: 'Recomposição de costuras e reforços internos para preservar a estrutura do tanque.', arquivo: 'assets/images/gallery/conserto-tanque-polipropileno-1-3.jpeg' },
  { titulo: 'Reparo de suporte interno em PP', categoria: 'Polipropileno', descricao: 'Recuperação de suporte interno e acabamento das áreas de união no tanque.', arquivo: 'assets/images/gallery/conserto-tanque-polipropileno-1-4.jpeg' },
  { titulo: 'Recuperação de costura de tanque em PP', categoria: 'Polipropileno', descricao: 'Tratamento e reforço da junção entre fundo e parede do tanque em polipropileno.', arquivo: 'assets/images/gallery/conserto-tanque-polipropileno-1-5.jpeg' },
  { titulo: 'Vedação de conexão hidráulica em PP', categoria: 'Polipropileno', descricao: 'Reparo e vedação reforçada da saída hidráulica do tanque em polipropileno.', arquivo: 'assets/images/gallery/conserto-tanque-polipropileno-2-1.jpeg' },
  { titulo: 'Reparo externo de saída em polipropileno', categoria: 'Polipropileno', descricao: 'Recuperação externa da conexão hidráulica e reforço da área de vedação.', arquivo: 'assets/images/gallery/conserto-tanque-polipropileno-2-2.jpeg' }
];
