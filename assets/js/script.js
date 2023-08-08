document.addEventListener("DOMContentLoaded", () => {

    // --------------------- MENU SANDWITCH
    let menuIcon = document.getElementById('menu-sand');
    let sideMenu = document.querySelector('.sidebar-left');
    let flagMenu = 0;
    menuIcon.addEventListener('click', () => {
        if(flagMenu == 0) {
            sideMenu.style.left = '0px';
            menuIcon.style.right = '20px';
            flagMenu = 1;
        } else {
            sideMenu.style.left = '-300px';
            menuIcon.style.right = '-60px';
            flagMenu = 0;
        }
    });

    // ------------------- CLOSE MENU


    // ------------------ HOLO TEXT HOME
    const typed = document.querySelector('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2000
        });
    }
});