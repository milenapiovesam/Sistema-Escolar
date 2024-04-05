Passos:
// 1. Pegar a tag pai (tabela) dos elementos (alunos - linhas) que queremos excluir;
// 2. Adicionar um ouvinte de duplo clique a essa tabela;
// 3. indicar qual elemento queremos remover com o duplo clique (virá a ser o pais do elemento alvo).

// elemento alvo: event.target - será sempre uma célula (por isso event é o parâmetro da função);
// elemento a ser apagado: event.target.parentNode - a linha inteira que representa um aluno.


var tabela = document.querySelector("#tabela-alunos")

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("aluno-removido")
    setTimeout(function () {
        event.target.parentNode.remove() // O evento que vai aqui dntro é o que precisa esperar para acontecer.
    },500)
})