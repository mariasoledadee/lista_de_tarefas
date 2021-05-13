const elementoLista = document.querySelector('ul');
const elementoInput = document.querySelector('input');
const elementoButao = document.querySelector('button');

const tarefas = []

function mostrarTarefas(){
  elementoLista.innerHTML = '';

  for(tarefa of tarefas){
    const elementoTarefa = document.createElement('li');
    const textoTarefa = document.createTextNode(tarefa);

    const elementoLink = document.createElement('a');
    const posicao = tarefas.indexOf(tarefa);

    const linkText = document.createTextNode('X')
    elementoLink.appendChild(linkText);
    
    elementoLink.setAttribute('href', '#')

    elementoLink.setAttribute('onclick', `deletarTarefa(${posicao})`)

    elementoTarefa.appendChild(textoTarefa);
    elementoLista.appendChild(elementoTarefa)
    elementoTarefa.appendChild(elementoLink)
  }
}
mostrarTarefas()

function adicionarTarefas(){
  const textoTarefa = elementoInput.value;
  tarefas.push(textoTarefa);
  elementoInput.value = '';

  mostrarTarefas()
}

elementoButao.setAttribute('onclick', 'adicionarTarefas()')

function deletarTarefa(posicao){
  tarefas.splice(posicao, 1)
  mostrarTarefas()
}