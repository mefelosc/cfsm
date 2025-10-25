<script>
  import { base } from '$app/paths';
</script>
<h1 class="text-4xl font-bold flex justify-left ml-25">Meus Projetos</h1>
<div class="flex space-y-4 py-2">
  <section id="projects" class="flex flex-wrap justify-center h-full w-full p-10 space-y-4 space-x-4">
    <div class="card bg-base-200 w-84 h-84 shadow-sm">
      <figure>
        <img
          src="{base}/blackjack.png"
      alt="Black Jack" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Black Jack</h2>
          <p>Jogo de cartas</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary bg-gray-600 border-gray-600 shadow-md"><a href="https://github.com/mefelosc/blackjack-jogo" target="_blank" aria-label="Settings">Github</a></button>
        </div>  
      </div>
    </div>
    <div class="card bg-base-200 w-84 h-84 shadow-sm">
      <figure>
        <img
          src="{base}/senhas-fortes.png"
      alt="Senhas Fortes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">SenhaForte</h2>
          <p>Gerador de senhas fortes</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary bg-gray-600 border-gray-600 shadow-md"><a href="https://github.com/mefelosc/SenhaForte" target="_blank" aria-label="Settings">Github</a></button>
        </div>
      </div>
    </div>
    <div class="card bg-base-200 w-84 h-84 shadow-sm">
      <figure>
        <img
          src="{base}/salveabas.png"
      alt="SalveAbas" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">MyLeads</h2>
          <p>Extênsão para o navegador que salva abas e URLs</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary bg-gray-600 border-gray-600 shadow-md"><a href="https://github.com/mefelosc/myLeads" target="_blank" aria-label="Settings">Github</a></button>
        </div>
      </div>
    </div>
  </section>
</div> 

