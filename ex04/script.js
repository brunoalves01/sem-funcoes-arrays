let vetor1 = []; 
let vetor2 = []; 
let resultado = "Elementos em ambos os vetores:\n"; 
for (let i = 0; i < 5; i++) { 
    vetor1[i] = parseInt(prompt("Digite o elemento " + (i + 1) + " do vetor 1:")); // parseInt() -> converte o texto digitado em número inteiro | [i] -> salva na posição atual do vetor 1
} // Fecha o bloco do primeiro laço de repetição
for (let i = 0; i < 5; i++) { // for -> cria um segundo laço idêntico ao primeiro, controlando as repetições de 0 a 4
    vetor2[i] = parseInt(prompt("Digite o elemento " + (i + 1) + " do vetor 2:")); // parseInt() -> converte o texto em inteiro | [i] -> salva o número na posição atual do vetor 2
} // Fecha o bloco do segundo laço de repetição
for (let i = 0; i < 5; i++) { // for -> abre o laço principal que vai fixar e selecionar um elemento do vetor 1 por vez
    for (let j = 0; j < 5; j++) { // for -> abre um laço secundário (aninhado) que vai testar todos os elementos do vetor 2 contra o elemento fixado no primeiro laço
        if (vetor1[i] === vetor2[j] && resultado.indexOf(vetor1[i]) === -1) { // === -> checa igualdade | && -> operador "E" | .indexOf() === -1 -> garante que o número ainda não existe na string 'resultado' (evita duplicados)
            resultado += vetor1[i] + "\n"; // += -> adiciona e "gruda" o número encontrado no final do texto da variável 'resultado', pulando uma linha
        } // Fecha o bloco da estrutura condicional 'if'
    } // Fecha o bloco do laço secundário 'j'
} // Fecha o bloco do laço principal 'i'
if (resultado === "Elementos em ambos os vetores:\n") { // if/=== -> checa se o texto continua exatamente igual ao inicial (ou seja, se nenhuma interseção foi adicionada)
    alert("Nenhum elemento está presente em ambos os vetores."); // alert() -> exibe uma mensagem de aviso avisando que não houve nenhuma correspondência entre os vetores
} else { // else -> caso o texto da variável 'resultado' tenha sido modificado (encontrou elementos em comum)
    alert(resultado); // alert() -> exibe na tela a lista final com todos os números que estão presentes em ambos os vetores
} // Fecha o bloco da estrutura condicional 'if/else'