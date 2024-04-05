// 1. Criar um local para digitar o que estamos procurando no index.html - OK
// 2. Pegar o que está escrito nesse elemento html e atribuir a uma variável; - OK
// 3. Adicionar um ouvinte de evento a esse imput
// 3. Verificar se há algo escrito nesse local;
// 4. Se houver algo, iniciar um evento:
//     5. Puxar os alunos que estão e serão adicionados à tabela;
//     6. Iteração: comparar cada aluno ao que é digitado;
//     7. Se o nome for igual ao que é digitado, deixá-lo visível;
//     8. Se não corresponder ao que é escrito, removê-lo; 
// 9. Se não houver nada escrito na caixa de texto, nenhum paciente deve ser mostrado em evidência/removido.

var pesquisa = document.querySelector(".campo-pesquisar")// Pegamos o valor?

pesquisa.addEventListener("input", function(pesquisa) {
    if (pesquisa.value.length > 0) { // Se o conteúdo do input não for vazio.

    }
    
})