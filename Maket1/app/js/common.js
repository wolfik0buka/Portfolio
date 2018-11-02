$(document).ready(()=>{
    $('#my-menu').mmenu(
        {
            extensions : ['widescreen', 'theme-black', 'effect-menu-slide', 'position-back'],
            navbar:{
                title:''
            },
        }
    );
    let mmenuAPI = $("#my-menu").data("mmenu");
    mmenuAPI.bind("open:start", ()=>{
        $('a.hamburger').addClass('is-active');
    });
    mmenuAPI.bind('close:after', ()=>{
        $('a.hamburger').removeClass('is-active');
    });
});

