const humburgerMenu = document.querySelector('#hamburger')
const openMenu = document.querySelector('#open')
const closeMenu = document.querySelector('#close')
const linkWrapper = document.querySelector('#linkWrapper')
const navItems = document.querySelector('#navItems')

function setMenuState(isOpen) {
    openMenu.classList.toggle('hidden', isOpen)
    closeMenu.classList.toggle('hidden', !isOpen)
    navItems.classList.toggle('hamburgerOff', !isOpen)
    document.body.style.overflow = isOpen ? 'hidden' : ''
    document.documentElement.style.overflow = isOpen ? 'hidden' : ''
}

function handleHambugerClick() {
    humburgerMenu.addEventListener('click', () => {
        const isMenuOpen = navItems.classList.contains('hamburgerOff')
        setMenuState(isMenuOpen)
    })

    navItems.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            setMenuState(false)
        })
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 640) {
            setMenuState(false)
        }
    })
}

handleHambugerClick()
