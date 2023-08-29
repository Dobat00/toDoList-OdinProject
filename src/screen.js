import project from "./projectClass"
import todo from "./todoClass";

const divContent = document.querySelector('.content')
let divDisplayProjetos = document.createElement('div')

let projetoButton = document.createElement('button');

let arrayProjetos = [];
let arrayTodos = [];

const createScreen = () => {
    let divScreen = document.createElement('div')
    divScreen.classList.add('divScreen')
    
    projetoButton.classList.add('projetoButton');
    projetoButton.textContent = 'Novo projeto'

    divDisplayProjetos.classList.add('divDisplayProjetos')
    
    projetoButton.addEventListener('click', (e)=>{
        projetoButton.disabled = true;
        let divProjeto = gerarProjeto();
        divScreen.appendChild(divProjeto)
        
    })
    
    divScreen.appendChild(projetoButton)   
    divScreen.appendChild(divDisplayProjetos)
    divContent.appendChild(divScreen)
    
}


const gerarTodo = (objeto) =>{
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
    todoButton.addEventListener('click', (e) =>{
        let todoObject = new todo(tituloInput.value, descricaoInput.value, dataInput.value, importanciaInput.value)
        objeto.todo = todoObject;
        arrayTodos.push(todoObject)
        console.log(arrayTodos)
        console.log(todoButton.parentElement)
        divTodo.hidden = true
        
    })
    divTodo.appendChild(todoButton)

    divContent.appendChild(divTodo)
    return divTodo;
}

const gerarProjeto = () =>{
    let divCriarProjeto = document.createElement('div')
    divCriarProjeto.classList.add('divCriarProjeto')
    
    let labelTitulo = document.createElement('label')
    labelTitulo.textContent = 'Nome do projeto';

    let projetoInput = document.createElement('input')
    
    let projetoSubmit = document.createElement('button')
    projetoSubmit.textContent = 'Criar projeto!'

    divCriarProjeto.appendChild(labelTitulo)
    divCriarProjeto.appendChild(projetoInput)
    divCriarProjeto.appendChild(projetoSubmit)

    //botao que da submite as informacoes do projeto (cria projetos)
    projetoSubmit.addEventListener('click', (e) => {
        novoProjeto(projetoInput.value)
        divCriarProjeto.hidden = true
        projetoButton.disabled = false;
        renderProjetos(divDisplayProjetos)
    })
    return divCriarProjeto
}

const novoProjeto = (nome) => {
    let projeto = new project(nome);
    arrayProjetos.push(projeto)
    console.log(arrayProjetos)
    gerarTodo(projeto)
    return projeto
}


const renderProjetos = (div) => {
    div.textContent = ''
    arrayProjetos.forEach(element => {
        let button = document.createElement('button')
        let buttonTodo = document.createElement('button')
        buttonTodo.textContent = "+"

        button.addEventListener('click', (e) =>{
            console.log(arrayProjetos)
        })

        // buttonTodo.addEventListener('click', (e) =>{
        //     gerarTodo()
        // })
        
        button.textContent = element.nome
        div.appendChild(button)
        // div.appendChild(buttonTodo)
        
    })
}

// const addTodo = () =>{
//     let button = document.createElement('button')
//     button.textContent = '+'
//     button.addEventListener('click', (e) => {
//         gerarTodo()
//     })

//     return button
// }




export default createScreen;