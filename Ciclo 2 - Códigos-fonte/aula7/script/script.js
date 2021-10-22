
// 1. Crie uma função que verifique qual é o maior número entre dois parâmetros
// e tenha como saída uma impressão no console.log informando o resultado.


//Exercício 8
function verificarMaiorNum(num1, num2){

    //if
    //operadore
    if(num1 > num2){
        console.log("O número "+num1+" é maior que o número "+ num2);
    } else {
        console.log("O número "+num1+" é menor que o número "+ num2);
    }

}

//verificarMaiorNum(1000, 1000);

function teste(){
    alert("Estou na functioin teste");
    return nome;
}

//teste();

//teste();
//console.log( teste() );
//let msg = (nome)=> { return nome };
//console.log( msg("José") ) ;

// (function(produto, preco){
//     alert("O produto é "+ produto + " e o preço é de R$ " +preco);
// })("Biscoito", 2.35)// 2.35

let v1 = prompt("Digite o valor 1");
let v2 = prompt("Digite o valor 2");

const soma = (valor1, valor2)=>{
    let resultado = Number(valor1) /  Number(valor2);
    console.log(resultado);
}

soma(v1, v2);

