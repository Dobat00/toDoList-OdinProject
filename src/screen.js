const divContent = document.querySelector('.content')

const createScreen = () => {
    let divScreen = document.createElement('div')
    divScreen.classList.add('divScreen')
    divContent.appendChild(divScreen)

    let divInput = document.createElement('div');
    divInput.classList.add('inputDiv')
    divScreen.appendChild(divInput)

    // let inputField = document.createElement('input')
    // inputField.type = 'text';
    // inputField.classList.add('inputField')
    // divInput.appendChild(inputField)

    let inputButton = document.createElement('button');
    inputButton.classList.add('inputButton');
    inputButton.textContent = 'Novo projeto'
    inputButton.addEventListener('click', (e)=>{
        let divProjeto = document.createElement('div')
        divProjeto.classList.add('divProjeto')

        let tituloLabel = document.createElement('label')
        tituloLabel.setAttribute('for', 'tituloInput')
        divProjeto.appendChild(tituloLabel)

        let tituloInput = document.createElement('input')
        tituloInput.setAttribute('id', 'tituloInput')
        divProjeto.appendChild(tituloInput)

        divContent.appendChild(divProjeto)
    })

    divInput.appendChild(inputButton)


}

export default createScreen;