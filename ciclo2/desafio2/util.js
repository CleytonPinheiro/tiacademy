function resultadoCep(dadosCep) {
  for (let campo in dadosCep) {
    if (document.querySelector(`#${campo}`)) {
      document.querySelector(`#${campo}`).value = dadosCep[campo];
    }
  }
}

let getDadosCep = async function (cep) {
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    let dadosFetch = await fetch(url);

    let dadosJson = await dadosFetch.json();

    resultadoCep(dadosJson);
  } catch (error) {
    alert(error);
  }
};

export function buscarCep() {
  const btnBuscar = document.querySelector("#buscarCep");
  const CEP_ = document.querySelector("#Cep");

  btnBuscar.addEventListener("click", function () {
    getDadosCep(CEP_.value);
  });
}
