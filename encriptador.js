let btn_encriptar = document.querySelector('.btn-encriptar');
let btn_desencriptar = document.querySelector('.btn-desencriptar');
let btn_copiar = document.querySelector('.btn-copiar');
let divPerosna = document.querySelector('.person-image');
let divTexto = document.querySelector('.output-text');
let userOutput = document.querySelector('.user-output')

btn_encriptar.onclick = encriptar;
btn_desencriptar.onclick = desencriptar;

function encriptar() {
    ocultarDiv();
    let area = obtenerInput();
    userOutput.textContent = encriptarTexto(area);
}

function desencriptar() {
    ocultarDiv();
    let area = obtenerInput();
    userOutput.textContent = desencriptarTexto(area);
}

function obtenerInput() {
    let userArea = document.querySelector(".input-area");
    return userArea.value;
}

function ocultarDiv() {
    divPerosna.classList.add('ocultar');
    divTexto.classList.add('ocultar')
}

function encriptarTexto(txt) {
    let texto = txt;
    let textoEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a'){
            textoEncriptado = textoEncriptado + 'ai';
        }
        else if (texto[i] == 'e'){
            textoEncriptado = textoEncriptado + 'enter';
        }
        else if (texto[i] == 'i'){
            textoEncriptado = textoEncriptado + 'imes';
        }
        else if (texto[i] == 'o'){
            textoEncriptado = textoEncriptado + 'ober';
        }
        else if (texto[i] == 'u'){
            textoEncriptado = textoEncriptado + 'ufat';
        } else {
            textoEncriptado = textoEncriptado + texto[i];
        }
    }

    return textoEncriptado;
}

function desencriptarTexto(txt) {
    let texto = txt;
    let textoDesencriptado = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a'){
            textoDesencriptado = textoDesencriptado + 'a';
            i++;
        }
        else if (texto[i] == 'e'){
            textoDesencriptado = textoDesencriptado + 'e';
            i = i + 4;
        }
        else if (texto[i] == 'i'){
            textoDesencriptado = textoDesencriptado + 'i';
            i = i+3;
        }
        else if (texto[i] == 'o'){
            textoDesencriptado = textoDesencriptado + 'o';
            i = i+3;
        }
        else if (texto[i] == 'u'){
            textoDesencriptado = textoDesencriptado + 'u';
            i = i+3
        } else {
            textoDesencriptado = textoDesencriptado + texto[i];
        }
    }

    return textoDesencriptado;
}


btn_copiar.addEventListener('click', () => {
    copiarTexto();
    alert('Texto copiado!')
})

function copiarTexto() {
    let texto = document.querySelector('.user-output');
    let inputFalso = document.createElement('input');

    inputFalso.setAttribute('value', texto.innerHTML);
    document.body.appendChild(inputFalso);

    inputFalso.select();
    document.execCommand('copy');
    document.body.removeChild(inputFalso);
}