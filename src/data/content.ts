export interface ContentItem {
  id: string;
  title: string;
  content: string;
  url: string;
  category: string;
  tags: string[];
  lastUpdated: string;
  author?: string;
}

export const contentDatabase: ContentItem[] = [
  {
    id: '1',
    title: 'React Komponentləri və Hooks alo',
    content: 'React komponentləri yaratmaq və istifadə etmək haqqında ətraflı məlumat. useState, useEffect, useContext və digər hooks-ların istifadəsi. Komponent lifecycle-ı və performans optimallaşdırması.',
    url: '/docs/react/components',
    category: 'React',
    tags: ['react', 'components', 'hooks', 'useState', 'useEffect'],
    lastUpdated: '2024-01-15',
    author: 'Kriptaz Team'
  },
  {
    id: '2',
    title: 'Next.js App Router və Routing alo',
    content: 'Next.js 13+ App Router sistemi ilə səhifələr arası keçid və routing. Dynamic routes, nested layouts, loading states və error handling.',
    url: '/docs/nextjs/routing',
    category: 'Next.js',
    tags: ['nextjs', 'routing', 'app-router', 'dynamic-routes'],
    lastUpdated: '2024-01-20',
    author: 'Kriptaz Team'
  },
  {
    id: '3',
    title: 'TypeScript Əsasları və Advanced Types alo',
    content: 'TypeScript dilinin əsas xüsusiyyətləri və istifadəsi. Interface, type aliases, generics, utility types və advanced type patterns.',
    url: '/docs/typescript/basics',
    category: 'TypeScript',
    tags: ['typescript', 'types', 'interface', 'generics'],
    lastUpdated: '2024-01-18',
    author: 'Kriptaz Team'
  },
  {
    id: '4',
    title: 'CSS Modulları və Styled Components alo',
    content: 'CSS modulları ilə stil təşkili və komponent səviyyəsində stilləşdirmə. CSS-in-JS həlləri və modern styling approaches.',
    url: '/docs/css/modules',
    category: 'CSS',
    tags: ['css', 'modules', 'styling', 'css-in-js'],
    lastUpdated: '2024-01-12',
    author: 'Kriptaz Team'
  },
  {
    id: '5',
    title: 'API İnteqrasiyası və Data Fetching alo',
    content: 'Backend API-ləri ilə inteqrasiya və məlumat mübadiləsi. Fetch API, axios, SWR və React Query istifadəsi.',
    url: '/docs/api/integration',
    category: 'API',
    tags: ['api', 'fetch', 'axios', 'swr', 'react-query'],
    lastUpdated: '2024-01-22',
    author: 'Kriptaz Team'
  },
  {
    id: '6',
    title: 'State Management - Redux və Zustand alo',
    content: 'React tətbiqlərində state management. Redux Toolkit, Zustand və Context API ilə global state idarəsi.',
    url: '/docs/state/management',
    category: 'State Management',
    tags: ['redux', 'zustand', 'context', 'state-management'],
    lastUpdated: '2024-01-25',
    author: 'Kriptaz Team'
  },
  {
    id: '7',
    title: 'Performance Optimization',
    content: 'React və Next.js tətbiqlərində performans optimallaşdırması. Code splitting, lazy loading, memoization və bundle optimization.',
    url: '/docs/performance/optimization',
    category: 'Performance',
    tags: ['performance', 'optimization', 'code-splitting', 'lazy-loading'],
    lastUpdated: '2024-01-28',
    author: 'Kriptaz Team'
  },
  {
    id: '8',
    title: 'Testing - Jest və React Testing Library',
    content: 'React komponentləri və JavaScript kodunun test edilməsi. Unit tests, integration tests və end-to-end testing.',
    url: '/docs/testing/jest',
    category: 'Testing',
    tags: ['testing', 'jest', 'react-testing-library', 'unit-tests'],
    lastUpdated: '2024-01-30',
    author: 'Kriptaz Team'
  },
  {
    id: '9',
    title: 'Deployment və DevOps',
    content: 'Next.js tətbiqlərinin deploy edilməsi. Vercel, Netlify, Docker və CI/CD pipeline-ların qurulması.',
    url: '/docs/deployment/devops',
    category: 'DevOps',
    tags: ['deployment', 'vercel', 'netlify', 'docker', 'ci-cd'],
    lastUpdated: '2024-02-01',
    author: 'Kriptaz Team'
  },
  {
    id: '10',
    title: 'Security Best Practices',
    content: 'Web tətbiqlərində təhlükəsizlik. Authentication, authorization, CSRF protection və XSS prevention.',
    url: '/docs/security/best-practices',
    category: 'Security',
    tags: ['security', 'authentication', 'authorization', 'csrf', 'xss'],
    lastUpdated: '2024-02-03',
    author: 'Kriptaz Team'
  },
  {
    id: '11',
    title: 'Database Integration - Prisma və MongoDB',
    content: 'Verilənlər bazası ilə inteqrasiya. Prisma ORM, MongoDB və PostgreSQL istifadəsi.',
    url: '/docs/database/integration',
    category: 'Database',
    tags: ['database', 'prisma', 'mongodb', 'postgresql', 'orm'],
    lastUpdated: '2024-02-05',
    author: 'Kriptaz Team'
  },
  {
    id: '12',
    title: 'UI/UX Design Patterns',
    content: 'Modern UI/UX design patterns və component library-lərin yaradılması. Design systems və accessibility.',
    url: '/docs/design/patterns',
    category: 'Design',
    tags: ['design', 'ui-ux', 'patterns', 'accessibility', 'design-systems'],
    lastUpdated: '2024-02-08',
    author: 'Kriptaz Team'
  },
  {
    id: '13',
    title: 'Mobile Development - React Native',
    content: 'React Native ilə mobil tətbiq inkişafı. Cross-platform development və native modules.',
    url: '/docs/mobile/react-native',
    category: 'Mobile',
    tags: ['react-native', 'mobile', 'cross-platform', 'native-modules'],
    lastUpdated: '2024-02-10',
    author: 'Kriptaz Team'
  },
  {
    id: '14',
    title: 'GraphQL və Apollo Client',
    content: 'GraphQL API-ləri ilə işləmək. Apollo Client, queries, mutations və subscriptions.',
    url: '/docs/graphql/apollo',
    category: 'GraphQL',
    tags: ['graphql', 'apollo', 'queries', 'mutations', 'subscriptions'],
    lastUpdated: '2024-02-12',
    author: 'Kriptaz Team'
  },
  {
    id: '15',
    title: 'Microservices Architecture',
    content: 'Microservices arxitekturası və distributed systems. Service communication və API gateway patterns.',
    url: '/docs/architecture/microservices',
    category: 'Architecture',
    tags: ['microservices', 'architecture', 'distributed-systems', 'api-gateway'],
    lastUpdated: '2024-02-15',
    author: 'Kriptaz Team'
  }
];

// Search function for the content database
export function searchContent(query: string, limit: number = 10, offset: number = 0) {
  const searchTerm = query.toLowerCase().trim();
  
  const filteredResults = contentDatabase.filter(item => 
    item.title.toLowerCase().includes(searchTerm) ||
    item.content.toLowerCase().includes(searchTerm) ||
    item.category.toLowerCase().includes(searchTerm) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );

  // Add relevance scoring
  const scoredResults = filteredResults.map(item => {
    let score = 0;
    const titleMatch = item.title.toLowerCase().includes(searchTerm);
    const contentMatch = item.content.toLowerCase().includes(searchTerm);
    const categoryMatch = item.category.toLowerCase().includes(searchTerm);
    const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(searchTerm));

    if (titleMatch) score += 5;
    if (contentMatch) score += 2;
    if (categoryMatch) score += 3;
    if (tagMatch) score += 4;

    return { ...item, relevanceScore: score };
  });

  // Sort by relevance score
  scoredResults.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));

  // Apply pagination
  const paginatedResults = scoredResults.slice(offset, offset + limit);

  return {
    results: paginatedResults,
    totalCount: filteredResults.length
  };
}
