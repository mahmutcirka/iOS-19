/* ============================================
   APP.JS — Main Application Controller
   ============================================ */

(function() {
    
    // ─── Navbar Scroll Effect ───
    function initNavbar() {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-links a');
        const navToggle = document.getElementById('nav-toggle');
        const navLinksContainer = document.getElementById('nav-links');
        
        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Active link tracking
            const sections = document.querySelectorAll('section[id]');
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
        
        // Mobile toggle
        if (navToggle && navLinksContainer) {
            navToggle.addEventListener('click', () => {
                navLinksContainer.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
            
            // Close menu on link click
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navLinksContainer.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // ─── Scroll Reveal Animation ───
    function initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe all elements with animate-on-scroll class
        function observeElements() {
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
            
            // Also observe attack steps
            document.querySelectorAll('.attack-step').forEach(el => {
                observer.observe(el);
            });
        }
        
        // Initial observation
        observeElements();
        
        // Re-observe after components render (slight delay)
        setTimeout(observeElements, 500);
        setTimeout(observeElements, 1500);
    }
    
    // ─── Hero Particles ───
    function initHeroParticles() {
        const container = document.getElementById('hero-particles');
        if (!container) return;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${Math.random() > 0.5 ? 'rgba(0,240,255,0.4)' : 'rgba(255,0,229,0.3)'};
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 3}s;
                pointer-events: none;
            `;
            container.appendChild(particle);
        }
    }
    
    // ─── Glitch Effect ───
    function initGlitchEffect() {
        const glitchText = document.querySelector('.glitch');
        if (!glitchText) return;
        
        setInterval(() => {
            glitchText.style.textShadow = `
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 rgba(255,0,229,0.7),
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 rgba(0,240,255,0.7)
            `;
            
            setTimeout(() => {
                glitchText.style.textShadow = 'none';
            }, 100);
        }, 3000);
    }
    
    // ─── Counter Animation ───
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-value');
        
        counters.forEach(counter => {
            const text = counter.textContent;
            const num = parseFloat(text);
            
            if (!isNaN(num) && num > 0 && num <= 100) {
                counter.textContent = '0';
                let current = 0;
                const increment = num / 30;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= num) {
                        counter.textContent = text;
                        clearInterval(timer);
                    } else {
                        counter.textContent = current.toFixed(1);
                    }
                }, 50);
            }
        });
    }
    
    // ─── Keyboard Navigation ───
    function initKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            // Escape to close mobile menu
            if (e.key === 'Escape') {
                const navLinks = document.getElementById('nav-links');
                const navToggle = document.getElementById('nav-toggle');
                if (navLinks) navLinks.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
            }
        });
    }
    
    // ─── Performance: Lazy load sections ───
    function initLazyLoad() {
        const sections = document.querySelectorAll('.section');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                }
            });
        }, { threshold: 0.05 });
        
        sections.forEach(section => sectionObserver.observe(section));
    }
    
    // ─── Initialize Everything ───
    function init() {
        initNavbar();
        initHeroParticles();
        initGlitchEffect();
        initKeyboardNav();
        initLazyLoad();
        
        // Delay scroll reveal to allow components to render
        setTimeout(() => {
            initScrollReveal();
            animateCounters();
        }, 300);
        
        console.log('%c⚡ CVE-2026-1199 Dashboard Loaded', 
            'color: #00f0ff; font-size: 14px; font-weight: bold; background: #0a0a0f; padding: 8px 16px; border-radius: 4px;');
        console.log('%cİstinye Üniversitesi — BGT006 Sızma Testi — Mahmut Çirka', 
            'color: #8a8a9a; font-size: 11px;');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
