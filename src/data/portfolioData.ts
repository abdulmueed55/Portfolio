import type { Building, Project, Service, SkillGroup } from "@/types";

export const projects: Project[] = [
  {
    id: "sportfarmas",
    title: "Sportfarmas Website",
    category: "WordPress",
    description:
      "A business website focused on clear structure, responsive sections, and professional presentation.",
    stack: ["WordPress", "Elementor", "Custom CSS", "Responsive Design"],
    liveUrl: "#",
  },
  {
    id: "across-georgia",
    title: "Across Georgia",
    category: "WordPress / Custom Feature",
    description:
      "Tour website improvements with custom review system planning and structured service pages.",
    stack: ["WordPress", "Custom Logic", "UI Improvements", "SEO Structure"],
    liveUrl: "#",
  },
  {
    id: "pushpull-health",
    title: "PushPull Health",
    category: "WordPress / Health Website",
    description:
      "Fitness and health website updates, landing page improvements, and content section fixes.",
    stack: ["WordPress", "ACF", "Custom Sections", "CSS"],
    liveUrl: "#",
  },
  {
    id: "candy-paradise",
    title: "The Candy Paradise",
    category: "Shopify / Ecommerce",
    description:
      "Ecommerce-focused visual structure with product presentation and customer-friendly layout.",
    stack: ["Shopify", "Theme Customization", "Product Layouts"],
    liveUrl: "#",
  },
  {
    id: "smarter-lodge",
    title: "Smarter Lodge",
    category: "Website Design",
    description:
      "Modern service website concept with clean layout, trust-focused sections, and conversion-friendly CTAs.",
    stack: ["Web Design", "WordPress", "UI/UX"],
    liveUrl: "#",
  },
  {
    id: "automation-workflow",
    title: "Automation Workflow Setup",
    category: "Automation",
    description:
      "Client workflow setup using email campaigns, contact imports, automation logic, and campaign tracking.",
    stack: ["Mailchimp", "GHL", "CSV", "Campaign Setup"],
    liveUrl: "#",
  },
];

export const buildings: Building[] = [
  {
    id: "wordpress-tower",
    name: "WordPress Tower",
    category: "WordPress Development",
    style: "Tall tower with cyan windows",
    description:
      "Custom WordPress websites, landing pages, theme customization, ACF sections, bug fixes, and performance improvements.",
    services: ["Custom WordPress builds", "Elementor and ACF sections", "Landing pages", "Theme fixes", "Responsive polish"],
    tools: ["WordPress", "Elementor", "ACF", "Custom CSS", "Performance"],
    projectIds: ["sportfarmas", "across-georgia", "pushpull-health"],
    accent: "#22D3EE",
    glow: "rgba(34, 211, 238, 0.35)",
    position: { desktop: "left-[8%] top-[14%]", mobileOrder: 1 },
    kind: "tower",
  },
  {
    id: "shopify-mall",
    name: "Shopify Mall",
    category: "Shopify Development",
    style: "Wide mall with green accent",
    description:
      "Shopify stores, product pages, subscription setup, theme customization, payment setup, and conversion-focused layouts.",
    services: ["Store setup", "Product page layouts", "Theme customization", "Payment setup", "Conversion-focused sections"],
    tools: ["Shopify", "Liquid", "Product Pages", "Subscriptions", "Checkout"],
    projectIds: ["candy-paradise"],
    accent: "#34D399",
    glow: "rgba(52, 211, 153, 0.34)",
    position: { desktop: "right-[9%] top-[18%]", mobileOrder: 2 },
    kind: "mall",
  },
  {
    id: "react-lab",
    name: "React Lab",
    category: "React / Next.js",
    style: "Futuristic lab building",
    description:
      "Modern React and Next.js interfaces, interactive portfolios, dashboards, and advanced frontend experiences.",
    services: ["Interactive UIs", "Next.js websites", "Dashboards", "Component systems", "Frontend animations"],
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    projectIds: ["smarter-lodge"],
    accent: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.34)",
    position: { desktop: "left-[43%] top-[35%]", mobileOrder: 3 },
    kind: "lab",
  },
  {
    id: "seo-hub",
    name: "SEO Hub",
    category: "SEO & Website Optimization",
    style: "Signal tower / search hub",
    description:
      "Website audits, on-page SEO, speed improvements, content structure, technical fixes, and visibility improvements.",
    services: ["Website audits", "On-page SEO", "Technical fixes", "Speed improvements", "Content structure"],
    tools: ["SEO", "Analytics", "Core Web Vitals", "Schema", "Content"],
    projectIds: ["across-georgia", "sportfarmas"],
    accent: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.32)",
    position: { desktop: "left-[13%] bottom-[17%]", mobileOrder: 4 },
    kind: "signal",
  },
  {
    id: "design-studio",
    name: "Design Studio",
    category: "Graphics & Visual Design",
    style: "Creative studio with glowing sign",
    description:
      "Social media posts, thumbnails, banners, portfolio visuals, branding assets, and clean modern design.",
    services: ["Social media creatives", "Thumbnails", "Banners", "Portfolio visuals", "Brand assets"],
    tools: ["Canva", "UI Layouts", "Branding", "Visual Design", "Thumbnails"],
    projectIds: ["smarter-lodge"],
    accent: "#F472B6",
    glow: "rgba(244, 114, 182, 0.28)",
    position: { desktop: "right-[12%] bottom-[18%]", mobileOrder: 5 },
    kind: "studio",
  },
  {
    id: "automation-center",
    name: "Automation Center",
    category: "CRM & Automation",
    style: "Control center / command building",
    description:
      "Mailchimp, GoHighLevel, ManyChat, workflow setup, contact imports, campaigns, and client process automation.",
    services: ["Workflow setup", "Contact imports", "Email campaigns", "ManyChat flows", "Campaign tracking"],
    tools: ["Mailchimp", "GoHighLevel", "ManyChat", "CSV", "Automation"],
    projectIds: ["automation-workflow"],
    accent: "#22D3EE",
    glow: "rgba(34, 211, 238, 0.30)",
    position: { desktop: "left-[42%] bottom-[10%]", mobileOrder: 6 },
    kind: "automation",
  },
  {
    id: "contact-hq",
    name: "Contact HQ",
    category: "Contact",
    style: "Premium headquarters building",
    description: "Start a project, request a website audit, or discuss a custom digital solution.",
    services: ["Project consultation", "Website audit", "Scope planning", "Fast response", "Custom solution mapping"],
    tools: ["Email", "WhatsApp", "Discovery", "Proposal", "Launch Plan"],
    projectIds: ["sportfarmas", "candy-paradise", "automation-workflow"],
    accent: "#34D399",
    glow: "rgba(52, 211, 153, 0.32)",
    position: { desktop: "left-[46%] top-[10%]", mobileOrder: 7 },
    kind: "hq",
  },
];

export const services: Service[] = [
  { icon: "Blocks", title: "WordPress Development", description: "Custom, responsive WordPress pages with clean sections, strong structure, and practical editing workflows." },
  { icon: "ShoppingBag", title: "Shopify Store Setup", description: "Business-ready Shopify stores, product pages, payment setup, and conversion-focused storefront polish." },
  { icon: "Code2", title: "React / Next.js Websites", description: "Interactive, fast, and scalable frontend experiences built with modern React and Next.js patterns." },
  { icon: "Search", title: "SEO & Website Audit", description: "Technical checks, on-page structure, speed improvements, and visibility-focused recommendations." },
  { icon: "Palette", title: "Graphic Design", description: "Clean social creatives, banners, thumbnails, UI sections, and modern brand support assets." },
  { icon: "Workflow", title: "Automation & CRM Workflows", description: "Mailchimp, GoHighLevel, ManyChat, imports, campaigns, and client process automation support." },
];

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "CMS", skills: ["WordPress", "Elementor", "ACF", "Wix", "Webflow"] },
  { title: "Ecommerce", skills: ["Shopify", "Product Pages", "Theme Customization", "Subscription Setup"] },
  { title: "Marketing / Automation", skills: ["Mailchimp", "GoHighLevel", "ManyChat", "SEO", "Campaign Setup"] },
  { title: "Design", skills: ["Canva", "Social Media Design", "Thumbnail Design", "UI Layouts"] },
];

export const processSteps = [
  { title: "Discover", description: "I understand your business, goals, current problems, and target audience." },
  { title: "Design", description: "I plan the layout, user flow, content structure, and visual direction." },
  { title: "Build", description: "I develop the website or system with responsive, clean, and scalable code." },
  { title: "Launch & Improve", description: "I test, optimize, publish, and improve based on real feedback." },
];
