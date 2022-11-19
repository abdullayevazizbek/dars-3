// MODAL START
const mainBtn = document.querySelector('.main__btn')
const mains = document.querySelector('.mains')
const mainsBtn = document.querySelector('.mains__btn')

mainBtn.addEventListener('click', function () {
    mains.classList.add('block')
})

mainsBtn.addEventListener('click', function () {
    mains.classList.remove('block')
})

// INPUT START

const emailText = document.querySelector('.email_text')
const passwordText = document.querySelector('.password_text')
const ConfirmPasswordText = document.querySelector('.ConfirmPassword_text')
const submitBTn = document.querySelector('.mains_main-btn_btns')

submitBTn.addEventListener('click', function (event) {
    event.preventDefault()
    const email = document.querySelector('.emails').value
    const passwords = document.querySelector('.passwords').value
    const ConfirmPassword = document.querySelector('.ConfirmPasswords').value
    const input = document.querySelectorAll('input').value
    console.log(input);
    if (email == "" || passwords == "" || ConfirmPassword === '') {
        input.classList.add('red')
        console.log('ERROR');
    } else if (passwords === ConfirmPassword) {
        emailText.innerText = email
        passwordText.innerText = passwords
        ConfirmPasswordText.innerText = ConfirmPassword
        submitBTn.addEventListener('click', function () {
            mains.classList.remove('block')
        })
    }


    // email.value = ''
    // passwords.value = ''
    // ConfirmPassword.value = ''

})