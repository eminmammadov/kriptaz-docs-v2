export interface GridMenuItem {
  id: string;
  title: string;
  href?: string;
  hasExternalIcon?: boolean;
  hasSeparator?: boolean;
  openInNewTab?: boolean;
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
    openInNewTab: true,
  },
  {
    id: 'ibm-design-language',
    title: 'IBM Design Language',
    href: '/design-language',
    openInNewTab: false,
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
    openInNewTab: false,
  },
  {
    id: 'carbon-for-ibm-products',
    title: 'Carbon for IBM Products',
    href: '/carbon-products',
    hasExternalIcon: true,
    openInNewTab: true,
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
    openInNewTab: true,
  },

  // Community
  {
    id: 'icmamiz-title',
    title: 'İcmamız',
    href: '#',
    hasSeparator: true,
  },
  {
    id: 'x',
    title: 'X',
    href: 'https://x.com/kriptazChain',
    hasExternalIcon: true,
    openInNewTab: true,
  },
  {
    id: 'x2',
    title: 'X (InvestFounders)',
    href: 'https://x.com/InvestFounders',
    hasExternalIcon: true,
    openInNewTab: true,
  },
  {
    id: 'facebook-group',
    title: 'Facebook qrupu',
    href: 'https://www.facebook.com/groups/kriptoazerbaijan',
    hasExternalIcon: true,
    openInNewTab: true,
  },
  {
    id: 'facebook-page',
    title: 'Facebook səhifəsi',
    href: 'https://www.facebook.com/kriptazChain',
    hasExternalIcon: true,
    openInNewTab: true,
  },
  {
    id: 'youtube',
    title: 'Youtube',
    href: 'https://www.youtube.com/@kriptazChain',
    hasExternalIcon: true,
    openInNewTab: true,
  },
  {
    id: 'linkedin',
    title: 'Linkedin',
    href: 'https://www.linkedin.com/company/kriptazblockchain',
    hasExternalIcon: true,
    openInNewTab: true,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    href: 'https://instagram.com/kriptaz',
    hasExternalIcon: true,
    openInNewTab: true,
  },
  {
    id: 'telegram-channel',
    title: 'Telegram kanalı',
    href: 'https://t.me/kriptoazerbaycancommunity',
    hasExternalIcon: true,
    openInNewTab: true,
  },
  {
    id: 'telegram-qrupu',
    title: 'Telegram qrupu',
    href: 'https://t.me/kriptoazerbaycancommunitynew',
    hasExternalIcon: true,
    openInNewTab: true,
  }

];
