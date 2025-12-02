const maximo_numeros_jogo = 10;

function gerar_numero_aleatorio() {
    return parseInt(Math.random() * maximo_numeros_jogo + 1);
    //console.log(numero_secreto)
}

function exibir_mensagem_na_tela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibir_mensagem_inicial() {
    exibir_mensagem_na_tela(".mensagem-titulo", "Jogo de Adivinhação");
    exibir_mensagem_na_tela(".mensagem-paragrafo", "Informe um número");
}

exibir_mensagem_inicial();

let numero_secreto = gerar_numero_aleatorio();

let quantidade_tentativas = 1;

function verificar_acerto() {
    let chute = document.querySelector('.chute').value;

    let validacao_entrada_usuario = chute >= 1 && chute <= maximo_numeros_jogo;

    let palavra_tentativa = quantidade_tentativas > 1 ? "tentativas" : "tentativa";
    let mensagem_vitoria = `Você conseguiu em ${quantidade_tentativas} ${palavra_tentativa}`;

    if (!validacao_entrada_usuario) {
        alert("Informe um número de 1 a 10");
        return;
    } else {
        if (chute == numero_secreto) {
            exibir_mensagem_na_tela(".mensagem-titulo", "Acertou!");
            exibir_mensagem_na_tela(".mensagem-paragrafo", mensagem_vitoria);
            document.querySelector('#reiniciar').removeAttribute('disabled');
            document.querySelector("button").setAttribute('disabled', true);
    } else {
        if (chute > numero_secreto) {
            exibir_mensagem_na_tela(".mensagem-paragrafo", "O número secreto é menor!");
        } else {
            exibir_mensagem_na_tela(".mensagem-paragrafo", "O número secreto é maior!");
        }
    }
    }
    quantidade_tentativas++;
}

function reiniciar_jogo() {
    exibir_mensagem_inicial();
    numero_secreto = gerar_numero_aleatorio();
    tentativas = 1;
    document.querySelector('input').value = '';
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    document.querySelector('button').removeAttribute('disabled');
}