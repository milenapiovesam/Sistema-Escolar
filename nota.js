// Localizar e salvar todos os alunos e os respectivos dados.
// Declarar como vamos calcular a média 
// -> 1. Achamos a nota 1 do aluno; 2. Achmos a nota 2 do aluno. 3. Somamos as 2 notas e dividimos por 2. Entregamos o valor da nota no local.
// Declarar como vamos entender se um aluno será reprovado ou não.
// -> se media >= 7, o aluno é aprovado. Se a média < 7, o aluno é reprovado. Entregamos o resultado.
// Repetimos este processo com cada um dos alunos.

// Localizar e salvar todos os alunos e os respectivos dados.
var alunos = document.querySelectorAll(".aluno")

// Declarar como vamos calcular a média 
// -> 1. Achamos a nota 1 do aluno; 2. Achmos a nota 2 do aluno. 3. Somamos as 2 notas e dividimos por 2. Entregamos o valor da nota no local.
function calcularMedia (nota1, nota2) {
   return (nota1 + nota2)/2;
   
}

// alteração para teste no github

// Declarar como vamos entender se um aluno será reprovado ou não.
// -> se media >= 7, o aluno é aprovado. Se a média < 7, o aluno é reprovado.Entregamos o resultado.

 function statusAprovacao (media) {
    if (media >= 7) {
        return"Aprovado";
    }

    else {
        return "Reprovado";
    }
}

for (i=0; i<alunos.length; i++) {
    var aluno = alunos[i];

    var nota1 = parseFloat(aluno.querySelector(".info-nota1").textContent);
    var nota2 = parseFloat(aluno.querySelector(".info-nota2").textContent); //O .textContent deve estar dentro do parênteses para que o parseFloat funcione.

    var mediaTabela = aluno.querySelector(".info-media");
    var statusTabela = aluno.querySelector(".info-status");

    var mediaCalculada = calcularMedia(nota1,nota2);
    var statusVerificado = statusAprovacao(mediaCalculada);

    mediaTabela.textContent = mediaCalculada;
    statusTabela.textContent = statusVerificado;

}



