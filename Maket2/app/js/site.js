
$(document).ready(()=>{
    console.log('loaded');
    sameHeights();
    setListeners();
    document.getElementById('show-back-menu').addEventListener('click', showMenu);
    document.getElementById('close-menu').addEventListener('click', closeMenu);
    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        items:5,
        margin: 40,
        onTranslated: iphoneChanged,
        responsive:{
            320:{
                items:3
            },
            880:{
                items:5
            }
        }
    });

    $('#quotes-carousel').on('slide.bs.carousel', (event)=>{
        document.querySelector('.carousel-indicator .active').classList.remove('active');
        document.querySelector('.carousel-indicator').children.item(+event.to).classList.add('active');
    });
    $('#video-header-modal').on('hidden.bs.modal', function (e) {
        document.getElementById('header-video').pause();
    })
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

function showMenu(event) {
    document.getElementById('main-side-menu').classList.add('showed');
    event.preventDefault();
}

function closeMenu(event) {
    document.getElementById('main-side-menu').classList.remove('showed');
}

function onPersonalityClicked(event) {
    document.querySelector('.o-active').classList.remove('o-active');
    event.target.classList.add('o-active');
}


function setListeners() {
    const options =  document.getElementsByClassName('option');
    options.item(0).addEventListener('click',onPersonalityClicked);
    options.item(1).addEventListener('click',onPersonalityClicked);
}
function iphoneChanged() {
    const activeSlide = document.getElementsByClassName('owl-item center');
    const description  = document.getElementById('interface-description');
    description.innerText = activeSlide.item(0).children.item(0).dataset.description;
}

function sameHeights() {
    const offers =  document.getElementsByClassName('offer');
    const offer1 = offers.item(0);
    const offer2 = offers.item(1);
    const elements=offer1.children.length;
    for (let i = 0; i < elements; i++){
        let maxHeight = offer1.children.item(i).clientHeight < offer2.children.item(i).clientHeight ?
            offer2.children.item(i).clientHeight:
            offer1.children.item(i).clientHeight;
        offer2.children.item(i).style.height = `${maxHeight}px`;
        offer1.children.item(i).style.height = `${maxHeight}px`;
    }
}