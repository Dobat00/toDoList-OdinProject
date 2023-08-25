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

    let projetoButton = document.createElement('button');
    projetoButton.classList.add('inputButton');
    projetoButton.textContent = 'Novo projeto'

    projetoButton.addEventListener('click', (e)=>{
        projetoButton.disabled = true;

        let divProjeto = gerarProjeto();
        divContent.appendChild(divProjeto)
    })

    divInput.appendChild(projetoButton)

    const gerarProjeto = () =>{
        let divProjeto = document.createElement('div')
        divProjeto.classList.add('divProjeto')

        let tituloLabel = document.createElement('label')
        tituloLabel.textContent = 'Titulo';
        tituloLabel.setAttribute('for', 'tituloInput')
        divProjeto.appendChild(tituloLabel)

        let tituloInput = document.createElement('input')
        tituloInput.setAttribute('id', 'tituloInput')
        divProjeto.appendChild(tituloInput)

        let descricaoLabel = document.createElement('label')
        descricaoLabel.textContent = 'Descricao';
        descricaoLabel.setAttribute('for', 'descricaoInput')
        divProjeto.appendChild(descricaoLabel)

        let descricaoInput = document.createElement('input')
        descricaoInput.setAttribute('id', 'descricaoInput')
        divProjeto.appendChild(descricaoInput)

        let dataLabel = document.createElement('label')
        dataLabel.textContent = 'Data limite';
        dataLabel.setAttribute('for', 'dataInput')
        divProjeto.appendChild(dataLabel)

        let dataInput = document.createElement('input')
        descricaoInput.setAttribute('id', 'dataInput')
        divProjeto.appendChild(dataInput)

        let importanciaLabel = document.createElement('label')
        importanciaLabel.textContent = 'Importancia';
        importanciaLabel.setAttribute('for', 'importanciaInput')
        divProjeto.appendChild(importanciaLabel)

        let importanciaInput = document.createElement('input')
        importanciaInput.setAttribute('id', 'importanciaImput')
        divProjeto.appendChild(importanciaInput)

        return divProjeto;
    }


}

export default createScreen;