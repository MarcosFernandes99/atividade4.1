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

// FUNÇÃO 5
addData()
function addData() {
  let input = {
    title: 'Velozes e Furiosos',
    overview: 'Filme de corrida,',
    genre: 'Ação',
    vote_average: 8

  }

  var myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(input)
  };

  var myRequest = new Request('https://apigenerator.dronahq.com/api/rhI-crB_/Filmes', myInit)

  fetch(myRequest)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data)
    });
}

// TERMINA AQUI


