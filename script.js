//Close and open sidebars
function closeSidebar(sidebar, icon) {

    icon.addEventListener('click', () => {
        const visibilityNav = sidebar.getAttribute('data-visible');
    
        if (visibilityNav === 'false') {
            sidebar.setAttribute('data-visible', true);
        } else if (visibilityNav === 'true') {
            sidebar.setAttribute('data-visible', false);
        }
    });
}

const sideBarNav = document.querySelector('.sidebar')
const toggleMenu = document.querySelector('.fa-bars')

closeSidebar(sideBarNav, toggleMenu);


const searchBarNav = document.querySelector('.search-bar')
const searchMenu = document.querySelector('.fa-magnifying-glass')

closeSidebar(searchBarNav, searchMenu);


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


