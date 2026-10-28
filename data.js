/* ============================================================
   CONTENT FILE - the only file you need to edit day to day.
   Anything inside [square brackets] is a placeholder: the site
   highlights it in yellow so you can spot what is left to fill.
   Paragraphs: separate with a blank line (\n\n).
   ============================================================ */
window.PORTFOLIO = {
  site: {
    name: "[Your Name]",
    role: "[Product Designer]",
    location: "[City, Country]",
    headline: "Designing digital products that make complexity feel simple.",
    statement: "I turn complex user needs and business challenges into clear, intuitive, and scalable digital experiences.",
    intro: "[Two or three sentences: years of experience, the kind of products you design (SaaS, data-heavy tools, mobile apps), and the teams you work with.]",
    portrait: "", // e.g. "assets/portrait.jpg" (leave empty to hide)
    email: "[you@example.com]",
    cv: "assets/cv.pdf", // put your PDF in /assets with this name
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
      { label: "Behance", url: "https://www.behance.net/your-handle" }
    ],
    seoTitle: "[Your Name] - Senior Product Designer",
    seoDescription: "Portfolio of [Your Name], product designer focused on SaaS, data-heavy interfaces, design systems and mobile apps."
  },

  profile: [
    { t: "Product thinking", d: "[How you frame problems before designing: goals, constraints, trade-offs.]" },
    { t: "Research and discovery", d: "[The research methods you actually use and how findings shape decisions.]" },
    { t: "Interaction and information design", d: "[How you structure complex workflows, navigation and data.]" },
    { t: "UI craft and systems", d: "[Your approach to components, tokens and visual consistency.]" },
    { t: "Usability and accessibility", d: "[How you test and what accessibility standards you design to.]" },
    { t: "Collaboration", d: "[How you work with engineers, product managers and stakeholders.]" }
  ],

  experience: [
    {
      company: "[Company name]", role: "[Senior Product Designer]", dates: "[2022 - Present]",
      context: "[What the company and product do.]",
      points: ["[Main responsibility]", "[Key contribution, only what you can support]"]
    },
    {
      company: "[Previous company]", role: "[Product Designer]", dates: "[2019 - 2022]",
      context: "[Product or business context.]",
      points: ["[Main responsibility]", "[Key contribution]"]
    }
  ],

  education: [{ title: "[Degree, subject]", where: "[University]", dates: "[Years]" }],
  certifications: ["[Certification, issuer, year]"],
  skills: {
    "Design": ["[Interaction design]", "[Prototyping]", "[Design systems]"],
    "Research": ["[Usability testing]", "[Interviews]"],
    "Tools": ["[Figma]", "[FigJam]", "[Notion]"]
  },
  languages: [{ name: "[Italian]", level: "[Native]" }, { name: "[English]", level: "[Level]" }],

  /* ---------- PROJECTS ----------
     slug       unique, lowercase, no spaces (used in the URL)
     visible    false hides it everywhere
     featured   true shows it on the homepage
     order      lower number comes first
     cover      image path, e.g. "assets/projects/acme/cover.jpg"
     sections   free list: add, remove or reorder blocks as you like.
                Each has heading, body and optional images.
                image = { src, alt, caption, annotations: ["note 1", "note 2"] }
  */
  projects: [
    {
      slug: "project-one", visible: true, featured: true, order: 1,
      title: "[Project one]",
      type: "[B2B SaaS platform]", industry: "[Industry]",
      summary: "[One-sentence description of the product.]",
      problem: "[The user and business problem, in one or two sentences.]",
      role: "[Your role and scope]",
      challenge: "[The key design challenge.]",
      outcome: "[Only add a result you can support with evidence, otherwise leave empty.]",
      dates: "[2023 - 2024]", team: "[1 designer (me), 2 PMs, 5 engineers]",
      scope: "[Discovery, IA, UI, design system]", tools: "[Figma, ...]",
      cover: "", coverAlt: "[Describe the cover image]",
      links: [],
      sections: [
        { heading: "Executive summary", body: "[What the product does, the problem, your responsibilities and what changed.]" },
        { heading: "Context and problem", body: "[Business context, user pain points, constraints.]" },
        { heading: "Discovery and research", body: "[Only research actually performed, with key findings and implications.]" },
        { heading: "Problem framing and strategy", body: "[Problem statement, objectives, trade-offs, success criteria.]",
          images: [{ src: "", alt: "[Describe image]", caption: "[Caption]" }] },
        { heading: "Information architecture and flows", body: "[Navigation, task flows, before and after.]" },
        { heading: "Exploration and decisions", body: "[Alternatives considered and why you chose this direction.]" },
        { heading: "UI and design system", body: "[Visual direction, components, responsive and accessibility decisions.]",
          images: [{ src: "", alt: "[Describe image]", caption: "[Caption]", annotations: ["[Decision 1]", "[Decision 2]"] }] },
        { heading: "Validation and iteration", body: "[Tests or feedback actually collected and what changed because of them.]" },
        { heading: "Outcomes and reflection", body: "[Measured results if available, lessons learned, what you would do next.]" }
      ]
    },
    {
      slug: "project-two", visible: true, featured: true, order: 2,
      title: "[Project two]", type: "[Mobile application]", industry: "[Industry]",
      summary: "[One-sentence description.]", problem: "[Problem statement.]",
      role: "[Role and scope]", challenge: "[Key design challenge.]", outcome: "",
      dates: "[Year]", team: "[Team]", scope: "[Scope]", tools: "[Tools]",
      cover: "", coverAlt: "[Describe the cover image]", links: [],
      sections: [{ heading: "Overview", body: "[Write the case study.]" }]
    },
    {
      slug: "project-three", visible: true, featured: true, order: 3,
      title: "[Project three]", type: "[Data-heavy dashboard]", industry: "[Industry]",
      summary: "[One-sentence description.]", problem: "[Problem statement.]",
      role: "[Role and scope]", challenge: "[Key design challenge.]", outcome: "",
      dates: "[Year]", team: "[Team]", scope: "[Scope]", tools: "[Tools]",
      cover: "", coverAlt: "[Describe the cover image]", links: [],
      sections: [{ heading: "Overview", body: "[Write the case study.]" }]
    }
  ]
};
