$(window).scroll(function () {
    var y = $(window).scrollTop();

    if (y >= 100) {
        $('.navbar').css({
            'backgroundColor': '#3f2a75'
        })
    } else {
        $('.navbar').css({
            'backgroundColor': 'transparent'
        })
    }
})

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    // margin:10,
    loop: true,
    autoWidth: true,
    // items:4
})

// progress

$(document).ready(function () {
    $('#progressbar').text(300)
    $('#progressbar2').text(400);
    $('#progressbar3').text(250);
    $('.progress-bar').each(function () {
        var percentage = parseInt($(this).html());
        if (percentage > 0) {
            $(this).animate({
                'width': percentage,
            }, 800)
        }
    })

})


// card hover on konten4

$(document).ready(function () {
    $('.card1').mouseover(function () {
        $('.card1').css({
            'box-shadow': '2px 2px 5px 2px #000',
            'height': '280px'
        }).mouseleave(function () {
            $('.card1').css({
                'box-shadow': '',
                'height': ''
            })
        })
    })

    $('.card2').mouseover(function () {
        $('.card2').css({
            'box-shadow': '2px 2px 5px 2px #000',
            'height': '280px'
        }).mouseleave(function () {
            $('.card2').css({
                'box-shadow': '',
                'height': ''
            })
        })
    })

    $('.card3').mouseover(function () {
        $('.card3').css({
            'box-shadow': '2px 2px 5px 2px #000',
            'height': '280px'
        }).mouseleave(function () {
            $('.card3').css({
                'box-shadow': '',
                'height': ''
            })
        })
    })

    $('.card4').mouseover(function () {
        $('.card4').css({
            'box-shadow': '2px 2px 5px 2px #000',
            'height': '280px'
        }).mouseleave(function () {
            $('.card4').css({
                'box-shadow': '',
                'height': ''
            })
        })
    })

})