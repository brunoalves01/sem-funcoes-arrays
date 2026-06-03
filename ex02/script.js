let numeros = [];
let soma = 0; 

for (let i = 0; i < 8; i++) {
    numeros[i] = parseFloat(prompt("Digite os números reais a serem utilizados na média da sua sequência " + (i + 1) + ":")); // parseFloat(): Transforma o texto digitado em número decimal (real), permitindo cálculos matemáticos.
    soma += numeros[i]; // += (Acumulador): Pega o valor que já estava na variável 'soma' e adiciona o novo número em cima dele.
}

let media = soma / 8;
let resultado = "";

for (let i = 0; i < 8; i++) {
    if (numeros[i] > media) { // if/ > : Varre o vetor comparando cada gaveta individualmente para isolar apenas os valores maiores que a média.
        resultado += numeros[i] + "\n";
    }
}

if (resultado === "") { // === (Igualdade Estrita): Checa se o texto continua totalmente vazio, ou seja, se nenhum número passou na condição do 'if' anterior.
    alert("Nenhum número ficou acima da média (" + media + ").");
} else {
    alert("Média: " + media + "\n\nValores acima da média:\n" + resultado);
}