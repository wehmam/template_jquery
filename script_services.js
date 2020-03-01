$(window).scroll(function () {
    var y = $(window).scrollTop();

    // navbar
    if (y >= 100) {
        $('.navbar').css({
            'backgroundColor': '#3f2a75'
        })
    } else {
        $('.navbar').css({
            'backgroundColor': 'transparent'
        })
    }

    // button top
    if (y >= 100){
        $('#buttonTop').fadeIn()
    }else{
        $('#buttonTop').fadeOut()
    }
})