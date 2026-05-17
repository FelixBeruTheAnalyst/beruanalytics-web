// ================================================
// BeruAnalytics — script.js
// ================================================

// ── NAVBAR SCROLL EFFECT ──
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 30, 98, 0.99)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.background = 'rgba(0, 30, 98, 0.97)';
        navbar.style.boxShadow = 'none';
    }
});

// ── MOBILE MENU ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '68px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(0,30,98,0.99)';
    navLinks.style.padding = '16px 24px';
    navToggle.textContent = isOpen ? '☰' : '✕';
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                navToggle.textContent = '☰';
            }
        }
    });
});

// ── ANIMATE ON SCROLL ──
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards
document.querySelectorAll('.feature-card, .step, .pricing-card, .about-stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ── CHART BAR ANIMATION ──
document.querySelectorAll('.chart-bar').forEach(bar => {
    bar.addEventListener('mouseenter', () => {
        bar.style.background = '#1A6B72';
    });
    bar.addEventListener('mouseleave', () => {
        if (!bar.classList.contains('active')) {
            bar.style.background = 'rgba(26,107,114,0.4)';
        }
    });
});

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.borderBottomColor = 'transparent';
        link.style.color = 'rgba(255,255,255,0.8)';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.borderBottomColor = '#1A6B72';
            link.style.color = '#ffffff';
        }
    });
});

console.log('BeruAnalytics | Built by Felix Beru Tsinzole | Nairobi, Kenya 🇰🇪');