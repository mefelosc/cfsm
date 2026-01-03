import { writable, derived } from "svelte/store";

export const lang = writable("pt");

const translations = {
    pt: {
        nav: {
            about: "Sobre",
            projects: "Projetos",
            stack: "Stack",
            cv: "Curriculum",
        },
        hero: {
            role_prefix: "Desenvolvedor",
            role_main: "Full Stack",
            roles_subtitle:
                "Estudante de Ciência da Computação | Segurança & Suporte TI",
            description:
                "Unindo desenvolvimento backend e frontend com uma base sólida em suporte e segurança. Criando soluções digitais que não apenas funcionam, mas protegem e performam.",
            contact_btn: "Contato",
        },
        education: {
            title: "Educação",
            items: [
                {
                    year: "2027",
                    degree: "Pós Graduação em Segurança da Informação",
                    institution: "UniAmérica Descomplica",
                    description:
                        "Especialização em defesa cibernética, gestão de riscos e proteção de infraestruturas críticas.",
                },
                {
                    year: "2026",
                    degree: "Bacharelado em Ciência da Computação",
                    institution: "UniAmérica Descomplica",
                    description:
                        "Formação abrangente em arquitetura de software, algoritmos avançados e teoria computacional.",
                },
                {
                    year: "2024",
                    degree: "CS50x: Computer Science",
                    institution: "Harvard University",
                    description:
                        "Curso de excelência cobrindo C, Python, SQL e os fundamentos da computação moderna.",
                }
            ],
        },
        projects: {
            title: "Projetos",
            items: [
                {
                    title: "Black Jack",
                    description:
                        "Simulação interativa do clássico jogo de cartas. Desafie a sorte e teste algoritmos de lógica de jogo.",
                    tech: ["Game Dev", "Logic", "Interactive"],
                    link: "https://github.com/mefelosc/cs-studies-monorepo/tree/main/courses/scrimba/jscourse/blackjack-jogo",
                    image: "blackjack.png",
                    color: "hover:border-primary",
                },
                {
                    title: "SenhaForte",
                    description:
                        "Gerador de senhas aleatórias e robustas. Ferramenta essencial para fortalecer a segurança de contas online.",
                    tech: ["Cybersecurity", "Automation", "Tooling"],
                    link: "https://github.com/mefelosc/cs-studies-monorepo/tree/main/courses/scrimba/jscourse/senha-forte",
                    image: "senhas-fortes.png",
                    color: "hover:border-primary",
                },
                {
                    title: "MyLeads",
                    description:
                        "Extensão para navegador que permite salvar e organizar abas (leads) rapidamente, otimizando a produtividade.",
                    tech: ["Browser Extension", "JavaScript", "Productivity"],
                    link: "https://github.com/mefelosc/cs-studies-monorepo/tree/main/courses/scrimba/jscourse/salve-abas",
                    image: "salveabas.png",
                    color: "hover:border-primary",
                },
            ],
        },
        skills: {
            title: "Habilidades & Tecnologias",
        },
        contact: {
            title: "Vamos Conversar",
            subtitle:
                "Tem um projeto em mente ou quer apenas trocar uma ideia sobre tecnologia? Minha caixa de entrada está sempre aberta.",
            email_label: "Email",
            linkedin_label: "LinkedIn",
            github_label: "GitHub",
        },
        footer: {
            copyright: "Feito com SvelteKit & TailwindCSS",
        },
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            stack: "Stack",
            cv: "Resume",
        },
        hero: {
            role_prefix: "Developer",
            role_main: "Full Stack",
            roles_subtitle:
                "CS Student | Security & IT Support",
            description:
                "Merging backend and frontend development with a solid foundation in support and security. Building digital solutions that not only work but protect and perform.",
            contact_btn: "Contact",
        },
        education: {
            title: "Education",
            items: [
                {
                    year: "2027",
                    degree: "Postgraduate in Information Security",
                    institution: "UniAmérica Descomplica",
                    description:
                        "Specialization in cyber defense, risk management, and critical infrastructure protection.",
                },
                {
                    year: "2026",
                    degree: "Bachelor of Computer Science",
                    institution: "UniAmérica Descomplica",
                    description:
                        "Comprehensive background in software architecture, advanced algorithms, and computational theory.",
                },
                {
                    year: "2024",
                    degree: "CS50x: Computer Science",
                    institution: "Harvard University",
                    description:
                        "First-class course covering C, Python, SQL, and modern computing fundamentals.",
                }
            ],
        },
        projects: {
            title: "Projects",
            items: [
                {
                    title: "Black Jack",
                    description:
                        "Interactive simulation of the classic card game. Challenge your luck and test game logic algorithms.",
                    tech: ["Game Dev", "Logic", "Interactive"],
                    link: "https://github.com/mefelosc/cs-studies-monorepo/tree/main/courses/scrimba/jscourse/blackjack-jogo",
                    image: "blackjack.png",
                    color: "hover:border-primary",
                },
                {
                    title: "StrongPassword",
                    description:
                        "Random and robust password generator. Essential tool for strengthening online account security.",
                    tech: ["Cybersecurity", "Automation", "Tooling"],
                    link: "https://github.com/mefelosc/cs-studies-monorepo/tree/main/courses/scrimba/jscourse/senha-forte",
                    image: "senhas-fortes.png",
                    color: "hover:border-primary",
                },
                {
                    title: "MyLeads",
                    description:
                        "Browser extension that allows you to quickly save and organize tabs (leads), optimizing productivity.",
                    tech: ["Browser Extension", "JavaScript", "Productivity"],
                    link: "https://github.com/mefelosc/cs-studies-monorepo/tree/main/courses/scrimba/jscourse/salve-abas",
                    image: "salveabas.png",
                    color: "hover:border-primary",
                },
            ],
        },
        skills: {
            title: "Skills & Technologies",
        },
        contact: {
            title: "Let's Talk",
            subtitle:
                "Have a project in mind or just want to chat about tech? My inbox is always open.",
            email_label: "Email",
            linkedin_label: "LinkedIn",
            github_label: "GitHub",
        },
        footer: {
            copyright: "Made with SvelteKit & TailwindCSS",
        },
    },
};

export const t = derived(lang, ($lang) => translations[$lang]);
