# DNA Pathways CIC - Website Structure Documentation

## Base Configuration
- **Base URL**: https://www.dnasupport.org.uk
- **Language**: en-GB
- **Author**: DNA Pathways CIC
- **Default Robots**: index, follow
- **Open Graph Type**: website
- **Twitter Card**: summary_large_image

## Site Structure

### 1. Home Page (`/`)
- **Title**: Home
- **Type**: Static page
- **Meta Description**: Social care, advocacy, and inclusive football for families in Gloucestershire
- **Meta Keywords**: family support, SEND, EHCP help, Gloucestershire advocacy
- **Open Graph**:
  - Title: DNA Pathways CIC | Inclusive Family Support
  - Description: Expert-led support for families in crisis — from social care navigation to inclusive football for children with SEND.
  - URL: https://www.dnasupport.org.uk/
  - Image: /og/home.jpg
- **Priority**: 1.0 (Highest)

### 2. About Us (`/about`)
- **Title**: About Us
- **Type**: Static page
- **Meta Description**: Our mission, lived experience, and what makes us different
- **Meta Keywords**: about DNA Pathways, SEND family advocacy, safeguarding experience
- **Priority**: 0.8

### 3. Services Section (`/services`)
- **Title**: Our Services
- **Type**: Static page
- **Meta Description**: Overview of our three core service pathways
- **Meta Keywords**: family services, advocacy, social care, SEND football
- **Priority**: 0.9

#### 3.1 Institutional Advocacy (`/services/advocacy`)
- **Title**: Institutional Advocacy
- **Type**: Static page
- **Meta Description**: Support with EHCPs, benefits, tribunals, and discrimination
- **Meta Keywords**: EHCP advocacy, benefits support, tribunals, discrimination help
- **Priority**: 0.8

#### 3.2 Social Care Pathway (`/services/care`)
- **Title**: Social Care Pathway
- **Type**: Static page
- **Meta Description**: Safeguarding, family support, and care navigation
- **Meta Keywords**: safeguarding support, family care, social care navigation
- **Priority**: 0.8

#### 3.3 Football & Family Pathway (`/services/football`)
- **Title**: Football & Family Pathway
- **Type**: Static page
- **Meta Description**: Inclusive sport sessions for SEND children with wraparound support
- **Meta Keywords**: inclusive football, SEND sport, children activities, wraparound support
- **Priority**: 0.8

### 4. Get Support (`/get-support`)
- **Title**: Get Support
- **Type**: Static page
- **Meta Description**: Referral form, contact routes, and self-referral process
- **Meta Keywords**: referral form, get help, self-referral, family support access
- **Priority**: 0.9

### 5. Partner With Us (`/partner`)
- **Title**: Partner With Us
- **Type**: Static page
- **Meta Description**: Opportunities for schools, NHS, and commissioners to collaborate
- **Meta Keywords**: partnerships, schools collaboration, NHS, commissioners, professional referrals
- **Priority**: 0.7

### 6. Resources & Downloads (`/resources`)
- **Title**: Resources & Downloads
- **Type**: Static page
- **Meta Description**: Access to our business plan, brochures, and pitch decks
- **Meta Keywords**: business plan, resources, downloads, brochures, pitch decks
- **Priority**: 0.7

### 7. Contact Us (`/contact`)
- **Title**: Contact Us
- **Type**: Static page
- **Meta Description**: Email, phone, address, and contact form
- **Meta Keywords**: contact DNA Pathways, email, phone, address, contact form
- **Priority**: 0.8

## Downloadable Resources

### Business Documents
1. **Business Plan** (`/docs/DNA_Pathways_Business_Plan_2025-2030.pdf`)
   - File type: PDF
   - Description: DNA Pathways CIC Business Plan 2025-2030

2. **Pitch Decks** (`/docs/DNA_Pathways_Pitch_Decks.pdf`)
   - File type: PDF
   - Description: DNA Pathways CIC Pitch Decks

3. **Website Copy** (`/docs/DNA_Pathways_Website_Copy.md`)
   - File type: Markdown
   - Description: DNA Pathways CIC Website Copy in Markdown format

## SEO Configuration

### XML Sitemap
- Location: `/sitemap.xml`
- Includes all static pages with appropriate priorities and change frequencies
- Home and Get Support pages updated weekly
- All other pages updated monthly

### Robots.txt
- Allows all user agents to crawl the site
- Explicitly allows access to all public pages and downloadable resources
- Excludes administrative and development directories
- References the sitemap location

### Meta Tags Strategy
- All pages include default meta tags (language, author, robots, Open Graph type, Twitter card)
- Each page has unique, descriptive meta descriptions and keywords
- Home page includes comprehensive Open Graph data for social sharing
- Focus keywords include: SEND, family support, advocacy, Gloucestershire, social care

### Change Frequencies
- **Weekly**: Home page, Get Support (high engagement pages)
- **Monthly**: All other static pages (stable content)

### Priority Distribution
- **1.0**: Home page (highest priority)
- **0.9**: Services overview, Get Support (key conversion pages)
- **0.8**: About, Contact, Service sub-pages (important content)
- **0.7**: Partner, Resources (supporting content)

## Technical Notes
- All routes are static pages for optimal performance and SEO
- Consistent URL structure with clear hierarchy
- Mobile-responsive design assumed (Twitter card: summary_large_image)
- Open Graph image prepared for home page social sharing