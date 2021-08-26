(function ($) {

    /* закрытие меню при клике */
    let windowWidth = $(window).width();

    $(window).on('resize', () => (windowWidth = $(window).width()));

    let $navbarLink = $('#header-navbar-collapse a');
    let $navbarToggler = $('.navbar-toggler');
    let $headerNavbarCollapse = $('#header-navbar-collapse');

    $navbarLink.on('click', () => {
        if (windowWidth < 992) {
            $navbarToggler.addClass('collapsed');
            $headerNavbarCollapse.removeClass('show');
        }
    });

    /* подключение плагина анимации */
    AOS.init({
        disable: 'mobile',
        duration: 600,
        easing: 'ease-in-sine'
    });
})(jQuery);