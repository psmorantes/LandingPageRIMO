// Funcionalidad para el menú móvil
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

// Verificamos que los elementos existan antes de agregar eventos
if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Cerrar el menú móvil al hacer clic en un enlace
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
            // Dejamos de observar una vez que la animación ya ocurrió
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Aplicar el observador a todos los elementos con la clase .reveal
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// Make
document.getElementById('rimo-contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita la recarga de la página

    const form = event.target;
    const submitBtn = document.getElementById('submit-btn');
    const statusDiv = document.getElementById('form-status');
    
    // 1. Verificación pasiva del Honeypot
    const honeypot = form.elements['_honeypot'].value;
    if (honeypot !== "") {
        console.warn("Interacción automatizada detectada. Petición abortada.");
        return; 
    }

    // 2. Construcción del Payload (Actualizado con Telegram)
    const formData = {
        nombre: form.elements['nombre'].value,
        telegram: form.elements['telegram'].value, // <-- Aquí capturamos el nuevo campo
        correo: form.elements['correo'].value,
        interes: form.elements['interes'].value,
        fecha: new Date().toISOString()
    };

    // LA DIRECCIÓN DE MAKE: Aquí pones la URL que te dará Make
    const makeWebhookUrl = 'https://hook.us2.make.com/w03q8lanu347n6094qv0ox5s6dm7vtht';

    try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Procesando...';

        // EL LLAMADO INSTANTÁNEO: Aquí es donde la página se comunica con Make
        const response = await fetch(makeWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            statusDiv.textContent = '¡Solicitud enviada con éxito! Confirmaremos su requerimiento a la brevedad.';
            statusDiv.className = 'mt-4 text-sm font-medium text-center rounded-md p-3 bg-green-100 text-green-800 block';
            form.reset();
        } else {
            throw new Error('Código de estado HTTP no exitoso.');
        }
    } catch (error) {
        statusDiv.textContent = 'Ocurrió un error de conexión. Por favor, intente contactarnos directamente.';
        statusDiv.className = 'mt-4 text-sm font-medium text-center rounded-md p-3 bg-red-100 text-red-800 block';
        console.error('Traza del error Fetch:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Solicitar Asesoría';
    }
});

// --- LÓGICA DEL MODO OSCURO (Automático / Manual) ---

const themeToggleBtn = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const body = document.body;

// 1. Detectar preferencia del sistema o lo que guardó el usuario previamente
const currentTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 2. Función para aplicar el tema visualmente y cambiar el icono
function applyTheme(isDark) {
    // BUSCAMOS LOS LOGOS JUSTO AQUÍ (A prueba de fallos)
    const navLogo = document.getElementById('navbar-logo');
    const footLogo = document.getElementById('footer-logo');

    if (isDark) {
        body.classList.add('dark-theme');
        if (moonIcon) moonIcon.style.display = 'block';
        if (sunIcon) sunIcon.style.display = 'none';
        
        // Cambiar al logo blanco
        if (navLogo) navLogo.src = 'assets/img/logo/logo_blanco.png';
        if (footLogo) footLogo.src = 'assets/img/logo/logo_blanco.png';
    } else {
        body.classList.remove('dark-theme');
        if (moonIcon) moonIcon.style.display = 'none';
        if (sunIcon) sunIcon.style.display = 'block';
        
        // Volver al logo original a color
        if (navLogo) navLogo.src = 'assets/img/logo/logo.jpg';
        if (footLogo) footLogo.src = 'assets/img/logo/logo.jpg';
    }
}

// 3. Evaluar qué tema cargar al abrir la página
if (currentTheme === 'dark' || (!currentTheme && systemPrefersDark)) {
    applyTheme(true);
} else {
    applyTheme(false);
}

// 4. Cambiar el tema manualmente cuando el usuario haga clic en el botón
themeToggleBtn.addEventListener('click', () => {
    const isCurrentlyDark = body.classList.contains('dark-theme');
    
    if (isCurrentlyDark) {
        applyTheme(false);
        localStorage.setItem('theme', 'light'); // Guarda la decisión
    } else {
        applyTheme(true);
        localStorage.setItem('theme', 'dark'); // Guarda la decisión
    }
});