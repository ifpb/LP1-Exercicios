function getJSON(url) {
    const promise = new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = () => {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.onerror = () => {
        reject(Error('Error fetching data.'));
      };
      request.send();
    });
    return promise;
  }
  
  
  

function consultarCep() {
    const cepForm = document.getElementById('cep').value;
(async () => {
    getJSON(`https://viacep.com.br/ws/${cepForm}/json/`).then( json => {
        const cep = JSON.parse(json);
        console.log(cep.localidade); 
        document.getElementById('resultado').innerHTML = `Cidade: ${cep.localidade}, Bairro: ${cep.bairro}`;
    }).catch( err => {
        console.log(err);
    });
    })();

}
  