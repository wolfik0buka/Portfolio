let slideNow = 1;
const slideCount = $('#slidewrapper').children().length;
let slideInterval = 3000;
let navBtnId = 0;
let translateWidth = 0;

$(document).ready(function() {
    let switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.cover').click(function () {
        let vid =document.getElementById('presentation-video');
        $('#presentation-video').css({"z-index" : '3'});
        vid.play();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            $('.slide-nav-btn').eq(slideNow-1).removeClass('active');
            slideNow = navBtnId + 1;
            $('.slide-nav-btn').eq(slideNow-1).addClass('active');
        }
    });
});


function nextSlide() {

    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
        $('.slide-nav-btn:last').removeClass('active');
        $('.slide-nav-btn:first').addClass('active');
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        $('.slide-nav-btn').eq(slideNow-1).removeClass('active');
        slideNow++;
        $('.slide-nav-btn').eq(slideNow-1).addClass('active');
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
        $('.slide-nav-btn:last').addClass('active');
        $('.slide-nav-btn:first').removeClass('active');
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        $('.slide-nav-btn').eq(slideNow-1).removeClass('active');
        slideNow--;
        $('.slide-nav-btn').eq(slideNow-1).addClass('active');

    }
}