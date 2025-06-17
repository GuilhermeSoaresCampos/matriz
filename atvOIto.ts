/*8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.*/


console.clear();
let teclado = require(`Prompt-sync`)();

let minhaMatriz: number[][] = [];
let numeroMaior: number = 0;
let linha: number = 0;
let coluna: number = 0;




for (let z = 0; z < 3; z++) {
    minhaMatriz[z] = [];
    for (let x = 0; x < 3; x++) {

        let numero: number = Math.floor(Math.random() * 21);

        minhaMatriz[z][x] = numero;

        if (numero > numeroMaior) {
            numeroMaior = numero;
            linha = z;
            coluna = x;
            
        }
    }

}
console.log(`O maior número da matriz é ${numeroMaior} e está na linha ${linha} e coluna ${coluna}`);
console.log(minhaMatriz);
