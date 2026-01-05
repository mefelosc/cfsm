<script>
  let open = false;
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import { lang, t } from "$lib/i18n";

  function handleThemeToggle(event) {
    const isDark = event.target.checked;
    const newTheme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  function toggleLanguage() {
    lang.update((current) => {
      const next = current === "pt" ? "en" : "pt";
      localStorage.setItem("lang", next);
      return next;
    });
  }

  onMount(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);

    const toggle = document.getElementById("themesel");
    if (toggle) toggle.checked = currentTheme === "dark";

    toggle?.addEventListener("change", handleThemeToggle);

    // Language Detection
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      lang.set(savedLang);
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.toLowerCase().startsWith("en")) {
        lang.set("en");
      }
    }
  });
</script>

<div
  class="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none"
>
  <nav
    class="navbar relative w-full max-w-4xl bg-base-100/70 backdrop-blur-md shadow-2xl rounded-full border border-base-content/5 pointer-events-auto transition-all duration-300"
  >
    <div class="navbar-start pl-4">
      <button
        tabindex="0"
        class="btn btn-ghost btn-circle lg:hidden"
        on:click={() => (open = !open)}
        aria-label="Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
      <a
        href="{base}/"
        class="btn btn-ghost text-xl font-bold tracking-tighter hover:bg-transparent px-2"
      >
        CF<span class="text-primary">.</span>
      </a>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 font-medium text-sm gap-1">
        <li>
          <a
            href="#about"
            class="hover:text-primary transition-colors hover:bg-transparent"
            >{$t.nav.about}</a
          >
        </li>
        <li>
          <a
            href="#projects"
            class="hover:text-primary transition-colors hover:bg-transparent"
            >{$t.nav.projects}</a
          >
        </li>
        <li>
          <a
            href="#skills"
            class="hover:text-primary transition-colors hover:bg-transparent"
            >{$t.nav.stack}</a
          >
        </li>
        <li>
          <a
            href="{base}/{$t.nav.cv_link}"
            target="_blank"
            class="text-primary hover:text-primary/80 transition-colors hover:bg-transparent font-bold"
            >{$t.nav.cv}</a
          >
        </li>
      </ul>
    </div>

    <div class="navbar-end pr-2 flex gap-2">
      <!-- Language Toggle -->
      <button
        class="btn btn-ghost btn-circle btn-sm"
        on:click={toggleLanguage}
        aria-label="Toggle Language"
      >
        <span class="text-xs font-bold">{$lang.toUpperCase()}</span>
      </button>

      <label class="swap swap-rotate btn btn-ghost btn-circle btn-sm">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" id="themesel" />

        <!-- sun icon (light mode) -->
        <svg
          class="swap-off fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 00-1.41-1.41l-1.06 1.06a.996.996 0 101.41 1.41l1.06-1.06zM7.05 18.36a.996.996 0 00-1.41-1.41l-1.06 1.06a.996.996 0 101.41 1.41l1.06-1.06z"
          />
        </svg>

        <!-- moon icon (dark mode) -->
        <svg
          class="swap-on fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          />
        </svg>
      </label>
    </div>

    <!-- Mobile Menu Dropdown -->
    {#if open}
      <div
        class="absolute top-full mt-4 left-0 right-0 bg-base-100/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/5 p-4 flex flex-col gap-2 lg:hidden origin-top scale-95 transition-all pointer-events-auto"
      >
        <a
          href="#about"
          on:click={() => (open = false)}
          class="btn btn-ghost w-full justify-start text-lg">{$t.nav.about}</a
        >
        <a
          href="#projects"
          on:click={() => (open = false)}
          class="btn btn-ghost w-full justify-start text-lg"
          >{$t.nav.projects}</a
        >
        <a
          href="#skills"
          on:click={() => (open = false)}
          class="btn btn-ghost w-full justify-start text-lg">{$t.nav.stack}</a
        >
        <a
          href="{base}/{$t.nav.cv_link}"
          target="_blank"
          on:click={() => (open = false)}
          class="btn btn-ghost w-full justify-start text-lg text-primary"
          >{$t.nav.cv}</a
        >
      </div>
    {/if}
  </nav>
</div>
