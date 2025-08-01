# DNA Pathways CIC - Image Implementation Guide

## Quick Start Checklist

### Phase 1: Essential Images (Launch Ready)
- [ ] **Hero Image** (`/images/hero/hero-main.jpg`) - 1920x1080px
- [ ] **Service Images** (3 images) - 800x600px each
  - [ ] Advocacy (`/images/services/advocacy.jpg`)
  - [ ] Social Care (`/images/services/care.jpg`)
  - [ ] Football (`/images/services/football.jpg`)
- [ ] **About Images** (2 images) - 800x600px each
  - [ ] Team (`/images/about/team.jpg`)
  - [ ] Mission (`/images/about/mission.jpg`)

### Phase 2: Open Graph Images (Social Media)
- [ ] **Home OG** (`/images/og/home.jpg`) - 1200x630px
- [ ] **Services OG** (`/images/og/services.jpg`) - 1200x630px
- [ ] **Support OG** (`/images/og/support.jpg`) - 1200x630px

### Phase 3: Additional Images (Nice to Have)
- [ ] **Contact Hero** (`/images/contact/contact-hero.jpg`) - 800x600px
- [ ] **Mobile Hero** (`/images/hero/hero-mobile.jpg`) - 800x600px
- [ ] **All remaining OG images** - 1200x630px each

## Step-by-Step Implementation

### Step 1: Source Images
1. **Visit Free Stock Photo Sites**:
   - Unsplash: https://unsplash.com
   - Pexels: https://pexels.com
   - Pixabay: https://pixabay.com

2. **Search with Recommended Keywords**:
   - Hero: "family consultation support" or "advocacy meeting"
   - Advocacy: "advocacy documents" or "family support professional"
   - Care: "social worker family" or "care support meeting"
   - Football: "inclusive football children" or "adaptive sports"
   - Team: "professional couple" or "husband wife team"
   - Mission: "family support group" or "community support"

### Step 2: Download and Optimize
1. **Download high-resolution images** (at least 1920x1080 for hero, 800x600 for others)
2. **Rename files** to exact specifications (e.g., `hero-main.jpg`)
3. **Optimize for web** using tools like:
   - TinyPNG: https://tinypng.com
   - Squoosh: https://squoosh.app
   - ImageOptim (Mac): https://imageoptim.com

### Step 3: Place Images in Correct Directories
```
images/
├── hero/
│   ├── hero-main.jpg
│   └── hero-mobile.jpg
├── services/
│   ├── advocacy.jpg
│   ├── care.jpg
│   └── football.jpg
├── about/
│   ├── team.jpg
│   └── mission.jpg
├── contact/
│   └── contact-hero.jpg
└── og/
    ├── home.jpg
    ├── about.jpg
    ├── services.jpg
    ├── advocacy.jpg
    ├── care.jpg
    ├── football.jpg
    ├── support.jpg
    ├── partner.jpg
    ├── resources.jpg
    └── contact.jpg
```

### Step 4: Implement in HTML/CSS

#### Hero Image Implementation
```html
<!-- Hero Section -->
<section class="hero">
  <picture>
    <source media="(max-width: 768px)" srcset="/images/hero/hero-mobile.jpg">
    <img src="/images/hero/hero-main.jpg" 
         alt="Family and advocate discussing care options with a football session in the background"
         class="hero-image">
  </picture>
  <div class="hero-content">
    <h1>No More Falling Through the Cracks</h1>
    <p>Family-centred support when the system fails—expert advocacy, care navigation, and inclusive football for children with additional needs.</p>
    <div class="hero-buttons">
      <a href="/get-support" class="btn btn-primary">Get Support</a>
      <a href="/contact" class="btn btn-secondary">Book a Free Intro Call</a>
    </div>
  </div>
</section>
```

#### Service Images Implementation
```html
<!-- Services Section -->
<section class="services">
  <div class="service-card">
    <img src="/images/services/advocacy.jpg" 
         alt="Professional advocate supporting family with EHCP and benefits applications"
         class="service-image">
    <h3>Institutional Advocacy</h3>
    <p>For education, benefits, housing, or employment system support.</p>
    <ul>
      <li>EHCP applications & appeals</li>
      <li>Benefits (PIP, DLA, UC) advocacy</li>
      <li>Discrimination & complaints escalation</li>
      <li>Tribunal preparation & documentation</li>
    </ul>
    <a href="/services/advocacy" class="btn">Get Advocacy Help</a>
  </div>
  
  <div class="service-card">
    <img src="/images/services/care.jpg" 
         alt="Care professional providing family support and safeguarding guidance"
         class="service-image">
    <h3>Social Care Pathway</h3>
    <p>For families who need help navigating services, safeguarding, or care assessments.</p>
    <ul>
      <li>Care Act & Children Act navigation</li>
      <li>Safeguarding advocacy</li>
      <li>Social-worker meeting prep</li>
      <li>Crisis coordination</li>
    </ul>
    <a href="/services/care" class="btn">Book Social Care Support</a>
  </div>
  
  <div class="service-card">
    <img src="/images/services/football.jpg" 
         alt="Children with diverse abilities enjoying inclusive football session"
         class="service-image">
    <h3>Football & Family Pathway</h3>
    <p>For children with SEND to build confidence and community through inclusive sport.</p>
    <ul>
      <li>Inclusive football sessions</li>
      <li>Peer play for siblings</li>
      <li>Family drop-in support</li>
      <li>School-holiday clubs</li>
    </ul>
    <a href="/services/football" class="btn">See Football Timetable</a>
  </div>
</section>
```

### Step 5: CSS Styling
```css
/* Hero Image Styling */
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

/* Service Images Styling */
.service-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

/* Responsive Images */
@media (max-width: 768px) {
  .hero {
    height: 70vh;
  }
  
  .service-image {
    height: 200px;
  }
}
```

### Step 6: Open Graph Implementation
```html
<!-- In your HTML head section -->
<meta property="og:image" content="https://www.dnasupport.org.uk/images/og/home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="DNA Pathways CIC - Family Support and Advocacy">

<meta name="twitter:image" content="https://www.dnasupport.org.uk/images/og/home.jpg">
<meta name="twitter:image:alt" content="DNA Pathways CIC - Family Support and Advocacy">
```

## Image Quality Checklist

### Before Uploading
- [ ] **Resolution**: Images are high enough resolution for their intended use
- [ ] **File Size**: Optimized for web (under 500KB for hero, under 200KB for others)
- [ ] **Format**: JPG for photos, PNG for graphics with transparency
- [ ] **Aspect Ratio**: Correct aspect ratio for intended use
- [ ] **Quality**: No blur, pixelation, or compression artifacts

### After Uploading
- [ ] **Loading**: Images load quickly on both desktop and mobile
- [ ] **Responsive**: Images look good on all screen sizes
- [ ] **Alt Text**: All images have descriptive alt text
- [ ] **Accessibility**: Images meet accessibility standards
- [ ] **Social Media**: Open Graph images display correctly when shared

## Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths and permissions
2. **Slow loading**: Optimize image file sizes
3. **Poor quality**: Use higher resolution source images
4. **Wrong aspect ratio**: Crop images to correct dimensions
5. **Mobile issues**: Test responsive behavior

### Performance Tips
- Use WebP format when possible (with JPG fallback)
- Implement lazy loading for images below the fold
- Use appropriate image sizes for different screen sizes
- Consider using a CDN for faster image delivery

## Final Testing

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Device Testing
- [ ] Desktop (1920x1080 and larger)
- [ ] Tablet (768px width)
- [ ] Mobile (375px width)

### Performance Testing
- [ ] Page load speed with images
- [ ] Image loading time
- [ ] Mobile performance
- [ ] Social media sharing preview

## Resources

### Image Optimization Tools
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **ImageOptim**: https://imageoptim.com

### Free Stock Photo Sites
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

### Testing Tools
- **Google PageSpeed Insights**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/