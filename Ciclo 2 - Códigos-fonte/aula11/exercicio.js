/*

1. Crie uma função que: 
a) Conte quantos carácteres uma palavra possui
b) Converta esta mesma palavra para MAIÚSCULA 
c) Imprima somente a 3º letra desta palavra
d) Troque esta mesma letra da palavra pela letra “X”

Exemplo da saída da função: 
Esta palavra tem 7 carácteres
A palavra marcelo ficou MARCELO
A letra  é o 3º carácter da palavra MARCELO
MARCELO ficou MAXCELO 

*/

let palavra = 'Dulcineia';

(function(){
 
  document.write(`Esta palavra tem ${palavra.length} caracteres <br>`);
  document.write(`Esta palavra  ${palavra} ficou ${palavra.toUpperCase()} <br>`);
  document.write(`A letra '${palavra[2]}' é o 3º carácter <br>`);
  document.write(`${palavra} ficou ${palavra.replace(palavra[2], 'X')}`);

})(palavra)