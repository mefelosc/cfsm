<script>
  let open = false;
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import { base } from '$app/paths';

  function handleThemeToggle(event) {
    const isDark = event.target.checked;
    const newTheme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  onMount(() => {
    // Initialize DaisyUI's theme system
    themeChange(false); // required for Svelte

    // 🧠 Sync current theme and toggle once DOM is ready
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    const toggle = document.getElementById('themesel');
    if (toggle) toggle.checked = currentTheme === 'dark';

    // Optional: make sure the toggle updates themeChange automatically too
    toggle?.addEventListener('change', handleThemeToggle);
  });
</script>

<div class="flex w-full flex-col">
  <header class="w-full">
    <nav>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 m-6 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={open}
        on:click={() => (open = !open)}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div class="{open ? 'block' : 'hidden'} w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-2 md:p-2 mt-2 md:flex-row md:space-x-0 rtl:space-x-reverse items-center justify-center navbar"
        >
          <li>
            <a
              href="#about"
              on:click={() => (open = false)}
              class="block px-4 py-2 text-base-content btn btn-lg btn-ghost"
              >Sobre</a
            >
          </li>
          <li>
            <a
              href="#projects"
              on:click={() => (open = false)}
              class="block px-4 py-2 text-base-content btn btn-lg btn-ghost"
              >Projetos</a
            >
          </li>
          <li>
            <a
              href="#skills"
              on:click={() => (open = false)}
              class="block px-4 py-2 text-base-content btn btn-lg btn-ghost"
              >Stack</a
            >
          </li>
          <li>
            <a
              href="{base}/cv2025.pdf"
              target="_blank"
              on:click={() => (open = false)}
              class="block px-4 py-2 text-base-content btn btn-lg btn-ghost"
              >Curriculum</a
            >
          </li>

          <label class="flex cursor-pointer gap-2 color-gray-500 dark:text-gray-400 m-2">
            <!-- Sun -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
              />
            </svg>

            <!-- Toggle -->
            <input
              type="checkbox"
              id="themesel"
              class="toggle theme-controller color-gray-500 dark:text-gray-400"
              data-toggle-theme="dark,light"
              data-act-class="ACTIVECLASS"
            />

            <!-- Moon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              ></path>
            </svg>
          </label>
        </ul>
      </div>
    </nav>
  </header>
</div>
