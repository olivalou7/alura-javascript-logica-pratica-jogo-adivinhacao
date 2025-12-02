let numero_secreto = parseInt(Math.random() * 10 + 1);
console.log(numero_secreto)

function exibir_mensagem_na_tela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibir_mensagem_na_tela(".mensagem-titulo", "Jogo de Adivinhação");
exibir_mensagem_na_tela(".mensagem-paragrafo", "Informe um número");

let quantidade_tentativas = 1;

function verificar_acerto() {
    let chute = document.querySelector('.chute').value;

    let validacao_entrada_usuario = chute >= 1 && chute <= 10;

    let palavra_tentativa = quantidade_tentativas > 1 ? "tentativas" : "tentativa";
    let mensagem_vitoria = `Você conseguiu em ${quantidade_tentativas} ${palavra_tentativa}`;

    if (!validacao_entrada_usuario) {
        alert("Informe um número de 1 a 10");
        return;
    } else {
        if (chute == numero_secreto) {
            exibir_mensagem_na_tela(".mensagem-titulo", "Acertou!");
            exibir_mensagem_na_tela(".mensagem-paragrafo", mensagem_vitoria);
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