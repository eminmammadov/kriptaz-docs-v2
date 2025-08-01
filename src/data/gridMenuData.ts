export interface GridMenuItem {
  id: string;
  title: string;
  href?: string;
  hasExternalIcon?: boolean;
  hasSeparator?: boolean;
}

export const gridMenuData: GridMenuItem[] = [
  // Foundations
  {
    id: 'foundations-title',
    title: 'Foundations',
    href: '#',
  },
  {
    id: 'ibm-brand-center',
    title: 'IBM Brand Center',
    href: '/brand-center',
    hasExternalIcon: true,
  },
  {
    id: 'ibm-design-language',
    title: 'IBM Design Language',
    href: '/design-language',
  },

  // Implementation
  {
    id: 'implementation-title',
    title: 'Implementation',
    href: '#',
    hasSeparator: true,
  },
  {
    id: 'carbon-design-system',
    title: 'Carbon Design System',
    href: '/carbon',
  },
  {
    id: 'carbon-for-ibm-products',
    title: 'Carbon for IBM Products',
    href: '/carbon-products',
    hasExternalIcon: true,
  },
  {
    id: 'carbon-for-ibm-com',
    title: 'Carbon for IBM.com',
    href: '/carbon-ibm-com',
  },
  {
    id: 'ibm-event-design',
    title: 'IBM Event Design',
    href: '/event-design',
  },
  {
    id: 'ibm-workplace-design',
    title: 'IBM Workplace Design',
    href: '/workplace-design',
  },

  // Practices
  {
    id: 'practices-title',
    title: 'Practices',
    href: '#',
    hasSeparator: true,
  },
  {
    id: 'enterprise-design-thinking',
    title: 'Enterprise Design Thinking',
    href: '/design-thinking',
  },
  {
    id: 'ibm-accessibility',
    title: 'IBM Accessibility',
    href: '/accessibility',
  },
  {
    id: 'ibm-design-for-ai',
    title: 'IBM Design for AI',
    href: '/design-ai',
  },
  {
    id: 'ibm-design-research',
    title: 'IBM Design Research',
    href: '/design-research',
  },
  {
    id: 'ibm-experience-standards',
    title: 'IBM Experience Standards',
    href: '/experience-standards',
    hasExternalIcon: true,
  },

  // Community
  {
    id: 'community-title',
    title: 'Community',
    href: '#',
    hasSeparator: true,
  },
  {
    id: 'ibm-design',
    title: 'IBM Design',
    href: '/design',
    hasExternalIcon: true,
  }
];
