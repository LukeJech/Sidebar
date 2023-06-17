function navbar_translate() {
    if (!navbar.classList.contains('navbar_hide')) {
        navbar.classList.add('navbar_hide');
        navbar.classList.remove('navbar_show');
    } else {
        navbar.classList.remove('navbar_hide');
        navbar.classList.add('navbar_show');
    }
}

