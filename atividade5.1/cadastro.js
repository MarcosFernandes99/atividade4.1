// FUNÇÃO 4
// fetch("https://apigenerator.dronahq.com/api/rhI-crB_/Filmes")
//   .then(function (response) {
//     let body = response.json();
//     return body;
//   })
//   .then(function (data) {

//     exibirFilmes(data)
//   });

// function exibirFilmes(json) {
//   for (let index = 0; index < json.length; index++) {
//     console.log(json[index])

//   }
// }
// TERMINA AQUI

// FUNÇÃO 5
// addData()
// function addData() {
//   let input = {
//     title: 'Velozes e Furiosos',
//     overview: 'Filme de corrida,',
//     genre: 'Ação',
//     vote_average: 8

//   }

//   var myInit = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(input)
//   };

//   var myRequest = new Request('https://apigenerator.dronahq.com/api/rhI-crB_/Filmes', myInit)

//   fetch(myRequest)
//     .then(function (response) {
//       return response.json();
//     })

//     .then(function (data) {
//       console.log(data)
//     });
// }
// TERMINA AQUI

let button = document.querySelector(".btn")

button.addEventListener('click', function (e) {
  e.preventDefault()

  let titulo = document.querySelector('#titulo');
  let sinopse = document.querySelector('#sinopse');
  let genero = document.querySelector('#genero');
  let nota = document.querySelector('#nota');

  let input = {
    title: titulo.value,
    overview: sinopse.value,
    genre: genero.value,
    vote_average: nota.value
  }

  var myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(input)
  };
  console.log(input)
  var myRequest = new Request('https://apigenerator.dronahq.com/api/rhI-crB_/Filmes', myInit)

  fetch(myRequest)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data)
     
    });
})












