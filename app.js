(function () {
  const D = window.PORTFOLIO, S = D.site;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const t = s => esc(s).replace(/\[[^\]]+\]/g, m => "<mark>" + m + "</mark>");
  const paras = s => String(s || "").split(/\n\n+/).map(p => "<p>" + t(p) + "</p>").join("");
  const projects = D.projects.filter(p => p.visible !== false).sort((a, b) => (a.order || 99) - (b.order || 99));
  const page = document.body.dataset.page;
  const home = page === "home" ? "" : "index.html";

  function fig(i, cls) {
    i = i || {};
    const media = i.src
      ? `<img src="${esc(i.src)}" alt="${esc(i.alt)}" loading="lazy">`
      : `<div class="ph-img" role="img" aria-label="${esc(i.alt || "Image placeholder")}">Image placeholder</div>`;
    const notes = (i.annotations || []).length ? `<ol class="notes">${i.annotations.map(n => `<li>${t(n)}</li>`).join("")}</ol>` : "";
    return `<figure class="fig ${cls || ""}">${media}${i.caption ? `<figcaption>${t(i.caption)}</figcaption>` : ""}${notes}</figure>`;
  }

  function setMeta(title, desc) {
    document.title = title;
    const set = (sel, v) => { const m = document.querySelector(sel); if (m) m.setAttribute("content", v); };
    set('meta[name="description"]', desc); set('meta[property="og:title"]', title); set('meta[property="og:description"]', desc);
  }

  document.getElementById("hdr").innerHTML = `<a class="skip" href="#main">Skip to content</a>
    <div class="wrap"><a class="brand" href="index.html">${t(S.name)}</a>
    <nav aria-label="Main"><ul>
      <li><a href="${home}#work">Work</a></li><li><a href="${home}#profile">Profile</a></li>
      <li><a href="${home}#experience">Experience</a></li><li><a href="${home}#contact">Contact</a></li>
    </ul></nav></div>`;
  document.getElementById("ftr").innerHTML = `<div class="wrap">© ${new Date().getFullYear()} ${t(S.name)}. ${t(S.role)}, ${t(S.location)}.</div>`;

  const main = document.getElementById("main");

  function workItem(p) {
    const cover = fig({ src: p.cover, alt: p.coverAlt || p.title });
    return `<article class="work">
      <a class="thumb" href="project.html?p=${encodeURIComponent(p.slug)}" tabindex="-1" aria-hidden="true">${cover}</a>
      <div class="body"><p class="meta">${t(p.type)}, ${t(p.industry)}</p>
        <h3><a href="project.html?p=${encodeURIComponent(p.slug)}">${t(p.title)}</a></h3>
        <p>${t(p.summary)}</p>
        <dl><div><dt>Problem</dt><dd>${t(p.problem)}</dd></div>
        <div><dt>My role</dt><dd>${t(p.role)}</dd></div>
        <div><dt>Design challenge</dt><dd>${t(p.challenge)}</dd></div>
        ${p.outcome ? `<div><dt>Outcome</dt><dd>${t(p.outcome)}</dd></div>` : ""}</dl>
        <div class="btns"><a class="btn" href="project.html?p=${encodeURIComponent(p.slug)}">Read case study<span class="sr" hidden> for ${esc(p.title)}</span></a></div>
      </div></article>`;
  }

  function renderHome() {
    setMeta(S.seoTitle, S.seoDescription);
    const feat = projects.filter(p => p.featured).slice(0, 4);
    const chips = a => `<ul class="chips">${a.map(x => `<li>${t(x)}</li>`).join("")}</ul>`;
    main.innerHTML = `
    <section class="hero"><div class="wrap"><div class="hero-grid ${S.portrait ? "has-p" : ""}"><div>
      <h1>${t(S.headline)}</h1><p class="statement">${t(S.statement)}</p>
      <p class="who">${t(S.name)}, ${t(S.role)}, ${t(S.location)}</p><p class="muted">${t(S.intro)}</p>
      <div class="btns"><a class="btn pri" href="#work">Explore selected work</a>
        <a class="btn" href="${esc(S.cv)}" download>Download CV</a><a class="btn" href="#contact">Get in touch</a></div></div>
      ${S.portrait ? `<img class="portrait" src="${esc(S.portrait)}" alt="Portrait of ${esc(S.name)}">` : ""}</div></div></section>
    <section id="work" aria-labelledby="h-work"><div class="wrap">
      <div class="sec-head"><h2 id="h-work">Selected work</h2></div>${feat.map(workItem).join("")}</div></section>
    <section id="profile" aria-labelledby="h-prof"><div class="wrap"><div class="sec-head"><h2 id="h-prof">How I work</h2></div>
      <div class="cols">${D.profile.map(x => `<div><h3>${t(x.t)}</h3><p>${t(x.d)}</p></div>`).join("")}</div></div></section>
    <section id="experience" aria-labelledby="h-exp"><div class="wrap"><div class="sec-head"><h2 id="h-exp">Experience</h2></div>
      <ol class="tl">${D.experience.map(e => `<li><h3>${t(e.role)}, ${t(e.company)}</h3><p class="d">${t(e.dates)}</p>
        <p>${t(e.context)}</p><ul>${e.points.map(x => `<li>${t(x)}</li>`).join("")}</ul></li>`).join("")}</ol>
      <div class="two">
        <div><h3>Skills and tools</h3>${Object.entries(D.skills).map(([k, v]) => `<p class="muted" style="margin-bottom:6px">${esc(k)}</p>${chips(v)}`).join("")}</div>
        <div><h3>Education</h3><ul class="plain">${D.education.map(e => `<li>${t(e.title)}<br><span class="muted">${t(e.where)}, ${t(e.dates)}</span></li>`).join("")}</ul>
          <h3 style="margin-top:28px">Certifications</h3><ul class="plain">${D.certifications.map(c => `<li>${t(c)}</li>`).join("")}</ul></div>
        <div><h3>Languages</h3><ul class="plain">${D.languages.map(l => `<li>${t(l.name)}<br><span class="muted">${t(l.level)}</span></li>`).join("")}</ul></div>
      </div></div></section>
    <section id="contact" class="contact" aria-labelledby="h-con"><div class="wrap">
      <h2 id="h-con">Open to senior product design roles.</h2>
      <p class="muted" style="margin-top:20px">If you are hiring, or want to talk about a product challenge, write to me.</p>
      <a class="big" href="mailto:${esc(S.email)}">${t(S.email)}</a>
      <div class="links">${S.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}<a href="${esc(S.cv)}" download>CV (PDF)</a></div></div></section>`;
  }

  function renderProject() {
    const slug = new URLSearchParams(location.search).get("p");
    const i = projects.findIndex(p => p.slug === slug), p = projects[i];
    if (!p) return renderNotFound();
    setMeta(`${p.title} - ${S.name}`, p.summary);
    const facts = [["Product", p.type], ["Industry", p.industry], ["Timeline", p.dates], ["My role", p.role], ["Team", p.team], ["Scope", p.scope], ["Tools and methods", p.tools]];
    const nx = projects[(i + 1) % projects.length];
    main.innerHTML = `
    <section class="cs-top"><div class="wrap"><p class="muted"><a href="index.html#work">Back to selected work</a></p>
      <h1>${t(p.title)}</h1><p class="statement" style="font-size:1.3rem;margin-top:24px">${t(p.summary)}</p>
      <dl class="facts">${facts.filter(f => f[1]).map(f => `<div><dt>${f[0]}</dt><dd>${t(f[1])}</dd></div>`).join("")}
        ${(p.links || []).map(l => `<div><dt>Link</dt><dd><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></dd></div>`).join("")}</dl></div></section>
    <div class="wrap">${fig({ src: p.cover, alt: p.coverAlt || p.title })}
      ${p.sections.map((s, n) => `<section class="cs-sec" aria-labelledby="s${n}" style="border-top:1px solid var(--line)"><h2 id="s${n}">${t(s.heading)}</h2>
        <div><div class="txt">${paras(s.body)}</div>${(s.images || []).length ? `<div class="figs">${s.images.map(x => fig(x)).join("")}</div>` : ""}</div></section>`).join("")}
      ${nx && nx !== p ? `<a class="next" href="project.html?p=${encodeURIComponent(nx.slug)}"><span>Next project</span><strong>${t(nx.title)}</strong></a>` : ""}</div>`;
  }

  function renderNotFound() {
    setMeta(`Page not found - ${S.name}`, "This page does not exist.");
    main.innerHTML = `<section class="nf"><div class="wrap"><h1>This page does not exist.</h1>
      <p class="muted" style="margin-top:20px">The link may be broken or the project may have been removed.</p>
      <div class="btns"><a class="btn pri" href="${location.pathname.includes("/404") ? "./" : "index.html"}">Back to homepage</a></div></div></section>`;
  }

  ({ home: renderHome, project: renderProject, nf: renderNotFound })[page]();
  if (location.hash) { const el = document.querySelector(location.hash); if (el) el.scrollIntoView(); }
})();
