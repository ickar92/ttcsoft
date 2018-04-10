document.addEventListener("DOMContentLoaded", ready);

function ready() {
    const inputText = document.querySelector('.input-text')
    const inputPassword = document.querySelector('.input-password')
    const form = document.querySelector('.form')
    const resetBtn = document.querySelector('.reset')

    form.addEventListener("submit", event => {
        event.preventDefault()
        validate(inputText)
        validate(inputPassword)
    })

    resetBtn.addEventListener('click', event => {
        event.preventDefault()
        form.reset()
        inputText.classList.remove('input-valid', 'input-invalid')
        inputPassword.classList.remove('input-valid', 'input-invalid')
    })

    inputText.addEventListener('input', event => {
        validate(inputText)
    })

    inputPassword.addEventListener('input', event => {
        validate(inputPassword)
    })

}

function validate(input) {
    if (!input.value) {
        input.classList.remove('input-valid')
        input.classList.add('input-invalid')
    } else {
        input.classList.remove('input-invalid')
        input.classList.add('input-valid')
    }
}
