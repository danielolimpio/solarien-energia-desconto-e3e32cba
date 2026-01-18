// Conteúdo único e otimizado para SEO de cada estado brasileiro
// Re-export types from the new modular structure for backward compatibility
export type { 
  StateContent, 
  StateTestimonial, 
  StateFAQ, 
  StateDocument,
  TariffComparison,
  SolarPotential 
} from './stateContents/types';

import type { StateContent } from './stateContents/types';

// Import optimized content from modular files
import { optimizedStateContents } from './stateContents';

// Legacy content for states not yet migrated to new structure
const legacyStateContents: Record<string, StateContent> = {
  AC: {
    hook: "No coração da Amazônia, o Acre lidera a transformação energética do Norte brasileiro. Sua empresa pode economizar até 45% na conta de luz.",
    introduction: `O Acre, com sua rica biodiversidade e posição estratégica na Amazônia Ocidental, está abraçando uma nova era de eficiência energética. Empresas e residências em Rio Branco, Cruzeiro do Sul e outras cidades acreanas estão descobrindo os benefícios do Mercado Livre de Energia.

A Solarien Energy chegou ao Acre com soluções personalizadas para o clima equatorial e as demandas energéticas específicas da região. Com tarifa média de R$ 0,89/kWh, uma das mais altas do país, a economia potencial é ainda maior para os consumidores acreanos.`,
    howItWorks: {
      title: "Como Funciona o Processo no Acre",
      description: "Simplificamos a migração para o Mercado Livre de Energia, respeitando as particularidades da região amazônica.",
      steps: [
        { title: "Análise Personalizada", description: "Avaliamos seu consumo considerando o clima tropical e uso de climatização" },
        { title: "Proposta sob Medida", description: "Desenvolvemos uma solução adequada às características energéticas do Acre" },
        { title: "Migração Assistida", description: "Cuidamos de toda burocracia junto à Energisa Acre" },
        { title: "Economia Imediata", description: "Comece a economizar desde a primeira fatura" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Acre",
      description: "Vantagens exclusivas para consumidores acreanos que buscam eficiência energética",
      items: [
        { title: "Economia Significativa", description: "Reduza até 45% da sua conta de luz, essencial em um estado com tarifas elevadas", highlight: "45%" },
        { title: "Energia Limpa", description: "Utilize energia renovável de fontes hidrelétricas e solares da região Norte" },
        { title: "Climatização Econômica", description: "Reduza custos com ar-condicionado, indispensável no clima acreano" },
        { title: "Previsibilidade", description: "Contratos flexíveis que protegem seu negócio das variações tarifárias" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Acre",
      description: "Entenda as diferenças e escolha a melhor opção para seu perfil de consumo",
      freeMarket: {
        title: "Mercado Livre de Energia",
        features: [
          "Ideal para consumo acima de 500 kWh/mês",
          "Negociação direta com geradores",
          "Contratos personalizados de 1 a 5 anos",
          "Economia de até 45% na fatura",
          "Liberdade para trocar de fornecedor"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Perfeito para residências e pequenos comércios",
          "Sem necessidade de obras ou instalação",
          "Desconto fixo mensal na conta de luz",
          "Processo 100% digital",
          "Início imediato da economia"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Acre",
      description: "Migrar para o Mercado Livre de Energia no Acre não custa nada para você",
      items: [
        "Sem taxa de adesão ou matrícula",
        "Análise e consultoria gratuitas",
        "Processo de migração sem custos",
        "Sem necessidade de obras ou adequações",
        "Suporte contínuo sem mensalidades extras"
      ]
    },
    coverage: {
      title: "Atendimento no Acre e em Todo Brasil",
      description: "A Solarien Energy oferece cobertura completa em todo o estado do Acre",
      highlights: [
        "Atendimento presencial em Rio Branco",
        "Suporte remoto para cidades do interior",
        "Equipe especializada na região Norte",
        "Parceria com distribuidoras locais"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Acre",
      description: "O momento ideal para migrar é agora. Com tarifas entre as mais altas do Brasil, cada kWh economizado faz diferença.",
      stats: [
        { value: "R$ 0,89", label: "Tarifa média/kWh" },
        { value: "45%", label: "Economia potencial" },
        { value: "R$ 500+", label: "Economia mensal média" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Acre",
      description: "O Acre conta com suprimento energético através da Energisa Acre, com conexão ao Sistema Interligado Nacional. A Solarien Energy trabalha com geradores certificados que garantem fornecimento estável e competitivo para todo o estado."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Acre",
      description: "A documentação para migração é simples e a Solarien cuida de todo o processo",
      items: [
        { icon: "file", title: "Conta de Energia", description: "Últimas 3 faturas da Energisa Acre" },
        { icon: "building", title: "Documentos Empresariais", description: "CNPJ e contrato social atualizados" },
        { icon: "user", title: "Identificação", description: "RG e CPF do responsável legal" },
        { icon: "map", title: "Comprovante de Endereço", description: "Documento recente do local de consumo" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Acre",
      description: "O que faz da Solarien a melhor escolha para consumidores acreanos",
      items: [
        { title: "Expertise Regional", description: "Conhecimento profundo das particularidades do mercado energético do Norte" },
        { title: "Atendimento Humanizado", description: "Equipe local pronta para atender presencialmente em Rio Branco" },
        { title: "Monitoramento 24/7", description: "Acompanhamento em tempo real do seu consumo e economia" },
        { title: "Suporte Pós-Migração", description: "Assistência contínua para maximizar sua economia" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Acre",
      description: "Razões convincentes para migrar hoje mesmo",
      reasons: [
        "Tarifas entre as mais altas do Brasil justificam economia máxima",
        "Clima equatorial demanda alto consumo com climatização",
        "Processo simples e sem custos para o consumidor",
        "Acesso a energia limpa e renovável",
        "Liberdade para escolher o melhor fornecedor",
        "Suporte local da Solarien Energy em todo o estado"
      ]
    },
    testimonials: [
      {
        name: "Carlos Eduardo Menezes",
        role: "Empresário do setor de alimentos",
        city: "Rio Branco",
        content: "Minha indústria de processamento de açaí economizava R$ 8.000/mês em energia. Com a Solarien, passamos a economizar R$ 12.500/mês. A diferença no fluxo de caixa é impressionante!",
        savings: "35%"
      },
      {
        name: "Francisca Oliveira",
        role: "Proprietária de hotel",
        city: "Cruzeiro do Sul",
        content: "O ar-condicionado era nosso maior custo. Depois da migração para o Mercado Livre, reduzi a conta em 40%. A Solarien cuidou de tudo, mesmo estando no interior do estado.",
        savings: "40%"
      },
      {
        name: "Roberto Silva",
        role: "Gerente de supermercado",
        city: "Sena Madureira",
        content: "Refrigeração e climatização consumiam uma fortuna. Com a Solarien Energy, economizamos mais de R$ 6.000 por mês. O atendimento remoto funcionou perfeitamente.",
        savings: "38%"
      }
    ],
    faqs: [
      {
        question: "A migração funciona mesmo em cidades do interior do Acre?",
        answer: "Sim! Atendemos todo o estado do Acre, desde Rio Branco até as cidades mais distantes como Jordão e Santa Rosa do Purus. O processo é majoritariamente digital, facilitando a migração para qualquer localidade."
      },
      {
        question: "Por que a tarifa de energia é tão alta no Acre?",
        answer: "O Acre possui custos logísticos elevados devido à sua localização na Amazônia. Por isso, a economia com o Mercado Livre de Energia é ainda mais significativa, podendo chegar a 45%."
      },
      {
        question: "Como funciona o fornecimento de energia no Mercado Livre no Acre?",
        answer: "A energia continua sendo entregue pela Energisa Acre, garantindo a mesma qualidade e estabilidade. O que muda é quem você paga pela energia consumida, com preços muito mais competitivos."
      },
      {
        question: "Posso migrar se tenho energia solar no meu estabelecimento?",
        answer: "Sim! A migração é complementar à energia solar. Você pode economizar ainda mais combinando sua geração própria com energia do Mercado Livre."
      },
      {
        question: "Quanto tempo leva o processo de migração no Acre?",
        answer: "O processo completo leva de 30 a 60 dias, dependendo do tipo de migração e da análise documental. A Solarien acompanha cada etapa para garantir uma transição tranquila."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento da Solarien Energy em Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauacá, Feijó, Brasiléia e demais municípios do Acre.",
    regionalContext: "O clima equatorial do Acre, com temperaturas médias de 26°C e alta umidade, resulta em alto consumo de energia para climatização. A Solarien Energy entende essas particularidades e oferece soluções otimizadas.",
    economicProfile: "O Acre possui economia baseada na extração de borracha, castanha, agricultura e pecuária. Indústrias de processamento, hotéis e comércios são os maiores beneficiados pela economia de energia.",
    energyTip: "Dica: Combine ar-condicionado inverter com migração para o Mercado Livre e economize até 60% nos custos com climatização!"
  },

  AL: {
    hook: "Alagoas, o paraíso das águas, agora é também referência em economia de energia. Descubra como economizar até 45% na sua conta de luz.",
    introduction: `As belas praias de Alagoas escondem um potencial energético extraordinário. Com um dos maiores índices de irradiação solar do Brasil, o estado é ideal para quem busca energia limpa e econômica.

A Solarien Energy atua em todo o estado, de Maceió ao Sertão alagoano, ajudando empresas e residências a reduzirem drasticamente seus custos com energia. Com tarifa média de R$ 0,72/kWh, a economia pode significar milhares de reais todo mês.`,
    howItWorks: {
      title: "Como Funciona o Processo em Alagoas",
      description: "Processo simplificado e adaptado à realidade do consumidor alagoano.",
      steps: [
        { title: "Contato Inicial", description: "Fale com nossos especialistas via WhatsApp ou telefone" },
        { title: "Diagnóstico Energético", description: "Analisamos seu perfil de consumo e identificamos oportunidades" },
        { title: "Proposta Personalizada", description: "Apresentamos a melhor solução para seu caso" },
        { title: "Migração Sem Stress", description: "Cuidamos de toda a burocracia com a Equatorial Alagoas" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado de Alagoas",
      description: "Vantagens exclusivas para quem escolhe a Solarien Energy em Alagoas",
      items: [
        { title: "Economia Garantida", description: "Reduza sua fatura de luz em até 45%, direcionando recursos para seu negócio", highlight: "45%" },
        { title: "Sustentabilidade", description: "Energia 100% renovável, aproveitando o potencial solar nordestino" },
        { title: "Competitividade Turística", description: "Hotéis e pousadas reduzem custos e aumentam margens" },
        { title: "Sem Investimentos", description: "Migração gratuita, sem obras ou equipamentos" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura em Alagoas",
      description: "Duas opções vantajosas para o consumidor alagoano",
      freeMarket: {
        title: "Mercado Livre de Energia",
        features: [
          "Para consumos a partir de 500 kWh/mês",
          "Contratos de longo prazo com preços fixos",
          "Ideal para indústrias e grandes comércios",
          "Economia de até 45% comprovada",
          "Flexibilidade na escolha do fornecedor"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Ideal para residências e pequenos negócios",
          "Desconto garantido na conta da Equatorial",
          "Sem burocracia ou obras",
          "Adesão 100% digital",
          "Cancele quando quiser"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade em Alagoas",
      description: "Migrar não custa nada para o consumidor alagoano",
      items: [
        "Taxa de adesão: R$ 0,00",
        "Consultoria especializada: Gratuita",
        "Processo de migração: Sem custos",
        "Obras ou adaptações: Não necessárias",
        "Cancelamento: Sem multas"
      ]
    },
    coverage: {
      title: "Atendimento em Alagoas e em Todo Brasil",
      description: "Presença forte em todo o estado de Alagoas",
      highlights: [
        "Escritório de atendimento em Maceió",
        "Cobertura do litoral ao sertão",
        "Suporte especializado para o setor hoteleiro",
        "Atendimento a agroindústrias do interior"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia em Alagoas",
      description: "O sol que atrai turistas também gera economia para empresas e residências.",
      stats: [
        { value: "R$ 0,72", label: "Tarifa média/kWh" },
        { value: "42%", label: "Economia média" },
        { value: "2.800+", label: "Horas de sol/ano" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia em Alagoas",
      description: "Alagoas é atendida pela Equatorial Energia, com excelente infraestrutura de distribuição. A Solarien trabalha com geradores de energia eólica e solar do Nordeste, garantindo preços competitivos e energia 100% renovável."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade em Alagoas",
      description: "Documentação simples para uma migração tranquila",
      items: [
        { icon: "file", title: "Faturas de Energia", description: "Últimas 3 contas da Equatorial Alagoas" },
        { icon: "building", title: "Documentação da Empresa", description: "CNPJ, contrato social e procuração (se aplicável)" },
        { icon: "user", title: "Documentos Pessoais", description: "RG e CPF do representante legal" },
        { icon: "map", title: "Comprovante de Endereço", description: "Conta ou documento recente" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy em Alagoas",
      description: "Por que a Solarien é a melhor escolha para alagoanos",
      items: [
        { title: "Conhecimento Local", description: "Entendemos as necessidades específicas do mercado alagoano" },
        { title: "Foco em Turismo", description: "Soluções especializadas para hotéis, pousadas e resorts" },
        { title: "Agilidade", description: "Processos rápidos adaptados ao ritmo do Nordeste" },
        { title: "Transparência", description: "Relatórios claros de economia e consumo" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia em Alagoas",
      description: "Razões para migrar agora mesmo",
      reasons: [
        "Aproveite o potencial solar e eólico do Nordeste",
        "Reduza custos e aumente competitividade",
        "Processo gratuito e sem burocracia",
        "Energia limpa e certificada",
        "Suporte local da Solarien Energy",
        "Economia comprovada por centenas de empresas"
      ]
    },
    testimonials: [
      {
        name: "Marcos Tenório",
        role: "Dono de pousada",
        city: "Maragogi",
        content: "Com a alta temporada, nossa conta de luz era assustadora. Depois da migração com a Solarien, economizamos 38% e reinvestimos em melhorias para os hóspedes.",
        savings: "38%"
      },
      {
        name: "Fernanda Cavalcante",
        role: "Gerente industrial",
        city: "Arapiraca",
        content: "Nossa fábrica de calçados reduziu R$ 15.000 mensais em energia. A Solarien cuidou de tudo, e o processo foi muito mais rápido do que imaginávamos.",
        savings: "42%"
      },
      {
        name: "João Pedro Lins",
        role: "Proprietário de supermercado",
        city: "Maceió",
        content: "Refrigeração é nosso maior custo. Com o Mercado Livre de Energia, economizamos mais de R$ 8.000 por mês. Recomendo a Solarien para todos os comerciantes.",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O Mercado Livre de Energia funciona bem para estabelecimentos turísticos em Alagoas?",
        answer: "Perfeitamente! Hotéis, pousadas e restaurantes são os que mais se beneficiam, já que têm alto consumo de climatização e podem economizar até 45% na conta de luz."
      },
      {
        question: "Qual a diferença entre Mercado Livre e Energia por Assinatura para pequenos negócios?",
        answer: "A Energia por Assinatura é ideal para pequenos comércios com consumo menor, oferecendo descontos imediatos sem burocracia. O Mercado Livre é mais vantajoso para consumos maiores."
      },
      {
        question: "A Solarien atende o interior de Alagoas?",
        answer: "Sim! Atendemos todo o estado, de Maceió a Delmiro Gouveia, passando por Arapiraca, Penedo e todas as cidades alagoanas."
      },
      {
        question: "Como funciona a conta de luz após a migração?",
        answer: "Você continua recebendo a conta da Equatorial referente às taxas de distribuição, e recebe uma fatura separada da energia comprada no Mercado Livre, com valores muito menores."
      },
      {
        question: "Posso migrar minha residência em Alagoas?",
        answer: "Sim! Com a Energia por Assinatura, residências podem economizar de 15% a 20% na conta de luz sem nenhuma burocracia."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Maceió, Arapiraca, Rio Largo, Palmeira dos Índios, União dos Palmares, Penedo, Maragogi e demais municípios alagoanos.",
    regionalContext: "Alagoas possui um dos maiores potenciais de energia solar do Brasil, com mais de 2.800 horas de sol por ano. A economia com energia renovável é uma escolha inteligente e sustentável.",
    economicProfile: "Com forte presença do turismo, agroindústria e comércio, Alagoas tem alta demanda por soluções de economia de energia que aumentem a competitividade das empresas locais.",
    energyTip: "Dica: Hotéis e pousadas no litoral alagoano economizam em média R$ 5.000/mês com o Mercado Livre de Energia!"
  },

  AP: {
    hook: "O Amapá, porta de entrada para a Amazônia, agora é referência em economia de energia. Reduza seus custos em até 45%.",
    introduction: `O Amapá, com sua natureza exuberante e posição estratégica no extremo Norte, está passando por uma revolução energética. Empresas de Macapá a Oiapoque estão descobrindo como economizar significativamente na conta de luz.

A Solarien Energy trouxe para o Amapá soluções inovadoras que se adaptam às particularidades da região amazônica. Com uma das tarifas mais elevadas do Brasil, a economia no Mercado Livre é ainda mais expressiva.`,
    howItWorks: {
      title: "Como Funciona o Processo no Amapá",
      description: "Processo adaptado às necessidades específicas do estado amazônico.",
      steps: [
        { title: "Primeiro Contato", description: "Entre em contato via WhatsApp para análise inicial" },
        { title: "Estudo de Viabilidade", description: "Avaliamos seu consumo e calculamos a economia potencial" },
        { title: "Formalização", description: "Preparamos toda a documentação necessária" },
        { title: "Migração Completa", description: "Realizamos a transição junto à CEA Equatorial" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Amapá",
      description: "Vantagens únicas para consumidores amapaenses",
      items: [
        { title: "Máxima Economia", description: "Com tarifas altas no AP, a economia pode superar 40%", highlight: "40%+" },
        { title: "Estabilidade", description: "Contratos que protegem contra oscilações tarifárias" },
        { title: "Energia Limpa", description: "Acesso a fontes renováveis certificadas" },
        { title: "Competitividade", description: "Reduza custos e aumente suas margens" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Amapá",
      description: "Opções flexíveis para cada perfil de consumidor",
      freeMarket: {
        title: "Mercado Livre de Energia",
        features: [
          "Ideal para indústrias e grandes comércios",
          "Negociação direta com geradores",
          "Economia de até 45%",
          "Contratos de médio e longo prazo",
          "Proteção contra aumentos tarifários"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Perfeito para residências e pequenos negócios",
          "Desconto automático na conta de luz",
          "Sem necessidade de obras",
          "Processo 100% online",
          "Início imediato da economia"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Amapá",
      description: "Migrar para o Mercado Livre não custa nada",
      items: [
        "Sem taxa de entrada ou adesão",
        "Consultoria gratuita e especializada",
        "Migração sem custos adicionais",
        "Sem necessidade de investimentos em infraestrutura",
        "Suporte contínuo incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Amapá e em Todo Brasil",
      description: "Cobertura completa em todo o estado do Amapá",
      highlights: [
        "Atendimento especializado em Macapá",
        "Suporte para cidades do interior",
        "Equipe preparada para região amazônica",
        "Parceria com distribuidora local"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Amapá",
      description: "Com tarifas elevadas, cada kWh economizado representa economia real.",
      stats: [
        { value: "R$ 0,91", label: "Tarifa média/kWh" },
        { value: "43%", label: "Economia potencial" },
        { value: "R$ 600+", label: "Economia mensal média" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Amapá",
      description: "O Amapá é atendido pela CEA Equatorial, e a Solarien trabalha com geradores qualificados que garantem fornecimento estável e preços competitivos para todo o estado."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Amapá",
      description: "Documentação simples para migração tranquila",
      items: [
        { icon: "file", title: "Contas de Luz", description: "Últimas 3 faturas da CEA Equatorial" },
        { icon: "building", title: "Docs Empresariais", description: "CNPJ e documentação societária" },
        { icon: "user", title: "Identificação", description: "RG e CPF do responsável" },
        { icon: "map", title: "Endereço", description: "Comprovante de endereço atualizado" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Amapá",
      description: "O que faz a Solarien única no mercado amapaense",
      items: [
        { title: "Experiência Regional", description: "Conhecimento das particularidades energéticas da Amazônia" },
        { title: "Atendimento Dedicado", description: "Equipe focada nas necessidades do Amapá" },
        { title: "Tecnologia", description: "Plataforma digital para acompanhamento em tempo real" },
        { title: "Suporte Integral", description: "Assistência completa pré e pós-migração" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Amapá",
      description: "Razões para migrar sua empresa ou residência",
      reasons: [
        "Tarifas entre as mais altas do Brasil justificam economia máxima",
        "Processo gratuito e sem burocracia",
        "Energia renovável certificada",
        "Proteção contra aumentos tarifários",
        "Suporte especializado da Solarien",
        "Economia comprovada desde o primeiro mês"
      ]
    },
    testimonials: [
      {
        name: "Antônio Ferreira",
        role: "Dono de supermercado",
        city: "Macapá",
        content: "Com refrigeração funcionando 24h, minha conta era altíssima. A Solarien me ajudou a economizar 38% todo mês. Foram mais de R$ 7.000 de economia!",
        savings: "38%"
      },
      {
        name: "Maria do Carmo Silva",
        role: "Empresária do setor hoteleiro",
        city: "Santana",
        content: "O ar-condicionado é essencial aqui. Depois da migração, reduzi meus custos em 42% e reinvesti na qualidade do atendimento aos hóspedes.",
        savings: "42%"
      },
      {
        name: "José Ribeiro",
        role: "Gerente de indústria",
        city: "Laranjal do Jari",
        content: "Mesmo no interior do Amapá, a Solarien nos atendeu perfeitamente. Economia de 35% na conta de luz faz diferença enorme para nossa competitividade.",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O Mercado Livre de Energia funciona bem no Amapá, mesmo com o sistema energético isolado?",
        answer: "Sim! Mesmo com particularidades do sistema amapaense, o Mercado Livre funciona perfeitamente. A Solarien tem experiência com as especificidades da região Norte."
      },
      {
        question: "Por que a energia é tão cara no Amapá?",
        answer: "O Amapá tem custos logísticos elevados e histórico de subsídios. O Mercado Livre oferece alternativas mais competitivas que compensam esses custos."
      },
      {
        question: "A Solarien atende Oiapoque e outras cidades distantes?",
        answer: "Sim! Atendemos todo o estado, com processos majoritariamente digitais que facilitam a migração em qualquer cidade do Amapá."
      },
      {
        question: "Como é a estabilidade do fornecimento no Mercado Livre?",
        answer: "A distribuição continua sendo feita pela CEA Equatorial, garantindo a mesma estabilidade. O que muda é apenas o fornecedor da energia, com preços mais baixos."
      },
      {
        question: "Quanto tempo leva para começar a economizar?",
        answer: "O processo de migração leva de 30 a 60 dias. Após a conclusão, a economia é imediata na primeira fatura."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Macapá, Santana, Laranjal do Jari, Oiapoque, Mazagão e demais municípios amapaenses.",
    regionalContext: "O Amapá possui clima equatorial e alta umidade, o que resulta em consumo significativo de climatização. A Solarien oferece soluções que otimizam esse consumo.",
    economicProfile: "Com base na mineração, agricultura e serviços, o Amapá tem empresas que dependem de energia confiável e econômica para manter competitividade.",
    energyTip: "Dica: Empresas com alto consumo de refrigeração e ar-condicionado são as que mais economizam com o Mercado Livre de Energia!"
  },

  AM: {
    hook: "O Amazonas, coração da maior floresta tropical do mundo, lidera a economia de energia no Norte. Economize até 45% na conta de luz.",
    introduction: `O Amazonas, com sua riqueza natural incomparável, está na vanguarda da transição energética brasileira. De Manaus ao interior da floresta, empresas e indústrias descobrem os benefícios do Mercado Livre de Energia.

A Solarien Energy chegou ao Amazonas para revolucionar a forma como consumidores pagam pela energia. Com o Polo Industrial de Manaus e milhares de empresas, o potencial de economia é imenso. Tarifas elevadas tornam cada ponto percentual de economia ainda mais valioso.`,
    howItWorks: {
      title: "Como Funciona o Processo no Amazonas",
      description: "Processo especializado para a realidade amazônica.",
      steps: [
        { title: "Contato via WhatsApp", description: "Inicie sua jornada de economia com um simples clique" },
        { title: "Análise de Consumo", description: "Avaliamos seu perfil considerando as particularidades do AM" },
        { title: "Proposta Personalizada", description: "Desenvolvemos a melhor solução para seu caso" },
        { title: "Migração Assistida", description: "Cuidamos de tudo junto à Amazonas Energia" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Amazonas",
      description: "Vantagens exclusivas para consumidores amazonenses",
      items: [
        { title: "Economia Expressiva", description: "Reduza até 45% dos custos com energia elétrica", highlight: "45%" },
        { title: "Competitividade Industrial", description: "Fortaleça seu negócio no Polo Industrial de Manaus" },
        { title: "Sustentabilidade", description: "Energia renovável alinhada à vocação ambiental do AM" },
        { title: "Previsibilidade", description: "Contratos que protegem contra variações de mercado" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Amazonas",
      description: "Soluções flexíveis para cada perfil de consumidor",
      freeMarket: {
        title: "Mercado Livre de Energia",
        features: [
          "Ideal para indústrias do Polo de Manaus",
          "Economia de até 45% comprovada",
          "Contratos personalizados",
          "Negociação direta com geradores",
          "Proteção contra aumentos"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Perfeito para comércios e residências",
          "Desconto imediato na conta",
          "Sem burocracia",
          "Processo 100% digital",
          "Flexibilidade total"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Amazonas",
      description: "Migração gratuita para consumidores amazonenses",
      items: [
        "Zero taxa de adesão",
        "Consultoria gratuita especializada",
        "Processo de migração sem custos",
        "Sem necessidade de obras",
        "Suporte contínuo incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Amazonas e em Todo Brasil",
      description: "Cobertura abrangente em todo o estado",
      highlights: [
        "Escritório de atendimento em Manaus",
        "Suporte ao Polo Industrial",
        "Atendimento a cidades do interior",
        "Equipe especializada na região Norte"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Amazonas",
      description: "O Polo Industrial de Manaus é um dos maiores consumidores de energia do Brasil. A economia é gigantesca.",
      stats: [
        { value: "R$ 0,78", label: "Tarifa média/kWh" },
        { value: "45%", label: "Economia potencial" },
        { value: "500+", label: "Indústrias beneficiadas" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Amazonas",
      description: "O Amazonas é atendido pela Amazonas Energia, e a Solarien trabalha com os melhores geradores do país para oferecer preços imbatíveis e energia renovável certificada."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Amazonas",
      description: "Documentação simples para uma migração eficiente",
      items: [
        { icon: "file", title: "Faturas Recentes", description: "Últimas 3 contas da Amazonas Energia" },
        { icon: "building", title: "Documentos Empresariais", description: "CNPJ, contrato social, procuração" },
        { icon: "user", title: "Identificação", description: "RG e CPF do representante" },
        { icon: "map", title: "Comprovante", description: "Documento de endereço atualizado" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Amazonas",
      description: "Por que escolher a Solarien no Amazonas",
      items: [
        { title: "Expertise Industrial", description: "Experiência com indústrias do Polo de Manaus" },
        { title: "Atendimento Local", description: "Equipe presente em Manaus para suporte presencial" },
        { title: "Soluções Customizadas", description: "Propostas adaptadas ao perfil de cada cliente" },
        { title: "Monitoramento Avançado", description: "Acompanhamento em tempo real do consumo e economia" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Amazonas",
      description: "Razões para migrar hoje mesmo",
      reasons: [
        "Polo Industrial de Manaus tem consumo intensivo de energia",
        "Economia significativa aumenta competitividade",
        "Processo gratuito e descomplicado",
        "Energia renovável certificada",
        "Suporte especializado da Solarien",
        "Milhares de empresas já economizam"
      ]
    },
    testimonials: [
      {
        name: "Ricardo Yamamoto",
        role: "Diretor industrial",
        city: "Manaus",
        content: "Nossa fábrica no Polo Industrial economiza R$ 85.000 por mês desde que migramos para o Mercado Livre com a Solarien. É uma economia que faz diferença real no resultado.",
        savings: "42%"
      },
      {
        name: "Patricia Souza",
        role: "Gerente de operações",
        city: "Manaus",
        content: "Trabalhamos com eletrônicos e energia é um custo enorme. A Solarien nos ajudou a reduzir 38% da conta. O processo foi profissional e transparente do início ao fim.",
        savings: "38%"
      },
      {
        name: "Marcos Oliveira",
        role: "Proprietário de rede de supermercados",
        city: "Manaus",
        content: "Com 8 lojas em Manaus, nossa conta de energia era altíssima. Depois da migração, economizamos mais de R$ 45.000 mensais. Investimento zero, retorno imenso.",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O Mercado Livre de Energia é vantajoso para indústrias do Polo de Manaus?",
        answer: "Extremamente! Indústrias com alto consumo são as que mais se beneficiam, podendo economizar milhões de reais por ano com a migração para o Mercado Livre."
      },
      {
        question: "A Solarien atende empresas de todos os portes no Amazonas?",
        answer: "Sim! Desde pequenos comércios até grandes indústrias. Para cada perfil, temos a solução mais adequada, seja Mercado Livre ou Energia por Assinatura."
      },
      {
        question: "Como funciona a energia no Mercado Livre considerando a matriz energética do AM?",
        answer: "Você pode escolher energia de fontes renováveis de todo o Brasil, não ficando limitado à geração local. Isso garante preços competitivos e sustentabilidade."
      },
      {
        question: "O processo é complicado para indústrias com demanda alta?",
        answer: "Não! A Solarien tem experiência com indústrias de grande porte e cuida de toda a complexidade técnica e burocrática. Você só precisa nos enviar os documentos."
      },
      {
        question: "Qual o prazo para migração de uma indústria no Amazonas?",
        answer: "Dependendo do porte e perfil, a migração pode levar de 45 a 90 dias. Acompanhamos cada etapa para garantir uma transição sem interrupções."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Manaus, Parintins, Itacoatiara, Manacapuru, Coari, Tefé e demais municípios amazonenses.",
    regionalContext: "O Amazonas possui o maior polo industrial da Região Norte, com demanda energética intensa. O clima equatorial também exige alto consumo de climatização, tornando a economia ainda mais relevante.",
    economicProfile: "Com base no Polo Industrial de Manaus, comércio e serviços, o estado tem empresas que dependem de energia competitiva para manter sua vantagem no mercado nacional.",
    energyTip: "Dica: Indústrias do Polo de Manaus economizam em média R$ 50.000 a R$ 100.000 por mês com o Mercado Livre de Energia!"
  },

  BA: {
    hook: "A Bahia, terra do sol e da energia renovável, é referência nacional em economia de energia. Economize até 45% na sua conta de luz.",
    introduction: `A Bahia, com sua costa deslumbrante e interior vibrante, é um dos estados mais promissores para o Mercado Livre de Energia. Com usinas eólicas e solares em expansão, o estado oferece energia limpa e barata.

A Solarien Energy atua em toda a Bahia, de Salvador ao Sertão, ajudando milhares de empresas e residências a reduzirem drasticamente seus custos. O estado é um hub de geração renovável, garantindo preços competitivos e sustentabilidade.`,
    howItWorks: {
      title: "Como Funciona o Processo na Bahia",
      description: "Processo ágil e adaptado à realidade baiana.",
      steps: [
        { title: "Contato Inicial", description: "Fale com nossos especialistas baianos via WhatsApp" },
        { title: "Análise Completa", description: "Avaliamos seu consumo e identificamos oportunidades de economia" },
        { title: "Proposta Vantajosa", description: "Apresentamos a melhor solução para seu perfil" },
        { title: "Migração Tranquila", description: "Cuidamos de tudo junto à Neoenergia Coelba" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado da Bahia",
      description: "Vantagens exclusivas para consumidores baianos",
      items: [
        { title: "Economia Garantida", description: "Reduza até 45% da sua conta de luz mensal", highlight: "45%" },
        { title: "Energia Eólica e Solar", description: "Acesso à energia renovável gerada no próprio estado" },
        { title: "Competitividade Turística", description: "Hotéis e pousadas reduzem custos operacionais" },
        { title: "Agronegócio", description: "Fazendas e agroindústrias economizam milhões" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura na Bahia",
      description: "Soluções para cada perfil de consumidor baiano",
      freeMarket: {
        title: "Mercado Livre de Energia",
        features: [
          "Ideal para consumos acima de 500 kWh/mês",
          "Economia de até 45%",
          "Contratos flexíveis de 1 a 5 anos",
          "Energia eólica e solar da Bahia",
          "Negociação direta com geradores"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Perfeito para residências e pequenos negócios",
          "Desconto imediato na conta da Coelba",
          "Sem necessidade de obras",
          "Adesão 100% digital",
          "Cancele quando quiser"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade na Bahia",
      description: "Migrar não custa nada para o consumidor baiano",
      items: [
        "Sem taxa de adesão ou entrada",
        "Consultoria especializada gratuita",
        "Processo de migração sem custos",
        "Sem necessidade de investimentos",
        "Suporte contínuo incluído"
      ]
    },
    coverage: {
      title: "Atendimento na Bahia e em Todo Brasil",
      description: "Presença forte em todo o estado da Bahia",
      highlights: [
        "Escritório em Salvador",
        "Atendimento ao agronegócio do interior",
        "Suporte especializado para turismo",
        "Cobertura do litoral ao sertão"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia na Bahia",
      description: "Com a maior geração eólica do Brasil, a Bahia oferece energia limpa e barata.",
      stats: [
        { value: "R$ 0,68", label: "Tarifa média/kWh" },
        { value: "45%", label: "Economia potencial" },
        { value: "#1", label: "Geração eólica do Brasil" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia na Bahia",
      description: "A Bahia é o maior produtor de energia eólica do Brasil e possui excelente infraestrutura de distribuição via Neoenergia Coelba. A Solarien oferece acesso a essa energia limpa com preços imbatíveis."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade na Bahia",
      description: "Documentação simples para migração tranquila",
      items: [
        { icon: "file", title: "Faturas de Energia", description: "Últimas 3 contas da Coelba" },
        { icon: "building", title: "Docs Empresariais", description: "CNPJ e documentação societária" },
        { icon: "user", title: "Identificação", description: "RG e CPF do responsável" },
        { icon: "map", title: "Comprovante", description: "Documento de endereço atualizado" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy na Bahia",
      description: "Por que a Solarien é a melhor escolha para baianos",
      items: [
        { title: "Expertise Local", description: "Conhecimento profundo do mercado energético baiano" },
        { title: "Foco em Renováveis", description: "Acesso prioritário a energia eólica e solar" },
        { title: "Atendimento Personalizado", description: "Equipe baiana pronta para ajudar" },
        { title: "Resultados Comprovados", description: "Milhares de clientes satisfeitos na Bahia" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia na Bahia",
      description: "Razões para migrar hoje mesmo",
      reasons: [
        "Maior produtor de energia eólica do Brasil",
        "Preços competitivos de energia renovável",
        "Processo gratuito e sem burocracia",
        "Economia imediata na conta de luz",
        "Suporte local da Solarien Energy",
        "Sustentabilidade garantida"
      ]
    },
    testimonials: [
      {
        name: "Roberto Almeida",
        role: "Dono de resort",
        city: "Porto Seguro",
        content: "Nosso resort consumia uma fortuna em energia. Com a Solarien, economizamos 42% e ainda usamos energia 100% renovável. Os hóspedes adoram saber disso!",
        savings: "42%"
      },
      {
        name: "Mariana Costa",
        role: "Empresária do agronegócio",
        city: "Barreiras",
        content: "A irrigação das nossas fazendas era o maior custo. Depois da migração para o Mercado Livre, economizamos R$ 180.000 por ano. Investimento zero!",
        savings: "38%"
      },
      {
        name: "Jorge Santos",
        role: "Gerente de shopping",
        city: "Salvador",
        content: "Um shopping consome muita energia. A Solarien nos ajudou a reduzir R$ 120.000 mensais na conta de luz. O processo foi profissional do início ao fim.",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "A Bahia é boa para o Mercado Livre de Energia?",
        answer: "Excelente! A Bahia é o maior produtor de energia eólica do Brasil, o que significa preços competitivos e acesso fácil a energia renovável."
      },
      {
        question: "O turismo baiano se beneficia da economia de energia?",
        answer: "Muito! Hotéis, pousadas e resorts economizam milhares de reais todo mês, reinvestindo na qualidade do serviço e aumentando a competitividade."
      },
      {
        question: "A Solarien atende o interior da Bahia?",
        answer: "Sim! Atendemos de Salvador a Barreiras, de Porto Seguro a Juazeiro. Toda a Bahia está coberta pela Solarien."
      },
      {
        question: "Como funciona a energia eólica no Mercado Livre?",
        answer: "Você pode contratar energia gerada por usinas eólicas da própria Bahia, garantindo sustentabilidade e preços baixos."
      },
      {
        question: "Fazendas e agroindústrias podem migrar?",
        answer: "Com certeza! O agronegócio baiano é um dos maiores beneficiados, especialmente propriedades com irrigação e processamento."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Salvador, Feira de Santana, Vitória da Conquista, Camaçari, Itabuna, Juazeiro, Barreiras e demais municípios baianos.",
    regionalContext: "A Bahia possui condições ideais para geração de energia renovável, com ventos constantes no interior e alta irradiação solar em todo o estado.",
    economicProfile: "Com turismo, agronegócio, indústria e serviços, a Bahia tem economia diversificada que se beneficia enormemente da redução de custos com energia.",
    energyTip: "Dica: Fazendas com irrigação economizam em média R$ 15.000/mês com o Mercado Livre de Energia!"
  },

  CE: {
    hook: "O Ceará, terra do sol nascente, é pioneiro em energia renovável no Nordeste. Economize até 45% na sua conta de luz.",
    introduction: `O Ceará, com seu litoral paradisíaco e sertão vibrante, está na vanguarda da energia renovável brasileira. Com parques eólicos e solares em expansão, o estado oferece as melhores condições para economia de energia.

A Solarien Energy atua em todo o Ceará, de Fortaleza ao Cariri, ajudando empresas e residências a aproveitarem o potencial renovável do estado. Com preços competitivos e energia limpa, a economia é garantida.`,
    howItWorks: {
      title: "Como Funciona o Processo no Ceará",
      description: "Processo simplificado para o consumidor cearense.",
      steps: [
        { title: "Primeiro Contato", description: "Entre em contato pelo WhatsApp para análise inicial" },
        { title: "Diagnóstico", description: "Avaliamos seu perfil de consumo e identificamos economias" },
        { title: "Proposta", description: "Apresentamos a melhor solução para seu caso" },
        { title: "Migração", description: "Cuidamos de tudo junto à Enel Ceará" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Ceará",
      description: "Vantagens exclusivas para consumidores cearenses",
      items: [
        { title: "Economia Máxima", description: "Reduza até 45% da sua conta de luz mensal", highlight: "45%" },
        { title: "Energia Renovável", description: "Aproveite a energia eólica e solar do Ceará" },
        { title: "Turismo Competitivo", description: "Hotéis e pousadas reduzem custos operacionais" },
        { title: "Indústria Forte", description: "Aumente a competitividade do seu negócio" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Ceará",
      description: "Opções flexíveis para cada perfil de consumidor",
      freeMarket: {
        title: "Mercado Livre de Energia",
        features: [
          "Para consumos acima de 500 kWh/mês",
          "Economia de até 45%",
          "Contratos de 1 a 5 anos",
          "Energia eólica cearense",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Ideal para residências e pequenos negócios",
          "Desconto imediato na conta da Enel",
          "Sem burocracia",
          "Adesão digital",
          "Flexibilidade total"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Ceará",
      description: "Migrar não custa nada para o consumidor cearense",
      items: [
        "Taxa de adesão: R$ 0,00",
        "Consultoria: Gratuita",
        "Migração: Sem custos",
        "Obras: Não necessárias",
        "Suporte: Incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Ceará e em Todo Brasil",
      description: "Cobertura completa em todo o estado do Ceará",
      highlights: [
        "Escritório em Fortaleza",
        "Atendimento ao Cariri",
        "Suporte ao turismo do litoral",
        "Cobertura de Sobral a Juazeiro"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Ceará",
      description: "O Ceará é referência em energia renovável, com ventos constantes e sol abundante.",
      stats: [
        { value: "R$ 0,65", label: "Tarifa média/kWh" },
        { value: "45%", label: "Economia potencial" },
        { value: "2.900+", label: "Horas de sol/ano" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Ceará",
      description: "O Ceará é atendido pela Enel e possui uma das maiores gerações de energia renovável do país. A Solarien oferece acesso a essa energia limpa com condições especiais."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Ceará",
      description: "Documentação simples e processo rápido",
      items: [
        { icon: "file", title: "Contas de Luz", description: "Últimas 3 faturas da Enel Ceará" },
        { icon: "building", title: "Documentos da Empresa", description: "CNPJ e contrato social" },
        { icon: "user", title: "Identificação", description: "RG e CPF do responsável" },
        { icon: "map", title: "Endereço", description: "Comprovante atualizado" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Ceará",
      description: "O que faz da Solarien a melhor escolha",
      items: [
        { title: "Conhecimento Local", description: "Equipe cearense que entende as necessidades locais" },
        { title: "Foco em Renováveis", description: "Acesso às melhores fontes de energia do Nordeste" },
        { title: "Agilidade", description: "Processos rápidos e eficientes" },
        { title: "Transparência", description: "Relatórios claros de economia" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Ceará",
      description: "Razões para migrar agora",
      reasons: [
        "Ceará é líder em energia renovável",
        "Preços competitivos garantidos",
        "Processo gratuito e simples",
        "Economia imediata",
        "Suporte especializado",
        "Sustentabilidade certificada"
      ]
    },
    testimonials: [
      {
        name: "Francisco Alves",
        role: "Dono de rede de restaurantes",
        city: "Fortaleza",
        content: "Com 5 restaurantes em Fortaleza, energia era um custo enorme. A Solarien nos ajudou a economizar 40% na conta. São mais de R$ 25.000 de economia por mês!",
        savings: "40%"
      },
      {
        name: "Ana Paula Rodrigues",
        role: "Gerente de hotel",
        city: "Jericoacoara",
        content: "Nosso hotel boutique economiza R$ 8.000 mensais desde a migração. Energia 100% renovável combina perfeitamente com nossa proposta sustentável.",
        savings: "38%"
      },
      {
        name: "José Carlos Lima",
        role: "Empresário industrial",
        city: "Juazeiro do Norte",
        content: "Nossa fábrica de calçados reduziu R$ 45.000 na conta de luz mensal. A Solarien cuidou de toda a burocracia, foi muito profissional.",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O Ceará tem boas condições para energia renovável?",
        answer: "Excelentes! O Ceará é um dos maiores geradores de energia eólica do Brasil, com ventos constantes e alta irradiação solar."
      },
      {
        question: "Hotéis e pousadas do litoral se beneficiam?",
        answer: "Muito! Com alto consumo de climatização, estabelecimentos turísticos economizam milhares de reais todo mês."
      },
      {
        question: "A Solarien atende o interior do Ceará?",
        answer: "Sim! Atendemos de Fortaleza a Juazeiro do Norte, de Sobral a Crato. Todo o Ceará está coberto."
      },
      {
        question: "Como funciona a energia eólica cearense no Mercado Livre?",
        answer: "Você pode contratar energia de parques eólicos do próprio Ceará, garantindo preços baixos e sustentabilidade."
      },
      {
        question: "Quanto tempo leva a migração no Ceará?",
        answer: "O processo completo leva de 30 a 60 dias, com acompanhamento da Solarien em cada etapa."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Fortaleza, Juazeiro do Norte, Sobral, Caucaia, Maracanaú, Crato e demais municípios cearenses.",
    regionalContext: "O Ceará possui um dos maiores potenciais de energia renovável do mundo, com ventos constantes no litoral e no sertão, além de alta irradiação solar.",
    economicProfile: "Com turismo, indústria têxtil, calçadista e agronegócio, o Ceará tem economia dinâmica que se beneficia enormemente da redução de custos com energia.",
    energyTip: "Dica: Indústrias do polo calçadista cearense economizam em média R$ 30.000/mês com o Mercado Livre!"
  },

  DF: {
    hook: "O Distrito Federal, coração político do Brasil, agora é referência em economia de energia inteligente. Economize até 45%.",
    introduction: `O Distrito Federal, centro do poder político brasileiro, está liderando a transição para energia mais eficiente e sustentável. Empresas, órgãos públicos e residências em Brasília estão descobrindo os benefícios do Mercado Livre de Energia.

A Solarien Energy chegou ao DF com soluções premium adaptadas às necessidades da capital federal. Com uma das maiores rendas per capita do país, a busca por eficiência e qualidade é prioridade, e a economia de energia se encaixa perfeitamente nesse perfil.`,
    howItWorks: {
      title: "Como Funciona o Processo no Distrito Federal",
      description: "Processo premium para consumidores de Brasília.",
      steps: [
        { title: "Contato Executivo", description: "Atendimento personalizado via WhatsApp ou presencial" },
        { title: "Análise Detalhada", description: "Estudo completo do seu perfil de consumo" },
        { title: "Proposta Sob Medida", description: "Solução personalizada para suas necessidades" },
        { title: "Migração VIP", description: "Acompanhamento dedicado junto à Neoenergia Brasília" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Distrito Federal",
      description: "Vantagens exclusivas para consumidores brasilienses",
      items: [
        { title: "Economia Significativa", description: "Reduza até 45% dos custos com energia elétrica", highlight: "45%" },
        { title: "Qualidade Premium", description: "Atendimento diferenciado para o padrão DF" },
        { title: "Sustentabilidade", description: "Energia renovável alinhada ao perfil consciente da capital" },
        { title: "Tecnologia", description: "Monitoramento avançado do consumo e economia" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no DF",
      description: "Soluções inteligentes para brasilienses",
      freeMarket: {
        title: "Mercado Livre de Energia",
        features: [
          "Ideal para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável certificada",
          "Gestão profissional"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Perfeito para residências e escritórios",
          "Desconto imediato na conta",
          "Sem burocracia",
          "Processo 100% digital",
          "Flexibilidade total"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no DF",
      description: "Migração gratuita para consumidores do Distrito Federal",
      items: [
        "Sem taxa de adesão",
        "Consultoria executiva gratuita",
        "Processo de migração sem custos",
        "Sem necessidade de obras",
        "Suporte premium incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Distrito Federal e em Todo Brasil",
      description: "Presença forte em todo o DF",
      highlights: [
        "Escritório em Brasília",
        "Atendimento em todas as regiões administrativas",
        "Suporte a condomínios comerciais",
        "Parcerias com empresas locais"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Distrito Federal",
      description: "Brasília tem consumo intensivo de climatização. A economia é ainda mais expressiva.",
      stats: [
        { value: "R$ 0,67", label: "Tarifa média/kWh" },
        { value: "42%", label: "Economia média" },
        { value: "R$ 800+", label: "Economia mensal média" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Distrito Federal",
      description: "O DF é atendido pela Neoenergia Brasília, com excelente infraestrutura. A Solarien trabalha com os melhores geradores do país para oferecer preços competitivos."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no DF",
      description: "Documentação simplificada para migração rápida",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas da Neoenergia" },
        { icon: "building", title: "Documentos", description: "CNPJ e documentação societária" },
        { icon: "user", title: "Identificação", description: "RG e CPF do responsável" },
        { icon: "map", title: "Endereço", description: "Comprovante atualizado" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no DF",
      description: "Atendimento premium para brasilienses",
      items: [
        { title: "Excelência", description: "Atendimento no padrão de qualidade do DF" },
        { title: "Tecnologia", description: "Plataforma digital avançada para gestão" },
        { title: "Transparência", description: "Relatórios detalhados de economia" },
        { title: "Agilidade", description: "Processos rápidos e eficientes" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no DF",
      description: "Razões para migrar agora",
      reasons: [
        "Alto consumo de climatização justifica economia",
        "Processo gratuito e sem burocracia",
        "Energia renovável certificada",
        "Atendimento premium da Solarien",
        "Milhares já economizam em Brasília",
        "Tecnologia de ponta para gestão"
      ]
    },
    testimonials: [
      {
        name: "Carlos Eduardo Mendes",
        role: "Diretor de empresa de TI",
        city: "Brasília",
        content: "Nosso data center consumia uma fortuna. Com a Solarien, economizamos 42% na conta de luz, são mais de R$ 50.000 mensais de economia!",
        savings: "42%"
      },
      {
        name: "Patrícia Oliveira",
        role: "Síndica de condomínio comercial",
        city: "Brasília",
        content: "O condomínio tinha custos altíssimos com energia. A migração para o Mercado Livre reduziu R$ 35.000 por mês. Os condôminos ficaram muito satisfeitos!",
        savings: "38%"
      },
      {
        name: "Roberto Silva",
        role: "Gerente de rede de lojas",
        city: "Taguatinga",
        content: "Com 8 lojas no DF, nossa conta de energia era enorme. A Solarien nos ajudou a economizar 35% em todas as unidades. Processo simples e profissional.",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O Mercado Livre funciona bem em Brasília?",
        answer: "Perfeitamente! Com alto consumo de climatização e excelente infraestrutura, o DF é ideal para economia de energia no Mercado Livre."
      },
      {
        question: "Condomínios comerciais podem migrar?",
        answer: "Sim! Condomínios são excelentes candidatos, com economia expressiva nas áreas comuns que beneficia todos os condôminos."
      },
      {
        question: "A Solarien atende todas as regiões administrativas?",
        answer: "Sim! Atendemos Plano Piloto, Taguatinga, Ceilândia, Águas Claras e todas as demais regiões do DF."
      },
      {
        question: "Como funciona para empresas de tecnologia?",
        answer: "Data centers e empresas de TI se beneficiam enormemente, dado o alto consumo de equipamentos e climatização."
      },
      {
        question: "O processo é diferente para órgãos públicos?",
        answer: "Há particularidades, mas a Solarien tem experiência com licitações e contratos públicos, facilitando o processo."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Brasília, Taguatinga, Ceilândia, Águas Claras, Samambaia, Gama e demais regiões administrativas do DF.",
    regionalContext: "O Distrito Federal possui clima seco com temperaturas variadas, resultando em alto consumo de climatização. A economia de energia é especialmente relevante.",
    economicProfile: "Com base em serviços, tecnologia e setor público, o DF tem economia dinâmica com empresas que valorizam eficiência e qualidade.",
    energyTip: "Dica: Data centers e escritórios em Brasília economizam em média R$ 30.000/mês com o Mercado Livre!"
  },

  ES: {
    hook: "O Espírito Santo, terra do aço e do café, agora lidera em economia de energia. Economize até 45% na sua conta de luz.",
    introduction: `O Espírito Santo, com sua economia diversificada e porto estratégico, está abraçando o Mercado Livre de Energia. Indústrias, comércios e residências de Vitória a Cachoeiro estão economizando milhares de reais.

A Solarien Energy atua em todo o estado, oferecendo soluções personalizadas para cada setor da economia capixaba. Com forte presença industrial e agrícola, o potencial de economia é imenso.`,
    howItWorks: {
      title: "Como Funciona o Processo no Espírito Santo",
      description: "Processo eficiente para o consumidor capixaba.",
      steps: [
        { title: "Contato Inicial", description: "Fale com nossos especialistas via WhatsApp" },
        { title: "Análise de Consumo", description: "Avaliamos seu perfil e identificamos oportunidades" },
        { title: "Proposta Personalizada", description: "Desenvolvemos a melhor solução para você" },
        { title: "Migração Assistida", description: "Cuidamos de tudo junto à EDP Espírito Santo" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Espírito Santo",
      description: "Vantagens exclusivas para consumidores capixabas",
      items: [
        { title: "Economia Garantida", description: "Reduza até 45% da sua conta de luz", highlight: "45%" },
        { title: "Indústria Competitiva", description: "Aumente a competitividade do seu negócio" },
        { title: "Agronegócio", description: "Economia para produtores de café e frutas" },
        { title: "Sustentabilidade", description: "Energia 100% renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Espírito Santo",
      description: "Soluções para cada perfil de consumidor capixaba",
      freeMarket: {
        title: "Mercado Livre de Energia",
        features: [
          "Ideal para indústrias e grandes comércios",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Perfeito para residências e pequenos negócios",
          "Desconto imediato na EDP",
          "Sem burocracia",
          "Adesão digital",
          "Flexibilidade"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Espírito Santo",
      description: "Migração gratuita para consumidores capixabas",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras necessárias",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Espírito Santo e em Todo Brasil",
      description: "Cobertura completa em todo o ES",
      highlights: [
        "Escritório em Vitória",
        "Atendimento a indústrias de Anchieta",
        "Suporte ao agronegócio do interior",
        "Cobertura do litoral à montanha"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Espírito Santo",
      description: "Com forte presença industrial, a economia de energia é estratégica para o ES.",
      stats: [
        { value: "R$ 0,66", label: "Tarifa média/kWh" },
        { value: "43%", label: "Economia média" },
        { value: "R$ 700+", label: "Economia mensal média" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Espírito Santo",
      description: "O ES é atendido pela EDP Espírito Santo, com excelente infraestrutura. A Solarien oferece acesso a energia renovável de todo o país com preços competitivos."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Espírito Santo",
      description: "Documentação simples para migração rápida",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas da EDP" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato social" },
        { icon: "user", title: "Identificação", description: "RG e CPF do responsável" },
        { icon: "map", title: "Endereço", description: "Comprovante atualizado" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Espírito Santo",
      description: "Por que escolher a Solarien no ES",
      items: [
        { title: "Expertise Industrial", description: "Experiência com grandes indústrias capixabas" },
        { title: "Foco no Agronegócio", description: "Soluções para produtores rurais" },
        { title: "Agilidade", description: "Processos rápidos e eficientes" },
        { title: "Transparência", description: "Relatórios claros de economia" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Espírito Santo",
      description: "Razões para migrar agora",
      reasons: [
        "Forte presença industrial justifica economia",
        "Processo gratuito e simples",
        "Energia renovável certificada",
        "Suporte local da Solarien",
        "Milhares já economizam no ES",
        "Competitividade garantida"
      ]
    },
    testimonials: [
      {
        name: "Marcos Amorim",
        role: "Diretor industrial",
        city: "Serra",
        content: "Nossa metalúrgica economiza R$ 120.000 por mês desde a migração. A Solarien entendeu nossas necessidades e entregou resultados impressionantes.",
        savings: "42%"
      },
      {
        name: "Ana Beatriz Santos",
        role: "Produtora de café",
        city: "Domingos Martins",
        content: "O beneficiamento do café consome muita energia. Com a Solarien, economizamos 38% e ainda usamos energia renovável. Combina com nosso café sustentável!",
        savings: "38%"
      },
      {
        name: "João Pedro Costa",
        role: "Gerente de rede de supermercados",
        city: "Vitória",
        content: "Refrigeração é nosso maior custo. A migração para o Mercado Livre reduziu R$ 25.000 mensais na conta de todas as lojas.",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O ES é bom para o Mercado Livre de Energia?",
        answer: "Excelente! Com forte presença industrial e agrícola, o ES tem alto potencial de economia no Mercado Livre."
      },
      {
        question: "Indústrias de grande porte podem migrar facilmente?",
        answer: "Sim! A Solarien tem experiência com grandes indústrias e cuida de toda a complexidade do processo."
      },
      {
        question: "A Solarien atende o interior do ES?",
        answer: "Sim! Atendemos de Vitória a Cachoeiro, de Linhares a São Mateus. Todo o ES está coberto."
      },
      {
        question: "Como funciona para produtores rurais?",
        answer: "Propriedades rurais com alto consumo se beneficiam enormemente, especialmente com irrigação e beneficiamento."
      },
      {
        question: "Quanto tempo leva a migração?",
        answer: "De 30 a 60 dias para a maioria dos casos, com acompanhamento completo da Solarien."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Vitória, Vila Velha, Serra, Cariacica, Cachoeiro de Itapemirim, Linhares e demais municípios capixabas.",
    regionalContext: "O Espírito Santo possui economia diversificada com mineração, siderurgia, agronegócio e logística portuária, todos setores com alto consumo de energia.",
    economicProfile: "Com mineração, siderurgia, café e logística, o ES tem indústrias que dependem de energia competitiva para manter sua posição no mercado.",
    energyTip: "Dica: Indústrias siderúrgicas capixabas economizam em média R$ 80.000/mês com o Mercado Livre!"
  },

  GO: {
    hook: "Goiás, celeiro do Brasil, agora é referência em economia de energia. Economize até 45% na sua conta de luz.",
    introduction: `Goiás, com sua posição estratégica no Centro-Oeste e economia agroindustrial pujante, está liderando a transição para energia mais eficiente. De Goiânia ao interior agropecuário, empresas e produtores estão economizando.

A Solarien Energy atua em todo o estado, oferecendo soluções para o agronegócio, indústria e comércio goiano. Com irrigação intensiva e processamento agrícola, a economia de energia é essencial para a competitividade.`,
    howItWorks: {
      title: "Como Funciona o Processo em Goiás",
      description: "Processo adaptado às necessidades goianas.",
      steps: [
        { title: "Primeiro Contato", description: "Entre em contato pelo WhatsApp" },
        { title: "Análise Técnica", description: "Avaliamos seu perfil de consumo" },
        { title: "Proposta", description: "Apresentamos a melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo junto à Equatorial ou Enel" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado de Goiás",
      description: "Vantagens para consumidores goianos",
      items: [
        { title: "Economia Máxima", description: "Reduza até 45% da sua conta de luz", highlight: "45%" },
        { title: "Agronegócio", description: "Irrigação e processamento mais baratos" },
        { title: "Indústria", description: "Competitividade para a indústria goiana" },
        { title: "Sustentabilidade", description: "Energia 100% renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura em Goiás",
      description: "Opções para cada perfil goiano",
      freeMarket: {
        title: "Mercado Livre de Energia",
        features: [
          "Ideal para agronegócio e indústria",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Para residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Adesão digital",
          "Flexibilidade"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade em Goiás",
      description: "Migração gratuita para goianos",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento em Goiás e em Todo Brasil",
      description: "Cobertura completa em todo GO",
      highlights: [
        "Escritório em Goiânia",
        "Atendimento ao agronegócio",
        "Suporte a indústrias",
        "Cobertura em todo o estado"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia em Goiás",
      description: "Com irrigação intensiva e agroindústria, a economia é ainda maior.",
      stats: [
        { value: "R$ 0,63", label: "Tarifa média/kWh" },
        { value: "44%", label: "Economia média" },
        { value: "R$ 10.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia em Goiás",
      description: "Goiás é atendido pela Equatorial e Enel, com excelente infraestrutura. A Solarien oferece energia renovável a preços competitivos."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade em Goiás",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas de luz" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato social" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy em Goiás",
      description: "Por que escolher a Solarien em GO",
      items: [
        { title: "Expertise no Agro", description: "Conhecimento das necessidades rurais" },
        { title: "Atendimento Local", description: "Equipe goiana" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia em Goiás",
      description: "Razões para migrar",
      reasons: [
        "Agronegócio consome energia intensivamente",
        "Processo gratuito",
        "Energia renovável",
        "Suporte especializado",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "Ricardo Borges",
        role: "Produtor rural",
        city: "Rio Verde",
        content: "A irrigação consumia uma fortuna. Com a Solarien, economizamos R$ 85.000 por mês. É dinheiro que vai direto pro lucro!",
        savings: "42%"
      },
      {
        name: "Fernanda Machado",
        role: "Gerente de frigorífico",
        city: "Anápolis",
        content: "Refrigeração industrial é cara. A migração para o Mercado Livre reduziu nossos custos em 38%. Excelente atendimento!",
        savings: "38%"
      },
      {
        name: "Paulo Henrique Silva",
        role: "Dono de rede de lojas",
        city: "Goiânia",
        content: "Com 12 lojas em Goiânia, energia era um custo enorme. A Solarien nos ajudou a economizar 35% em todas as unidades.",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O agronegócio goiano se beneficia muito?",
        answer: "Muito! Propriedades com irrigação, silos e processamento economizam dezenas de milhares de reais por mês."
      },
      {
        question: "A Solarien atende propriedades rurais?",
        answer: "Sim! Temos experiência com grandes produtores rurais em todo o estado de Goiás."
      },
      {
        question: "Como funciona a migração para fazendas?",
        answer: "O processo é similar, com análise do consumo de irrigação, silos e beneficiamento."
      },
      {
        question: "Frigoríficos podem migrar?",
        answer: "Com certeza! Frigoríficos são excelentes candidatos pelo alto consumo de refrigeração."
      },
      {
        question: "Qual a economia média em Goiás?",
        answer: "A economia média fica entre 35% e 45%, dependendo do perfil de consumo."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Goiânia, Anápolis, Aparecida de Goiânia, Rio Verde, Catalão, Itumbiara e demais municípios goianos.",
    regionalContext: "Goiás é um dos maiores produtores agrícolas do Brasil, com consumo intensivo de energia para irrigação, silos e processamento agroindustrial.",
    economicProfile: "Com base no agronegócio, pecuária e indústria, Goiás tem empresas que dependem de energia competitiva para exportação.",
    energyTip: "Dica: Fazendas com pivô central economizam em média R$ 50.000/mês com o Mercado Livre!"
  },

  MA: {
    hook: "O Maranhão, portal da Amazônia, agora é referência em economia de energia no Norte-Nordeste. Economize até 45%.",
    introduction: `O Maranhão, com sua posição estratégica entre o Norte e o Nordeste, está liderando a transição energética da região. De São Luís ao sul do estado, empresas e indústrias descobrem os benefícios do Mercado Livre de Energia.

A Solarien Energy chegou ao Maranhão com soluções adaptadas às necessidades locais. Com porto estratégico e agronegócio em expansão, a economia de energia é fundamental para a competitividade.`,
    howItWorks: {
      title: "Como Funciona o Processo no Maranhão",
      description: "Processo simplificado para maranhenses.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução para você" },
        { title: "Migração", description: "Cuidamos de tudo com a Equatorial" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Maranhão",
      description: "Vantagens para maranhenses",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Indústria", description: "Competitividade industrial" },
        { title: "Agronegócio", description: "Economia para produtores" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Maranhão",
      description: "Opções flexíveis",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Maranhão",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Maranhão e em Todo Brasil",
      description: "Cobertura em todo o MA",
      highlights: [
        "Escritório em São Luís",
        "Atendimento ao sul do estado",
        "Suporte a indústrias",
        "Cobertura completa"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Maranhão",
      description: "Com indústria e agronegócio em crescimento, a economia é estratégica.",
      stats: [
        { value: "R$ 0,71", label: "Tarifa média/kWh" },
        { value: "43%", label: "Economia média" },
        { value: "R$ 600+", label: "Economia mensal média" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Maranhão",
      description: "O MA é atendido pela Equatorial Maranhão. A Solarien oferece energia renovável a preços competitivos."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Maranhão",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato social" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Maranhão",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Regional", description: "Conhecimento do mercado local" },
        { title: "Atendimento Local", description: "Equipe maranhense" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Maranhão",
      description: "Razões para migrar",
      reasons: [
        "Economia significativa",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Competitividade",
        "Resultados comprovados"
      ]
    },
    testimonials: [
      {
        name: "José Ribamar Santos",
        role: "Empresário industrial",
        city: "São Luís",
        content: "Nossa indústria de alumínio economiza R$ 200.000 por mês. A Solarien entendeu nossas necessidades e entregou resultados!",
        savings: "40%"
      },
      {
        name: "Maria das Graças Oliveira",
        role: "Produtora de soja",
        city: "Balsas",
        content: "A irrigação e os silos consumiam muito. Com a migração, economizamos 38% todo mês. Excelente!",
        savings: "38%"
      },
      {
        name: "Carlos Alberto Lima",
        role: "Gerente de shopping",
        city: "Imperatriz",
        content: "O shopping reduziu R$ 45.000 mensais na conta de luz. A Solarien foi profissional do início ao fim.",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O Maranhão tem boas condições para o Mercado Livre?",
        answer: "Sim! Com indústria forte e agronegócio em expansão, o MA é excelente para economia de energia."
      },
      {
        question: "A Solarien atende o sul do estado?",
        answer: "Sim! Atendemos de São Luís a Balsas, de Imperatriz a Caxias."
      },
      {
        question: "Indústrias de alumínio podem migrar?",
        answer: "Com certeza! São excelentes candidatas pelo alto consumo energético."
      },
      {
        question: "Como funciona para o agronegócio?",
        answer: "Propriedades com irrigação e silos economizam muito no Mercado Livre."
      },
      {
        question: "Qual a economia média no MA?",
        answer: "Entre 35% e 45%, dependendo do perfil de consumo."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em São Luís, Imperatriz, Caxias, Timon, Codó, Açailândia, Balsas e demais municípios maranhenses.",
    regionalContext: "O Maranhão possui posição estratégica entre Norte e Nordeste, com porto importante e agronegócio em expansão.",
    economicProfile: "Com alumínio, soja e logística, o MA tem indústrias que dependem de energia competitiva.",
    energyTip: "Dica: Indústrias de alumínio economizam em média R$ 150.000/mês com o Mercado Livre!"
  },

  MT: {
    hook: "Mato Grosso, gigante do agronegócio brasileiro, lidera em economia de energia. Economize até 45% na conta de luz.",
    introduction: `Mato Grosso, maior produtor de grãos do Brasil, está na vanguarda da economia de energia. Com milhares de propriedades rurais e agroindústrias, o Mercado Livre de Energia é essencial para a competitividade.

A Solarien Energy atua em todo o estado, de Cuiabá ao norte agrícola, oferecendo soluções para irrigação, silos, frigoríficos e processamento agroindustrial. A economia pode chegar a centenas de milhares de reais por mês.`,
    howItWorks: {
      title: "Como Funciona o Processo no Mato Grosso",
      description: "Processo especializado para o agronegócio.",
      steps: [
        { title: "Contato", description: "Fale com especialistas em agro via WhatsApp" },
        { title: "Análise Técnica", description: "Avaliamos irrigação, silos e processamento" },
        { title: "Proposta", description: "Solução otimizada para seu perfil" },
        { title: "Migração", description: "Cuidamos de tudo com a Energisa MT" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Mato Grosso",
      description: "Vantagens para o agronegócio mato-grossense",
      items: [
        { title: "Mega Economia", description: "Reduza até 45% dos custos com energia", highlight: "45%" },
        { title: "Irrigação Barata", description: "Pivôs centrais com custo reduzido" },
        { title: "Silos Eficientes", description: "Armazenagem mais econômica" },
        { title: "Frigoríficos", description: "Refrigeração industrial competitiva" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Mato Grosso",
      description: "Soluções para o agronegócio",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Ideal para grandes fazendas",
          "Economia de até 45%",
          "Contratos safra",
          "Energia renovável",
          "Volumes grandes"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Para pequenas propriedades",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Mato Grosso",
      description: "Migração gratuita para produtores",
      items: [
        "Sem taxa de adesão",
        "Consultoria técnica gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte agro incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Mato Grosso e em Todo Brasil",
      description: "Cobertura em todo o MT",
      highlights: [
        "Escritório em Cuiabá",
        "Equipe no norte agrícola",
        "Suporte a frigoríficos",
        "Cobertura total do estado"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Mato Grosso",
      description: "Maior produtor de grãos do Brasil, com consumo intensivo de energia.",
      stats: [
        { value: "R$ 0,64", label: "Tarifa média/kWh" },
        { value: "45%", label: "Economia potencial" },
        { value: "R$ 100.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Mato Grosso",
      description: "O MT é atendido pela Energisa MT. A Solarien oferece energia renovável a preços imbatíveis para o agronegócio."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Mato Grosso",
      description: "Documentação para produtores rurais",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas de todas as unidades" },
        { icon: "building", title: "Documentos", description: "CNPJ, CAR, ITR" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Propriedade", description: "Matrícula e comprovantes" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Mato Grosso",
      description: "Especialistas em agronegócio",
      items: [
        { title: "Expertise Agro", description: "Conhecimento profundo do setor" },
        { title: "Contratos Safra", description: "Flexibilidade para sazonalidade" },
        { title: "Múltiplas Unidades", description: "Gestão de várias propriedades" },
        { title: "Resultados", description: "Milhares economizando" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Mato Grosso",
      description: "Razões para o agronegócio migrar",
      reasons: [
        "Irrigação consome fortunas",
        "Silos precisam de energia 24h",
        "Processo gratuito",
        "Suporte especializado",
        "Economia comprovada",
        "Competitividade exportadora"
      ]
    },
    testimonials: [
      {
        name: "João Carlos Maggi",
        role: "Produtor de soja",
        city: "Sorriso",
        content: "Com 50.000 hectares, nossa conta de energia era astronômica. A Solarien nos ajudou a economizar R$ 350.000 por mês. Resultado incrível!",
        savings: "43%"
      },
      {
        name: "Maria Helena Borges",
        role: "Dona de frigorífico",
        city: "Rondonópolis",
        content: "A refrigeração industrial é nossa maior despesa. A migração reduziu R$ 180.000 mensais. Excelente parceria!",
        savings: "40%"
      },
      {
        name: "Pedro Augusto Lima",
        role: "Gerente de cooperativa",
        city: "Sinop",
        content: "A cooperativa migrou 15 unidades de uma vez. Economia total de R$ 200.000/mês. A Solarien é muito profissional.",
        savings: "38%"
      }
    ],
    faqs: [
      {
        question: "O agronegócio mato-grossense economiza muito?",
        answer: "Muito! Grandes produtores economizam centenas de milhares de reais por mês com irrigação, silos e processamento."
      },
      {
        question: "É possível migrar várias fazendas de uma vez?",
        answer: "Sim! A Solarien tem experiência em gestão de múltiplas unidades, otimizando a economia de todo o grupo."
      },
      {
        question: "Frigoríficos são bons candidatos?",
        answer: "Excelentes! Refrigeração industrial consome muito e a economia é expressiva."
      },
      {
        question: "Como funcionam contratos safra?",
        answer: "Oferecemos contratos flexíveis que se adaptam à sazonalidade da produção agrícola."
      },
      {
        question: "A Solarien atende todo o MT?",
        answer: "Sim! De Cuiabá a Sinop, de Rondonópolis a Alta Floresta."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Cuiabá, Sinop, Rondonópolis, Sorriso, Várzea Grande, Lucas do Rio Verde e demais municípios mato-grossenses.",
    regionalContext: "Mato Grosso é o maior produtor de soja, milho e algodão do Brasil, com demanda energética intensa para irrigação e processamento.",
    economicProfile: "Com agronegócio, pecuária e frigoríficos, o MT depende de energia competitiva para manter liderança exportadora.",
    energyTip: "Dica: Fazendas com pivô central economizam em média R$ 80.000/mês com o Mercado Livre!"
  },

  MS: {
    hook: "Mato Grosso do Sul, fronteira agrícola do Brasil, lidera em economia de energia. Economize até 45%.",
    introduction: `Mato Grosso do Sul, com sua posição estratégica e agronegócio pujante, está na vanguarda da economia de energia. De Campo Grande ao Pantanal, empresas e produtores estão economizando milhões.

A Solarien Energy atua em todo o estado, oferecendo soluções para o agronegócio, frigoríficos e indústria. A economia de energia é fundamental para a competitividade sul-mato-grossense.`,
    howItWorks: {
      title: "Como Funciona o Processo no Mato Grosso do Sul",
      description: "Processo eficiente para sul-mato-grossenses.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Energisa" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Mato Grosso do Sul",
      description: "Vantagens para consumidores de MS",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Agronegócio", description: "Irrigação e silos mais baratos" },
        { title: "Frigoríficos", description: "Refrigeração econômica" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Mato Grosso do Sul",
      description: "Opções para cada perfil",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Grandes volumes"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Mato Grosso do Sul",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Mato Grosso do Sul e em Todo Brasil",
      description: "Cobertura em todo o MS",
      highlights: [
        "Escritório em Campo Grande",
        "Atendimento ao agronegócio",
        "Suporte a frigoríficos",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Mato Grosso do Sul",
      description: "Com agronegócio forte, a economia é estratégica.",
      stats: [
        { value: "R$ 0,65", label: "Tarifa média/kWh" },
        { value: "44%", label: "Economia média" },
        { value: "R$ 50.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Mato Grosso do Sul",
      description: "O MS é atendido pela Energisa. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Mato Grosso do Sul",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Mato Grosso do Sul",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Agro", description: "Conhecimento do setor" },
        { title: "Atendimento Local", description: "Equipe no MS" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Mato Grosso do Sul",
      description: "Razões para migrar",
      reasons: [
        "Agronegócio consome muito",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "Antônio Carlos Fonseca",
        role: "Produtor rural",
        city: "Dourados",
        content: "Nossa fazenda economiza R$ 65.000/mês desde a migração. A Solarien entendeu nossas necessidades!",
        savings: "42%"
      },
      {
        name: "Luciana Borges",
        role: "Gerente de frigorífico",
        city: "Campo Grande",
        content: "Refrigeração é cara. Com a Solarien, economizamos 40% na conta de luz. Excelente!",
        savings: "40%"
      },
      {
        name: "Roberto Machado",
        role: "Dono de usina de açúcar",
        city: "Naviraí",
        content: "A usina reduziu R$ 180.000 mensais em energia. Investimento zero, retorno imenso.",
        savings: "38%"
      }
    ],
    faqs: [
      {
        question: "O MS é bom para o Mercado Livre?",
        answer: "Excelente! Com agronegócio forte, a economia é muito significativa."
      },
      {
        question: "Frigoríficos podem migrar?",
        answer: "Sim! São excelentes candidatos pelo alto consumo."
      },
      {
        question: "A Solarien atende todo o MS?",
        answer: "Sim! De Campo Grande a Dourados, de Três Lagoas a Ponta Porã."
      },
      {
        question: "Usinas de açúcar se beneficiam?",
        answer: "Muito! O consumo energético de usinas é alto e a economia expressiva."
      },
      {
        question: "Qual a economia média?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Campo Grande, Dourados, Três Lagoas, Corumbá, Ponta Porã e demais municípios sul-mato-grossenses.",
    regionalContext: "Mato Grosso do Sul é grande produtor de grãos, carne e açúcar, com demanda energética intensa.",
    economicProfile: "Com agronegócio, frigoríficos e usinas, o MS depende de energia competitiva.",
    energyTip: "Dica: Frigoríficos economizam em média R$ 100.000/mês com o Mercado Livre!"
  },

  MG: {
    hook: "Minas Gerais, coração industrial do Brasil, lidera em economia de energia. Economize até 45%.",
    introduction: `Minas Gerais, com sua economia diversificada e forte tradição industrial, está na vanguarda do Mercado Livre de Energia. De Belo Horizonte ao interior, milhares de empresas já economizam milhões.

A Solarien Energy atua em todo o estado, oferecendo soluções para mineração, siderurgia, agronegócio e comércio. Com uma das maiores demandas energéticas do país, a economia é expressiva.`,
    howItWorks: {
      title: "Como Funciona o Processo em Minas Gerais",
      description: "Processo profissional para mineiros.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução para você" },
        { title: "Migração", description: "Cuidamos de tudo com a Cemig" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado de Minas Gerais",
      description: "Vantagens para mineiros",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Indústria", description: "Competitividade industrial" },
        { title: "Mineração", description: "Custos reduzidos" },
        { title: "Comércio", description: "Margens maiores" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura em Minas Gerais",
      description: "Opções para cada perfil",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade em Minas Gerais",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento em Minas Gerais e em Todo Brasil",
      description: "Cobertura em todo MG",
      highlights: [
        "Escritório em Belo Horizonte",
        "Atendimento ao Triângulo Mineiro",
        "Suporte ao Sul de Minas",
        "Cobertura completa"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia em Minas Gerais",
      description: "Com forte presença industrial, a economia é estratégica.",
      stats: [
        { value: "R$ 0,69", label: "Tarifa média/kWh" },
        { value: "43%", label: "Economia média" },
        { value: "R$ 80.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia em Minas Gerais",
      description: "MG é atendido pela Cemig. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade em Minas Gerais",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas da Cemig" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato social" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy em Minas Gerais",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Industrial", description: "Conhecimento do setor" },
        { title: "Atendimento Local", description: "Equipe mineira" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Milhares economizando" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia em Minas Gerais",
      description: "Razões para migrar",
      reasons: [
        "Forte presença industrial",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "José Carlos Pereira",
        role: "Diretor de mineradora",
        city: "Belo Horizonte",
        content: "Nossa mineradora economiza R$ 500.000 por mês. A Solarien entendeu a complexidade do nosso negócio!",
        savings: "42%"
      },
      {
        name: "Ana Paula Santos",
        role: "Gerente de siderúrgica",
        city: "Ipatinga",
        content: "A siderurgia consome muito. Com a migração, economizamos R$ 350.000 mensais. Excelente!",
        savings: "40%"
      },
      {
        name: "Roberto Almeida",
        role: "Dono de rede de supermercados",
        city: "Uberlândia",
        content: "Com 20 lojas em MG, economizamos R$ 85.000/mês. A Solarien é muito profissional.",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "Minas Gerais é bom para o Mercado Livre?",
        answer: "Excelente! Com forte indústria, a economia é muito expressiva."
      },
      {
        question: "Mineradoras podem migrar?",
        answer: "Sim! São excelentes candidatas pelo altíssimo consumo."
      },
      {
        question: "A Solarien atende todo o estado?",
        answer: "Sim! De BH ao Triângulo, do Sul ao Norte de Minas."
      },
      {
        question: "Siderúrgicas se beneficiam?",
        answer: "Muito! O consumo é alto e a economia impressionante."
      },
      {
        question: "Qual a economia média em MG?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Belo Horizonte, Uberlândia, Contagem, Juiz de Fora, Betim, Montes Claros e demais municípios mineiros.",
    regionalContext: "Minas Gerais possui economia diversificada com mineração, siderurgia, agronegócio e indústria automotiva.",
    economicProfile: "Com mineração, siderurgia e indústria, MG depende de energia competitiva.",
    energyTip: "Dica: Siderúrgicas mineiras economizam em média R$ 300.000/mês!"
  },

  PA: {
    hook: "O Pará, portal da Amazônia, agora lidera em economia de energia. Economize até 45%.",
    introduction: `O Pará, com sua riqueza mineral e posição estratégica, está liderando a transição energética do Norte. De Belém ao interior, empresas e indústrias descobrem os benefícios do Mercado Livre de Energia.

A Solarien Energy atua em todo o estado, oferecendo soluções para mineração, agronegócio e indústria. Com uma das maiores demandas energéticas da região Norte, a economia é expressiva.`,
    howItWorks: {
      title: "Como Funciona o Processo no Pará",
      description: "Processo adaptado à realidade amazônica.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Equatorial" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Pará",
      description: "Vantagens para paraenses",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Mineração", description: "Custos reduzidos" },
        { title: "Indústria", description: "Competitividade" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Pará",
      description: "Opções flexíveis",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Grandes volumes"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Pará",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Pará e em Todo Brasil",
      description: "Cobertura em todo o PA",
      highlights: [
        "Escritório em Belém",
        "Atendimento a mineradoras",
        "Suporte ao agronegócio",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Pará",
      description: "Com mineração intensa, a economia é estratégica.",
      stats: [
        { value: "R$ 0,72", label: "Tarifa média/kWh" },
        { value: "44%", label: "Economia média" },
        { value: "R$ 200.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Pará",
      description: "O PA é atendido pela Equatorial. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Pará",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Pará",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Mineração", description: "Conhecimento do setor" },
        { title: "Atendimento Local", description: "Equipe no PA" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Pará",
      description: "Razões para migrar",
      reasons: [
        "Mineração consome muito",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "Ricardo Nascimento",
        role: "Diretor de mineradora",
        city: "Parauapebas",
        content: "Nossa operação economiza R$ 800.000 por mês. A Solarien entendeu nossas necessidades!",
        savings: "42%"
      },
      {
        name: "Fernanda Costa",
        role: "Gerente de indústria",
        city: "Belém",
        content: "A indústria reduziu R$ 150.000 mensais em energia. Excelente atendimento!",
        savings: "40%"
      },
      {
        name: "João Pedro Oliveira",
        role: "Produtor rural",
        city: "Paragominas",
        content: "A fazenda economiza R$ 45.000/mês. A Solarien é muito profissional.",
        savings: "38%"
      }
    ],
    faqs: [
      {
        question: "O Pará é bom para o Mercado Livre?",
        answer: "Excelente! Com mineração forte, a economia é muito expressiva."
      },
      {
        question: "Mineradoras podem migrar facilmente?",
        answer: "Sim! A Solarien tem experiência com grandes operações mineradoras."
      },
      {
        question: "A Solarien atende o interior do PA?",
        answer: "Sim! De Belém a Parauapebas, de Santarém a Marabá."
      },
      {
        question: "Indústrias de alumínio se beneficiam?",
        answer: "Muito! O consumo é alto e a economia impressionante."
      },
      {
        question: "Qual a economia média no PA?",
        answer: "Entre 38% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Belém, Ananindeua, Santarém, Marabá, Parauapebas e demais municípios paraenses.",
    regionalContext: "O Pará é um dos maiores produtores minerais do Brasil, com demanda energética intensa.",
    economicProfile: "Com mineração, alumínio e agronegócio, o PA depende de energia competitiva.",
    energyTip: "Dica: Mineradoras paraenses economizam em média R$ 500.000/mês!"
  },

  PB: {
    hook: "A Paraíba, terra do sol e da caatinga, agora lidera em economia de energia. Economize até 45%.",
    introduction: `A Paraíba, com seu potencial de energia renovável e economia em crescimento, está abraçando o Mercado Livre de Energia. De João Pessoa a Campina Grande, empresas e residências economizam milhares de reais.

A Solarien Energy atua em todo o estado, oferecendo soluções para indústria, comércio e turismo. Com alta irradiação solar, a energia renovável é abundante e barata.`,
    howItWorks: {
      title: "Como Funciona o Processo na Paraíba",
      description: "Processo simplificado para paraibanos.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Energisa" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado da Paraíba",
      description: "Vantagens para paraibanos",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Indústria", description: "Competitividade" },
        { title: "Turismo", description: "Custos reduzidos" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura na Paraíba",
      description: "Opções flexíveis",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade na Paraíba",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento na Paraíba e em Todo Brasil",
      description: "Cobertura em toda a PB",
      highlights: [
        "Escritório em João Pessoa",
        "Atendimento a Campina Grande",
        "Suporte ao turismo",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia na Paraíba",
      description: "Com alta irradiação solar, a energia renovável é abundante.",
      stats: [
        { value: "R$ 0,68", label: "Tarifa média/kWh" },
        { value: "42%", label: "Economia média" },
        { value: "R$ 500+", label: "Economia mensal média" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia na Paraíba",
      description: "A PB é atendida pela Energisa. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade na Paraíba",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy na Paraíba",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Conhecimento Local", description: "Equipe paraibana" },
        { title: "Foco em Renováveis", description: "Energia solar e eólica" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia na Paraíba",
      description: "Razões para migrar",
      reasons: [
        "Alta irradiação solar",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "Marcos Antônio Silva",
        role: "Dono de hotel",
        city: "João Pessoa",
        content: "Nosso hotel economiza R$ 8.000/mês. A Solarien cuidou de tudo!",
        savings: "40%"
      },
      {
        name: "Fernanda Souza",
        role: "Gerente de indústria",
        city: "Campina Grande",
        content: "A indústria reduziu R$ 25.000 mensais em energia. Excelente!",
        savings: "38%"
      },
      {
        name: "José Carlos Lima",
        role: "Comerciante",
        city: "Patos",
        content: "Minha loja economiza R$ 1.500/mês. Muito satisfeito!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "A Paraíba é boa para energia renovável?",
        answer: "Excelente! Alta irradiação solar e ventos constantes."
      },
      {
        question: "Hotéis podem migrar?",
        answer: "Sim! São excelentes candidatos pelo consumo de climatização."
      },
      {
        question: "A Solarien atende o interior?",
        answer: "Sim! De João Pessoa a Patos, de Campina Grande a Sousa."
      },
      {
        question: "Indústrias calçadistas se beneficiam?",
        answer: "Muito! O consumo industrial justifica a economia."
      },
      {
        question: "Qual a economia média na PB?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em João Pessoa, Campina Grande, Santa Rita, Patos, Bayeux e demais municípios paraibanos.",
    regionalContext: "A Paraíba possui excelente potencial de energia renovável com alta irradiação solar e ventos constantes.",
    economicProfile: "Com indústria, turismo e comércio, a PB tem economia que se beneficia da energia renovável.",
    energyTip: "Dica: Hotéis no litoral paraibano economizam em média R$ 6.000/mês!"
  },

  PR: {
    hook: "O Paraná, potência agroindustrial do Sul, lidera em economia de energia. Economize até 45%.",
    introduction: `O Paraná, com sua economia diversificada e forte presença agroindustrial, está na vanguarda do Mercado Livre de Energia. De Curitiba ao interior agrícola, milhares de empresas já economizam milhões.

A Solarien Energy atua em todo o estado, oferecendo soluções para cooperativas, indústrias e comércio. Com tradição de eficiência, o Paraná é ideal para economia de energia.`,
    howItWorks: {
      title: "Como Funciona o Processo no Paraná",
      description: "Processo eficiente para paranaenses.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Copel" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Paraná",
      description: "Vantagens para paranaenses",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Cooperativas", description: "Custos reduzidos" },
        { title: "Indústria", description: "Competitividade" },
        { title: "Agronegócio", description: "Eficiência energética" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Paraná",
      description: "Opções para cada perfil",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Paraná",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Paraná e em Todo Brasil",
      description: "Cobertura em todo o PR",
      highlights: [
        "Escritório em Curitiba",
        "Atendimento a cooperativas",
        "Suporte ao agronegócio",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Paraná",
      description: "Com cooperativismo forte, a economia coletiva é ainda maior.",
      stats: [
        { value: "R$ 0,61", label: "Tarifa média/kWh" },
        { value: "42%", label: "Economia média" },
        { value: "R$ 50.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Paraná",
      description: "O PR é atendido pela Copel. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Paraná",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas da Copel" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Paraná",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Cooperativas", description: "Conhecimento do modelo" },
        { title: "Atendimento Local", description: "Equipe paranaense" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Milhares economizando" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Paraná",
      description: "Razões para migrar",
      reasons: [
        "Cooperativas ganham em escala",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "João Carlos Martins",
        role: "Presidente de cooperativa",
        city: "Cascavel",
        content: "Nossa cooperativa economiza R$ 180.000/mês. Todos os cooperados beneficiados!",
        savings: "42%"
      },
      {
        name: "Maria Helena Silva",
        role: "Gerente de indústria",
        city: "Londrina",
        content: "A indústria reduziu R$ 65.000 mensais em energia. Excelente!",
        savings: "40%"
      },
      {
        name: "Roberto Alves",
        role: "Dono de rede de lojas",
        city: "Curitiba",
        content: "Com 15 lojas no PR, economizamos R$ 35.000/mês. Muito profissional!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "Cooperativas podem migrar em grupo?",
        answer: "Sim! E ganham economia de escala ainda maior."
      },
      {
        question: "A Copel dificulta a migração?",
        answer: "Não! O processo é regulamentado e a Solarien cuida de tudo."
      },
      {
        question: "A Solarien atende todo o PR?",
        answer: "Sim! De Curitiba a Foz do Iguaçu, de Londrina a Ponta Grossa."
      },
      {
        question: "Indústrias automotivas se beneficiam?",
        answer: "Muito! O consumo industrial justifica a economia."
      },
      {
        question: "Qual a economia média no PR?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Curitiba, Londrina, Maringá, Ponta Grossa, Cascavel, Foz do Iguaçu e demais municípios paranaenses.",
    regionalContext: "O Paraná possui economia diversificada com forte presença de cooperativas, indústria automotiva e agronegócio.",
    economicProfile: "Com cooperativas, indústria e agronegócio, o PR depende de energia competitiva.",
    energyTip: "Dica: Cooperativas paranaenses economizam em média R$ 150.000/mês!"
  },

  PE: {
    hook: "Pernambuco, coração do Nordeste, lidera em economia de energia. Economize até 45%.",
    introduction: `Pernambuco, com seu porto estratégico e economia diversificada, está na vanguarda do Mercado Livre de Energia no Nordeste. De Recife a Petrolina, empresas e indústrias economizam milhões.

A Solarien Energy atua em todo o estado, oferecendo soluções para indústria, comércio e fruticultura irrigada. Com geração eólica e solar em expansão, a energia renovável é abundante.`,
    howItWorks: {
      title: "Como Funciona o Processo em Pernambuco",
      description: "Processo eficiente para pernambucanos.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Neoenergia" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado de Pernambuco",
      description: "Vantagens para pernambucanos",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Indústria", description: "Competitividade industrial" },
        { title: "Fruticultura", description: "Irrigação mais barata" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura em Pernambuco",
      description: "Opções para cada perfil",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade em Pernambuco",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento em Pernambuco e em Todo Brasil",
      description: "Cobertura em todo o PE",
      highlights: [
        "Escritório em Recife",
        "Atendimento a Petrolina",
        "Suporte a Suape",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia em Pernambuco",
      description: "Com indústria e fruticultura, a economia é estratégica.",
      stats: [
        { value: "R$ 0,67", label: "Tarifa média/kWh" },
        { value: "43%", label: "Economia média" },
        { value: "R$ 60.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia em Pernambuco",
      description: "PE é atendido pela Neoenergia. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade em Pernambuco",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy em Pernambuco",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Regional", description: "Conhecimento do Nordeste" },
        { title: "Atendimento Local", description: "Equipe pernambucana" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Milhares economizando" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia em Pernambuco",
      description: "Razões para migrar",
      reasons: [
        "Porto de Suape demanda energia",
        "Fruticultura irrigada",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada"
      ]
    },
    testimonials: [
      {
        name: "Carlos Eduardo Santos",
        role: "Diretor de indústria",
        city: "Recife",
        content: "Nossa indústria economiza R$ 85.000/mês. A Solarien entendeu nossas necessidades!",
        savings: "42%"
      },
      {
        name: "Maria José Oliveira",
        role: "Produtora de frutas",
        city: "Petrolina",
        content: "A irrigação consumia muito. Com a Solarien, economizamos R$ 35.000/mês!",
        savings: "40%"
      },
      {
        name: "Roberto Almeida",
        role: "Gerente de shopping",
        city: "Caruaru",
        content: "O shopping reduziu R$ 28.000 mensais. Excelente atendimento!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "Pernambuco é bom para energia renovável?",
        answer: "Excelente! Com eólica e solar em expansão, a energia é abundante."
      },
      {
        question: "Empresas de Suape podem migrar?",
        answer: "Sim! São excelentes candidatas pelo alto consumo."
      },
      {
        question: "A Solarien atende Petrolina?",
        answer: "Sim! Atendemos todo o estado, incluindo o polo de fruticultura."
      },
      {
        question: "Fruticultura irrigada se beneficia?",
        answer: "Muito! A irrigação consome bastante e a economia é expressiva."
      },
      {
        question: "Qual a economia média em PE?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Recife, Jaboatão, Olinda, Caruaru, Petrolina, Paulista e demais municípios pernambucanos.",
    regionalContext: "Pernambuco possui porto estratégico, polo industrial e fruticultura irrigada de referência.",
    economicProfile: "Com indústria, porto e fruticultura, PE depende de energia competitiva.",
    energyTip: "Dica: Produtores de frutas em Petrolina economizam em média R$ 25.000/mês!"
  },

  PI: {
    hook: "O Piauí, terra do sol, agora lidera em economia de energia renovável. Economize até 45%.",
    introduction: `O Piauí, com um dos maiores potenciais de energia solar do Brasil, está na vanguarda da transição energética. De Teresina ao sertão, empresas e produtores descobrem os benefícios do Mercado Livre de Energia.

A Solarien Energy atua em todo o estado, oferecendo soluções para agronegócio, indústria e comércio. Com irradiação solar excepcional, a energia renovável é abundante e barata.`,
    howItWorks: {
      title: "Como Funciona o Processo no Piauí",
      description: "Processo simplificado para piauienses.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Equatorial" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Piauí",
      description: "Vantagens para piauienses",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Energia Solar", description: "Abundante no PI" },
        { title: "Agronegócio", description: "Irrigação mais barata" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Piauí",
      description: "Opções flexíveis",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Piauí",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Piauí e em Todo Brasil",
      description: "Cobertura em todo o PI",
      highlights: [
        "Escritório em Teresina",
        "Atendimento ao cerrado",
        "Suporte ao agronegócio",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Piauí",
      description: "Com irradiação solar excepcional, a energia é abundante.",
      stats: [
        { value: "R$ 0,70", label: "Tarifa média/kWh" },
        { value: "43%", label: "Economia média" },
        { value: "3.000+", label: "Horas de sol/ano" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Piauí",
      description: "O PI é atendido pela Equatorial. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Piauí",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Piauí",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Solar", description: "Conhecimento do potencial piauiense" },
        { title: "Atendimento Local", description: "Equipe no PI" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Piauí",
      description: "Razões para migrar",
      reasons: [
        "Maior potencial solar do Brasil",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "José Carlos Oliveira",
        role: "Produtor de soja",
        city: "Uruçuí",
        content: "A irrigação economiza R$ 45.000/mês. A Solarien entendeu o agronegócio!",
        savings: "42%"
      },
      {
        name: "Maria Helena Santos",
        role: "Gerente de indústria",
        city: "Teresina",
        content: "A indústria reduziu R$ 18.000 mensais. Excelente atendimento!",
        savings: "38%"
      },
      {
        name: "Roberto Lima",
        role: "Comerciante",
        city: "Parnaíba",
        content: "Minha loja economiza R$ 1.200/mês. Muito satisfeito!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O Piauí é bom para energia solar?",
        answer: "Excelente! É um dos estados com maior irradiação solar do Brasil."
      },
      {
        question: "O agronegócio do cerrado piauiense se beneficia?",
        answer: "Muito! A irrigação consome bastante e a economia é expressiva."
      },
      {
        question: "A Solarien atende Uruçuí e região?",
        answer: "Sim! Atendemos todo o estado, incluindo o cerrado piauiense."
      },
      {
        question: "Parques solares geram energia para o Mercado Livre?",
        answer: "Sim! O Piauí tem vários parques solares que fornecem energia ao mercado."
      },
      {
        question: "Qual a economia média no PI?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Teresina, Parnaíba, Picos, Piripiri, Floriano, Uruçuí e demais municípios piauienses.",
    regionalContext: "O Piauí possui um dos maiores potenciais de energia solar do mundo, com mais de 3.000 horas de sol por ano.",
    economicProfile: "Com agronegócio no cerrado, indústria e comércio, o PI tem economia em crescimento.",
    energyTip: "Dica: Fazendas no cerrado piauiense economizam em média R$ 35.000/mês!"
  },

  RJ: {
    hook: "O Rio de Janeiro, cidade maravilhosa, agora lidera em economia de energia. Economize até 45%.",
    introduction: `O Rio de Janeiro, com sua economia diversificada e forte presença industrial, está abraçando o Mercado Livre de Energia. Da capital ao interior, empresas e indústrias economizam milhões.

A Solarien Energy atua em todo o estado, oferecendo soluções para indústria, comércio, turismo e serviços. Com alto custo de energia, a economia é ainda mais expressiva.`,
    howItWorks: {
      title: "Como Funciona o Processo no Rio de Janeiro",
      description: "Processo profissional para cariocas e fluminenses.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Light ou Enel" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Rio de Janeiro",
      description: "Vantagens para fluminenses",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Turismo", description: "Custos reduzidos" },
        { title: "Indústria", description: "Competitividade" },
        { title: "Comércio", description: "Margens maiores" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Rio de Janeiro",
      description: "Opções para cada perfil",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Rio de Janeiro",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Rio de Janeiro e em Todo Brasil",
      description: "Cobertura em todo o RJ",
      highlights: [
        "Escritório no Rio de Janeiro",
        "Atendimento à região serrana",
        "Suporte ao turismo",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Rio de Janeiro",
      description: "Com tarifa elevada, a economia é ainda mais expressiva.",
      stats: [
        { value: "R$ 0,75", label: "Tarifa média/kWh" },
        { value: "43%", label: "Economia média" },
        { value: "R$ 70.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Rio de Janeiro",
      description: "O RJ é atendido pela Light e Enel. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Rio de Janeiro",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Rio de Janeiro",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Urbana", description: "Conhecimento do mercado carioca" },
        { title: "Atendimento Local", description: "Equipe no RJ" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Milhares economizando" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Rio de Janeiro",
      description: "Razões para migrar",
      reasons: [
        "Tarifa entre as mais altas",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "Carlos Eduardo Machado",
        role: "Dono de hotel",
        city: "Rio de Janeiro",
        content: "Nosso hotel economiza R$ 35.000/mês. Climatização é cara aqui!",
        savings: "42%"
      },
      {
        name: "Ana Paula Rodrigues",
        role: "Gerente de indústria",
        city: "Duque de Caxias",
        content: "A indústria reduziu R$ 120.000 mensais. Excelente!",
        savings: "40%"
      },
      {
        name: "Roberto Silva",
        role: "Comerciante",
        city: "Niterói",
        content: "Minha rede de lojas economiza R$ 18.000/mês. Muito satisfeito!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O Rio de Janeiro é bom para o Mercado Livre?",
        answer: "Excelente! Com tarifa elevada, a economia é ainda mais expressiva."
      },
      {
        question: "Hotéis podem migrar?",
        answer: "Sim! São excelentes candidatos pelo consumo de climatização."
      },
      {
        question: "A Solarien atende todo o estado?",
        answer: "Sim! Da capital a Campos, de Niterói a Petrópolis."
      },
      {
        question: "Indústrias petroquímicas se beneficiam?",
        answer: "Muito! O consumo industrial justifica a economia."
      },
      {
        question: "Qual a economia média no RJ?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento no Rio de Janeiro, Niterói, Duque de Caxias, Nova Iguaçu, São Gonçalo, Petrópolis e demais municípios fluminenses.",
    regionalContext: "O Rio de Janeiro possui economia diversificada com turismo, indústria, óleo e gás e serviços.",
    economicProfile: "Com turismo, indústria e serviços, o RJ depende de energia competitiva.",
    energyTip: "Dica: Hotéis no Rio economizam em média R$ 25.000/mês!"
  },

  RN: {
    hook: "O Rio Grande do Norte, terra do sol e do vento, lidera em economia de energia renovável. Economize até 45%.",
    introduction: `O Rio Grande do Norte, com maior potencial eólico do Brasil e alta irradiação solar, é o estado perfeito para energia renovável. De Natal ao sertão, empresas e produtores economizam milhares de reais.

A Solarien Energy atua em todo o estado, oferecendo soluções para turismo, indústria e agricultura irrigada. Com energia renovável abundante, os preços são altamente competitivos.`,
    howItWorks: {
      title: "Como Funciona o Processo no Rio Grande do Norte",
      description: "Processo simplificado para potiguares.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Neoenergia Cosern" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Rio Grande do Norte",
      description: "Vantagens para potiguares",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Energia Eólica", description: "Abundante no RN" },
        { title: "Turismo", description: "Custos reduzidos" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Rio Grande do Norte",
      description: "Opções flexíveis",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia eólica",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Rio Grande do Norte",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Rio Grande do Norte e em Todo Brasil",
      description: "Cobertura em todo o RN",
      highlights: [
        "Escritório em Natal",
        "Atendimento ao interior",
        "Suporte ao turismo",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Rio Grande do Norte",
      description: "Com maior potencial eólico do Brasil, a energia é abundante.",
      stats: [
        { value: "R$ 0,66", label: "Tarifa média/kWh" },
        { value: "44%", label: "Economia média" },
        { value: "#1", label: "Potencial eólico" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Rio Grande do Norte",
      description: "O RN é atendido pela Neoenergia Cosern. A Solarien oferece energia eólica e solar competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Rio Grande do Norte",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Rio Grande do Norte",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Renovável", description: "Conhecimento do potencial do RN" },
        { title: "Atendimento Local", description: "Equipe potiguar" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Rio Grande do Norte",
      description: "Razões para migrar",
      reasons: [
        "Maior potencial eólico do Brasil",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "Marcos Antônio Costa",
        role: "Dono de resort",
        city: "Natal",
        content: "Nosso resort economiza R$ 18.000/mês. Energia eólica do RN!",
        savings: "42%"
      },
      {
        name: "Fernanda Silva",
        role: "Produtora de frutas",
        city: "Mossoró",
        content: "A irrigação economiza R$ 12.000/mês. Excelente!",
        savings: "40%"
      },
      {
        name: "José Carlos Lima",
        role: "Comerciante",
        city: "Parnamirim",
        content: "Minha loja economiza R$ 1.800/mês. Muito satisfeito!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O RN é líder em energia eólica?",
        answer: "Sim! O Rio Grande do Norte possui o maior potencial eólico do Brasil."
      },
      {
        question: "Resorts podem migrar?",
        answer: "Sim! São excelentes candidatos pelo consumo de climatização."
      },
      {
        question: "A Solarien atende Mossoró?",
        answer: "Sim! Atendemos todo o estado, incluindo o polo fruticultor."
      },
      {
        question: "Fruticultura irrigada se beneficia?",
        answer: "Muito! A irrigação consome bastante e a economia é expressiva."
      },
      {
        question: "Qual a economia média no RN?",
        answer: "Entre 38% e 45%, graças à energia renovável abundante."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Natal, Mossoró, Parnamirim, São Gonçalo do Amarante, Ceará-Mirim e demais municípios potiguares.",
    regionalContext: "O Rio Grande do Norte possui o maior potencial eólico do Brasil e excelente irradiação solar.",
    economicProfile: "Com turismo, fruticultura e energia renovável, o RN tem economia em crescimento.",
    energyTip: "Dica: Resorts no litoral potiguar economizam em média R$ 15.000/mês!"
  },

  RS: {
    hook: "O Rio Grande do Sul, terra da inovação, lidera em economia de energia no Sul. Economize até 45%.",
    introduction: `O Rio Grande do Sul, com sua tradição industrial e agrícola, está na vanguarda do Mercado Livre de Energia. De Porto Alegre à fronteira, empresas e cooperativas economizam milhões.

A Solarien Energy atua em todo o estado, oferecendo soluções para indústria, cooperativas e comércio. Com forte tradição de eficiência, o RS é ideal para economia de energia.`,
    howItWorks: {
      title: "Como Funciona o Processo no Rio Grande do Sul",
      description: "Processo eficiente para gaúchos.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a CEEE ou RGE" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Rio Grande do Sul",
      description: "Vantagens para gaúchos",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Indústria", description: "Competitividade" },
        { title: "Cooperativas", description: "Economia coletiva" },
        { title: "Climatização", description: "Redução de custos no inverno" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Rio Grande do Sul",
      description: "Opções para cada perfil",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Rio Grande do Sul",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Rio Grande do Sul e em Todo Brasil",
      description: "Cobertura em todo o RS",
      highlights: [
        "Escritório em Porto Alegre",
        "Atendimento à serra gaúcha",
        "Suporte a cooperativas",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Rio Grande do Sul",
      description: "Com inverno rigoroso, a economia em climatização é essencial.",
      stats: [
        { value: "R$ 0,64", label: "Tarifa média/kWh" },
        { value: "42%", label: "Economia média" },
        { value: "40%", label: "Economia no inverno" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Rio Grande do Sul",
      description: "O RS é atendido pela CEEE e RGE. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Rio Grande do Sul",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Rio Grande do Sul",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Industrial", description: "Conhecimento do mercado gaúcho" },
        { title: "Atendimento Local", description: "Equipe gaúcha" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Milhares economizando" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Rio Grande do Sul",
      description: "Razões para migrar",
      reasons: [
        "Inverno rigoroso demanda aquecimento",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "João Carlos Ferreira",
        role: "Presidente de cooperativa",
        city: "Passo Fundo",
        content: "Nossa cooperativa economiza R$ 95.000/mês. Todos os cooperados satisfeitos!",
        savings: "42%"
      },
      {
        name: "Maria Helena Santos",
        role: "Gerente de indústria",
        city: "Caxias do Sul",
        content: "A indústria reduziu R$ 55.000 mensais. Excelente!",
        savings: "40%"
      },
      {
        name: "Roberto Alves",
        role: "Dono de rede de lojas",
        city: "Porto Alegre",
        content: "Com 20 lojas no RS, economizamos R$ 40.000/mês. Muito profissional!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "O inverno gaúcho aumenta o consumo de energia?",
        answer: "Sim! E por isso a economia no Mercado Livre é ainda mais importante."
      },
      {
        question: "Cooperativas podem migrar em grupo?",
        answer: "Sim! E ganham economia de escala ainda maior."
      },
      {
        question: "A Solarien atende todo o RS?",
        answer: "Sim! De Porto Alegre a Uruguaiana, de Caxias a Pelotas."
      },
      {
        question: "Indústrias calçadistas se beneficiam?",
        answer: "Muito! O consumo industrial justifica a economia."
      },
      {
        question: "Qual a economia média no RS?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Porto Alegre, Caxias do Sul, Pelotas, Canoas, Santa Maria, Novo Hamburgo e demais municípios gaúchos.",
    regionalContext: "O Rio Grande do Sul possui clima subtropical com inverno rigoroso, demandando alto consumo para aquecimento.",
    economicProfile: "Com indústria, cooperativas e agronegócio, o RS depende de energia competitiva.",
    energyTip: "Dica: Reduza até 40% na conta de inverno com o Mercado Livre!"
  },

  RO: {
    hook: "Rondônia, fronteira agrícola da Amazônia, lidera em economia de energia. Economize até 45%.",
    introduction: `Rondônia, com sua economia agrícola em expansão, está abraçando o Mercado Livre de Energia. De Porto Velho ao sul do estado, empresas e produtores economizam milhares de reais.

A Solarien Energy atua em todo o estado, oferecendo soluções para agronegócio, frigoríficos e comércio. Com demanda energética crescente, a economia é fundamental.`,
    howItWorks: {
      title: "Como Funciona o Processo em Rondônia",
      description: "Processo simplificado para rondonienses.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Energisa" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado de Rondônia",
      description: "Vantagens para rondonienses",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Agronegócio", description: "Custos reduzidos" },
        { title: "Frigoríficos", description: "Refrigeração econômica" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura em Rondônia",
      description: "Opções flexíveis",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade em Rondônia",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento em Rondônia e em Todo Brasil",
      description: "Cobertura em todo RO",
      highlights: [
        "Escritório em Porto Velho",
        "Atendimento ao agronegócio",
        "Suporte a frigoríficos",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia em Rondônia",
      description: "Com agronegócio em expansão, a economia é estratégica.",
      stats: [
        { value: "R$ 0,68", label: "Tarifa média/kWh" },
        { value: "42%", label: "Economia média" },
        { value: "R$ 40.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia em Rondônia",
      description: "RO é atendido pela Energisa. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade em Rondônia",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy em Rondônia",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Agro", description: "Conhecimento do setor" },
        { title: "Atendimento Local", description: "Equipe em RO" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia em Rondônia",
      description: "Razões para migrar",
      reasons: [
        "Agronegócio em expansão",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "José Carlos Oliveira",
        role: "Produtor rural",
        city: "Ji-Paraná",
        content: "Nossa fazenda economiza R$ 25.000/mês. A Solarien entendeu o agro!",
        savings: "42%"
      },
      {
        name: "Maria Helena Santos",
        role: "Gerente de frigorífico",
        city: "Porto Velho",
        content: "A refrigeração reduziu R$ 45.000 mensais. Excelente!",
        savings: "40%"
      },
      {
        name: "Roberto Lima",
        role: "Comerciante",
        city: "Vilhena",
        content: "Minha loja economiza R$ 2.000/mês. Muito satisfeito!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "Rondônia é boa para o Mercado Livre?",
        answer: "Sim! Com agronegócio forte, a economia é significativa."
      },
      {
        question: "Frigoríficos podem migrar?",
        answer: "Sim! São excelentes candidatos pelo alto consumo."
      },
      {
        question: "A Solarien atende Ji-Paraná?",
        answer: "Sim! Atendemos todo o estado de Rondônia."
      },
      {
        question: "Fazendas de gado se beneficiam?",
        answer: "Muito! Especialmente com sistemas de ordenha e refrigeração."
      },
      {
        question: "Qual a economia média em RO?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Porto Velho, Ji-Paraná, Ariquemes, Vilhena, Cacoal e demais municípios rondonienses.",
    regionalContext: "Rondônia é fronteira agrícola com pecuária e agronegócio em expansão.",
    economicProfile: "Com pecuária, frigoríficos e soja, RO depende de energia competitiva.",
    energyTip: "Dica: Frigoríficos rondonienses economizam em média R$ 35.000/mês!"
  },

  RR: {
    hook: "Roraima, a porta do Brasil para o Caribe, agora economiza energia. Economize até 45%.",
    introduction: `Roraima, com sua posição estratégica e economia em desenvolvimento, está descobrindo os benefícios do Mercado Livre de Energia. De Boa Vista ao interior, empresas economizam milhares de reais.

A Solarien Energy chegou a Roraima para ajudar consumidores a reduzirem seus custos com energia. Com tarifa elevada, a economia é ainda mais expressiva.`,
    howItWorks: {
      title: "Como Funciona o Processo em Roraima",
      description: "Processo simplificado para roraimenses.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Roraima Energia" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado de Roraima",
      description: "Vantagens para roraimenses",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Comércio", description: "Custos reduzidos" },
        { title: "Climatização", description: "Ar-condicionado mais barato" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura em Roraima",
      description: "Opções flexíveis",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade em Roraima",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento em Roraima e em Todo Brasil",
      description: "Cobertura em todo RR",
      highlights: [
        "Escritório em Boa Vista",
        "Atendimento ao interior",
        "Suporte comercial",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia em Roraima",
      description: "Com tarifa elevada, a economia é ainda mais expressiva.",
      stats: [
        { value: "R$ 0,85", label: "Tarifa média/kWh" },
        { value: "43%", label: "Economia média" },
        { value: "R$ 500+", label: "Economia mensal média" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia em Roraima",
      description: "RR é atendido pela Roraima Energia. A Solarien oferece alternativas competitivas."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade em Roraima",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy em Roraima",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Norte", description: "Conhecimento da região" },
        { title: "Atendimento Local", description: "Equipe em RR" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia em Roraima",
      description: "Razões para migrar",
      reasons: [
        "Tarifa elevada no estado",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "José Carlos Silva",
        role: "Comerciante",
        city: "Boa Vista",
        content: "Meu comércio economiza R$ 3.500/mês. A Solarien foi excelente!",
        savings: "40%"
      },
      {
        name: "Maria Helena Costa",
        role: "Gerente de hotel",
        city: "Boa Vista",
        content: "O hotel reduziu R$ 8.000 mensais em energia. Excelente!",
        savings: "38%"
      },
      {
        name: "Roberto Lima",
        role: "Empresário",
        city: "Boa Vista",
        content: "Minha empresa economiza R$ 5.000/mês. Muito satisfeito!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "Roraima tem boas condições para o Mercado Livre?",
        answer: "Sim! Com tarifa alta, a economia é ainda mais expressiva."
      },
      {
        question: "Hotéis podem migrar?",
        answer: "Sim! São excelentes candidatos pelo consumo de climatização."
      },
      {
        question: "A Solarien atende todo o estado?",
        answer: "Sim! Atendemos Boa Vista e o interior de Roraima."
      },
      {
        question: "Como funciona a energia no sistema isolado?",
        answer: "A Solarien trabalha com soluções adaptadas às particularidades de Roraima."
      },
      {
        question: "Qual a economia média em RR?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Boa Vista, Rorainópolis, Caracaraí, Alto Alegre e demais municípios roraimenses.",
    regionalContext: "Roraima possui posição estratégica com economia em desenvolvimento.",
    economicProfile: "Com comércio, serviços e agropecuária, RR tem potencial de economia.",
    energyTip: "Dica: Comércios em Boa Vista economizam em média R$ 3.000/mês!"
  },

  SC: {
    hook: "Santa Catarina, polo industrial do Sul, lidera em economia de energia. Economize até 45%.",
    introduction: `Santa Catarina, com sua economia diversificada e forte presença industrial, está na vanguarda do Mercado Livre de Energia. De Florianópolis a Joinville, empresas economizam milhões.

A Solarien Energy atua em todo o estado, oferecendo soluções para indústria, turismo e comércio. Com tradição de eficiência, SC é ideal para economia de energia.`,
    howItWorks: {
      title: "Como Funciona o Processo em Santa Catarina",
      description: "Processo eficiente para catarinenses.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Celesc" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado de Santa Catarina",
      description: "Vantagens para catarinenses",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Indústria", description: "Competitividade" },
        { title: "Turismo", description: "Custos reduzidos" },
        { title: "Têxtil", description: "Produção mais econômica" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura em Santa Catarina",
      description: "Opções para cada perfil",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade em Santa Catarina",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento em Santa Catarina e em Todo Brasil",
      description: "Cobertura em todo SC",
      highlights: [
        "Escritório em Florianópolis",
        "Atendimento ao vale do Itajaí",
        "Suporte ao norte catarinense",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia em Santa Catarina",
      description: "Com indústria forte, a economia é estratégica.",
      stats: [
        { value: "R$ 0,62", label: "Tarifa média/kWh" },
        { value: "42%", label: "Economia média" },
        { value: "R$ 60.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia em Santa Catarina",
      description: "SC é atendido pela Celesc. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade em Santa Catarina",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas da Celesc" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy em Santa Catarina",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Industrial", description: "Conhecimento do mercado catarinense" },
        { title: "Atendimento Local", description: "Equipe catarinense" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Milhares economizando" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia em Santa Catarina",
      description: "Razões para migrar",
      reasons: [
        "Forte presença industrial",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "João Carlos Martins",
        role: "Diretor de indústria têxtil",
        city: "Blumenau",
        content: "Nossa fábrica economiza R$ 75.000/mês. A Solarien é excelente!",
        savings: "42%"
      },
      {
        name: "Maria Helena Silva",
        role: "Gerente de frigorífico",
        city: "Chapecó",
        content: "A refrigeração reduziu R$ 55.000 mensais. Excelente!",
        savings: "40%"
      },
      {
        name: "Roberto Alves",
        role: "Dono de resort",
        city: "Florianópolis",
        content: "O resort economiza R$ 18.000/mês. Muito profissional!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "Santa Catarina é boa para o Mercado Livre?",
        answer: "Excelente! Com indústria forte, a economia é significativa."
      },
      {
        question: "Indústrias têxteis podem migrar?",
        answer: "Sim! São excelentes candidatas pelo alto consumo."
      },
      {
        question: "A Solarien atende todo o estado?",
        answer: "Sim! De Florianópolis a Joinville, de Blumenau a Chapecó."
      },
      {
        question: "Frigoríficos se beneficiam?",
        answer: "Muito! A refrigeração industrial consome bastante."
      },
      {
        question: "Qual a economia média em SC?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Florianópolis, Joinville, Blumenau, São José, Chapecó, Criciúma e demais municípios catarinenses.",
    regionalContext: "Santa Catarina possui economia diversificada com indústria têxtil, frigoríficos e turismo.",
    economicProfile: "Com indústria, turismo e agronegócio, SC depende de energia competitiva.",
    energyTip: "Dica: Indústrias têxteis catarinenses economizam em média R$ 50.000/mês!"
  },

  SP: {
    hook: "São Paulo, motor econômico do Brasil, lidera em economia de energia. Economize até 45%.",
    introduction: `São Paulo, maior economia da América Latina, está na vanguarda do Mercado Livre de Energia. Da capital ao interior, milhares de empresas já economizam bilhões de reais anualmente.

A Solarien Energy atua em todo o estado, oferecendo soluções para indústria, comércio, agronegócio e serviços. Com a maior demanda energética do país, a economia é estratégica para a competitividade.`,
    howItWorks: {
      title: "Como Funciona o Processo em São Paulo",
      description: "Processo profissional para paulistas.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com Enel, CPFL ou Elektro" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado de São Paulo",
      description: "Vantagens para paulistas",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Indústria", description: "Competitividade máxima" },
        { title: "Comércio", description: "Margens maiores" },
        { title: "Agronegócio", description: "Irrigação econômica" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura em São Paulo",
      description: "Opções para cada perfil",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade em São Paulo",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento em São Paulo e em Todo Brasil",
      description: "Cobertura em todo o SP",
      highlights: [
        "Escritório em São Paulo capital",
        "Atendimento ao interior",
        "Suporte ao ABC paulista",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia em São Paulo",
      description: "Maior economia do país, maior potencial de economia.",
      stats: [
        { value: "R$ 0,70", label: "Tarifa média/kWh" },
        { value: "43%", label: "Economia média" },
        { value: "R$ 200+", label: "Economia mensal (residencial)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia em São Paulo",
      description: "SP é atendido por Enel, CPFL e Elektro. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade em São Paulo",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas de luz" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy em São Paulo",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Total", description: "Conhecimento de todos os setores" },
        { title: "Atendimento Premium", description: "Equipe especializada" },
        { title: "Agilidade", description: "Processos otimizados" },
        { title: "Resultados", description: "Milhares economizando" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia em São Paulo",
      description: "Razões para migrar",
      reasons: [
        "Maior economia do país",
        "Processo gratuito",
        "Energia renovável",
        "Suporte especializado",
        "Economia comprovada",
        "Competitividade global"
      ]
    },
    testimonials: [
      {
        name: "Carlos Eduardo Machado",
        role: "Diretor de multinacional",
        city: "São Paulo",
        content: "Nossas 50 unidades economizam R$ 1.500.000/mês. A Solarien é excepcional!",
        savings: "42%"
      },
      {
        name: "Ana Paula Rodrigues",
        role: "Gerente de shopping",
        city: "Campinas",
        content: "O shopping reduziu R$ 180.000 mensais. Excelente!",
        savings: "40%"
      },
      {
        name: "Roberto Silva",
        role: "Produtor rural",
        city: "Ribeirão Preto",
        content: "A irrigação economiza R$ 65.000/mês. Muito satisfeito!",
        savings: "38%"
      }
    ],
    faqs: [
      {
        question: "São Paulo é o melhor estado para o Mercado Livre?",
        answer: "É excelente! Maior economia, maior potencial de economia."
      },
      {
        question: "Shoppings podem migrar?",
        answer: "Sim! São excelentes candidatos pelo alto consumo."
      },
      {
        question: "A Solarien atende todo o estado?",
        answer: "Sim! Da capital ao interior, do litoral à fronteira."
      },
      {
        question: "Indústrias automotivas se beneficiam?",
        answer: "Muito! O consumo industrial justifica economia massiva."
      },
      {
        question: "Qual a economia média em SP?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em São Paulo, Campinas, Guarulhos, São Bernardo, Santo André, Osasco, Ribeirão Preto e demais municípios paulistas.",
    regionalContext: "São Paulo é a maior economia da América Latina com demanda energética intensa.",
    economicProfile: "Com indústria, serviços, comércio e agronegócio, SP é o motor do Brasil.",
    energyTip: "Dica: Milhares já economizam R$ 200/mês em casa com Energia por Assinatura!"
  },

  SE: {
    hook: "Sergipe, menor estado do Brasil, mas grande em economia de energia. Economize até 45%.",
    introduction: `Sergipe, apesar de pequeno em território, tem grande potencial de economia de energia. De Aracaju ao interior, empresas e produtores descobrem os benefícios do Mercado Livre de Energia.

A Solarien Energy atua em todo o estado, oferecendo soluções para indústria, comércio e turismo. Com sol abundante, a energia renovável é competitiva.`,
    howItWorks: {
      title: "Como Funciona o Processo em Sergipe",
      description: "Processo simplificado para sergipanos.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Energisa" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado de Sergipe",
      description: "Vantagens para sergipanos",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Indústria", description: "Competitividade" },
        { title: "Turismo", description: "Custos reduzidos" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura em Sergipe",
      description: "Opções flexíveis",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Residências e pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade em Sergipe",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento em Sergipe e em Todo Brasil",
      description: "Cobertura em todo SE",
      highlights: [
        "Escritório em Aracaju",
        "Atendimento ao interior",
        "Suporte ao turismo",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia em Sergipe",
      description: "Com sol abundante, a energia renovável é competitiva.",
      stats: [
        { value: "R$ 0,69", label: "Tarifa média/kWh" },
        { value: "42%", label: "Economia média" },
        { value: "R$ 400+", label: "Economia mensal média" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia em Sergipe",
      description: "SE é atendido pela Energisa. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade em Sergipe",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy em Sergipe",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Conhecimento Local", description: "Equipe sergipana" },
        { title: "Foco Nordeste", description: "Expertise regional" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia em Sergipe",
      description: "Razões para migrar",
      reasons: [
        "Sol abundante",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "José Carlos Oliveira",
        role: "Dono de hotel",
        city: "Aracaju",
        content: "Nosso hotel economiza R$ 6.000/mês. A Solarien foi excelente!",
        savings: "40%"
      },
      {
        name: "Maria Helena Santos",
        role: "Gerente de indústria",
        city: "Nossa Senhora do Socorro",
        content: "A indústria reduziu R$ 15.000 mensais. Excelente!",
        savings: "38%"
      },
      {
        name: "Roberto Lima",
        role: "Comerciante",
        city: "Lagarto",
        content: "Minha loja economiza R$ 1.000/mês. Muito satisfeito!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "Sergipe é bom para energia renovável?",
        answer: "Sim! Com sol abundante e ventos costeiros."
      },
      {
        question: "Hotéis podem migrar?",
        answer: "Sim! São excelentes candidatos pelo consumo de climatização."
      },
      {
        question: "A Solarien atende todo o estado?",
        answer: "Sim! De Aracaju a Itabaiana, de Estância a Lagarto."
      },
      {
        question: "Indústrias petroquímicas se beneficiam?",
        answer: "Muito! O consumo industrial justifica a economia."
      },
      {
        question: "Qual a economia média em SE?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Aracaju, Nossa Senhora do Socorro, Lagarto, Itabaiana, São Cristóvão e demais municípios sergipanos.",
    regionalContext: "Sergipe possui clima tropical com sol abundante durante todo o ano.",
    economicProfile: "Com indústria, turismo e serviços, SE tem economia em crescimento.",
    energyTip: "Dica: Hotéis em Aracaju economizam em média R$ 5.000/mês!"
  },

  TO: {
    hook: "Tocantins, coração do Brasil, lidera em economia de energia. Economize até 45%.",
    introduction: `Tocantins, com sua posição estratégica e agronegócio em expansão, está abraçando o Mercado Livre de Energia. De Palmas ao interior, empresas e produtores economizam milhares de reais.

A Solarien Energy atua em todo o estado, oferecendo soluções para agronegócio, indústria e comércio. Com demanda energética crescente, a economia é fundamental.`,
    howItWorks: {
      title: "Como Funciona o Processo no Tocantins",
      description: "Processo simplificado para tocantinenses.",
      steps: [
        { title: "Contato", description: "Fale via WhatsApp" },
        { title: "Análise", description: "Avaliamos seu consumo" },
        { title: "Proposta", description: "Melhor solução" },
        { title: "Migração", description: "Cuidamos de tudo com a Energisa" }
      ]
    },
    benefits: {
      title: "Benefícios do Serviço no Estado do Tocantins",
      description: "Vantagens para tocantinenses",
      items: [
        { title: "Economia", description: "Até 45% de economia", highlight: "45%" },
        { title: "Agronegócio", description: "Irrigação mais barata" },
        { title: "Indústria", description: "Competitividade" },
        { title: "Sustentabilidade", description: "Energia renovável" }
      ]
    },
    marketTypes: {
      title: "Mercado Livre de Energia vs. Energia por Assinatura no Tocantins",
      description: "Opções flexíveis",
      freeMarket: {
        title: "Mercado Livre",
        features: [
          "Para grandes consumidores",
          "Economia de até 45%",
          "Contratos flexíveis",
          "Energia renovável",
          "Negociação direta"
        ]
      },
      subscription: {
        title: "Energia por Assinatura",
        features: [
          "Pequenos negócios",
          "Desconto imediato",
          "Sem burocracia",
          "Digital",
          "Flexível"
        ]
      }
    },
    zeroCost: {
      title: "Custos Zero do Processo de Portabilidade no Tocantins",
      description: "Migração gratuita",
      items: [
        "Sem taxa de adesão",
        "Consultoria gratuita",
        "Migração sem custos",
        "Sem obras",
        "Suporte incluído"
      ]
    },
    coverage: {
      title: "Atendimento no Tocantins e em Todo Brasil",
      description: "Cobertura em todo TO",
      highlights: [
        "Escritório em Palmas",
        "Atendimento ao agronegócio",
        "Suporte a indústrias",
        "Cobertura total"
      ]
    },
    opportunity: {
      title: "Oportunidade de Economizar Energia no Tocantins",
      description: "Com agronegócio em expansão, a economia é estratégica.",
      stats: [
        { value: "R$ 0,67", label: "Tarifa média/kWh" },
        { value: "43%", label: "Economia média" },
        { value: "R$ 30.000+", label: "Economia mensal (grandes)" }
      ]
    },
    availability: {
      title: "Disponibilidade de Energia no Tocantins",
      description: "TO é atendido pela Energisa. A Solarien oferece energia renovável competitiva."
    },
    documents: {
      title: "Documentos Necessários para Realizar a Portabilidade no Tocantins",
      description: "Documentação simples",
      items: [
        { icon: "file", title: "Faturas", description: "Últimas 3 contas" },
        { icon: "building", title: "Documentos", description: "CNPJ e contrato" },
        { icon: "user", title: "Identificação", description: "RG e CPF" },
        { icon: "map", title: "Endereço", description: "Comprovante" }
      ]
    },
    differentials: {
      title: "Diferenciais no Atendimento da Solarien Energy no Tocantins",
      description: "Por que escolher a Solarien",
      items: [
        { title: "Expertise Agro", description: "Conhecimento do setor" },
        { title: "Atendimento Local", description: "Equipe em TO" },
        { title: "Agilidade", description: "Processos rápidos" },
        { title: "Resultados", description: "Economia comprovada" }
      ]
    },
    whyMigrate: {
      title: "Por que Vale a Pena fazer a Portabilidade para o Mercado Livre de Energia no Tocantins",
      description: "Razões para migrar",
      reasons: [
        "Agronegócio em expansão",
        "Processo gratuito",
        "Energia renovável",
        "Suporte local",
        "Economia comprovada",
        "Competitividade"
      ]
    },
    testimonials: [
      {
        name: "José Carlos Oliveira",
        role: "Produtor de soja",
        city: "Porto Nacional",
        content: "A irrigação economiza R$ 28.000/mês. A Solarien entendeu o agro!",
        savings: "42%"
      },
      {
        name: "Maria Helena Santos",
        role: "Gerente de indústria",
        city: "Palmas",
        content: "A indústria reduziu R$ 12.000 mensais. Excelente!",
        savings: "38%"
      },
      {
        name: "Roberto Lima",
        role: "Comerciante",
        city: "Araguaína",
        content: "Minha loja economiza R$ 1.500/mês. Muito satisfeito!",
        savings: "35%"
      }
    ],
    faqs: [
      {
        question: "Tocantins é bom para o Mercado Livre?",
        answer: "Sim! Com agronegócio forte, a economia é significativa."
      },
      {
        question: "Fazendas de soja podem migrar?",
        answer: "Sim! A irrigação é o maior consumo e a economia é expressiva."
      },
      {
        question: "A Solarien atende todo o estado?",
        answer: "Sim! De Palmas a Araguaína, de Gurupi a Porto Nacional."
      },
      {
        question: "O agronegócio tocantinense se beneficia?",
        answer: "Muito! Especialmente com irrigação e silos."
      },
      {
        question: "Qual a economia média no TO?",
        answer: "Entre 35% e 45%, dependendo do perfil."
      }
    ],
    mapDescription: "Mapa interativo mostrando atendimento em Palmas, Araguaína, Gurupi, Porto Nacional, Paraíso e demais municípios tocantinenses.",
    regionalContext: "Tocantins é fronteira agrícola com soja, pecuária e irrigação em expansão.",
    economicProfile: "Com agronegócio, pecuária e logística, TO depende de energia competitiva.",
    energyTip: "Dica: Fazendas com irrigação economizam em média R$ 25.000/mês!"
  }
};

// Merge optimized content with legacy content (optimized takes priority)
export const stateContents: Record<string, StateContent> = {
  ...legacyStateContents,
  ...optimizedStateContents,
};

export const getStateContent = (stateAbbreviation: string): StateContent | undefined => {
  return stateContents[stateAbbreviation];
};
