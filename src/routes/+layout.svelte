<script>
  import "../app.css"; // importa Tailwind + fonte
  export const prerender = true;
</script>

<div class="bg-base-200">
  <div class="max-w-6xl mx-auto bg-base-100 shadow-sm">
      <slot />
</div>
</div>
