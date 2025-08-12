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
    title: 'Token ekonomiyası',
    href: '/komek/token-ekonomiyasi',
    hasSeparator: true
  },
  {
    id: 'yol-xeritemiz',
    title: 'Yol xəritəmiz',
    href: '/komek/yol-xeritemiz',
  },  

  
  {
    id: 'k-media',
    title: 'Kriptaz Media',
    isExpandable: true,
    isExpanded: false,
    hasSeparator: true,
    children: [
      {
        id: 'giris',
        title: 'Giriş',
        href: '/k-media/giriş'
      },
      {
        id: 'yq-xebeler',
        title: 'Y/Q xəbərlər',
        href: '/k-media/yq-xebeler'
      },
      {
        id: 'airdrops',
        title: 'Airdrops',
        href: '/k-media/airdrops'
      },
      {
        id: 'sohub',
        title: 'SoHub',
        href: '/k-media/sohub'
      },
    ]
  },
  
  {
    id: 'kriptaz-x',
    title: 'KriptazX',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        id: 'giris',
        title: 'Giriş',
        href: '/kriptaz-x/giriş'
      },
      {
        id: 'smart-wall',
        title: 'SmartWall',
        href: '/kriptaz-x/smart-wall'
      },
      {
        id: 'strategy',
        title: 'Strategy',
        href: '/kriptaz-x/strategy'
      },
      {
        id: 'web3-dev',
        title: 'Web3 Dev.',
        href: '/kriptaz-x/web3-dev'
      },
      {
        id: 'data-visualization',
        title: 'Data visualization',
        href: '/kriptaz-x/data-visualization'
      },
    ]
  },

  {
    id: 'kriptaz-pay',
    title: 'Kriptaz Pay',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        id: 'giris',
        title: 'Giriş',
        href: '/kriptaz-pay/giriş'
      },
      {
        id: 'gateway-api',
        title: 'Gateway API',
        href: '/kriptaz-pay/gateway-api'
      },
      {
        id: 'texnologiya',
        title: 'Texnologiya',
        href: '/kriptaz-pay/texnologiya'
      },
      {
        id: 'hd',
        title: 'Hierarchical Deterministic',
        href: '/kriptaz-pay/hd'
      },
      {
        id: 'on-off-chain',
        title: 'On/Off-Chain',
        href: '/kriptaz-pay/on-off-chain'
      },
      {
        id: 'p2p',
        title: 'P2P',
        href: '/kriptaz-pay/p2p'
      },
      {
        id: 'paypoint',
        title: 'Paypointlər',
        href: '/kriptaz-pay/paypoint'
      },

      {
        id: 'kxhm',
        title: 'Kriptaz Card (KXHM)',
        href: '/kriptaz-qanunlar/kxhm'
      },
      {
        id: 'kaiem',
        title: 'KAİE müqaviləsi',
        href: '/kriptaz-qanunlar/kaiem'
      },
    ]
  },
  
  {
    id: 'kriptaz-edu',
    title: 'Kriptaz Edu',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        id: 'giris',
        title: 'Giriş',
        href: '/kriptaz-edu/giriş'
      },
      {
        id: 'video-dersler',
        title: 'Video dərslər',
        href: '/kriptaz-edu/video-dersler'
      },
      {
        id: 'book-market',
        title: 'Kitab mağazası',
        href: '/kriptaz-edu/book-market'
      },
      
    ]
  },

  {
    id: 'kriptaz-invest-founders',
    title: 'Kriptaz Invest Founders',
    isExpandable: true,
    isExpanded: false,
    hasSeparator: true,
    children: []
  },

  {
    id: 'kriptaz-qanunlar',
    title: 'Kriptaz qanunları',
    isExpandable: true,
    isExpanded: false,
    hasSeparator: true,
    children: [
      {
        id: 'kxhm',
        title: 'KXHM-Kripto Xərcləmə Hesabı',
        href: '/kriptaz-qanunlar/kxhm'
      },
      {
        id: 'kaiem',
        title: 'KAİEM-Kripto Aktivlərin İdarə Edilməsi',
        href: '/kriptaz-qanunlar/kaiem'
      },
      {
        id: 'xususi-tenzimlemeler',
        title: 'Xüsusi tənzimləmələr',
        href: '/kriptaz-qanunlar/xususi-tenzimlemeler'
      },
      {
        id: 'musteri-munasibetleri',
        title: 'Müştəri münasibətləri',
        href: '/qanunlar/musteri-munasibetleri'
      }
    ]
  },

  {
    id: 'komek',
    title: 'Kömək',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        id: 'deyisiklikler-jurnali',
        title: 'Dəyişikliklər jurnalı',
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
    id: 'reqemsal-qanunlar',
    title: 'Rəqəmsal qanunlar',
    isExpandable: true,
    isExpanded: false,
    children: [
      {
        id: 'mexfiglik-siyaseti',
        title: 'Məxfilik siyasəti',
        href: '/reqemsal-qanunlar/mexfiglik-siyaseti'
      },
      {
        id: 'istifade-qaydaları',
        title: 'İstifadə qaydaları',
        href: '/reqemsal-qanunlar/istifade-qaydaları'
      },
      {
        id: 'kuki-siyaseti',
        title: 'Kuki siyasəti',
        href: '/reqemsal-qanunlar/kuki-siyaseti'
      }
    ]
  },
];
