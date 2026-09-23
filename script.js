// Funcionalidad para el menu movil
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

// Verificamos que los elementos existan antes de agregar eventos
if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Cerrar el menu movil al hacer clic en un enlace
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// Cambiar el fondo del Navbar al hacer scroll
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.classList.remove('shadow-md');
            navbar.style.background = 'rgba(255, 255, 255, 0.85)';
        }
    });
}

// Intersection Observer para las animaciones "Scroll Reveal"
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Dejamos de observar una vez que la animacion ya ocurrio
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Aplicar el observador a todos los elementos con la clase .reveal
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});