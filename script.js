const textArea = document.querySelector(".textArea");
const textAreaMensaje = document.querySelector(".textAreaMennsaje");

function btnEncpitar(){
    const textoEcripatdo = encriptar(textArea.value);
    textAreaMensaje.value = textoEcripatdo;
    textArea.value = "";
}

function btndesencpitar(){
    const textoDesencripatdo = desencriptar(textAreaMensaje.value);
    textArea.value = textoDesencripatdo;
    textAreaMensaje.value = "";
}

function encriptar(texto){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if(texto.includes(matriz[i][0])){
            texto = texto.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return texto;
}

function desencriptar(texto){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if(texto.includes(matriz[i][1])){
            texto = texto.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return texto;
}

