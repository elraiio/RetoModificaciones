//declaramos las vaariables
const circulo = document.getElementById('circulo');
const texto = document.getElementsByClassName('texto');
const cambiarEstilo = document.getElementById('cambiar-estilo');

//Cambio de color
circulo.classList.toggle('rojo');
circulo.classList.toggle('azul');
circulo.classList.toggle('verde');


// cambiamos el texto
texto.setAttribute('style', 'font-size: 18px; color: #333;');

// Añadir y remover clases con toggle
texto.classList.toggle('negrita');
