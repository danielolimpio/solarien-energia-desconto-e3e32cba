import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorBadge from "@/components/blog/AuthorBadge";
import AuthorCard from "@/components/blog/AuthorCard";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  HelpCircle,
  ListChecks,
  Quote,
  Share2,
  Sparkles,
  Tag,
} from "lucide-react";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";

const ArticleMiddleImage = ({ src, alt }: { src: string; alt: string }) => (
  <figure className="not-prose my-10">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="rounded-2xl w-full shadow-lg"
    />
    <figcaption className="text-sm text-muted-foreground text-center mt-3 italic">
      Análise técnica e comercial é a parte mais importante da migração — e
      deve acontecer antes de qualquer assinatura.
    </figcaption>
  </figure>
);

const ArticleContent = ({ middleImage }: { middleImage?: string }) => (
  <div className="prose-content space-y-6 text-foreground/85 leading-relaxed text-[1.02rem]">
    <p className="lead text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
      Se a conta de luz da sua empresa virou um dos maiores pesos do orçamento,
      você não está sozinho. Nos últimos anos, o setor elétrico brasileiro
      passou por uma das maiores aberturas regulatórias da sua história — e o
      reflexo prático disso é que hoje praticamente qualquer empresa, de uma
      padaria de bairro a uma siderúrgica, pode escolher de quem comprar
      energia. Esse "espaço de escolha" é o que o mercado chama de{" "}
      <strong>Mercado Livre de Energia</strong>, ou ACL — Ambiente de
      Contratação Livre.
    </p>

    <p>
      Neste guia, vou tentar tirar a poeira do tema. Sem termos técnicos
      desnecessários, sem promessa de mágica e sem aquele papo de consultor
      pressionando você a assinar contrato no mesmo dia. A ideia é simples:
      depois desta leitura, você deve ser capaz de explicar o ACL para o seu
      sócio, montar uma comparação honesta entre ficar no mercado cativo ou
      migrar, e fazer as perguntas certas para uma comercializadora.
    </p>

    <h2 id="o-que-e">O que é o Mercado Livre de Energia, na prática</h2>
    <p>
      No modelo tradicional — chamado de <em>Ambiente de Contratação Regulada</em>{" "}
      (ACR) — a sua empresa compra energia da distribuidora local. Não há
      escolha: se você está em São Paulo, é Enel ou EDP; se está no Paraná, é
      Copel; se está na Bahia, Coelba; e por aí vai. A tarifa é definida pela{" "}
      <a
        href="https://www.gov.br/aneel/pt-br"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        ANEEL
      </a>{" "}
      em reajustes anuais, com pouca margem de negociação.
    </p>
    <p>
      No Mercado Livre, sua empresa passa a comprar energia diretamente de
      geradores ou de comercializadoras, em contratos bilaterais e com preço
      negociado. A distribuidora continua existindo — afinal, os fios e postes
      continuam sendo dela — mas o papel dela passa a ser apenas{" "}
      <strong>transportar</strong> a energia que você comprou. Você paga a
      energia para um lado, e o "frete" (chamado de TUSD) para o outro.
    </p>

    <div className="not-prose my-8 rounded-2xl border-l-4 border-primary bg-primary/5 p-6">
      <div className="flex gap-3">
        <Quote className="w-6 h-6 text-primary flex-shrink-0" />
        <p className="italic text-foreground/90 leading-relaxed">
          Migrar para o ACL não é trocar de "companhia de luz". É deixar de ser
          consumidor passivo e passar a comprar energia como se compra qualquer
          outro insumo: cotando, comparando e negociando prazo.
        </p>
      </div>
    </div>

    <h2 id="quem-pode-migrar">Quem pode migrar em 2026</h2>
    <p>
      Essa é a parte que mais mudou nos últimos anos. Até 2024, a migração era
      restrita a quem tinha demanda contratada acima de 500&nbsp;kW. Com a
      Portaria 50/2022 do antigo MME e a regulamentação subsequente, esse
      patamar foi sendo derrubado em fases. Hoje, qualquer consumidor do{" "}
      <strong>Grupo A</strong> — ou seja, atendido em alta tensão — pode
      migrar, independentemente do tamanho. Na prática, isso engloba a maior
      parte das indústrias, comércios médios, supermercados, redes de
      farmácia, hotéis, hospitais, clínicas, faculdades, condomínios
      comerciais e shoppings.
    </p>
    <p>
      Para quem está no <strong>Grupo B</strong> (baixa tensão — o caso da
      maioria das casas e do pequeno comércio), a abertura é progressiva e
      depende de regulamentação adicional, mas já está no radar. Se a sua
      empresa consome a partir de aproximadamente 5.000&nbsp;kWh/mês em alta
      tensão, a conversa já vale a pena.
    </p>

    <h3>Como descobrir se você é Grupo A</h3>
    <p>
      Pegue a sua conta de luz. Procure pelo campo "subgrupo tarifário". Se
      aparecer A1, A2, A3, A3a, A4 ou AS, você é Grupo A e pode migrar. Se
      aparecer B1, B2 ou B3, você é Grupo B. Esse detalhezinho na conta vale
      muito mais do que parece.
    </p>

    {/* middle image inserted by parent via post.middleImage */}

    <h2 id="quanto-se-economiza">Quanto realmente se economiza?</h2>
    <p>
      A faixa que mais aparece em material comercial é "até 35%". Mas, sendo
      honesto, o número real depende de três coisas: o seu perfil de consumo,
      o momento em que você fecha o contrato e a forma como ele é estruturado.
      Em projetos que acompanhei pessoalmente, a economia ficou entre 18% e
      40% sobre a fatura total. Quem promete 50% para qualquer empresa
      provavelmente está vendendo só a parte boa do gráfico.
    </p>
    <p>
      Para entender o porquê dessa faixa, é preciso lembrar que a sua conta de
      luz tem duas partes principais: <strong>energia</strong> (TE) e{" "}
      <strong>distribuição</strong> (TUSD). No ACL, você economiza basicamente
      na parte de energia, que costuma representar entre 40% e 60% da fatura.
      Então uma redução de 25% no insumo "energia" tende a virar uma redução
      de 12% a 18% na conta total. Acrescente os benefícios de energia
      incentivada (50% ou 100% renovável) e os ganhos de gestão, e o número
      sobe.
    </p>

    <h2 id="passo-a-passo">Passo a passo da migração</h2>
    <p>
      Quem nunca migrou imagina um processo burocrático eterno. Não é. A
      sequência abaixo, na prática, leva de 60 a 180 dias — sendo que a maior
      parte desse tempo é o aviso prévio à distribuidora, não trabalho seu.
    </p>

    <ol className="space-y-3 list-decimal pl-6 marker:text-primary marker:font-bold">
      <li>
        <strong>Análise da conta de luz.</strong> Os últimos 12 meses contam a
        história inteira: demanda contratada, fator de carga, fator de
        potência, modalidade tarifária.
      </li>
      <li>
        <strong>Estudo de viabilidade.</strong> Aqui se simula o preço da
        energia no ACL, considerando os encargos e a projeção do PLD (preço
        de liquidação das diferenças).
      </li>
      <li>
        <strong>Adequação tarifária e medição.</strong> Em alguns casos é
        necessário trocar o medidor para um SMF (Sistema de Medição para
        Faturamento).
      </li>
      <li>
        <strong>Adesão à CCEE.</strong> A{" "}
        <a
          href="https://www.ccee.org.br/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Câmara de Comercialização de Energia Elétrica
        </a>{" "}
        é o "cartório" do setor — é nela que a sua empresa será registrada
        como consumidor livre.
      </li>
      <li>
        <strong>Denúncia de contrato com a distribuidora (CUSD/CCD).</strong>{" "}
        Esse aviso prévio é o que mais demora — em geral, exige 180 dias de
        antecedência, mas pode ser reduzido em alguns casos.
      </li>
      <li>
        <strong>Assinatura do contrato de compra de energia (PPA).</strong> É
        aqui que se define preço, prazo (1 a 10 anos), flexibilidade de
        consumo, tipo de energia (convencional, incentivada 50% ou 100%) e
        regras de reajuste.
      </li>
      <li>
        <strong>Início do suprimento.</strong> A virada acontece na virada do
        mês, com a operação acompanhada por um agente de medição.
      </li>
    </ol>

    <h2 id="armadilhas">As armadilhas que ninguém te conta</h2>
    <p>
      Como em qualquer mercado aberto, existem detalhes que separam um bom
      contrato de uma dor de cabeça. Vou listar os três que mais aparecem nos
      meus diagnósticos:
    </p>

    <ul className="space-y-3 list-none pl-0">
      <li className="flex gap-3">
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
        <span>
          <strong>Cláusula take-or-pay rígida.</strong> Você se compromete a
          consumir um volume mínimo. Se a sua produção cai, paga pela energia
          que não consumiu. Negocie flexibilidades de pelo menos 10% para
          cima e para baixo.
        </span>
      </li>
      <li className="flex gap-3">
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
        <span>
          <strong>Reajuste atrelado só à inflação.</strong> Energia tem ciclo
          próprio. Em alguns momentos, o PLD desaba; em outros, dispara.
          Contratos longos com reajuste só pelo IPCA podem deixar você fora do
          melhor cenário.
        </span>
      </li>
      <li className="flex gap-3">
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
        <span>
          <strong>Esquecer dos encargos setoriais.</strong> CDE, P&amp;D, ESS,
          encargos de transmissão — tudo isso continua existindo. Boa
          consultoria explica isso na primeira reunião.
        </span>
      </li>
    </ul>

    <h2 id="energia-limpa">Energia limpa, ESG e o efeito reputacional</h2>
    <p>
      Um ponto subestimado é o efeito do ACL na agenda ESG da empresa. Ao
      contratar energia 100% incentivada (eólica, solar, biomassa ou PCH),
      sua empresa pode emitir certificados como o I-REC e comprovar a origem
      renovável da eletricidade consumida. Para indústrias que exportam para
      a Europa — onde o{" "}
      <a
        href="https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        CBAM
      </a>{" "}
      já começa a precificar carbono no produto importado — isso deixou de ser
      marketing e virou competitividade.
    </p>
    <p>
      Mesmo para empresas que vendem só no mercado interno, há ganho. Grandes
      varejistas estão pedindo relatórios de pegada de carbono dos seus
      fornecedores; bancos estão oferecendo linhas mais baratas para quem tem
      matriz limpa; e o próprio time interno costuma reagir bem quando a
      empresa anuncia que passou a operar com energia 100% renovável.
    </p>

    <h2 id="quando-nao-migrar">Quando não migrar</h2>
    <p>
      Por mais que eu acredite no ACL, ele não é para 100% dos casos. Empresas
      com consumo muito baixo, sazonalidade extrema sem previsibilidade,
      contratos curtos de aluguel (menos de 12 meses no imóvel) ou operações
      em fase de encerramento podem não justificar a migração no momento. A
      regra de ouro é: se o seu payback do estudo de viabilidade passa de 24
      meses, repense. Bom projeto de ACL costuma pagar a estruturação em 6 a
      12 meses.
    </p>

    <h2 id="como-comecar">Como começar com segurança</h2>
    <p>
      O primeiro passo é colocar suas últimas 12 contas de luz em PDF e pedir
      uma análise gratuita. Boas consultorias devolvem em 48 horas um relatório
      com a economia estimada, o investimento necessário, o prazo de retorno e
      uma comparação com o cenário de continuar no mercado cativo.
    </p>
    <p>
      Se você quer entender o cenário do seu estado em mais detalhe, vale a
      pena ler também o nosso conteúdo sobre{" "}
      <Link to="/sao-paulo">Mercado Livre de Energia em São Paulo</Link> e o
      panorama do{" "}
      <Link to="/minas-gerais">Mercado Livre de Energia em Minas Gerais</Link>,
      onde concentramos parte significativa dos cases. Para quem quer um
      atendimento direto, é só{" "}
      <Link to="/contato">falar com a nossa equipe</Link> — sem compromisso,
      sem letra miúda.
    </p>

    <h2 id="conclusao">Conclusão: energia virou decisão estratégica</h2>
    <p>
      Por muito tempo, a conta de luz foi tratada como despesa fixa — daquelas
      que ninguém questiona. O Mercado Livre quebrou essa lógica. Hoje, energia
      é insumo negociável, é vantagem competitiva e é parte da estratégia ESG.
      Empresas que se moverem primeiro vão capturar economia, reputação e
      previsibilidade. As que ficarem paradas vão continuar pagando a conta
      que outros se recusaram a pagar.
    </p>
    <p>
      Não precisa ter pressa de assinar. Precisa ter pressa de entender. E,
      uma vez entendido, dá para tomar a decisão com a calma e a clareza que
      uma decisão dessa magnitude merece.
    </p>
  </div>
);

const faqs = [
  {
    q: "Toda empresa pode migrar para o Mercado Livre de Energia?",
    a: "Atualmente, qualquer consumidor do Grupo A (atendido em alta tensão) pode migrar, independentemente do tamanho da demanda. Consumidores do Grupo B (baixa tensão) ainda dependem de regulamentação adicional, mas a abertura é progressiva.",
  },
  {
    q: "Quanto tempo leva o processo de migração?",
    a: "Em média, de 60 a 180 dias. A maior parte desse tempo é o aviso prévio à distribuidora local. O trabalho ativo da sua empresa concentra-se nas primeiras semanas, com análise de viabilidade e adequação do medidor, quando necessário.",
  },
  {
    q: "Existe risco de ficar sem energia se a comercializadora quebrar?",
    a: "Não. A distribuidora local continua sendo a responsável pelo fornecimento físico, e a CCEE prevê mecanismos de transição caso uma comercializadora encerre as operações. O risco é financeiro/contratual, não de fornecimento.",
  },
  {
    q: "Posso voltar para o mercado regulado depois de migrar?",
    a: "Pode. O retorno também exige aviso prévio (geralmente de 5 anos para grandes consumidores e prazos menores para consumidores especiais), mas é totalmente possível. Por isso a importância de estruturar o contrato com flexibilidade.",
  },
  {
    q: "Quanto custa para começar?",
    a: "A consultoria inicial e o estudo de viabilidade costumam ser gratuitos. Pode haver investimento na adequação do medidor (SMF) e custos de adesão à CCEE, que normalmente são absorvidos no payback dos primeiros meses de economia.",
  },
];

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const canonical = `https://mercadolivredeenergia.org/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta name="author" content={post.author.name} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonical} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:published_time" content={post.publishedAt} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt ?? post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author.name,
              url: post.author.links.website,
            },
            mainEntityOfPage: canonical,
            keywords: post.keywords.join(", "),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-20">
          {/* Article header */}
          <section className="bg-gradient-to-b from-primary/5 via-background to-background pt-10 pb-8 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-5"
                >
                  <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
                </Link>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 mb-4">
                  <Sparkles className="w-3 h-3" /> {post.category}
                </span>
                <h1 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-5">
                  {post.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <AuthorBadge
                  author={post.author}
                  date={post.publishedAt}
                  readingTime={post.readingTime}
                />
              </div>
            </div>
          </section>

          {/* Cover */}
          <div className="container mx-auto px-4 -mt-2 mb-10">
            <div className="max-w-5xl mx-auto">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full rounded-2xl shadow-xl aspect-[16/9] object-cover"
              />
            </div>
          </div>

          {/* Body + Sidebar */}
          <section className="pb-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_320px] gap-10 max-w-6xl mx-auto">
                {/* Content */}
                <article>
                  <ArticleContent />

                  {/* Tags */}
                  <div className="mt-10 pt-6 border-t border-border">
                    <div className="flex items-start gap-2 flex-wrap">
                      <Tag className="w-4 h-4 text-muted-foreground mt-1.5" />
                      {post.keywords.slice(0, 10).map((k) => (
                        <span
                          key={k}
                          className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border"
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* FAQ */}
                  <div className="mt-12">
                    <div className="flex items-center gap-2 mb-5">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      <h2 className="font-display text-2xl md:text-3xl font-black text-foreground">
                        Perguntas frequentes
                      </h2>
                    </div>
                    <div className="space-y-3">
                      {faqs.map((f, i) => (
                        <details
                          key={i}
                          className="group rounded-xl border border-border bg-card p-5 open:shadow-md transition-shadow"
                        >
                          <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-semibold text-foreground">
                            <span>{f.q}</span>
                            <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform">
                              +
                            </span>
                          </summary>
                          <p className="mt-3 text-muted-foreground leading-relaxed">
                            {f.a}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>

                  {/* Resume CTA */}
                  <div className="mt-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 md:p-10 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground mb-4 shadow-lg">
                      <FileText className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mb-3">
                      Pronto para criar o seu currículo profissional?
                    </h3>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                      Monte um currículo moderno, otimizado para vagas no setor
                      de energia e tecnologia, em poucos minutos.
                    </p>
                    <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                      <a
                        href="https://danielolimpio.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Criar meu currículo agora{" "}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  {/* Author */}
                  <div className="mt-12">
                    <AuthorCard author={post.author} />
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="space-y-6 lg:sticky lg:top-24 self-start">
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <ListChecks className="w-4 h-4 text-primary" />
                      <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
                        Neste artigo
                      </h4>
                    </div>
                    <nav className="text-sm space-y-2">
                      {[
                        ["o-que-e", "O que é o ACL"],
                        ["quem-pode-migrar", "Quem pode migrar"],
                        ["quanto-se-economiza", "Quanto se economiza"],
                        ["passo-a-passo", "Passo a passo"],
                        ["armadilhas", "Armadilhas"],
                        ["energia-limpa", "Energia limpa e ESG"],
                        ["quando-nao-migrar", "Quando não migrar"],
                        ["como-comecar", "Como começar"],
                      ].map(([id, label]) => (
                        <a
                          key={id}
                          href={`#${id}`}
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          → {label}
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-5">
                    <h4 className="font-display text-base font-bold text-foreground mb-2">
                      Simulação gratuita
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Descubra quanto sua empresa pode economizar em minutos.
                    </p>
                    <Button asChild className="w-full" size="sm">
                      <Link to="/contato">Simular agora</Link>
                    </Button>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Share2 className="w-4 h-4 text-primary" />
                      <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
                        Compartilhar
                      </h4>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + canonical)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-xs bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-lg font-semibold transition-colors"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonical)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-xs bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-lg font-semibold transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="py-16 border-t border-border bg-muted/20">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-8">
                    Artigos recomendados
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {related.map((p) => (
                      <BlogCard key={p.slug} post={p} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
