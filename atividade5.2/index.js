buscarEntregasPorEstudantes(2)

async function buscarEntregasPorEstudantes(id) {
    let estudantes = await buscarEstudantes()
    let grade = await buscarGrade()
    let tarefas = await buscarTarefa()

    let estudante = addNome(estudantes, id)
    let nota = addNota(grade, id)
    let tarefa = addTitulo(tarefas, grade, id)
    
    console.log("Nome do Aluno: " + estudante)
    console.log("Nota: " + nota)
    console.log("Título da tarefa: " + tarefa)
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
async function buscarTarefa() {
    let result = await fetch('https://apigenerator.dronahq.com/api/75U0yEKU/tasks')
    result = await result.json()
    return result
}

function addNome(obj, id) {
    for (let index = 0; index < obj.length; index++) {

        if (obj[index].id === id) {
            return obj[index].Name
        }
    }
}

function addNota(obj, id) {
    for (let index = 0; index < obj.length; index++) {

        if (obj[index].studentId === id) { // aqui não funciona a comparação se eu colocar qualquer outra propriedade, funciona somente com ID
            return obj[index].number
        }
    }
}

function addTitulo(objTarefas, objGrades, id) {
    let idTarefa = 0

    for (let i = 0; i < objGrades.length; i++) {
    
        if (objGrades[i].studentId  === id) {
            idTarefa = objGrades[i].taskId
        }
    }

    for (let index = 0; index < objTarefas.length; index++) {

        if (objTarefas[index].id === idTarefa) { // se eu colocar a variável não vai mas o número direto foi
            console.log('entrou')
            return objTarefas[index].title
        }

    }

}