$(document).ready(function() {
    // $fixmeTitle = $('.fixTitle').offset().top;
    $fixmeArray = $('.fixme');
    $fixmeTopArray = $.map($fixmeArray, function (i) {
        console.log($(i).offset().top);
        return $(i).offset().top;
    });
});

$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    // if (currentScroll >= $fixmeTitle) {
    //
    // }
    for(i=0; i<$fixmeTopArray.length; i++){
        if (currentScroll >= $fixmeTopArray[i]) {
            $($fixmeArray[i]).addClass('top');
        } else {
            $($fixmeArray[i]).removeClass('top');
        }
    }
});