
$(document).ready(()=>{
    console.log('loaded');

});

const wow = new WOW({
    offset: 0,
    mobile: false,
    live: false,
    boxClass: 'wow',
    animateClass: 'animated',
});

wow.init();

window.onscroll = function () {
    const navPanel = document.getElementById('main-navigation');
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    scroll > 50 ?
        navPanel.classList.add('fixed'):
        navPanel.classList.remove('fixed');
};
