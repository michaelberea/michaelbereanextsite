// ============================================================
// Everything you'll want to edit lives here.
// Change a string, commit, Netlify redeploys. No component edits needed.
// ============================================================

export const site = {
  name: "Michael Berea",
  url: "https://michaelberea.com",
  role: "Software engineer",
  place: "Kenosha, Wisconsin",
  tagline:
    "I build and modernize the systems credit unions actually run on — and a handful of things that have nothing to do with banking.",
  email: "hello@michaelberea.com", // ← set this or delete the contact entry below
  github: "https://github.com/michaelberea",
  linkedin: "https://www.linkedin.com/in/michaelberea/",
  church: {
    name: "CrossWay Community Church",
    url: "", // ← add the church URL when you have it
  },
};

// Masthead portrait. `public/portrait.jpg` is a generated placeholder —
// drop a real photo in at the same path and filename and it swaps itself.
// Shoot it 4:5 (800×1000 or larger). The grayscale + multiply treatment is
// applied in CSS, so hand it a normal color photo. Set `src: ""` to hide
// the slot entirely. `caption` is optional; empty renders nothing.
export const portrait = {
  src: "/portrait.jpg",
  alt: "Michael Berea in the garage in Kenosha, Wisconsin.",
  caption: "",
};

// The masthead manifest — the signature element.
// Keep these short. They read like a harbor board, not a bio.
export const manifest = [
  { key: "Day work", val: "Core banking modernization at a federal credit union" },
  { key: "Stack", val: "Symitar / Episys, Alkami, .NET, Azure" },
  { key: "Side", val: "Badger Stump Grinding — stumps, gone, since 2021" },
  { key: "Building", val: "DadLifts, RecitePath, and whatever the current one is" },
  { key: "Home", val: "Married, three kids, homeschooling in Kenosha" },
  { key: "Garage", val: "1992 Honda Nighthawk CB750" },
];

export const about = [
  "I write software for a federal credit union in Kenosha, Wisconsin. Most of my work sits in an unglamorous but genuinely hard place: the seam between a core banking platform written decades ago and the cloud services everyone now expects it to talk to.",
  "That means Symitar and Episys on one side — PowerOn, SymXchange, batch windows that cannot slip — and .NET, Azure, and Alkami on the other. Not many people can hold both halves in their head at once. I can, and it's the most useful thing about me professionally.",
  "Outside of that I run a stump grinding business, build small products for people who are underserved by software, and spend most evenings with my wife and our three kids. We homeschool, classically, which is slower and better than it sounds.",
];

export const beliefs = {
  head: "What I'm working from",
  body: [
    "I'm a Reformed Christian and a member at CrossWay Community Church. That isn't a footnote to the rest of this — it's the thing the rest of it hangs on. It shapes how I estimate honestly, how I bill, and what I'm willing to ship.",
    "I also write about theology from time to time, mostly on cessationism, ecclesiology, and the doctrinal drift I keep running into in the wider evangelical world.",
  ],
};

export const roles = [
  {
    when: "Present",
    title: "Software Engineer",
    org: "Federal credit union · Kenosha, WI",
    points: [
      "Core banking modernization across the Symitar/Episys platform — PowerOn, SymXchange integrations, and OpCon job orchestration.",
      "Built and maintain .NET services on Azure that bridge legacy core operations to the Alkami digital banking layer.",
      "Prototyped a personal financial management module, including a subscription manager and cancellation flow, on top of existing core infrastructure.",
    ],
  },
  {
    when: "2021 — Present",
    title: "Owner",
    org: "Badger Stump Grinding · Southeast Wisconsin",
    points: [
      "Run the whole thing: quoting, scheduling, equipment, the actual grinding, and the invoice at the end.",
      "It's where I learned what small trades businesses actually need from software — which turned out to be almost nothing like what gets built for them.",
    ],
  },
  {
    when: "Freelance",
    title: "Web development for local businesses",
    org: "Contract · SE Wisconsin",
    points: [
      "Sites and marketing infrastructure for trades and service businesses, including Elam & Sons Handyman Services.",
      "Fixed scope, fixed price, and a site the owner can actually keep up with after I hand it over.",
    ],
  },
];

export const capabilities = [
  "Symitar / Episys",
  "PowerOn",
  "SymXchange",
  "Alkami",
  "OpCon",
  ".NET / C#",
  "Azure",
  "SQL",
  "Next.js",
  "React",
  "TypeScript",
  "Leaflet",
];

export const projects = [
  {
    title: "DadLifts",
    meta: "Live",
    href: "https://dadlifts.fitness",
    desc: "A progressive web app for dads getting back under a barbell. Built for the guy with forty-five minutes, a garage, and no interest in a lifestyle brand.",
    stack: "Next.js · PWA · Netlify · Buttondown",
  },
  {
    title: "SE Wisconsin Motorcycle Crash Map",
    meta: "Live",
    href: "",
    desc: "An interactive map of motorcycle crash data across five southeastern Wisconsin counties, built from public crash records. I ride these roads, so I wanted to see the pattern rather than guess at it.",
    stack: "Leaflet.js · Public WisDOT crash data",
  },
  {
    title: "RecitePath",
    meta: "In progress",
    href: "",
    desc: "Audio-first spaced repetition for classical memory work — catechism, Scripture, Latin, timeline. Built because my kids memorize out loud and every tool I found assumed they'd be reading a screen.",
    stack: "PWA · Web Audio · Spaced repetition",
  },
  {
    title: "Elam & Sons Handyman Services",
    meta: "Client",
    href: "",
    desc: "Site, domain, and local SEO for a handyman business. The kind of work where the win is measured in phone calls, not lighthouse scores.",
    stack: "Static site · Netlify · Local SEO",
  },
  {
    title: "Badger Stump Grinding",
    meta: "Business",
    href: "",
    desc: "Stump removal across southeast Wisconsin. Mine, from the marketing down to the machine.",
    stack: "Owner-operated since 2021",
  },
];

// ← Update this page whenever the season changes. It's the one that
//   makes a personal site feel alive instead of archived.
export const now = {
  updated: "July 2026",
  items: [
    "Tiling a half bath in polished marble hex, which is going about as well as tiling ever goes.",
    "Planning next year's homeschool sequence for a second grader and a first grader.",
    "Building out RecitePath in the evenings.",
    "Riding the Nighthawk while Wisconsin still permits it.",
  ],
};

export const contact = [
  { k: "GitHub", v: "@michaelberea", href: site.github },
  { k: "LinkedIn", v: "michaelberea", href: site.linkedin },
  { k: "Email", v: "Say hello", href: `mailto:${site.email}` },
];
