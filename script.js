// DNA Pathways CIC - Fixed Navigation Script
document.addEventListener('DOMContentLoaded', function() {
    console.log('DNA Pathways CIC - Navigation initialized');
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('Hamburger button found:', !!hamburger);
    console.log('Nav menu found:', !!navMenu);
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            console.log('Hamburger clicked!');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            console.log('Menu active:', navMenu.classList.contains('active'));
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Handle escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.focus();
            }
        });
    }
    
    // Navigation Link Handler
    function handleNavigationClick(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
        
        // Get target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Calculate scroll position
            const navbarHeight = 80;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            // Smooth scroll
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active state
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => link.removeAttribute('aria-current'));
            this.setAttribute('aria-current', 'page');
            
            console.log('Navigated to:', targetId);
        } else {
            console.warn('Target section not found:', targetId);
        }
    }
    
    // Apply navigation handler to all anchor links
    const navigationLinks = document.querySelectorAll('a[href^="#"]');
    console.log('Found navigation links:', navigationLinks.length);
    
    navigationLinks.forEach((link, index) => {
        console.log(`Link ${index + 1}:`, link.href, link.textContent);
        link.addEventListener('click', handleNavigationClick);
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        
        // Name validation
        if (nameInput && nameError) {
            nameInput.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    nameError.textContent = 'Name is required';
                    this.setAttribute('aria-invalid', 'true');
                } else {
                    nameError.textContent = '';
                    this.setAttribute('aria-invalid', 'false');
                }
            });
        }
        
        // Email validation
        if (emailInput && emailError) {
            emailInput.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    emailError.textContent = 'Email is required';
                    this.setAttribute('aria-invalid', 'true');
                } else if (!isValidEmail(this.value)) {
                    emailError.textContent = 'Please enter a valid email address';
                    this.setAttribute('aria-invalid', 'true');
                } else {
                    emailError.textContent = '';
                    this.setAttribute('aria-invalid', 'false');
                }
            });
        }
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Enhanced validation with accessibility
            let hasErrors = false;
            
            if (!name || !name.trim()) {
                if (nameError) {
                    nameError.textContent = 'Name is required';
                    nameInput.setAttribute('aria-invalid', 'true');
                }
                hasErrors = true;
            }
            
            if (!email || !email.trim()) {
                if (emailError) {
                    emailError.textContent = 'Email is required';
                    emailInput.setAttribute('aria-invalid', 'true');
                }
                hasErrors = true;
            } else if (!isValidEmail(email)) {
                if (emailError) {
                    emailError.textContent = 'Please enter a valid email address';
                    emailInput.setAttribute('aria-invalid', 'true');
                }
                hasErrors = true;
            }
            
            if (hasErrors) {
                // Focus first error
                const firstError = document.querySelector('[aria-invalid="true"]');
                if (firstError) {
                    firstError.focus();
                }
                showNotification('Please correct the errors in the form.', 'error');
                return;
            }
            
            // Clear any existing errors
            if (nameError) nameError.textContent = '';
            if (emailError) emailError.textContent = '';
            if (nameInput) nameInput.setAttribute('aria-invalid', 'false');
            if (emailInput) emailInput.setAttribute('aria-invalid', 'false');
            
            // Simulate form submission
            showNotification('Thank you! We\'ll be in touch soon to arrange your free call.', 'success');
            this.reset();
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" aria-label="Close notification">×</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
            .notification-close:hover {
                opacity: 0.8;
            }
        `;
        document.head.appendChild(style);
        
        // Add to page
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    // Back to Top Button Functionality
    const backToTopButton = document.getElementById('backToTop');
    console.log('Back to top button found:', !!backToTopButton);
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        function toggleBackToTop() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const showThreshold = 100; // Reduced threshold for easier testing
            
            console.log('Scroll position:', scrollTop, 'Threshold:', showThreshold);
            
            if (scrollTop > showThreshold) {
                backToTopButton.classList.add('visible');
                console.log('Back to top button shown');
            } else {
                backToTopButton.classList.remove('visible');
                console.log('Back to top button hidden');
            }
        }
        
        // Smooth scroll to top
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Back to top button clicked');
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Focus management for accessibility
            setTimeout(() => {
                const mainContent = document.querySelector('#main-content');
                if (mainContent) {
                    mainContent.focus();
                }
            }, 1000);
        });
        
        // Keyboard support
        backToTopButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Listen for scroll events
        window.addEventListener('scroll', toggleBackToTop);
        
        // Initial check
        toggleBackToTop();
        

    }
    

    
    console.log('DNA Pathways CIC - Navigation setup complete');
});