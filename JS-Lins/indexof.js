const alunos = ['Guilherme', 'Sarah', 'Tainá']


function receberAluno(aluno) {
    if (alunos.includes(aluno)) {
        let media = medias(alunos.indexOf(alunos))
        return media
    }
    return 'aluno nao existe'
}



console.log(receberAluno())