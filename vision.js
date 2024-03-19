document.getElementById("cambiarColor").addEventListener("click", function() {
    // Generar un color aleatorio para el fondo
    var colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Cambiar el color de fondo de la página
    document.body.style.backgroundColor = colorAleatorio;
  });

  document.getElementById("cambiarTamaño").addEventListener("click", function() {
    // Genera un tamaño de fuente aleatorio entre 12px y 36px
    var nuevoTamaño = Math.floor(Math.random() * 25) + 12;
    // Selecciona el párrafo con el id "texto" y cambia su tamaño de fuente
    document.getElementById("texto").style.fontSize = nuevoTamaño + "px";
  });