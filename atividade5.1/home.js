let btn = document.querySelector('.btnAtualizar')

btn.addEventListener('click', function () {

  buscarFilmes()

  // fetch("https://apigenerator.dronahq.com/api/rhI-crB_/Filmes")
  // .then(function(response) {
  //   let body = response.json();
  //   return body;
  // })
  // .then(function(data) {

  // });

})

async function buscarFilmes() {
  let result = await fetch('https://apigenerator.dronahq.com/api/rhI-crB_/Filmes')
  result = await result.json()

  criarElemento(result)
}

function criarElemento(json) {
  for (let index = 0; index < json.length; index++) {
    console.log(json)
    const element = json[index];

    // CRIANDO ELEMENTO HTML
    let div = document.createElement('div')
    let pTitulo = document.createElement('p')
    let pSinopse = document.createElement('p')
    let pGenero = document.createElement('p')
    let pNota = document.createElement('p')
    // ADICIONANDO UM TEXTO  NO PARAGRAFO
    pTitulo.appendChild(document.createTextNode("TÍTULO:  " + element.title))
    pSinopse.appendChild(document.createTextNode("SINOPSE:  " + element.overview))
    pGenero.appendChild(document.createTextNode("GÊNERO:  " + element.genre))
    pNota.appendChild(document.createTextNode("NOTA:  " + element.vote_average))
    // ADICIONANDO UM ELEMENTO
    div.appendChild(pTitulo)
    div.appendChild(pSinopse)
    div.appendChild(pGenero)
    div.appendChild(pNota)
    document.querySelector('.container').appendChild(div) //appendChild = adicionando um filho
  }
}

// FUNÇÃO 5

// let genres = [1, 2, 3, 4, 5, 6, 7, 8]
// buscarGenres(genres)

// async function buscarGenres(arrayGenres) {
//   let result = await fetch('https://apigenerator.dronahq.com/api/OR4A7wjz/genres')
//   result = await result.json()

//   let generos = []
//   for (let i = 0; i < result.length; i++) {
//     if(result[i].id === arrayGenres[i]){
//       generos.push(result[i].genre)
//     }
//   }
//   console.log(generos)
//   return generos
// }

// TERMINA AQUI

