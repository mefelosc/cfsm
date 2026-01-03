<script>
    import { base } from "$app/paths";
    import { t } from "$lib/i18n";

    $: education = $t.education.items;
</script>

<section id="education" class="py-32 px-4 md:px-20 lg:px-32 relative">
    <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-16 tracking-tighter">
            {$t.education.title}<span class="text-primary">.</span>
        </h2>

        <div class="relative space-y-12">
            <!-- Vertical Line -->
            <div
                class="absolute left-[7px] top-2 bottom-2 w-0.5 bg-base-content/10 md:left-1/2 md:-ml-0.5"
            ></div>

            {#each education as item, i}
                <div
                    class="relative flex flex-col md:flex-row gap-8 items-start group"
                >
                    <!-- Dot -->
                    <div
                        class="absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-base-100 bg-base-content/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 md:left-1/2 md:-translate-x-1/2 z-10"
                    ></div>

                    <!-- Left Side (Year) -->
                    <div class="pl-10 md:pl-0 md:w-1/2 md:text-right md:pr-12">
                        <span
                            class="inline-block py-1 px-3 rounded-full bg-base-content/5 border border-base-content/10 text-sm font-mono font-medium text-primary mb-2"
                        >
                            {item.year}
                        </span>
                    </div>

                    <!-- Right Side (Content) -->
                    <div class="pl-10 md:pl-12 md:w-1/2">
                        <h3
                            class="text-xl font-bold group-hover:text-primary transition-colors"
                        >
                            {item.degree}
                        </h3>
                        <p class="text-base-content/60 font-medium mb-2">
                            {item.institution}
                        </p>
                        <p class="text-base-content/70 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
