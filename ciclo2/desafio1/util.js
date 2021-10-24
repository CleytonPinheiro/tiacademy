let frutas = [
  { descricao: "Biscoito Mirabel", preco: 2.2 },
  { descricao: "Marmelada", preco: 3.2 },
  { descricao: "Abacate", preco: 4.2 },
  { descricao: "Pamonha", preco: 1.8 },
  { descricao: "Amora", preco: 1.81 },
];

const ulFrutas = document.querySelector("#listaFrutas");
const somaTotal = document.querySelector("#mostraTotal");
const ulCesta = document.querySelector("#cestaDoCliente");

export function listaFrutas() {
  let valorTotal = 0;

  frutas.forEach((fruta) => {
    let liFrutas = document.createElement("li");

    ulFrutas.appendChild(liFrutas).setAttribute("id", fruta.descricao);

    ulFrutas.appendChild(liFrutas).textContent = fruta.descricao.concat(
      " " + fruta.preco
    );

    liFrutas.addEventListener("click", function () {
      if (!ulCesta.textContent.includes(fruta.descricao)) {
        removeListaProduto(fruta.descricao);
        adicionarCesta(fruta.descricao, fruta.preco);
        valorTotal += fruta.preco;
        somaTotal.value = Number(valorTotal.toFixed(2));
      }
    });
  });
}

function removeListaProduto(fruta) {
  console.log(document.getElementById(fruta).remove());
}
function adicionarCesta(fruta, preco) {
  let liCesta = document.createElement("li");

  ulCesta.appendChild(liCesta).textContent = fruta.concat(" " + preco);
}
