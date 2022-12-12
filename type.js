var carros = [
    {
        marca: 'Volks',
        modelo: 'Gol',
        ano: 2020,
        valor: 20000,
        cor: 'preto',
        automatico: false
    },
    {
        marca: 'Volks',
        modelo: 'Gol',
        ano: 2015,
        valor: 20000,
        cor: 'azul',
        automatico: false
    },
    {
        marca: 'Chevrolet',
        modelo: 'Astra',
        ano: 2015,
        valor: 20000,
        cor: 'azul',
        automatico: false
    }
];
// pesquisarPorMarca(carros, 'Volks')
// function pesquisarPorMarca (array: object, marca:string) {
//     let arrayFinal : object[] = []
//     array.forEach(function(x) {
//         if(x.marca === marca){
//             arrayFinal.push(x)
//         }
//     })
//     console.log(arrayFinal)
// }
// pesquisarMarcasDisponiveis(carros)
// function pesquisarMarcasDisponiveis(array:object){
//     let arrayFinal : object[] = []
//     arrayFinal = array.reduce(function(accumulator, current) {
//         if(!accumulator.includes(current.marca)){
//             accumulator.push(current.marca)
//         }
//         return accumulator
//     }, [])
//     console.log(arrayFinal)
// }
var propriedades = ['modelo', 'valor', 'cor'];
mostrarApenasPropriedades(carros, propriedades);
function mostrarApenasPropriedades(array, propriedades) {
    var arrayFInal = [];
    for (var i = 0; i < array.length; i++) {
        var verificar = [];
        for (var c = 0; c < propriedades.length; c++) {
            verificar[propriedades[c]] = array[i][propriedades[c]];
        }
        arrayFInal.push(verificar);
    }
    console.log(arrayFInal);
}
