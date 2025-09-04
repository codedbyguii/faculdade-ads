const notas = [
    9, 7, 6, 5
]


let somaNotas = 0;

for (let index = 0; index < notas.length; index++) {
    console.log(`${notas[index]}: ${index}`);
    somaNotas += notas[index]
}

let media = somaNotas / notas.length

console.log(media)
