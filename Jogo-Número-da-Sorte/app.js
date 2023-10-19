alert('Boas vindas ao jogo do número secreto!');
let numeroVariavel = 1000;
let numeroSecreto = parseInt(Math.random() * numeroVariavel + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto não for igual a número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroVariavel}`);
    // se o chute for igual ao número secreto...
    {if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que ${chute}`);
        } else 
            alert(`O númeor secreto é maior do que ${chute}`);
    }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso aí!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);