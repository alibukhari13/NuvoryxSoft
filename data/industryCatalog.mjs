export const industryCatalog = {
  'Fintech & Banking': ['Real-time payments, fraud models and digital banking built for regulators and customers alike.', 'PCI DSS · SOC 2 · PSD2 · GDPR'],
  Healthcare: ['Interoperable clinical platforms and AI that give clinicians time back.', 'HIPAA · HL7 FHIR · ISO 13485 · GDPR'],
  'Retail & E-commerce': ['Composable commerce, personalisation and supply visibility that protect margin.', 'PCI DSS · GDPR · CCPA · WCAG 2.2'],
  'Logistics & Supply Chain': ['Route optimisation, telematics and control towers for end-to-end visibility.', 'ISO 28000 · SOC 2 · GDPR · C-TPAT'],
  'Education / EdTech': ['Learning platforms and AI tutors that scale to millions of learners.', 'FERPA · COPPA · WCAG 2.2 · GDPR'],
  'Real Estate / PropTech': ['Portfolio intelligence, tenant apps and smart-building integrations.', 'SOC 2 · GDPR · ISO 27001 · AML'],
  Telecom: ['OSS/BSS modernisation, network analytics and self-serve digital channels.', 'TM Forum · ISO 27001 · GDPR · CPNI'],
  'SaaS & Startups': ['From MVP to Series C: product engineering that keeps pace with growth.', 'SOC 2 · GDPR · ISO 27001 · HIPAA'],
  'Public Sector': ['Accessible, secure citizen services delivered on time and on budget.', 'FedRAMP · WCAG 2.2 · ISO 27001 · NIST 800-53'],
  Manufacturing: ['Industrial IoT, predictive maintenance and vision-based quality control.', 'ISO 9001 · IEC 62443 · ISO 27001 · GDPR'],
};
export const industrySlug = (title) => ({
  'Fintech & Banking': 'fintech-banking',
  'Retail & E-commerce': 'retail-ecommerce',
  'Logistics & Supply Chain': 'logistics-supply-chain',
  'Education / EdTech': 'education-edtech',
  'Real Estate / PropTech': 'real-estate-proptech',
  'SaaS & Startups': 'saas-startups',
  'Public Sector': 'public-sector',
}[title] || title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
