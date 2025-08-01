# DNA Pathways CIC - Sitemap Structure & Meta Information

## Overview

This document outlines the complete sitemap structure and meta information for the DNA Pathways CIC website (https://www.dnasupport.org.uk). The structure is designed to support SEO optimization, social media sharing, and user navigation.

## Base Configuration

- **Base URL**: https://www.dnasupport.org.uk
- **Default Language**: en-GB
- **Author**: DNA Pathways CIC
- **Robots**: index, follow
- **Open Graph Type**: website
- **Twitter Card**: summary_large_image

## File Structure

```
├── sitemap.json          # Complete sitemap structure in JSON format
├── meta-config.js        # JavaScript configuration for meta tags
├── sitemap.xml          # XML sitemap for search engines
├── robots.txt           # Search engine crawling instructions
└── SITEMAP_DOCUMENTATION.md  # This documentation file
```

## Route Structure

### 1. Home Page (`/`)
- **Title**: Home
- **Type**: Static
- **Meta Description**: Social care, advocacy, and inclusive football for families in Gloucestershire
- **Keywords**: family support, SEND, EHCP help, Gloucestershire advocacy
- **Priority**: 1.0 (highest)

### 2. About Us (`/about`)
- **Title**: About Us
- **Type**: Static
- **Meta Description**: Our mission, lived experience, and what makes us different
- **Keywords**: about DNA Pathways, SEND family advocacy, safeguarding experience
- **Priority**: 0.8

### 3. Services (`/services`)
- **Title**: Our Services
- **Type**: Static
- **Meta Description**: Overview of our three core service pathways
- **Keywords**: family services, advocacy, social care, SEND football
- **Priority**: 0.8

#### 3.1 Institutional Advocacy (`/services/advocacy`)
- **Title**: Institutional Advocacy
- **Type**: Static
- **Meta Description**: Support with EHCPs, benefits, tribunals, and discrimination
- **Keywords**: EHCP support, benefits advocacy, SEND tribunals, discrimination help
- **Priority**: 0.7

#### 3.2 Social Care Pathway (`/services/care`)
- **Title**: Social Care Pathway
- **Type**: Static
- **Meta Description**: Safeguarding, family support, and care navigation
- **Keywords**: social care support, safeguarding, family navigation, care pathway
- **Priority**: 0.7

#### 3.3 Football & Family Pathway (`/services/football`)
- **Title**: Football & Family Pathway
- **Type**: Static
- **Meta Description**: Inclusive sport sessions for SEND children with wraparound support
- **Keywords**: inclusive football, SEND sport, family support, inclusive activities
- **Priority**: 0.7

### 4. Get Support (`/get-support`)
- **Title**: Get Support
- **Type**: Static
- **Meta Description**: Referral form, contact routes, and self-referral process
- **Keywords**: get help, referral form, self-referral, contact support
- **Priority**: 0.9 (high priority for user action)

### 5. Partner With Us (`/partner`)
- **Title**: Partner With Us
- **Type**: Static
- **Meta Description**: Opportunities for schools, NHS, and commissioners to collaborate
- **Keywords**: partnership opportunities, schools collaboration, NHS partnership, commissioning
- **Priority**: 0.6

### 6. Resources & Downloads (`/resources`)
- **Title**: Resources & Downloads
- **Type**: Static
- **Meta Description**: Access to our business plan, brochures, and pitch decks
- **Keywords**: resources, downloads, business plan, brochures, pitch decks
- **Priority**: 0.6

### 7. Contact Us (`/contact`)
- **Title**: Contact Us
- **Type**: Static
- **Meta Description**: Email, phone, address, and contact form
- **Keywords**: contact, email, phone, address, get in touch
- **Priority**: 0.7

## Downloads Section

The following downloadable resources are available:

1. **Business Plan PDF** (`/docs/DNA_Pathways_Business_Plan_2025-2030.pdf`)
   - Description: DNA Pathways CIC Business Plan 2025-2030
   - File Size: 2.5MB
   - Category: Business Documents

2. **Pitch Decks PDF** (`/docs/DNA_Pathways_Pitch_Decks.pdf`)
   - Description: DNA Pathways CIC Pitch Decks
   - File Size: 1.8MB
   - Category: Business Documents

3. **Website Copy** (`/docs/DNA_Pathways_Website_Copy.md`)
   - Description: DNA Pathways CIC Website Copy (Markdown)
   - File Size: 45KB
   - Category: Content

## Meta Tag Structure

Each page includes comprehensive meta tags for:

### SEO Meta Tags
- `title`: Page title with brand name
- `description`: Meta description for search results
- `keywords`: Relevant keywords for search optimization
- `robots`: Search engine crawling instructions

### Open Graph Tags (Facebook, LinkedIn)
- `og:title`: Title for social media sharing
- `og:description`: Description for social media sharing
- `og:url`: Canonical URL
- `og:image`: Social media preview image
- `og:type`: Content type

### Twitter Card Tags
- `twitter:card`: Card type (summary_large_image)
- `twitter:title`: Title for Twitter sharing
- `twitter:description`: Description for Twitter sharing
- `twitter:image`: Twitter preview image
- `twitter:site`: Twitter handle
- `twitter:creator`: Content creator handle

## Implementation Guidelines

### Using the JavaScript Configuration

```javascript
import { getMetaForRoute, routes } from './meta-config.js';

// Get meta tags for a specific route
const homeMeta = getMetaForRoute('/');
const advocacyMeta = getMetaForRoute('/services/advocacy');

// Access specific route information
const servicesRoute = routes.services;
const advocacyRoute = routes.services.children.advocacy;
```

### Meta Tag Implementation Example

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Meta Tags -->
  <title>${pageMeta.title}</title>
  <meta name="description" content="${pageMeta.description}">
  <meta name="keywords" content="${pageMeta.keywords}">
  <meta name="robots" content="${pageMeta.robots}">
  
  <!-- Open Graph Tags -->
  <meta property="og:title" content="${pageMeta['og:title']}">
  <meta property="og:description" content="${pageMeta['og:description']}">
  <meta property="og:url" content="${pageMeta['og:url']}">
  <meta property="og:image" content="${pageMeta['og:image']}">
  <meta property="og:type" content="${pageMeta['og:type']}">
  
  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="${pageMeta['twitter:card']}">
  <meta name="twitter:title" content="${pageMeta['twitter:title']}">
  <meta name="twitter:description" content="${pageMeta['twitter:description']}">
  <meta name="twitter:image" content="${pageMeta['twitter:image']}">
  <meta name="twitter:site" content="${pageMeta['twitter:site']}">
  <meta name="twitter:creator" content="${pageMeta['twitter:creator']}">
</head>
```

## SEO Best Practices Implemented

1. **Hierarchical Structure**: Clear parent-child relationships for services
2. **Keyword Optimization**: Targeted keywords for each service area
3. **Meta Descriptions**: Unique, compelling descriptions under 160 characters
4. **Social Media Optimization**: Complete Open Graph and Twitter Card support
5. **XML Sitemap**: Properly formatted for search engine submission
6. **Robots.txt**: Clear crawling instructions
7. **Priority Assignment**: Logical priority values for different page types

## Maintenance Notes

- Update `lastmod` dates in `sitemap.xml` when content changes
- Review and update meta descriptions quarterly
- Monitor keyword performance and adjust as needed
- Ensure all Open Graph images are properly sized (1200x630px recommended)
- Test social media sharing for each page regularly

## Search Engine Submission

Submit the sitemap to major search engines:

1. **Google Search Console**: https://search.google.com/search-console
2. **Bing Webmaster Tools**: https://www.bing.com/webmasters
3. **Yandex Webmaster**: https://webmaster.yandex.com

## Contact Information

For questions about this sitemap structure or meta information, contact the development team or refer to the project documentation.