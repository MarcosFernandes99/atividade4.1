// FUNÇÃO 4
  fetch("https://apigenerator.dronahq.com/api/rhI-crB_/Filmes")
    .then(function (response) {
      let body = response.json();
      return body;
    })
    .then(function (data) {
     
      exibirFilmes(data)
    });

function exibirFilmes(json) {
  for (let index = 0; index < json.length; index++) {
    console.log(json[index])
  
  }
}
// TERMINA AQUI