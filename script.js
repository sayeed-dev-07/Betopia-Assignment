const humburgerMenu = document.querySelector('#hamburger')
const openMenu = document.querySelector('#open')
const closeMenu = document.querySelector('#close')
const linkWrapper = document.querySelector('#linkWrapper')
const navItems = document.querySelector('#navItems')
function handleHambugerClick() {
    humburgerMenu.addEventListener('click', () => {
        openMenu.classList.toggle('hidden')
        closeMenu.classList.toggle('hidden')
        navItems.classList.toggle('hamburgerOff')
    })
    navItems.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            navItems.classList.remove('hamburgerOff')
        })
    })

}

handleHambugerClick()