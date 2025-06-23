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