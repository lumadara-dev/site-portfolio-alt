const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener(
    'click', () => {
        mudarMenu()
    }
)

function mudarMenu() {
    const nav = document.querySelector('.nav-responsiva')
    menuHamburguer.classList.toggle('change')

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block'
    } else {
        nav.style.display = 'none'
    }
}
