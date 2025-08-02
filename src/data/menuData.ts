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
    id: 'giris',
    title: 'Giriş',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        id: 'missiyamiz',
        title: 'Missiyamız',
        href: '/giris/missiyamiz'
      },
      {
        id: 'vizyonumuz',
        title: 'Vizyonumuz',
        href: '/giris/vizyonumuz'
      },
      {
        id: 'hekayemiz',
        title: 'Hekayəmiz',
        href: '/giris/hekayemiz'
      }
      ,
      {
        id: 'xidmetlerimiz',
        title: 'Xidmətlərimiz',
        href: '/giris/xidmetlerimiz'
      }
      ,
      {
        id: 'layihelerimiz',
        title: 'Layihələrimiz',
        href: '/giris/layihelerimiz'
      }
    ]
  },

  {
    id: 'token-ekonomiyasi',
    title: 'Token Ekonomiyası',
    href: '/komek/token-ekonomiyasi',
    hasSeparator: true
  },
  {
    id: 'yol-xeritemiz',
    title: 'Yol Xəritəmiz',
    href: '/komek/yol-xeritemiz',
  },  

  {
    id: 'komek',
    title: 'Kömək',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        id: 'deyisiklikler-jurnali',
        title: 'Dəyişikliklər Jurnalı',
        href: '/komek/deyisiklikler-jurnali'
      },
      {
        id: 'suallar-cavablar',
        title: 'Suallar və cavablar',
        href: '/komek/suallar-cavablar'
      },
    ]
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
