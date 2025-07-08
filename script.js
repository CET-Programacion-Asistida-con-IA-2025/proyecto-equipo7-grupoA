document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    
    if (nombre && comentario) {
        // Simular envío del formulario
        document.getElementById('successMessage').style.display = 'block';
        
        // Limpiar el formulario
        document.getElementById('nombre').value = '';
        document.getElementById('comentario').value = '';
        
        // Ocultar mensaje después de 3 segundos
        setTimeout(function() {
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    }
});
// Configuración de rutas
const routes = {
    'ESI': 'ESI.html',
    'Economía': 'Economía.html',  
    'Cursos': 'cursosgratis.html',
    'Test Vocacional': 'PTV2.html',
    'Valoraciones': 'ESI.html'
};

// Función para manejar la navegación
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionName = this.querySelector('span').textContent;
            
            // Remover clase activa de todos los elementos
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Agregar clase activa al elemento clickeado
            this.classList.add('active');
            
            // Navegar a la página correspondiente
            if (routes[sectionName]) {
                // Pequeño delay para mostrar la animación
                setTimeout(() => {
                    window.location.href = routes[sectionName];
                }, 200);
            }
        });
        
        // Efecto hover mejorado
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
}

// Función para detectar la página actual y marcar el elemento activo
function setActiveNavItem() {
    const currentPage = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item');
    
    // Limpiar todas las clases activas
    navItems.forEach(item => item.classList.remove('active'));
    
    // Determinar qué elemento debe estar activo basado en la URL
    if (currentPage.includes('esi') || currentPage.includes('ESI')) {
        // Si estamos en la página de ESI, marcar "Servicios" como activo
        const serviciosItem = Array.from(navItems).find(item => 
            item.querySelector('span').textContent === 'Servicios'
        );
        if (serviciosItem) {
            serviciosItem.classList.add('active');
        }
    } else {
        // Si estamos en la página principal, marcar "Trabajo" como activo
        const trabajoItem = Array.from(navItems).find(item => 
            item.querySelector('span').textContent === 'Trabajo'
        );
        if (trabajoItem) {
            trabajoItem.classList.add('active');
        }
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    setActiveNavItem();
});

