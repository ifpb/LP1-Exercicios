async function getJSON(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

function consultarCep() {
    const cepForm = document.getElementById('cep').value;
(async () => {
    const cep = await getJSON(`https://viacep.com.br/ws/${cepForm}/json/`);
    console.log(cep.localidade); //=> São Paulo
    document.getElementById('resultado').innerHTML = `Cidade: ${cep.localidade}, Bairro: ${cep.bairro}`;
    })();
}
  