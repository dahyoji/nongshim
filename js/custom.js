$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: true,
        speed: 400,
    });

    $('.main_visual .prev').on('click', function () {
        main_visual_slide.slidePrev();
    });

    $('.main_visual .next').on('click', function () {
        main_visual_slide.slideNext();
    });

    const main_news_slide = new Swiper('.main_news_slide', {
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 30,
    });

    $('.main_news .prev').on('click', function () {
        main_news_slide.slidePrev();
    });

    $('.main_news .next').on('click', function () {
        main_news_slide.slideNext();
    });

    let sw = true;
    $('.main_news .play').on('click', function () {
        if (sw) {
            main_news_slide.autoplay.start();
            $(this).addClass('on');
        } else {
            main_news_slide.autoplay.pause();
            $(this).removeClass('on');
        }

        sw = !sw;
    });

    const MSS = new Swiper('.main_sns_slide', {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 8,
        centeredSlides: true,

    })

});

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

})