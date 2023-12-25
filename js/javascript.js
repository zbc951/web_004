//swiper
$(function(){
    var swiper = new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

    var swiper_middle = new Swiper('.swiper-middle', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2',
        },
    });
})

//header
$(function(){
    $("header .more").on("click",function(){
        $(this)
        .toggleClass("active");

        $("header .rwd")
        .toggleClass("display");
    })

    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();

        $("header")
        .offset({
            "top" : ""+ scrollVal +"",
        })
    })
})

//mainArea
function getRamdom(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
$(function(){
    $(".gameLink .filter").mousemove(function(e,elem){
        elem = $(this);
        var x = e.pageX;
        var y = e.pageY;
        var xPos = x - elem.offset().left;
        var yPos = y - elem.offset().top;

        elem.find("i")
        .css({
            "left" : ""+ xPos +"px",
            "top" : ""+ yPos +"px",
        })

    })
})