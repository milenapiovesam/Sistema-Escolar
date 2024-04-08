// 1. Criar um local para digitar o que estamos procurando no index.html - OK
// 2. Pegar o que está escrito nesse elemento html e atribuir a uma variável; - OK
// 3. Adicionar um ouvinte de evento a essa variável que contém o input; - OK
// 4. Verificar se há algo escrito nesse local; - OK
// 5. Se houver algo, iniciar um evento:
//     6. Puxar os alunos que estão e serão adicionados à tabela; - OK
//     7. Puxar o nome desses alunos de dentro das linhs e das células;
//     8. Criar uma expressão para abrigar os fragmentos que são escritos no input;
//     9. Iteração: comparar OS NOMES de cada aluno com a exmpressão que é digitada;
//     10. Se o nome for igual ao que é digitado, deixá-lo visível;
//     11. Se não corresponder ao que é escrito, removê-lo; 
// 12. Se não houver nada escrito na caixa de texto, nenhum paciente deve ser mostrado em evidência/removido. 
// Nesse caso, vamos iterar a remoção da classe que os torna invisíveis em cada aluno do array alunos.

var pesquisa = document.querySelector("#campo-pesquisar")// Pegamos o valor?

pesquisa.addEventListener("input", function() {
    if (this.value.length > 0) {
         // Se o conteúdo do input não for vazio. --- Uso o this pq seria pesquisa, a mesma variavel que desencadeia os fatos.
        var alunos = document.querySelectorAll(".aluno");
        var nomes = document.querySelectorAll(".info-nome");
        
        let expressao = new RegExp(this.value, "i");

        for (let i = 0; i < alunos.length; i++) {

            let aluno = alunos[i];
            let nome = nomes[i].textContent; // Quando uma variável depende do index de um array, ele deve ser declarada dentro do loop pra que seja atualizada a cada repetição.
           
            if ((expressao.test(nome))) {
               aluno.classList.add("aluno-correspondente");
                
            }else {
                // alunos[i].classList.remove("aluno-correspondente");
                aluno.classList.add("invisivel");
            }
        }
    } else {
        var alunos = document.querySelectorAll(".aluno");

            for (let i = 0; i < alunos.length; i++) {
                alunos[i].classList.remove("invisivel");
             }
         }
    }) 
    
    