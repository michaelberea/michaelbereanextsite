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
    "I build software that has to work. Banking systems that move real money, plus a few products of my own on the side.",
  email: "mikeberea@gmail.com", // ← set this or delete the contact entry below
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
  alt: "Michael Berea in the garage.",
  caption: "",
};

// The masthead manifest — the signature element.
// Keep these short. They read like a harbor board, not a bio.
export const manifest = [
  { key: "Day work", val: "Owning MFA and self-service tools for a federal credit union" },
  { key: "Stack", val: "C# / .NET, Symitar / Episys, SQL Server, Azure" },
  { key: "Side", val: "Badger Stump Grinding" },
  { key: "Building", val: "A new product most years. DadLifts is the current one." },
  { key: "Home", val: "Married, three kids, homeschooling in Kenosha" },
  { key: "Garage", val: "1992 Honda Nighthawk CB750" },
];

export const about = [
  "I'm a software engineer in Kenosha, Wisconsin, working remotely for Quorum Federal Credit Union. For the last four years that's meant credit union technology: work that sits between the Symitar/Episys core and everything a member actually touches, like self-service forms, multi-factor authentication, and the Alkami widgets I built earlier in my career.",
  "PowerOn and SymXchange on one side. C#, .NET, and Azure on the other, plus the integrations that hold them together. Not many people can comfortably work on both sides of that divide. I own things end to end: sit with the business for requirements, build it, ship it, then support it in production.",
  "Outside of that I run a stump grinding business, build small products for people who are underserved by software, and spend most evenings with my wife and our three kids. We homeschool, classically, which is slower and better than it sounds.",
];

export const roles = [
  {
    when: "Oct 2023 — Present",
    title: "Full Stack Software Engineer",
    org: "Quorum Federal Credit Union · Remote",
    points: [
      "Own the member-facing multi-factor authentication platform end to end, including custom OTP authentication in C#/.NET for Episys core workflows, integrated with the Clickatell SMS API.",
      "Delivered the Trust Conversion initiative: a secure member-facing web form with document upload and Flowgear integration that replaced a manual, paper-dependent process, from requirements through UAT to production.",
      "Subject matter expert for the Secure Forms platform, including Trust Conversion, Close Savings Account, and Beneficiary Management.",
      "Led ADA/WCAG accessibility remediation across roughly 15 member-facing forms, running BrowserStack audits and coordinating regression testing.",
      "Building the HELOC pre-qualification experience in React and TypeScript.",
    ],
  },
  {
    when: "Jun 2023 — Oct 2023",
    title: "Full Stack Programmer",
    org: "Skyla Credit Union · Charlotte, NC",
    points: [
      "Wrote PowerOn scripts against Symitar Quest to improve core database queries behind member account operations.",
      "Maintained and extended C#/.NET Core microservices and APIs powering third-party and core system integrations.",
    ],
  },
  {
    when: "Apr 2022 — Jun 2023",
    title: "Software Developer",
    org: "Educators Credit Union · Remote",
    points: [
      "Built custom Alkami digital banking widgets and supporting microservices in C# and ASP.NET MVC using the Alkami SDK.",
      "Delivered a self-service widget that lets members create and manage ACH stop payment requests on their own, taking the process off the call center.",
      "Built an internal MVC application giving department managers direct CRUD access to SQL Server data, replacing ad hoc report requests to the development team.",
    ],
  },
  {
    when: "Dec 2021 — Mar 2022",
    title: "Developer",
    org: "ATC Transportation · Kenosha, WI",
    points: [
      "Designed, developed, tested, and supported internal and dealer-facing web applications in C#/.NET Framework 4.8 and .NET Core, backed by SQL Server.",
    ],
  },
  {
    when: "Jan 2019 — Dec 2021",
    title: "Junior Developer",
    org: "ATC Transportation · Kenosha, WI",
    points: [
      "Built a new dealer inspection form inside the company's .NET web application, digitizing a paper-based field process.",
      "Retrofitted legacy web applications with Bootstrap so field and dealer users could work from a phone.",
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
  "C# / .NET",
  "SQL Server",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "jQuery",
  "Symitar / Episys",
  "PowerOn",
  "Symitar Quest",
  "SymXchange",
  "Alkami SDK",
  "Flowgear",
  "Azure",
  "Azure Key Vault",
  "Azure DevOps",
  "REST APIs",
  "Dapper",
  "SSMS",
  "Git",
  "Bitbucket",
  "GitLab",
  "Jira",
  "Visual Studio",
  "BrowserStack",
];

export const projects = [
  {
    title: "DadLifts",
    meta: "Live",
    href: "https://dadlifts.fitness",
    desc: "A progressive web app for dads getting back under a barbell. Installable and cached offline with a service worker, so a bad gym signal doesn't kill your workout. Built for the guy with forty-five minutes, a garage, and no interest in a lifestyle brand.",
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
    "Building out DadLifts in the evenings.",
    "Riding the Nighthawk while Wisconsin still permits it.",
  ],
};

export const contact = [
  { k: "GitHub", v: "@michaelberea", href: site.github },
  { k: "LinkedIn", v: "michaelberea", href: site.linkedin },
  { k: "Email", v: "Say hello", href: `mailto:${site.email}` },
];
