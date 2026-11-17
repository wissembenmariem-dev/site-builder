import type { IconName } from "./icons";

export const categories = ["Infrastructure", "Business Applications"] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: IconName;
  category: (typeof categories)[number];
};

export const services: Service[] = [
  {
    slug: "network-infrastructure",
    title: "Network Infrastructure",
    short: "LAN, WAN, SD-WAN and structured cabling.",
    description: "Design, deployment and optimization of wired and wireless networks built for scale, redundancy and low latency across multi-site organizations.",
    bullets: ["LAN, WAN and SD-WAN architecture", "Enterprise Wi-Fi 6/6E", "Structured cabling", "VLAN segmentation and QoS"],
    icon: "network",
    category: "Infrastructure",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    short: "Perimeter, endpoint and zero-trust defense.",
    description: "Security programs covering perimeter defense, endpoint protection, identity and continuous monitoring, aligned with ISO 27001 and NIST.",
    bullets: ["Next-generation firewalls", "Endpoint detection and response", "Zero-trust network access", "Audits and penetration testing"],
    icon: "shield",
    category: "Infrastructure",
  },
  {
    slug: "server-infrastructure",
    title: "Servers & Data Center",
    short: "Virtualization, storage and recovery.",
    description: "Server consolidation, virtualization and high-availability storage for critical workloads, engineered for resilience and predictable cost.",
    bullets: ["VMware, Hyper-V and Proxmox", "Windows Server and Linux", "Storage and backup strategy", "Disaster recovery"],
    icon: "server",
    category: "Infrastructure",
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    short: "AWS, Azure, hybrid and migration.",
    description: "Hybrid and multi-cloud architectures with automated infrastructure as code, from migration assessment to production-grade landing zones.",
    bullets: ["AWS, Azure and GCP", "Hybrid connectivity", "Terraform and Ansible", "Cost optimization"],
    icon: "cloud",
    category: "Infrastructure",
  },
  {
    slug: "managed-it",
    title: "Managed IT",
    short: "Monitoring, helpdesk and patching.",
    description: "Managed operations with proactive monitoring, patch management and SLA-backed support, so your teams can focus on the business.",
    bullets: ["24/7 monitoring and helpdesk", "Proactive alerting", "Patch and vulnerability management", "SLA-backed incident response"],
    icon: "activity",
    category: "Infrastructure",
  },
  {
    slug: "it-consulting",
    title: "IT Consulting & Audit",
    short: "Assessments and transformation roadmaps.",
    description: "Independent audits and roadmaps, from infrastructure assessments to transformation programs aligned with business objectives.",
    bullets: ["Infrastructure and security audits", "Transformation roadmaps", "Vendor selection and RFP support", "IT governance"],
    icon: "clipboard",
    category: "Infrastructure",
  },
  {
    slug: "erp-implementation",
    title: "ERP Implementation",
    short: "Structured rollouts, from scoping to go-live.",
    description: "End-to-end ERP projects: needs analysis, module selection, configuration, data migration and training, following a proven implementation method.",
    bullets: ["Needs analysis and scoping", "Industry-specific configuration", "Data migration", "Training and change management"],
    icon: "boxes",
    category: "Business Applications",
  },
  {
    slug: "marketplace-integrations",
    title: "Marketplace Integrations",
    short: "Publish listings from your ERP in one click.",
    description: "Connectors between your ERP and vertical marketplaces or listing portals: one-click publishing, synchronized stock and leads flowing back into your CRM.",
    bullets: ["One-click publishing", "Real-time stock synchronization", "Leads routed to the CRM", "Quotes and invoicing in one place"],
    icon: "store",
    category: "Business Applications",
  },
  {
    slug: "custom-integrations",
    title: "Custom Integrations",
    short: "Connect your stack through APIs.",
    description: "Custom integrations between your business applications and existing tools, so data flows without double entry.",
    bullets: ["REST and webhook integrations", "Custom modules and workflows", "Banking and e-commerce connectors", "Version upgrades and migrations"],
    icon: "workflow",
    category: "Business Applications",
  },
  {
    slug: "application-support",
    title: "Application Support",
    short: "Ongoing help from the team that built it.",
    description: "Support after go-live from consultants who know your project, with same-day response on critical issues and continuous training.",
    bullets: ["Direct line to your consultant", "Same-day response on critical issues", "Functional and technical support", "Training and documentation"],
    icon: "lifebuoy",
    category: "Business Applications",
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
