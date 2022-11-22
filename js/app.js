// MODAL START
const mainBtn = document.querySelector('.main__btn')
const mains = document.querySelector('.mains')
const mainsBtn = document.querySelector('.mains__btn')
const input = document.querySelectorAll('input')


mainBtn.addEventListener('click', function () {
    mains.classList.add('block')
    const email = document.querySelector('.emails')
    const passwords = document.querySelector('.passwords')
    const ConfirmPassword = document.querySelector('.ConfirmPasswords')
    email.value = ''
    passwords.value = ''
    ConfirmPassword.value = ''
})

mainsBtn.addEventListener('click', function () {
    mains.classList.remove('block')
})

// INPUT START

const emailText = document.querySelector('.email_text')
const passwordText = document.querySelector('.password_text')
const ConfirmPasswordText = document.querySelector('.ConfirmPassword_text')
const submitBTn = document.querySelector('.mains_main-btn_btns')
const email = document.querySelector('.emails').value
const passwords = document.querySelector('.passwords').value
const ConfirmPassword = document.querySelector('.ConfirmPasswords').value

function showError(input, message) {
    input.classList.add('red')
    input.nextElementSibling.innerText = message
}

function showSuccsess(input) {
    input.classList.remove('red')
    input.nextElementSibling.innerText = ''
}

function checkRequired(inputs) {
    const arr = []
    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, 'To`ldirilishi shart!')
            arr.push(true)
        } else {
            showSuccsess(input)
            arr.push(false)
        }
    })

    return !arr.every((element) => !element)
}

function checkIsEmail(email) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(email.value)) {
        showError(email, 'Emailni togri kiriting!')
        return true
    } else {
        showSuccsess(email)
        return false
    }
}

function checkPasswordLength(password, min) {
    if (password.value.length < min) {
        showError(password, `Parol ${min} kichik`)
        return true
    } else {
        return false
    }
}

function checkPasswordSame(password, confirmPassword) {
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Bir hil emas!')
        return true
    } else {
        return false
    }
}
function success(email, password, confirmPassword) {

    emailText.innerText = email
    passwordText.innerText = password
    ConfirmPasswordText.innerText = confirmPassword

}

submitBTn.addEventListener('click', function (event) {
    event.preventDefault()

    const emails = document.querySelector('.emails')
    const passwordss = document.querySelector('.passwords')
    const ConfirmPasswords = document.querySelector('.ConfirmPasswords')
    const main = document.querySelector('.main')
    const errors = [
        checkRequired([emails, passwordss, ConfirmPasswords]),
        checkIsEmail(emails),
        checkPasswordLength(passwordss, 4),
        checkPasswordSame(passwordss, ConfirmPasswords),
    ]

    if (errors.every((item) => !item)) {
        success(emails.value, passwordss.value, ConfirmPasswords.value)
        mains.classList.remove('block')

    }
    main.classList.add('num')
})

// if (passwords === ConfirmPassword) {

//     emails.classList.add('red')
//     passwordss.classList.add('red')
//     ConfirmPasswords.classList.add('red')
//     console.log('ERROR');
// }