// Configuración de rutas
const routes = {
	'Inicio': 'index.html',
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
    
    // Obtener el nombre del archivo actual
    const currentFileName = currentPage.split('/').pop().replace('.html', '');
    
    // Recorrer todos los elementos de navegación
    navItems.forEach(item => {
        const navText = item.querySelector('span').textContent;
        
        // Verificar si existe una ruta para este elemento de navegación
        if (routes[navText]) {
            const routeFileName = routes[navText].replace('.html', '');
            
            // Si coincide con la página actual, marcar como activo
            if (currentFileName === routeFileName || 
                (currentFileName === '' && routeFileName === 'index') ||
                (currentFileName === 'index' && routeFileName === 'index')) {
                item.classList.add('active');
            }
        }
    });
    
    // Caso especial: si estamos en la raíz y no hay ningún elemento activo, activar "Inicio"
    const hasActive = document.querySelector('.nav-item.active');
    if (!hasActive && (currentFileName === '' || currentFileName === 'index')) {
        const inicioItem = Array.from(navItems).find(item => 
            item.querySelector('span').textContent === 'Inicio'
        );
        if (inicioItem) {
            inicioItem.classList.add('active');
        }
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    setActiveNavItem();

    // Extra: para que solo busque el "contact form" en la pagina que corresponde, y no de error en otras paginas donde no existe
    const paginaActual = window.location.pathname;
    // Obtener el nombre del archivo actual
    const currentFileName = paginaActual.split('/').pop().replace('.html', '');
	
	if (currentFileName == "index") {
        // esta parte es la que ya habian puesto ustedes:
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
	}
});

