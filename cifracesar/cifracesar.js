const campoCifra = document.getElementById('campo_mensagem');
const campoDecifra = document.getElementById('resultado_mensagem');
const campoRotacoes = document.getElementById('campo_rotacoes');
const resultadoCifra = document.getElementById('resultado_mensagem');
const resultadoDecifra = document.getElementById('campo_cifra');
const botaoCifrar = document.getElementById('botao_cifrar');
const botaoDecifrar = document.getElementById('botao_decifrar');
const botaoLimpar = document.getElementById('botao_limpar');

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
    const texto = campoCifra.value;
    const rotacoes = parseInt(campoRotacoes.value);

    if (rotacoes >= 26 || rotacoes <= 0) {
        resultadoCifra.textContent = 'Chave inválida! Digite um valor entre 1 e 25.';
        return
    } else if (isNaN(rotacoes)) {
        resultadoCifra.textContent = 'Chave digitada não é um número! Digite um valor entre 1 e 26.';
        return;
    }    
    const textoCifrado = cifrar(texto, rotacoes);
    resultadoCifra.textContent = textoCifrado;
});

botaoDecifrar.addEventListener('click', function() {
    const texto = campoCifra.value;
    const rotacoes = parseInt(campoRotacoes.value);

    if (rotacoes >= 26 || rotacoes <= 0) {
        resultadoCifra.textContent = 'Chave inválida! Digite um valor entre 1 e 26.';
        return
    } else if (isNaN(rotacoes)) {
        resultadoCifra.textContent = 'Chave digitada não é um número! Digite um valor entre 1 e 26.';
        return;
    }
    const textoDecifrado = decifrar(texto, rotacoes);
    resultadoCifra.textContent = textoDecifrado;
});

botaoLimpar.addEventListener('click', function() {    
    window.location.reload(true);
});