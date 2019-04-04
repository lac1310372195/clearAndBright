$(function () {  
    $(window).on('scroll', function (e) {  
        var num = $(this).scrollTop();
        if (num > 253) {
            $('header').css('backgroundColor','rgb(205, 75, 75)');
        }else {
            $('header').css('backgroundColor','rgb(79, 142, 142)');
        }
    })
})