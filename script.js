// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Active nav link
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));

document.querySelectorAll('.area-item, .ind-item, .pub-item, .eco-logos, .tech-inline, .about-content, .about-photo, .about-stats').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i * 0.08, 0.4)}s`;
    revealObserver.observe(el);
});

// Language
const langBtn = document.getElementById('langBtn');
const langLabel = document.getElementById('langLabel');
const langDropdown = document.getElementById('langDropdown');
const browserLang = navigator.language.slice(0, 2);
const supportedLangs = ['es', 'en', 'pt'];
const detectedLang = supportedLangs.includes(browserLang) ? browserLang : 'es';
let currentLang = localStorage.getItem('preferred-language') || detectedLang;

langBtn.addEventListener('click', e => {
    e.stopPropagation();
    langBtn.classList.toggle('open');
    langDropdown.classList.toggle('open');
});

document.addEventListener('click', () => {
    langBtn.classList.remove('open');
    langDropdown.classList.remove('open');
});

langDropdown.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        setLang(btn.dataset.lang);
        langBtn.classList.remove('open');
        langDropdown.classList.remove('open');
    });
});

function setLang(lang) {
    currentLang = lang;
    langLabel.textContent = lang.toUpperCase();
    langDropdown.querySelectorAll('button').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if (T[lang] && T[lang][key]) el.textContent = T[lang][key];
    });
    localStorage.setItem('preferred-language', lang);
}

const T = {
    es: {
        nav_about: "Acerca",
        nav_areas: "Áreas",
        nav_industries: "Industrias",
        nav_technologies: "Tecnologías",
        hero_author: "Jerson Rodas",
        hero_tag: "Industrial AI",
        hero_headline: "Donde la tecnología de frontera se encuentra con la realidad operativa",
        hero_sub: "Estrategia, IA y DataOps para la industria pesada",
        hero_scroll: "Scroll",
        section_about: "Acerca de mí",
        section_areas: "Áreas de Interés",
        section_industries: "Industrias",
        section_publications: "Insights",
        pub1_title: "Industrial AI no es lo mismo que Advanced Analytics",
        pub2_title: "Deja de pensar en pilotos de IA Industrial",
        pub3_title: "La gran promesa de la IA Industrial",
        pub4_title: "Aplicaciones de IA Generativa en Plantas Industriales",
        pub5_title: "¿Tiene sentido mover toda la data industrial a la nube?",
        pub6_title: "Historiadores de Procesos vs Bases de datos de series temporales",
        section_ecosystem: "Ecosistema Industrial",
        section_technologies: "Stack",
        about_text1: "Con más de 15 años en la industria pesada, he construido una trayectoria que conecta la operación de planta con la estrategia de transformación digital. Comencé liderando equipos de producción y optimización en energía y manufactura, y esa base operativa hoy me permite dirigir iniciativas de IA industrial y DataOps con una visión que entiende tanto el negocio como la tecnología.",
        about_text2: "Hoy lidero proyectos de consultoría y ejecución en las principales economías de Latinoamérica, en conjunto con vendors de tecnología de frontera de Estados Unidos y Europa. Esa exposición me permite traducir lo que es posible con Industria 4.0 e IA a lo que realmente genera valor en el contexto operativo de nuestra región, y liderar esos proyectos en español, inglés y portugués de forma natural.",
        stat_years: "Años en industria pesada",
        stat_scope: "Consultoría y ejecución",
        stat_languages: "Idiomas",
        stat_industries: "Industrias",
        area1_title: "Estrategia Digital Industrial",
        area1_desc: "Definición de hojas de ruta para la transformación digital en operaciones industriales: desde la arquitectura OT-IT que conecta SCADA, historiadores y PLCs con plataformas cloud, hasta la adopción de IIoT y digital twins como pilares de visibilidad operativa. El foco está en alinear la tecnología con los objetivos de negocio, asegurando gobernanza de datos y escalabilidad desde el diseño.",
        area2_title: "Industrial DataOps",
        area2_desc: "Liderazgo en la construcción de la capa de datos que sostiene cualquier iniciativa de IA industrial. Pipelines reproducibles, versionado de datos y modelos, despliegue continuo de ML y orquestación entre el borde y la nube. El objetivo es que los datos operativos fluyan con calidad, trazabilidad y a la velocidad que el negocio necesita.",
        area3_title: "IA Industrial y Optimización de Procesos",
        area3_desc: "Dirección de proyectos donde la inteligencia artificial se aplica directamente al contexto productivo: modelos predictivos y prescriptivos, detección de anomalías, simulación híbrida, MPC y control autónomo de procesos. No se trata solo de construir modelos, sino de llevarlos a producción y que generen impacto medible en throughput, costos y sostenibilidad.",
        area4_title: "IA Agéntica",
        area4_desc: "Diseño y despliegue de agentes autónomos para operaciones industriales. Orquestación multi-agente, integración directa con sistemas de planta y toma de decisiones en tiempo real sin intervención humana. Es el área donde convergen las tecnologías de frontera con la realidad operativa, y donde el valor diferencial se construye hoy.",
        industry1_title: "Minería",
        industry1_short: "Circuitos de flotación, molienda, control cerrado y DataOps OT-IT.",
        industry2_title: "Energía",
        industry2_short: "Mantenimiento predictivo, pronósticos de demanda y gemelos digitales.",
        industry3_title: "Manufactura",
        industry3_short: "Detección de anomalías, balance de líneas y ajuste automático de calidad.",
        industry4_title: "Petróleo y Gas",
        industry4_short: "Monitorización de pozos, detección de fugas y simulación de flujo.",
        industry5_title: "Química",
        industry5_short: "Control de reactores, simulación híbrida y optimización energética.",
        tech_opc_ua: "OPC UA", tech_mqtt: "MQTT", tech_scada: "SCADA",
        tech_historians: "Historiadores", tech_sparkplug: "Sparkplug B", tech_rest: "REST APIs",
        tech_uns: "UNS", tech_pipelines: "Pipelines de Datos", tech_edge: "Edge Computing",
        tech_cicd: "CI/CD Modelos", tech_versioning: "Versionado de Datos",
        tech_cloud: "Cloud Deployment",
        tech_python: "Python", tech_sql: "SQL", tech_docker: "Docker",
        tech_kubernetes: "Kubernetes", tech_tensorflow: "TensorFlow", tech_pytorch: "PyTorch",
        tech_scikit: "Scikit-learn", tech_langchain: "LangChain",
        tech_llm: "LLM",
        tech_claude: "Claude", tech_claude_code: "Claude Code",
        tech_anthropic_sdk: "Anthropic SDK", tech_openai_api: "OpenAI API",
        tech_mcp: "MCP", tech_a2a: "A2A Protocol",
        tech_digital_twins: "Gemelos Digitales", tech_plant_sim: "Simuladores de Planta"
    },
    en: {
        nav_about: "About",
        nav_areas: "Areas",
        nav_industries: "Industries",
        nav_technologies: "Technologies",
        hero_author: "Jerson Rodas",
        hero_tag: "Industrial AI",
        hero_headline: "Where frontier technology meets operational reality",
        hero_sub: "Strategy, AI and DataOps for heavy industry",
        hero_scroll: "Scroll",
        section_about: "About Me",
        section_areas: "Areas of Interest",
        section_industries: "Industries",
        section_publications: "Insights",
        pub1_title: "Industrial AI is not the same as Advanced Analytics",
        pub2_title: "Stop thinking about Industrial AI pilots",
        pub3_title: "The great promise of Industrial AI",
        pub4_title: "Generative AI applications in Industrial Plants",
        pub5_title: "Does it make sense to move all industrial data to the cloud?",
        pub6_title: "Process Historians vs Time Series Databases",
        section_ecosystem: "Industrial Ecosystem",
        section_technologies: "Stack",
        about_text1: "With over 15 years in heavy industry, I have built a career that connects plant operations with digital transformation strategy. I started leading production and optimization teams in energy and manufacturing, and that operational foundation now allows me to direct industrial AI and DataOps initiatives with a vision that understands both the business and the technology.",
        about_text2: "Today I lead consulting and execution projects across Latin America's major economies, working alongside frontier technology vendors from the United States and Europe. This exposure allows me to translate what is possible with Industry 4.0 and AI into what actually creates value in the operational context of our region, and to lead those projects in Spanish, English, and Portuguese naturally.",
        stat_years: "Years in heavy industry",
        stat_scope: "Consulting and execution",
        stat_languages: "Languages",
        stat_industries: "Industries",
        area1_title: "Industrial Digital Strategy",
        area1_desc: "Defining roadmaps for digital transformation in industrial operations: from OT-IT architecture connecting SCADA, historians, and PLCs with cloud platforms, to IIoT and digital twin adoption as pillars of operational visibility. The focus is on aligning technology with business objectives, ensuring data governance and scalability by design.",
        area2_title: "Industrial DataOps",
        area2_desc: "Leading the construction of the data layer that supports any industrial AI initiative. Reproducible pipelines, data and model versioning, continuous ML deployment, and edge-to-cloud orchestration. The goal is for operational data to flow with quality, traceability, and at the speed the business demands.",
        area3_title: "Industrial AI and Process Optimization",
        area3_desc: "Directing projects where artificial intelligence is applied directly to the production context: predictive and prescriptive models, anomaly detection, hybrid simulation, MPC, and autonomous process control. It is not just about building models, but about taking them to production and generating measurable impact on throughput, costs, and sustainability.",
        area4_title: "Agentic AI",
        area4_desc: "Designing and deploying autonomous agents for industrial operations. Multi-agent orchestration, direct integration with plant systems, and real-time decision-making without human intervention. This is the area where frontier technologies converge with operational reality, and where differential value is being built today.",
        industry1_title: "Mining",
        industry1_short: "Flotation circuits, grinding, closed-loop control, and OT-IT DataOps.",
        industry2_title: "Energy",
        industry2_short: "Predictive maintenance, demand forecasting, and digital twins.",
        industry3_title: "Manufacturing",
        industry3_short: "Anomaly detection, line balancing, and automatic quality adjustment.",
        industry4_title: "Oil & Gas",
        industry4_short: "Well monitoring, leak detection, and flow simulation.",
        industry5_title: "Chemical",
        industry5_short: "Reactor control, hybrid simulation, and energy optimization.",
        tech_opc_ua: "OPC UA", tech_mqtt: "MQTT", tech_scada: "SCADA",
        tech_historians: "Historians", tech_sparkplug: "Sparkplug B", tech_rest: "REST APIs",
        tech_uns: "UNS", tech_pipelines: "Data Pipelines", tech_edge: "Edge Computing",
        tech_cicd: "Model CI/CD", tech_versioning: "Data Versioning",
        tech_cloud: "Cloud Deployment",
        tech_python: "Python", tech_sql: "SQL", tech_docker: "Docker",
        tech_kubernetes: "Kubernetes", tech_tensorflow: "TensorFlow", tech_pytorch: "PyTorch",
        tech_scikit: "Scikit-learn", tech_langchain: "LangChain",
        tech_llm: "LLM",
        tech_claude: "Claude", tech_claude_code: "Claude Code",
        tech_anthropic_sdk: "Anthropic SDK", tech_openai_api: "OpenAI API",
        tech_mcp: "MCP", tech_a2a: "A2A Protocol",
        tech_digital_twins: "Digital Twins", tech_plant_sim: "Plant Simulators"
    },
    pt: {
        nav_about: "Sobre",
        nav_areas: "Áreas",
        nav_industries: "Indústrias",
        nav_technologies: "Tecnologias",
        hero_author: "Jerson Rodas",
        hero_tag: "Industrial AI",
        hero_headline: "Onde a tecnologia de fronteira encontra a realidade operacional",
        hero_sub: "Estratégia, IA e DataOps para a indústria pesada",
        hero_scroll: "Scroll",
        section_about: "Sobre Mim",
        section_areas: "Áreas de Interesse",
        section_industries: "Indústrias",
        section_publications: "Insights",
        pub1_title: "Industrial AI não é o mesmo que Advanced Analytics",
        pub2_title: "Pare de pensar em pilotos de IA Industrial",
        pub3_title: "A grande promessa da IA Industrial",
        pub4_title: "Aplicações de IA Generativa em Plantas Industriais",
        pub5_title: "Faz sentido mover toda a data industrial para a nuvem?",
        pub6_title: "Historiadores de Processos vs Bancos de dados de séries temporais",
        section_ecosystem: "Ecossistema Industrial",
        section_technologies: "Stack",
        about_text1: "Com mais de 15 anos na indústria pesada, construí uma trajetória que conecta a operação de planta com a estratégia de transformação digital. Comecei liderando equipes de produção e otimização em energia e manufatura, e essa base operacional hoje me permite dirigir iniciativas de IA industrial e DataOps com uma visão que entende tanto o negócio quanto a tecnologia.",
        about_text2: "Hoje lidero projetos de consultoria e execução nas principais economias da América Latina, em conjunto com vendors de tecnologia de fronteira dos Estados Unidos e Europa. Essa exposição me permite traduzir o que é possível com Indústria 4.0 e IA no que realmente gera valor no contexto operacional da nossa região, e liderar esses projetos em espanhol, inglês e português de forma natural.",
        stat_years: "Anos na indústria pesada",
        stat_scope: "Consultoria e execução",
        stat_languages: "Idiomas",
        stat_industries: "Indústrias",
        area1_title: "Estratégia Digital Industrial",
        area1_desc: "Definição de roteiros para a transformação digital em operações industriais: desde a arquitetura OT-IT que conecta SCADA, historiadores e PLCs com plataformas cloud, até a adoção de IIoT e gêmeos digitais como pilares de visibilidade operacional. O foco está em alinhar a tecnologia com os objetivos de negócio, assegurando governança de dados e escalabilidade desde o desenho.",
        area2_title: "Industrial DataOps",
        area2_desc: "Liderança na construção da camada de dados que sustenta qualquer iniciativa de IA industrial. Pipelines reproduzíveis, versionamento de dados e modelos, deploy contínuo de ML e orquestração entre borda e nuvem. O objetivo é que os dados operacionais fluam com qualidade, rastreabilidade e na velocidade que o negócio precisa.",
        area3_title: "IA Industrial e Otimização de Processos",
        area3_desc: "Direção de projetos onde a inteligência artificial se aplica diretamente ao contexto produtivo: modelos preditivos e prescritivos, detecção de anomalias, simulação híbrida, MPC e controle autônomo de processos. Não se trata apenas de construir modelos, mas de levá-los à produção e gerar impacto mensurável em throughput, custos e sustentabilidade.",
        area4_title: "IA Agêntica",
        area4_desc: "Desenho e deploy de agentes autônomos para operações industriais. Orquestração multi-agente, integração direta com sistemas de planta e tomada de decisões em tempo real sem intervenção humana. É a área onde convergem as tecnologias de fronteira com a realidade operacional, e onde o valor diferencial se constrói hoje.",
        industry1_title: "Mineração",
        industry1_short: "Circuitos de flotação, moagem, controle em malha fechada e DataOps OT-IT.",
        industry2_title: "Energia",
        industry2_short: "Manutenção preditiva, previsões de demanda e gêmeos digitais.",
        industry3_title: "Manufatura",
        industry3_short: "Detecção de anomalias, balanceamento de linhas e ajuste automático de qualidade.",
        industry4_title: "Petróleo e Gás",
        industry4_short: "Monitoramento de poços, detecção de vazamentos e simulação de fluxo.",
        industry5_title: "Química",
        industry5_short: "Controle de reatores, simulação híbrida e otimização energética.",
        tech_opc_ua: "OPC UA", tech_mqtt: "MQTT", tech_scada: "SCADA",
        tech_historians: "Historiadores", tech_sparkplug: "Sparkplug B", tech_rest: "REST APIs",
        tech_uns: "UNS", tech_pipelines: "Pipelines de Dados", tech_edge: "Edge Computing",
        tech_cicd: "CI/CD de Modelos", tech_versioning: "Versionamento de Dados",
        tech_cloud: "Cloud Deployment",
        tech_python: "Python", tech_sql: "SQL", tech_docker: "Docker",
        tech_kubernetes: "Kubernetes", tech_tensorflow: "TensorFlow", tech_pytorch: "PyTorch",
        tech_scikit: "Scikit-learn", tech_langchain: "LangChain",
        tech_llm: "LLM",
        tech_claude: "Claude", tech_claude_code: "Claude Code",
        tech_anthropic_sdk: "Anthropic SDK", tech_openai_api: "OpenAI API",
        tech_mcp: "MCP", tech_a2a: "A2A Protocol",
        tech_digital_twins: "Gêmeos Digitais", tech_plant_sim: "Simuladores de Planta"
    }
};

setLang(currentLang);

// Dynamic footer year
document.getElementById('footerYear').textContent = new Date().getFullYear();