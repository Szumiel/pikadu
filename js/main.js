let menuToggle = document.querySelector('#menu-toggle')
let menu = document.querySelector('.sidebar')


menuToggle.addEventListener('click', event => {
    event.preventDefault()
    menu.classList.toggle('visible')
})

