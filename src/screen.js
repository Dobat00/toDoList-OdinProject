import project from "./projectClass"
import todo from "./todoClass";

const divContent = document.querySelector('.content')

let botaoLigado = false;
let projetoButton = document.createElement('button');

let arrayProjetos = [];
let arrayTodos = [];

const createScreen = () => {
    let divScreen = document.createElement('div')
    divScreen.classList.add('divScreen')
    divContent.appendChild(divScreen)

    // let projetoButton = document.createElement('button');
    projetoButton.classList.add('projetoButton');
    projetoButton.textContent = 'Novo projeto'

    projetoButton.addEventListener('click', (e)=>{
        projetoButton.disabled = true;
        botaoLigado = false;
        let divProjeto = gerarProjeto();
        divScreen.appendChild(divProjeto)
    })

    divScreen.appendChild(projetoButton)   
    
}


const gerarTodo = () =>{
    let divTodo = document.createElement('div')
    divTodo.classList.add('divTodo')

    let tituloLabel = document.createElement('label')
    tituloLabel.textContent = 'Titulo';
    tituloLabel.setAttribute('for', 'tituloInput')
    divTodo.appendChild(tituloLabel)

    let tituloInput = document.createElement('input')
    tituloInput.setAttribute('id', 'tituloInput')
    divTodo.appendChild(tituloInput)

    let descricaoLabel = document.createElement('label')
    descricaoLabel.textContent = 'Descricao';
    descricaoLabel.setAttribute('for', 'descricaoInput')
    divTodo.appendChild(descricaoLabel)

    let descricaoInput = document.createElement('input')
    descricaoInput.setAttribute('id', 'descricaoInput')
    divTodo.appendChild(descricaoInput)

    let dataLabel = document.createElement('label')
    dataLabel.textContent = 'Data limite';
    dataLabel.setAttribute('for', 'dataInput')
    divTodo.appendChild(dataLabel)

    let dataInput = document.createElement('input')
    descricaoInput.setAttribute('id', 'dataInput')
    divTodo.appendChild(dataInput)

    let importanciaLabel = document.createElement('label')
    importanciaLabel.textContent = 'Importancia';
    importanciaLabel.setAttribute('for', 'importanciaInput')
    divTodo.appendChild(importanciaLabel)

    let importanciaInput = document.createElement('input')
    importanciaInput.setAttribute('id', 'importanciaImput')
    divTodo.appendChild(importanciaInput)

    let todoButton = document.createElement('button')
    todoButton.classList.add('botaoProjetos')
    todoButton.textContent = 'Criar "To do"'
    divTodo.appendChild(todoButton)


    return divTodo;
}

const gerarProjeto = () =>{
    let divProjeto = document.createElement('div')
    divProjeto.classList.add('divProjeto')
    
    let labelTitulo = document.createElement('label')
    labelTitulo.textContent = 'Nome do projeto';

    let projetoInput = document.createElement('input')
    
    let projetoSubmit = document.createElement('button')
    projetoSubmit.textContent = 'Criar projeto!'

    divProjeto.appendChild(labelTitulo)
    divProjeto.appendChild(projetoInput)
    divProjeto.appendChild(projetoSubmit)

    //botao que da submite as informacoes do projeto (cria projetos)
    projetoSubmit.addEventListener('click', (e) => {
        novoProjeto(projetoInput.value)
        divProjeto.hidden = true
        projetoButton.disabled = false;
        displayProjetos();
    })
    return divProjeto
}


const displayProjetos = () => {
    let divDisplayProjetos = document.createElement('div')
    divDisplayProjetos.classList.add('divDisplayProjetos')
    divDisplayProjetos.innerHTML = ''

    arrayProjetos.forEach(element => {
        //botao que mostra os 'todos' dentro de um projeto
        let button = document.createElement('button')
        button.classList.add('botaoProjetos')
        button.textContent = element.nome;
        button.addEventListener('click' ,(e)=>{
            console.log('oi')
        })
        
        //botao que permite o usuario adicionar um todo ao projeto
        let buttonAdicionarTodo = document.createElement('button')
        buttonAdicionarTodo.classList.add('botaoProjetos')
        buttonAdicionarTodo.textContent = '+'
        buttonAdicionarTodo.addEventListener('click', (e) =>{
            divContent.appendChild(gerarTodo())
        })
        
        divDisplayProjetos.appendChild(button)
        divDisplayProjetos.appendChild(buttonAdicionarTodo)
    });
    divContent.appendChild(divDisplayProjetos)
}

const novoProjeto = (nome) => {
    let projeto = new project(nome);
    arrayProjetos.push(projeto)
    console.log(arrayProjetos)
    return projeto
}

const novoTodo = (nome, desc, dataLimite, importancia) => {
    let todo = new todo(nome, desc, dataLimite, importancia);
    arrayTodos.push(todo)
    console.log(arrayTodos)
    return todo
}

// const mostrarProjetos = () => {
//     arrayProjetos.forEach(element => {
//         let div = document.createElement('div')
//         div.appendChild(element.nome)
//     })

// }




export default createScreen;