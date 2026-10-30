export interface GuideModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  tag: string;
  accentColor: string;
  bgColor: string;
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  originalPrice: string;
  currentPrice: string;
  badge: string;
  description: string;
  benefits: string[];
  image: string;
  accentColor: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  status: string;
  location: string;
  quote: string;
  avatar: string;
  stars: number;
  verified: boolean;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/y44PvSo";

export const GUIDE_MODULES: GuideModule[] = [
  {
    id: "cronograma",
    number: "01",
    tag: "Organização Passo a Passo",
    title: "Cronograma da Gestante",
    subtitle: "Checklist organizado com tudo o que você precisa fazer em cada trimestre",
    description: "Chega de esquecer exames, vacinas ou ficar se perguntando o que fazer em cada semana. Um mapa completo para acompanhar a evolução do seu bebê com total tranquilidade.",
    highlights: [
      "Tarefas e compromissos organizados por trimestre",
      "Campos para anotar dúvidas, pendências e datas",
      "Basta dar check nas tarefas realizadas",
      "Sem sobrecarga mental: saiba exatamente o foco de cada fase"
    ],
    image: "/src/assets/images/mockup_digital_guide_1793325873212.jpg",
    accentColor: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50/70"
  },
  {
    id: "roupas",
    number: "02",
    tag: "Economia Inteligente",
    title: "Checklist Roupas do Bebê",
    subtitle: "Do RN aos 12 meses, sem exageros",
    description: "Listas práticas e editáveis, além de um fácil controle do que já foi comprado e lavado. O fim das roupinhas perdidas antes mesmo de usar ou de compras duplicadas.",
    highlights: [
      "Listas separadas por tamanho (RN até 12 meses)",
      "Controle prático de compras e lavagens",
      "Dicas reais sobre quantidade, clima e uso real",
      "Tabela indicativa para economizar sem abrir mão do conforto"
    ],
    image: "https://adquiraonline.com/wp-content/uploads/2026/10/Preparativos-do-bebe-com-checklist-no-tablet.png",
    accentColor: "from-pink-500 to-purple-600",
    bgColor: "bg-pink-50/70"
  },
  {
    id: "acessorios",
    number: "03",
    tag: "Tudo por Categoria",
    title: "Acessórios Essenciais por Categoria",
    subtitle: "Tudo o que você precisa, com curadoria minuciosa",
    description: "Itens úteis e selecionados divididos por temas, para você dar check no que já tem e não gastar dinheiro com 'tralhas' que só ocupam espaço na gaveta.",
    highlights: [
      "Categorias práticas: banho, cuidados, tecidos, alimentação, passeio...",
      "Controle do que foi comprado e do que já foi higienizado",
      "Notas com dicas para fazer escolhas conscientes",
      "Filtro antimarketing: o que realmente funciona no dia a dia com um recém-nascido"
    ],
    image: "/src/assets/images/guide_baby_accessories_1793326790654.jpg",
    accentColor: "from-violet-500 to-fuchsia-600",
    bgColor: "bg-violet-50/70"
  },
  {
    id: "mala",
    number: "04",
    tag: "Pronta Para o Grande Dia",
    title: "Mala Maternidade e Passeios",
    subtitle: "Pronta para o grande dia (e os próximos com zero estresse)",
    description: "Checklist completo e organizado para preparar a mala da maternidade e a mochila de passeios sem esquecer nada de essencial na correria.",
    highlights: [
      "Itens organizados e divididos por: mamãe, bebê e acompanhante",
      "Documentos essenciais e o que levar para registrar o bebê na maternidade",
      "Lista prática do que ter sempre na bolsa de passeio",
      "Dicas para organizar em saquinhos identificados por dia"
    ],
    image: "/src/assets/images/maternity_bag_prepared_1793325873396.jpg",
    accentColor: "from-purple-600 to-pink-500",
    bgColor: "bg-purple-50/70"
  },
  {
    id: "inspiracoes",
    number: "05",
    tag: "O Cantinho dos Seus Sonhos",
    title: "Minhas Inspirações",
    subtitle: "Monte o enxoval do seu jeitinho",
    description: "Espaço livre para reunir ideias, imagens e links que combinam com o seu estilo e os seus sonhos para esse momento tão especial da sua vida.",
    highlights: [
      "Categorias editáveis para salvar inspirações (quarto, chá de bebê, ensaio...)",
      "Campos para colar links e registrar observações",
      "Um cantinho só seu para sonhar, planejar e se inspirar",
      "Compartilhe facilmente com seu parceiro(a) ou decorador(a)"
    ],
    image: "/src/assets/images/guide_nursery_inspirations_1793326790891.jpg",
    accentColor: "from-fuchsia-500 to-purple-600",
    bgColor: "bg-fuchsia-50/70"
  }
];

export const BONUS_ITEMS: BonusItem[] = [
  {
    id: "bonus-financeiro",
    number: "BÔNUS 01",
    badge: "GRÁTIS HOJE",
    title: "Planilha Financeira para Controle do Enxoval",
    originalPrice: "R$ 29,90",
    currentPrice: "R$ 0,00",
    description: "Uma ferramenta que ajuda você a tomar decisões conscientes e manter a tranquilidade financeira durante a gravidez.",
    benefits: [
      "Acompanhe seus gastos em tempo real com gráficos visuais",
      "Tenha clareza sobre quanto já foi investido e quanto resta",
      "Evite compras duplicadas ou por impulso no calor da emoção",
      "Defina orçamentos máximos por categoria para não estourar o bolso"
    ],
    image: "/src/assets/images/bonus_financial_planner_1793326793048.jpg",
    accentColor: "from-purple-600 to-indigo-600"
  },
  {
    id: "bonus-ia",
    number: "BÔNUS 02",
    badge: "EXCLUSIVO",
    title: "Enxoval Personalizado com Inteligência Artificial",
    originalPrice: "R$ 39,90",
    currentPrice: "R$ 0,00",
    description: "Chega de listas genéricas! Com este comando você vai ter a sua lista personalizada, feita sob medida para você! Basta preencher um formulário rápido, copiar, colar no ChatGPT e pronto!",
    benefits: [
      "Prompt pronto para preencher com suas informações em 2 minutos",
      "Sugestões personalizadas por clima da sua região, rotina e tipo de moradia",
      "Evite excessos e monte um enxoval funcional, prático e inteligente",
      "Adaptado se seu bebê nasce no verão rigoroso ou inverno frio"
    ],
    image: "/src/assets/images/bonus_ai_prompt_phone_1793326792640.jpg",
    accentColor: "from-pink-500 to-purple-600"
  },
  {
    id: "bonus-links",
    number: "BÔNUS 03",
    badge: "SUPER PRÁTICO",
    title: "Lista Secreta com Links Diretos para os Melhores Itens do Enxoval",
    originalPrice: "R$ 39,90",
    currentPrice: "R$ 0,00",
    description: "Chega de perder horas pesquisando o que comprar e em qual loja confiar. Você vai receber uma lista exclusiva com os melhores achados da internet, selecionados com muito carinho!",
    benefits: [
      "Links diretos para adicionar no carrinho com 1 clique",
      "Somente vendedores confiáveis com as melhores avaliações do Brasil",
      "Itens úteis, testados e recomendados por outras mães reais",
      "Melhor custo-benefício garantido para economizar de verdade"
    ],
    image: "/src/assets/images/bonus_shopping_links_1793326793133.jpg",
    accentColor: "from-violet-600 to-pink-500"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Camila Santana",
    status: "34ª Semana de Gestação",
    location: "São Paulo - SP",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    stars: 5,
    verified: true,
    highlight: "Economizei pelo menos R$ 1.800 em coisas inúteis!",
    quote: "Eu estava à beira do desespero com tantas listas do Instagram falando coisas totalmente opostas. O Guia me trouxe paz. Ver tudo dividido certinho por trimestre e saber exatamente quantas peças de cada tamanho comprar me poupou rios de dinheiro e crises de ansiedade."
  },
  {
    id: "2",
    name: "Mariana Albuquerque",
    status: "Mãe do Theo (2 meses)",
    location: "Belo Horizonte - MG",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    stars: 5,
    verified: true,
    highlight: "A mala maternidade foi um alívio surreal no hospital.",
    quote: "Meu parto adiantou duas semanas e graças ao Guia a mala já estava 100% pronta com os saquinhos etiquetados para a mamãe, bebê e meu marido. As enfermeiras da maternidade até elogiaram a organização. Vale cada centavo!"
  },
  {
    id: "3",
    name: "Dra. Beatriz Nogueira",
    status: "Obstetra e Mãe de 2",
    location: "Curitiba - PR",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    stars: 5,
    verified: true,
    highlight: "Recomendo para todas as minhas pacientes.",
    quote: "Como médica vejo diariamente pacientes sobrecarregadas e confusas. Este guia tem uma abordagem responsável, prática e sem exageros de consumo. O bônus da lista personalizada com ChatGPT é genial e muito assertivo."
  },
  {
    id: "4",
    name: "Juliana & Rafael Mendes",
    status: "Pais de Primeira Viagem",
    location: "Campinas - SP",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    stars: 5,
    verified: true,
    highlight: "A planilha financeira salvou nosso orçamento.",
    quote: "Tínhamos muito medo de estourar as contas da família com o enxoval. A planilha de controle financeiro inclusa no bônus fez a gente ter clareza de cada centavo. Conseguimos comprar tudo com qualidade sem nos endividar."
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Como e quando recebo o acesso ao Guia?",
    answer: "O acesso é imediato! Assim que o seu pagamento for confirmado pela Kiwify, você recebe um e-mail com os seus dados de acesso e o link direto para começar a usar no seu celular, tablet ou computador imediatamente."
  },
  {
    question: "Preciso instalar algum programa pesado ou funciona no celular?",
    answer: "Funciona 100% direto no seu celular! Você pode abrir pelo navegador, usar como aplicativo no seu smartphone ou baixar os materiais em formato interativo. É leve, rápido e fácil de mexer até mesmo na fila do médico."
  },
  {
    question: "É uma mensalidade ou pagamento único?",
    answer: "PAGAMENTO ÚNICO! Você paga apenas R$ 47,00 (ou parcela em até 11x de R$ 5,22) uma única vez e tem acesso vitalício ao Guia da Gestante Organizada e a todos os 3 bônus exclusivos, incluindo todas as atualizações futuras sem nenhuma taxa extra."
  },
  {
    question: "Sou mãe de primeira viagem, vou conseguir me organizar mesmo sem entender nada?",
    answer: "Com certeza! O Guia foi desenhado especificamente pensando na futura mãe que não sabe por onde começar. A linguagem é simples, acolhedora, com checklists pré-prontos onde basta você dar o 'check' nas tarefas."
  },
  {
    question: "Já estou no 2º ou 3º trimestre, ainda vale a pena para mim?",
    answer: "Vale muito! O guia possui seções dedicadas para quem está no 2º trimestre (compras estratégicas, roupinhas e acessórios) e 3º trimestre (mala da maternidade, lavagem das peças, documentos e preparativos finais para o parto)."
  },
  {
    question: "E se eu não gostar? Como funciona a garantia?",
    answer: "Você tem 7 dias de garantia incondicional blindada. Se por qualquer motivo você abrir o material e achar que ele não agregou para a sua gravidez, basta enviar um e-mail com um clique que devolvemos 100% do seu dinheiro, sem perguntas e sem ressentimentos."
  }
];

export const SAMPLE_CHECKLIST = [
  {
    trimestre: "1º Trimestre (Semanas 1 a 13)",
    foco: "Cuidado com o corpo, exames iniciais e acolhimento da notícia",
    tasks: [
      { id: "t1", text: "Primeira consulta pré-natal e agendamento dos exames de sangue", done: true },
      { id: "t2", text: "Iniciar suplementação com ácido fólico e vitaminas prescritas", done: true },
      { id: "t3", text: "Ultrassom morfológico de primeiro trimestre (translucência nucal)", done: false },
      { id: "t4", text: "Começar pasta física ou digital para laudos e carteirinha da gestante", done: false }
    ]
  },
  {
    trimestre: "2º Trimestre (Semanas 14 a 27)",
    foco: "Disposição em alta, planejamento do quarto e enxoval inteligente",
    tasks: [
      { id: "t5", text: "Ultrassom morfológico do 2º trimestre (verificação detalhada)", done: false },
      { id: "t6", text: "Definir estilo do quarto e lista de itens essenciais", done: false },
      { id: "t7", text: "Comprar primeiras roupinhas nos tamanhos RN e P (sem exageros)", done: false },
      { id: "t8", text: "Preencher prompt da IA para o Enxoval Personalizado", done: false }
    ]
  },
  {
    trimestre: "3º Trimestre (Semanas 28 a 40+)",
    foco: "Reta final, malas prontas, lavagem das roupinhas e tranquilidade",
    tasks: [
      { id: "t9", text: "Lavar e passar todas as roupinhas e tecidos com sabão neutro", done: false },
      { id: "t10", text: "Montar a mala da maternidade da mamãe, bebê e acompanhante", done: false },
      { id: "t11", text: "Instalar bebê-conforto no carro e testar a fixação", done: false },
      { id: "t12", text: "Separar documentos: RG, CPF, carteirinha do convênio e cartão pré-natal", done: false }
    ]
  }
];
