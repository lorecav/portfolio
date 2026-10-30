/* ============================================================
   CONTENT FILE - the only file you need to edit day to day.
   Anything inside [square brackets] is a placeholder: the site
   highlights it in yellow so you can spot what is left to fill.

   Text helpers inside any string:
   - blank line = new paragraph
   - lines starting with "- " = bullet list
   - **text** = bold

   Section fields (all optional except heading):
   heading, body, table {head, rows}, facts [[label, text]],
   after (text shown after table/facts), images, cols (images per row),
   figNote (shared caption under the images).
   Image: { src, alt, caption, wide, annotations }.
   In a caption, text after "What to notice:" is styled as a note.
   ============================================================ */
window.PORTFOLIO = {
  site: {
    name: "Lorenzo Cavalieri",
    role: "Product Designer UX/UI",
    location: "Lucca, Italy",
    headline: "Designing digital products that make complexity feel simple.",
    statement: "I turn complex user needs and business challenges into clear, intuitive, and scalable digital experiences.",
    intro: "Product Designer with 5+ years of experience combining UX design, data analysis and a strong focus on accessibility. I turn user needs, behavioural data and complex information into clear, usable digital experiences, and work in Figma from early exploration to polished interfaces.",
    portrait: "",
    email: "L.cavalieri259@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/lorenzo-cavalieri259/" }
    ],
    seoTitle: "Lorenzo Cavalieri - Product Designer UX/UI",
    seoDescription: "Portfolio of Lorenzo Cavalieri, product designer working on B2B SaaS, health-tech, data-heavy interfaces, design systems and accessibility."
  },

  profile: [
    { t: "Evidence-based design", d: "My work is grounded in evidence, from stakeholder input, specifications and behavioural data to usability testing where it is possible." },
    { t: "Accessibility from the start", d: "Clear hierarchy, predictable interactions, keyboard navigation, focus order and readable interfaces. My master's thesis was on digital accessibility and inclusive design." },
    { t: "Structure and interaction", d: "User journeys, task flows, information architecture and wireframes that make complex workflows easier to follow." },
    { t: "Design systems", d: "Component-based design, tokens, documentation and developer hand-off, so decisions stay consistent across screens." },
    { t: "Collaboration", d: "Close work with product managers, developers and stakeholders across the product lifecycle, in hybrid and fully remote teams." },
    { t: "AI-assisted workflow", d: "Claude and Cursor for research synthesis, ideation and rapid prototyping, with design judgement staying with me." }
  ],

  experience: [
    {
      company: "Hastega", role: "Product Designer UX/UI", dates: "Aug 2024 - Present",
      context: "B2B and consumer digital products.",
      points: ["Designed user experiences for 10+ B2B and consumer digital products, from discovery to delivery.", "Worked closely with product managers, developers and stakeholders throughout the product lifecycle.", "Created user journeys, wireframes, prototypes and responsive interfaces in Figma.", "Contributed to scalable design systems and developer hand-off documentation, and improved accessibility across projects following WCAG guidelines."]
    },
    {
      company: "Publicis Groupe", role: "UX Researcher", dates: "Sep 2022 - Sep 2023",
      context: "International environment with global teams.",
      points: ["Developed digital strategies and analysed user behaviour to support business decisions.", "Presented campaign performance and market insights through KPI reporting."]
    },
    {
      company: "Wolters Kluwer", role: "Web Designer", dates: "Nov 2020 - Sep 2022",
      context: "Enterprise websites on Sitecore CMS.",
      points: ["Managed enterprise websites through Sitecore CMS and delivered CMS training to international teams.", "Supported SEO, analytics and digital content optimisation."]
    }
  ],

  education: [
    { title: "UX Design Bootcamp", where: "StartToImpact", dates: "Sep 2023 - Jul 2024" },
    { title: "M.A. Advertising Communication", where: "University of Perugia. Thesis on digital accessibility and inclusive design, 110/110 cum laude", dates: "Oct 2018 - Nov 2022" },
    { title: "B.A. Communication Science", where: "University of Pisa", dates: "Oct 2014 - Nov 2017" }
  ],
  certifications: [
    { title: "Foundation in Human-Centred Design (CPUX-F)", issuer: "UXQB, International Usability and UX Qualification Board", image: "assets/certs/uxqb.webp", alt: "UXQB certified in Foundation in Human-Centred Design, CPUX-F, badge issued through Certible", url: "https://www.certible.com/badge/fb25dcab-052b-4cc6-9ab8-24121d7a5b47/" },
    { title: "UI Design Patterns for Successful Software", issuer: "Interaction Design Foundation (IxDF)", date: "January 2026", note: "Distinction: Top 10% in class", image: "assets/certs/ixdf-ui-design-patterns.webp", alt: "IxDF Course Certificate awarded to Lorenzo Cavalieri for UI Design Patterns for Successful Software, January 27th 2026", zoom: true }
  ],
  skills: {
    "UX and product design": ["User journeys", "Task flows", "Information architecture", "Wireframing", "Prototyping", "UX writing"],
    "Research and validation": ["Stakeholder and user interviews", "Usability testing", "Competitive analysis", "Product analytics"],
    "Systems and accessibility": ["Design systems", "Developer hand-off", "WCAG", "Keyboard and focus order"],
    "Tools": ["Figma", "Claude", "Cursor", "HTML, CSS, TypeScript (reading and AI-assisted)"],
    "Domains": ["B2B SaaS", "Enterprise software", "Data platforms", "Data visualisation"]
  },
  languages: [{ name: "Italian", level: "Native" }, { name: "English", level: "Professional (C1)" }, { name: "Spanish", level: "Basic (B2)" }],

  projects: [
    /* =====================================================  AKERN  */
    {
      slug: "akern-nutrition", visible: true, featured: true, order: 1, hideCoverOnPage: true,
      title: "Akern Nutrition",
      type: "B2B2C health-tech: desktop clinical software and two mobile apps", industry: "Health-tech",
      summary: "A recommendation loop that carries supplement advice from a nutritionist’s patient record to a patient’s phone and into an external shop.",
      problem: "Nutritionists could only suggest products informally. A new supplement line and e-commerce needed a reliable hand-off across three products, two audiences and 15 ways the journey can branch or fail.",
      role: "Sole product designer: consumer app and professional app end to end, plus the Akern Nutrition flow and part of the back-office inside Bodygram.",
      challenge: "Make a recommendation travel from a patient record to a patient’s phone and into an external shop, across accounts, devices, platforms and failure states.",
      outcome: "Released on all surfaces. Post-launch metrics were not shared, so no measured results are claimed.",
      dates: "About 1-2 months of continuous work",
      team: "Product manager (author of the use-case and API specification), development team, client stakeholders at Akern. I was the sole designer.",
      scope: "Consumer app, professional app, Bodygram flow, back-office, design system, English localisation",
      tools: "Figma; Claude with the Figma connector (see the AI section)",
      cover: "assets/projects/akern/cover-mobile.webp",
      coverAlt: "Four Akern mobile app screens: professional app home, account activation, and the consumer app home with recommendations grouped by nutritionist",
      links: [],
      sections: [
        { heading: "Overview",
          body: "Akern launched its own supplement line and a new e-commerce. Nutritionists had only ever recommended products informally. I designed how a recommendation is composed in Bodygram, delivered as an invitation, activated in a consumer app and turned into a pre-filled cart, and how each of the 15 ways that journey can branch or fail is handled, so the patient is never stranded.\n\nThe work spans three products: Bodygram, a legacy desktop clinical software used by nutritionists; the Akern professional app; and a new consumer app for patients. An internal back-office completes the picture.",
          facts: [["Status", "Released."],
            ["Constraints", "Legacy desktop UI; external e-commerce (cart not rebuilt in-app); platform limits on deferred deep links (iOS clipboard vs Android Install Referrer); security requirements on invitation codes; health-data context."]] },

        { heading: "Context and challenge",
          body: "**Before.** Akern did not have its own supplement line, so nutritionists had no reason to prescribe specific products; at most they suggested some informally. With a new line and a new e-commerce, Akern asked for a way for nutritionists to recommend its products to patients, with the stated goals of increasing sales and promoting the new e-commerce.\n\nThe request read like a feature: “let nutritionists send product suggestions”. The underlying problem was a hand-off across three systems and two audiences:\n\n- **Nutritionists** work in Bodygram, inside a patient record. They need to compose a recommendation quickly, with single products or Akern protocols, and know whether it reached the patient.\n- **Patients** may have no app, no account, a different email, or be signed in as someone else. They need to receive the recommendation, understand who sent it and act on it.\n- **Akern** needs the recommendation to end in a purchase on its external e-commerce, and visibility on the funnel.\n\n**Why it was hard.** The happy path is short; the real journey is not. The PM’s specification lists 15 use cases: invitation by link, manual code or QR; patient with or without an account; signed in with a matching or a different email; signed in as a professional; app not installed; password reset mid-flow; network failure; expired, revoked or already-used invitations; and a wrong email on the invitation. Each undesigned branch is a dead end for a patient and a lost sale for the client.",
          images: [{ src: "assets/projects/akern/bodygram-history.webp", alt: "Bodygram patient record: two entry actions, create a recommendation and invite to the app only, above a history table with status and actions", caption: "Fig 01 · Bodygram · Akern Nutrition in the patient record. Two entry actions (create a recommendation, invite to the app only) and a history of invitations and recommendations with status and actions." }] },

        { heading: "Evidence and problem framing",
          body: "What the design was based on, and what it wasn’t.",
          table: { head: ["Source", "What it provided", "How it shaped the design"], rows: [
            ["Client brief and iterations with Akern", "Business goal (sales, e-commerce promotion); request to support Akern protocols alongside single products.", "Protocols became a first-class tab in the selection step; the consumer app ends in the e-commerce, not in-app checkout."],
            ["Stakeholders", "Typical usage patterns and user needs of nutritionists and patients, reported second-hand.", "Prioritised speed of composition for nutritionists and a minimal, list-based experience for patients."],
            ["PM use-case and API specification", "15 acceptance-criteria cases, error codes and their mapping to screens, API behaviour (e.g. idempotent accept, renewal limit).", "Became the backbone of the consumer flows; I reorganised the Figma file by use case so each case maps to a sequence of screens."],
            ["Development team", "Technical constraints: long invitation codes, iOS clipboard behaviour vs Android Install Referrer, external cart.", "Drove the code input, the iOS pre-alert screen and the cart link (Decision 3)."],
            ["Existing product", "Bodygram’s legacy UI and patterns; the existing professional app structure.", "Desktop work stayed consistent with what already existed rather than introducing a new visual language."]
          ] },
          after: "**Evidence gap, stated plainly.** There was no direct user research or usability testing with nutritionists or patients; user needs came through stakeholders. Design decisions were therefore grounded in the specification, business requirements and technical constraints, and this case study does not claim otherwise.\n\n**Framing.** I treated the project as a delivery chain, not a set of screens: compose → send → receive → activate → act → measure. The design question at every link was the same: if this step fails or branches, what does the user see, and how do they get back on track?" },

        { heading: "Design strategy and priorities",
          body: "- **Never strand the patient.** Every error code in the specification gets a dedicated, actionable screen with a clear next step, and different copy when the user is signed in or signed out.\n- **A recommendation, not a shop.** The consumer app shows what the nutritionist recommended and hands off to the e-commerce with a pre-filled cart; it does not replicate the store.\n- **Fit the nutritionist’s existing workflow.** The feature lives inside the Bodygram patient record and follows its existing patterns, even where the UI is dated.\n- **Design within platform reality.** Where iOS or security requirements imposed friction, design around it explicitly instead of hiding it.\n\n**Deprioritised:** a modern redesign of the Bodygram desktop UI (out of scope, legacy software) and any in-app purchase experience (the cart belongs to the e-commerce)." },

        { heading: "Decision 1 · The consumer Home is a list of recommendations, not an e-commerce",
          facts: [
            ["Context", "The patient app needed a Home that served Akern’s sales goal. An earlier direction (and an early AI-generated interpretation) treated it as a shop: hero banner, categories, product grid, cart tab."],
            ["Evidence", "Client requirement: purchases happen on the new external e-commerce. The patient’s real task is “do what my nutritionist recommended”, often from more than one nutritionist."],
            ["Decision", "A list of recommendation cards grouped by nutritionist, with a filter by nutritionist. Each card shows sender, date, status (New / Expiring), the full list of supplements with area of use, validity, and one CTA: “Go to cart”, which opens the e-commerce with a pre-filled cart. The Cart tab was removed from the bottom navigation in every screen."],
            ["Trade-off", "Gains clarity and trust (the recommendation is clearly the nutritionist’s, not marketing) and avoids duplicating the store. Gives up in-app control of checkout and cross-selling; conversion depends on the hand-off to the e-commerce."],
            ["Consequence", "The Home became the bridge between clinical advice and purchase. During review I also made the supplement list fully visible instead of truncated: a patient should see everything that was prescribed before leaving the app."],
            ["Limitation", "No usability data on whether patients prefer per-nutritionist grouping; purchase conversion from the hand-off is not available."]],
          images: [
            { src: "assets/projects/akern/home-before.webp", phone: true, alt: "Previous shop-style Home: hero banner, product categories, product grid and a cart tab", caption: "Before (reconstructed)" },
            { src: "assets/projects/akern/home-after.webp", phone: true, alt: "New Home: recommendation cards grouped by nutritionist, each with the full supplement list and a Go to cart button", caption: "After" }],
          cols: 2,
          figNote: "Fig 02 · Consumer app · Home, before and after. Left: the previous shop-style Home (reconstructed). Right: recommendations grouped by nutritionist with the full supplement list, an external “Go to cart” CTA and no Cart tab." },

        { heading: "Decision 2 · Tie every invitation to an email, and design for when that is wrong",
          facts: [
            ["Context", "Activation links the consumer account to the patient record in Bodygram, so the patient sees their exams and recommendations. A link or code that anyone could redeem would expose health data."],
            ["Evidence", "A team decision during specification; reflected in the PM’s cases 6, 8, 9, 14 and 15."],
            ["Decision", "The invitation activates only with an account holding that email. I designed the consequences: login with the email locked and a “You already have an account” banner (case 6); “Invitation for a different address” with the masked invitation email next to the signed-in email and “Sign out and use the correct account” (case 8); a “Not your email?” bottom sheet that explains the email can only be corrected by the nutritionist and does not let the patient proceed (case 15); a dialog for professionals who must sign out first (case 7)."],
            ["Trade-off", "Security and data correctness over frictionless activation. Some patients will hit an extra screen and may need to contact their nutritionist."],
            ["Consequence", "Mismatch states became explicit, explainable screens instead of generic errors; the nutritionist’s “Correct email and resend” action in Bodygram closes the loop."],
            ["Limitation", "How often mismatches happen in practice is unknown; no support-ticket data was available to me."]],
          images: [
            { src: "assets/projects/akern/mismatch-address.webp", phone: true, alt: "Screen titled Invitation for a different address, showing the masked invitation email and the signed-in email", caption: "Different address (case 8)" },
            { src: "assets/projects/akern/activate-not-your-email.webp", phone: true, alt: "Activate your account form with locked prefilled fields and a Not your email link", caption: "“Not your email?” link" },
            { src: "assets/projects/akern/not-your-email-sheet.webp", phone: true, alt: "Bottom sheet explaining that the invitation email can only be corrected by the nutritionist", caption: "“Not your email?” sheet (case 15)" },
            { src: "assets/projects/akern/pro-signout.webp", phone: true, alt: "Dialog telling a professional user they must sign out before accepting the invitation as a patient", caption: "Professional sign-out (case 7)" }],
          cols: 2,
          figNote: "Fig 03 · Consumer app · Email-bound invitation and recovery paths. Each screen explains what happened, shows the relevant email(s) and offers one recovery action." },

        { heading: "Decision 3 · Design around platform constraints instead of hiding them",
          facts: [
            ["Context", "Three technical constraints from the development team: (1) invitation codes became long (AKN- plus 25 characters) so they cannot be guessed; (2) on iOS the App Store passes no data to a newly installed app, the only bridge is the clipboard, and reading it triggers a non-customisable system alert, while on Android the Install Referrer delivers the invitation silently; (3) the cart lives on an external e-commerce."],
            ["Evidence", "Development constraints and the PM specification (cases 11 and 2)."],
            ["Decision", "(1) Replaced the 6-box segmented code input with a free-text field with a prominent **Paste** button, helper copy explaining that case and symbols matter, and a separate “Where do I find the code?” help screen with a preview of the invitation email. (2) On iOS first launch, only if a link is in the clipboard, a bottom sheet “Received an invitation?” appears before the system alert, with a miniature of the alert and the instruction to tap “Allow Paste”, plus a privacy reassurance. Nothing is designed for Android, by design. (3) An explicit external-link CTA."],
            ["Trade-off", "An extra step on iOS, and a less “elegant” code entry, in exchange for not scaring users with an unexplained system prompt and not forcing them to type 29 characters."],
            ["Consequence", "The constraint is visible and explained at the moment it matters; the fallback (manual code or QR from the invitation box) is always one tap away."],
            ["Limitation", "The share of iOS users who deny the paste permission is not measured."]],
          images: [
            { src: "assets/projects/akern/ios-clipboard.webp", phone: true, alt: "Bottom sheet Received an invitation with a miniature of the iOS Allow Paste prompt", caption: "iOS pre-alert sheet" },
            { src: "assets/projects/akern/code-paste-first.webp", phone: true, alt: "Enter the invitation code screen with a long code field and a Paste button", caption: "Paste-first code field" },
            { src: "assets/projects/akern/where-code.webp", phone: true, alt: "Help screen Where do I find the code, previewing the invitation email in three steps", caption: "Help screen" }],
          cols: 3,
          figNote: "Fig 04 · Consumer app · Designing around iOS and long codes." },

        { heading: "Decision 4 · Protocols and single products inside a legacy desktop UI",
          facts: [
            ["Context", "Nutritionists compose recommendations inside Bodygram’s patient record, an old interface the project could not redesign."],
            ["Evidence", "Client request to support Akern protocols as well as single products; existing Bodygram patterns."],
            ["Decision", "A 3-step modal (selection → review → send). Step 1 has two tabs, **Akern protocols** and **Single products**; the products tab uses a split layout, with a searchable, filterable catalogue on the left and a persistent “Current selection” with quantities, frequency and total on the right. Send supports email, WhatsApp or SMS and a QR for in-clinic use. The patient record gains a history of invitations and recommendations with status and actions (view, resend, revoke)."],
            ["Trade-off", "Consistency with the existing software over a modern visual language; the split panel adds density, accepted because the nutritionist needs to see the running selection and total while browsing."],
            ["Consequence", "The feature reads as part of Bodygram rather than a bolt-on, and every send leaves a traceable record with status."],
            ["Limitation", "Not tested with nutritionists before release; efficiency of composing a recommendation was not measured."]],
          images: [
            { src: "assets/projects/akern/compose-step1.webp", alt: "Step 1 of the modal: single products catalogue on the left and the current selection with quantities and total on the right", caption: "Step 1 · Protocols or single products", wide: true },
            { src: "assets/projects/akern/compose-step2.webp", alt: "Step 2 of the modal: choose the delivery channel, email, WhatsApp or SMS", caption: "Step 2 · Delivery channel" },
            { src: "assets/projects/akern/compose-step3.webp", alt: "Step 3 of the modal: recap with message preview and QR code", caption: "Step 3 · Confirm and send" }],
          cols: 2,
          figNote: "Fig 05 · Bodygram · Composing and sending a recommendation. Rendered from the legacy UI, translated for the case study." },

        { heading: "The solution",
          body: "One recommendation, three products, every branch covered.",
          facts: [
            ["Bodygram (desktop)", "Akern Nutrition tab in the patient record: create a recommendation or invite to the app only; history with statuses (Active, Expired…) and actions; 3-step composition with protocols or products; channel and QR."],
            ["Back-office", "Recommendations table and detail, invitations management and detail, and a CRM dashboard defining the funnel sent → opened → activated → purchased and per-channel performance (WhatsApp vs email)."],
            ["Professional app", "Designed end to end from the client brief: home with Digital anthropometry, BLE bioimpedance, Akern Nutrition, Akern Connect, Academy, Shop; patient groups and exams; BLE connection flow; BIA reading from camera; onboarding; App Store materials in IT and EN."],
            ["Consumer app", "Sign in / Sign up with Apple and Google and an always-present “Received an invitation?” box (scan QR or enter code); activation with prefilled, locked fields; in-app redemption from Profile; Home as recommendation list; exams history with nutritionist filter; full set of invitation error states."],
            ["Use-case map", "I reorganised the consumer file into one section per PM use case (01–15 plus an error summary), each showing the screen sequence and clearly marked “to be designed” placeholders where screens were missing, later filled (network error, renewal confirmation, renewal limit)."],
            ["Localisation", "Full English version of the consumer flows and of the design system, side by side with the Italian one."]],
          after: "**State-screen pattern.** All invitation states share one template: an icon badge whose tone encodes severity (red invalid, amber expired or mismatch, teal informational, green success, slate network), a title, an explanation, an info box with causes or next steps, and one primary action. Signed-in and signed-out variants differ in copy and actions (for example “Sign in as usual” vs “Back to Home”), because a misleading CTA is worse than none." },

        { heading: "Use-case map: case 02 end to end",
          body: "The consumer file is organised by use case. Case 02 (manual code, no account) runs from role selection to Home.",
          images: [
            { src: "assets/projects/akern/uc02-role.webp", phone: true, alt: "Role selection screen asking whether the user is a nutritionist or a private user", caption: "Role selection" },
            { src: "assets/projects/akern/uc02-login.webp", phone: true, alt: "Sign in screen with a Received an invitation box offering QR scan or manual code", caption: "Sign in with the invitation box" },
            { src: "assets/projects/akern/uc02-code.webp", phone: true, alt: "Enter the invitation code screen", caption: "Manual code" },
            { src: "assets/projects/akern/uc02-activation.webp", phone: true, alt: "Activate your account form with prefilled, locked fields", caption: "Prefilled activation" },
            { src: "assets/projects/akern/uc02-success.webp", phone: true, alt: "Success dialog Invitation linked with a Go to Home button", caption: "“Invitation linked”" },
            { src: "assets/projects/akern/uc02-home.webp", phone: true, alt: "Home with recommendation cards grouped by nutritionist", caption: "Home" }],
          cols: 3,
          figNote: "Fig 06a · Consumer app · Use-case map." },

        { heading: "Invitation errors: one screen per state",
          body: "Every error code in the specification maps to a dedicated screen, with tone encoding severity.",
          images: [
            { src: "assets/projects/akern/err-invalid.webp", phone: true, alt: "Invalid invitation screen with a red icon and possible causes", caption: "Invalid invitation" },
            { src: "assets/projects/akern/err-expired.webp", phone: true, alt: "Code expired screen with an amber icon and a Request new code button", caption: "Code expired" },
            { src: "assets/projects/akern/err-new-sent.webp", phone: true, alt: "New invitation sent screen with a green icon and a masked email", caption: "New invitation sent" },
            { src: "assets/projects/akern/err-limit.webp", phone: true, alt: "Code expired screen showing a renewal limit reached message and a disabled button", caption: "Renewal limit reached" },
            { src: "assets/projects/akern/err-already-active.webp", phone: true, alt: "Invitation already activated screen with guidance to sign in", caption: "Already activated" },
            { src: "assets/projects/akern/err-other-address.webp", phone: true, alt: "Invitation for a different address screen with both emails shown", caption: "Different address" }],
          cols: 3,
          figNote: "Fig 06b · Consumer app · Invitation error states." },

        { heading: "Professional app",
          body: "Designed end to end from the client brief. Akern Nutrition sits among the clinical tools, next to bioimpedance reading from the device screen through the camera.",
          images: [
            { src: "assets/projects/akern/pro-home.webp", phone: true, alt: "Professional app home with tiles for Digital Anthropometry, Bioimpedance, Akern Nutrition, Connect, Academy, Shop and Support", caption: "Home" },
            { src: "assets/projects/akern/pro-bia-frame.webp", phone: true, alt: "Camera view asking the user to centre the BIA device screen inside the frame", caption: "BIA reading · frame the device" },
            { src: "assets/projects/akern/pro-bia-success.webp", phone: true, alt: "Camera view confirming the reading was complete and read correctly", caption: "BIA reading · success" }],
          cols: 3,
          figNote: "Fig 07 · Professional app · Home and BIA reading from camera." },

        { heading: "Design system",
          body: "Variables in two layers (primitives and semantic tokens for background, text, border, brand and feedback), spacing and radius scales, 15 text styles, elevation styles and core components (Button, Input, Chip, Badge, Info box, Icon badge, Dialog), extracted from the screens already designed.",
          images: [{ src: "assets/projects/akern/design-system-colours.webp", alt: "Colour page of the design system listing teal, neutral, red, amber and green primitives with hex values", caption: "Fig 08 · Design system. Two-layer token model, extracted from the screens." }] },

        { heading: "Back-office CRM dashboard",
          body: "The funnel sent → opened → activated → purchased and per-channel performance define what should be measured. **All figures shown are mockup placeholders, not results.**",
          images: [{ src: "assets/projects/akern/crm-dashboard.webp", alt: "CRM metrics dashboard with a conversion funnel, performance by channel, a monthly trend and invitation status distribution", caption: "Fig 09 · Back-office · CRM dashboard. Mockup data only." }] },

        { heading: "Collaboration and implementation",
          body: "The PM owned the use-case and API specification; I owned the experience design across surfaces. The relationship with development was a constant exchange: we repeatedly went back to edge cases together and filled the missing parts, for example the network-error state, the renewal confirmation and limit, and the signed-in variant of “already activated”.\n\n- **Constraints changed the design, not the other way round:** the long code replaced the segmented input; the iOS clipboard behaviour introduced a dedicated pre-alert screen; Android needed nothing.\n- **Spec to screens:** organising Figma by use case gave developers a one-to-one map between acceptance criteria and screens, and exposed gaps early as visible placeholders.\n- **Flagged inconsistencies rather than patching silently,** for example the success popup reused over a background that doesn’t match every entry point, or where the spec and a screen disagreed on which error to show.\n\nImplementation was done by the development team; I did not own it." },

        { heading: "Outcomes",
          facts: [
            ["Delivery", "All surfaces released: consumer app, professional app, Bodygram Akern Nutrition flow and back-office."],
            ["Operational", "Every error code in the specification maps to a dedicated screen; the 15 use cases are each represented as an end-to-end sequence."],
            ["Maintainability", "A token-based design system and components extracted from real screens; an English version of flows and system."],
            ["Quantitative", "Not available. No post-launch metrics were shared with me. The CRM dashboard figures are fictional mockup data and are not results."]],
          after: "**Proposed metrics (not results):**\n\n- Invitation → activation rate, split by channel (email, WhatsApp, SMS) and entry (link, code, QR).\n- Recommendation → e-commerce click-through on “Go to cart”, and purchase conversion per recommendation.\n- Frequency of each error state (mismatch, expired, network) and iOS paste-permission acceptance, to spot where the chain breaks." },

        { heading: "Reflection: what I would do next",
          body: "- **Validate with real users.** A short round with nutritionists on composition speed, and with patients on the Home and the mismatch screens.\n- **Instrument the chain.** The funnel is already defined in the back-office; connecting it to real data would turn this case study from delivery to impact.\n- **One component set, two languages.** The design system currently duplicates components per language; text properties would avoid maintaining two copies.\n- **Legacy debt.** The Bodygram UI limits clarity; the new flow is a good candidate pattern for a future refresh." },

        { heading: "Practical use of AI",
          body: "I used Claude (Anthropic) connected to Figma to build and modify frames directly in the files. AI supported the design work; it is not a feature of the product.\n\n**Where I used it:**\n\n- Generating state screens from existing patterns (network error, renewal confirmation and limit, signed-in “already activated”, “Where do I find the code?”).\n- Reorganising the consumer file into one section per use case from the PM’s specification, with placeholders for missing screens.\n- Extracting a design system (variables, text and effect styles, components) from the screens already designed.\n- Translating the consumer flows and the design system into English, preserving mixed text styles and component overrides.\n\n**How I evaluated and corrected it.** Output was reviewed screen by screen. The AI interpreted the consumer Home as an e-commerce (catalogue, cart); I redirected it: the Home is a list of recommendations with an external link to a pre-filled cart. I then asked for the full supplement list instead of a truncated line. I also fixed consistency issues across screens: copy and CTAs that were wrong for signed-in users, field patterns that no longer matched the new long code, captions and flows to align with the specification.\n\n**Limits.** The AI had no domain knowledge beyond what I gave it and made plausible but wrong product assumptions. Its value was speed on structured, repetitive work, with design judgement remaining mine. Screens use placeholder data." },

        { heading: "Summary",
          body: "Akern Nutrition looked like a “send product suggestions” feature; in practice it was a delivery chain across a legacy desktop tool, two mobile apps, an external shop and two mobile platforms. My main contribution was designing that chain end to end, and in particular making each of its branches and failures explicit and recoverable. It is released; the next step is to measure where the chain holds and where it breaks." }
      ]
    },

    /* =====================================================  EXE  */
    {
      slug: "exe-platform", visible: true, featured: true, order: 2, hideCoverOnPage: true,
      title: "EXE Platform",
      type: "B2B web and mobile platform for landfill monitoring", industry: "Environmental monitoring",
      summary: "A coherent information architecture, a readable map and a consistent design system for a product that had grown one feature at a time.",
      problem: "Unclear hierarchy and inconsistent UI, the result of incremental additions, and a map that became unreadable at real data density.",
      role: "Sole product designer in my team: information architecture, interaction and visual design, design-system rules and the mobile adaptation.",
      challenge: "Restructure an existing product within a fixed time and budget, without rebuilding it from scratch.",
      outcome: "Released and formally approved by stakeholders; the client singled out the mobile experience for praise. No quantitative data is available.",
      dates: "About 50 hours of design work, plus ongoing maintenance support after release",
      team: "Sole designer in my team, working with a product manager and developers.",
      scope: "Desktop web app (sites, map, system status, substation analysis, CSV export, administration, sign-in), mobile adaptation, English localisation, palette rebrand",
      tools: "Figma; Claude with the Figma connector (see the AI section)",
      cover: "assets/projects/exe/map-clusters.webp",
      coverAlt: "EXE Platform map at site zoom, with well groups shown as bubbles coloured by average methane value and alarm badges",
      links: [],
      sections: [
        { heading: "Overview",
          body: "EXE Platform lets landfill operators, technicians and administrators monitor wells, substations and gas-analysis hardware. The product had grown by adding features whenever a need appeared; my job was to give it a coherent information architecture, a readable map and a consistent design system, without rebuilding it from scratch.\n\n**Problem:** unclear hierarchy and inconsistent UI, the result of incremental additions; a map that became unreadable at real data density.\n\n**Key decisions:** site-first navigation with a stable shell; a semantic-zoom map where colour encodes measured value and status is encoded by shape; a measurement-cycle history built on the existing heartbeat pattern; design-system rules that separate status colour from action colour.\n\n**Outcome:** released and formally approved by stakeholders. No quantitative post-launch data is available; proposed metrics are listed below.",
          facts: [
            ["Users", "Landfill operators, field technicians and site / platform administrators. The client supplies the platform and the monitoring technology."],
            ["Constraints", "Fixed time and budget. Evolution of an existing product, not a full redesign. Data model: N client landfills, N hardware units per landfill (EXM or Exe Station), one hardware unit per substation, nodes and wells under each unit."],
            ["Status", "Released. Stakeholders formally approved the redesign; the client singled out the mobile experience for praise."]] },

        { heading: "The challenge: a product assembled one feature at a time",
          body: "Before the project, EXE Platform worked, but its structure reflected the order in which features had been requested rather than how people use them. The client asked for a redesign; looking at the existing screens, the underlying problem was narrower and more structural: users could not form a stable mental model of where things lived. A full visual redesign would have consumed the budget without fixing that, so I framed the work as a revision of the information architecture and of the UI elements that carried it.\n\nSpecific issues visible in the existing product, which I annotated directly on its screens:\n\n- Choosing a client opened a dialog before the user could reach any hardware, even when the landfill had several units.\n- The sidebar changed depending on the section, and logout moved with it.\n- Backoffice and User management were separate areas; detailed station information sat inside a section called Settings.\n- Network status lived inside a “Biogas network” dropdown that contained a single item.\n- Language switched automatically between IT, EN and DE with no way to choose manually.\n\nThe domain adds its own complexity. One landfill can host several hardware units of two different types; each unit maps one-to-one to a substation and controls nodes, wells and valves. Operators need to see at a glance whether a well’s gas readings or a valve’s behaviour require action, technicians need diagnostics and configuration, and administrators need to manage people and licences per site. New IoT device types are expected, so the structure also had to scale.",
          images: [
            { src: "assets/projects/exe/before-dialog.webp", alt: "Old EXE Platform: a dialog asking the user to select a core before reaching the backoffice, over a dark interface", caption: "Before: selecting a client through a dialog, inside a dark UI whose structure changed from section to section. What to notice: the extra step between sign-in and the data, and the absence of a stable navigation frame." },
            { src: "assets/projects/exe/before-map.webp", alt: "Old EXE Platform map over a satellite view with a parameter toggle and legend in one small control", caption: "Before: the existing map, with the parameter toggle and legend competing with the satellite view. What to notice: how parameter choice, legend and status are mixed in one small control." },
            { src: "assets/projects/exe/before-status.webp", alt: "Old EXE Platform network status page with line charts and a sidebar with a single-item Biogas network dropdown", caption: "Before: network status sat inside a single-item “Biogas network” dropdown, next to separate Settings and User management areas. What to notice: the navigation names and grouping that the new architecture replaces." }] },

        { heading: "Evidence and problem framing",
          body: "This project did not include formal user research or usability testing. Decisions were grounded in the sources below, and I treat everything else as an assumption.",
          table: { head: ["Source", "What it showed", "Design implication"], rows: [
            ["Audit of the existing product", "My annotated notes on the current screens (listed above).", "Shifted the brief from “redesign” to “restructure”: merge areas, rename sections, stabilise the shell."],
            ["Client requirements, phase 1", "Needs expressed by the client at the start of the project.", "Defined the scope: sites, map, system status, analysis, export, administration, sign-in."],
            ["Client comments, phase 2", "Screen-level feedback, often with screenshots of their current tools: a more visible CH4/O2/pressure selector; value colours separated from states such as active alarm and closed well; an editor for unlimited threshold bands; using the heartbeat squares to show the measurement cycle; period options including a custom range; removing a redundant Substation column.", "Directly drove the map v2/v3, the cycle history, the export dialog and several table changes."],
            ["Implementation evidence", "A screenshot of the developed map, where 352 always-on labels overlapped into an unreadable layer.", "Showed that the problem was density, not styling, and led to semantic zoom."],
            ["Competitive context", "The main competitor uses the same green as the original palette.", "Triggered a palette change across the whole product."],
            ["Domain documentation", "The client’s data model: clients/landfills, EXM and Exe Station, 1:1 hardware–substation.", "Made “one row per hardware unit” a safe structural rule."]
          ] },
          after: "**What remained uncertain:** how operators actually move between map and system status in daily work, the exact phases of the analyser cycle, who may edit colour thresholds, and whether status colours alone are sufficiently accessible. These are listed as open validation points in the reflection." },

        { heading: "Strategy and priorities",
          body: "With roughly 50 hours available, I prioritised structure over polish and reuse over invention:\n\n- **Structure first.** Fix where things live (navigation, naming, page model) before refining individual widgets.\n- **One rule per concept.** A hardware unit is always one row; colour always means the same thing within a view; status and action never share a colour.\n- **Keep the existing feature set.** Reorganise and clarify what operators already rely on instead of adding scope.\n- **Design for growth.** Patterns had to work with more hardware types, more wells and more threshold bands without redesign." },

        { heading: "Decision 1 · A site-first information architecture with a stable shell",
          facts: [
            ["Context", "Users had to pass through a client dialog, and the navigation itself changed by section."],
            ["Evidence", "My audit of the existing screens and the client’s data model (one hardware unit per substation)."],
            ["Decision", "Sites becomes a list grouped by site, with one row per hardware unit that leads straight to System status. The sidebar is identical everywhere. Backoffice and User management merge into Administration (Users, Super admin, Sites tabs). Settings becomes the Substation analysis tab next to Network status; the single-item Biogas dropdown disappears. Language becomes a manual choice with automatic detection as default; theme and “Report a problem” live in the sidebar footer."],
            ["Domain as structure", "The hierarchy follows the client’s data model: landfill site, hardware unit, substation, nodes and wells. Because each hardware unit maps one-to-one to a substation, a hardware row also identifies its substation; I removed the separate Substation column from the Sites list as redundant and kept the substation as secondary text."],
            ["Operating-site context", "The selected site is always visible in the sidebar (“Operating site”) and becomes the context for Map and System status, repeated in breadcrumbs and in the site selector at the top of each page. Switching site changes the context, never the navigation."],
            ["System status page model", "One page with two tabs, Network status and Substation analysis, sharing the station selector, period and Export CSV. The content adapts to the hardware type: EXM shows the well-readings table before the charts; Exe Station shows the valve command / feedback / delta comparison. The hardware alarm log has a dedicated full view with filters, sorting and pagination that keeps the site and substation of the page it was opened from."],
            ["Administration scoping", "Users, Super admin and Sites are tabs of one area. Site roles apply to the selected site only; super admin is global and shown separately, with safeguards such as not being able to revoke your own access."],
            ["Mobile mapping", "The same hierarchy becomes a tab bar (Sites, Map, System status, Admin, More); sidebar-footer actions move to More, and the site selector opens as a bottom sheet."],
            ["Trade-off", "Familiar names change for existing users, in exchange for one predictable model. The client becomes secondary information, which suits operators but may suit multi-client administrators less."],
            ["Consequence", "Fewer steps from sign-in to a substation’s data; the same shell carries every section and was reused unchanged on mobile."],
            ["Limitation", "Not tested with users; I rely on the structural argument and on stakeholder approval."]],
          images: [{ src: "assets/projects/exe/sites.webp", alt: "New Sites page grouped by site, with one row per hardware unit and a connection summary by device type", caption: "After: Sites, grouped by site, with one row per hardware unit and a connection summary by device type. What to notice: status shown as a chip in an overview list, and the per-type connection bars designed to absorb future IoT device types." }] },

        { heading: "Decision 2 · A map where colour encodes value and status is encoded by shape",
          facts: [
            ["Context", "The developed map rendered every well with an expanded label. With hundreds of wells the layer became illegible, and colour was used for status while the client wanted it for gas values."],
            ["Evidence", "The implementation screenshot; the client’s phase-2 comments and screenshots of their existing legend and threshold editor."],
            ["Decision", "Semantic zoom: clusters by ID prefix at site level, dots at medium zoom, labels at high zoom with collision priority (active alarms first). Colour encodes the band of the selected parameter (CH4, O2 or pressure); status is encoded separately (red ring and halo for an active alarm, dashed grey for a closed well, hollow for offline). A prominent parameter selector sits in a panel with the value legend, and an editor supports unlimited bands with a suggested palette ordered from neutral to red. Hover shows a light tooltip (ID, status, latest CH4/O2); click or tap opens a 24-hour trend card."],
            ["Trade-off", "Colour no longer means status, so alarms rely on shape; the lowest CH4 band is red like the alarm ring, an ambiguity I flagged to the client. The legend panel covers part of the map, so I made it collapsible."],
            ["Layout iteration", "During review, opening search made its results overlap the legend. I moved search to the left of the toolbar and kept everything that changes how the map is read on the right (parameter, legend, zoom at bottom right). The rule became: left is for finding and filtering, right is for viewing."],
            ["Consequence", "The map stays legible at real density, and the same component logic drives desktop and mobile."],
            ["Limitation", "Collision priorities and cluster thresholds are design recommendations and need tuning on live data."]],
          images: [
            { src: "assets/projects/exe/map-clusters.webp", alt: "Map at site zoom: groups as bubbles coloured by average value with alarm badges", caption: "Site zoom: groups as bubbles coloured by average value, with alarm badges. What to notice: alarms remain visible even when wells are aggregated." },
            { src: "assets/projects/exe/map-hover.webp", alt: "Map at medium zoom: wells coloured by methane band, with a hover tooltip on an alarmed well", caption: "Medium zoom: wells coloured by CH4 band; statuses separated in the legend; light hover tooltip. What to notice: ring and shape carry status, colour carries value." },
            { src: "assets/projects/exe/map-search.webp", alt: "Map with search results open on the left and the legend panel on the right, not overlapping", caption: "Search on the left, legend on the right: the final layout after the overlap issue. What to notice: results no longer cover the legend." },
            { src: "assets/projects/exe/map-thresholds.webp", alt: "Colour thresholds editor open over the map, with editable bands and a suggested palette", caption: "Threshold editor: unlimited bands, suggested palette from neutral to red, last band always present. What to notice: the map stays visible behind the panel so the effect of each change is immediate." }] },

        { heading: "Decision 3 · Turning the heartbeat into a measurement-cycle history",
          facts: [
            ["Context", "Operators could see that a device was alive (heartbeat squares, uptime counters) but not where the analyser was in its measurement cycle."],
            ["Evidence", "Client request to reuse the heartbeat squares to recognise the current cycle."],
            ["Decision", "Remove the uptime counters and the heartbeat strip; keep heartbeat as a single status line. Add a grid where each column is a cycle and each row a phase (line flush, wells in sequence, valve adjustment). Past cells show completed, warning, error or skipped; the last column fills as the current cycle progresses, with a plain-language summary above it."],
            ["Trade-off", "Higher density in exchange for history at a glance. On mobile only the last 11 hours fit without scrolling."],
            ["Limitation", "The phase list is my assumption from the domain and must be confirmed with the client; more frequent cycles would need a 24 h / 7 d switch."]],
          images: [{ src: "assets/projects/exe/cycle-history.webp", alt: "Analyser cycle history grid: one column per cycle and one row per phase, with the current cycle outlined", caption: "Analyser cycle history: one column per cycle, one row per phase; the current cycle is outlined. What to notice: the interrupted cycle (error followed by skipped phases) is readable without opening a log." }] },

        { heading: "Decision 4 · Design-system rules that keep meaning stable (and the rebrand)",
          facts: [
            ["Context", "Because the main competitor used the same green, the palette had to change. Green was also doing double duty as action colour and “normal” status."],
            ["Decision", "I proposed five alternatives in blue and grey; the client chose Petrol. I split the tokens so status success stays green while actions become petrol, added dedicated tokens for success text and selected backgrounds, and documented when a status is a chip (overview lists) versus coloured monospace text (data tables). Locked fields got a distinct read-only style."],
            ["Trade-off", "Converting an existing file meant heuristic recolouring that required manual review of edge cases."],
            ["Consequence", "Rules now live in component descriptions and in a documented design-system page, so developers and future screens inherit them."]] },

        { heading: "The solution",
          body: "- **System status** uses two tabs on one page. Network status puts the EXM well-readings table before the charts so the Node-to-Well relationship, gas values, pressure and status read immediately; Substation analysis groups valve command/feedback/delta, the hardware alarm log, heartbeat and cycle history, and configuration.\n- **Top KPIs** were rewritten around what operators check first: latest manifold CH4/O2, manifold vacuum and the current state of the measurement cycle.\n- **CSV export** is a dialog with period (30 days, 3 months, custom) and scope (entire landfill, single plant, specific hardware). The dialog flags that “including future IoT devices” only makes sense for repeated exports.\n- **Administration** unifies users, super admins and sites, with roles scoped to a site and safeguards such as not being able to revoke your own super-admin access.\n- **Sign-in** covers seven states (sign in, wrong credentials, activation, recovery request, email sent, new password, expired link).\n- **Mobile** replaces the sidebar with a tab bar, dialogs with bottom sheets and tables with cards, on a 4/8/12/16 spacing scale. Hover becomes tap.\n- **Localisation:** the full desktop and mobile flows were also produced in English.",
          images: [
            { src: "assets/projects/exe/status-network.webp", alt: "System status page for an EXM unit with KPIs, a well-readings table and an aggregate trend chart", caption: "Network status (EXM): KPIs, the well-readings table and charts on one page, with Station and Export CSV shared by both tabs. What to notice: status as monospace text inside a data table, consistent with the design-system rule." },
          ] },

        { heading: "Mobile adaptation",
          body: "The same hierarchy becomes a tab bar (Sites, Map, System status, Admin, More). Dialogs become bottom sheets and tables become cards, on a 4/8/12/16 spacing scale. Hover becomes tap, and the site selector stays at the top as the operating context.",
          images: [
            { src: "assets/projects/exe/mobile-sites.webp", alt: "Mobile Sites screen: summary cards, connected hardware by type and a list of sites with hardware rows", caption: "Sites" },
            { src: "assets/projects/exe/mobile-map-sheet.webp", alt: "Mobile map with a bottom sheet showing the 24-hour trends of a well in alarm", caption: "Map · well trend sheet" },
            { src: "assets/projects/exe/mobile-network.webp", alt: "Mobile System status, Network status tab: period switch, KPI cards and well readings", caption: "Network status" },
            { src: "assets/projects/exe/mobile-substation.webp", alt: "Mobile System status, Substation analysis tab: node network, firmware, warnings and valve deviation check", caption: "Substation analysis" }],
          cols: 4,
          figNote: "Fig 11 · Mobile. What to notice: the same shell and rules adapted to touch rather than a separate design. Time and budget limited part of the build: some charts were hidden in the implemented mobile version." },

        { heading: "A design system that encodes the rules",
          body: "The design system is where the decisions above become durable. It is organised in six collections (Foundations, Actions, Fields and selectors, Choices and navigation, Data and feedback, Compositions) and backed by variables, so a palette change propagates through every screen instead of being repainted by hand.\n\n- **Tokens with one meaning each.** During the rebrand I split what used to be a single green: actions and navigation use petrol, while normal status keeps a dedicated status/success token. I added success-strong for text on success backgrounds and selected-background for selected controls, which had been borrowing the success tint.\n- **Status components with usage rules.** StatusBadge (chip) is for overview lists and single-element headers; StatusText (coloured monospace) is for data tables. The rule, the shared colours and examples are documented on the Data and feedback page and repeated in each component’s description, so it is visible in the inspect panel during handoff.\n- **States designed, not improvised.** Focus, disabled, read-only and loading states are specified once; read-only inputs use a subtle filled style with a lock. Metric cards distinguish loading from missing data and never use zero for missing values.\n- **Domain components.** Map markers by band and status, cluster bubbles, threshold bands, the analyser-cycle cell and the mobile shell are components with variants, reused across desktop, mobile and the English version.\n\n**Trade-off:** documenting rules took time from a tight budget, but it meant that issues raised in review (status chips that were half green and half petrol, success messages rendered in the action colour) could be fixed once, at component level, instead of screen by screen.",
          images: [
            { src: "assets/projects/exe/ds-foundations.webp", alt: "Design system foundations page: semantic colour tokens, typography roles and spacing scale", caption: "Foundations: semantic colour tokens after the rebrand, typography roles and spacing scale. What to notice: status green, success text and selected background are separate tokens from the petrol action colour." },
            { src: "assets/projects/exe/ds-data-feedback.webp", alt: "Design system page for data and feedback components: status badge, table row, pagination, metric card and alerts", caption: "Data and feedback: status badge, table row, pagination, metric card, alerts and the documented chip-or-text rule. What to notice: the rule is shown with paired examples and shared colour tokens, not only described." }] },

        { heading: "Collaboration and implementation",
          body: "I was the only designer and worked with a product manager and developers inside my team. The client fed back in two rounds: broad requirements first, then screen-level comments that I translated into specific changes. I kept proposals in separate Figma sections so stakeholders could compare them with the approved version, and I wrote behaviour notes and component descriptions for developers (for example clustering and label-collision rules, status-colour usage, and open questions such as export size limits and who can edit thresholds).\n\nTime and budget limited part of the mobile build: some charts were hidden in the implemented mobile version. I continue to support the product during maintenance." },

        { heading: "Outcomes",
          facts: [
            ["Delivery", "The redesign was implemented and released."],
            ["Qualitative", "Stakeholders formally approved the redesign; the client expressed particular appreciation for the mobile experience."],
            ["Operational", "A documented design system in six collections: tokens separating status and action, chip-versus-text rule, specified interaction states, read-only field style, reusable map, cycle and mobile components."],
            ["Not available", "No usage analytics, task-time measurements or user-testing results were collected, so no claim of measured improvement is made."]],
          after: "**Proposed metrics (not yet measured):** time from sign-in to a substation’s status; time to acknowledge an active alarm; share of sessions on mobile; number of navigation-related support requests." },

        { heading: "Reflection and next steps",
          body: "- The biggest gap is direct evidence from operators. Next I would run short task-based sessions with operators and technicians on the map and System status.\n- Validate the analyser-cycle phases, the ownership of threshold settings, and the red-band versus alarm-ring ambiguity.\n- Check accessibility of status colours (contrast and colour-blind safety); status is already paired with text or shape, but this needs testing.\n- Bring back the mobile charts hidden for budget reasons, starting with the well-detail trends." },

        { heading: "Practical use of AI",
          body: "I used Claude (Anthropic) in chat, connected to the Figma file through a Figma connector, as a production partner. AI supported the design work; it is not a feature of the product.\n\n- **Inputs I provided:** my audit notes, client screenshots and comments, links to specific frames, and explicit rules (spacing scale, status rules, “work in a separate section, do not overwrite”).\n- **What it produced in Figma:** map concepts at three zoom levels, palette alternatives, file-wide palette conversion, the measurement-cycle component, the mobile adaptation of about 25 screens, the spacing pass and the English version of roughly 2,100 text layers.\n- **How I evaluated it:** I reviewed every change visually and against the design-system rules. I rejected outputs that broke intent; for example, when a mobile configuration section was rebuilt in the wrong structure, I had it restored and applied only the intended field style. I also spotted inconsistencies it introduced or missed, such as mixed green/blue status chips and blue success messages, and turned them into explicit token and component rules.\n- **Limitations:** automated recolouring relies on heuristics and needed manual checks; machine translation needs native review; all data in the file is illustrative demo data.\n\nMy assessment, not a measured result: delegating repetitive production to AI is what made the mobile adaptation and the English version feasible inside the time budget, while the decisions themselves stayed mine." },

        { heading: "Summary",
          body: "EXE Platform’s complexity came from its domain and from years of incremental growth. My main contribution was to reframe a redesign request as a structural problem and to establish a few rules that hold across the product: site-first navigation, colour for value and shape for status, status never sharing a colour with actions. The redesign was released and approved by stakeholders; the next step is to validate it with operators and measure it." }
      ]
    }
  ]
};
