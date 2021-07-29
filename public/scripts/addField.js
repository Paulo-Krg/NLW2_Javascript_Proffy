// Procurar o id "add-time"
document.querySelector("#add-time")
// Adiciona evento ao clicar
.addEventListener('click', cloneField)

function cloneField(){
    // Duplica os campos com a classe ".schedule-item"
    // paramerto deep = true includes descendants
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Seleciona os campos input
    const fields = newFieldContainer.querySelectorAll('input')
   
    // Para cada campo input, limpa o campo
    fields.forEach(function (field) {
        field.value=""
    })

    // colocar na página onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}