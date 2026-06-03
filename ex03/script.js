let nomes = [];
let idades = [];
let resultado = "Pessoas menores de idade:\n";
for (let i = 0; i < 9; i++) {
    nomes[i] = prompt("Digite o nome da pessoa " + (i + 1) + ":");
    idades[i] = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    if (idades[i] < 18) {
        resultado += nomes[i] + " - " + idades[i] + " anos\n";
    }
}

if (resultado === "Pessoas menores de idade:\n") {
    alert("Nenhuma pessoa é menor de idade.");
} else {
    alert(resultado);
}