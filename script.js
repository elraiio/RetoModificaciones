document.addEventListener("DOMContentLoaded", function() {
    const circulo = document.getElementById("circulo");
    const cambiarEstilo = document.getElementById("cambiar-estilo");

    cambiarEstilo.addEventListener("click", function() {
        cambiarEstiloCirculo();
    });

    function cambiarEstiloCirculo() {
        // Obtener las clases actuales del círculo
        const clasesActuales = circulo.classList;

        // Verificar las clases actuales y cambiar a la siguiente clase de color
        if (clasesActuales.contains("rojo")) {
            circulo.className = "azul";
        } else if (clasesActuales.contains("azul")) {
            circulo.className = "verde";
        } else {
            circulo.className = "rojo";
        }
    }
});
