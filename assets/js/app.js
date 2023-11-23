document.addEventListener('DOMContentLoaded', function () {
    // Obtener el interruptor de modo oscuro/claro y el cuerpo del documento
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.getElementById('body');

    // Verificar si hay una preferencia guardada en localStorage
    const darkModePreference = localStorage.getItem('darkMode');

    // Aplicar el modo oscuro si la preferencia está almacenada
    if (darkModePreference === 'enabled') {
        body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
    }

    // Agregar un event listener para cambiar el modo oscuro/claro
    darkModeSwitch.addEventListener('change', function () {
        if (darkModeSwitch.checked) {
            // Habilitar el modo oscuro
            body.classList.add('dark-mode');
            // Almacenar la preferencia en localStorage
            localStorage.setItem('darkMode', 'enabled');
        } else {
            // Deshabilitar el modo oscuro
            body.classList.remove('dark-mode');
            // Almacenar la preferencia en localStorage
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});