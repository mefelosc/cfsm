<script> // Skills, frontend, backend and devops, arrays of strings
  export let frontend = ['SvelteKit', 'JavaScript', 'TailwindCSS', 'HTML'];
  export let backend = ['Node.js', 'PostgreSQL'];
  export let devops = ['Docker', 'CI/CD', 'AWS'];
</script>
<h1 class="text-4xl font-bold flex justify-left ml-25 mt-25">Minha Stack</h1>
<section id="skills" class="py-16 lg:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10 ">
        <div class="grid gap-6 md:grid-cols-3">
            <!-- Frontend -->
            <div class="card bg-base-200 shadow-sm">
                <div class="card-body">
                    <h3 class="card-title">Frontend</h3>
                    <ul class="space-y-5 pt-4">
                        {#each frontend as skill}
                            <li class="relative ">
                                <div class="flex items-start justify-between gap-3 ">
                                    <div>
                                        <p class="font-semibold badge">{skill}</p>
                                    </div>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>

            <!-- Backend -->
            <div class="card bg-base-200 shadow-sm">
                <div class="card-body">
                    <h3 class="card-title">Backend</h3>
                    <ul class="space-y-5 pt-4">
                        {#each backend as skill}
                            <li class="relative">
                                <div class="flex items-start justify-between gap-3">
                                    <div>
                                        <p class="font-semibold badge">{skill}</p>
                                    </div>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>

            <!-- DevOps -->
            <div class="card bg-base-200 shadow-sm">
                <div class="card-body">
                    <h3 class="card-title">DevOps</h3>
                    <ul class="space-y-5 pt-4">
                        {#each devops as skill}
                            <li class="relative">
                                <div class="flex items-start justify-between gap-3">
                                    <div>
                                        <p class="font-semibold badge">{skill}</p>
                                    </div>
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

