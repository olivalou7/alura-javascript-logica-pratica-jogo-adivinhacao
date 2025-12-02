let numero_secreto = parseInt(Math.random() * 10 + 1);
console.log(numero_secreto)

function exibir_mensagem_na_tela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibir_mensagem_na_tela(".mensagem-titulo", "Jogo de Adivinhação");
exibir_mensagem_na_tela(".mensagem-paragrafo", "Informe um número");

function verificar_acerto() {
    let chute = document.querySelector('.chute').value;

    if (chute == numero_secreto) {
        exibir_mensagem_na_tela(".mensagem-titulo", "Acertou!");
        exibir_mensagem_na_tela(".mensagem-paragrafo", "Você conseguiu em 'x' tentativas");
    } else {
        if (chute > numero_secreto) {
            exibir_mensagem_na_tela(".mensagem-paragrafo", "O número secreto é menor!");
        } else {
            exibir_mensagem_na_tela(".mensagem-paragrafo", "O número secreto é maior!");;
        }
    }
}