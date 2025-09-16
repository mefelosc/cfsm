<script>
    // Conteúdo editável
    export let background =
        "Resumo do meu percurso acadêmico, áreas de interesse e objetivos profissionais.";

    export let education = [
        {
            institution: "Universidade UniAmérica",
            degree: "Bacharelado em Ciência da Computação",
            period: "2023 — 2026",
            location: "Uberlândia, MG, Brasil",
            details:
                "Cursando bacharelado com foco em programação, estruturas de dados, algoritmos, engenharia de software, banco de dados, redes de computadores, inteligência artificial e desenvolvimento web. Participando de projetos práticos que aplicam conceitos teóricos em soluções reais de software."
        }
    ];

    export let courses = [
        { title: "Full Stack Path", provider: "Scrimba", hours: "108h", year: 2025 },
        { title: "CS50: Introdução à Ciência da Computação", provider: "HarvardX", hours: "240h", year: 2024 },
        { title: "Computer Science 101", provider: "Stanford - EDX", hours: "20h", year: 2023 }
       
    ];


</script>

<section id="education" class="py-16 lg:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        <header class="space-y-3">
            <h2 class="text-3xl font-bold tracking-tight">Educação</h2>
            <p class="text-base text-base-content/70">{background}</p>
        </header>

        <div class="grid gap-6 md:grid-cols-2">
            <!-- Graduação -->
            <div class="card bg-base-200 shadow-sm">
                <div class="card-body">
                    <h3 class="card-title">Graduação</h3>
                    <ul class="space-y-5">
                        {#each education as item}
                            <li class="relative">
                                <div class="flex items-start justify-between gap-3">
                                    <div>
                                        <p class="font-semibold">{item.degree}</p>
                                        <p class="text-sm text-base-content/70">{item.institution}</p>
                                    </div>
                                    {#if item.period}
                                        <span class="badge badge-outline whitespace-nowrap">{item.period}</span>
                                    {/if}
                                </div>
                                {#if item.location}
                                    <p class="mt-1 text-xs text-base-content/60">{item.location}</p>
                                {/if}
                                {#if item.details}
                                    <p class="mt-3 text-sm leading-relaxed">{item.details}</p>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>

            <!-- Cursos -->
            <div class="card bg-base-200 shadow-sm">
                <div class="card-body">
                    <h3 class="card-title">Cursos</h3>
                    <ul class="space-y-4">
                        {#each courses as c}
                            <li class="flex items-start justify-between gap-3">
                                <div>
                                    <p class="font-medium">{c.title}</p>
                                    <p class="text-xs text-base-content/70">{c.provider}</p>
                                </div>
                                <div class="shrink-0 text-right space-x-2">
                                    {#if c.hours}<span class="badge badge-ghost">{c.hours}</span>{/if}
                                    {#if c.year}<span class="badge badge-outline">{c.year}</span>{/if}
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>

       
    </div>
</section>
<div class="divider"></div>