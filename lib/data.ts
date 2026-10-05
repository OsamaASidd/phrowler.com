import type { IconKey } from "@/components/icons";

export const site = {
  name: "Phrowler",
  tagline: "25+ Years of ERP Expertise. Modern ERPNext & AI Solutions.",
  description:
    "Phrowler brings 25+ years of ERP implementation and system design experience, plus 5+ years in e-invoicing integration and AI automation — helping businesses implement ERPNext, stay compliant, and automate the busywork.",
  email: "info@phrowler.com",
  whatsapp: "+968 7120 7881",
  location: "Muscat, Oman",
  links: {
    whatsapp:
      "https://wa.me/96871207881?text=" +
      encodeURIComponent("Hi Phrowler, I'd like to talk about a project."),
  },
  legal: {
    entityName: "Alliance Orbit Trading and Contracting",
    registrationNumber: "1640588",
    licenseNumber: "L3899168",
    jurisdiction: "Sultanate of Oman",
    address:
      "Suite # 106, G.Gold Compound, Gold Street, Main Ruwi Road, Postal Code 112, Muscat, Oman",
  },
};

export const nav = [
  { href: "/erp/", label: "ERP" },
  { href: "/ai/", label: "AI" },
  { href: "/web-mobile/", label: "Web & Mobile" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export const stats = [
  { value: "25+", label: "Years of ERP implementation & system design experience" },
  { value: "5+", label: "Years in e-invoicing integration & AI automation" },
  { value: "16+", label: "Tier-1 clients kept compliant on e-invoicing" },
  { value: "45K+", label: "Records processed automatically, every day" },
];

export type Pillar = {
  slug: string;
  href: string;
  name: string;
  pitch: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    slug: "erp",
    href: "/erp/",
    name: "Implementation",
    pitch: "Get every system talking, and stay compliant while you do it.",
    description:
      "Backed by 25+ years of ERP implementation and system design experience, we set up and connect the systems that run your business — ERPNext as our primary focus, plus Sage, Microsoft Dynamics 365, Oracle, Zoho Books, QuickBooks, and Odoo — and keep you compliant with e-invoicing rules in Nigeria, Pakistan, Saudi Arabia, India, and the UK, without disrupting your day-to-day operations. Official ERPNext/Frappe Partner in Oman.",
  },
  {
    slug: "ai",
    href: "/ai/",
    name: "Integration",
    pitch: "Production AI and automation that removes manual work, not adds to it.",
    description:
      "Built on 5+ years of hands-on delivery, we build AI that plugs into the tools your team already uses — Slack, Airtable, Google Drive, your ERP — instead of yet another dashboard nobody opens.",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  pillar: "erp" | "ai";
  summary: string;
  details: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "erpnext-fmcg-manufacturing",
    title: "ERPNext implementation for a medium-sized FMCG manufacturer",
    client: "Medium-Sized FMCG Manufacturing Company",
    pillar: "erp",
    summary:
      "Implemented ERPNext across procurement, inventory, production, sales, and financial accounting for a medium-sized FMCG manufacturer, replacing disconnected systems and manual processes with one integrated platform.",
    details: [
      "Deployed the Manufacturing module to manage production, bills of materials, raw materials, and finished-goods inventory.",
      "Unified procurement, sales, stock, and financial accounting inside a single ERPNext instance.",
      "Built custom reporting, dashboards, and workflow customizations around existing business processes.",
    ],
    stack: ["ERPNext", "Frappe", "Manufacturing", "Python"],
  },
  {
    slug: "erpnext-engineering-construction",
    title: "ERPNext implementation for a large engineering & construction company",
    client: "Large Engineering & Construction Company — Oil & Gas Sector, Pakistan",
    pillar: "erp",
    summary:
      "Implementing ERPNext to bring project management, procurement, inventory, costing, and financial accounting together for a large engineering and construction operator running large-scale oil & gas exploration projects.",
    details: [
      "Covers project and contract management, procurement, and supplier/subcontractor management.",
      "Built material planning, project costing, and workflow-based approvals around complex operational requirements.",
      "Custom ERPNext extensions and management dashboards tailored to engineering and construction operations.",
    ],
    stack: ["ERPNext", "Frappe", "Project Costing", "Python"],
  },
  {
    slug: "nigeria-firs-multi-erp-rollout",
    title: "Multi-ERP e-invoicing compliance across 16+ Tier-1 clients",
    client: "Nigeria FIRS/NRS — Access Point Provider engagement",
    pillar: "erp",
    summary:
      "Architected cross-ERP payload transformations and IRN/QR injection flows enabling FIRS/NRS e-invoicing compliance across SAP, Oracle, Sage, and Dynamics 365 ecosystems.",
    details: [
      "Designed a common transformation layer to normalize invoice payloads from four different ERP families into the FIRS/NRS schema.",
      "Built IRN/QR injection flows so client-facing invoice documents met compliance requirements with no manual intervention.",
      "Rolled out across 16+ Tier-1 clients without disrupting existing invoicing operations.",
    ],
    stack: ["SAP ABAP", "S/4HANA", "Oracle", "Sage", "Microsoft Dynamics 365", "REST APIs"],
  },
  {
    slug: "sage-ecosystem-e-invoicing",
    title: "E-invoicing across four Sage product lines",
    client: "Proton Security Services, Genesis Group, Swift Oil, Chorus Energy",
    pillar: "erp",
    summary:
      "Delivered FIRS-compliant e-invoicing integrations across Sage 50, Sage 200, Sage Evolution, and Sage X3 — each requiring a different integration approach.",
    details: [
      "Sage 50: Pervasive ODBC connector feeding a 32-bit Python/Flask compliance dashboard for Proton Security Services.",
      "Sage 200: ODBC middleware integration for Genesis Group.",
      "Sage Evolution: SQL middleware bridging directly into the compliance pipeline.",
      "Sage X3: cloud-based SData 2.0 REST API integration for Swift Oil and Chorus Energy.",
      "Eliminated manual FIRS submissions across all entities.",
    ],
    stack: ["Sage 50/200/Evolution/X3", "Pervasive ODBC", "Python", "Flask", "SData REST API"],
  },
  {
    slug: "sap-abap-custom-integration",
    title: "Custom SAP ABAP integration classes for e-invoicing migration",
    client: "Dabur LTD, Fidelity Bank PLC",
    pillar: "erp",
    summary:
      "Developed custom ABAP integration classes, a dedicated transaction, and RFC/STRUST setup to migrate SAP e-invoicing pipelines onto a new compliance API.",
    details: [
      "Built ZCL_FLICK_API_INTEGRATION-style ABAP classes and a custom ZFIRS transaction.",
      "Configured RFC destinations and STRUST for secure API communication across DDE/DQE/DPE landscapes.",
    ],
    stack: ["SAP ABAP", "S/4HANA", "RFC", "STRUST"],
  },
  {
    slug: "dynamics-365-e-invoicing",
    title: "Microsoft Dynamics 365 e-invoicing across 9+ entities",
    client: "Prime Atlantic Group, VINCI Energies, Fidelity Bank PLC",
    pillar: "erp",
    summary:
      "Authored AL extensions and X++ customizations to deliver NRS/FIRS e-invoicing compliance across a multi-entity Dynamics 365 footprint.",
    details: [
      "Covered 9 entities under a single group for Prime Atlantic Group.",
      "Extended to VINCI Energies and Fidelity Bank PLC with entity-specific configuration.",
    ],
    stack: ["Microsoft Dynamics 365", "AL", "X++"],
  },
  {
    slug: "erpnext-finance-hr-ops",
    title: "ERPNext Finance/HR/Operations consolidation",
    client: "Orion Group LLC — Rentals Management, UAE",
    pillar: "erp",
    summary:
      "Consolidated three departmental systems into a single ERPNext implementation with custom workflows and analytics, reducing reporting cycle time.",
    details: [
      "Unified Finance, HR, and Operations into one system of record.",
      "Built custom workflows and analytics dashboards tailored to existing reporting cadence.",
    ],
    stack: ["ERPNext", "Frappe", "Python", "MariaDB"],
  },
  {
    slug: "frappe-crm-data-warehouse",
    title: "Frappe CRM rollout with a multi-source sales data warehouse",
    client: "AF Compressors (Belgium)",
    pillar: "erp",
    summary:
      "Centralized sales analytics across a multi-country territory by combining a Frappe CRM rollout with a SQL Server data warehouse pipeline from Daxium and Sage.",
    details: [
      "Enabled territory-based opportunity tracking across country teams.",
      "Unified dashboards fed from two previously disconnected source systems.",
    ],
    stack: ["Frappe CRM", "SQL Server", "Sage", "Daxium"],
  },
  {
    slug: "pakistan-fbr-e-invoicing-app",
    title: "FBR e-invoicing compliance app on Frappe",
    client: "Pakistan-based clients",
    pillar: "erp",
    summary:
      "Authored a dedicated FBR e-invoicing Frappe app to bring multiple Pakistan-based clients into compliance with the digital invoicing mandate.",
    details: [
      "Built compliance logic natively into the existing ERPNext/Frappe stack instead of bolting on a third-party tool.",
      "Rolled out across multiple clients without disrupting existing invoicing workflows.",
    ],
    stack: ["Frappe", "ERPNext", "Python", "MariaDB"],
  },
  {
    slug: "as2-edi-pernod-ricard",
    title: "AS2/EDI middleware for automated B2B invoice exchange",
    client: "Pernod Ricard",
    pillar: "erp",
    summary:
      "Provisioned AS2 middleware and EDI channel integration to bridge a global ERP with the Nigeria FIRS access point, automating B2B invoice exchange.",
    details: [
      "Configured AS2 middleware to handle secure, automated document exchange.",
      "Bridged the client's global ERP landscape with the local compliance access point.",
    ],
    stack: ["AS2", "EDI", "REST APIs"],
  },
  {
    slug: "erpnext-performance-tuning-falcon-i",
    title: "Resolving persistent ERPNext production timeouts",
    client: "Falcon-i Tracking",
    pillar: "erp",
    summary:
      "Tuned InnoDB and Redis configurations to resolve persistent ERPNext timeout errors, restoring stable production performance.",
    details: [
      "Diagnosed timeout root causes under real production load.",
      "Retuned InnoDB and Redis configuration rather than scaling hardware.",
    ],
    stack: ["ERPNext", "MariaDB", "InnoDB", "Redis"],
  },
  {
    slug: "midway-logistics-erpnext",
    title: "ERPNext implementation for a road and rail logistics operator",
    client: "Midway Logistics — Road & Rail Logistics, Pakistan",
    pillar: "erp",
    summary:
      "Implemented ERPNext to run Midway Logistics' core operations on a single system, replacing fragmented tools across their road and rail freight business.",
    details: [
      "Rolled out on ERPNext, giving operations a shared system of record instead of disconnected spreadsheets and tools.",
    ],
    stack: ["ERPNext", "Frappe"],
  },
  {
    slug: "keto-gpt-rag",
    title: "KETO GPT — a deployed RAG application",
    client: "Direct-to-consumer nutrition product",
    pillar: "ai",
    summary:
      "Deployed a retrieval-augmented generation LLM application delivering personalized keto recommendations and nutrition-score tracking.",
    details: [
      "Grounded LLM responses in a curated nutrition knowledge base to avoid hallucinated recommendations.",
      "Shipped and hosted on Vercel for production end users.",
    ],
    stack: ["LangChain", "OpenAI", "Vercel"],
  },
  {
    slug: "erpnext-cross-platform-automation",
    title: "Cross-platform inventory and approval automation",
    client: "Motley Terpz (licensed cannabis manufacturer, US)",
    pillar: "ai",
    summary:
      "Built Slack approval flows, two-way Airtable sync, and Google Drive backup on top of ERPNext to remove manual data entry between systems.",
    details: [
      "Slack-based approval workflows tied directly into ERPNext records.",
      "Two-way Airtable sync kept operational and ERP data consistent in both directions.",
      "Redesigned ERPNext UI/UX and stood up production/staging environments with SSL.",
    ],
    stack: ["ERPNext", "Slack API", "Airtable API", "Google Drive API"],
  },
  {
    slug: "computer-vision-fashion-tagging",
    title: "Computer vision pipeline for automated product tagging",
    client: "Lookflock — 55 fashion brands",
    pillar: "ai",
    summary:
      "Built a computer vision and NLP pipeline processing 45,000+ daily data points across 55 fashion brands, cutting manual categorization effort by 60%.",
    details: [
      "OpenCV/Ultralytics pipeline for automated tagging and visual similarity search.",
      "NLP-based recommendation engine improved click-through rates by 22% across personalized feeds.",
      "Real-time data warehouse on Firebase with Redis caching cut dashboard query times by 40%.",
    ],
    stack: ["Python", "OpenCV", "Ultralytics", "Firebase", "Redis"],
  },
  {
    slug: "n8n-facebook-ads-pipeline",
    title: "Facebook Ads to ERPNext lead pipeline",
    client: "LabPro Pharma — Medicine Distribution, Africa (Cameroon, Nigeria, DRC)",
    pillar: "ai",
    summary:
      "Built an n8n pipeline moving leads from Facebook Ads directly into ERPNext and configured a multi-company Chart of Accounts to unify sales and dispatching across three country entities.",
    details: [
      "Automated lead capture from paid social directly into the CRM.",
      "Unified sales and dispatching data across three country entities.",
    ],
    stack: ["n8n", "ERPNext", "Facebook Ads API"],
  },
  {
    slug: "ai-trading-bot",
    title: "AI-powered crypto trading bot",
    client: "Upwork engagement",
    pillar: "ai",
    summary:
      "Programmed a Tkinter-based crypto trading bot combining SuperTrend, Golden/Death Cross, Bollinger Bands, and Funding Rate indicators to automate Binance order execution.",
    details: [
      "Combined four independent technical indicators into a single decision layer.",
      "Removed manual signal-tracking from live trading execution.",
    ],
    stack: ["Python", "Tkinter", "Binance API"],
  },
  {
    slug: "tourism-ocr-app",
    title: "Tourism management app with passport OCR",
    client: "TravelApp — Tourism Agency, Pakistan",
    pillar: "ai",
    summary:
      "Released a Tourism Management application on Frappe with a global-passport OCR module and S3/Google Drive backup pipelines, automating 70% of operational workflows.",
    details: [
      "Built OCR-based passport data extraction to remove manual entry.",
      "Automated backup pipelines across S3 and Google Drive.",
    ],
    stack: ["Frappe", "OCR", "AWS S3", "Google Drive API"],
  },
  {
    slug: "sports-prediction-app",
    title: "Full-stack sports prediction platform",
    client: "Upwork engagement (NBA, NHL, MLB, NFL)",
    pillar: "ai",
    summary:
      "Constructed a full-stack sports prediction app using Monte Carlo simulations and Random Forest classification with Stripe payments, achieving 70% prediction accuracy with live odds tracking.",
    details: [
      "Combined simulation-based and classification models for prediction.",
      "Integrated Stripe for paid access alongside live odds tracking.",
    ],
    stack: ["PyQt5", "Flask", "Streamlit", "NeonSQL", "Stripe"],
  },
  {
    slug: "resumeai-platform",
    title: "ResumeAI — resume enhancement platform",
    client: "Upwork engagement",
    pillar: "ai",
    summary:
      "Shipped ResumeAI, a resume-enhancement platform with region-specific optimization, ATS scoring, customizable templates, and an AI chat editor.",
    details: [
      "Built ATS scoring logic to help resumes pass automated screening.",
      "Added an AI chat editor for iterative, guided resume edits.",
    ],
    stack: ["Python", "OpenAI", "LangChain"],
  },
];

export type ErpModule = {
  name: string;
  description: string;
};

export const erpModules: ErpModule[] = [
  { name: "Financial Accounting", description: "Chart of accounts, ledgers, multi-currency, and financial statements." },
  { name: "Sales & CRM", description: "Quotes, sales orders, customer records, and pipeline tracking." },
  { name: "Purchasing", description: "Purchase orders, vendor records, and approval workflows." },
  { name: "Inventory & Warehousing", description: "Stock tracking across multiple warehouses, batches, and serial numbers." },
  { name: "Manufacturing", description: "Bills of materials, work orders, and production scheduling." },
  { name: "HR & Payroll", description: "Employee records, attendance, and payroll processing." },
  { name: "Projects", description: "Tasks, timesheets, and project profitability tracking." },
  { name: "Assets", description: "Asset registers, depreciation, and maintenance schedules." },
];

export type CatalogService = {
  slug: string;
  category: "erp" | "ai" | "web" | "mobile";
  icon: IconKey;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  modules?: ErpModule[];
  relatedCaseStudies: string[];
};

export type FeaturedProduct = {
  href: string;
  icon: IconKey;
  name: string;
  tagline: string;
};

export const featuredAiProduct: FeaturedProduct = {
  href: "/ai/enterprise-knowledge-ai/",
  icon: "brain",
  name: "Enterprise Knowledge AI",
  tagline:
    "Local AI trained exclusively on your business data that predicts risk, prescribes next actions, and helps leadership strategize. Runs on your own infrastructure, cites every answer, and says \"I don't know\" instead of guessing.",
};

export const erpServices: CatalogService[] = [
  {
    slug: "erpnext-implementation",
    category: "erp",
    icon: "layers",
    name: "ERPNext & Frappe Implementation",
    tagline: "Official ERPNext/Frappe Partner — Oman.",
    description:
      "As an Official ERPNext/Frappe Partner in Oman, we set up ERPNext from scratch — moving your data over, building the workflows you actually use, and getting every department off spreadsheets and onto one system.",
    capabilities: [
      "Moving your existing data over from spreadsheets or old systems",
      "Custom Frappe app development for anything ERPNext doesn't do out of the box",
      "Approval workflows built around how your team actually works",
      "Reporting and dashboards your managers will actually open",
      "A proper production setup with SSL, not just a demo instance",
    ],
    modules: erpModules,
    relatedCaseStudies: [
      "erpnext-fmcg-manufacturing",
      "erpnext-engineering-construction",
      "erpnext-finance-hr-ops",
      "frappe-crm-data-warehouse",
      "midway-logistics-erpnext",
    ],
  },
  {
    slug: "sage-erp-integration",
    category: "erp",
    icon: "layers",
    name: "Sage Implementation & Integration",
    tagline: "One partner for Sage, whichever version you run.",
    description:
      "Every version of Sage connects differently under the hood. We've worked with all of them, so you get one point of contact instead of juggling different specialists.",
    capabilities: [
      "Setup and configuration across every current Sage product",
      "Connecting Sage to compliance systems and other business tools",
      "Custom dashboards built on top of your Sage data",
      "Data migration in and out of Sage",
    ],
    modules: erpModules,
    relatedCaseStudies: ["sage-ecosystem-e-invoicing"],
  },
  {
    slug: "dynamics-365-development",
    category: "erp",
    icon: "layers",
    name: "Microsoft Dynamics 365 Implementation & Integration",
    tagline: "Setup and custom development for Dynamics 365, even across multiple companies.",
    description:
      "We set up and customize Microsoft Dynamics 365 for businesses with multiple companies or entities, and connect it to the compliance and reporting systems you need.",
    capabilities: [
      "Full implementation and configuration of Dynamics 365",
      "Custom development for anything specific to your business",
      "Multi-entity and multi-company setup",
      "Connecting Dynamics 365 to outside compliance and reporting systems",
    ],
    modules: erpModules,
    relatedCaseStudies: ["dynamics-365-e-invoicing"],
  },
  {
    slug: "oracle-fusion-integration",
    category: "erp",
    icon: "layers",
    name: "Oracle Fusion Implementation & Integration",
    tagline: "Setup and integration for Oracle Fusion, including e-invoicing.",
    description:
      "We set up Oracle Fusion and connect it to the compliance and reporting systems you need — including moving your e-invoicing over if you're switching providers.",
    capabilities: [
      "Full implementation and configuration of Oracle Fusion",
      "Moving e-invoicing over from another provider with no gap in compliance",
      "Connecting Oracle to compliance and reporting systems",
      "Data extraction and custom reporting out of Oracle",
    ],
    modules: erpModules,
    relatedCaseStudies: ["nigeria-firs-multi-erp-rollout"],
  },
  {
    slug: "e-invoicing-compliance",
    category: "erp",
    icon: "receipt",
    name: "E-Invoicing Compliance",
    tagline: "Government e-invoicing rules, handled — whatever ERP you run.",
    description:
      "Governments increasingly require invoices to be submitted digitally, in a specific format, straight to the tax authority. We connect your ERP directly to that system, so every invoice goes out compliant, automatically.",
    capabilities: [
      "Nigeria FIRS/NRS e-invoicing",
      "Pakistan FBR e-invoicing",
      "Saudi Arabia ZATCA e-invoicing",
      "India GST e-invoicing",
      "UK VAT / Making Tax Digital compliance",
      "Rollouts across multiple entities and countries at once",
    ],
    relatedCaseStudies: [
      "nigeria-firs-multi-erp-rollout",
      "sage-ecosystem-e-invoicing",
      "sap-abap-custom-integration",
      "dynamics-365-e-invoicing",
      "pakistan-fbr-e-invoicing-app",
    ],
  },
  {
    slug: "as2-edi-integration",
    category: "erp",
    icon: "swap",
    name: "AS2/EDI B2B Integration",
    tagline: "Automatic invoice exchange with your biggest trading partners.",
    description:
      "Large trading partners often require invoices sent through a specific secure channel. We set this up so invoices flow automatically, with no manual sending or re-keying.",
    capabilities: [
      "Setting up the secure connection your trading partner requires",
      "Configuring the document formats they expect",
      "Bridging your ERP to their access point",
      "Fully automated, end-to-end invoice exchange",
    ],
    relatedCaseStudies: ["as2-edi-pernod-ricard"],
  },
  {
    slug: "erp-data-warehousing",
    category: "erp",
    icon: "chart",
    name: "ERP Data Warehousing & Reporting",
    tagline: "One set of numbers, pulled from every system you run.",
    description:
      "If your sales, finance, and operations data live in different systems, we pull it all into one place — so your reports finally agree with each other, without manual reconciliation.",
    capabilities: [
      "Pulling data automatically from multiple ERP and CRM sources",
      "One central reporting layer instead of five spreadsheets",
      "Reporting by region, team, or entity",
      "Dashboards built for how your business actually reports",
    ],
    relatedCaseStudies: ["frappe-crm-data-warehouse"],
  },
  {
    slug: "erpnext-performance-tuning",
    category: "erp",
    icon: "gauge",
    name: "ERPNext Performance Tuning",
    tagline: "For when ERPNext is running slow and nobody can tell you why.",
    description:
      "We dig into what's actually slowing your ERPNext system down — usually the database or caching setup — and fix it so it runs reliably again.",
    capabilities: [
      "Finding the real cause of timeouts and slow pages",
      "Database configuration tuning",
      "Caching setup and tuning",
      "Checking your system holds up under real, everyday load",
    ],
    relatedCaseStudies: ["erpnext-performance-tuning-falcon-i"],
  },
  {
    slug: "zoho-books-implementation",
    category: "erp",
    icon: "layers",
    name: "Zoho Books Implementation & Integration",
    tagline: "Setup, customization, and integration for Zoho Books.",
    description:
      "We set up Zoho Books and connect it to the rest of your Zoho stack — or to ERPNext, your website, and other business tools — so your books stay accurate without manual re-entry.",
    capabilities: [
      "Zoho Books setup and chart of accounts configuration",
      "Integration with Zoho CRM, Inventory, and the wider Zoho suite",
      "Connecting Zoho Books to ERPNext or other systems you run",
      "Custom workflows and automated invoicing",
      "Migration from spreadsheets or another accounting tool",
    ],
    relatedCaseStudies: [],
  },
  {
    slug: "quickbooks-implementation",
    category: "erp",
    icon: "layers",
    name: "QuickBooks Implementation & Integration",
    tagline: "Setup and integration for QuickBooks Online or Desktop.",
    description:
      "We set up QuickBooks and connect it to your other systems — inventory, CRM, or a custom app — so your accounting data stays in sync instead of living in its own silo.",
    capabilities: [
      "QuickBooks Online and Desktop setup and configuration",
      "Chart of accounts and workflow setup around how you invoice and pay",
      "Integration with your CRM, inventory, or e-commerce platform",
      "Data migration from an existing accounting system",
      "Custom reporting on top of your QuickBooks data",
    ],
    relatedCaseStudies: [],
  },
  {
    slug: "odoo-implementation",
    category: "erp",
    icon: "layers",
    name: "Odoo Implementation & Integration",
    tagline: "Modular ERP implementation for growing businesses.",
    description:
      "We implement Odoo's modular ERP — sales, inventory, accounting, and more — configured around the modules your business actually needs, not the whole suite at once.",
    capabilities: [
      "Odoo implementation and module configuration",
      "Custom development for anything Odoo doesn't do out of the box",
      "Integration with other systems and third-party tools",
      "Data migration from spreadsheets or another ERP",
      "Training and ongoing support",
    ],
    modules: erpModules,
    relatedCaseStudies: [],
  },
];

export const aiServices: CatalogService[] = [
  {
    slug: "rag-llm-applications",
    category: "ai",
    icon: "brain",
    name: "Custom AI Assistants",
    tagline: "AI that answers from your own documents, not a generic guess.",
    description:
      "We build AI assistants that search your own documents and data before answering — a technique called RAG (retrieval-augmented generation) — so responses are grounded in what you actually have, not made up. Shipped as a real, working tool, not a demo.",
    capabilities: [
      "AI trained to search your own documents before answering",
      "Built with LangChain and OpenAI",
      "Deployed and running live, not just a prototype",
      "Tuned to your specific business or product knowledge",
    ],
    relatedCaseStudies: ["keto-gpt-rag"],
  },
  {
    slug: "voice-ai-agents",
    category: "ai",
    icon: "mic",
    name: "Voice AI Assistants",
    tagline: "AI that can answer your phone, so people don't have to.",
    description:
      "We build voice assistants for call intake, customer support, and internal workflows — the same AI approach we use for chat, just over the phone — that hand off to a real person when they should.",
    capabilities: [
      "Handles incoming calls for support or intake",
      "Understands and speaks naturally, not robotic menus",
      "Works with your phone system",
      "Hands off to a human cleanly when needed",
    ],
    relatedCaseStudies: [],
  },
  {
    slug: "computer-vision-systems",
    category: "ai",
    icon: "eye",
    name: "Computer Vision Systems",
    tagline: "Software that looks at images or video and understands what's in them.",
    description:
      "We build tools that automatically tag photos, monitor video feeds, or find visually similar products — tuned to run fast and accurately, even on lightweight hardware.",
    capabilities: [
      "Automatic photo and image tagging",
      "Finding visually similar products or items",
      "Monitoring live video feeds for specific objects",
      "Runs on affordable, lightweight hardware when needed",
    ],
    relatedCaseStudies: ["computer-vision-fashion-tagging"],
  },
  {
    slug: "workflow-automation-n8n",
    category: "ai",
    icon: "workflow",
    name: "Workflow Automation",
    tagline: "Connect the tools you already use, so they update each other automatically.",
    description:
      "We connect the tools you already use — your ERP, Slack, Airtable, Google Drive, ad platforms — so data moves between them on its own. No more copying and pasting between systems.",
    capabilities: [
      "Connecting your ERP to Slack, Airtable, and Google Drive",
      "Automatic lead capture from ad platforms into your CRM",
      "Approval workflows that run themselves",
      "Built to alert you if anything breaks",
    ],
    relatedCaseStudies: ["n8n-facebook-ads-pipeline", "erpnext-cross-platform-automation"],
  },
  {
    slug: "ai-agents-autonomous-workflows",
    category: "ai",
    icon: "bot",
    name: "AI Agents That Take Action",
    tagline: "AI that doesn't just answer questions — it does the task.",
    description:
      "Most AI tools just answer questions. We build AI that goes a step further — pulling in information from several sources, deciding what to do, and doing it — with guardrails so a person always stays in control.",
    capabilities: [
      "Pulls signals from multiple sources before deciding anything",
      "Actually executes the task, not just a recommendation",
      "Guardrails and manual override built in",
      "Alerts you when something needs a human look",
    ],
    relatedCaseStudies: ["ai-trading-bot"],
  },
  {
    slug: "nlp-recommendation-engines",
    category: "ai",
    icon: "sparkle",
    name: "Personalization & Recommendations",
    tagline: "Show each customer what they're actually likely to want.",
    description:
      "We build recommendation systems trained on your own customer behavior and content — the kind that moves a real number, like sales or click-throughs, not just a demo accuracy score.",
    capabilities: [
      "Recommendations trained on your own customer data",
      "Built to move a real metric, not just a lab score",
      "Ongoing testing to see what's actually working",
      "Fits into your existing app or storefront",
    ],
    relatedCaseStudies: ["computer-vision-fashion-tagging"],
  },
  {
    slug: "document-intelligence-ocr",
    category: "ai",
    icon: "scan",
    name: "Document Data Extraction",
    tagline: "Turn scanned forms, IDs, and passports into usable data automatically.",
    description:
      "We build tools that read scanned documents — passports, ID cards, forms — and pull out the data automatically, so nobody has to type it in by hand.",
    capabilities: [
      "Reads passports, IDs, and forms automatically",
      "Flags anything it isn't confident about for a human check",
      "Plugs straight into your existing ERP or CRM",
      "Removes manual data entry from the process",
    ],
    relatedCaseStudies: ["tourism-ocr-app"],
  },
  {
    slug: "predictive-analytics-ml",
    category: "ai",
    icon: "trending",
    name: "Forecasting & Predictions",
    tagline: "Predict what's likely to happen next, based on your own data.",
    description:
      "We build forecasting and prediction tools trained on your real historical data, and wire them into an actual application people use — payments included, if you need them.",
    capabilities: [
      "Forecasting trained on your own historical data",
      "Built into a real, usable application",
      "Payment integration when it's part of the product",
      "Tested against multiple approaches, not just one model",
    ],
    relatedCaseStudies: ["sports-prediction-app"],
  },
  {
    slug: "ai-chatbots",
    category: "ai",
    icon: "chat",
    name: "AI Chatbots",
    tagline: "A chatbot that actually knows your product, not generic small talk.",
    description:
      "We build chatbots — on Slack, on your website, or as a standalone tool — that know your specific product, documents, or process, instead of giving generic answers.",
    capabilities: [
      "Chatbots for Slack, web, or standalone use",
      "Trained on your specific product or documents",
      "AI-assisted editing tools layered on top, where useful",
      "Usage tracking so you can see what people are asking",
    ],
    relatedCaseStudies: ["resumeai-platform"],
  },
  {
    slug: "ai-full-stack-development",
    category: "ai",
    icon: "layers",
    name: "AI Product Development",
    tagline: "The full, working app around your AI — not just the AI part.",
    description:
      "AI features need a real application around them: logins, payments, dashboards, admin tools. We build all of it, so what ships is a finished product, not just a script.",
    capabilities: [
      "Full application build, not just the AI piece",
      "Logins, payments, and admin tools included",
      "Deployed to the cloud and ready for real users",
      "One team for both the AI and the app around it",
    ],
    relatedCaseStudies: ["resumeai-platform", "erpnext-cross-platform-automation"],
  },
];

export const webServices: CatalogService[] = [
  {
    slug: "custom-web-applications",
    category: "web",
    icon: "code",
    name: "Custom Web Applications",
    tagline: "Business portals and platforms built around how your business actually works.",
    description:
      "We build custom web applications — business portals, internal tools, customer-facing platforms — designed around your actual processes, not a generic template.",
    capabilities: [
      "Business and customer/vendor portals",
      "Internal tools built around your actual workflow",
      "Custom UI/UX, not a templated theme",
      "Built to integrate with your other systems from day one",
    ],
    relatedCaseStudies: ["erpnext-cross-platform-automation"],
  },
  {
    slug: "erp-connected-portals",
    category: "web",
    icon: "layers",
    name: "ERP-Connected Websites & Portals",
    tagline: "Corporate sites and portals that read and write directly to your ERP.",
    description:
      "Corporate sites and customer/vendor portals that connect directly to ERPNext, Sage, Dynamics 365, Oracle, Zoho Books, QuickBooks, or Odoo, so there's no manual re-entry between the two.",
    capabilities: [
      "Customer and vendor self-service portals",
      "Corporate websites wired into live ERP data",
      "Single sign-on and role-based access",
      "No duplicate data entry between site and ERP",
    ],
    relatedCaseStudies: ["erpnext-finance-hr-ops", "frappe-crm-data-warehouse"],
  },
  {
    slug: "ecommerce-solutions",
    category: "web",
    icon: "swap",
    name: "E-Commerce Solutions",
    tagline: "Storefronts connected to your inventory and accounting.",
    description:
      "Storefronts connected to your inventory and accounting, so stock levels and orders stay in sync automatically instead of two systems quietly drifting apart.",
    capabilities: [
      "Storefront wired directly into ERP inventory",
      "Orders and payments flowing straight into accounting",
      "No manual stock reconciliation",
      "Built on the platform that fits your catalog, not a one-size-fits-all theme",
    ],
    relatedCaseStudies: [],
  },
  {
    slug: "backend-performance-engineering",
    category: "web",
    icon: "gauge",
    name: "Backend Engineering & Performance",
    tagline: "Scalable backend systems built to hold up under real production load.",
    description:
      "Database design, API integrations, and backend systems engineered to hold up under real production load — and tuned when an existing system is already struggling.",
    capabilities: [
      "Database schema and query performance tuning",
      "API design and third-party integrations",
      "Caching and infrastructure tuning for systems under load",
      "Diagnosing and fixing production performance issues",
    ],
    relatedCaseStudies: ["erpnext-performance-tuning-falcon-i"],
  },
  {
    slug: "devops-cloud-deployment",
    category: "web",
    icon: "workflow",
    name: "DevOps & Cloud Deployment",
    tagline: "CI/CD pipelines and cloud hosting, so releases ship reliably.",
    description:
      "CI/CD pipelines and cloud hosting on AWS, Azure, Google Cloud, or Vercel, so releases ship reliably instead of by hand.",
    capabilities: [
      "CI/CD pipeline setup",
      "Cloud hosting and infrastructure configuration",
      "Production deployment, not just a demo instance",
      "SSL, environments, and release process set up properly",
    ],
    relatedCaseStudies: ["keto-gpt-rag"],
  },
  {
    slug: "dashboards-reporting",
    category: "web",
    icon: "chart",
    name: "Dashboards & Reporting",
    tagline: "Custom reporting layers built on top of your existing data.",
    description:
      "Custom reporting layers and admin dashboards built on top of your existing data — ERP included — so the numbers your team needs are a click away, not a weekly export.",
    capabilities: [
      "Custom dashboards built on your real data sources",
      "Reporting pulled from multiple systems into one view",
      "Fast queries, even at high data volume",
      "Built for the reports your team actually opens",
    ],
    relatedCaseStudies: ["frappe-crm-data-warehouse", "computer-vision-fashion-tagging"],
  },
];

export const mobileServices: CatalogService[] = [
  {
    slug: "ios-android-app-development",
    category: "mobile",
    icon: "bot",
    name: "iOS & Android App Development",
    tagline: "Native and cross-platform apps for field teams, customers, or internal operations.",
    description:
      "Native (Swift, Kotlin) and cross-platform (React Native, Flutter) apps for field teams, customers, or internal operations, chosen based on what your project actually needs.",
    capabilities: [
      "Native iOS and Android development",
      "Cross-platform builds with React Native or Flutter",
      "Offline-capable apps for field use",
      "Push notifications and background sync",
    ],
    relatedCaseStudies: [],
  },
  {
    slug: "erp-connected-mobile-apps",
    category: "mobile",
    icon: "layers",
    name: "ERP-Connected Mobile Apps",
    tagline: "Field-sales, inventory, and approval apps synced to your ERP in real time.",
    description:
      "Field-sales, inventory, and approval apps that sync directly with your ERP in real time, not on a nightly batch job.",
    capabilities: [
      "Field-sales and inventory apps tied to live ERP data",
      "Mobile approval workflows",
      "Real-time sync, not end-of-day batch jobs",
      "Works for teams that are offline part of the day",
    ],
    relatedCaseStudies: [],
  },
  {
    slug: "app-ui-ux-design",
    category: "mobile",
    icon: "eye",
    name: "App UI/UX Design",
    tagline: "Interfaces designed for the people who'll use them every day.",
    description:
      "Interfaces designed for the people who'll use them every day on the job, not just a demo screenshot — including redesigning the UI/UX of systems you already run.",
    capabilities: [
      "UI/UX design for new and existing apps",
      "Redesigning clunky internal tools people avoid using",
      "Designed around real daily workflows",
      "Prototyping before a single line of production code",
    ],
    relatedCaseStudies: ["erpnext-cross-platform-automation"],
  },
  {
    slug: "app-modernization",
    category: "mobile",
    icon: "scan",
    name: "App Modernization",
    tagline: "Rebuilding outdated apps with better performance and a cleaner experience.",
    description:
      "Rebuilding outdated apps with better performance, modern frameworks, and a cleaner user experience — without a risky full rewrite where it isn't needed.",
    capabilities: [
      "Migrating legacy apps to modern frameworks",
      "Performance and UX improvements to existing apps",
      "Incremental modernization, not a risky big-bang rewrite",
      "Keeping the app running while it's rebuilt",
    ],
    relatedCaseStudies: [],
  },
  {
    slug: "testing-security",
    category: "mobile",
    icon: "gauge",
    name: "Testing & Security",
    tagline: "Functional, performance, and security testing before anything ships.",
    description:
      "Functional, performance, and security testing before anything reaches your users, so issues get caught before launch instead of in a one-star review.",
    capabilities: [
      "Functional and regression testing",
      "Performance testing under real load",
      "Security testing and vulnerability checks",
      "Clear bug reports your team can act on",
    ],
    relatedCaseStudies: [],
  },
  {
    slug: "app-store-deployment",
    category: "mobile",
    icon: "trending",
    name: "App Store Deployment",
    tagline: "We handle submission and release on the App Store and Google Play.",
    description:
      "We handle submission and release on the Apple App Store and Google Play, start to finish, including the parts that usually cause delays.",
    capabilities: [
      "App Store and Google Play submission",
      "Handling review feedback and rejections",
      "Release and version management",
      "Post-launch monitoring for crashes and issues",
    ],
    relatedCaseStudies: [],
  },
];

export const webMobileServices: CatalogService[] = [...webServices, ...mobileServices];

export const allCatalogServices = [...erpServices, ...aiServices, ...webServices, ...mobileServices];

export function getCaseStudiesBySlug(slugs: string[]): CaseStudy[] {
  return slugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));
}
