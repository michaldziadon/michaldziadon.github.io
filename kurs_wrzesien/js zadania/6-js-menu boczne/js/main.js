

//przekazanie do funkcji
window.addEventListener('DOMContentLoaded', () => {
    toggleShowMenu();


});


// Functions

const toggleShowMenu = () => {
    //wyciaganie elementu
    let menuClick = document.getElementById('click');
    
    ////zlapanie nawigacji

    let nav = document.getElementById('main-nav');

    //w niego bedziemy klikac
    menuClick.addEventListener('click' , (event) => {
        //clikajac w menu cklikc nie wywoluj tego co sie dzieje ponizej - body - na elemencie rodzica - 
        event.stopPropagation();
        //dodanie  classlist o klasie open - to robi toogle
        nav.classList.toggle('open');

    })

    document.body.addEventListener('click' , (event) => {
        
        //tutaj robimy na cale body
        nav.classList.remove('open');

    })


}


