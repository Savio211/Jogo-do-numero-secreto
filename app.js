let lista = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}
 function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
let tentativas = 1

function verificarChute(){ 
    let chute = document.querySelector('input').value;
    if (chute==numeroSecreto){
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        exibirTextoNaTela('h1','ACERTOU!!')
        exibirTextoNaTela('p',`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute>numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);

        }else {
            exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);
        }      
    limparCampo();
    }tentativas++ 
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista= lista.length;
    if (quantidadeDeNumerosNaLista == numeroLimite){
        lista = [];
    }
    if (lista.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        lista.push(numeroEscolhido);
        console.log(lista);
        return numeroEscolhido ;

    }
    
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}