// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
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

// Observe all sections and cards for animation
document.querySelectorAll('section, .skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Skills progress bars animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-progress') + '%';
                bar.style.width = targetWidth;
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => {
    skillsObserver.observe(card);
});

// Reset progress on mouse leave for replay effect
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        const bar = card.querySelector('.progress-bar');
        if (bar) {
            bar.style.width = '0%';
        }
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
    const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
    const message = formData.get('message') || contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
        // Simulate form submission
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Add scroll progress bar
window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.body.style.setProperty('--scroll-progress', scrolled + '%');
});

// Certification functionality
let certificates = JSON.parse(localStorage.getItem('certificates')) || [];

const certGrid = document.getElementById('certifications-grid');
const certModal = document.getElementById('cert-modal');
const addCertBtn = document.getElementById('add-cert-btn');
const certForm = document.getElementById('cert-form');
const modalClose = document.querySelector('.modal-close');

function renderCertificates() {
    certGrid.innerHTML = '';
    certificates.forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card';
        certCard.dataset.certId = index;
        certCard.innerHTML = `
            <button class="cert-delete" onclick="deleteCert(${index})">&times;</button>
            <h4>${cert.name}</h4>
            <div class="cert-issuer">${cert.issuer}</div>
            <div class="cert-date">${new Date(cert.date).toLocaleDateString()}</div>
        `;
        certGrid.appendChild(certCard);
    });
}

function addCert(e) {
    e.preventDefault();
    const name = document.getElementById('cert-name').value;
    const issuer = document.getElementById('cert-issuer').value;
    const date = document.getElementById('cert-date').value;

    if (name && issuer && date) {
        certificates.push({ name, issuer, date });
        localStorage.setItem('certificates', JSON.stringify(certificates));
        renderCertificates();
        certForm.reset();
        certModal.style.display = 'none';
    }
}

function deleteCert(index) {
    certificates.splice(index, 1);
    localStorage.setItem('certificates', JSON.stringify(certificates));
    renderCertificates();
}

// Event listeners
addCertBtn.addEventListener('click', () => {
    certModal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
    certModal.style.display = 'none';
});

certForm.addEventListener('submit', addCert);

window.addEventListener('click', (e) => {
    if (e.target === certModal) {
        certModal.style.display = 'none';
    }
});

// Initial render and observe cert cards
renderCertificates();

document.querySelectorAll('.cert-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
