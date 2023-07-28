// Obtener referencias a los elementos HTML
var botonEncriptar = document.getElementById("encriptar");
var botonDesencriptar = document.getElementById("desencriptar");
var inputMensaje = document.getElementById("text-area");
var resultado = document.getElementById("input-cuadro");

// Agregar la función de encriptar al botón de encriptar
botonEncriptar.addEventListener("click", function() {

var mensaje = inputMensaje.value;
var mensajeEncriptado = encriptar(text-area);
resultado.textContent = "Texto encriptado: " + mensajeEncriptado;
}
)

// Agregar la función de desencriptar al botón de desencriptar
botonDesencriptar.addEventListener("click", function() {
  var mensajeEncriptado = inputMensaje.value;
  var mensajeDesencriptado = desencriptar(input-cuadro);
  resultado.textContent = "Texto desencriptado: " + mensajeDesencriptado;
}
)

// Función para encriptar un mensaje
function encriptar(text-area) {

  for (var i = 0; i < text-area.length; i++) {
    var codigoAscii = text-area.charCodeAt(i);
    var nuevoCodigoAscii = codigoAscii + 1; // Por ejemplo, se suma 1 al código ASCII
    var nuevoCaracter = String.fromCharCode(nuevoCodigoAscii);
    text-area + = nuevoCaracter;
  return text-area;
}
}
// Función para desencriptar un mensaje
function desencriptar(mensajeEncriptado) {
  // Lógica de desencriptación
  // ...
  return mensajeDesencriptado;
}

