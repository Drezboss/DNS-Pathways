/**
 * DNA Pathways CIC - UX Analytics & Performance Tracking
 * Tracks user behavior, conversion rates, and performance metrics
 */

class UXAnalytics {
    constructor() {
        this.events = [];
        this.sessionStart = Date.now();
        this.userJourney = [];
        this.conversionGoals = {
            'emergency_call': false,
            'contact_form_submit': false,
            'service_page_view': false,
            'booking_call': false,
            'resource_download': false
        };
        
        this.init();
    }
    
    init() {
        // Track page load performance
        this.trackPagePerformance();
        
        // Track user interactions
        this.trackUserInteractions();
        
        // Track form interactions
        this.trackFormInteractions();
        
        // Track scroll depth
        this.trackScrollDepth();
        
        // Track time on page
        this.trackTimeOnPage();
        
        // Track mobile vs desktop usage
        this.trackDeviceUsage();
        
        // Track accessibility features
        this.trackAccessibilityUsage();
        
        // Send data on page unload
        window.addEventListener('beforeunload', () => {
            this.sendAnalytics();
        });
    }
    
    /**
     * Track page performance metrics
     */
    trackPagePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const metrics = {
                    type: 'performance',
                    timestamp: Date.now(),
                    pageLoadTime: perfData.loadEventEnd - perfData.loadEventStart,
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                    firstPaint: this.getFirstPaint(),
                    firstContentfulPaint: this.getFirstContentfulPaint(),
                    largestContentfulPaint: this.getLargestContentfulPaint(),
                    cumulativeLayoutShift: this.getCumulativeLayoutShift()
                };
                
                this.events.push(metrics);
                
                // Alert if performance is poor
                if (metrics.pageLoadTime > 3000) {
                    this.trackEvent('performance_warning', {
                        loadTime: metrics.pageLoadTime,
                        threshold: 3000
                    });
                }
            });
        }
    }
    
    /**
     * Track user interactions and clicks
     */
    trackUserInteractions() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a, button, .btn, .contact-option');
            if (!target) return;
            
            const eventData = {
                type: 'interaction',
                timestamp: Date.now(),
                element: target.tagName.toLowerCase(),
                text: target.textContent.trim().substring(0, 50),
                href: target.href || null,
                className: target.className,
                position: this.getElementPosition(target)
            };
            
            // Track specific interactions
            if (target.href && target.href.includes('tel:')) {
                this.trackEvent('phone_call_click', {
                    phone: target.href.replace('tel:', ''),
                    context: this.getPageContext()
                });
                this.conversionGoals.emergency_call = true;
            }
            
            if (target.href && target.href.includes('wa.me')) {
                this.trackEvent('whatsapp_click', {
                    context: this.getPageContext()
                });
            }
            
            if (target.classList.contains('btn-emergency')) {
                this.trackEvent('emergency_button_click', {
                    context: this.getPageContext()
                });
            }
            
            this.events.push(eventData);
        });
    }
    
    /**
     * Track form interactions and submissions
     */
    trackFormInteractions() {
        // Track form field interactions
        document.addEventListener('focus', (e) => {
            if (e.target.matches('input, select, textarea')) {
                this.trackEvent('form_field_focus', {
                    fieldName: e.target.name || e.target.id,
                    fieldType: e.target.type,
                    formId: e.target.closest('form')?.id || 'unknown'
                });
            }
        });
        
        // Track form submissions
        document.addEventListener('submit', (e) => {
            const form = e.target;
            const formData = new FormData(form);
            
            this.trackEvent('form_submit', {
                formId: form.id || 'unknown',
                formAction: form.action,
                fieldCount: formData.entries().length,
                hasRequiredFields: form.querySelectorAll('[required]').length > 0
            });
            
            this.conversionGoals.contact_form_submit = true;
        });
        
        // Track form abandonment
        let formStartTime = null;
        document.addEventListener('focus', (e) => {
            if (e.target.matches('input, select, textarea')) {
                if (!formStartTime) {
                    formStartTime = Date.now();
                }
            }
        });
        
        window.addEventListener('beforeunload', () => {
            if (formStartTime) {
                const timeSpent = Date.now() - formStartTime;
                if (timeSpent > 5000) { // More than 5 seconds
                    this.trackEvent('form_abandonment', {
                        timeSpent: timeSpent,
                        formId: document.activeElement?.closest('form')?.id || 'unknown'
                    });
                }
            }
        });
    }
    
    /**
     * Track scroll depth and engagement
     */
    trackScrollDepth() {
        let maxScroll = 0;
        let scrollEvents = [];
        
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                // Track milestone scroll depths
                const milestones = [25, 50, 75, 90, 100];
                milestones.forEach(milestone => {
                    if (scrollPercent >= milestone && !scrollEvents.includes(milestone)) {
                        scrollEvents.push(milestone);
                        this.trackEvent('scroll_milestone', {
                            depth: milestone,
                            page: window.location.pathname
                        });
                    }
                });
            }
        });
    }
    
    /**
     * Track time spent on page
     */
    trackTimeOnPage() {
        let startTime = Date.now();
        let isActive = true;
        
        // Track when user becomes inactive
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
        events.forEach(event => {
            document.addEventListener(event, () => {
                if (!isActive) {
                    isActive = true;
                    this.trackEvent('user_returned', {
                        inactiveTime: Date.now() - startTime
                    });
                }
                startTime = Date.now();
            });
        });
        
        // Track when user becomes inactive
        let inactivityTimer;
        const checkInactivity = () => {
            if (Date.now() - startTime > 30000) { // 30 seconds
                isActive = false;
                this.trackEvent('user_inactive', {
                    timeOnPage: Date.now() - this.sessionStart
                });
            }
        };
        
        setInterval(checkInactivity, 10000); // Check every 10 seconds
    }
    
    /**
     * Track device and browser information
     */
    trackDeviceUsage() {
        const deviceInfo = {
            type: 'device_info',
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
            devicePixelRatio: window.devicePixelRatio,
            connection: navigator.connection ? {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink
            } : null,
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        };
        
        this.events.push(deviceInfo);
    }
    
    /**
     * Track accessibility feature usage
     */
    trackAccessibilityUsage() {
        // Track keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                this.trackEvent('keyboard_navigation', {
                    key: e.key,
                    target: e.target.tagName.toLowerCase()
                });
            }
        });
        
        // Track screen reader usage (if detectable)
        if (window.speechSynthesis) {
            this.trackEvent('accessibility_feature', {
                feature: 'speech_synthesis_available'
            });
        }
        
        // Track high contrast mode
        const mediaQuery = window.matchMedia('(prefers-contrast: high)');
        if (mediaQuery.matches) {
            this.trackEvent('accessibility_feature', {
                feature: 'high_contrast_mode'
            });
        }
        
        // Track reduced motion preference
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (motionQuery.matches) {
            this.trackEvent('accessibility_feature', {
                feature: 'reduced_motion'
            });
        }
    }
    
    /**
     * Track specific events
     */
    trackEvent(eventName, data = {}) {
        const event = {
            type: 'event',
            name: eventName,
            timestamp: Date.now(),
            page: window.location.pathname,
            data: data
        };
        
        this.events.push(event);
        
        // Track user journey
        this.userJourney.push({
            event: eventName,
            timestamp: Date.now(),
            page: window.location.pathname
        });
        
        // Send to Google Analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'ux_interaction',
                event_label: JSON.stringify(data),
                value: 1
            });
        }
    }
    
    /**
     * Track conversion goals
     */
    trackConversion(goalName) {
        this.conversionGoals[goalName] = true;
        
        this.trackEvent('conversion', {
            goal: goalName,
            page: window.location.pathname
        });
        
        // Send to Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                send_to: `AW-CONVERSION_ID/${goalName}`,
                value: 1.0,
                currency: 'GBP'
            });
        }
    }
    
    /**
     * Get page context for analytics
     */
    getPageContext() {
        return {
            path: window.location.pathname,
            referrer: document.referrer,
            title: document.title,
            url: window.location.href
        };
    }
    
    /**
     * Get element position for heatmap tracking
     */
    getElementPosition(element) {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + window.scrollX,
            y: rect.top + window.scrollY,
            width: rect.width,
            height: rect.height
        };
    }
    
    /**
     * Performance metrics helpers
     */
    getFirstPaint() {
        const paintEntries = performance.getEntriesByType('paint');
        const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
        return firstPaint ? firstPaint.startTime : null;
    }
    
    getFirstContentfulPaint() {
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        return fcp ? fcp.startTime : null;
    }
    
    getLargestContentfulPaint() {
        if ('PerformanceObserver' in window) {
            return new Promise((resolve) => {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    resolve(lastEntry.startTime);
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
            });
        }
        return null;
    }
    
    getCumulativeLayoutShift() {
        if ('PerformanceObserver' in window) {
            return new Promise((resolve) => {
                let cls = 0;
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (!entry.hadRecentInput) {
                            cls += entry.value;
                        }
                    }
                    resolve(cls);
                });
                observer.observe({ entryTypes: ['layout-shift'] });
            });
        }
        return null;
    }
    
    /**
     * Send analytics data to server
     */
    async sendAnalytics() {
        if (this.events.length === 0) return;
        
        const analyticsData = {
            sessionId: this.generateSessionId(),
            timestamp: Date.now(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
            events: this.events,
            userJourney: this.userJourney,
            conversionGoals: this.conversionGoals,
            sessionDuration: Date.now() - this.sessionStart
        };
        
        try {
            // Send to your analytics endpoint
            await fetch('/api/analytics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(analyticsData)
            });
            
            // Clear events after successful send
            this.events = [];
        } catch (error) {
            console.error('Failed to send analytics:', error);
            
            // Store in localStorage for retry
            this.storeAnalyticsForRetry(analyticsData);
        }
    }
    
    /**
     * Generate unique session ID
     */
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    /**
     * Store analytics data for retry
     */
    storeAnalyticsForRetry(data) {
        const stored = JSON.parse(localStorage.getItem('analytics_queue') || '[]');
        stored.push(data);
        localStorage.setItem('analytics_queue', JSON.stringify(stored));
    }
    
    /**
     * Retry sending stored analytics
     */
    async retryStoredAnalytics() {
        const stored = JSON.parse(localStorage.getItem('analytics_queue') || '[]');
        if (stored.length === 0) return;
        
        for (const data of stored) {
            try {
                await fetch('/api/analytics', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
            } catch (error) {
                console.error('Failed to retry analytics:', error);
                break;
            }
        }
        
        localStorage.removeItem('analytics_queue');
    }
    
    /**
     * Get analytics summary for debugging
     */
    getAnalyticsSummary() {
        return {
            totalEvents: this.events.length,
            sessionDuration: Date.now() - this.sessionStart,
            conversionGoals: this.conversionGoals,
            userJourney: this.userJourney
        };
    }
}

// Initialize analytics when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.uxAnalytics = new UXAnalytics();
    
    // Retry any stored analytics
    window.uxAnalytics.retryStoredAnalytics();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UXAnalytics;
}