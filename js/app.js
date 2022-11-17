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
const email = document.querySelectorAll('.email')
const password = document.querySelectorAll('.password')
const Confirm = document.querySelectorAll('.email')
