// Procurar o id "add-time"
document.querySelector("#add-time")
// Adiciona evento ao clicar
.addEventListener('click', cloneField)

function cloneField(){
    // Duplica os campos com a classe ".schedule-item"
    // parametro deep = true includes descendants
    const newFieldContainer = document.querySelector('.schedule-item:last-of-type').cloneNode(true)
    
    // Seleciona os campos input
    const fields = newFieldContainer.querySelectorAll('input')
    
    // verifica se os campos anteriores ainda estão vazios
    let noEmptyFields = true
    
    fields.forEach(function (field) {
        if (field.value == "") {
            noEmptyFields = false
        }
    })
    
    if (noEmptyFields) {
        // Para cada campo input, limpa o campo
        fields.forEach(function (field) {
            field.value=""
        })
        
        // colocar na página onde?
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
    } else {
        alert('Preencha todos os campos antes de adicionar novos')
    }
}
