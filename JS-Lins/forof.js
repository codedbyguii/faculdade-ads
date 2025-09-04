
const notas = [
    9, 7, 6, 5
]


let somaNotas = 0;

notas.forEach(function(nota){ 
    somaNotas += nota
})

let media = somaNotas / notas.length

console.log(media)
