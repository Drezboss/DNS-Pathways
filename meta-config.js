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
      title: 'DNA Pathways CIC | Inclusive Family Support',
      description: 'Social care, advocacy, and inclusive football for families in Gloucestershire',
      keywords: 'family support, SEND, EHCP help, Gloucestershire advocacy',
      'og:title': 'DNA Pathways CIC | Inclusive Family Support',
      'og:description': 'Expert-led support for families in crisis — from social care navigation to inclusive football for children with SEND.',
      'og:url': `${siteConfig.baseUrl}/`,
      'og:image': `${siteConfig.baseUrl}/og/home.jpg`,
      'twitter:title': 'DNA Pathways CIC | Inclusive Family Support',
      'twitter:description': 'Expert-led support for families in crisis — from social care navigation to inclusive football for children with SEND.',
      'twitter:image': `${siteConfig.baseUrl}/og/home.jpg`
    }
  },
  about: {
    path: '/about',
    title: 'About Us',
    meta: {
      title: 'About Us | DNA Pathways CIC',
      description: 'Our mission, lived experience, and what makes us different',
      keywords: 'about DNA Pathways, SEND family advocacy, safeguarding experience',
      'og:title': 'About Us | DNA Pathways CIC',
      'og:description': 'Our mission, lived experience, and what makes us different',
      'og:url': `${siteConfig.baseUrl}/about`,
      'og:image': `${siteConfig.baseUrl}/og/about.jpg`,
      'twitter:title': 'About Us | DNA Pathways CIC',
      'twitter:description': 'Our mission, lived experience, and what makes us different',
      'twitter:image': `${siteConfig.baseUrl}/og/about.jpg`
    }
  },
  services: {
    path: '/services',
    title: 'Our Services',
    meta: {
      title: 'Our Services | DNA Pathways CIC',
      description: 'Overview of our three core service pathways',
      keywords: 'family services, advocacy, social care, SEND football',
      'og:title': 'Our Services | DNA Pathways CIC',
      'og:description': 'Overview of our three core service pathways',
      'og:url': `${siteConfig.baseUrl}/services`,
      'og:image': `${siteConfig.baseUrl}/og/services.jpg`,
      'twitter:title': 'Our Services | DNA Pathways CIC',
      'twitter:description': 'Overview of our three core service pathways',
      'twitter:image': `${siteConfig.baseUrl}/og/services.jpg`
    },
    children: {
      advocacy: {
        path: '/services/advocacy',
        title: 'Institutional Advocacy',
        meta: {
          title: 'Institutional Advocacy | DNA Pathways CIC',
          description: 'Support with EHCPs, benefits, tribunals, and discrimination',
          keywords: 'EHCP support, benefits advocacy, SEND tribunals, discrimination help',
          'og:title': 'Institutional Advocacy | DNA Pathways CIC',
          'og:description': 'Support with EHCPs, benefits, tribunals, and discrimination',
          'og:url': `${siteConfig.baseUrl}/services/advocacy`,
          'og:image': `${siteConfig.baseUrl}/og/advocacy.jpg`,
          'twitter:title': 'Institutional Advocacy | DNA Pathways CIC',
          'twitter:description': 'Support with EHCPs, benefits, tribunals, and discrimination',
          'twitter:image': `${siteConfig.baseUrl}/og/advocacy.jpg`
        }
      },
      care: {
        path: '/services/care',
        title: 'Social Care Pathway',
        meta: {
          title: 'Social Care Pathway | DNA Pathways CIC',
          description: 'Safeguarding, family support, and care navigation',
          keywords: 'social care support, safeguarding, family navigation, care pathway',
          'og:title': 'Social Care Pathway | DNA Pathways CIC',
          'og:description': 'Safeguarding, family support, and care navigation',
          'og:url': `${siteConfig.baseUrl}/services/care`,
          'og:image': `${siteConfig.baseUrl}/og/care.jpg`,
          'twitter:title': 'Social Care Pathway | DNA Pathways CIC',
          'twitter:description': 'Safeguarding, family support, and care navigation',
          'twitter:image': `${siteConfig.baseUrl}/og/care.jpg`
        }
      },
      football: {
        path: '/services/football',
        title: 'Football & Family Pathway',
        meta: {
          title: 'Football & Family Pathway | DNA Pathways CIC',
          description: 'Inclusive sport sessions for SEND children with wraparound support',
          keywords: 'inclusive football, SEND sport, family support, inclusive activities',
          'og:title': 'Football & Family Pathway | DNA Pathways CIC',
          'og:description': 'Inclusive sport sessions for SEND children with wraparound support',
          'og:url': `${siteConfig.baseUrl}/services/football`,
          'og:image': `${siteConfig.baseUrl}/og/football.jpg`,
          'twitter:title': 'Football & Family Pathway | DNA Pathways CIC',
          'twitter:description': 'Inclusive sport sessions for SEND children with wraparound support',
          'twitter:image': `${siteConfig.baseUrl}/og/football.jpg`
        }
      }
    }
  },
  getSupport: {
    path: '/get-support',
    title: 'Get Support',
    meta: {
      title: 'Get Support | DNA Pathways CIC',
      description: 'Referral form, contact routes, and self-referral process',
      keywords: 'get help, referral form, self-referral, contact support',
      'og:title': 'Get Support | DNA Pathways CIC',
      'og:description': 'Referral form, contact routes, and self-referral process',
      'og:url': `${siteConfig.baseUrl}/get-support`,
      'og:image': `${siteConfig.baseUrl}/og/support.jpg`,
      'twitter:title': 'Get Support | DNA Pathways CIC',
      'twitter:description': 'Referral form, contact routes, and self-referral process',
      'twitter:image': `${siteConfig.baseUrl}/og/support.jpg`
    }
  },
  partner: {
    path: '/partner',
    title: 'Partner With Us',
    meta: {
      title: 'Partner With Us | DNA Pathways CIC',
      description: 'Opportunities for schools, NHS, and commissioners to collaborate',
      keywords: 'partnership opportunities, schools collaboration, NHS partnership, commissioning',
      'og:title': 'Partner With Us | DNA Pathways CIC',
      'og:description': 'Opportunities for schools, NHS, and commissioners to collaborate',
      'og:url': `${siteConfig.baseUrl}/partner`,
      'og:image': `${siteConfig.baseUrl}/og/partner.jpg`,
      'twitter:title': 'Partner With Us | DNA Pathways CIC',
      'twitter:description': 'Opportunities for schools, NHS, and commissioners to collaborate',
      'twitter:image': `${siteConfig.baseUrl}/og/partner.jpg`
    }
  },
  resources: {
    path: '/resources',
    title: 'Resources & Downloads',
    meta: {
      title: 'Resources & Downloads | DNA Pathways CIC',
      description: 'Access to our business plan, brochures, and pitch decks',
      keywords: 'resources, downloads, business plan, brochures, pitch decks',
      'og:title': 'Resources & Downloads | DNA Pathways CIC',
      'og:description': 'Access to our business plan, brochures, and pitch decks',
      'og:url': `${siteConfig.baseUrl}/resources`,
      'og:image': `${siteConfig.baseUrl}/og/resources.jpg`,
      'twitter:title': 'Resources & Downloads | DNA Pathways CIC',
      'twitter:description': 'Access to our business plan, brochures, and pitch decks',
      'twitter:image': `${siteConfig.baseUrl}/og/resources.jpg`
    }
  },
  contact: {
    path: '/contact',
    title: 'Contact Us',
    meta: {
      title: 'Contact Us | DNA Pathways CIC',
      description: 'Email, phone, address, and contact form',
      keywords: 'contact, email, phone, address, get in touch',
      'og:title': 'Contact Us | DNA Pathways CIC',
      'og:description': 'Email, phone, address, and contact form',
      'og:url': `${siteConfig.baseUrl}/contact`,
      'og:image': `${siteConfig.baseUrl}/og/contact.jpg`,
      'twitter:title': 'Contact Us | DNA Pathways CIC',
      'twitter:description': 'Email, phone, address, and contact form',
      'twitter:image': `${siteConfig.baseUrl}/og/contact.jpg`
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