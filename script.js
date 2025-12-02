let numero_secreto = parseInt(Math.random() * 10 + 1);
console.log(numero_secreto)

function verificar_acerto() {
    let chute = document.querySelector('.chute').value;

    if (chute == numero_secreto) {
        document.querySelector('.mensagem-titulo').innerHTML = "Acertou!";
        document.querySelector('.mensagem-paragrafo').innerHTML = "Você conseguiu em 'x' tentativas";
    } else {
        if (chute > numero_secreto) {
            document.querySelector('.mensagem-paragrafo').innerHTML = "O número secreto é menor!";
        } else {
            document.querySelector('.mensagem-paragrafo').innerHTML = "O número secreto é maior!";
        }
    }
}