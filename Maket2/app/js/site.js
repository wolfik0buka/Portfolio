
$(document).ready(()=>{
    console.log('loaded');
    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        items:5,
        margin: 40,
        onTranslated: iphoneChanged,
    });
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


function iphoneChanged() {
    const activeSlide = document.getElementsByClassName('owl-item center');
    const description  = document.getElementById('interface-description');
    description.innerText = activeSlide.item(0).children.item(0).dataset.description;
}