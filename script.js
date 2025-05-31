// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlight
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#2196f3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    const particles = document.querySelector('.particles');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (particles) {
        particles.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Animated counter for statistics (if needed in future)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.area-card, .industry-card, .tech-category').forEach(el => {
    observer.observe(el);
});

// Typing effect for hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 50);
        }, 1500);
    }
});

// Smooth reveal animations for sections
const revealSections = document.querySelectorAll('.section');
const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -150px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-revealed');
        }
    });
}, revealOptions);

revealSections.forEach(section => {
    sectionObserver.observe(section);
});

// Add CSS for section reveal animation
const style = document.createElement('style');
style.textContent = `
    .section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .section-revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-link.active {
        color: #1e3a8a;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;

document.head.appendChild(style);

// Preloader (optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 10px 30px rgba(30, 58, 138, 0.4);
    transform: translateY(100px);
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(backToTopBtn);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.transform = 'translateY(0)';
    } else {
        backToTopBtn.style.transform = 'translateY(100px)';
    }
});

// Back to top functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effects for buttons
backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'translateY(0) scale(1.1)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'translateY(0) scale(1)';
});

// Translations object
const translations = {
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_about: "Acerca de mí",
        nav_areas: "Áreas de Interés",
        nav_industries: "Industrias",
        nav_technologies: "Tecnologías",
        nav_contact: "Contacto",
        
        // Hero Section
        hero_title: "Transformación Digital en Industrias Pesadas con IA y DataOps",
        hero_description: "Impulsando la innovación industrial a través de tecnologías de IA, DataOps y optimización de procesos",
        btn_learn_more: "Conoce más",
        btn_contact: "Contacto",
        
        // Section Titles
        section_about: "Acerca de mí",
        section_areas: "Áreas de Interés",
        section_industries: "Industrias de Experiencia",
        section_technologies: "Tecnologías y Herramientas",
        section_contact: "Contacto",
        
        // About Section
        about_text1: "Soy Jerson Rodas, ingeniero con más de una década de experiencia en operaciones de la industria pesada en minería, energía y manufactura. He liderado equipos de producción, procesos y optimización, adquiriendo una comprensión profunda de la dinámica de planta, la confiabilidad operativa y los estrictos requisitos de seguridad en entornos industriales críticos.",
        about_text2: "Tras desempeñarme como Lead Data Scientist, dirigiendo proyectos complejos de machine learning, inteligencia artificial y optimización avanzada de procesos, hoy ejerzo el rol de Líder Técnico. Lidero iniciativas de Industrial DataOps y arquitecturas de datos industriales en toda Latinoamérica, donde integro sistemas OT e IT, diseño pipelines de datos robustos y despliego modelos de IA de alto impacto desde mantenimiento predictivo hasta control cerrado de procesos que generan mejoras medibles en eficiencia, sostenibilidad y resiliencia operativa.",
        
        // Areas of Interest
        area1_title: "Transformación Digital Industrial",
        area1_desc: "Estudia la adopción de IIoT, digital twins y marcos DataOps para convertir datos operativos en insights accionables en la industria pesada.",
        area2_title: "Integración OT–IT",
        area2_desc: "Analiza arquitecturas seguras que enlazan SCADA, historiadores y PLCs con plataformas cloud, garantizando gobernanza y calidad de datos en operaciones industriales.",
        area3_title: "DataOps & MLOps Industrial",
        area3_desc: "Investiga la orquestación de pipelines reproducibles que versionen datos y modelos, habilitando despliegues continuos de ML sin interrupciones en entornos críticos.",
        area4_title: "Inteligencia Artificial",
        area4_desc: "Explora aplicaciones de IA para mantenimiento predictivo, detección de anomalías y pronósticos de producción en procesos industriales complejos.",
        area5_title: "Optimización de Procesos Industriales",
        area5_desc: "Examina técnicas avanzadas de optimización, MPC y simulación híbrida orientadas a maximizar throughput y reducir costos e impacto ambiental.",
        area6_title: "IA Generativa",
        area6_desc: "Desarrolla agentes inteligentes basados en LLMs para automatización de procesos industriales, asistentes técnicos especializados y sistemas de soporte a la toma de decisiones que optimizan operaciones en tiempo real.",
        
        // Industries
        industry1_title: "Minería",
        industry1_desc: "Optimización de circuitos de flotación y molienda con modelos predictivos, control cerrado y DataOps que integran datos OT-IT para maximizar recuperación y disponibilidad.",
        industry2_title: "Energía",
        industry2_desc: "Mantenimiento predictivo de activos críticos y pronósticos de demanda mediante ML en el borde; orquestación DataOps para gestionar gemelos digitales de redes eléctricas.",
        industry3_title: "Manufactura",
        industry3_desc: "Sincronización OT-IT con pipelines DataOps y analítica de IA para detección de anomalías, balance de líneas y ajuste automático de parámetros de calidad en tiempo real.",
        industry4_title: "Petróleo y Gas",
        industry4_desc: "Monitorización de pozos y facilidades midstream con modelos ML para detección temprana de fugas, optimización de bombeo y simulación de flujo en condiciones onshore y offshore.",
        industry5_title: "Química",
        industry5_desc: "Control avanzado de reactores y trenes de mezcla mediante simulación híbrida, aprendizaje automático y optimización energética para escalar recetas con alta precisión.",
        
        // Contact
        contact_email: "Correo Electrónico",
        contact_whatsapp: "WhatsApp",
        contact_linkedin: "LinkedIn"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Me",
        nav_areas: "Areas of Interest",
        nav_industries: "Industries",
        nav_technologies: "Technologies",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Digital Transformation in Heavy Industries with AI and DataOps",
        hero_description: "Driving industrial innovation through AI technologies, DataOps and process optimization",
        btn_learn_more: "Learn More",
        btn_contact: "Contact",
        
        // Section Titles
        section_about: "About Me",
        section_areas: "Areas of Interest",
        section_industries: "Industry Experience",
        section_technologies: "Technologies and Tools",
        section_contact: "Contact",
        
        // About Section
        about_text1: "I am Jerson Rodas, an engineer with over a decade of experience in heavy industry operations in mining, energy and manufacturing. I have led production, process and optimization teams, acquiring deep understanding of plant dynamics, operational reliability and strict safety requirements in critical industrial environments.",
        about_text2: "After serving as Lead Data Scientist, leading complex machine learning, artificial intelligence and advanced process optimization projects, I now serve as Technical Leader. I lead Industrial DataOps initiatives and industrial data architectures throughout Latin America, where I integrate OT and IT systems, design robust data pipelines and deploy high-impact AI models from predictive maintenance to closed-loop process control that generate measurable improvements in efficiency, sustainability and operational resilience.",
        
        // Areas of Interest
        area1_title: "Industrial Digital Transformation",
        area1_desc: "Studies the adoption of IIoT, digital twins and DataOps frameworks to convert operational data into actionable insights in heavy industry.",
        area2_title: "OT-IT Integration",
        area2_desc: "Analyzes secure architectures that link SCADA, historians and PLCs with cloud platforms, ensuring governance and data quality in industrial operations.",
        area3_title: "Industrial DataOps & MLOps",
        area3_desc: "Investigates the orchestration of reproducible pipelines that version data and models, enabling continuous ML deployments without interruptions in critical environments.",
        area4_title: "Artificial Intelligence",
        area4_desc: "Explores AI applications for predictive maintenance, anomaly detection and production forecasting in complex industrial processes.",
        area5_title: "Industrial Process Optimization",
        area5_desc: "Examines advanced optimization techniques, MPC and hybrid simulation aimed at maximizing throughput and reducing costs and environmental impact.",
        area6_title: "Generative AI",
        area6_desc: "Develops intelligent agents based on LLMs for industrial process automation, specialized technical assistants and decision support systems that optimize operations in real time.",
        
        // Industries
        industry1_title: "Mining",
        industry1_desc: "Optimization of flotation and grinding circuits with predictive models, closed-loop control and DataOps that integrate OT-IT data to maximize recovery and availability.",
        industry2_title: "Energy",
        industry2_desc: "Predictive maintenance of critical assets and demand forecasting through edge ML; DataOps orchestration to manage digital twins of electrical networks.",
        industry3_title: "Manufacturing",
        industry3_desc: "OT-IT synchronization with DataOps pipelines and AI analytics for anomaly detection, line balancing and automatic adjustment of quality parameters in real time.",
        industry4_title: "Oil and Gas",
        industry4_desc: "Well and midstream facility monitoring with ML models for early leak detection, pumping optimization and flow simulation in onshore and offshore conditions.",
        industry5_title: "Chemical",
        industry5_desc: "Advanced control of reactors and mixing trains through hybrid simulation, machine learning and energy optimization to scale recipes with high precision.",
        
        // Contact
        contact_email: "Email",
        contact_whatsapp: "WhatsApp",
        contact_linkedin: "LinkedIn"
    },
    
    pt: {
        // Navigation
        nav_home: "Início",
        nav_about: "Sobre Mim",
        nav_areas: "Áreas de Interesse",
        nav_industries: "Indústrias",
        nav_technologies: "Tecnologias",
        nav_contact: "Contato",
        
        // Hero Section
        hero_title: "Transformação Digital em Indústrias Pesadas com IA e DataOps",
        hero_description: "Impulsionando a inovação industrial através de tecnologias de IA, DataOps e otimização de processos",
        btn_learn_more: "Saiba Mais",
        btn_contact: "Contato",
        
        // Section Titles
        section_about: "Sobre Mim",
        section_areas: "Áreas de Interesse",
        section_industries: "Experiência em Indústrias",
        section_technologies: "Tecnologias e Ferramentas",
        section_contact: "Contato",
        
        // About Section
        about_text1: "Sou Jerson Rodas, engenheiro com mais de uma década de experiência em operações de indústrias pesadas em mineração, energia e manufatura. Liderei equipes de produção, processos e otimização, adquirindo compreensão profunda da dinâmica de planta, confiabilidade operacional e rigorosos requisitos de segurança em ambientes industriais críticos.",
        about_text2: "Após atuar como Lead Data Scientist, liderando projetos complexos de machine learning, inteligência artificial e otimização avançada de processos, hoje exerço o papel de Líder Técnico. Lidero iniciativas de DataOps Industrial e arquiteturas de dados industriais em toda a América Latina, onde integro sistemas OT e IT, projeto pipelines de dados robustos e implemento modelos de IA de alto impacto desde manutenção preditiva até controle de processos em malha fechada que geram melhorias mensuráveis em eficiência, sustentabilidade e resiliência operacional.",
        
        // Areas of Interest
        area1_title: "Transformação Digital Industrial",
        area1_desc: "Estuda a adoção de IIoT, gêmeos digitais e frameworks DataOps para converter dados operacionais em insights acionáveis na indústria pesada.",
        area2_title: "Integração OT-IT",
        area2_desc: "Analisa arquiteturas seguras que conectam SCADA, historiadores e PLCs com plataformas cloud, garantindo governança e qualidade de dados em operações industriais.",
        area3_title: "DataOps & MLOps Industrial",
        area3_desc: "Investiga a orquestração de pipelines reproduzíveis que versionam dados e modelos, habilitando implantações contínuas de ML sem interrupções em ambientes críticos.",
        area4_title: "Inteligência Artificial",
        area4_desc: "Explora aplicações de IA para manutenção preditiva, detecção de anomalias e previsões de produção em processos industriais complexos.",
        area5_title: "Otimização de Processos Industriais",
        area5_desc: "Examina técnicas avançadas de otimização, MPC e simulação híbrida orientadas a maximizar throughput e reduzir custos e impacto ambiental.",
        area6_title: "IA Generativa",
        area6_desc: "Desenvolve agentes inteligentes baseados em LLMs para automação de processos industriais, assistentes técnicos especializados e sistemas de suporte à tomada de decisões que otimizam operações em tempo real.",
        
        // Industries
        industry1_title: "Mineração",
        industry1_desc: "Otimização de circuitos de flotação e moagem com modelos preditivos, controle em malha fechada e DataOps que integram dados OT-IT para maximizar recuperação e disponibilidade.",
        industry2_title: "Energia",
        industry2_desc: "Manutenção preditiva de ativos críticos e previsões de demanda através de ML na borda; orquestração DataOps para gerenciar gêmeos digitais de redes elétricas.",
        industry3_title: "Manufatura",
        industry3_desc: "Sincronização OT-IT com pipelines DataOps e análise de IA para detecção de anomalias, balanceamento de linhas e ajuste automático de parâmetros de qualidade em tempo real.",
        industry4_title: "Petróleo e Gás",
        industry4_desc: "Monitoramento de poços e instalações midstream com modelos ML para detecção precoce de vazamentos, otimização de bombeamento e simulação de fluxo em condições onshore e offshore.",
        industry5_title: "Química",
        industry5_desc: "Controle avançado de reatores e trens de mistura através de simulação híbrida, aprendizado de máquina e otimização energética para escalar receitas com alta precisão.",
        
        // Contact
        contact_email: "E-mail",
        contact_whatsapp: "WhatsApp",
        contact_linkedin: "LinkedIn"
    }
};

// Language functionality
let currentLanguage = 'es';

// Language selector functionality
const languageBtn = document.getElementById('currentLang');
const languageOptions = document.getElementById('languageOptions');

if (languageBtn && languageOptions) {
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageBtn.classList.toggle('active');
        languageOptions.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        languageBtn.classList.remove('active');
        languageOptions.classList.remove('active');
    });

    // Language option selection
    const languageOptionItems = document.querySelectorAll('.language-option');
    languageOptionItems.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');
            changeLanguage(selectedLang);
            languageBtn.classList.remove('active');
            languageOptions.classList.remove('active');
        });
    });
}

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update current language display
    const langSpan = languageBtn.querySelector('span');
    if (langSpan) {
        langSpan.textContent = lang.toUpperCase();
    }
    
    // Update selected option
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => {
        option.classList.remove('selected');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('selected');
        }
    });
    
    // Translate all elements
    translatePage(lang);
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Translate page function
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferred-language') || 'es';
    changeLanguage(savedLang);
}); 