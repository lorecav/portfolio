(function () {
  const BASE = window.PORTFOLIO, IT = window.PORTFOLIO_IT || {}, SINGLE = !!window.__SINGLE;

  /* ---------- interface strings ---------- */
  const UI = {
    en: {
      skip: "Skip to content", nMain: "Main", cases: "Case studies", about: "About", contact: "Contact", lang: "Language",
      viewCases: "View case studies", aboutMe: "About me", selected: "Selected case studies", allCases: n => `All case studies (${n})`,
      myRole: "My role.", read: "Read case study", how: "How I work", moreAbout: "Read more about me",
      casesLead: "Each case study covers the problem, the decisions I made and why, and what changed. Evidence and limits are stated in every one.",
      experience: "Experience", skillsBg: "Skills and background", skills: "Skills and tools", education: "Education", certs: "Certifications", langs: "Languages", touch: "Get in touch",
      enlarge: "Enlarge certificate", verify: "Verify certification (opens in a new tab)", close: "Close", crumb: "Breadcrumb", onPage: "On this page", next: "Next case study", link: "Link", notice: "What to notice:", placeholder: "Image placeholder",
      facts: { product: "Product", industry: "Industry", timeline: "Timeline", role: "My role", team: "Team", scope: "Scope", tools: "Tools and methods" },
      nfTitle: "This page does not exist.", nfLead: "The link may be broken or the case study may have been removed.", nfHome: "Back to home", nfAll: "All case studies", nfMeta: "Page not found",
      cta: "Open to senior product design roles.", ctaText: "If you are hiring, or want to talk about a product challenge, write to me.", home: "Home",
      casesMeta: n => `Product design case studies by ${n}.`, aboutMeta: "About"
    },
    it: {
      skip: "Vai al contenuto", nMain: "Principale", cases: "Case study", about: "Chi sono", contact: "Contatti", lang: "Lingua",
      viewCases: "Vedi i case study", aboutMe: "Chi sono", selected: "Case study selezionati", allCases: n => `Tutti i case study (${n})`,
      myRole: "Il mio ruolo.", read: "Leggi il case study", how: "Come lavoro", moreAbout: "Scopri di più su di me",
      casesLead: "Ogni case study racconta il problema, le decisioni che ho preso e perché, e cosa è cambiato. In ognuno dichiaro evidenze e limiti.",
      experience: "Esperienza", skillsBg: "Competenze e formazione", skills: "Competenze e strumenti", education: "Formazione", certs: "Certificazioni", langs: "Lingue", touch: "Contattami",
      enlarge: "Ingrandisci il certificato", verify: "Verifica la certificazione (si apre in una nuova scheda)", close: "Chiudi", crumb: "Percorso", onPage: "In questa pagina", next: "Prossimo case study", link: "Link", notice: "Da notare:", placeholder: "Immagine segnaposto",
      facts: { product: "Prodotto", industry: "Settore", timeline: "Tempistiche", role: "Il mio ruolo", team: "Team", scope: "Ambito", tools: "Strumenti e metodi" },
      nfTitle: "Questa pagina non esiste.", nfLead: "Il link potrebbe essere errato o il case study potrebbe essere stato rimosso.", nfHome: "Torna alla home", nfAll: "Tutti i case study", nfMeta: "Pagina non trovata",
      cta: "Disponibile per ruoli di senior product design.", ctaText: "Se stai assumendo, o vuoi parlare di una sfida di prodotto, scrivimi.", home: "Home",
      casesMeta: n => `Case study di product design di ${n}.`, aboutMeta: "Chi sono"
    }
  };

  /* ---------- language state ---------- */
  const MARK = '<svg width="40" height="40" class="mark" aria-hidden="true" focusable="false" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11_7)"><path d="M0 18C0 8.05888 8.05888 0 18 0H72C81.9411 0 90 8.05888 90 18V292C90 301.941 98.0589 310 108 310H382C391.941 310 400 318.059 400 328V382C400 391.941 391.941 400 382 400H18C8.05888 400 0 391.941 0 382V18Z" fill="#4A7BD6"/><path d="M155 18C155 8.05888 163.059 0 173 0H382C391.941 0 400 8.05888 400 18V72C400 81.9411 391.941 90 382 90H263C253.059 90 245 98.0589 245 108V227C245 236.941 236.941 245 227 245H173C163.059 245 155 236.941 155 227V18Z" fill="#4A7BD6"/><rect x="310" y="155" width="90" height="90" rx="18" fill="#739CE3"/></g><defs><clipPath id="clip0_11_7"><rect width="400" height="400" rx="56" fill="white"/></clipPath></defs></svg>';
  const LANG = "en"; // Italian is parked in portfolio-extras/data.it.js
  const L = () => UI[LANG];
  let D, S, projects;

  function merge(b, i) {
    if (i === undefined || i === null) return b;
    if (Array.isArray(b)) return b.map((x, k) => merge(x, Array.isArray(i) ? i[k] : undefined));
    if (b && typeof b === "object") { const o = { ...b }; Object.keys(i).forEach(k => { o[k] = merge(b[k], i[k]); }); return o; }
    return i;
  }
  function build() {
    const I = LANG === "it" ? IT : {};
    D = {
      site: merge(BASE.site, I.site), profile: merge(BASE.profile, I.profile), experience: merge(BASE.experience, I.experience),
      education: merge(BASE.education, I.education), certifications: merge(BASE.certifications, I.certifications),
      skills: I.skills || BASE.skills, languages: merge(BASE.languages, I.languages),
      projects: BASE.projects.map(p => merge(p, (I.projects || {})[p.slug]))
    };
    S = D.site;
    projects = D.projects.filter(p => p.visible !== false).sort((a, b) => (a.order || 99) - (b.order || 99));
    document.documentElement.lang = LANG;
  }

  /* ---------- helpers ---------- */
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const t = s => esc(s).replace(/\[[^\]]+\]/g, m => "<mark>" + m + "</mark>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const paras = s => String(s || "").split(/\n\n+/).map(p => /^- /.test(p) ? "<ul>" + p.split("\n").map(l => "<li>" + t(l.replace(/^- /, "")) + "</li>").join("") + "</ul>" : "<p>" + t(p) + "</p>").join("");

  const U = {
    home: SINGLE ? "#" : "index.html", cases: SINGLE ? "#work" : "work.html", about: SINGLE ? "#about" : "about.html",
    proj: s => SINGLE ? "#" + encodeURIComponent(s) : "project.html?p=" + encodeURIComponent(s)
  };
  function route() {
    if (SINGLE) { const h = decodeURIComponent(location.hash.slice(1)); return h === "" ? { page: "home" } : h === "work" ? { page: "work" } : h === "about" ? { page: "about" } : { page: "project", slug: h }; }
    return { page: document.body.dataset.page, slug: new URLSearchParams(location.search).get("p") };
  }

  function fig(i, cls) {
    i = i || {};
    const media = i.src ? `<img src="${esc(i.src)}" alt="${esc(i.alt)}" loading="lazy">` : `<div class="ph-img" role="img" aria-label="${esc(i.alt || L().placeholder)}">${L().placeholder}</div>`;
    const notes = (i.annotations || []).length ? `<ol class="notes">${i.annotations.map(n => `<li>${t(n)}</li>`).join("")}</ol>` : "";
    let cap = "";
    if (i.caption) { const [c, w] = String(i.caption).split(/What to notice:|Da notare:/); cap = `<figcaption>${t(c.trim())}${w ? `<br><em>${L().notice}</em> ${t(w.trim())}` : ""}</figcaption>`; }
    return `<figure class="fig ${cls || ""}${i.wide ? " wide" : ""}${i.phone ? " phone" : ""}">${media}${cap}${notes}</figure>`;
  }
  function sec(s, n) {
    const facts = (s.facts || []).length ? `<dl class="dec">${s.facts.map(f => `<div><dt>${t(f[0])}</dt><dd>${t(f[1])}</dd></div>`).join("")}</dl>` : "";
    const tb = s.table ? `<div class="tbl-w"><table class="tbl"><thead><tr>${s.table.head.map(h => `<th scope="col">${t(h)}</th>`).join("")}</tr></thead><tbody>${s.table.rows.map(r => `<tr>${r.map((c, k) => k ? `<td>${t(c)}</td>` : `<th scope="row">${t(c)}</th>`).join("")}</tr>`).join("")}</tbody></table></div>` : "";
    const imgs = (s.images || []).length ? `<div class="figs${s.cols ? " g" : ""}"${s.cols ? ` style="--n:${s.cols}"` : ""}>${s.images.map(x => fig(x)).join("")}</div>${s.figNote ? `<p class="fignote">${t(s.figNote)}</p>` : ""}` : "";
    return `<section class="cs-sec" id="s${n}" aria-labelledby="h${n}"><h2 id="h${n}">${t(s.heading)}</h2>${s.body ? `<div class="txt">${paras(s.body)}</div>` : ""}${tb}${facts}${s.after ? `<div class="txt">${paras(s.after)}</div>` : ""}${imgs}</section>`;
  }
  function setMeta(title, desc) {
    document.title = title;
    [['meta[name="description"]', desc], ['meta[property="og:title"]', title], ['meta[property="og:description"]', desc]].forEach(([s, v]) => { const m = document.querySelector(s); if (m) m.setAttribute("content", v); });
  }

  /* ---------- shared chrome ---------- */
  function chrome(r) {
    const l = L(), cur = k => (k === "cases" ? (r.page === "work" || r.page === "project") : r.page === k) ? ' aria-current="page"' : "";
    document.getElementById("hdr").innerHTML = `<a class="skip" href="#main" data-scroll="main">${l.skip}</a>
      <div class="wrap bar"><a class="brand" href="${U.home}"${cur("home")} aria-label="${esc(t(S.name))}, ${esc(t(S.role))}">${MARK}<span class="bt">${t(S.name)}<span>${t(S.role)}</span></span></a>
      <div class="right"><nav aria-label="${l.nMain}"><ul>
        <li><a href="${U.cases}"${cur("cases")}>${l.cases}</a></li>
        <li><a href="${U.about}"${cur("about")}>${l.about}</a></li>
        <li><a class="cta" href="#contact" data-scroll="contact">${l.contact}</a></li></ul></nav></div></div><div class="prog" id="prog" aria-hidden="true"></div>`;
    document.getElementById("ftr").innerHTML = `<div class="wrap" id="contact"><h2>${l.cta}</h2>
      <p class="muted">${l.ctaText}</p>
      <a class="big" href="mailto:${esc(S.email)}">${t(S.email)}</a>
      <div class="links">${S.links.map(k => `<a href="${esc(k.url)}" target="_blank" rel="noopener">${esc(k.label)}</a>`).join("")}</div>
      <div class="foot"><span>© ${new Date().getFullYear()} ${t(S.name)}. ${t(S.role)}, ${t(S.location)}.</span>
      <span><a href="${U.home}">${l.home}</a> <a href="${U.cases}">${l.cases}</a> <a href="${U.about}">${l.about}</a></span></div></div>`;
  }

  const card = (p, big) => `<article class="card${big ? " lg" : ""}"><h3><a href="${U.proj(p.slug)}">${t(p.title)}</a></h3>
    <p class="sum">${t(p.summary)}</p><div class="thumb">${fig({ src: p.cover, alt: p.coverAlt || p.title })}</div>
    <p class="meta">${t(p.type)}, ${t(p.industry)}</p><p class="role"><strong>${L().myRole}</strong> ${t(p.role)}</p><span class="more" aria-hidden="true">${L().read}</span></article>`;

  /* ---------- pages ---------- */
  function home(main) {
    const l = L();
    setMeta(S.seoTitle, S.seoDescription);
    const feat = projects.filter(p => p.featured).slice(0, 4);
    main.innerHTML = `<section class="hero"><div class="wrap"><p class="hello">${t(S.name)}, ${t(S.role)}</p>
      <h1>${t(S.headline)}</h1><p class="statement">${t(S.statement)}</p>
      <p class="muted intro">${t(S.intro)}</p>
      <div class="btns"><a class="btn pri" href="#work" data-scroll="work">${l.viewCases}</a><a class="btn" href="${U.about}">${l.aboutMe}</a></div></div></section>
      <section id="work" aria-labelledby="h-work"><div class="wrap"><div class="sec-head"><h2 id="h-work">${l.selected}</h2><a class="btn sm" href="${U.cases}">${l.allCases(projects.length)}</a></div>
        <div class="cards one">${feat.map(p => card(p, true)).join("")}</div></div></section>
      <section aria-labelledby="h-ab"><div class="wrap two-col"><h2 id="h-ab">${l.how}</h2><div>
        <div class="cols tight">${D.profile.slice(0, 4).map(x => `<div><h3>${t(x.t)}</h3><p>${t(x.d)}</p></div>`).join("")}</div>
        <p style="margin-top:28px"><a class="btn" href="${U.about}">${l.moreAbout}</a></p></div></div></section>`;
  }
  function work(main) {
    const l = L();
    setMeta(l.cases + " - " + S.name, l.casesMeta(S.name));
    main.innerHTML = `<section class="page-head"><div class="wrap"><h1>${l.cases}</h1><p class="lead">${l.casesLead}</p></div></section>
      <section class="list"><div class="wrap"><div class="cards two">${projects.map(p => card(p)).join("")}</div></div></section>`;
  }
  function about(main) {
    const l = L();
    setMeta(l.about + " - " + S.name, S.seoDescription);
    const chips = a => `<ul class="chips">${a.map(x => `<li>${t(x)}</li>`).join("")}</ul>`;
    const cert = (c, n) => {
      const img = c.image ? (c.zoom
        ? `<button type="button" class="zoom" data-zoom="${n}" aria-label="${esc(l.enlarge)}: ${esc(c.title)}"><img src="${esc(c.image)}" alt="${esc(c.alt)}" loading="lazy"></button>`
        : c.url ? `<a class="logo" href="${esc(c.url)}" target="_blank" rel="noopener" aria-label="${esc(c.title)}: ${esc(l.verify)}"><img src="${esc(c.image)}" alt="${esc(c.alt)}" loading="lazy"></a>`
        : `<div class="logo"><img src="${esc(c.image)}" alt="${esc(c.alt)}" loading="lazy"></div>`) : "";
      return `<article class="cert"><div class="cthumb${c.zoom ? "" : " is-logo"}">${img}</div><div><h3>${t(c.title)}</h3><p class="muted">${t(c.issuer)}${c.date ? `, ${t(c.date)}` : ""}</p>${c.note ? `<p>${t(c.note)}</p>` : ""}${c.url ? `<p><a href="${esc(c.url)}" target="_blank" rel="noopener">${l.verify}</a></p>` : ""}</div></article>`;
    };
    main.innerHTML = `<section class="page-head"><div class="wrap"><h1>${l.about}</h1><p class="lead">${t(S.intro)}</p>
      <div class="btns"><a class="btn pri" href="#contact" data-scroll="contact">${l.touch}</a></div></div></section>
      <section aria-labelledby="h-p"><div class="wrap two-col"><h2 id="h-p">${l.how}</h2><div class="cols">${D.profile.map(x => `<div><h3>${t(x.t)}</h3><p>${t(x.d)}</p></div>`).join("")}</div></div></section>
      <section aria-labelledby="h-e"><div class="wrap two-col"><h2 id="h-e">${l.experience}</h2><ol class="tl">${D.experience.map(e => `<li><h3>${t(e.role)}, ${t(e.company)}</h3><p class="d">${t(e.dates)}</p><p>${t(e.context)}</p><ul>${e.points.map(x => `<li>${t(x)}</li>`).join("")}</ul></li>`).join("")}</ol></div></section>
      <section aria-labelledby="h-s"><div class="wrap two-col"><h2 id="h-s">${l.skillsBg}</h2><div class="cols">
        <div><h3>${l.skills}</h3>${Object.entries(D.skills).map(([k, v]) => `<p class="muted" style="margin-bottom:6px">${esc(k)}</p>${chips(v)}`).join("")}</div>
        <div><h3>${l.education}</h3><ul class="plain">${D.education.map(e => `<li>${t(e.title)}<br><span class="muted">${t(e.where)}, ${t(e.dates)}</span></li>`).join("")}</ul></div>
        <div><h3>${l.langs}</h3><ul class="plain">${D.languages.map(x => `<li>${t(x.name)}<br><span class="muted">${t(x.level)}</span></li>`).join("")}</ul></div></div></div></section>
      <section aria-labelledby="h-c"><div class="wrap two-col"><h2 id="h-c">${l.certs}</h2><div class="certs">${D.certifications.map(cert).join("")}</div></div></section>`;
  }
  function project(main, r) {
    const l = L(), i = projects.findIndex(p => p.slug === r.slug), p = projects[i];
    if (!p) return nf(main);
    setMeta(`${p.title} - ${S.name}`, p.summary);
    const f = l.facts, facts = [[f.product, p.type], [f.industry, p.industry], [f.timeline, p.dates], [f.role, p.role], [f.team, p.team], [f.scope, p.scope], [f.tools, p.tools]];
    const toc = `<ol>${p.sections.map((s, n) => `<li><a href="#s${n}" data-scroll="s${n}" data-toc="s${n}">${t(s.heading)}</a></li>`).join("")}</ol>`;
    const nx = projects[(i + 1) % projects.length];
    main.innerHTML = `<div class="wrap"><nav class="crumb" aria-label="${l.crumb}"><a href="${U.cases}">${l.cases}</a><span aria-hidden="true">/</span><span aria-current="page">${t(p.title)}</span></nav>
      <header class="cs-head"><h1>${t(p.title)}</h1><p class="lead">${t(p.summary)}</p>
      <dl class="facts">${facts.filter(x => x[1]).map(x => `<div><dt>${x[0]}</dt><dd>${t(x[1])}</dd></div>`).join("")}${(p.links || []).map(k => `<div><dt>${l.link}</dt><dd><a href="${esc(k.url)}" target="_blank" rel="noopener">${esc(k.label)}</a></dd></div>`).join("")}</dl></header>
      ${p.hideCoverOnPage ? "" : fig({ src: p.cover, alt: p.coverAlt || p.title })}
      <div class="cs"><aside class="toc" aria-label="${l.onPage}"><div class="tocw"><p class="toct">${l.onPage}</p>${toc}</div><details class="tocn"><summary>${l.onPage}</summary>${toc}</details></aside>
        <div class="cs-main">${p.sections.map(sec).join("")}</div></div>
      ${nx && nx !== p ? `<a class="next" href="${U.proj(nx.slug)}"><span>${l.next}</span><strong>${t(nx.title)}</strong></a>` : ""}</div>`;
    const links = [...main.querySelectorAll("[data-toc]")];
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.dataset.toc === e.target.id)); }), { rootMargin: "-15% 0px -75% 0px" });
      main.querySelectorAll(".cs-sec").forEach(s => io.observe(s));
    }
  }
  function nf(main) {
    const l = L();
    setMeta(l.nfMeta + " - " + S.name, l.nfTitle);
    main.innerHTML = `<section class="page-head"><div class="wrap"><h1>${l.nfTitle}</h1><p class="lead">${l.nfLead}</p>
      <div class="btns"><a class="btn pri" href="${U.home}">${l.nfHome}</a><a class="btn" href="${U.cases}">${l.nfAll}</a></div></div></section>`;
  }

  /* ---------- certificate lightbox ---------- */
  function lightbox(n) {
    const c = D.certifications[n]; if (!c) return;
    let dlg = document.getElementById("lb");
    if (!dlg) {
      dlg = document.createElement("dialog"); dlg.id = "lb";
      dlg.addEventListener("click", e => { if (e.target === dlg || e.target.closest("[data-close]")) dlg.close(); });
      document.body.appendChild(dlg);
    }
    dlg.setAttribute("aria-label", c.title || "");
    dlg.innerHTML = `<button type="button" class="x" data-close aria-label="${esc(L().close)}">&times;</button><img src="${esc(c.image)}" alt="${esc(c.alt)}">`;
    if (dlg.showModal) dlg.showModal();
  }

  /* ---------- run ---------- */
  function render() {
    const r = route(), main = document.getElementById("main");
    chrome(r);
    ({ home, work, about, project, nf }[r.page] || nf)(main, r);
  }
  document.addEventListener("click", e => {
    const z = e.target.closest("[data-zoom]"); if (z) { lightbox(+z.dataset.zoom); return; }
    const a = e.target.closest("a"); if (!a) return;
    if (a.dataset.scroll) { e.preventDefault(); const el = document.getElementById(a.dataset.scroll); if (el) { el.scrollIntoView(); if (a.dataset.scroll === "main") el.focus({ preventScroll: true }); } }
  });
  addEventListener("scroll", () => {
    const p = document.getElementById("prog"); if (!p || route().page !== "project") return;
    const h = document.documentElement; p.style.transform = `scaleX(${Math.min(1, h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight))})`;
  }, { passive: true });
  if (SINGLE) addEventListener("hashchange", () => { render(); scrollTo(0, 0); });
  build(); render();
  if (!SINGLE && location.hash) { const el = document.getElementById(location.hash.slice(1)); if (el) el.scrollIntoView(); }
})();
