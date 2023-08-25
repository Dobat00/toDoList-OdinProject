import project from "./projectClass"

const divContent = document.querySelector('.content')

const createScreen = () => {
    let divScreen = document.createElement('div')
    divScreen.classList.add('divScreen')
    divContent.appendChild(divScreen)

    let projetoButton = document.createElement('button');
    projetoButton.classList.add('projetoButton');
    projetoButton.textContent = 'Novo projeto'

    projetoButton.addEventListener('click', (e)=>{
        projetoButton.disabled = true;

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

    projetoSubmit.addEventListener('click', (e) => {
        
    })


    return divProjeto
}

export default createScreen;