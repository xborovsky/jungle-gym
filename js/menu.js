var menuDisplayHandler = (function() {
    var $navbarContainer = $('#navbar').parent(),
        $navbarBrand = $navbarContainer.find('.navbar-brand');

    var init = function() {
        $navbarBrand.attr('style', 'display: none !important');

        if ($(window).width() < 768) {
            showMobileMenu();
        }
    };

    var showMobileMenu = function() {
        $navbarContainer.addClass('navbar-fixed-top');
        $navbarBrand.attr('style', 'display: block !important');
    };

    return {
        init : init
    };
})();