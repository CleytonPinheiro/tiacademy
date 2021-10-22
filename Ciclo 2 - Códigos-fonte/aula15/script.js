/*

Crie uma função que receba um parâmetro que receba um valor entre 1 e 10 e efetue a tabuada. 

a) A função deverá verificar se o parâmetro é um número
b) A função deverá verificar se o parâmetro está entre 1 e 10 
c) O resultado sairá no console 

*/


// let m = false;

// //console.log( typeof m );

// if( typeof m === 'number' ){
//     console.log(`O dado informato é um number: ${m}` );

// }  else {
//     console.log(`O dado informato não é um number: ${m} : ${typeof m}` );
    
// }
 
window.onload=function(){
    //alert("Olá Povo do JS");

    // const botao = document.getElementById('btn');
    // const txtBox = document.querySelector("#txtBox");
    // const caixa  = document.querySelector("#caixa");

    // botao.addEventListener('click',function(){
    //    caixa.innerHTML += ' '+txtBox.value + ' '; 
    // })


    function tabuada(numero){

        let tabuada=0; 
        if( typeof numero !== 'number' ){
            alert("Digite um valor numérico valido");
        } else {
            if( numero < 1 || numero > 10  ){
                alert("Digite um valor entre 1 e 10")
            } else {
                console.log(`Tabulada do ${numero}`); 
              while(tabuada <= 10){
                
                console.log(`${numero} x ${tabuada} = ${(numero * tabuada)}` );
                tabuada++;
              }    

            }
        }


    }

    //tabuada('');





}// fim do onload

