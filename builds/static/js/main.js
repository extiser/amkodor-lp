$(document).ready(function () {
    $('#slider').slick({
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        draggable: true,
        fade: true,
        dots: false
    });
});
// jQuery(document).ready(function ($) {
//     $('.top-menu__item').click(function () {
//         if ($(this).hasClass('active')) {
//             $('.top-menu-inside, .top-menu__item, .mask').removeClass('active');
//         } else {
//             if ($(this).next('.top-menu-inside').length == 1) {
//                 $(this).toggleClass('active').siblings().removeClass('active');
//                 $(this).next('.top-menu-inside').toggleClass('active');
//                 $('.mask').addClass('active');
//             } else {
//                 $(this).siblings().removeClass('active');
//                 $('.mask').removeClass('active');
//             }
//         }
//     });
//     $('.mask').click(function () {
//         $('.top-menu-inside, .top-menu__item, .mask').removeClass('active');
//     });
// });