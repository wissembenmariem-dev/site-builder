export const site = {
  name: "Northwind Consulting",
  shortName: "Northwind",
  descriptor: "Consulting",
  tagline: "Infrastructure · Cloud · Business Apps",
  description:
    "Northwind Consulting designs, deploys and operates the infrastructure, cloud platforms and business applications that mid-market companies run on.",
  contact: {
    email: "hello@example.com",
    phone: "+00 000 000 000",
    phoneHref: "tel:+00000000000",
    locations: "Brussels · Paris · Amsterdam",
    regionNote: "Delivery across Europe",
  },
  nav: [
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Infrastructure · Cloud · Business Apps",
    title: ["Engineered IT.", "Operated by humans."],
    lede: "We design, deploy and operate the systems, networks and business applications that growing companies depend on, from a single office to multi-country rollouts.",
    primaryCta: { href: "/contact", label: "Book a consultation" },
    secondaryCta: { href: "/services", label: "Explore services" },
    status: "24/7 support operational",
    statusNote: "Multi-region delivery across Europe",
  },
  partners: {
    label: "Certified across",
    sublabel: "the leading enterprise stacks",
    logos: [
      { src: "https://svgl.app/library/cisco.svg", alt: "Cisco", h: 18 },
      { src: "https://svgl.app/library/microsoft.svg", alt: "Microsoft", h: 22 },
      { src: "https://svgl.app/library/aws.svg", alt: "AWS", h: 24 },
      { src: "https://svgl.app/library/google-cloud.svg", alt: "Google Cloud", h: 22 },
      { src: "https://svgl.app/library/fortinet.svg", alt: "Fortinet", h: 18 },
      { src: "https://svgl.app/library/vmware.svg", alt: "VMware", h: 20 },
      { src: "https://svgl.app/library/proxmox.svg", alt: "Proxmox", h: 22 },
    ],
  },
  footer: {
    blurb:
      "Infrastructure, cybersecurity and business applications, engineered and operated by senior consultants for companies scaling beyond their legacy stack.",
    featured: ["network-infrastructure", "cybersecurity", "cloud-infrastructure", "erp-implementation"],
  },
} as const;

export const home = {
  services: {
    eyebrow: "What we do",
    title: "Two practices,",
    punchline: "one accountable team.",
    lede: "From network engineering to ERP rollouts, we cover the full stack so your operations team is not juggling five vendors.",
    link: "See all services",
    featured: [
      { slug: "network-infrastructure", meta: "LAN · WAN · SD-WAN", status: "Core", tags: ["Cisco", "Fortinet", "SD-WAN"], colSpan: 2, highlight: true },
      { slug: "cybersecurity", meta: "Zero trust", status: "24/7", tags: ["EDR", "ZTNA"] },
      { slug: "cloud-infrastructure", meta: "AWS · Azure · GCP", tags: ["Terraform", "Hybrid"] },
      { slug: "erp-implementation", meta: "Implementation & integration", status: "Partner", tags: ["Finance", "Inventory", "Migrations"], colSpan: 2 },
      { slug: "server-infrastructure", meta: "Virtualization", tags: ["VMware", "Backup"] },
      { slug: "it-consulting", meta: "Strategy", tags: ["Audit", "Roadmap"], colSpan: 2 },
    ],
  },
  stats: [
    { value: 120, suffix: "+", label: "Projects delivered" },
    { value: 15, suffix: "+", label: "Years of expertise" },
    { value: 12, suffix: "", label: "Countries" },
    { value: 99, suffix: ".99%", label: "Managed uptime" },
  ],
  approach: {
    eyebrow: "Approach",
    title: "Senior engineers.",
    punchline: "Predictable delivery.",
    lede: "Every engagement starts with a technical assessment and ends with your team owning the platform. We document, we train, and we stay on the line.",
    steps: [
      { t: "Assess", d: "Audits of your network, security posture, infrastructure or business applications, with measurable findings." },
      { t: "Architect", d: "Reference architectures aligned with your growth plan, regulatory context and existing investments." },
      { t: "Deploy", d: "Phased rollouts with clear acceptance criteria, runbooks and rollback plans." },
      { t: "Operate", d: "Optional managed services: 24/7 monitoring, SLA-backed support and continuous improvement reviews." },
    ],
  },
  work: { eyebrow: "Recent work", title: "Outcomes,", punchline: "not deliverables.", link: "All case studies" },
  cta: {
    title: ["Ready to modernize", "your stack?"],
    lede: "Tell us about your environment in a 30-minute call. We come back with a written assessment and a clear next step.",
    bullets: ["Free initial assessment", "Senior engineer on every call", "NDA-friendly · Multi-region delivery"],
    button: "Book a consultation",
  },
};

export const about = {
  title: "About",
  eyebrow: "About us",
  heading: ["We build the IT backbone for companies that", "have outgrown the “IT guy” model."],
  intro:
    "Northwind Consulting is an IT consultancy built on a simple premise: most growing companies run on infrastructure decisions made years ago by teams that have since moved on. We assess what is really there, design what should be, and operate it with you until your team is ready to take over.",
  story: {
    eyebrow: "The story",
    title: ["Small, senior teams.", "No handoff theater."],
    paragraphs: [
      "The firm was founded by infrastructure and ERP practitioners who had seen too many rollouts slowed down by handoffs between sales, architecture and delivery teams.",
      "We do the opposite: small, senior teams that own the entire engagement. The engineer who scopes the project is still on the call when it goes live.",
      "Today we run two complementary practices, Infrastructure and Business Applications, and deliver across Europe.",
    ],
  },
  numbers: [
    { v: "120+", l: "Projects delivered" },
    { v: "15+", l: "Years average tenure" },
    { v: "12", l: "Countries" },
    { v: "99.99%", l: "Managed uptime" },
    { v: "80%", l: "Client renewal rate" },
    { v: "24/7", l: "Monitoring" },
  ],
  standards: {
    eyebrow: "Standards",
    title: "What we hold",
    punchline: "ourselves to.",
    values: [
      { icon: "wrench", title: "Engineering-led", body: "Every project is owned end to end by senior engineers who write the runbooks they hand over." },
      { icon: "award", title: "Vendor-certified", body: "Networking, security, cloud and virtualization certifications, kept current." },
      { icon: "globe", title: "Multi-region delivery", body: "On-site rollouts in several countries with local follow-up." },
      { icon: "users", title: "Long-term partner", body: "We measure success on year-three retention, not on the statement of work." },
    ],
  },
  cta: { title: ["Want to work", "with our team?"], lede: "Whether you are scoping an infrastructure project, an ERP rollout or need a second opinion, we are a short call away.", button: "Get in touch" },
};

export const servicesPage = {
  title: "Services",
  eyebrow: "Services",
  heading: ["Two practices.", "Ten services.", "One accountable team."],
  intro: "We engineer the infrastructure your business runs on, then make your business applications the system of record on top. Every service is delivered by senior engineers.",
  cta: { title: ["Not sure which service fits?", "Start with a free assessment."], button: "Talk to an engineer" },
};

export const caseStudiesPage = {
  title: "Case Studies",
  eyebrow: "Case Studies",
  heading: ["Selected work,", "measurable outcomes."],
  intro: "A snapshot of recent engagements across manufacturing, retail, logistics and real estate. Client names are shared on request under NDA.",
  cta: { title: ["Want references for", "your industry?"], lede: "We share named references from comparable projects under mutual NDA.", button: "Request references", link: "See all services" },
};

export const contactPage = {
  title: "Contact",
  eyebrow: "Contact",
  heading: ["Let’s scope your next", "infrastructure or business apps project."],
  intro: "Tell us about your environment. A senior engineer replies within one business day with an assessment outline and availability.",
  interests: [
    "Network Infrastructure",
    "Cybersecurity",
    "Cloud / Migration",
    "Managed IT",
    "ERP Implementation",
    "Integrations",
    "IT Audit / Consulting",
    "Other",
  ],
  nextSteps: ["Reply within one business day", "30-minute discovery call with a senior engineer", "Written assessment and clear next step"],
  success: { title: ["Thank you,", "message received."], body: "A senior engineer will be in touch within one business day." },
  consent: "By submitting, you agree to be contacted regarding your inquiry.",
  messagePlaceholder: "Briefly describe your environment, the challenge and any timing constraints.",
};
