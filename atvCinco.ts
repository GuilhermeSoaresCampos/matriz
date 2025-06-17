/*5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.*/

console.clear();
let teclado = require(`Prompt-sync`)();

let minhaMatriz: number[][] = [];

for (let z = 0; z < 3; z++) {
    minhaMatriz[z] = [];
    for (let x = 0; x < 3; x++) {

        let numero: number = parseInt(teclado(`Digite o nome que vai estar no endereço [${z}, ${x}] da matriz:`));


        minhaMatriz[z][x] = numero;
    }

}
console.log(minhaMatriz);