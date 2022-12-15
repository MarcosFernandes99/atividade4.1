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
        // ADICIONANDO UM TEXTO  NA LISTA
        div.appendChild(document.createTextNode(['Titulo:' + element.title + 'Sinopse:' + element.overview + 'Gênero:' + element.genre + 'Nota:' + element.vote_average]))
        // ADICIONANDO UM ELEMENTO
        document.querySelector('.container').appendChild(div) //appendChild = adicionando um filho
}
}
    
    
       
       



