# DNA Pathways CIC - Website Sitemap & Meta Structure

This repository contains the comprehensive sitemap structure and meta information for the DNA Pathways CIC website.

## Website Overview
**Base URL**: https://www.dnasupport.org.uk  
**Mission**: Social care, advocacy, and inclusive football for families in Gloucestershire

## Files Created

### 1. `sitemap.xml`
Standard XML sitemap for search engines including:
- All 9 static pages with proper priorities (0.7-1.0)
- Change frequencies (weekly for high-engagement pages, monthly for stable content)
- Proper XML formatting and namespace declarations

### 2. `meta-tags.json`
Comprehensive JSON structure containing:
- Base URL and default meta configurations
- Complete meta information for each route
- Open Graph data for social media sharing
- Keywords optimized for SEND, family support, and Gloucestershire services
- Download file metadata

### 3. `robots.txt`
Search engine crawler instructions:
- Allows access to all public pages and downloadable resources
- Excludes administrative and development directories
- References sitemap location
- Includes crawl-delay for respectful crawling

### 4. `site-structure.md`
Detailed documentation including:
- Complete site hierarchy and navigation structure
- SEO strategy and priority distribution
- Meta tag implementation guide
- Technical notes and recommendations

### 5. `html-meta-examples.html`
Practical HTML examples showing:
- Complete meta tag implementation for different page types
- Open Graph and Twitter Card configurations
- Canonical URL setup
- Structured data examples (JSON-LD)

## Site Structure

### Main Navigation
```
/ (Home) - Priority 1.0
├── /about (About Us) - Priority 0.8
├── /services (Our Services) - Priority 0.9
│   ├── /services/advocacy (Institutional Advocacy) - Priority 0.8
│   ├── /services/care (Social Care Pathway) - Priority 0.8
│   └── /services/football (Football & Family Pathway) - Priority 0.8
├── /get-support (Get Support) - Priority 0.9
├── /partner (Partner With Us) - Priority 0.7
├── /resources (Resources & Downloads) - Priority 0.7
└── /contact (Contact Us) - Priority 0.8
```

### Downloadable Resources
- Business Plan 2025-2030 (PDF)
- Pitch Decks (PDF)
- Website Copy (Markdown)

## SEO Strategy

### Keywords Focus
- **Primary**: SEND, family support, advocacy, Gloucestershire
- **Secondary**: EHCP, social care, inclusive football, safeguarding
- **Location**: Gloucestershire-specific targeting

### Meta Descriptions
Each page has unique, compelling meta descriptions optimized for:
- Search engine snippets (150-160 characters)
- Clear value propositions
- Local targeting (Gloucestershire)
- Service-specific benefits

### Open Graph Configuration
- Complete social media sharing setup
- Dedicated home page image (`/og/home.jpg`)
- Consistent branding across platforms
- Large image format for maximum impact

## Implementation Notes

### Change Frequencies
- **Weekly**: Home, Get Support (high engagement)
- **Monthly**: All other pages (stable content)

### Priority Distribution
- **1.0**: Home page (entry point)
- **0.9**: Services overview, Get Support (key conversion pages)
- **0.8**: About, Contact, Service pages (core content)
- **0.7**: Partner, Resources (supporting content)

### Technical Requirements
- All pages are static for optimal performance
- Mobile-responsive design assumed
- UK English (en-GB) language specification
- GDPR-compliant cookie and privacy considerations

## Next Steps

1. **Image Assets**: Create `/og/home.jpg` for social media sharing
2. **Favicon Package**: Generate complete favicon set for all devices
3. **Analytics**: Implement Google Analytics 4 and Search Console
4. **Schema Markup**: Add structured data for organization and services
5. **Local SEO**: Create Google Business Profile and local directory listings

## Contact Information
**Organization**: DNA Pathways CIC  
**Website**: https://www.dnasupport.org.uk  
**Focus Area**: Gloucestershire, UK  
**Services**: Family Support, SEND Advocacy, Social Care, Inclusive Football
