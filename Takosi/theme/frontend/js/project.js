var SLIDESHOW = (function() {



    var slideBanner = function() {
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
    var news = function() {
        var swiper = new Swiper(".news-slide", {
            slidesPerView: 1,
            grid: {
                rows: 4,
            },
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".news-next",
                prevEl: ".news-prev",
            },
        });
    }
    var newProduct = function() {
        var swiper = new Swiper(".newSlide", {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".btn-pro-next",
                prevEl: ".btn-pro-prev",
            },
        });
    }
    var pro_detail = function() {
        if ($('.detail_pro_2').length > 0) {
            var swiper = new Swiper(".detail_pro_2", {
                loop: true,
                spaceBetween: 20,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });
        }
        if ($('.detail_pro_1').length > 0) {
            var swiper2 = new Swiper(".detail_pro_1", {
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
        _: function() {
            slideBanner();
            news();
            newProduct();
            pro_detail();
        }
    }
})();
var WEBS = (function() {
    // var scrollHeader = function() {
    //     var prevScrollpos = window.pageYOffset;
    //     window.onscroll = function() {
    //         var currentScrollPos = window.pageYOffset;
    //         if (prevScrollpos > currentScrollPos) {
    //             document.getElementById("header").style.top = "0";

    //         } else {
    //             document.getElementById("header").style.top = "-150px";
    //         }
    //         prevScrollpos = currentScrollPos;
    //     }
    // }

    var scrollHeader = function() {
        if ($('.header').length > 0) {
            $(window).scroll(function() {
                var header = $('.header').height();
                var height = $(this).scrollTop();

                if (height > header) {
                    $('.header-top').hide();
                    $('.header').addClass('fixed');
                } else {
                    $('.header-top').show();
                    $('.header').removeClass('fixed');
                }
            });
        }
    }
    var backTop = function() {

        const buttonToTop = document.querySelector('.back-to-top');



        const goToTop = () => {

            scrollTo(top);

        };



        const showToTopButton = () => {

            if (

                document.body.scrollTop > 300 ||

                document.documentElement.scrollTop > 300

            ) {

                buttonToTop.classList.remove('button-to-top_hidden');

            } else {

                buttonToTop.classList.add('button-to-top_hidden');

            }

        };



        buttonToTop.addEventListener('click', goToTop);



        window.addEventListener('scroll', showToTopButton);

    }

    return {
        _: function() {
            scrollHeader();
            backTop();
        }
    }
})();
var MENU = (function() {

    var menu = function() {
        if ($(document).width() <= 991) {
            $('.menu').find("ul>li>ul").hide();
            $('.menu').find("ul li").each(function() {
                if ($(this).find("ul>li").length > 0) {
                    $(this).prepend('<i class=" fa fa-angle-right smooth"></i>');
                    $(this).addClass('active');
                }
            });
        }
        $('.menu').find('li i').click(function(event) {

            var ul = $(this).nextAll("ul");

            if (ul.is(":hidden") === true) {

                ul.slideDown(200);
            } else {
                ul.slideUp(200);
            }

            if ($(this).hasClass('fa-angle-right')) {
                $(this).addClass('fa-angle-down');
                $(this).removeClass('fa-angle-right');
                return;
            } else {
                $(this).addClass('fa-angle-right');
                $(this).removeClass('fa-angle-down');
                return;
            }
        });

    }
    var openMenuMobile = function() {
        if ($('.nav-menu').length > 0) {
            $('.show_menu').click(function() {
                $('.header-body').addClass('active');
                $('body').addClass('overflow-hidden');
                $('.nav-menu').toggleClass('nav_active');
                $('.menu_container').toggleClass('active');
                $('.nav-menu').toggleClass('col_active');
                $('.bg-menu').toggleClass('active');
                $('.bg-menu').addClass('smooth');
                $('.nav-menu').addClass('smooth');
                $('.header-body').addClass('smooth');

            });
        }
    }
    var closeMenuMobile = function() {
        if ($('.nav-menu').length > 0) {
            $('.bg-menu').click(function() {
                $('body').removeClass('overflow-hidden');
                $('.nav-menu').removeClass('nav_active');
                $('.menu_container').removeClass('active');
                $('.nav-menu').removeClass('col_active');
                $('.bg-menu').removeClass('active');
                $('.header-body').removeClass('active');
            });
        }
    }
    var siderbar = function() {
        $('.categories').find("ul>li>ul").hide();
        $('.categories').find("ul li").each(function() {
            if ($(this).find("ul>li").length > 0) {
                $(this).prepend('<i class=" fa fa-plus smooth"></i>');
                $(this).addClass('active');
            }
        });
        $('.categories').find('li i').click(function(event) {

            var ul = $(this).nextAll("ul");

            if (ul.is(":hidden") === true) {

                ul.slideDown(200);
            } else {
                ul.slideUp(200);
            }

            if ($(this).hasClass('fa-plus')) {
                $(this).addClass(' fa-minus');
                $(this).removeClass(' fa-plus');
                return;
            } else {
                $(this).addClass(' fa-plus');
                $(this).removeClass(' fa-minus');
                return;
            }
        });
    }
    return {
        _: function() {
            menu();
            openMenuMobile();
            closeMenuMobile();
            siderbar();
        }
    }

})();
$(document).ready(function() {
    MENU._();
    SLIDESHOW._();
    WEBS._();
});

function youtubeParser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}
$(document).on('click', '.video_add', function(e) {

    var html = '<iframe width="80%" src="https://www.youtube.com/embed/' + youtubeParser($(this).attr('data-link')) + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    $(this).append(html);
})