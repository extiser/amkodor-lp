jQuery(document).ready(function ($) {
    $('.catalog-tabs__item').eq(0).addClass('active');
    $('.catalog-tabs-content-box').eq(0).addClass('active');
    $('.catalog-tabs__item').click(function () {
        var itemCount = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.catalog-tabs-content').find('.catalog-tabs-content-box').eq(itemCount).addClass('active').siblings().removeClass('active');
    });
});