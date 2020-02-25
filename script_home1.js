$(window).scroll(function(){
    var y = $(window).scrollTop();

    if(y>=100){
        $('.navbar').css({
            'backgroundColor':'#3f2a75'
        })
    }else{
        $('.navbar').css({
            'backgroundColor':'transparent'
        })
    }
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    // margin:10,
    loop:true,
    autoWidth:true,
    // items:4
})