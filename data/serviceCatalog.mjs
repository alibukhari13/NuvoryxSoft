export const serviceCatalog = {
  'AI & Data Innovation': ['AI Strategy & Roadmap', 'Generative AI & LLM Solutions', 'AI Agents & Workflow Automation', 'Machine Learning & Predictive Analytics', 'Data Engineering & Pipelines', 'Data Analytics & BI', 'Computer Vision', 'Conversational AI / Chatbots'],
  Engineering: ['UX/UI Design', 'Product Development', 'Application Modernization', 'Quality Assurance & Continuous Delivery', 'POC / MVP Development', 'Application Development', 'AI Development Services'],
  'Advisory & Strategy': ['Digital Transformation Consulting', 'Technology Roadmapping', 'Fractional CTO', 'Product Strategy', 'Architecture Review'],
  Cybersecurity: ['Application Security & Pen Testing', 'Cloud Security', 'Security Audits & Compliance', 'Managed Security / SOC', 'Data Protection'],
  'Optimization & Quality': ['Performance Optimization', 'Software Testing & Automation', 'Code Audit', 'Technical Debt Reduction', 'Process Optimization'],
  'Cloud & Infrastructure': ['Cloud Strategy & Architecture', 'Cloud Migration', 'DevOps & CI/CD', 'Managed Cloud Operations', 'Infrastructure Modernization', 'FinOps / Cost Optimization', 'Multi-Cloud (AWS, Azure, GCP)'],
  'Digital Experience': ['Web Development', 'Mobile App Development', 'E-commerce Solutions', 'CMS & Headless', 'Digital Marketing', 'Branding & Design'],
  'Business Process Services': ['Staff Augmentation / Dedicated Teams', 'Offshore Development Center', 'IT Support', 'Recruitment Support'],
};

export const categorySlug = (title) => ({
  'AI & Data Innovation': 'ai-data-innovation',
  'Advisory & Strategy': 'advisory-strategy',
  'Optimization & Quality': 'optimization-quality',
  'Cloud & Infrastructure': 'cloud-infrastructure',
}[title] || title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));

export const pageSlug = (title) => title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const findServiceBySlug = (slug) => {
  for (const [category, services] of Object.entries(serviceCatalog)) {
    const service = services.find((item) => pageSlug(item) === slug);
    if (service) return { category, service, categorySlug: categorySlug(category), slug };
  }
  return null;
};
