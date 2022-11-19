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

submitBTn.addEventListener('click', function (event) {
    event.preventDefault()
    const email = document.querySelector('.emails').value
    const passwords = document.querySelector('.passwords').value
    const ConfirmPassword = document.querySelector('.ConfirmPasswords').value
    const emails = document.querySelector('.emails')
    const passwordss = document.querySelector('.passwords')
    const ConfirmPasswords = document.querySelector('.ConfirmPasswords')
    const main = document.querySelector('.main')
    console.log(input);
    const naramlizaData ={
        email,
        passwords,
        ConfirmPassword,

    }
    for (const key in values) {
        if (naramlizaData[key] === values[key]) {
            errorList[key]= true            
        }else{
            errorList[key]= false
        }
    }
    const errorList = {
        email: false,
        password: false,
        ConfirmPassword:false,
    }
    const values = {
        email: '',
        password: '',
        ConfirmPassword:'',
    }
    if (Object.values(errorList).every((item) => !item)) {
        main.classList.add('mun')
        emailText.innerText = email
        passwordText.innerText = passwords
        ConfirmPasswordText.innerText = ConfirmPassword
        mains.classList.remove('block')

    } else {
        for (const item in errorList) {
            if (errorList[item]) {
                document.querySelector(`${item}`).classList.add('red')                
            }
        }
    }
    
})

// if (passwords === ConfirmPassword) {

//     emails.classList.add('red')
//     passwordss.classList.add('red')
//     ConfirmPasswords.classList.add('red')
//     console.log('ERROR');
// }