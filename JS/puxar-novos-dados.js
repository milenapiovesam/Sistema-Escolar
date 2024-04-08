// Criar botão para acionar a ação no HTML; - OK
// Puxar o botão para o JS e atribuir a uma variável; - OK
// Adicionar um ouvinte de evento clique no botão com uma função que irá habilitar o envio de uma requisição assíncrona; -OK
// Criar uma variável para atribuir o objeto XHR;
// Configurar o objeto para que ele realize as requisições informando método e endereço;
// Criar um ouvinte de evento para quando a requisição for carregada;
// Verificar  se está tudo certo e, se o status da operação for 200:
      // Configurar o objeto para fazer a req. de fato - essa parte do código fica no final de todas as config.;
      // Obter a resposta da requisição(vem como string), traduzi-la em um array de objetos;
      // Atribuir os objetos unitários  do array a uma variável - usar [i] - para poder chamar a função que irá colocar cada objeto na tabela.
      // Se certificar de que nenhum erro será exibido.
// Se o status da operação for diferente de 200:
      // Criar um local no html para exibir o erro;
      // Exibir o erro.

var botaoPuxarDados = document.querySelector("#buscar-dados");

botaoPuxarDados.addEventListener("click", function(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", /*endereço*/);

    xhr.addEventListener("load", function(){

        let erroRequisicao = document.querySelector("#erro-requisicao");

        if (xhr.status == 200) {
            let resposta = xhr.responseText;

            let alunos = JSON.parse(resposta);

            for (let i=0; i<alunos.length; i++){
                let aluno = alunos[i]; // declaram a variável dentro do loop para que seu valor mude a cada iteração.
                criarLinhaAluno(aluno);
            }
            erroRequisicao.classList.add("invisivel");
        } else {
            erroRequisicao.classList.remove("invisivel");
            console.log(xhr.status); 
            console.log(xhr.responseText); // Ajuda a verificar o erro que está ocorrendo.

        }
       
    })

    xhr.send();

})