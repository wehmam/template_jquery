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