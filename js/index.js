
function encriptar() {
    let textoInput = document.getElementById("texto").value;
    let resultadoFrase = document.getElementById("resultado");
    let inputMensaje = document.getElementById("input");

    let diccionario = {
        'a': 'quelepasaalupita',
        'e': 'nose',
        'i': 'quelele',
        'o': 'uatuata',
        'u': 'lelehuhu' };

    let textoCifrado = textoInput.replace(/[aeiou]/gi, letra => diccionario[letra]);

    if (textoInput.length != 0){
        inputMensaje.textContent ="=)";
        resultadoFrase.textContent = "Texto encriptado con exito";
        document.getElementById("texto").value = textoCifrado;
        
    } else {
        resultadoFrase.textContent = "Ningun mensaje fue encontrado";
        inputMensaje.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        alert ("Debes ingresar algun texto");
        
    }

}

function desencriptar() {
    let textoInput = document.getElementById("texto").value;
    let diccionario = {
        'quelepasaalupita': 'a',
        'nose': 'e',
        'quelele': 'i',
        'uatuata': 'o',
        'lelehuhu': 'u'
    };

    let textoDesencriptado = textoInput.replace(/quelepasaalupita|nose|quelele|uatuata|lelehuhu/gi, letraEncriptada => diccionario[letraEncriptada]);

    if (textoInput.length != 0) {
        document.getElementById("texto").value = textoDesencriptado;
        resultado.textContent = "Texto desencriptado con éxito";
        inputMensaje.textContent = "=)";
    } else {
        resultado.textContent = "Ningún mensaje fue encontrado";
        inputMensaje.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}
