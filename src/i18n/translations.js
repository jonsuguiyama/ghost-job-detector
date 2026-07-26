import { GITHUB_REPO_URL } from '../lib/constants';

export const translations = {
  pt: {
    nav: { home: 'Início', checklist: 'Checklist Manual', analysis: 'Análise Automática' },
    home: {
      title: 'Essa vaga existe de verdade?',
      sub: 'Aprenda a reconhecer os sinais antes de perder tempo e energia em candidaturas que não vão a lugar nenhum.',
      ctaChecklist: 'Checklist Manual',
      ctaPaste: 'Análise Automática'
    },
    gaugeTicks: { low: 'real', high: 'fantasma' },
    verdicts: {
      none: { label: 'nenhum sinal marcado', verdict: 'Parece uma vaga real', status: 'neutral', detail: 'Continue marcando o que souber sobre a vaga para refinar o resultado.' },
      low: { label: 'risco baixo', verdict: 'Provavelmente real', status: 'good', detail: 'Poucos sinais de alerta. Vale a pena investir tempo numa candidatura bem feita.' },
      medium: { label: 'risco médio', verdict: 'Zona cinzenta', status: 'warning', detail: 'Alguns sinais de alerta. Aplique se for rápido, mas priorize confirmar antes via careers page ou contato direto.' },
      high: { label: 'risco alto', verdict: 'Provável vaga fantasma', status: 'critical', detail: 'Vários sinais bateram. Sua energia provavelmente rende mais em outra vaga ou em contato direto/referral.' }
    },
    checklistPage: {
      title: 'Checklist Manual',
      sub: 'Marque o que se aplica à vaga que você está analisando. Nada aqui é 100% garantido - mas quanto maior o risco de "vaga fantasma", menos vale a pena investir tempo nessa candidatura.',
      sectionSignals: 'sinais de alerta'
    },
    analysisPage: {
      title: 'Análise Automática',
      sub: 'Cole o texto completo da vaga e responda os campos obrigatórios - a gente detecta alguns sinais automaticamente no texto e calcula o resultado com o resto.'
    },
    weightLabel: 'peso',
    resetLabel: 'resetar',
    scoreBadge: (n, t, w, m) => `sinais: ${n} / ${t} · peso: ${w} / ${m}`,
    items: [
      'Publicada há mais de 30–45 dias e continua no ar',
      'Sem faixa salarial informada',
      'Descrição genérica/copia-e-cola, sem nome de time, gestor ou stack específica',
      'Só aparece em agregador (LinkedIn/Indeed/Catho), não na página de carreiras da empresa',
      'A mesma vaga é reaberta ou reaparece de tempos em tempos ("evergreen")',
      'Zero contato após aplicar, mesmo depois de 2+ semanas',
      'Empresa em congelamento de contratação ou sem notícia de expansão recente',
      'Aplicação só por formulário genérico, sem recrutador identificável',
      'Várias vagas idênticas abertas ao mesmo tempo pra mesma posição'
    ],
    paste: {
      sectionTitle: 'detalhes da vaga',
      textLabel: 'Cole aqui a descrição completa da vaga *',
      daysLabel: 'Há quantos dias a vaga está publicada? *',
      aggregatorLabel: 'Só aparece em agregador (LinkedIn/Indeed), não no site oficial da empresa? *',
      formLabel: 'Candidatura só por formulário genérico, sem recrutador identificável? *',
      duplicateLabel: 'Existem várias vagas idênticas abertas ao mesmo tempo pra mesma posição? *',
      evergreenLabel: 'Essa vaga já reapareceu antes ("evergreen")?',
      silenceLabel: 'Você aplicou e ficou 2+ semanas sem nenhum contato?',
      freezeLabel: 'A empresa está em congelamento de contratação ou sem notícia de expansão?',
      yes: 'Sim', no: 'Não', unsure: 'Não sei',
      requiredNote: '* campos obrigatórios pra calcular um resultado',
      backLabel: '‹ voltar',
      nextLabel: 'Avançar →',
      progressTemplate: (n) => `pergunta ${n} / 7`,
      doneMessage: 'Análise completa - o resultado está atualizado no medidor ao lado.',
      incomplete: { label: 'aguardando dados', verdict: 'Preencha os campos obrigatórios', status: 'neutral', detail: 'Cole o texto da vaga e responda os campos marcados com * pra ver o resultado.' },
      autoSalaryAbsent: '🔎 Auto-detectado: nenhuma faixa salarial encontrada no texto',
      autoSalaryPresent: '🔎 Auto-detectado: faixa salarial mencionada no texto',
      autoGenericYes: '🔎 Auto-detectado: descrição parece genérica/padrão (aproximado)',
      autoGenericNo: '🔎 Auto-detectado: descrição parece específica (aproximado)'
    },
    sobrePage: {
      title: 'Por que uma vaga fantasma existe?',
      sub: 'Empresas mantêm posições publicadas para parecer que estão crescendo, montar um banco de currículos para o futuro ("pipeline building"), ou simplesmente porque ninguém lembrou de fechar a vaga. Para quem está procurando emprego, isso vira tempo e energia jogados fora em processos que nunca vão responder.'
    },
    stepsTitle: 'economize tempo',
    steps: [
      { lead: 'Cheque a página de carreiras da empresa.', rest: 'Se a vaga só existe no LinkedIn/Indeed/Catho mas não no site oficial, desconfie.' },
      { lead: 'Procure o badge "Contratando ativamente"', rest: 'no LinkedIn, ou posts recentes de funcionários mencionando a vaga.' },
      { lead: 'Puxe conversa direto com alguém do time', rest: '(recrutador ou gestor) em vez de só aplicar pelo formulário - pergunte se a posição está ativa.' },
      { lead: 'Olhe a data de publicação x última atualização.', rest: 'Vaga aberta há 45+ dias sendo "atualizada" sozinha sugere um script mantendo o pipeline vivo, não uma contratação real.' },
      { lead: 'Pesquise o nome da empresa + "layoff" ou "demissão em massa".', rest: 'Se a empresa cortou pessoal recentemente no mesmo time, a vaga pode ser só formalidade.' },
      { lead: 'Cole o título exato da vaga + nome da empresa entre aspas no Google.', rest: 'Se a mesma vaga aparece publicada em datas bem diferentes ao longo dos meses, é forte indício de vaga evergreen.' }
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: 'Como eu posso ajudar?', a: '<p>Divulgue esse app pra quem tá na correria de procurar emprego - quanto mais gente souber reconhecer uma vaga fantasma, menos tempo e energia a gente perde nesse jogo.</p><p>E o combo mais poderoso de todos: você conhece alguém desempregado? Você conhece alguém contratando? Conecta essas duas pessoas. Isso vale muito mais que qualquer vaga publicada - currículo às vezes empaca no ATS, mas indicação de gente de confiança fura fila.</p><p>Nesse mercado meio bizarro de vaga fantasma, a gente só sobrevive não largando a mão de ninguém.</p><p>Se quiser ver relatos de outras pessoas sobre empresas específicas, a comunidade mantém algumas listas por conta própria: <a href="https://docs.google.com/spreadsheets/d/1nW7kbqVz8XUCRFEgH5Y60YzmoOfl7IM9w4DAhb2kcX4/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">planilha comunitária</a>, <a href="https://www.reddit.com/r/jobsearchhacks/comments/1fsefi1/official_ghost_job_list/" target="_blank" rel="noopener noreferrer">r/jobsearchhacks</a> e <a href="https://www.reddit.com/r/RemoteJobs/comments/1fsegmz/ghost_jobs_complete_list/" target="_blank" rel="noopener noreferrer">r/RemoteJobs</a>. É conteúdo não verificado e mantido por voluntários, então trate como ponto de partida pra pesquisar, nunca como veredito sobre uma empresa.</p>' },
      { q: 'Sou recrutador(a) e tenho mais sugestões - como contribuo?', a: `Abra uma <a href="${GITHUB_REPO_URL}/issues" target="_blank" rel="noopener noreferrer">issue no GitHub</a> contando sua sugestão. Feedback de quem tá do lado de dentro do processo de contratação é especialmente bem-vindo.` },
      { q: 'Como devo otimizar meu currículo pra aumentar minhas chances?', a: '<p>Adapte as palavras-chave do currículo às da descrição da vaga, quantifique resultados ("aumentei X em Y%") em vez de só listar tarefas, mantenha 1-2 páginas num formato simples que passe por sistemas de triagem automática (ATS), e garanta que as competências obrigatórias da vaga apareçam claramente.</p><p>E um conselho meio contraintuitivo: aplique só pra vagas que realmente fazem sentido pro seu perfil - disparar currículo pra tudo quanto é vaga ("spray and pray") dilui sua energia e geralmente rende taxa de resposta pior do que poucas candidaturas bem direcionadas.</p>' },
      { q: 'Os sinais aqui garantem que a vaga é falsa?', a: '<p>Não. Isso aqui é um termômetro, não uma bola de cristal - os sinais e pesos vêm de pesquisas de mercado (fontes logo abaixo) e de uma heurística nossa, não de dados da vaga específica que você tá olhando.</p><p>Pode errar pros dois lados: vaga real pode acender vários sinais, e vaga fantasma pode passar batida.</p><p>Use o resultado como ponto de partida pra investigar, nunca como veredito final - sempre vale confirmar pelos passos práticos ao lado antes de descartar uma vaga.</p>' },
      { q: 'Vale a pena aplicar mesmo estando na "zona cinzenta"?', a: 'Geralmente sim, se a candidatura for rápida. O custo de aplicar é baixo comparado ao de ignorar uma vaga real. Só evite gastar horas customizando currículo e carta pra uma vaga com muitos sinais de alerta.' },
      { q: 'A descrição da vaga e informações que compartilho aqui ficam salvas em algum lugar?', a: '<p>Não. Toda a análise roda localmente no seu navegador - nada do texto colado ou das respostas que você preenche é enviado pra nenhum servidor.</p><p>A única coisa registrada de forma anônima é via Umami (uma ferramenta de analytics focada em privacidade, sem cookies): eventos agregados tipo qual veredito apareceu, qual idioma foi selecionado ou qual página foi visitada.</p><p>A gente guarda isso só pra entender quais partes do app são mais usadas e melhorar a ferramenta - nunca pra te identificar ou ver o conteúdo da vaga que você analisou.</p>' },
      { q: 'Quem é Jon Suguiyama?', a: '<p>Comecei minha carreira em desenvolvimento web em 2007 - HTML, CSS e muito ActionScript, construindo aqueles banners animados "milagre de 16kb" que hoje parecem uma lição antecipada de engenharia sob restrição.</p><p>Depois passei mais de uma década liderando times criativos: Senior Art Director, Head of Design, Concept Artist - trabalhando em campanhas publicitárias nacionais, animação para o mercado de games competitivos e um jogo construído do zero dentro de uma startup acelerada. Nunca parei de programar de vez ao longo do caminho.</p><p>Hoje voltei para onde comecei: construindo aplicações full-stack com Angular, React, TypeScript e Node.js. Projetos recentes incluem um gerenciador de tarefas drag-and-drop com sistema de demo ao vivo (sessões por token, PostgreSQL) e uma ferramenta de visualização de dados de CSV para dashboard (React, Recharts). Atualmente estou aprofundando minhas habilidades de backend - Java, Spring Boot, infraestrutura cloud - através de uma pós-graduação em Arquitetura de Software.</p><p>O que trago de um pouco diferente: já sentei na reunião com cliente, na sala de pitch e na pipeline de produção - não só no código. Sei traduzir um problema de negócio em algo que as pessoas realmente querem usar, e comunico como alguém que passou mais de 15 anos explicando decisões técnicas para quem não é técnico.</p><p>Buscando oportunidades como desenvolvedor(a) full-stack, onde essa combinação de execução técnica e sensibilidade de produto agregue valor real.</p><p>Projetos: <a href="https://github.com/jonsuguiyama" target="_blank" rel="noopener noreferrer">GitHub</a> · Portfólio de design: <a href="https://behance.net/jonsuguiyama" target="_blank" rel="noopener noreferrer">Behance</a></p>' }
    ],
    sourcesTitle: 'fontes',
    sources: [
      { name: 'Clarify Capital - Ghost Jobs 2.0 (2025)', url: 'https://clarifycapital.com/ghost-jobs' },
      { name: 'Clarify Capital - análise 2026', url: 'https://clarifycapital.com/ghost-jobs-2026' },
      { name: 'Fast Company - recrutadores sobre vaga fantasma (2025)', url: 'https://www.fastcompany.com/91425252/recruiters-dish-on-ghost-jobs-why-companies-post-them-and-how-to-outsmart-them' },
      { name: 'Entrepreneur - cobertura do estudo da Greenhouse (2025)', url: 'https://www.entrepreneur.com/business-news/one-quarter-of-jobs-posted-online-are-fake-ghost-jobs-study/496683' },
      { name: 'The Interview Guys - Ghost Jobs Exposed', url: 'https://blog.theinterviewguys.com/ghost-jobs-exposed/' },
      { name: 'The Interview Guys - 2025 Ghosting Index', url: 'https://blog.theinterviewguys.com/the-2025-ghosting-index/' },
      { name: 'LiveCareer - RH admite publicar vaga fantasma', url: 'https://www.livecareer.com/resources/careers/ghost-jobs' },
      { name: 'Congressional Research Service - "Ghost" Job Postings', url: 'https://www.congress.gov/crs-product/IF12977' },
      { name: 'Fast Company Brasil - vagas fantasma prejudicam candidatos e empresas', url: 'https://fastcompanybrasil.com/worklife/vagas-fantasma-estao-prejudicando-candidatos-e-empresas/' },
      { name: 'G1 - o que são vagas fantasmas e como identificá-las', url: 'https://g1.globo.com/trabalho-e-carreira/noticia/2024/10/31/vagas-fantasmas-o-que-sao-por-que-empresas-utilizam-como-identifica-las.ghtml' },
      { name: 'BBC News Brasil - reportagem sobre vaga fantasma', url: 'https://www.bbc.com/portuguese/articles/crg4x4rxe91o' },
      { name: 'Nexo Jornal - por que empresas abrem vagas fantasmas', url: 'https://www.nexojornal.com.br/expresso/2025/09/05/trabalho-processo-seletivo-vagas-fantasmas-estrategia-de-marketing-empresarial' }
    ],
    quotes: [
      { text: 'Quase 1 em cada 3 empregadores manteve vagas abertas por mais de 30 dias em 2025.', source: 'Clarify Capital, 2025' },
      { text: '37% dos recrutadores dizem manter vagas abertas porque a empresa está "sempre aberta a novos talentos".', source: 'Fast Company, 2025' },
      { text: 'Estimativas de mercado apontam entre 18% e 22% das vagas ativas como "vaga fantasma".', source: 'Greenhouse / Entrepreneur, 2025' },
      { text: '27,4% das vagas nos EUA no LinkedIn são prováveis vagas fantasma.', source: 'ResumeUp.AI, via The Interview Guys' },
      { text: '93% dos profissionais de RH admitem publicar vaga fantasma regularmente ou ocasionalmente.', source: 'LiveCareer, 2025' },
      { text: '1 em cada 7 vagas ativas hoje é uma vaga fantasma.', source: 'Clarify Capital, 2026' },
      { text: '53% dos candidatos já encontraram vagas fraudulentas ao procurar emprego.', source: 'Job Seeker Nation Report 2026, Employ' },
      { text: 'Até 2028, 1 em cada 4 perfis de candidatos deve ser falso, segundo previsão da Gartner.', source: 'Gartner, via Fast Company Brasil' },
      { text: '69% dos candidatos ghostados dizem que isso aconteceu depois que o processo de entrevistas já tinha começado.', source: 'LiveCareer, 2025' },
      { text: '40% das empresas de tecnologia já publicaram pelo menos uma vaga fantasma.', source: 'Greenhouse / ResumeBuilder, via The Interview Guys' },
      { text: 'Los Angeles tem a maior taxa de vaga fantasma entre as grandes cidades dos EUA: 30,5%.', source: 'Greenhouse / ResumeBuilder, via The Interview Guys' }
    ],
    footer: { builtBy: 'Feito por Jon Suguiyama com' }
  },

  en: {
    nav: { home: 'Home', checklist: 'Manual Checklist', analysis: 'Automatic Analysis' },
    home: {
      title: 'Is this job posting real?',
      sub: 'Learn to spot the signs before you waste time and energy on applications that go nowhere.',
      ctaChecklist: 'Manual Checklist',
      ctaPaste: 'Automatic Analysis'
    },
    gaugeTicks: { low: 'real', high: 'ghost' },
    verdicts: {
      none: { label: 'no signals checked', verdict: 'Looks like a real job', status: 'neutral', detail: 'Keep checking off what you know about the posting to refine the result.' },
      low: { label: 'low risk', verdict: 'Likely real', status: 'good', detail: 'Few warning signs. Worth investing time in a solid application.' },
      medium: { label: 'medium risk', verdict: 'Gray zone', status: 'warning', detail: 'Some warning signs. Apply if it\'s quick, but prioritize confirming via the careers page or a direct contact.' },
      high: { label: 'high risk', verdict: 'Likely a ghost job', status: 'critical', detail: 'Multiple signals triggered. Your energy is probably better spent on another posting or a direct referral.' }
    },
    checklistPage: {
      title: 'Manual Checklist',
      sub: 'Check off what applies to the job you\'re analyzing. None of this is 100% guaranteed - but the higher the "ghost job" risk, the less it\'s worth investing time in that application.',
      sectionSignals: 'warning signs'
    },
    analysisPage: {
      title: 'Automatic Analysis',
      sub: 'Paste the full job text and answer the required fields - we auto-detect a couple of signals in the text and calculate the result with the rest.'
    },
    weightLabel: 'weight',
    resetLabel: 'reset',
    scoreBadge: (n, t, w, m) => `signals: ${n} / ${t} · weight: ${w} / ${m}`,
    items: [
      'Posted 30–45+ days ago and still live',
      'No salary range listed',
      'Generic, copy-paste description - no team name, manager, or specific tech stack',
      'Only appears on an aggregator (LinkedIn/Indeed), not on the company\'s own careers page',
      'The same posting keeps reappearing over time ("evergreen" listing)',
      'Total silence after applying, even after 2+ weeks',
      'Company is in a hiring freeze or has no recent news of growth',
      'Application only through a generic form, no identifiable recruiter',
      'Multiple identical openings posted for the same role at the same time'
    ],
    paste: {
      sectionTitle: 'job details',
      textLabel: 'Paste the full job description here *',
      daysLabel: 'How many days has it been posted? *',
      aggregatorLabel: 'Only appears on an aggregator (LinkedIn/Indeed), not the company\'s own site? *',
      formLabel: 'Application only through a generic form, no identifiable recruiter? *',
      duplicateLabel: 'Are there multiple identical openings posted at the same time? *',
      evergreenLabel: 'Has this posting reappeared before ("evergreen")?',
      silenceLabel: 'Did you apply and get 2+ weeks of total silence?',
      freezeLabel: 'Is the company in a hiring freeze or with no recent growth news?',
      yes: 'Yes', no: 'No', unsure: 'Not sure',
      requiredNote: '* required fields to calculate a result',
      backLabel: '‹ back',
      nextLabel: 'Next →',
      progressTemplate: (n) => `question ${n} / 7`,
      doneMessage: 'Analysis complete - the result is updated on the gauge.',
      incomplete: { label: 'waiting for input', verdict: 'Fill in the required fields', status: 'neutral', detail: 'Paste the job text and answer the fields marked with * to see a result.' },
      autoSalaryAbsent: '🔎 Auto-detected: no salary range found in the text',
      autoSalaryPresent: '🔎 Auto-detected: salary range mentioned in the text',
      autoGenericYes: '🔎 Auto-detected: description looks generic/boilerplate (approximate)',
      autoGenericNo: '🔎 Auto-detected: description looks specific (approximate)'
    },
    sobrePage: {
      title: 'Why do ghost jobs exist?',
      sub: 'Companies keep postings live to look like they\'re growing, to build a resume pipeline for later ("pipeline building"), or simply because nobody remembered to close it. For job seekers, that turns into time and energy wasted on processes that will never respond.'
    },
    stepsTitle: 'save time',
    steps: [
      { lead: 'Check the company\'s own careers page.', rest: 'If the job only exists on LinkedIn/Indeed but not on the official site, be suspicious.' },
      { lead: 'Look for an "actively hiring" badge', rest: 'on LinkedIn, or recent employee posts mentioning the role.' },
      { lead: 'Reach out directly to someone on the team', rest: '(recruiter or manager) instead of just applying through the form - ask if the position is still open.' },
      { lead: 'Compare the posting date vs. the last updated date.', rest: 'A listing open 45+ days that keeps "updating" itself suggests an automated script keeping the pipeline alive, not a real hire.' },
      { lead: 'Search the company name + "layoffs".', rest: 'If the company recently cut staff on the same team, the posting might just be a formality.' },
      { lead: 'Google the exact job title + company name in quotes.', rest: 'If the same posting shows up published on very different dates across months, that\'s a strong evergreen signal.' }
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: 'How can I help?', a: '<p>Share this app with anyone in the middle of a job search - the more people who can spot a ghost job, the less time and energy we all waste on this game.</p><p>And the single most powerful move of all: do you know someone unemployed? Do you know someone hiring? Connect them. That\'s worth more than any job posting - a resume can get stuck in an ATS, but a trusted referral skips the line.</p><p>In this weird ghost-job economy, the way we get through it is by not letting go of each other\'s hand.</p><p>If you want to see other people\'s reports about specific companies, the community keeps a few lists of its own: <a href="https://docs.google.com/spreadsheets/d/1nW7kbqVz8XUCRFEgH5Y60YzmoOfl7IM9w4DAhb2kcX4/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">community spreadsheet</a>, <a href="https://www.reddit.com/r/jobsearchhacks/comments/1fsefi1/official_ghost_job_list/" target="_blank" rel="noopener noreferrer">r/jobsearchhacks</a> and <a href="https://www.reddit.com/r/RemoteJobs/comments/1fsegmz/ghost_jobs_complete_list/" target="_blank" rel="noopener noreferrer">r/RemoteJobs</a>. This is unverified, volunteer-maintained content, so treat it as a starting point for your own research, never as a verdict on a company.</p>' },
      { q: 'I\'m a recruiter and have more suggestions - how do I contribute?', a: `Open an <a href="${GITHUB_REPO_URL}/issues" target="_blank" rel="noopener noreferrer">issue on GitHub</a> with your suggestion. Feedback from people on the hiring side of the process is especially welcome.` },
      { q: 'How should I optimize my resume to improve my chances?', a: '<p>Match your resume\'s keywords to the job description, quantify results ("increased X by Y%") instead of just listing duties, keep it to 1-2 pages in a simple format that passes applicant tracking systems (ATS), and make sure the posting\'s required skills show up clearly.</p><p>One slightly counterintuitive tip: only apply to postings that genuinely fit your profile - spray-and-pray applications dilute your energy and usually get a worse response rate than a handful of well-targeted ones.</p>' },
      { q: 'Do these signals guarantee the posting is fake?', a: '<p>No. This is a thermometer, not a crystal ball - the signals and weights come from market research (sources further down) and our own heuristic, not from data about the specific job you\'re checking.</p><p>It can be wrong in both directions: a real job can trigger several signals, and a ghost job can slip by undetected.</p><p>Treat the result as a starting point for your own digging, never a final verdict - it\'s always worth confirming through the practical steps beside this before writing off a posting.</p>' },
      { q: 'Is it worth applying even in the "gray zone"?', a: 'Usually yes, if the application is quick. The cost of applying is low compared to the cost of skipping a real job. Just avoid spending hours customizing a resume and cover letter for a posting with lots of warning signs.' },
      { q: 'Is the job description and information I share here saved anywhere?', a: '<p>No. All analysis runs locally in your browser - neither the pasted text nor the answers you fill in are ever sent to a server.</p><p>The only thing recorded anonymously is through Umami (a privacy-focused, cookie-free analytics tool): aggregate events like which verdict came up, which language was selected, or which page was visited.</p><p>We keep that only to understand which parts of the app get used and improve it - never to identify you or see the content of the job you analyzed.</p>' },
      { q: 'Who is Jon Suguiyama?', a: '<p>I started my career in web development in 2007 - HTML, CSS, and a lot of ActionScript, building the kind of "16kb miracle" animated banners that today feel like an early lesson in constraint-driven engineering.</p><p>Then I spent over a decade leading creative teams instead: Senior Art Director, Head of Design, Concept Artist - working on national ad campaigns, animation for the competitive gaming market, and a video game built from scratch inside a fast-moving startup. I never fully stopped coding along the way.</p><p>Today I\'m back where I started: building full-stack applications with Angular, React, TypeScript, and Node.js. Recent projects include a drag-and-drop task manager with a live demo system (token-based sessions, PostgreSQL) and a CSV-to-dashboard data visualization tool (React, Recharts). I\'m currently deepening my backend skills - Java, Spring Boot, cloud infrastructure - through a postgraduate program in Software Architecture.</p><p>What I bring that\'s a little different: I\'ve sat in the client meeting, the pitch room, and the production pipeline - not just the codebase. I know how to translate a business problem into something people actually want to use, and I communicate like someone who has spent 15+ years explaining technical decisions to non-technical stakeholders.</p><p>Currently looking for full-stack developer opportunities where that combination of technical execution and product sensibility adds real value.</p><p>Projects: <a href="https://github.com/jonsuguiyama" target="_blank" rel="noopener noreferrer">GitHub</a> · Design background: <a href="https://behance.net/jonsuguiyama" target="_blank" rel="noopener noreferrer">Behance</a></p>' }
    ],
    sourcesTitle: 'sources',
    sources: [
      { name: 'Clarify Capital - Ghost Jobs 2.0 (2025)', url: 'https://clarifycapital.com/ghost-jobs' },
      { name: 'Clarify Capital - 2026 analysis', url: 'https://clarifycapital.com/ghost-jobs-2026' },
      { name: 'Fast Company - recruiters on ghost jobs (2025)', url: 'https://www.fastcompany.com/91425252/recruiters-dish-on-ghost-jobs-why-companies-post-them-and-how-to-outsmart-them' },
      { name: 'Entrepreneur - coverage of the Greenhouse study (2025)', url: 'https://www.entrepreneur.com/business-news/one-quarter-of-jobs-posted-online-are-fake-ghost-jobs-study/496683' },
      { name: 'The Interview Guys - Ghost Jobs Exposed', url: 'https://blog.theinterviewguys.com/ghost-jobs-exposed/' },
      { name: 'The Interview Guys - 2025 Ghosting Index', url: 'https://blog.theinterviewguys.com/the-2025-ghosting-index/' },
      { name: 'LiveCareer - HR admits to posting ghost jobs', url: 'https://www.livecareer.com/resources/careers/ghost-jobs' },
      { name: 'Congressional Research Service - "Ghost" Job Postings', url: 'https://www.congress.gov/crs-product/IF12977' },
      { name: 'Fast Company Brasil - ghost jobs are hurting candidates and companies', url: 'https://fastcompanybrasil.com/worklife/vagas-fantasma-estao-prejudicando-candidatos-e-empresas/' },
      { name: 'G1 - what ghost jobs are and how to spot them', url: 'https://g1.globo.com/trabalho-e-carreira/noticia/2024/10/31/vagas-fantasmas-o-que-sao-por-que-empresas-utilizam-como-identifica-las.ghtml' },
      { name: 'BBC News Brasil - report on ghost jobs', url: 'https://www.bbc.com/portuguese/articles/crg4x4rxe91o' },
      { name: 'Nexo Jornal - why companies open ghost jobs', url: 'https://www.nexojornal.com.br/expresso/2025/09/05/trabalho-processo-seletivo-vagas-fantasmas-estrategia-de-marketing-empresarial' }
    ],
    quotes: [
      { text: 'Nearly 1 in 3 employers kept job postings active for more than 30 days in 2025.', source: 'Clarify Capital, 2025' },
      { text: '37% of recruiters say they keep postings open because the company is "always open to new people."', source: 'Fast Company, 2025' },
      { text: 'Industry estimates put 18–22% of active postings as "ghost jobs."', source: 'Greenhouse / Entrepreneur, 2025' },
      { text: '27.4% of U.S. job listings on LinkedIn are likely ghost jobs.', source: 'ResumeUp.AI, via The Interview Guys' },
      { text: '93% of HR professionals admit to posting ghost jobs regularly or occasionally.', source: 'LiveCareer, 2025' },
      { text: '1 in 7 active job posts today is a ghost job.', source: 'Clarify Capital, 2026' },
      { text: '53% of job seekers have encountered fraudulent job postings.', source: 'Job Seeker Nation Report 2026, Employ' },
      { text: 'By 2028, 1 in 4 candidate profiles is expected to be fake, according to Gartner.', source: 'Gartner, via Fast Company Brasil' },
      { text: '69% of ghosted candidates say it happened after the interview process had already started.', source: 'LiveCareer, 2025' },
      { text: '40% of tech companies have posted at least one fake job listing.', source: 'Greenhouse / ResumeBuilder, via The Interview Guys' },
      { text: 'Los Angeles has the highest ghost job rate among major U.S. cities: 30.5%.', source: 'Greenhouse / ResumeBuilder, via The Interview Guys' }
    ],
    footer: { builtBy: 'Built by Jon Suguiyama with' }
  },

  es: {
    nav: { home: 'Inicio', checklist: 'Checklist Manual', analysis: 'Análisis Automático' },
    home: {
      title: '¿Esta vacante existe de verdad?',
      sub: 'Aprende a reconocer las señales antes de perder tiempo y energía en postulaciones que no van a ningún lado.',
      ctaChecklist: 'Checklist Manual',
      ctaPaste: 'Análisis Automático'
    },
    gaugeTicks: { low: 'real', high: 'fantasma' },
    verdicts: {
      none: { label: 'ninguna señal marcada', verdict: 'Parece una vacante real', status: 'neutral', detail: 'Sigue marcando lo que sepas sobre la vacante para refinar el resultado.' },
      low: { label: 'riesgo bajo', verdict: 'Probablemente real', status: 'good', detail: 'Pocas señales de alerta. Vale la pena invertir tiempo en una buena postulación.' },
      medium: { label: 'riesgo medio', verdict: 'Zona gris', status: 'warning', detail: 'Algunas señales de alerta. Aplica si es rápido, pero prioriza confirmar antes vía la página de carreras o un contacto directo.' },
      high: { label: 'riesgo alto', verdict: 'Probable vacante fantasma', status: 'critical', detail: 'Se activaron varias señales. Tu energía probablemente rinda más en otra vacante o en un contacto directo.' }
    },
    checklistPage: {
      title: 'Checklist Manual',
      sub: 'Marca lo que aplica a la vacante que estás analizando. Nada aquí está 100% garantizado - pero cuanto mayor el riesgo de "vacante fantasma", menos vale la pena invertir tiempo en esa postulación.',
      sectionSignals: 'señales de alerta'
    },
    analysisPage: {
      title: 'Análisis Automático',
      sub: 'Pega el texto completo de la vacante y responde los campos obligatorios - detectamos algunas señales automáticamente en el texto y calculamos el resultado con el resto.'
    },
    weightLabel: 'peso',
    resetLabel: 'reiniciar',
    scoreBadge: (n, t, w, m) => `señales: ${n} / ${t} · peso: ${w} / ${m}`,
    items: [
      'Publicada hace más de 30–45 días y sigue activa',
      'Sin rango salarial indicado',
      'Descripción genérica, copiada y pegada, sin nombre del equipo, del manager ni del stack específico',
      'Solo aparece en un agregador (LinkedIn/Indeed), no en la página de carreras de la empresa',
      'La misma vacante reaparece cada cierto tiempo ("evergreen")',
      'Silencio total después de aplicar, incluso tras 2+ semanas',
      'La empresa está en congelamiento de contrataciones o sin noticias recientes de expansión',
      'Postulación solo por formulario genérico, sin reclutador identificable',
      'Varias vacantes idénticas publicadas al mismo tiempo para el mismo puesto'
    ],
    paste: {
      sectionTitle: 'detalles de la vacante',
      textLabel: 'Pega aquí la descripción completa de la vacante *',
      daysLabel: '¿Cuántos días lleva publicada? *',
      aggregatorLabel: '¿Solo aparece en un agregador (LinkedIn/Indeed), no en el sitio oficial de la empresa? *',
      formLabel: '¿La postulación es solo por formulario genérico, sin reclutador identificable? *',
      duplicateLabel: '¿Hay varias vacantes idénticas publicadas al mismo tiempo? *',
      evergreenLabel: '¿Esta vacante ya reapareció antes ("evergreen")?',
      silenceLabel: '¿Postulaste y tuviste 2+ semanas de silencio total?',
      freezeLabel: '¿La empresa está en congelamiento de contrataciones o sin noticias de crecimiento?',
      yes: 'Sí', no: 'No', unsure: 'No sé',
      requiredNote: '* campos obligatorios para calcular un resultado',
      backLabel: '‹ atrás',
      nextLabel: 'Siguiente →',
      progressTemplate: (n) => `pregunta ${n} / 7`,
      doneMessage: 'Análisis completo - el resultado está actualizado en el medidor.',
      incomplete: { label: 'esperando datos', verdict: 'Completa los campos obligatorios', status: 'neutral', detail: 'Pega el texto de la vacante y responde los campos marcados con * para ver el resultado.' },
      autoSalaryAbsent: '🔎 Auto-detectado: no se encontró rango salarial en el texto',
      autoSalaryPresent: '🔎 Auto-detectado: rango salarial mencionado en el texto',
      autoGenericYes: '🔎 Auto-detectado: la descripción parece genérica/estándar (aproximado)',
      autoGenericNo: '🔎 Auto-detectado: la descripción parece específica (aproximado)'
    },
    sobrePage: {
      title: '¿Por qué existe una vacante fantasma?',
      sub: 'Las empresas mantienen publicaciones abiertas para parecer que están creciendo, para armar un banco de currículums para más adelante ("pipeline building"), o simplemente porque nadie se acordó de cerrarla. Para quien busca empleo, eso se convierte en tiempo y energía gastados en procesos que nunca van a responder.'
    },
    stepsTitle: 'ahorra tiempo',
    steps: [
      { lead: 'Revisa la página de carreras de la empresa.', rest: 'Si la vacante solo existe en LinkedIn/Indeed pero no en el sitio oficial, desconfía.' },
      { lead: 'Busca la insignia "contratando activamente"', rest: 'en LinkedIn, o publicaciones recientes de empleados mencionando el puesto.' },
      { lead: 'Contacta directamente a alguien del equipo', rest: '(reclutador o manager) en vez de solo postularte por el formulario - pregunta si la posición sigue activa.' },
      { lead: 'Compara la fecha de publicación con la de última actualización.', rest: 'Una vacante abierta hace 45+ días que se "actualiza" sola sugiere un script automático manteniendo vivo el pipeline, no una contratación real.' },
      { lead: 'Busca el nombre de la empresa + "despidos".', rest: 'Si la empresa recortó personal recientemente en el mismo equipo, la vacante podría ser solo una formalidad.' },
      { lead: 'Pega el título exacto de la vacante + el nombre de la empresa entre comillas en Google.', rest: 'Si la misma vacante aparece publicada en fechas muy distintas a lo largo de los meses, es una señal fuerte de que es evergreen.' }
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: '¿Cómo puedo ayudar?', a: '<p>Comparte esta app con quien esté en medio de una búsqueda de trabajo - cuanta más gente sepa reconocer una vacante fantasma, menos tiempo y energía perdemos todos en este juego.</p><p>Y la jugada más poderosa de todas: ¿conoces a alguien desempleado? ¿Conoces a alguien contratando? Conéctalos. Eso vale mucho más que cualquier vacante publicada - un currículum a veces se traba en el ATS, pero una recomendación de confianza salta la fila.</p><p>En este mercado medio bizarro de vacantes fantasma, la única forma de salir adelante es no soltarnos la mano.</p><p>Si quieres ver reportes de otras personas sobre empresas específicas, la comunidad mantiene algunas listas propias: <a href="https://docs.google.com/spreadsheets/d/1nW7kbqVz8XUCRFEgH5Y60YzmoOfl7IM9w4DAhb2kcX4/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">planilla comunitaria</a>, <a href="https://www.reddit.com/r/jobsearchhacks/comments/1fsefi1/official_ghost_job_list/" target="_blank" rel="noopener noreferrer">r/jobsearchhacks</a> y <a href="https://www.reddit.com/r/RemoteJobs/comments/1fsegmz/ghost_jobs_complete_list/" target="_blank" rel="noopener noreferrer">r/RemoteJobs</a>. Es contenido no verificado y mantenido por voluntarios, así que trátalo como un punto de partida para investigar, nunca como un veredicto sobre una empresa.</p>' },
      { q: 'Soy reclutador(a) y tengo más sugerencias - ¿cómo contribuyo?', a: `Abre un <a href="${GITHUB_REPO_URL}/issues" target="_blank" rel="noopener noreferrer">issue en GitHub</a> con tu sugerencia. Los comentarios de quienes están del lado de la contratación son especialmente bienvenidos.` },
      { q: '¿Cómo debería optimizar mi currículum para mejorar mis chances?', a: '<p>Ajusta las palabras clave de tu currículum a las de la descripción de la vacante, cuantifica resultados ("aumenté X en Y%") en vez de solo listar tareas, mantenlo en 1-2 páginas con un formato simple que pase los sistemas de seguimiento de candidatos (ATS), y asegúrate de que las habilidades requeridas de la vacante aparezcan claramente.</p><p>Un consejo medio contraintuitivo: postúlate solo a vacantes que realmente encajen con tu perfil - postularse a todo ("spray and pray") diluye tu energía y suele tener peor tasa de respuesta que pocas postulaciones bien dirigidas.</p>' },
      { q: '¿Estas señales garantizan que la vacante es falsa?', a: '<p>No. Esto es un termómetro, no una bola de cristal - las señales y los pesos vienen de investigaciones de mercado (fuentes más abajo) y de una heurística propia, no de datos sobre la vacante específica que estás revisando.</p><p>Puede fallar en ambos sentidos: una vacante real puede activar varias señales, y una vacante fantasma puede pasar desapercibida.</p><p>Trata el resultado como un punto de partida para investigar, nunca como un veredicto final - siempre vale la pena confirmar con los pasos prácticos al lado antes de descartar una vacante.</p>' },
      { q: '¿Vale la pena postularse aunque esté en la "zona gris"?', a: 'Generalmente sí, si la postulación es rápida. El costo de postularse es bajo comparado con el de ignorar una vacante real. Solo evita gastar horas personalizando currículum y carta para una vacante con muchas señales de alerta.' },
      { q: '¿La descripción de la vacante y la información que comparto aquí se guardan en algún lugar?', a: '<p>No. Todo el análisis corre localmente en tu navegador - ni el texto pegado ni las respuestas que completas se envían a ningún servidor.</p><p>Lo único que se registra de forma anónima es a través de Umami (una herramienta de analytics enfocada en privacidad, sin cookies): eventos agregados como qué veredicto apareció, qué idioma se seleccionó o qué página se visitó.</p><p>Guardamos eso solo para entender qué partes de la app se usan más y mejorarla - nunca para identificarte o ver el contenido de la vacante que analizaste.</p>' },
      { q: '¿Quién es Jon Suguiyama?', a: '<p>Empecé mi carrera en desarrollo web en 2007 - HTML, CSS y mucho ActionScript, construyendo esos banners animados "milagro de 16kb" que hoy parecen una lección temprana de ingeniería bajo restricción.</p><p>Después pasé más de una década liderando equipos creativos: Senior Art Director, Head of Design, Concept Artist - trabajando en campañas publicitarias nacionales, animación para el mercado de videojuegos competitivos y un videojuego construido desde cero dentro de una startup acelerada. Nunca dejé de programar del todo en el camino.</p><p>Hoy volví a donde empecé: construyendo aplicaciones full-stack con Angular, React, TypeScript y Node.js. Proyectos recientes incluyen un gestor de tareas drag-and-drop con sistema de demo en vivo (sesiones por token, PostgreSQL) y una herramienta de visualización de datos de CSV a dashboard (React, Recharts). Actualmente estoy profundizando mis habilidades de backend - Java, Spring Boot, infraestructura cloud - a través de un posgrado en Arquitectura de Software.</p><p>Lo que aporto de un poco diferente: me he sentado en la reunión con el cliente, en la sala de pitch y en el pipeline de producción - no solo en el código. Sé traducir un problema de negocio en algo que la gente realmente quiere usar, y comunico como alguien que ha pasado más de 15 años explicando decisiones técnicas a quienes no son técnicos.</p><p>Buscando oportunidades como desarrollador(a) full-stack, donde esa combinación de ejecución técnica y sensibilidad de producto aporte valor real.</p><p>Proyectos: <a href="https://github.com/jonsuguiyama" target="_blank" rel="noopener noreferrer">GitHub</a> · Portafolio de diseño: <a href="https://behance.net/jonsuguiyama" target="_blank" rel="noopener noreferrer">Behance</a></p>' }
    ],
    sourcesTitle: 'fuentes',
    sources: [
      { name: 'Clarify Capital - Ghost Jobs 2.0 (2025)', url: 'https://clarifycapital.com/ghost-jobs' },
      { name: 'Clarify Capital - análisis 2026', url: 'https://clarifycapital.com/ghost-jobs-2026' },
      { name: 'Fast Company - reclutadores sobre vacantes fantasma (2025)', url: 'https://www.fastcompany.com/91425252/recruiters-dish-on-ghost-jobs-why-companies-post-them-and-how-to-outsmart-them' },
      { name: 'Entrepreneur - cobertura del estudio de Greenhouse (2025)', url: 'https://www.entrepreneur.com/business-news/one-quarter-of-jobs-posted-online-are-fake-ghost-jobs-study/496683' },
      { name: 'The Interview Guys - Ghost Jobs Exposed', url: 'https://blog.theinterviewguys.com/ghost-jobs-exposed/' },
      { name: 'The Interview Guys - 2025 Ghosting Index', url: 'https://blog.theinterviewguys.com/the-2025-ghosting-index/' },
      { name: 'LiveCareer - RR.HH. admite publicar vacantes fantasma', url: 'https://www.livecareer.com/resources/careers/ghost-jobs' },
      { name: 'Congressional Research Service - "Ghost" Job Postings', url: 'https://www.congress.gov/crs-product/IF12977' },
      { name: 'Fast Company Brasil - las vacantes fantasma perjudican a candidatos y empresas', url: 'https://fastcompanybrasil.com/worklife/vagas-fantasma-estao-prejudicando-candidatos-e-empresas/' },
      { name: 'G1 - qué son las vacantes fantasma y cómo identificarlas', url: 'https://g1.globo.com/trabalho-e-carreira/noticia/2024/10/31/vagas-fantasmas-o-que-sao-por-que-empresas-utilizam-como-identifica-las.ghtml' },
      { name: 'BBC News Brasil - reportaje sobre vacantes fantasma', url: 'https://www.bbc.com/portuguese/articles/crg4x4rxe91o' },
      { name: 'Nexo Jornal - por qué las empresas abren vacantes fantasma', url: 'https://www.nexojornal.com.br/expresso/2025/09/05/trabalho-processo-seletivo-vagas-fantasmas-estrategia-de-marketing-empresarial' }
    ],
    quotes: [
      { text: 'Casi 1 de cada 3 empleadores mantuvo vacantes activas por más de 30 días en 2025.', source: 'Clarify Capital, 2025' },
      { text: '37% de los reclutadores dice mantener vacantes abiertas porque la empresa está "siempre abierta a nuevos talentos."', source: 'Fast Company, 2025' },
      { text: 'Estimaciones de la industria ubican entre 18% y 22% de las vacantes activas como "fantasma".', source: 'Greenhouse / Entrepreneur, 2025' },
      { text: '27,4% de las vacantes en EE. UU. en LinkedIn son probables vacantes fantasma.', source: 'ResumeUp.AI, vía The Interview Guys' },
      { text: '93% de los profesionales de RR.HH. admite publicar vacantes fantasma regular u ocasionalmente.', source: 'LiveCareer, 2025' },
      { text: '1 de cada 7 vacantes activas hoy es una vacante fantasma.', source: 'Clarify Capital, 2026' },
      { text: '53% de quienes buscan empleo ya se encontraron con vacantes fraudulentas.', source: 'Job Seeker Nation Report 2026, Employ' },
      { text: 'Para 2028, se espera que 1 de cada 4 perfiles de candidatos sea falso, según Gartner.', source: 'Gartner, vía Fast Company Brasil' },
      { text: '69% de los candidatos ghosteados dice que ocurrió después de que el proceso de entrevistas ya había comenzado.', source: 'LiveCareer, 2025' },
      { text: '40% de las empresas de tecnología ya publicó al menos una vacante fantasma.', source: 'Greenhouse / ResumeBuilder, via The Interview Guys' },
      { text: 'Los Ángeles tiene la tasa más alta de vacantes fantasma entre las grandes ciudades de EE. UU.: 30,5%.', source: 'Greenhouse / ResumeBuilder, via The Interview Guys' }
    ],
    footer: { builtBy: 'Hecho por Jon Suguiyama con' }
  }
};
