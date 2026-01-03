<script>
    export let frontend = [
        "SvelteKit",
        "JavaScript",
        "TailwindCSS",
        "HTML5",
        "CSS3",
        "React",
    ];
    export let backend = ["Node.js", "PostgreSQL", "Express", "Python"];
    export let devops = ["Docker", "CI/CD", "AWS", "Git", "Linux"];

    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    let visible = false;
    onMount(() => (visible = true));
</script>

<section id="skills" class="py-32 px-4 md:px-20 lg:px-32 bg-base-100 relative">
    <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-16 tracking-tighter">
            Stack<span class="text-primary">.</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            <!-- Frontend -->
            <div class="space-y-6">
                <h3
                    class="text-xl font-medium text-base-content/60 border-b border-base-content/10 pb-2"
                >
                    Frontend
                </h3>
                <div class="flex flex-wrap gap-3">
                    {#each frontend as skill}
                        <span
                            class="px-4 py-2 rounded-full bg-base-content/5 border border-base-content/10 text-sm font-medium hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                            >{skill}</span
                        >
                    {/each}
                </div>
            </div>

            <!-- Backend -->
            <div class="space-y-6">
                <h3
                    class="text-xl font-medium text-base-content/60 border-b border-base-content/10 pb-2"
                >
                    Backend
                </h3>
                <div class="flex flex-wrap gap-3">
                    {#each backend as skill}
                        <span
                            class="px-4 py-2 rounded-full bg-base-content/5 border border-base-content/10 text-sm font-medium hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                            >{skill}</span
                        >
                    {/each}
                </div>
            </div>

            <!-- DevOps -->
            <div class="space-y-6">
                <h3
                    class="text-xl font-medium text-base-content/60 border-b border-base-content/10 pb-2"
                >
                    DevOps & Tools
                </h3>
                <div class="flex flex-wrap gap-3">
                    {#each devops as skill}
                        <span
                            class="px-4 py-2 rounded-full bg-base-content/5 border border-base-content/10 text-sm font-medium hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                            >{skill}</span
                        >
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
