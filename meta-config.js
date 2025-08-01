// DNA Pathways CIC - Meta Configuration
// This file contains all meta tag configurations for SEO and social media optimization

export const siteConfig = {
  baseUrl: 'https://www.dnasupport.org.uk',
  siteName: 'DNA Pathways CIC',
  defaultLanguage: 'en-GB',
  author: 'DNA Pathways CIC',
  defaultRobots: 'index, follow',
  defaultOgType: 'website',
  defaultTwitterCard: 'summary_large_image'
};

export const defaultMeta = {
  language: siteConfig.defaultLanguage,
  author: siteConfig.author,
  robots: siteConfig.defaultRobots,
  'og:type': siteConfig.defaultOgType,
  'twitter:card': siteConfig.defaultTwitterCard,
  'twitter:site': '@DNAPathwaysCIC',
  'twitter:creator': '@DNAPathwaysCIC'
};

export const routes = {
  home: {
    path: '/',
    title: 'Home',
    meta: {
      title: 'DNA Pathways CIC | Social Care & Advocacy Support in Gloucestershire',
      description: 'DNA Pathways provides expert social-care navigation, institutional advocacy, and inclusive football for SEND children across Gloucestershire. No waiting lists—book a free call.',
      keywords: 'family support, SEND, EHCP help, Gloucestershire advocacy, social care, inclusive football',
      'og:title': 'DNA Pathways CIC | Social Care & Advocacy Support in Gloucestershire',
      'og:description': 'DNA Pathways provides expert social-care navigation, institutional advocacy, and inclusive football for SEND children across Gloucestershire. No waiting lists—book a free call.',
      'og:url': `${siteConfig.baseUrl}/`,
      'og:image': `${siteConfig.baseUrl}/images/og/home.jpg`,
      'twitter:title': 'DNA Pathways CIC | Social Care & Advocacy Support in Gloucestershire',
      'twitter:description': 'DNA Pathways provides expert social-care navigation, institutional advocacy, and inclusive football for SEND children across Gloucestershire. No waiting lists—book a free call.',
      'twitter:image': `${siteConfig.baseUrl}/images/og/home.jpg`
    }
  },
  about: {
    path: '/about',
    title: 'About Us',
    meta: {
      title: 'About Us | DNA Pathways CIC',
      description: 'Standing beside families in crisis with expert, compassionate support that cuts through red tape and delivers real-world outcomes.',
      keywords: 'about DNA Pathways, SEND family advocacy, safeguarding experience, lived experience, professional support',
      'og:title': 'About Us | DNA Pathways CIC',
      'og:description': 'Standing beside families in crisis with expert, compassionate support that cuts through red tape and delivers real-world outcomes.',
      'og:url': `${siteConfig.baseUrl}/about`,
      'og:image': `${siteConfig.baseUrl}/images/og/about.jpg`,
      'twitter:title': 'About Us | DNA Pathways CIC',
      'twitter:description': 'Standing beside families in crisis with expert, compassionate support that cuts through red tape and delivers real-world outcomes.',
      'twitter:image': `${siteConfig.baseUrl}/images/og/about.jpg`
    }
  },
  services: {
    path: '/services',
    title: 'Our Services',
    meta: {
      title: 'Our Services | DNA Pathways CIC',
      description: 'Three flexible pathways—choose one, two, or all three. Social care navigation, institutional advocacy, and inclusive football for SEND children.',
      keywords: 'family services, advocacy, social care, SEND football, EHCP support, inclusive sport, family support',
      'og:title': 'Our Services | DNA Pathways CIC',
      'og:description': 'Three flexible pathways—choose one, two, or all three. Social care navigation, institutional advocacy, and inclusive football for SEND children.',
      'og:url': `${siteConfig.baseUrl}/services`,
      'og:image': `${siteConfig.baseUrl}/images/og/services.jpg`,
      'twitter:title': 'Our Services | DNA Pathways CIC',
      'twitter:description': 'Three flexible pathways—choose one, two, or all three. Social care navigation, institutional advocacy, and inclusive football for SEND children.',
      'twitter:image': `${siteConfig.baseUrl}/images/og/services.jpg`
    },
    children: {
              advocacy: {
          path: '/services/advocacy',
          title: 'Institutional Advocacy',
          meta: {
            title: 'Institutional Advocacy | DNA Pathways CIC',
            description: 'For education, benefits, housing, or employment system support. EHCP applications & appeals, benefits advocacy, discrimination & complaints escalation.',
            keywords: 'EHCP support, benefits advocacy, SEND tribunals, discrimination help, institutional advocacy, PIP, DLA, UC',
            'og:title': 'Institutional Advocacy | DNA Pathways CIC',
            'og:description': 'For education, benefits, housing, or employment system support. EHCP applications & appeals, benefits advocacy, discrimination & complaints escalation.',
            'og:url': `${siteConfig.baseUrl}/services/advocacy`,
            'og:image': `${siteConfig.baseUrl}/images/og/advocacy.jpg`,
            'twitter:title': 'Institutional Advocacy | DNA Pathways CIC',
            'twitter:description': 'For education, benefits, housing, or employment system support. EHCP applications & appeals, benefits advocacy, discrimination & complaints escalation.',
            'twitter:image': `${siteConfig.baseUrl}/images/og/advocacy.jpg`
          }
        },
              care: {
          path: '/services/care',
          title: 'Social Care Pathway',
          meta: {
            title: 'Social Care Pathway | DNA Pathways CIC',
            description: 'For families who need help navigating services, safeguarding, or care assessments. Care Act & Children Act navigation, safeguarding advocacy.',
            keywords: 'social care support, safeguarding, family navigation, care pathway, Care Act, Children Act, crisis coordination',
            'og:title': 'Social Care Pathway | DNA Pathways CIC',
            'og:description': 'For families who need help navigating services, safeguarding, or care assessments. Care Act & Children Act navigation, safeguarding advocacy.',
            'og:url': `${siteConfig.baseUrl}/services/care`,
            'og:image': `${siteConfig.baseUrl}/images/og/care.jpg`,
            'twitter:title': 'Social Care Pathway | DNA Pathways CIC',
            'twitter:description': 'For families who need help navigating services, safeguarding, or care assessments. Care Act & Children Act navigation, safeguarding advocacy.',
            'twitter:image': `${siteConfig.baseUrl}/images/og/care.jpg`
          }
        },
              football: {
          path: '/services/football',
          title: 'Football & Family Pathway',
          meta: {
            title: 'Football & Family Pathway | DNA Pathways CIC',
            description: 'For children with SEND to build confidence and community through inclusive sport. Inclusive football sessions, peer play for siblings, family drop-in support.',
            keywords: 'inclusive football, SEND sport, family support, inclusive activities, adaptive sports, children football, peer play',
            'og:title': 'Football & Family Pathway | DNA Pathways CIC',
            'og:description': 'For children with SEND to build confidence and community through inclusive sport. Inclusive football sessions, peer play for siblings, family drop-in support.',
            'og:url': `${siteConfig.baseUrl}/services/football`,
            'og:image': `${siteConfig.baseUrl}/images/og/football.jpg`,
            'twitter:title': 'Football & Family Pathway | DNA Pathways CIC',
            'twitter:description': 'For children with SEND to build confidence and community through inclusive sport. Inclusive football sessions, peer play for siblings, family drop-in support.',
            'twitter:image': `${siteConfig.baseUrl}/images/og/football.jpg`
          }
        }
    }
  },
  getSupport: {
    path: '/get-support',
    title: 'Get Support',
    meta: {
      title: 'Get Support | DNA Pathways CIC',
      description: 'Self-referrals welcome—no red tape, no waiting lists. Free 15-minute call. Accepting referrals from parents, schools, social workers, GPs & youth services.',
      keywords: 'get help, referral form, self-referral, contact support, free consultation, Gloucestershire support',
      'og:title': 'Get Support | DNA Pathways CIC',
      'og:description': 'Self-referrals welcome—no red tape, no waiting lists. Free 15-minute call. Accepting referrals from parents, schools, social workers, GPs & youth services.',
      'og:url': `${siteConfig.baseUrl}/get-support`,
      'og:image': `${siteConfig.baseUrl}/images/og/support.jpg`,
      'twitter:title': 'Get Support | DNA Pathways CIC',
      'twitter:description': 'Self-referrals welcome—no red tape, no waiting lists. Free 15-minute call. Accepting referrals from parents, schools, social workers, GPs & youth services.',
      'twitter:image': `${siteConfig.baseUrl}/images/og/support.jpg`
    }
  },
  partner: {
    path: '/partner',
    title: 'Partner With Us',
    meta: {
      title: 'Partner With Us | DNA Pathways CIC',
      description: 'Schools, local authorities, NHS teams—let\'s close the gaps together. Bespoke inclusion training, EHCP advocacy workshops, family-safeguarding consultancy.',
      keywords: 'partnership opportunities, schools collaboration, NHS partnership, commissioning, inclusion training, EHCP workshops, safeguarding consultancy',
      'og:title': 'Partner With Us | DNA Pathways CIC',
      'og:description': 'Schools, local authorities, NHS teams—let\'s close the gaps together. Bespoke inclusion training, EHCP advocacy workshops, family-safeguarding consultancy.',
      'og:url': `${siteConfig.baseUrl}/partner`,
      'og:image': `${siteConfig.baseUrl}/images/og/partner.jpg`,
      'twitter:title': 'Partner With Us | DNA Pathways CIC',
      'twitter:description': 'Schools, local authorities, NHS teams—let\'s close the gaps together. Bespoke inclusion training, EHCP advocacy workshops, family-safeguarding consultancy.',
      'twitter:image': `${siteConfig.baseUrl}/images/og/partner.jpg`
    }
  },
  resources: {
    path: '/resources',
    title: 'Resources & Downloads',
    meta: {
      title: 'Resources & Downloads | DNA Pathways CIC',
      description: 'Access to our business plan, brochures, and pitch decks. Download DNA Pathways CIC resources and documentation.',
      keywords: 'resources, downloads, business plan, brochures, pitch decks, DNA Pathways documents',
      'og:title': 'Resources & Downloads | DNA Pathways CIC',
      'og:description': 'Access to our business plan, brochures, and pitch decks. Download DNA Pathways CIC resources and documentation.',
      'og:url': `${siteConfig.baseUrl}/resources`,
      'og:image': `${siteConfig.baseUrl}/images/og/resources.jpg`,
      'twitter:title': 'Resources & Downloads | DNA Pathways CIC',
      'twitter:description': 'Access to our business plan, brochures, and pitch decks. Download DNA Pathways CIC resources and documentation.',
      'twitter:image': `${siteConfig.baseUrl}/images/og/resources.jpg`
    }
  },
  contact: {
    path: '/contact',
    title: 'Contact Us',
    meta: {
      title: 'Contact Us | DNA Pathways CIC',
      description: 'Get in touch with DNA Pathways CIC. Email, phone, address, and contact form available. Based in Gloucestershire.',
      keywords: 'contact, email, phone, address, get in touch, Gloucestershire, DNA Pathways contact',
      'og:title': 'Contact Us | DNA Pathways CIC',
      'og:description': 'Get in touch with DNA Pathways CIC. Email, phone, address, and contact form available. Based in Gloucestershire.',
      'og:url': `${siteConfig.baseUrl}/contact`,
      'og:image': `${siteConfig.baseUrl}/images/og/contact.jpg`,
      'twitter:title': 'Contact Us | DNA Pathways CIC',
      'twitter:description': 'Get in touch with DNA Pathways CIC. Email, phone, address, and contact form available. Based in Gloucestershire.',
      'twitter:image': `${siteConfig.baseUrl}/images/og/contact.jpg`
    }
  }
};

export const downloads = [
  {
    path: '/docs/DNA_Pathways_Business_Plan_2025-2030.pdf',
    title: 'Business Plan PDF',
    type: 'file',
    description: 'DNA Pathways CIC Business Plan 2025-2030',
    fileSize: '2.5MB',
    category: 'Business Documents'
  },
  {
    path: '/docs/DNA_Pathways_Pitch_Decks.pdf',
    title: 'Pitch Decks PDF',
    type: 'file',
    description: 'DNA Pathways CIC Pitch Decks',
    fileSize: '1.8MB',
    category: 'Business Documents'
  },
  {
    path: '/docs/DNA_Pathways_Website_Copy.md',
    title: 'Website Copy',
    type: 'file',
    description: 'DNA Pathways CIC Website Copy (Markdown)',
    fileSize: '45KB',
    category: 'Content'
  }
];

// Helper function to get meta tags for a specific route
export function getMetaForRoute(routePath) {
  const route = Object.values(routes).find(r => r.path === routePath) ||
                Object.values(routes).find(r => r.children && Object.values(r.children).find(c => c.path === routePath));
  
  if (!route) {
    return { ...defaultMeta, title: 'Page Not Found | DNA Pathways CIC' };
  }
  
  return { ...defaultMeta, ...route.meta };
}

// Helper function to generate sitemap XML
export function generateSitemapXML() {
  const routesList = Object.values(routes).map(route => ({
    url: `${siteConfig.baseUrl}${route.path}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: route.path === '/' ? '1.0' : '0.8'
  }));
  
  // Add child routes
  Object.values(routes).forEach(route => {
    if (route.children) {
      Object.values(route.children).forEach(child => {
        routesList.push({
          url: `${siteConfig.baseUrl}${child.path}`,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: '0.7'
        });
      });
    }
  });
  
  return routesList;
}