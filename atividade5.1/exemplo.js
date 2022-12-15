
function searchData(){
    fetch("https://apigenerator.dronahq.com/api/rhI-crB_/Filmes")
    .then(function(response) {
      let body = response.json();
      //console.log(body);
      return body;
    })
    .then(function(data) {
      console.log(data[3].title)
    
      exibirTexto(data)
    });
  }
  function exibirTexto(){
   for (let index = 0; index < json.length; index++) {
    const element = json[index];
  
    // CRIANDO ELEMENTO HTML
    let li = document.createElement('li')
    // ADICIONANDO UM TEXTO  NA LISTA
    li.appendChild(document.createTextNode(element.Email))
    // ADICIONANDO UM ELEMENTO
    document.querySelector('#addText').appendChild(li) //appendChild = adicionando um filho
  
   }
  }
  addData()
  function addData(){
    let input = {
      firtsName: 'Marcos',
      telefone: '11111,',
      email: 'jhfadkjfh@sss'
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
  