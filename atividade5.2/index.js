let estudantes = []
let tarefas = []
let grades = []

fetch('https://apigenerator.dronahq.com/api/g4C15xPP/students', )
.then(function(response) {
    return response.json()
})

.then(function(data){
    salvarEstudantes(data)
})

fetch('https://apigenerator.dronahq.com/api/75U0yEKU/tasks', )
.then(function(response) {
    return response.json()
})

.then(function(data){
    salvarTarefas(data)
})

fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades', )
.then(function(response) {
    return response.json()
})

.then(function(data){
    salvarGrades(data)
})

function salvarEstudantes(json){
    for (let index = 0; index < json.length; index++) {
        estudantes[index] = json[index]
    }  
}
function salvarTarefas(json){
    for (let index = 0; index < json.length; index++) {
        tarefas[index] = json[index]
    } 
}
function salvarGrades(json){
    for (let index = 0; index < json.length; index++) {
        grades[index] = json[index]
    } 
}
console.log(estudantes)
console.log(tarefas)
console.log(grades)

buscarEntregas(1)
function buscarEntregas (id){
    let entregas = []
    console.log(estudantes[1].name)

for (let index = 0; index < estudantes.length; index++) {
    console.log(estudantes[index][id])

    if(estudantes[index].id === id){
        entregas.push(estudantes[index][name])
    }
    console.log(entregas)
}



}


