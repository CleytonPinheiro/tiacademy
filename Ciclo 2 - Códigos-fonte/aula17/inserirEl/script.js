window.onload = function(){

//produto -> text
//cadastrar -> botão
//listaDeProdutos -> ul

    const cxProduto = document.querySelector("#produto");
    const btnCadastrar = document.querySelector("#cadastrar");
    const lista = document.querySelector("#listaDeProdutos")

    btnCadastrar.addEventListener('click',function(){

        let li = document.createElement('li');
            lista.appendChild(li).setAttribute( 'class' , 'listaDefutas');
            lista.appendChild(li).textContent =  cxProduto.value;



    })
}