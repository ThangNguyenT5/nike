var headerNav = document.querySelector('.headerNav');
var container = document.querySelector('.container');
var btn_menu = document.getElementById('mobileMenu-btn');
btn_menu.onclick = function () {
    if (headerNav.style.display == 'block') {
        headerNav.style.display = 'none';
        // container.style.marginTop = '94px';
    } else {
        headerNav.style.display = 'block';
        // container.style.marginTop = '268px';
    }
}