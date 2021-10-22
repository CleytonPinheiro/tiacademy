/*

1. Criar um array de uma lista de nomes com o mínimo de 5 elementos; 
2. Criar função que receberá: 
	→   3 parâmetros; um parâmetro será para enviar o array, o segundo 
    parâmetros será para enviar um novo nome para o array, que deverá ser 
    inserido na lista de nomes. O terceiro parâmetro será enviado um número inteiro, 
    que servirá de índice para que seja 
    impresso no console um determinado nome que está na lista  


A saída da função deverá ser: 
Quantidade de elementos do array…: 6
Você escolheu o índice 2 que é o elemento Mariana
A quantidade atual de elementos do array é de..: 7

*/

//criar um arrays
             // 0         1           2        3        4   
let nomes = ["Suelem", "Marcelo", "Raphel", "José", "Marcos"];

const coisaNomes = ( name, novoNome, index )=>{

    console.log("Quantidade de elementos do array...: ", name.length);
    console.log(`Você escolheu o indice ${index} que é o elemento ${name[index]}`);
    console.log(`O nome ${novoNome} foi inserido no array`);
    name.push(novoNome);
    console.log("A quantidade de elementos atual do array é de..: ", name.length);
}

 coisaNomes(nomes, "Marinei", 4);
 coisaNomes(nomes, "Dulceneia", 2);
coisaNomes(nomes, "Suelem", 3);

