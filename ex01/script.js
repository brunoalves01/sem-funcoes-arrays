let nomes = [];

// for -> laço de repetição | let i = 0 -> início | i < 7 -> teste lógico | i++ -> soma 1 a cada volta
for (let i = 0; i < 7; i++) {
    // prompt() -> comando que abre a caixa de entrada | [i] -> grava o dado direto no índice atual do vetor
    nomes[i] = prompt("Digite o nome da pessoa " + (i + 1) + ":");
}   

// let -> cria a variável | "" -> define o texto inicial | \n -> caractere especial para quebrar linha (Enter)
let listagemInversa = "Nomes na ordem inversa:\n";

// for -> laço de repetição | let i = 6 -> começa no último índice | i >= 0 -> vai até o primeiro | i-- -> subtrai 1
for (let i = 6; i >= 0; i--) {
    // += -> operador que acumula/gruda o texto | [i] -> acessa a posição do vetor | \n -> pula linha no texto
    listagemInversa += nomes[i] + "\n";
}

// alert() -> comando que exibe uma caixa de aviso na tela do usuário
alert(listagemInversa);
