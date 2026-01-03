<script>
  import { base } from "$app/paths";
  import { t } from "$lib/i18n";

  $: projects = $t.projects.items;
</script>

<section id="projects" class="py-32 px-4 md:px-20 lg:px-32 relative">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-bold mb-16 tracking-tighter">
      {$t.projects.title}<span class="text-primary">.</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <a
          href={project.link}
          target="_blank"
          class="group relative block h-full bg-base-100 border border-base-content/10 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden {project.color}"
        >
          <div class="relative h-48 overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent z-10 opactiy-60"
            ></div>
            <img
              src="{base}/{project.image}"
              alt={project.title}
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div class="p-8 relative z-20">
            <h3
              class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
            >
              {project.title}
            </h3>
            <p class="text-base-content/70 mb-6 leading-relaxed text-sm">
              {project.description}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto">
              {#each project.tech as t}
                <span
                  class="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-base-content/5 text-base-content/60 rounded-full"
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
