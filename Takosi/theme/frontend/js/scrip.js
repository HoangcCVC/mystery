var SLIDESHOWS = (function () {
    var dealSlide = function () {
        if ($('.deal-slideshow').length > 0) {
            var swiper = new Swiper(".deal-slideshow", {
                centeredSlides: true,
                roundLengths: true,
                loop: true,
                loopAdditionalSlides: 30,
                pagination: {
                    el: ".deal-slideshow .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".deal-slideshow .swiper-button-next",
                    prevEl: ".deal-slideshow .swiper-button-prev",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    769: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1200: {
                        spaceBetween: 50,
                        slidesPerView: 5,
                    },
                }
            });
        }
    }
    var productNewSlide = function () {
        if ($('.product-new-slideshow').length > 0) {
            var swiper = new Swiper(".product-new-slideshow", {
                loop: true,
                pagination: {
                    el: ".product-new .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".product-new .swiper-button-next",
                    prevEl: ".product-new .swiper-button-prev",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                    },
                }
            });
        }
    }
    var productFlashSaleSlideshow = function () {
        if ($('.product-flash-sale-slideshow').length > 0) {
            var swiper = new Swiper(".product-flash-sale-slideshow", {
                loop: true,
                pagination: {
                    el: ".product-flash-sale-slideshow .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".product-flash-sale-slideshow .swiper-button-next",
                    prevEl: ".product-flash-sale-slideshow .swiper-button-prev",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 1,
                    },
                }
            });
        }
    }
    var productDetail = function () {
        if ($('.product-detail-slide').length > 0) {
            var swiper = new Swiper(".mySwiper", {
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });
            var swiper2 = new Swiper(".mySwiper2", {
                loop: true,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: swiper,
                },
            });
        }
    }

    return {
        _: function () {
            dealSlide();
            productNewSlide();
            productFlashSaleSlideshow();
            productDetail();
        }
    }
})();

var OPTIONS = (function () {
    var toggleOption = function () {
        if ($('.category-box-option').length > 0) {
            let li = $('.category-box-option > ul > li > p');
            li.click(function (e) {
                e.preventDefault();
                $(this).parents('li').children('ul').toggle();
                if ($(this).parents('li').children('ul').is(":hidden")) {
                    $(this).children('i').addClass('fa-angle-down').removeClass('fa-angle-up');
                } else {
                    $(this).children('i').addClass('fa-angle-up').removeClass('fa-angle-down');
                }
            });
        }
    }

    return {
        _: function () {
            toggleOption();
        }
    }
})();

var WEBS = (function () {
    var productFancy = function () {
        if ($('[data-fancybox]').length > 0) {
            $('[data-fancybox]').fancybox({
                buttons: [
                    'close'
                ],
                wheel: false,
                transitionEffect: "slide",
                loop: true,
                toolbar: false,
                clickContent: false
            });
        }
    }

    var quantity = function () {
        if ($('.box-quantity').length > 0) {
            $('.input-qty').each(function () {
                var $this = $(this),
                    qty = $this.parent().find('.is-form'),
                    min = Number($this.attr('min')),
                    max = Number($this.attr('max'))
                if (min == 0) {
                    var d = 0;
                } else {
                    d = min;
                }
                $(qty).on('click', function () {
                    if ($(this).hasClass('minus')) {
                        if (d > min) d += -1;
                    } else if ($(this).hasClass('plus')) {
                        var x = Number($this.val()) + 1;
                        if (x <= max) d += 1;
                    }
                    $this.attr('value', d).val(d);
                });
            });
        }
    }

    return {
        _: function () {
            productFancy();
            quantity();
        }
    }
})();

jQuery(document).ready(function () {
    SLIDESHOWS._();
    OPTIONS._();
    WEBS._();
});

