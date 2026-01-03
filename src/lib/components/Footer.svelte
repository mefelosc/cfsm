<script>
  import { t } from "$lib/i18n";
</script>

<footer
  class="footer footer-center p-10 bg-base-100 text-base-content border-t border-base-content/5 mt-20"
>
  <aside>
    <p class="font-light text-sm opacity-60">
      &copy; {new Date().getFullYear()} Carlos Felipe S. M. <br />
      {$t.footer.copyright}
    </p>
  </aside>
</footer>
