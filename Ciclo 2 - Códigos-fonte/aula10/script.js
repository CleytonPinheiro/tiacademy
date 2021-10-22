//match() O método match procura uma palavra em uma string.
// g/i/m

let nome = "Marcelo da Silva";


//console.log(  nome.match('M')   );

//O método serach() procura pela ocorrência e retornando a posição na cadeia da string

// console.log(  nome.search(/m/i)   );
// console.log(nome[0]);

//replace() Este método substitui uma string por outra, simples assim, ele pesquisa

// let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus 
// aut optio tenetur, expedita exercitationem architecto pariatur, adipisci`;

// let strOutra = str.replace(/sit/gi,'não');

// console.log(strOutra);


//O método localeCompare( ) compara  efetua a comparação entre duas strings

// let gato = "gato";
// let outroGato = "gato";

// console.log(gato.localeCompare(/Gato/gi));

//toString() O uso da toString irá converter um valor qualquer em uma um srtring.

// let num = Number('10');

// console.log(num.toString());

//toLowerCase() Faz a conversão de uma string inteira para caracteres minúsculos (caixa baixa)

// let str = `Lorem ipsum dolor SIT amet consectetur adipisicing elit. Necessitatibus 
// aut optio tenetur, expedita exercitationem architecto pariatur, adipisci`;

// console.log(str.toLowerCase());

// let gato = "gato";
// let outroGato = "GATO";

// let cat1 = gato.toLowerCase();
// let cat2 = outroGato.toLowerCase();

//  console.log(cat1.localeCompare(cat2));


//toUpperCase() Faz a conversão de uma string inteira para caracteres maiúsculos (caixa alta). 

//  let str = `Lorem ipsum dolor SIT amet consectetur adipisicing elit. Necessitatibus 
//  aut optio tenetur, expedita exercitationem architecto pariatur, adipisci`;

//  console.log( str.toUpperCase());


//trim() Faz a remoção de espaços antes e depois da string especificada.
//let str1 = "    Lorem ipsum dolor SIT amet consectetur adipisicing elit. Necessitatibus aut optio tenetur, expedita exercitationem architecto pariatur, adipisci    ";

//document.write(str1.trim() +"<br>");

// console.log(str1.trim());

// let str2 = `     Lorem ipsum dolor SIT amet consectetur adipisicing elit. Necessitatibus 
// aut optio tenetur, expedita exercitationem architecto pariatur, adipisci     `;

// console.log(str2);




//NaN
//Quando uma string for passada para Number( ),  parseInt ou parseFloat) e 
//não consiga efetuar a conversão será retornando NaN (Not as Number). 
//isNaN( ).
 
// let num = Number('1o');
// console.log(isNaN('8i') )

// if( isNaN(num) ){ 
//    console.log("Isto não é um número")
// } else {
//     console.log('Isto é um numero')   
// }



//toFixed( ) A função “toFixed( )” analisa um valor flutuante e retorna uma 
//STRING conforme o parâmetro de casas

let valor = 2.456;

console.log(valor.toFixed(1));


//O método toLocaleString() irá retornar uma string com 
//uma representação da moeda definida como no parâmetro currency. 
//toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

console.log(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))




