
function extrairVogais(nome) {
    
    const nomeMinusculo = nome.toLowerCase();
    const vogais = "aeiou";

    const resultado = [];

     nomeMinusculo.split('').forEach(caractere => {
        // Verifica se o caractere é uma vogal
        if (vogais.includes(caractere)) {
            resultado.push(caractere); // Adiciona a vogal ao array
        }
    });

    return resultado;
}

// Exemplo de uso:
const nome = "Abnael lima";
console.log(extrairVogais(nome)); 