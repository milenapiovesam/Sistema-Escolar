document.querySelector("#botao").addEventListener("click", function(event){ // O evento deve ser uma string.
    event.preventDefault();

    var formulario = document.querySelector("form");

    let aluno = criarObjetoAluno()

    let alunoLinha = criarLinhaAluno(aluno)

    // nomeValido = validarNome(aluno.nome);
    // nota1Valida = validarNota1(aluno.nota1);
    // nota2Valida = validarNota2(aluno.nota2);

    // if (nomeValido && nota1Valida && nota2Valida) {

        let tabela = document.getElementById("tabela-alunos");

        tabela.appendChild(alunoLinha)
    // } 

})

function criarObjetoAluno() {
   let formulario = document.getElementsByClassName('formulario')[0];
   let alunoFormData = new FormData(formulario);

   let nota1 = parseFloat(alunoFormData.get('nota1'));
   let nota2 = parseFloat(alunoFormData.get('nota2'));

   let media = calcularMedia (nota1, nota2);
   let status = statusAprovacao(media);

   return  {
    nome: alunoFormData.get('nome'), 
    nota1: nota1,
    nota2: nota2,
    media: media,
    status: status
   }

}

function criarLinhaAluno(aluno) {

    //Sempre começar pegando os elementos HTML já existentes necessários.
    // let tabela = document.getElementById("tabela-alunos");

    //Criar uma linha que irá receber as células/propriedades.
    let alunoLinha = document.createElement("tr");

    Object.entries(aluno).forEach(([key, value]) => {
        // Criar uma célula para a propriedade
        let celula = document.createElement("td");

        celula.textContent = value; // Definir o texto da célula como o valor da propriedade
        alunoLinha.appendChild(celula); 
        
    });

    // tabela.appendChild(alunoLinha)

}

function validarNota1 (nota1) {
    let nota1Valida;
    if (nota1>=0 && nota1<=10) {
        nota1Valida = true;
    } else {
        nota1Valida = false;
        console.log("Primeira nota inválida");
    }
    return nota1Valida
}

function validarNota2 (nota2) {
    let nota2Valida
    if (nota2>=0 && nota2<=10) {
       nota2Valida = true;
    } else {
       nota2Valida = false;
        console.log("Segunda nota inválida");
    } 
    return nota2Valida
    
}

function validarNome (nome) {
     let nomeValido; 
    if (nome.length > 0) {
        nomeValido = true;
    }else {
        nomeValido = false;
        console.log("Nome inválido.")
    }
    return nomeValido; 

}

