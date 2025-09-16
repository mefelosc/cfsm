import "clsx";
/* empty css               */
import { z as attr, F as attr_class, v as pop, t as push, G as stringify, J as ensure_array_like, y as escape_html, K as bind_props } from "../../chunks/index.js";
import "theme-change";
import { j as fallback } from "../../chunks/utils2.js";
function Header($$payload, $$props) {
  push();
  let open = false;
  $$payload.out.push(`<div class="flex w-full flex-col"><header class="w-full"><nav><button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 m-6 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default"${attr("aria-expanded", open)}><span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button> <div${attr_class(`${stringify("hidden")} w-full md:block md:w-auto`)} id="navbar-default"><ul class="flex flex-col p-2 md:p-2 mt-2 md:flex-row md:space-x-0 rtl:space-x-reverse items-center justify-center navbar"><li><a href="#about" class="block px-4 py-2 text-base-content btn btn-lg btn-ghost">Sobre</a></li> <li><a href="#projects" class="block px-4 py-2 text-base-content btn btn-lg btn-ghost">Projetos</a></li> <li><a href="#skills" class="block px-4 py-2 text-base-content btn btn-lg btn-ghost">Stack</a></li> <li><a href="/cv2025.pdf" target="_blank" class="block px-4 py-2 text-base-content btn btn-lg btn-ghost">Curriculum</a></li> <label class="flex cursor-pointer gap-2 color-gray-500 dark:text-gray-400 m-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg> <input type="checkbox" value="synthwave" class="toggle theme-controller color-gray-500 dark:text-gray-400" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"/> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></label></ul></div></nav></header></div>`);
  pop();
}
function About($$payload) {
  $$payload.out.push(`<div id="about" class="flex flex-col items-left space-y-4 py-20 ml-24"><img src="/me.jpg" alt="Felipe" class="w-16 h-16 rounded-full"/> <h1 class="text-5xl font-bold text-left">Software Developer &amp; <br/> Entusiasta de Tecnologia.</h1> <p class="text-gray-500 max-w-xl text-left">Olá! Sou Carlos Felipe, um desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes. Com experiência em diversas tecnologias, estou sempre em busca de novos desafios que me permitam crescer profissionalmente e contribuir para projetos impactantes.</p> <div id="socials" class="flex space-x-4"><a id="LinkedIn" class="transform transition-transform duration-100 hover:scale-130" href="https://www.linkedin.com/in/carlos-felipe-sm/" target="_blank" aria-label="Settings"><span class="[&amp;>svg]:h-8 [&amp;>svg]:w-8"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg></span></a> <a id="GitHub" class="transform transition-transform duration-100 hover:scale-130" target="_blank" href="https://github.com/mefelosc"><span class="[&amp;>svg]:h-8 [&amp;>svg]:w-8"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></span></a> <a id="Email" class="transform transition-transform duration-100 hover:scale-130" target="_blank" href="mailto:cfsm.pj@gmail.com" aria-label="Settings"><span class="[&amp;>svg]:h-8 [&amp;>svg]:w-8"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"></path></svg></span></a> <a id="Whatsapp" class="transform transition-transform duration-100 hover:scale-130" href="https://wa.me/34998132167" aria-label="Settings"><span class="[&amp;>svg]:h-8 [&amp;>svg]:w-8"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></span></a></div></div>`);
}
function Projects($$payload) {
  $$payload.out.push(`<h1 class="text-4xl font-bold flex justify-left ml-25">Meus Projetos</h1> <div class="flex space-y-4 py-2"><section id="projects" class="flex flex-wrap justify-center h-full w-full p-10 space-y-4 space-x-4"><div class="card bg-base-200 w-84 h-84 shadow-sm"><figure><img src="/blackjack.png" alt="Black Jack"/></figure> <div class="card-body"><h2 class="card-title">Black Jack</h2> <p>Jogo de cartas</p> <div class="card-actions justify-end"><button class="btn btn-primary bg-gray-600 border-gray-600 shadow-md"><a href="https://github.com/mefelosc/blackjack-jogo">Github</a></button></div></div></div> <div class="card bg-base-200 w-84 h-84 shadow-sm"><figure><img src="/senhas-fortes.png" alt="Senhas Fortes"/></figure> <div class="card-body"><h2 class="card-title">SenhaForte</h2> <p>Gerador de senhas fortes</p> <div class="card-actions justify-end"><button class="btn btn-primary bg-gray-600 border-gray-600 shadow-md"><a href="https://github.com/mefelosc/SenhaForte">Github</a></button></div></div></div> <div class="card bg-base-200 w-84 h-84 shadow-sm"><figure><img src="/salveabas.png" alt="SalveAbas"/></figure> <div class="card-body"><h2 class="card-title">MyLeads</h2> <p>Extênsão para o navegador que salva abas e URLs</p> <div class="card-actions justify-end"><button class="btn btn-primary bg-gray-600 border-gray-600 shadow-md"><a href="https://github.com/mefelosc/myLeads">Github</a></button></div></div></div></section></div>`);
}
function Education($$payload, $$props) {
  let background = fallback($$props["background"], "Resumo do meu percurso acadêmico, áreas de interesse e objetivos profissionais.");
  let education = fallback(
    $$props["education"],
    () => [
      {
        institution: "Universidade UniAmérica",
        degree: "Bacharelado em Ciência da Computação",
        period: "2023 — 2026",
        location: "Uberlândia, MG, Brasil",
        details: "Cursando bacharelado com foco em programação, estruturas de dados, algoritmos, engenharia de software, banco de dados, redes de computadores, inteligência artificial e desenvolvimento web. Participando de projetos práticos que aplicam conceitos teóricos em soluções reais de software."
      }
    ],
    true
  );
  let courses = fallback(
    $$props["courses"],
    () => [
      {
        title: "Full Stack Path",
        provider: "Scrimba",
        hours: "108h",
        year: 2025
      },
      {
        title: "CS50: Introdução à Ciência da Computação",
        provider: "HarvardX",
        hours: "240h",
        year: 2024
      },
      {
        title: "Computer Science 101",
        provider: "Stanford - EDX",
        hours: "20h",
        year: 2023
      }
    ],
    true
  );
  const each_array = ensure_array_like(education);
  const each_array_1 = ensure_array_like(courses);
  $$payload.out.push(`<section id="education" class="py-16 lg:py-20"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10"><header class="space-y-3"><h2 class="text-3xl font-bold tracking-tight">Educação</h2> <p class="text-base text-base-content/70">${escape_html(background)}</p></header> <div class="grid gap-6 md:grid-cols-2"><div class="card bg-base-200 shadow-sm"><div class="card-body"><h3 class="card-title">Graduação</h3> <ul class="space-y-5"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<li class="relative"><div class="flex items-start justify-between gap-3"><div><p class="font-semibold">${escape_html(item.degree)}</p> <p class="text-sm text-base-content/70">${escape_html(item.institution)}</p></div> `);
    if (item.period) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="badge badge-outline whitespace-nowrap">${escape_html(item.period)}</span>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div> `);
    if (item.location) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<p class="mt-1 text-xs text-base-content/60">${escape_html(item.location)}</p>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> `);
    if (item.details) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<p class="mt-3 text-sm leading-relaxed">${escape_html(item.details)}</p>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></li>`);
  }
  $$payload.out.push(`<!--]--></ul></div></div> <div class="card bg-base-200 shadow-sm"><div class="card-body"><h3 class="card-title">Cursos</h3> <ul class="space-y-4"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let c = each_array_1[$$index_1];
    $$payload.out.push(`<li class="flex items-start justify-between gap-3"><div><p class="font-medium">${escape_html(c.title)}</p> <p class="text-xs text-base-content/70">${escape_html(c.provider)}</p></div> <div class="shrink-0 text-right space-x-2">`);
    if (c.hours) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="badge badge-ghost">${escape_html(c.hours)}</span>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> `);
    if (c.year) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="badge badge-outline">${escape_html(c.year)}</span>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div></li>`);
  }
  $$payload.out.push(`<!--]--></ul></div></div></div></div></section> <div class="divider"></div>`);
  bind_props($$props, { background, education, courses });
}
function Skills($$payload, $$props) {
  let frontend = fallback(
    $$props["frontend"],
    () => [
      "SvelteKit",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "HTML",
      "CSS"
    ],
    true
  );
  let backend = fallback($$props["backend"], () => ["Node.js", "Express", "MongoDB", "PostgreSQL"], true);
  let devops = fallback($$props["devops"], () => ["Docker", "Kubernetes", "CI/CD", "AWS"], true);
  const each_array = ensure_array_like(frontend);
  const each_array_1 = ensure_array_like(backend);
  const each_array_2 = ensure_array_like(devops);
  $$payload.out.push(`<h1 class="text-4xl font-bold flex justify-left ml-25 mt-25">Minha Stack</h1> <section id="skills" class="py-16 lg:py-20"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10"><div class="grid gap-6 md:grid-cols-3"><div class="card bg-base-200 shadow-sm"><div class="card-body"><h3 class="card-title">Frontend</h3> <ul class="space-y-5 pt-4"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let skill = each_array[$$index];
    $$payload.out.push(`<li class="relative"><div class="flex items-start justify-between gap-3"><div><p class="font-semibold badge">${escape_html(skill)}</p></div></div></li>`);
  }
  $$payload.out.push(`<!--]--></ul></div></div> <div class="card bg-base-200 shadow-sm"><div class="card-body"><h3 class="card-title">Backend</h3> <ul class="space-y-5 pt-4"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let skill = each_array_1[$$index_1];
    $$payload.out.push(`<li class="relative"><div class="flex items-start justify-between gap-3"><div><p class="font-semibold badge">${escape_html(skill)}</p></div></div></li>`);
  }
  $$payload.out.push(`<!--]--></ul></div></div> <div class="card bg-base-200 shadow-sm"><div class="card-body"><h3 class="card-title">DevOps</h3> <ul class="space-y-5 pt-4"><!--[-->`);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let skill = each_array_2[$$index_2];
    $$payload.out.push(`<li class="relative"><div class="flex items-start justify-between gap-3"><div><p class="font-semibold badge">${escape_html(skill)}</p></div></div></li>`);
  }
  $$payload.out.push(`<!--]--></ul></div></div></div></div></section> <div class="divider"></div>`);
  bind_props($$props, { frontend, backend, devops });
}
function Footer($$payload) {
  $$payload.out.push(`<footer class="flex flex-col items-center p-10 self-center bg-base-100 shadow-sm"><p>© Feito com ❤️ por Carlos Felipe S. M.</p></footer>`);
}
function _page($$payload) {
  Header($$payload);
  $$payload.out.push(`<!----> <main>`);
  About($$payload);
  $$payload.out.push(`<!----> `);
  Projects($$payload);
  $$payload.out.push(`<!----> `);
  Education($$payload, {});
  $$payload.out.push(`<!----> `);
  Skills($$payload, {});
  $$payload.out.push(`<!----> `);
  $$payload.out.push(`<!----></main> `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _page as default
};
