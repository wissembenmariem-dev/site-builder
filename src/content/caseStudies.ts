export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  results: { label: string; value: string }[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-network",
    client: "Regional retail chain",
    industry: "Retail",
    title: "120-store SD-WAN with zero-trust security",
    summary: "Rolled out an SD-WAN backbone across 120 stores with centralized firewalling, ZTNA and 24/7 monitoring, replacing legacy MPLS links.",
    results: [
      { label: "Sites", value: "120" },
      { label: "WAN cost", value: "-46%" },
      { label: "Time to recover", value: "< 15 min" },
    ],
    tags: ["SD-WAN", "Security", "Retail"],
  },
  {
    slug: "logistics-cloud",
    client: "Freight forwarder",
    industry: "Logistics",
    title: "Core platform migrated to the cloud at 99.99% uptime",
    summary: "Re-platformed the transport management system with infrastructure as code, automated disaster recovery and full observability.",
    results: [
      { label: "Uptime", value: "99.99%" },
      { label: "Infra cost", value: "-31%" },
      { label: "Deploys", value: "10×" },
    ],
    tags: ["Cloud", "DevOps", "Logistics"],
  },
  {
    slug: "real-estate-erp",
    client: "Real estate agency",
    industry: "Real Estate",
    title: "CRM and listing portal integration on a single ERP",
    summary: "Unified CRM, accounting and property publishing so listings, leads and invoicing live in one system.",
    results: [
      { label: "Tools replaced", value: "4" },
      { label: "Publishing", value: "1-click" },
      { label: "Accounting", value: "Unified" },
    ],
    tags: ["ERP", "CRM", "Integrations"],
  },
  {
    slug: "food-manufacturing",
    client: "Food manufacturer",
    industry: "Manufacturing",
    title: "Traceability, production and accounting in one platform",
    summary: "Implemented lot traceability, production planning and inventory with integrated accounting.",
    results: [
      { label: "Traceability", value: "End to end" },
      { label: "Stock accuracy", value: "99%" },
      { label: "Month-end close", value: "-5 days" },
    ],
    tags: ["ERP", "Manufacturing", "Traceability"],
  },
  {
    slug: "ecommerce-multi-company",
    client: "International online retailer",
    industry: "E-commerce",
    title: "Multi-company operations with a connected web store",
    summary: "Deployed multi-company management with shared inventory and a web store synchronized in real time.",
    results: [
      { label: "Entities", value: "5" },
      { label: "Stock sync", value: "Real time" },
      { label: "Order handling", value: "-40%" },
    ],
    tags: ["ERP", "E-commerce", "Multi-company"],
  },
  {
    slug: "distillery-compliance",
    client: "Craft distillery",
    industry: "Beverages",
    title: "Excise duty and customs reporting automated",
    summary: "Built excise management, production flows and customs declaration reports specific to regulated beverages.",
    results: [
      { label: "Excise", value: "Automated" },
      { label: "Customs", value: "Automated" },
      { label: "Web store", value: "Live" },
    ],
    tags: ["ERP", "Compliance", "Manufacturing"],
  },
];
