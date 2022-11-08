//Close and open sidebars
const sideBarNav = document.querySelector('.sidebar')
const toggleMenu = document.querySelector('.fa-bars')

toggleMenu.addEventListener('click', () => {
    const visibilityNav = sideBarNav.getAttribute('data-visible');


    if (visibilityNav === 'false') {
        sideBarNav.setAttribute('data-visible', true)
    } else if (visibilityNav === 'true') {
        sideBarNav.setAttribute('data-visible', false)
    }
})


const searchBarNav = document.querySelector('.search-bar')
const searchMenu = document.querySelector('.fa-magnifying-glass')


searchMenu.addEventListener('click', () => {
    const visibility = searchBarNav.getAttribute('data-visible');

    if (visibility === 'false') {
        searchBarNav.setAttribute('data-visible', true)
    } else if (visibility === 'true') {
        searchBarNav.setAttribute('data-visible', false)
    }
})


//Shrinking and Expanding navigation bar on scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (screen.width > 600 && document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.masthead').style.height = '5em';
        document.querySelector('.masthead').style.transition = '350ms';
        document.querySelector('.logo-img').style.transition = '350ms';
        document.querySelector('.logo-img').style.width = '25rem';
        document.querySelector('.scroll-hidden-nav').style.display = 'none';
    } else if (screen.width > 600) {
        document.querySelector('.masthead').style.height = '10em';
        document.querySelector('.logo-img').style.width = '40rem';
        document.querySelector('.scroll-hidden-nav').style.display = 'flex';
    }
}


