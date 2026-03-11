const humburgerMenu = document.querySelector('#hamburger')
const openMenu = document.querySelector('#open')
const closeMenu = document.querySelector('#close')
function handleHambugerClick() {
    humburgerMenu.addEventListener('click', () => {
        openMenu.classList.toggle('hidden')
        closeMenu.classList.toggle('hidden')
    })
}

handleHambugerClick()