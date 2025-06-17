/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.*/

console.clear();
let teclado = require(`Prompt-sync`)();

let minhaMatriz: number[][] = [];

for (let z = 0; z < 3; z++) {
    minhaMatriz[z] = [];
    for (let x = 0; x < 3; x++) {

        let numero: number = Math.floor(Math.random() * 10);

        minhaMatriz[z][x] = numero;
    }

}
console.log(minhaMatriz);