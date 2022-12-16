let btn = document.querySelector('.btnAtualizar')

btn.addEventListener('click', function() {

    fetch("https://apigenerator.dronahq.com/api/rhI-crB_/Filmes")
    .then(function(response) {
      let body = response.json();
      return body;
    })
    .then(function(data) {
      
    
      criarElemento(data)
    });
})

function criarElemento(json){
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
        pSinopse.appendChild(document.createTextNode("SINOPSE:  "+ element.overview))
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
    
    
       
       



