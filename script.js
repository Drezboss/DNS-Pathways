// DNA Pathways CIC - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle mobile menu
            navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Animate hamburger menu
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update focus for accessibility
                targetElement.focus({ preventScroll: true });
            }
        });
    });
    
    // Active Navigation Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    function updateActiveNav() {
        const currentScrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                    if (navItem.getAttribute('href') === `#${sectionId}`) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Throttled scroll event for performance
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll);
    
    // Intersection Observer for Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animations for cards within sections
                const cards = entry.target.querySelectorAll('.hero-card, .about-card, .service-card, .testimonial');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe sections and cards for animation
    const elementsToAnimate = document.querySelectorAll('section, .hero-card, .about-card, .service-card, .testimonial');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Enhanced Button Interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Enhanced hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Contact Form Enhancement (if needed in future)
    function enhanceContactForm() {
        const contactForms = document.querySelectorAll('form');
        contactForms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                // Add floating label effect
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', function() {
                    if (!this.value) {
                        this.parentElement.classList.remove('focused');
                    }
                });
                
                // Check if input has value on load
                if (input.value) {
                    input.parentElement.classList.add('focused');
                }
            });
        });
    }
    
    // Accessibility Enhancements
    function enhanceAccessibility() {
        // Add skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#home';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1001;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Improve focus management for service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'article');
            
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    const button = this.querySelector('.btn');
                    if (button) {
                        button.click();
                    }
                }
            });
        });
        
        // Add ARIA labels to icon-only buttons
        const iconButtons = document.querySelectorAll('.social-link');
        iconButtons.forEach(button => {
            const icon = button.querySelector('i');
            if (icon && !button.getAttribute('aria-label')) {
                const iconClass = icon.className;
                let label = 'Social media';
                
                if (iconClass.includes('facebook')) label = 'Follow us on Facebook';
                else if (iconClass.includes('instagram')) label = 'Follow us on Instagram';
                else if (iconClass.includes('envelope')) label = 'Send us an email';
                
                button.setAttribute('aria-label', label);
            }
        });
    }
    
    // Performance Optimizations
    function optimizePerformance() {
        // Lazy load images when they come into view
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
        
        // Preload critical resources
        const criticalLinks = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        ];
        
        criticalLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = href;
            document.head.appendChild(link);
        });
    }
    
    // Error Handling for External Resources
    function handleResourceErrors() {
        // Handle Font Awesome loading failure
        const faLink = document.querySelector('link[href*="font-awesome"]');
        if (faLink) {
            faLink.addEventListener('error', function() {
                console.warn('Font Awesome failed to load. Icons may not display correctly.');
                // Fallback: replace icons with text
                const icons = document.querySelectorAll('i.fas, i.fab');
                icons.forEach(icon => {
                    const text = document.createElement('span');
                    text.textContent = '[Icon]';
                    text.style.fontSize = '0.8em';
                    icon.parentNode.replaceChild(text, icon);
                });
            });
        }
    }
    
    // Initialize all enhancements
    enhanceAccessibility();
    optimizePerformance();
    handleResourceErrors();
    
    // Console message for developers
    console.log('🧬 DNA Pathways CIC - Website loaded successfully');
    console.log('💙 Supporting families, building communities');
    
    // Analytics placeholder (replace with actual analytics code)
    function initAnalytics() {
        // Track page views
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_TRACKING_ID', {
                page_title: document.title,
                page_location: window.location.href
            });
        }
        
        // Track button clicks
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const buttonText = this.textContent.trim();
                const section = this.closest('section')?.id || 'unknown';
                
                // Replace with actual analytics call
                console.log(`Button clicked: "${buttonText}" in section: ${section}`);
            });
        });
    }
    
    // Initialize analytics if tracking is enabled
    if (window.location.hostname !== 'localhost') {
        initAnalytics();
    }
});

// CSS for animations and ripple effect
const style = document.createElement('style');
style.textContent = `
    /* Animation keyframes */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    /* Animation classes */
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    .hero-card.animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .about-card.animate-in:nth-child(odd) {
        animation: fadeInLeft 0.8s ease-out forwards;
    }
    
    .about-card.animate-in:nth-child(even) {
        animation: fadeInRight 0.8s ease-out forwards;
    }
    
    /* Initial state for animations */
    section,
    .hero-card,
    .about-card,
    .service-card,
    .testimonial {
        opacity: 0;
        transform: translateY(30px);
    }
    
    /* Ripple effect for buttons */
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .btn .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Mobile navigation animation */
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    /* Active navigation link */
    .nav-menu a.active {
        color: var(--primary-color);
    }
    
    .nav-menu a.active::after {
        width: 100%;
    }
    
    /* Focus improvements */
    .service-card:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
        transform: translateY(-2px);
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        .animate-in,
        .hero-card.animate-in,
        .about-card.animate-in {
            animation: none;
            opacity: 1;
            transform: none;
        }
        
        .btn .ripple {
            animation: none;
        }
    }
`;

document.head.appendChild(style);