<script>
  import "../app.css"; // importa Tailwind + fonte
  import Header from '$lib/components/Header.svelte';
  import About from '$lib/components/About.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Education from '$lib/components/Education.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
</script>

<Header />

<main>
  <About />
  <Projects />
  <Education />
  <Skills />
  <Contact />
</main>

<Footer />
