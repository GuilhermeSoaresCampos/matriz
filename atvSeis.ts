/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.*/


console.clear();
let teclado = require('prompt-sync')();

let minhaMatriz: number[][] = [];

for (let z = 0; z < 3; z++) {
    minhaMatriz[z] = [];
    for (let x = 0; x < 3; x++) {
        let numero: number = -1;
        for (; numero < 0 || numero > 9;) {
            numero = parseInt(teclado(`Digite um número entre 0 e 9 para o endereço [${z}, ${x}] da matriz: `));
            if (numero < 0 || numero > 9) {
                console.log("Entrada inválida! Por favor, insira um número entre 0 e 9.");
            }
        }
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);




