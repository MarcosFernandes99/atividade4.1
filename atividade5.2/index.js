// FUNÇÃO 1
// buscarEntregasPorEstudantes(2)

// async function buscarEntregasPorEstudantes(id) {
//     let estudantes = await buscarEstudantes()
//     let grade = await buscarGrade()
//     let tarefas = await buscarTarefa()

//     let estudante = addNome(estudantes, id)
//     let nota = addNota(grade, id)
//     let tarefa = addTitulo(tarefas, grade, id)

//     console.log("Nome do Aluno: " + estudante)
//     console.log("Nota: " + nota)
//     console.log("Título da tarefa: " + tarefa)
// }


// async function buscarEstudantes() {
//     let result = await fetch('https://apigenerator.dronahq.com/api/g4C15xPP/students')
//     result = await result.json()
//     return result
// }
// async function buscarGrade() {
//     let result = await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
//     result = await result.json()
//     return result
// }
// async function buscarTarefa() {
//     let result = await fetch('https://apigenerator.dronahq.com/api/75U0yEKU/tasks')
//     result = await result.json()
//     return result
// }

// function addNome(obj, id) {
//     for (let index = 0; index < obj.length; index++) {

//         if (obj[index].id === id) {
//             return obj[index].Name
//         }
//     }
// }

// function addNota(obj, id) {
//     for (let index = 0; index < obj.length; index++) {

//         if (obj[index].studentId === id) { // aqui não funciona a comparação se eu colocar qualquer outra propriedade, funciona somente com ID
//             return obj[index].number
//         }
//     }
// }

// function addTitulo(objTarefas, objGrades, id) {
//     let idTarefa = 0

//     for (let i = 0; i < objGrades.length; i++) {

//         if (objGrades[i].studentId === id) {
//             idTarefa = objGrades[i].taskId
//         }
//     }

//     for (let index = 0; index < objTarefas.length; index++) {

//         if (objTarefas[index].id === idTarefa) { // se eu colocar a variável não vai mas o número direto foi
//             console.log('entrou')
//             return objTarefas[index].title
//         }
//     }
// }
// TERMINA AQUI

// FUNÇÃO 2
// buscarMedia(2)

// async function buscarMedia(id) {
//     let tarefas = await buscarGrade()
//     let mediaAlunos = calcularMedia(tarefas, id)
//     console.log(mediaAlunos)
    
// }

// async function buscarGrade() {
//     let result = await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
//     result = await result.json()
//     return result
// }

// function calcularMedia(obj, id){
//     let soma = 0

//     for (let index = 0; index < obj.length; index++) {
//         if(obj[index].studentId === id){
//             console.log('entrou')
//             soma = soma + obj[index].number
//         }
//     }
//     soma = soma / obj.length
//     return soma
// }
// TERMINA AQUI

// FUNÇÃO 4

buscarAtividade('Colocando em prática 1.2')

async function buscarAtividade(tarefa) {
    let tarefas = await buscarTarefa()
    let estudantes = await buscarEstudantes()
    let grades =  await buscarGrade()
    let resultado = alunosQueEntregaramDeterminadaAtividade(tarefas, estudantes, grades, tarefa)
    //console.log(resultado)
    
}

async function buscarTarefa() {
    let result = await fetch('https://apigenerator.dronahq.com/api/75U0yEKU/tasks')
    result = await result.json()
    return result
}
async function buscarEstudantes() {
    let result = await fetch('https://apigenerator.dronahq.com/api/g4C15xPP/students')
    result = await result.json()
    return result
}
async function buscarGrade() {
    let result = await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
    result = await result.json()
    return result
}

function alunosQueEntregaramDeterminadaAtividade(tarefas, estudantes, grades, nomeTarefa){
    let idTarefa = 0
    let idAluno = []
    let nomeEnotaAluno = []

    for (let index = 0; index < tarefas.length; index++) {
        if(tarefas[index].title === nomeTarefa){
            idTarefa = tarefas[index].id
            console.log(idTarefa)
        }
    }

    for (let i = 0; i < grades.length; i++) {
        if(grades[i].taskId === idTarefa){
            idAluno.push(grades[i].studentId)
            nomeEnotaAluno.push(grades[i].number)
            
        } 
    }

   for (let j = 0; j < estudantes.length; j++) {
        if(estudantes[j].id === idAluno[j]){
            nomeEnotaAluno.push(estudantes[j].Name)
        }
   }

   return nomeEnotaAluno

}