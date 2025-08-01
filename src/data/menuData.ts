export interface MenuItem {
  id: string;
  title: string;
  href?: string;
  children?: MenuItem[];
  isExpandable?: boolean;
  isExpanded?: boolean;
  hasSeparator?: boolean;
}

export const menuData: MenuItem[] = [
  {
    id: 'philosophy',
    title: 'Philosophy',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        id: 'point-of-view',
        title: 'Point of view',
        href: '/philosophy/point-of-view'
      },
      {
        id: 'principles',
        title: 'Principles',
        href: '/philosophy/principles'
      }
    ]
  },
  
  {
    id: 'gallery',
    title: 'Gallery',
    href: '/gallery',
    hasSeparator: true
  },
  
  {
    id: 'typography',
    title: 'Typography',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        id: 'typeface',
        title: 'Typeface',
        href: '/typography/typeface'
      },
      {
        id: 'type-basics',
        title: 'Type basics',
        href: '/typography/type-basics'
      },
      {
        id: 'type-scale',
        title: 'Type scale',
        href: '/typography/type-scale'
      }
    ]
  },
  
  {
    id: 'color',
    title: 'Color',
    href: '/color'
  },
  
  {
    id: '2x-grid',
    title: '2x Grid',
    href: '/2x-grid',
    hasSeparator: true
  },
  
  {
    id: 'ibm-logos',
    title: 'IBM logos',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        id: '8-bar',
        title: '8-Bar',
        href: '/ibm-logos/8-bar'
      },
      {
        id: 'rebus',
        title: 'Rebus',
        href: '/ibm-logos/rebus'
      }
    ]
  },
  
  {
    id: 'iconography',
    title: 'Iconography',
    isExpandable: true,
    isExpanded: false,
    children: []
  },
  
  {
    id: 'illustration',
    title: 'Illustration',
    isExpandable: true,
    isExpanded: false,
    children: []
  },
  
  {
    id: 'photography',
    title: 'Photography',
    isExpandable: true,
    isExpanded: false,
    children: []
  },
  
  {
    id: 'data-visualization',
    title: 'Data visualization',
    isExpandable: true,
    isExpanded: false,
    children: []
  },
  
  {
    id: 'infographics',
    title: 'Infographics',
    isExpandable: true,
    isExpanded: false,
    children: []
  },
  
  {
    id: 'layout',
    title: 'Layout',
    isExpandable: true,
    isExpanded: false,
    children: []
  },
  
  {
    id: 'animation',
    title: 'Animation',
    isExpandable: true,
    isExpanded: false,
    children: [],
    hasSeparator: true
  },
  
  {
    id: 'resources',
    title: 'Resources',
    href: '/resources'
  },
  
  {
    id: 'whats-new',
    title: "What's new",
    href: '/whats-new'
  },
  
  {
    id: 'help',
    title: 'Help',
    isExpandable: true,
    isExpanded: false,
    children: []
  }
];
