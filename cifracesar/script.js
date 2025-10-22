const campoCifra = document.getElementById('campo_cifra');
const campoDecifra = document.getElementById('resultado_cifra');
const campoRotacoes = document.getElementById('campo_rotacoes');
const resultadoCifra = document.getElementById('resultado_cifra');
const resultadoDecifra = document.getElementById('campo_cifra');
const botaoCifrar = document.getElementById('botao_cifrar');
const botaoDecifrar = document.getElementById('botao_decifrar');
const botaoLimpar = document.getElementById('botao_limpar');
const resultadoAlerta = document.getElementById('resultado_alerta');

setInterval(atualizarRelogio, 1000);

function cifrar(texto, rotacoes) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let novaPosicao = texto.charCodeAt(i);
        if (novaPosicao >= 48 && novaPosicao <= 57) {
            novaPosicao = (novaPosicao - 48 + rotacoes) % 10 + 48;
        } else if (65 >= novaPosicao && novaPosicao <= 90) {
            novaPosicao = (novaPosicao - 65 + rotacoes) % 26 + 65;
        } else if (novaPosicao >= 97 && novaPosicao <= 122) {
            novaPosicao = (novaPosicao - 97 + rotacoes) % 26 + 97;
        }
        resultado += String.fromCharCode(novaPosicao);
    }
    return resultado;
}

function decifrar(texto, rotacoes) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let novaPosicao = texto.charCodeAt(i);
        if (novaPosicao >= 48 && novaPosicao <= 57) {
            novaPosicao = (novaPosicao - 48 - rotacoes + 10) % 10 + 48;
        } else if (65 >= novaPosicao && novaPosicao <= 90) {
            novaPosicao = (novaPosicao - 65 - rotacoes + 26) % 26 + 65;
        } else if (novaPosicao >= 97 && novaPosicao <= 122) {
            novaPosicao = (novaPosicao - 97 - rotacoes + 26) % 26 + 97;
        }
        resultado += String.fromCharCode(novaPosicao);
    }
    return resultado;
}

botaoCifrar.addEventListener('click', function() {
    if (campoRotacoes.value > 26 || campoRotacoes.value < 0) {
        resultadoAlerta.textContent = 'Insira uma chave válida!';
        return
    }
        const texto = campoCifra.value;
        const rotacoes = parseInt(campoRotacoes.value);
        if (isNaN(rotacoes)) {
            resultadoAlerta.textContent = 'Insira uma chave válida!';
            return;
        }
        const textoCifrado = cifrar(texto, rotacoes);
        resultadoCifra.textContent = textoCifrado;
});

botaoDecifrar.addEventListener('click', function() {
    if (campoRotacoes.value > 26 || campoRotacoes.value < 0) {
        resultadoAlerta.textContent = 'Insira uma chave válida!';
        return
    }
        const texto = campoCifra.value;
        const rotacoes = parseInt(campoRotacoes.value);
        if (isNaN(rotacoes)) {
            resultadoAlerta.textContent = 'Insira uma chave válida!';
            return;
        }
        const textoDecifrado = decifrar(texto, rotacoes);
        resultadoCifra.textContent = textoDecifrado;
});

botaoLimpar.addEventListener('click', function() {    
    window.location.replace(window.location.href); 
});

function atualizarRelogio() {
    const agora = new Date();
    let dia = agora.getDate().toString().padStart(2, '0');
    let mes = (agora.getMonth() + 1).toString().padStart(2, '0');
    let ano = agora.getFullYear();
    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    document.getElementById('data').textContent = `${dia}/${mes}/${ano}`;
    document.getElementById('horario').textContent = `${horas}:${minutos}`;
}