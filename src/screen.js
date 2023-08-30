import * as foda from "./project.js"

const content = document.querySelector('.content')

const createScreen = () =>{
    let botao = buttonNewProject();

    let div = document.createElement('div')
    div.classList.add('divScreen')
    div.appendChild(botao)

    content.appendChild(div)
}

const buttonNewProject = () => {
    let botao = document.createElement('button')
    botao.textContent = 'New Project'
    botao.addEventListener('click', (e) =>{
        botao.disabled = true
        let div = formProject();
        content.appendChild(div)
    })

    return botao
}

const formProject = () => {
    let div = document.createElement('div')
    div.classList.add('divFormProjeto')

    let labelTitulo = document.createElement('label')
    labelTitulo.textContent = 'Titulo do projeto'
    div.appendChild(labelTitulo)
    
    let projetoInput = document.createElement('input')
    projetoInput.setAttribute('type', 'text')
    div.appendChild(projetoInput)

    let button = document.createElement('button')
    button.textContent = 'Create project!'
    button.addEventListener('click', (e)=>{
        console.log('oi')
    })
    div.appendChild(button)

    return div
}

export default createScreen();