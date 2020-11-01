window.addEventListener('DOMContentLoaded', (event) => {
    toggleShowMenu();
});

// FUNCTIONS
const toggleShowMenu = () => {
    let menuClick = document.getElementById('click');
    let nav = document.getElementById('main-nav');

    menuClick.addEventListener('click', (event) => {
        event.stopPropagation();
        nav.classList.toggle('open');
    })

    document.body.addEventListener('click', () => {
        nav.classList.remove('open');
    })
}