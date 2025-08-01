# DNA Pathways CIC Website - Deployment Guide

## 🚀 Quick Start Options

### Option 1: Netlify (Recommended - Free)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop your website folder to the Netlify dashboard
3. Your site will be live instantly with a URL like `https://random-name.netlify.app`
4. Add a custom domain in the site settings

### Option 2: Vercel (Free)
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Import your repository
3. Vercel will automatically deploy your site
4. Add a custom domain in the project settings

### Option 3: GitHub Pages (Free)
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose `main`
4. Your site will be available at `https://username.github.io/repository-name`

## 🌐 Custom Domain Setup

### 1. Purchase a Domain
Recommended domains:
- `dnapathways.org.uk`
- `dnapathways.co.uk`
- `dnapathways-cic.org.uk`

### 2. Configure DNS
Add these records to your domain provider:

**For Netlify:**
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

**For Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.19
```

### 3. SSL Certificate
Most modern hosting providers automatically provide SSL certificates. If not, you can use Let's Encrypt for free.

## 📧 Email Setup

### Option 1: Google Workspace
1. Sign up for Google Workspace
2. Add your domain
3. Create email addresses like:
   - `support@dnapathways.org.uk`
   - `info@dnapathways.org.uk`
   - `danielle@dnapathways.org.uk`

### Option 2: Microsoft 365
1. Sign up for Microsoft 365 Business
2. Add your domain
3. Create professional email addresses

## 📱 Social Media Setup

### Create Accounts
- **Facebook**: DNA Pathways CIC
- **Instagram**: @dnapathways_cic
- **LinkedIn**: DNA Pathways CIC

### Update Website Links
Replace the placeholder social media links in `index.html`:
```html
<a href="https://facebook.com/dnapathways" aria-label="Facebook">
<a href="https://instagram.com/dnapathways_cic" aria-label="Instagram">
<a href="https://linkedin.com/company/dnapathways" aria-label="LinkedIn">
```

## 📊 Analytics Setup

### Google Analytics 4
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property for your website
3. Add the tracking code to your HTML head section

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain
3. Verify ownership (usually by adding a meta tag)
4. Submit your sitemap

## 🔧 Pre-Launch Checklist

### Content Updates
- [ ] Replace placeholder company registration number
- [ ] Update contact email addresses
- [ ] Add real testimonials (with permission)
- [ ] Update social media links
- [ ] Add team photos and images
- [ ] Update football timetable information

### Technical Setup
- [ ] Test contact form functionality
- [ ] Verify mobile responsiveness
- [ ] Check accessibility with screen reader
- [ ] Test loading speed
- [ ] Verify SSL certificate
- [ ] Set up email forwarding

### Legal Requirements
- [ ] Add Privacy Policy page
- [ ] Add Terms of Service page
- [ ] Add Cookie Policy (if using analytics)
- [ ] Include company registration details
- [ ] Add DBS check information

## 📈 Post-Launch Tasks

### Week 1
- [ ] Monitor website analytics
- [ ] Test contact form submissions
- [ ] Share on social media
- [ ] Ask for feedback from families

### Month 1
- [ ] Review and respond to feedback
- [ ] Update content based on user needs
- [ ] Consider adding a blog section
- [ ] Plan content updates

### Ongoing
- [ ] Regular content updates
- [ ] Monitor and respond to inquiries
- [ ] Update testimonials
- [ ] Keep contact information current

## 🆘 Troubleshooting

### Common Issues

**Form Not Working**
- Check if you've set up form handling
- Verify email service configuration
- Test with different email addresses

**Images Not Loading**
- Check file paths
- Optimize image sizes
- Use WebP format for better performance

**Mobile Issues**
- Test on different devices
- Check viewport meta tag
- Verify CSS media queries

**SSL Issues**
- Contact your hosting provider
- Use Let's Encrypt for free certificates
- Check DNS configuration

## 📞 Support

For technical support:
- Check hosting provider documentation
- Contact your web developer
- Use online forums and communities

---

**Remember**: Your website is often the first impression families have of your services. Keep it updated, professional, and accessible!