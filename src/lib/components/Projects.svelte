<script>
  import { base } from "$app/paths";

  export let projects = [
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
  ];
</script>

<section id="projects" class="py-32 px-4 md:px-20 lg:px-32 relative">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-bold mb-16 tracking-tighter">
      Projetos<span class="text-primary">.</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <a
          href={project.link}
          target="_blank"
          class="group relative block h-full bg-base-100 border border-base-content/10 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 {project.color} overflow-hidden flex flex-col"
        >
          <!-- Background Image with Overlay -->
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-20 group-hover:opacity-10"
            style="background-image: url('{base}/{project.image}')"
          ></div>

          <div
            class="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/80 to-transparent"
          ></div>

          <div class="relative z-10 flex flex-col h-full p-8">
            <div class="flex justify-between items-start mb-4">
              <h3
                class="text-2xl font-bold group-hover:text-primary transition-colors"
              >
                {project.title}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>

            <p class="text-base-content/70 leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto">
              {#each project.tech as t}
                <span
                  class="px-3 py-1 text-xs font-semibold tracking-wide uppercase border border-base-content/10 rounded-full bg-base-content/5 text-base-content/60 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-colors"
                >
                  {t}
                </span>
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
