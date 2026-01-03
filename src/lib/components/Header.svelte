<script>
  let open = false;
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
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
    themeChange(false); // required for Svelte

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
            href="{base}/cv2025.pdf"
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

        <!-- sun icon -->
        <svg
          class="swap-off fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><path
            d="M5.64 17.36a9 9 0 1112.72 0l-.585-.585a.75.75 0 011.061-1.061l1.59 1.59a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 01-1.06-1.06l.585-.585c-6.47 6.47-17.65-4.72-11.18-11.18L7.76 7.76a.75.75 0 01-1.06 0l-1.59-1.59a.75.75 0 010-1.06l1.59-1.59a.75.75 0 011.06 1.06l-.585.585A8.966 8.966 0 005.64 17.36zM12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.05 6.05a.75.75 0 011.06 0l1.59 1.59a.75.75 0 01-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zM17.95 6.05a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 01-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM6.05 17.95a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 01-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM16.364 7.636a.75.75 0 010-1.06l1.59-1.59a.75.75 0 011.06 1.06l-1.59 1.59a.75.75 0 01-1.06 0zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
          />
        </svg>

        <!-- moon icon -->
        <svg
          class="swap-on fill-current w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          /></svg
        >
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
          href="{base}/cv2025.pdf"
          target="_blank"
          on:click={() => (open = false)}
          class="btn btn-ghost w-full justify-start text-lg text-primary"
          >{$t.nav.cv}</a
        >
      </div>
    {/if}
  </nav>
</div>
