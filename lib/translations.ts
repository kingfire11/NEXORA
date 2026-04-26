import type { Lang } from "./i18n";

type Dict = {
  nav: {
    label: string;
    links: { label: string; href: string }[];
    cta: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    proof: string[];
    scroll: string;
  };
  trust: { label: string };
  services: {
    eyebrow: string;
    title: string;
    items: {
      num: string;
      title: string;
      desc: string;
      chips: string[];
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    railLabel: string;
    railSub: string;
    steps: { num: string; title: string; duration: string; desc: string }[];
  };
  cases: {
    eyebrow: string;
    title: string;
    read: string;
    items: {
      slug: string;
      num: string;
      client: string;
      category: string;
      metric: string;
      metricLabel: string;
      desc: string;
    }[];
  };
  metrics: { items: { value: number; suffix: string; label: string }[] };
  stack: { eyebrow: string; title: string };
  pricing: {
    eyebrow: string;
    title: string;
    mostChosen: string;
    startWith: string;
    tiers: {
      name: string;
      price: string;
      cadence: string;
      audience: string;
      features: string[];
      highlight: boolean;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    placeholder: string;
    submit: string;
    orLine: string;
    mailSubject: string;
  };
  footer: {
    columns: { title: string; links: string[] }[];
    legal: string;
    version: string;
  };
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav: {
      label: "[ AI · Automation · 2026 ]",
      links: [
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Work", href: "#work" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Book intro call",
      menu: "Menu",
    },
    hero: {
      eyebrow: "( 01 — AUTOMATION STUDIO )",
      title: "We automate the work that scales your business.",
      sub: "NEXORA builds AI agents, sales workflows, and support bots that replace your most repetitive hours — so your team ships the work only humans can.",
      ctaPrimary: "Start automating",
      ctaSecondary: "See our work",
      proof: [
        "Trusted by 50+ teams",
        "12 000+ hours saved annually",
        "87% faster support",
      ],
      scroll: "SCROLL",
    },
    trust: { label: "TRUSTED BY OPERATORS AT —" },
    services: {
      eyebrow: "( 02 — WHAT WE BUILD )",
      title: "Four systems. One operating layer.",
      items: [
        {
          num: "01",
          title: "Sales Automation",
          desc: "Lead scoring, AI-SDR sequences, and CRM choreography that turns inbound chaos into a predictable pipeline.",
          chips: ["Bitrix24", "amoCRM", "HubSpot", "Apollo"],
        },
        {
          num: "02",
          title: "Support Bots",
          desc: "RAG-powered agents on WhatsApp, Telegram, and your site — answering 80% of tickets before a human reads them.",
          chips: ["WhatsApp API", "Telegram", "Claude", "RAG"],
        },
        {
          num: "03",
          title: "CRM & Workflow",
          desc: "Custom n8n and Make pipelines that stitch your stack into one nervous system, with audit trails and rollbacks.",
          chips: ["n8n", "Make", "Zapier", "Supabase"],
        },
        {
          num: "04",
          title: "AI Agents",
          desc: "Bespoke agents that read inboxes, draft reports, and run research overnight while your team sleeps.",
          chips: ["Claude", "OpenAI", "Vercel AI", "LangGraph"],
        },
      ],
    },
    process: {
      eyebrow: "( 03 — HOW WE WORK )",
      title: "From audit to autopilot in 6 weeks.",
      railLabel: "04 STEPS · 6 WEEKS · ONE SYSTEM",
      railSub: "A repeatable runway from messy ops to autonomous workflows — without freezing your team for a quarter.",
      steps: [
        { num: "01", title: "Audit", duration: "Week 1", desc: "We map every manual touchpoint in your sales and support funnel and quantify hours lost. You get a heatmap and a savings forecast." },
        { num: "02", title: "Design", duration: "Week 2", desc: "We architect the automation: which agents, which integrations, which guardrails. You approve before a single line of code." },
        { num: "03", title: "Build", duration: "Weeks 3–5", desc: "We ship in weekly increments. You see workflows running on staging by week 3 and start training your team." },
        { num: "04", title: "Scale", duration: "Week 6+", desc: "We hand off with full documentation, dashboards, and a 30-day SLA. Then we come back monthly to push the next 10x." },
      ],
    },
    cases: {
      eyebrow: "( 04 — SELECTED WORK )",
      title: "Numbers do the talking.",
      read: "READ CASE",
      items: [
        { slug: "telco-operator", num: "01", client: "Telco Operator", category: "Support automation", metric: "−87%", metricLabel: "response time", desc: "24/7 multilingual WhatsApp agent answering 14 000 tickets/month with 92% CSAT." },
        { slug: "b2b-saas", num: "02", client: "B2B SaaS", category: "Sales pipeline", metric: "+312%", metricLabel: "qualified leads", desc: "AI-SDR sequences across LinkedIn + email, fully integrated with HubSpot." },
        { slug: "fnb-chain", num: "03", client: "F&B Chain", category: "Internal ops", metric: "12 000h", metricLabel: "saved per year", desc: "n8n workflows replaced 4 manual reporting roles across 23 venues." },
      ],
    },
    metrics: {
      items: [
        { value: 50, suffix: "+", label: "teams operating on NEXORA infrastructure" },
        { value: 12000, suffix: "h", label: "of human work automated annually" },
        { value: 87, suffix: "%", label: "average reduction in first-response time" },
      ],
    },
    stack: { eyebrow: "( 05 — OUR STACK )", title: "Built on the tools you already trust." },
    pricing: {
      eyebrow: "( 06 — ENGAGEMENT MODELS )",
      title: "Pick a tempo. Switch any time.",
      mostChosen: "MOST CHOSEN",
      startWith: "Start with",
      tiers: [
        { name: "Starter", price: "$2 400", cadence: "/ mo", audience: "Founders shipping their first automation", features: ["1 workflow live", "Weekly check-in", "Email support", "30-day SLA"], highlight: false },
        { name: "Growth", price: "$6 800", cadence: "/ mo", audience: "Teams scaling support and sales", features: ["Up to 4 workflows", "Dedicated PM", "Slack channel", "Monthly strategy", "99% uptime SLA"], highlight: true },
        { name: "Scale", price: "Let’s talk", cadence: "", audience: "Operators with 50+ employees", features: ["Unlimited workflows", "Embedded engineer", "Custom agents", "24/7 on-call", "Quarterly roadmap"], highlight: false },
      ],
    },
    faq: {
      eyebrow: "( 07 — FREQUENTLY ASKED )",
      title: "Quick answers.",
      items: [
        { q: "How fast can we go live?", a: "First workflow in production within 14 days. Full system in 6 weeks." },
        { q: "Do you replace our team?", a: "No. We replace the parts of their day that drain them. Your people get back to work that compounds." },
        { q: "What about data privacy?", a: "Self-hosted options on AWS / GCP / your own infra. We sign NDA before the first call and DPA before any data flows." },
        { q: "Which CRMs do you integrate with?", a: "Bitrix24, amoCRM, HubSpot, Salesforce, Pipedrive, Zoho. Anything with an API — we wire it." },
        { q: "Can the bots speak Russian and Kazakh?", a: "Yes. Native-quality output in 40+ languages out of the box, including KZ, RU, UZ, TR, AR." },
        { q: "What if the AI gets it wrong?", a: "Every agent has guardrails, fallbacks to humans, and full audit logs. You see every decision, every input, every output." },
        { q: "Do we own the workflows?", a: "Yes. Code, prompts, and infra are yours from day one. No lock-in, no rev-share." },
        { q: "What's not a good fit?", a: "Highly regulated workflows requiring deterministic output (legal contracts, medical diagnosis). We'll tell you upfront." },
      ],
    },
    cta: {
      eyebrow: "( 08 — START THE WORK )",
      title: "Let’s automate.",
      placeholder: "your@email.com",
      submit: "Send",
      orLine: "OR — hi@nexora.studio · ALMATY / DUBAI · UTC+5",
      mailSubject: "Intro call request",
    },
    footer: {
      columns: [
        { title: "Studio", links: ["About", "Manifesto", "Careers"] },
        { title: "Work", links: ["Cases", "Process", "Stack"] },
        { title: "Resources", links: ["Blog", "Playbooks", "Open source"] },
        { title: "Contact", links: ["hi@nexora.studio", "+7 771 626 83 62", "Almaty · Dubai"] },
      ],
      legal: "© 2026 NEXORA STUDIO · BUILT WITH CLAUDE · ALMATY 43.2°N 76.9°E",
      version: "v.1.0 — AUTOMATION OS",
    },
  },
  ru: {
    nav: {
      label: "[ AI · Автоматизация · 2026 ]",
      links: [
        { label: "Услуги", href: "#services" },
        { label: "Процесс", href: "#process" },
        { label: "Работы", href: "#work" },
        { label: "Тарифы", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Записаться на звонок",
      menu: "Меню",
    },
    hero: {
      eyebrow: "( 01 — СТУДИЯ АВТОМАТИЗАЦИИ )",
      title: "Автоматизируем работу, которая масштабирует ваш бизнес.",
      sub: "NEXORA создаёт AI-агентов, продажные воронки и саппорт-ботов, которые забирают самые рутинные часы — чтобы ваша команда занималась тем, что под силу только людям.",
      ctaPrimary: "Начать автоматизацию",
      ctaSecondary: "Посмотреть кейсы",
      proof: [
        "50+ команд работают с нами",
        "12 000+ часов экономии в год",
        "Поддержка быстрее на 87%",
      ],
      scroll: "ВНИЗ",
    },
    trust: { label: "С НАМИ РАБОТАЮТ ОПЕРАТОРЫ —" },
    services: {
      eyebrow: "( 02 — ЧТО МЫ СТРОИМ )",
      title: "Четыре системы. Один операционный слой.",
      items: [
        {
          num: "01",
          title: "Автоматизация продаж",
          desc: "Скоринг лидов, AI-SDR последовательности и оркестрация CRM, превращающие хаос входящих в предсказуемый пайплайн.",
          chips: ["Bitrix24", "amoCRM", "HubSpot", "Apollo"],
        },
        {
          num: "02",
          title: "Боты поддержки",
          desc: "RAG-агенты в WhatsApp, Telegram и на сайте — закрывают 80% тикетов до того, как до них дойдёт человек.",
          chips: ["WhatsApp API", "Telegram", "Claude", "RAG"],
        },
        {
          num: "03",
          title: "CRM и Workflow",
          desc: "Кастомные пайплайны на n8n и Make сшивают ваш стек в одну нервную систему, с аудитом и откатами.",
          chips: ["n8n", "Make", "Zapier", "Supabase"],
        },
        {
          num: "04",
          title: "AI-агенты",
          desc: "Агенты, которые читают почту, пишут отчёты и проводят ресёрч ночью — пока команда спит.",
          chips: ["Claude", "OpenAI", "Vercel AI", "LangGraph"],
        },
      ],
    },
    process: {
      eyebrow: "( 03 — КАК МЫ РАБОТАЕМ )",
      title: "От аудита до автопилота — за 6 недель.",
      railLabel: "04 ШАГА · 6 НЕДЕЛЬ · ОДНА СИСТЕМА",
      railSub: "Воспроизводимый путь от хаоса в операциях до автономных воркфлоу — без заморозки команды на квартал.",
      steps: [
        { num: "01", title: "Аудит", duration: "Неделя 1", desc: "Мы картируем каждую ручную точку в воронке продаж и поддержки и считаем потерянные часы. На выходе — теплокарта и прогноз экономии." },
        { num: "02", title: "Дизайн", duration: "Неделя 2", desc: "Проектируем автоматизацию: какие агенты, какие интеграции, какие ограничители. Вы согласовываете до первой строки кода." },
        { num: "03", title: "Сборка", duration: "Недели 3–5", desc: "Поставляем еженедельными инкрементами. К 3-й неделе воркфлоу уже работают на стейдже и команда начинает обучение." },
        { num: "04", title: "Масштаб", duration: "Неделя 6+", desc: "Передаём с полной документацией, дашбордами и SLA на 30 дней. Дальше возвращаемся ежемесячно, чтобы вытолкнуть следующий 10x." },
      ],
    },
    cases: {
      eyebrow: "( 04 — ИЗБРАННЫЕ КЕЙСЫ )",
      title: "За нас говорят цифры.",
      read: "СМОТРЕТЬ КЕЙС",
      items: [
        { slug: "telco-operator", num: "01", client: "Телеком-оператор", category: "Автоматизация поддержки", metric: "−87%", metricLabel: "время ответа", desc: "Многоязычный WhatsApp-агент 24/7 на 14 000 тикетов/мес. с CSAT 92%." },
        { slug: "b2b-saas", num: "02", client: "B2B SaaS", category: "Воронка продаж", metric: "+312%", metricLabel: "квалифицированных лидов", desc: "AI-SDR последовательности в LinkedIn и email, полностью интегрированы с HubSpot." },
        { slug: "fnb-chain", num: "03", client: "F&B сеть", category: "Внутренние операции", metric: "12 000ч", metricLabel: "экономии в год", desc: "n8n-воркфлоу заменили 4 ручные роли отчётности в 23 заведениях." },
      ],
    },
    metrics: {
      items: [
        { value: 50, suffix: "+", label: "команд работают на инфраструктуре NEXORA" },
        { value: 12000, suffix: "ч", label: "человеческой работы автоматизируется ежегодно" },
        { value: 87, suffix: "%", label: "среднее сокращение времени первого ответа" },
      ],
    },
    stack: { eyebrow: "( 05 — НАШ СТЕК )", title: "Строим на инструментах, которым вы уже доверяете." },
    pricing: {
      eyebrow: "( 06 — МОДЕЛИ СОТРУДНИЧЕСТВА )",
      title: "Выберите темп. Меняйте в любой момент.",
      mostChosen: "ЧАЩЕ ВСЕГО",
      startWith: "Начать с",
      tiers: [
        { name: "Starter", price: "$2 400", cadence: "/ мес", audience: "Фаундерам, запускающим первую автоматизацию", features: ["1 воркфлоу в проде", "Еженедельный созвон", "Поддержка по почте", "SLA 30 дней"], highlight: false },
        { name: "Growth", price: "$6 800", cadence: "/ мес", audience: "Командам, масштабирующим продажи и поддержку", features: ["До 4 воркфлоу", "Выделенный PM", "Канал в Slack", "Ежемесячная стратегия", "SLA 99% аптайма"], highlight: true },
        { name: "Scale", price: "По запросу", cadence: "", audience: "Операторам с 50+ сотрудниками", features: ["Безлимит воркфлоу", "Встроенный инженер", "Кастомные агенты", "On-call 24/7", "Квартальный roadmap"], highlight: false },
      ],
    },
    faq: {
      eyebrow: "( 07 — ЧАСТЫЕ ВОПРОСЫ )",
      title: "Короткие ответы.",
      items: [
        { q: "Как быстро запуск?", a: "Первый воркфлоу в проде за 14 дней. Полная система — за 6 недель." },
        { q: "Вы заменяете нашу команду?", a: "Нет. Мы забираем те части дня, которые их выматывают. Люди возвращаются к работе, которая накапливается." },
        { q: "Что с приватностью данных?", a: "Self-hosted на AWS / GCP / вашей инфре. Подписываем NDA до первого звонка и DPA — до того, как пойдут данные." },
        { q: "С какими CRM работаете?", a: "Bitrix24, amoCRM, HubSpot, Salesforce, Pipedrive, Zoho. Всё, у чего есть API — подключим." },
        { q: "Боты говорят на русском и казахском?", a: "Да. Нативное качество в 40+ языках из коробки, включая KZ, RU, UZ, TR, AR." },
        { q: "Что если AI ошибётся?", a: "У каждого агента — guardrails, фолбэки на человека и полные аудит-логи. Вы видите каждое решение, каждый ввод, каждый вывод." },
        { q: "Воркфлоу принадлежат нам?", a: "Да. Код, промпты и инфра — ваши с первого дня. Никакого лок-ина и rev-share." },
        { q: "Что не подходит?", a: "Жёстко регулируемые сценарии с детерминированным выводом (юр. договоры, медицинская диагностика). Скажем сразу." },
      ],
    },
    cta: {
      eyebrow: "( 08 — НАЧАТЬ РАБОТУ )",
      title: "Давайте автоматизировать.",
      placeholder: "ваш@email.com",
      submit: "Отправить",
      orLine: "ИЛИ — hi@nexora.studio · АЛМАТЫ / ДУБАЙ · UTC+5",
      mailSubject: "Запрос на интро-звонок",
    },
    footer: {
      columns: [
        { title: "Студия", links: ["О нас", "Манифест", "Карьера"] },
        { title: "Работы", links: ["Кейсы", "Процесс", "Стек"] },
        { title: "Ресурсы", links: ["Блог", "Плейбуки", "Open source"] },
        { title: "Контакты", links: ["hi@nexora.studio", "+7 771 626 83 62", "Алматы · Дубай"] },
      ],
      legal: "© 2026 NEXORA STUDIO · СОЗДАНО С CLAUDE · АЛМАТЫ 43.2°С.Ш. 76.9°В.Д.",
      version: "v.1.0 — AUTOMATION OS",
    },
  },
};
