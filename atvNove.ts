/*9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.*/

console.clear();
let teclado = require(`Prompt-sync`)();
let soma: number = 0;
let minhaMatriz: number[][] = [];

for (let z = 0; z < 6; z++) {
    minhaMatriz[z] = [];
    for (let x = 0; x < 6; x++) {

        let numero: number = parseInt(teclado(`Digite o nome que vai estar no endereço [${z}, ${x}] da matriz:`));

        if (x % 2 == 0) {
            soma += numero;
        }

        minhaMatriz[z][x] = numero;
    }

}
console.log(minhaMatriz);

console.log(`A soma dos elementos das colunas pares da matriz é: ${soma}`);
