const alunos = [
	{
		nome: 'Penélope',
		nota: 10,
		turma: 'Jardim',
	},
	{
		nome: 'Catatau',
		nota: 7,
		turma: '5ª série',
	},
	{
		nome: 'Vênus',
		nota: 2,
		turma: '1ª série',
	},
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];
        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    
    return aprovados;
}
console.log(alunosAprovados(alunos, 7));