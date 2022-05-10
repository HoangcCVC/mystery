var SLIDER = {
    slideBanner: function() {
        if ($('.slide-baner').find('.swiper-slide').length >= 2) {
            var swiper = new Swiper(".slide-baner", {
                navigation: {
                    nextEl: ".banner-next",
                    prevEl: ".banner-prev",
                },
                speed: 1000,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
            });
        }

    }
    sliderNonHealthcare: function() {
        if (typeof Tech.$('.non-healthcare-slider') === 'undefined') return;
        const swiperNonHealthcare = new Swiper('.non-healthcare-slider', {
            slidesPerView: 3,
            loop: false,
            disableOnInteraction: true,
            speed: 1000,
            spaceBetween: 10,
            breakpoints: {
                320: {
                    slidesPerView: 1.6
                },
                768: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 2.5
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
    },
    sliderPartner: function() {
        if (typeof Tech.$('.international-partner-slider') === 'undefined') return;
        if (typeof Tech.$('.local-partner-slider') === 'undefined') return;
        var optionSliderPartner = {
            slidesPerView: 2.7,
            autoHeight: false,
            loop: true,
            disableOnInteraction: true,
            speed: 1000,
            spaceBetween: 10,
            breakpoints: {
                575: {
                    slidesPerView: 3.3
                },
                768: {
                    slidesPerView: 4
                },
                991: {
                    slidesPerView: 5,
                    spaceBetween: 15
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 20
                }
            }
        }
        var optionInternationalPartner = optionSliderPartner;
        optionInternationalPartner.navigation = {
            nextEl: '.international-slider-next',
            prevEl: '.international-slider-prev'
        }
        const swiperInternationalPartner = new Swiper('.international-partner-slider', optionInternationalPartner);
        var optionLocalPartner = optionSliderPartner;
        optionLocalPartner.navigation = {
            nextEl: '.local-slider-next',
            prevEl: '.local-slider-prev'
        }
        const swiperLocalPartner = new Swiper('.local-partner-slider', optionLocalPartner);
    },













    init: function() {
        SLIDER.slideBanner();

    },
}
Tech.Query.ready(function() {
    setTimeout(function() {
        SLIDER.init();
    }, 100);
});