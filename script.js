const inputTexto = document.querySelector("#input-texto");
const divMensaje = document.querySelector("#mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    divMensaje.value = textoEncriptado;
    aparece();
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    divMensaje.value = textoDesencriptado;
    aparece();
}

function encriptar(stringEncriptado) { //recibe encriptado
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) { //includes verifica si en la posicion 0 esta i 
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) //en la primera busca y segunda remplaza
        }

    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado) { //recibe encriptado
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) { //includes verifica si en la posicion 0 esta i 
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) //en la primera busca y segunda remplaza
        }

    }
    return stringDesencriptado;
}

function copiar(mensaje) {
    var mensaje = document.querySelector('#mensaje');
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}

function aparece() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("div-aparece").style.display = 'block';
}