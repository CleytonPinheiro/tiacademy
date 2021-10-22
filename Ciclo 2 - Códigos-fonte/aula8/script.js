let str = `Qualquer conteudo!`; 

let str2 = `Uma outra string ${str}`;

// let str = "Qualquer conteúdo ";
// let str2 = 'Uma outra string ' + str;

// console.log(str2);


//Arrays uma coleção de dados.

// O array é constituido por elementos
// const frutas = ["Uva", "Banana","Laranja","Melancia"]; // 4

// let euGosto = `Eu gosto de ${frutas[2]}`; 

// //console.log(euGosto); // uva

// console.log(frutas); // uva
// console.log(frutas[1]); // Banana
// console.log(frutas[2]); // laranja
// console.log(frutas[3]); // melancia

const Pessoa = [
  "José", // 0
  23,     // 1
  "Solteiro", // 2
  "Bola", // 3
  1.70,  // 4
  cores = ["azul","preto", "vermelho","salmão", "ocre"] // 5
];

let key = 5;

key++; //4

console.log('Marcelo'[0], 'Marcelo'[1]  );
console.log(Pessoa[5][key]); // array biimensional

// (function(p){
//     const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou 
//     ${Pessoa[2]} eu também gosto de jogar ${Pessoa[3]}. Minha altura é de ${Pessoa[4]}`;
//     document.write(jose);
// })(Pessoa)

